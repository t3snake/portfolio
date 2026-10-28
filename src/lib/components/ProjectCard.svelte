<script lang="ts">
	import type { Project } from '#lib/data/projects.ts';

	let { project }: { project: Project } = $props();
</script>

<article>
	<h2>
		<a href={project.github_url}>{project.title}</a>
	</h2>

	<p>{project.short_description}</p>
</article>

<style>
	article {
		height: 100%;
		padding: 1.5rem;
		border: 1px solid #d4d4d4;
		border-radius: 0.75rem;
	}

	h2 {
		margin: 0 0 0.75rem;
		font-size: 1.25rem;
		font-weight: 600;
	}

	a {
		text-decoration: underline;
	}

	p {
		margin: 0;
		line-height: 1.6;
	}
</style>
