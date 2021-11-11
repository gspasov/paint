<script lang="ts">
	let gridSize = 120
	let isMouseDown = false;
	let grid = createGrid(gridSize);
	let color = "#ff3e00"

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
		return changeBackgroundColor(e, color)
	}

	function changeBackgroundColor(e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement}, color: string) {
		if (isMouseDown) {
			const key = e.currentTarget.getAttribute("id")
			grid = {...grid, [key]: {"background-color": color}}
		}
	}
</script>

<main>
	<h1>Paint</h1>
	<div class="parent">
		<div class="menu">
			<button class="color-btn" on:click={() => color = "#ff3e00"} style="--color: #ff3e00"></button>
			<button class="color-btn" on:click={() => color = "red"} style="--color: red"></button>
			<button class="color-btn" on:click={() => color = "green"} style="--color: green"></button>
			<button class="color-btn" on:click={() => color = "blue"} style="--color: blue"></button>
			<button on:click={() => grid = createGrid(gridSize)} style="--color: #ff3e00">clear</button>
		</div>
		<div class="canvas" style="--gridSize: {gridSize}">
			{#each Object.entries((grid)) as _, i}
				<div 
				id={i.toString()} 
				class="block" 
				on:mouseup={up}
				on:mousedown={down}
				on:mouseenter={(e) => changeBackgroundColor(e, color)} 
				style={`background-color: ${grid[i.toString()]["background-color"]}`}
				>
				</div>
			{/each}
		</div>
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

	button {
		border: none;
  	vertical-align: top;
		padding: 20 20;
		text-align: center;
		outline: 1px solid transparent;
		outline-offset: 2px !important;
		background: var(--color);
		height: 35px;
		width: 80px;
		margin: 0;
		font-size: 14px;
		color: #fdf6e3;
	}

	button.color-btn {
		width: 35px;
		height: 35px;
	}

	button:hover {
		border: 2px solid black;
	}
	
	button.color-btn:hover {
		border: 2px solid #fdf6e3;
	}
	
	button:active {
		background: #fdf6e3;
	}

	div.parent {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	div.menu {
		justify-content: center;
		margin-bottom: 10px;
	}
	
	div.canvas {
		justify-content: center;
		user-select: none;
		display: inline-grid;
		grid-template-columns: repeat(var(--gridSize), 0.4em);
		grid-template-rows: repeat(var(--gridSize), 0.4em);
	}

	div.block {
		background-color: black;
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>