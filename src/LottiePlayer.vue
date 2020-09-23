<template>
	<span ref="LottiePlayer" />
</template>

<script>
import '@lottiefiles/lottie-player';

export default {
	props: {
		src: {
			type: [Object, String],
			required: true
		},
		options: {
			type: Object,
			required: false,
			default: () => {}
		}
	},
	data() {
		return {
			player: null
		};
	},
	watch: {
		src: 'render',
		options: 'render'
	},
	created() {
		this.render();
	},
	methods: {
		async render() {
			if (this.player) this.player.remove();
			await this.$nextTick(); // wait for elements to render
			this.player = document.createElement('lottie-player');
			if (this.options) {
				Object.keys(this.options).forEach(key => {
					if (['width', 'height'].includes(key)) {
						this.player.style[key] = this.options[key];
					} else {
						this.player.setAttribute(key, this.options[key]);
					}
				});
			}
			this.player.src = this.src;
			this.$refs.LottiePlayer.appendChild(this.player);
		}
	}
};
</script>
