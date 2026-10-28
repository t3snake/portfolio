<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
    <nav aria-label="Main Navigation">
        <a href="/">Projects</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
    </nav>
</header>

<main>
    {@render children()}
</main>

<style>
	header,
	main {
		max-width: 72rem;
		margin-inline: auto;
		padding: 1.5rem;
	}

	nav {
		display: flex;
		gap: 1.5rem;
	}

	nav a {
		text-decoration: underline;
		text-underline-offset: 0.25rem;
	}
</style>
