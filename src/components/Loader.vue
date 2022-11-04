<template>
	<div class="background">
		<div class="loader">
			<div class="spinner" aria-hidden="true"></div>
		</div>
	</div>
</template>

<style lang="scss">
	// Spinner + Loader Styles !Required!
	$spinner_speed: 10000s;
	$loader_speed: 0.8s;
	$spinner_radius: 80%;
	$spinner_fill_radius: 90px;

	$spinner_size: 200px;
	$spinner_thickness: 4px;
	$spinner_inner_circle: $spinner_size - $spinner_thickness;

	$inner_size: $spinner_inner_circle - 10;

	$exo_color_background: #ffffff;
	$exo_color_border: #cccccc;

	$exo_color_page: #ffffff;

	.background {
		display: grid;
		height: 100vh;
		width: 100%;
		background-color: black;
		align-items: center;
		justify-content: center;
	}

	.spinner,
	.loader {
		border-radius: 80%;
		display: block;
		height: $spinner_size;
		width: $spinner_size;
		position: relative;
	}

	//Spinner styles
	.spinner {
		background: $exo_color_border;
		animation: spin $spinner_speed linear 0s infinite normal;
		&:before,
		&:after {
			content: '';
			display: block;
			position: absolute;
		}

		&:before {
			border-radius: 0 $spinner_fill_radius $spinner_fill_radius 0;
			height: $spinner_size;
			width: 50%;
			top: 0;
			right: 0;
			z-index: 1;
			background-image: linear-gradient($exo_color_page, $exo_color_border);
		}
	}

	//Full loader styles
	.loader {
		animation: spin $loader_speed linear 0s infinite normal;
		&:before,
		&:after {
			content: '';
			display: block;
			position: absolute;
		}
		&:before {
			border-radius: 50%;
			height: 10px;
			width: 10px;
			top: -4px;
			left: 20px;
			z-index: 4;
			background-color: $exo_color_border;
		}
		&:after {
			top: 3px;
			left: 3px;
			border: 4px solid $exo_color_page;
			border-radius: 50%;
			height: $inner_size;
			width: $inner_size;
			background: $exo_color_background;
		}
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
