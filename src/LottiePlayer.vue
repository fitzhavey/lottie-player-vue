<template>
	<span ref="LottiePlayer" />
</template>

<script>
import '@lottiefiles/lottie-player';

export default {
	props: {
		src: { required: true },
		options: {
			type: Object,
			required: false,
			default: () => {}
		}
	},
	data() {
		return {
			player: null,
			animation: null
		};
	},
	methods: {
		async render() {
			if (this.player) this.player.remove();
			await this.$nextTick(); // wait for elements to render
			this.player = document.createElement('lottie-player');
			Object.keys(this.options).forEach(key => {
				if (['width', 'height'].includes(key)) {
					this.player.style[key] = this.options[key];
				} else {
					this.player.setAttribute(key, this.options[key]);
				}
			});
			this.player.src = this.animation;
			this.$refs.LottiePlayer.appendChild(this.player);
		}
	},
	watch: {
		src: 'render',
		options: 'render'
	},
	created() {
		this.render();
	}
};
</script>
