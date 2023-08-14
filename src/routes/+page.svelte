<script>
  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  let messages = supabase
    .from('messages')
    .select()
    .then((resp) => {
      return resp.data ?? [];
    });

  let userData = supabase.auth.getUser();
</script>

<ul>
  {#await messages}
    <li>Loading Messages</li>
  {:then messages}
    {#each messages as message}
      <li>{message}</li>
    {/each}
  {/await}
</ul>

{#await supabase.auth.getUser()}
  <p>Loading User Data...</p>
{:then { data }}
  <p>{data.user?.email}</p>
{:catch}
  <p>Failed to load user data</p>
{/await}
