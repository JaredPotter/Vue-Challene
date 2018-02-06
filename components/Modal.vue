<template>
	<div>
		<!-- Button trigger modal -->
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" @click="spin()">
		Launch demo modal
		</button>
		<!-- Modal -->
		<div class="modal" id="myModal" role="dialog">

		</div>
	</div>
</template>

<script>
	import { TweenMax, TimelineMax, Power0 } from 'gsap';

	export default {
		data() {
			return {
				isSpinning: false
			};
		},
		methods: {
			spin() {
				if(this.isSpinning == false) {

					CSSPlugin.useSVGTransformAttr = true;
					TweenMax.to('#modal_svg', 5, {x: 0, y: 0});

					// TweenMax.to('#myModal', 10, { rotation: "+=360", repeat:-1, ease: Linear.easeNone, transformOrigin:"50% 50%" });
					
					//TweenMax.to('#myModal', 1, {rotation:360, repeat:-1})



					this.isSpinning = true;
				}
			}
		}
	};
</script>