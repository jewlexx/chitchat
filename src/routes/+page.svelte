<script>
	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	let messages = supabase.from('messages').select().then(console.log);
	supabase.auth.getUser().then((user) => console.log(user.data.user?.email));
</script>

<ul>
	<!-- {#each messages as message}
		<li>{message}</li>
	{/each} -->
</ul>
