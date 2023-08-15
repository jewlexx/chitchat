<script lang="ts">
  import Message from '$lib/components/Message.svelte';

  export let data;

  let { supabase } = data;

  let messages = supabase
    .from('messages')
    .select()
    .then((resp) => {
      return resp.data ?? [];
    });
</script>

<ul>
  {#await messages}
    <li>Loading Messages</li>
  {:then messages}
    {#each messages as message}
      <Message {data} {message} />
    {/each}
  {/await}
</ul>

<!-- {#await supabase.auth.getUser()}
  <p>Loading User Data...</p>
{:then { data }}
  <p>{data.user?.email}</p>
{:catch}
  <p>Failed to load user data</p>
{/await} -->
