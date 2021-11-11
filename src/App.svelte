<script lang="ts">
	import Canvas from "./components/Canvas.svelte";
	import Menu from "./components/Menu.svelte"
</script>

<main>
	<h1>Paint</h1>
	<div class="parent">
		<Menu />
		<Canvas />		
	</div>
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin: 40px 0px 48px 0px;
	}

	div.parent {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>