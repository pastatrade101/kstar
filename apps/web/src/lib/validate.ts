import type { Field } from '@kstar/content';
import { site } from '@kstar/content';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+]?[\d\s().-]{7,20}$/;

export type FormResult = {
  values: Record<string, string>;
  errors: Record<string, string>;
};

/** Server-side validation shared by both forms, using the copy's microcopy. */
export function validate(fields: Field[], data: FormData): FormResult {
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};
  const m = site.formMicrocopy;

  for (const field of fields) {
    const value = String(data.get(field.name) ?? '').trim();
    values[field.name] = value;

    if (field.required && !value) {
      errors[field.name] = m.required;
      continue;
    }
    if (!value) continue;
    if (field.type === 'email' && !EMAIL.test(value)) errors[field.name] = m.invalidEmail;
    if (field.type === 'tel' && !PHONE.test(value)) errors[field.name] = m.invalidPhone;
    if (field.type === 'select' && field.options && !field.options.includes(value)) {
      errors[field.name] = m.required;
    }
  }

  return { values, errors };
}
