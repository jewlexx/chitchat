<script lang="ts">
	import type { AuthResponse } from '@supabase/supabase-js';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email: string;
	let password: string;

	let userResolve: (value: AuthResponse) => void;
	let userReject: (error: any) => void;
	export const user = new Promise<AuthResponse>((resolve, reject) => {
		userResolve = resolve;
		userReject = reject;
	});

	const handleSignUp = async () => {
		await supabase.auth
			.signUp({
				email,
				password,
				options: {
					emailRedirectTo: `${location.origin}/auth/callback`
				}
			})
			.then(userResolve)
			.catch(userReject);
	};

	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({
			email,
			password
		});
	};

	const handleSignOut = async () => {
		await supabase.auth.signOut();
	};
</script>

{#await user}
	<form on:submit|preventDefault={handleSignUp}>
		<input name="email" bind:value={email} />
		<input type="password" name="password" bind:value={password} />
		<button>Sign up</button>
		<button on:click|preventDefault={handleSignIn}>Sign in</button>
	</form>

	<button on:click={handleSignOut}>Sign out</button>
{:then userInfo}
	<h1>You're Signed In!</h1>
	<p>{userInfo.data.user?.email}</p>
{/await}
