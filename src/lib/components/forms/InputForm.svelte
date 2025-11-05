<script lang="ts">
  export let value: string | number | undefined
  export let type: 'text' | 'number' | 'password' | 'email' | 'file' = 'text' 
  export let label: string = 'ini label form'
  export let classCustom:string = ''
</script>

<label class={`label flex flex-col gap-1 ${classCustom}`}>
  <span class="label-text">{label}</span>
  <input
    class="input"
    {type}
    placeholder="Input"
    bind:value
  />
</label>
