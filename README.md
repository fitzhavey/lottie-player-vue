# Lottie Player Vue
A vue wrapper for [@lottiefiles/lottie-player](https://www.npmjs.com/package/@lottiefiles/lottie-player). It makes it simple to include beautiful animations in your web apps using https://lottiefiles.com.

It is published on npm at: https://www.npmjs.com/package/lottie-player-vue

<img src="./animation.gif" alt="animation" width="300px">

## Installation

Install [lottie-player-vue](https://www.npmjs.com/package/lottie-player-vue):
```bash
npm install --save lottie-player-vue
```

Include in it either globally (in `main.js`) or a Vue component.
_Global_:
```js
// main.js
// ...
import LottiePlayer from 'lottie-player-vue';

Vue.use(LottiePlayer);
// ...
```
_Component_:
```js
// MyComponent.vue
// ...
import LottiePlayer from 'lottie-player-vue';

export default {
	components: {
		LottiePlayerItem
	},
// ...
```

And then add it to your template:
```html
	<div>
		<lottie-player :data="jsonSource"/>
	</div>
```

## Properties
Customisation of the tree is configured with the following properties:
| Name    | Default      | Description                                 |
|---------|--------------|---------------------------------------------|
| src     | **required** | JSON animation, from http://lottiefiles.com |
| options | `{}`         | _documented below_                          |

The options object matches the properties of the [offical lottiefiles documentation](https://www.npmjs.com/package/@lottiefiles/lottie-player#properties) exactly except for that we also support a `width` and `height` property. These will be mapped directly to the `width` and `height` of the animation.

e.g.
```js
// options
{
	autoplay: true,
	speed: 2.5,
	width: '100px'
}
```