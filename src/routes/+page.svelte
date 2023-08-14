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
