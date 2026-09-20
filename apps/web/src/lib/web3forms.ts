import { env } from '$env/dynamic/private';

const DEFAULT_ENDPOINT = 'https://api.web3forms.com/submit';

export type Web3FormsResult =
  { ok: true } | { ok: false; reason: 'not-configured' | 'rejected' | 'network'; detail?: string };

type SendOptions = {
  /** Subject line shown in the receiving inbox. */
  subject: string;
  /** Name of the person submitting, used as the sender label. */
  fromName?: string;
  /** Address the reply should go to. */
  replyTo?: string;
  /** Human-readable label → value pairs, rendered in the email body. */
  data: Record<string, string>;
  /** Injectable for tests. */
  fetchFn?: typeof fetch;
};

/**
 * Post a submission to Web3Forms (https://web3forms.com).
 *
 * The access key is read from the server environment, so it never reaches the
 * browser and the form keeps working without JavaScript.
 */
export async function sendToWeb3Forms({
  subject,
  fromName,
  replyTo,
  data,
  fetchFn = fetch
}: SendOptions): Promise<Web3FormsResult> {
  const accessKey = env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.warn(
      '[web3forms] WEB3FORMS_ACCESS_KEY is not set — submission was not delivered. ' +
        'Add the key from https://web3forms.com to your .env file.'
    );
    return { ok: false, reason: 'not-configured' };
  }

  const payload: Record<string, string> = {
    access_key: accessKey,
    subject,
    ...data
  };
  if (fromName) payload.from_name = fromName;
  if (replyTo) payload.replyto = replyTo;

  try {
    const response = await fetchFn(env.WEB3FORMS_ENDPOINT || DEFAULT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000)
    });

    const result = (await response.json().catch(() => null)) as {
      success?: boolean;
      message?: string;
    } | null;

    if (!response.ok || !result?.success) {
      console.error('[web3forms] rejected submission', response.status, result?.message);
      return { ok: false, reason: 'rejected', detail: result?.message };
    }

    return { ok: true };
  } catch (error) {
    console.error('[web3forms] request failed', error);
    return { ok: false, reason: 'network', detail: String(error) };
  }
}

/** Map raw form values onto their copy-deck labels for a readable email body. */
export function labelled(
  fields: { name: string; label: string }[],
  values: Record<string, string>
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const field of fields) {
    out[field.label] = values[field.name]?.trim() || '—';
  }
  return out;
}
