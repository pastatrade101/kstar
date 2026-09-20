<script lang="ts">
  import { enhance } from '$app/forms';
  import { Button, Field as FieldInput, Icon, Reveal, SectionHeading } from '@kstar/ui';
  import { site } from '@kstar/content';
  import type { Field } from '@kstar/content';

  let {
    eyebrow = '',
    title = '',
    text = '',
    paragraphs = [] as string[],
    fields = [] as Field[],
    submitLabel = 'Send',
    success = { title: '', paragraphs: [] as string[] },
    form = null as any
  } = $props();

  let submitting = $state(false);

  const micro = site.formMicrocopy;
  const values = $derived<Record<string, string>>(form?.values ?? {});
  const errors = $derived<Record<string, string>>(form?.errors ?? {});
  const body = $derived(paragraphs.length ? paragraphs : text ? [text] : []);
</script>

<section class="section">
  <div class="container-k">
    <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div class="lg:col-span-4">
        <SectionHeading {eyebrow} {title} paragraphs={body} />
      </div>

      <div class="lg:col-span-8">
        {#if form?.success}
          <Reveal>
            <div class="panel panel-glass px-8 py-14 text-center">
              <span class="icon-box mx-auto"><Icon name="check" size={30} stroke={2.2} /></span>
              <h3 class="headline-md mt-6">{success.title}</h3>
              <span class="small-border"></span>
              {#each success.paragraphs as paragraph}
                <p class="mx-auto mt-3 max-w-lg text-lg leading-relaxed first:mt-0">{paragraph}</p>
              {/each}
            </div>
          </Reveal>
        {:else}
          <Reveal delay={80}>
            <form
              method="POST"
              class="panel p-6 sm:p-10"
              use:enhance={() => {
                submitting = true;
                return async ({ update }) => {
                  await update({ reset: false });
                  submitting = false;
                };
              }}
            >
              {#if form?.failed}
                <p class="field-error mb-6 text-base">{micro.error}</p>
              {/if}

              <!-- Honeypot: hidden from people, irresistible to bots. -->
              <label class="honeypot" aria-hidden="true">
                <span>Leave this field empty</span>
                <input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" />
              </label>

              <div class="grid gap-6 sm:grid-cols-2">
                {#each fields as field}
                  <FieldInput
                    {field}
                    value={values[field.name] ?? ''}
                    error={errors[field.name] ?? ''}
                  />
                {/each}
              </div>

              <div class="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  type="submit"
                  label={submitting ? micro.loading : submitLabel}
                  variant="primary"
                  disabled={submitting}
                />
                <p class="text-[15px]">
                  Fields marked <span class="text-primarylight">*</span> are required.
                </p>
              </div>
            </form>
          </Reveal>
        {/if}
      </div>
    </div>
  </div>
</section>
