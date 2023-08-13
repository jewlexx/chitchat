<script>
	export let data;
</script>

<ul>
	{#each data.messages as message}
		<li>{message}</li>
	{/each}
</ul>
