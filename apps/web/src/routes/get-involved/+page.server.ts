import { fail } from '@sveltejs/kit';
import { getInvolved } from '@kstar/content';
import { validate } from '$lib/validate';
import type { Actions } from './$types';

export const prerender = false;

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const { values, errors } = validate(getInvolved.fields, data);

    if (Object.keys(errors).length) {
      return fail(400, { values, errors, failed: true });
    }

    // TODO: forward the submission to the Kstar inbox or CRM.
    // Kept side-effect free until the delivery channel is configured.
    console.info('[get-involved] submission', values);

    return { success: true };
  }
};
