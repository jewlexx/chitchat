<script lang="ts">
  import type { Database } from '../../database.types';

  export let data: App.PageData;

  let { supabase } = data;

  export let message: Database['public']['Tables']['messages']['Row'];

  const user = supabase
    .from('users')
    .select('*')
    .then((resp) => {
      if (!resp.data || resp.data?.length > 0) {
        return {
          id: message.user_id,
          status: 'OFFLINE',
          username: 'Anonymous',
        };
      } else {
        return resp.data[0];
      }
    });
</script>

{#await user}
  <li>Loading Messages</li>
{:then userData}
  <li class="message"><span>{userData.username} {userData.status}</span> {message.message}</li>
{/await}

<style lang="scss">
  .message {
    display: flex;
    flex-direction: column;

    span {
      color: red;
    }
  }
</style>
