<script lang="ts">
	import ProjectCard from '#lib/components/ProjectCard.svelte'
	import { projects } from '#lib/data/projects.ts';
</script>

<svelte:head>
	<title>Projects - t3snake.dev</title>
	<meta name="description" content="A collection of my projects and experiments." />
</svelte:head>

<h1>Tarun Menon</h1>

<section class="project-grid" aria-label="Project List/Grid">

	{#each projects as project (project.id)}
		<ProjectCard {project} />
	{/each}
</section>

<style>
	h1 {
		margin-bottom: 2rem;
		font-size: 2rem;
		font-weight: 700;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.5rem;
	}

	@media (max-width: 900px) {
		.project-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 600px) {
		.project-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
