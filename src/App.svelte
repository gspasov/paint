<script lang="ts">
	let gridSize = 80
	let isMouseDown = false;
	let grid = createGrid(gridSize);

	function createGrid(size: number): Record<string, Record<string, string>> {
		return Object.fromEntries([...Array((size*size)).keys()].map((key) => {
			return [key.toString(), {"background-color": "#000000"}]
		}))
	}

	function up(_e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement}): void {
		isMouseDown = false;
	}

	function down(e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement}): void {
		isMouseDown = true;
		return changeBackgroundColor(e, "#ff3e00")
	}

	function changeBackgroundColor(e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement}, color: string) {
		if (isMouseDown) {
			const key = e.currentTarget.getAttribute("id")
			grid = {...grid, [key]: {"background-color": color}}
		}
	}
</script>

<main>
	<h1>Canvas</h1>
	<div class="ground" style="--gridSize: {gridSize}">
		{#each Object.entries((grid)) as _, i}
			<div 
				id={i.toString()} 
				class="block" 
				on:mouseup={up}
				on:mousedown={down}
				on:mouseenter={(e) => changeBackgroundColor(e, "#ff3e00")} 
				style={`background-color: ${grid[i.toString()]["background-color"]}`}></div>
		{/each}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.ground {
		user-select: none;
		display: inline-grid;
		grid-template-columns: repeat(var(--gridSize), 0.6em);
		grid-template-rows: repeat(var(--gridSize), 0.6em);
	}

	.block {
		background-color: black;
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>