<script lang="ts">
  import type { Field } from '@kstar/content';

  let {
    field,
    value = '',
    error = ''
  }: { field: Field; value?: string; error?: string } = $props();

  const id = $derived(`field-${field.name}`);
</script>

<div class={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
  <label class="field-label" for={id}>
    {field.label}{#if field.required}<span class="text-primarylight"> *</span>{/if}
  </label>

  {#if field.type === 'textarea'}
    <textarea
      {id}
      name={field.name}
      rows="5"
      placeholder={field.placeholder}
      required={field.required}
      class="field-input resize-y"
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={error ? `${id}-error` : undefined}>{value}</textarea
    >
  {:else if field.type === 'select'}
    <select
      {id}
      name={field.name}
      required={field.required}
      class="field-input"
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
    >
      <option value="" disabled selected={!value}>Select an option</option>
      {#each field.options ?? [] as option}
        <option value={option} selected={value === option}>{option}</option>
      {/each}
    </select>
  {:else}
    <input
      {id}
      name={field.name}
      type={field.type}
      placeholder={field.placeholder}
      required={field.required}
      {value}
      class="field-input"
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
    />
  {/if}

  {#if error}
    <span class="field-error" id={`${id}-error`}>{error}</span>
  {/if}
</div>
