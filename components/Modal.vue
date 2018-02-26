<template>
	<div>
		<div v-if="!displayed">
			<svg class="modal-button" viewBox="0 0 300 100" @click="showModal()">
				<text x="45" y="65" font-family="Verdana" font-size="36" stroke="black" stroke-width="0.01">{{ buttonText }}</text>
			</svg>
		</div>
		<div v-if="displayed">
			<svg class="modal-content" viewBox="0 0 300 100">
			 	<text class="drawMe" x="280" y="20" stroke="black" stroke-width="0.1" font-family="Verdana" cursor="pointer" @click="closeModal()">X</text>
			 	<text class="drawMe" x="150" y="20" stroke="black" stroke-width="0.1" font-family="Verdana" text-anchor="middle">{{title}}</text>
			 	<text class="drawMe" stroke="black" stroke-width="0.1" x="150" y="50" font-family="Verdana" text-anchor="middle">{{body}}</text>
			 	<rect class="drawMe" x="250" y="70" width="40" height="20" fill="#0275d8" cursor="pointer" @click="closeModal()"/>
			 	<text class="drawMe" x="270" y="85" font-size="12" fill="white" font-family="Verdana" cursor="pointer" text-anchor="middle" @click="closeModal()">{{modalButtonText}}</text>
			</svg>
		</div>
	</div>
</template>

<script>

	import TweenMax from 'gsap'
	import DrawSVGPlugin from "gsap/DrawSVGPlugin"

	export default {
		data() {
			return {
				displayed: false,
				buttonText: 'Open Modal',
				title: 'Modal title',
				body: 'This is a better modal body.',
				modalButtonText: 'Close'
			};
		},
		mounted () {
		},
		methods: {
			showModal() {
				if(this.displayed == false) {
					document.body.className += 'modal-open';
					var darkDiv = document.createElement("div");
					darkDiv.className = 'modal-backdrop in';
					darkDiv.id = 'dark-div';
					document.body.appendChild(darkDiv);
					this.displayed = true;

					var tl = new TimelineLite();
					tl.to('.modal-button', 0.75, {rotation: 360, scale: 5, transformOrigin:"50% 50%", y: -420, onComplete:function() {
					    var tl = new TimelineLite();
					    tl.fromTo(".drawMe", 0.75, {rotation:360, drawSVG:"100%", opacity: 0, stroke:"white", transformOrigin:"50% 50%"}, {opacity: 1});
					}});
				}
			},
			closeModal() {
				if(this.displayed == true) {
					document.body.className = '';
					document.getElementById("dark-div").remove();
					var shapes = $("close-x, title-text, body-text, close-button, close-x");

					var tl = new TimelineLite();
					tl.staggerTo(".drawMe", 0.5, {scale:1.5, opacity:0})
					.to('.modal-content', 1.25, {rotation: -360, scale: 1, transformOrigin:"50% 50%", y: 0}, 0.5);
					
					this.displayed = false;

					tl.staggerFrom(".drawMe", 0.5, {scale:1.5, opacity:1}, 1);
				}
			}
		}
	};
</script>

<style>
.modal-content {
	width: 120px;
	height: 40px;
	padding: 0;
	border: 0;
	opacity: 0.8;
	z-index: 5;
	position: fixed;
    cursor: default;
    /*border-radius: 4px;*/
    /*border: 1px solid #3b8070;*/
    display: inline-block;
    stroke-width: 1px;
}

.drawMe {
	opacity: 0;
}

#dark-div {
	opacity: 0.7;
}

.modal-button {
	width: 120px;
	height: 40px;
	padding: 0;
	border: 0;
	opacity: 1;
	z-index: 5;
	display: inline-block;
	position: fixed;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    stroke-width: 1px;
}

.modal-backdrop.in{
	position: fixed;
	z-index: -1;
}

</style>
