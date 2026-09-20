import { fail } from '@sveltejs/kit';
import { contact } from '@kstar/content';
import { validate } from '$lib/validate';
import { labelled, sendToWeb3Forms } from '$lib/web3forms';
import type { Actions } from './$types';

export const prerender = false;

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    // Honeypot: only a bot fills this in, so accept and drop it.
    if (String(data.get('botcheck') ?? '').trim()) {
      return { success: true };
    }

    const { values, errors } = validate(contact.fields, data);

    if (Object.keys(errors).length) {
      return fail(400, { values, errors, failed: true });
    }

    const result = await sendToWeb3Forms({
      subject: `Kstar website — ${values.enquiryType}: ${values.subject}`,
      fromName: values.fullName,
      replyTo: values.email,
      data: labelled(contact.fields, values)
    });

    if (!result.ok) {
      return fail(502, { values, errors: {}, failed: true });
    }

    return { success: true };
  }
};
