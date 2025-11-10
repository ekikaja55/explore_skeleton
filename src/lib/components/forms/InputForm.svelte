<script lang="ts">
	import type { Input } from '$lib';

  let {
    type = "text",
    label = 'Contoh Label',
    classCustom,
    placeholder = 'Contoh Placeholder',
    value = $bindable()
  }:Input = $props()
</script>

<label class={`label flex flex-col gap-1 ${classCustom}`}>
  <span class="label-text">{label}</span>
  <input
    class="input"
    {type}
    {placeholder}
    bind:value
  />
</label>
