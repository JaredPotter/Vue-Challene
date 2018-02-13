<template>
	<div>
		<!-- Button trigger modal -->
		<!-- <button id="modal-button" type="button"> -->
		<div v-if="!displayed">
			<svg class="modal-button" viewBox="0 0 300 100" @click="showModal()">
				<text x="45" y="65" font-family="Verdana" font-size="36">{{ buttonText }}</text>
			</svg>
		</div>
		<div v-if="displayed">
			<svg class="modal-content" viewBox="0 0 300 100">
			 	<text x="280" y="20" font-family="Verdana" font-size="12" cursor="pointer" @click="closeModal()">X</text>
			 	<text x="150" y="20" font-family="Verdana" font-size="12" text-anchor="middle">{{title}}</text>
			 	<text x="150" y="50" font-family="Verdana" font-size="12" text-anchor="middle">{{body}}</text>

			 	<rect id="modal-rect" x="100" y="70" width="40" height="20" stroke="orange" stroke-width="6" fill="#0275d8" cursor="pointer" @click="closeModal()"/>
			 	<text x="120" y="85" fill="white" font-family="Verdana" font-size="12" cursor="pointer" text-anchor="middle" @click="closeModal()">{{modalButtonText}}</text>
			</svg>
		</div>
		<div>
			<svg>
				<rect id="myRect" fill="none" stroke-width="6" stroke="purple" width="100" height="100"/>
				<path id="path" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" stroke-width="5" fill="transparent"/>
			</svg>
		</div>
	</div>
</template>

<script>
	// import { TweenLite , drawSVGPlugin } from 'gsap';

	// import { TweenLite , drawSVGPlugin } from 'gsap/plugins/DrawSVGPlugin';
	// import TweenLite from 'gsap/TweenLite';
	import { TweenLite, DrawSVGPlugin } from "gsap"
	// import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
// var DrawSVGPlugin = require("gsap/src/minified/plugins/DrawSVGPlugin");
	// import DrawSVGPlugin from 'gsap/src/minified/plugins/DrawSVGPlugin.min.js';
	// import 'gsap/DrawSVGPlugin';
	// import DrawSVGPlugin from 'gsap';
	// var DrawSVGPlugin = require("gsap/plugins/drawsvgplugin"); 
	// import DrawSVGPlugin from 'gsap/plugins/drawSVGPlugin'; 
	// import { drawSVG } from 'gsap/plugins/DrawSVGPlugin';
	// import { drawSVGPlugin } from 'gsap/plugins';

	// nope
	// import '../node_modules/gsap/plugins/DrawSVGPlugin.js';
	// import 'gsap/DrawSVGPlugin';
	// import { DrawSVGPlugin } from 'greensock-js-business-green';

	export default {
		data() {
			return {
				displayed: false,
				buttonText: 'Open Modal',
				title: 'Modal title',
				body: 'This is the modal body.',
				modalButtonText: 'Close'
			};
		},
		mounted (){
			// TweenMax.set('#path', {drawSVG: "40% 60%"})
			TweenMax.to('#path', 2, {drawSVG: "40% 60%", transformOrigin:"50% 50%", rotation: 360});
			// TweenLite.to('#path', 2, {drawSVG: true});
			var d = new DrawSVGPlugin();
			// TweenLite.set('#path', {drawSVG: "40% 60%"});
		},
		methods: {
			showModal() {
				if(this.displayed == false) {
					document.body.className += 'modal-open';
					var darkDiv = document.createElement("div");
					darkDiv.className = 'modal-backdrop in';
					darkDiv.id = 'dark-div';
					document.body.appendChild(darkDiv);

					// var tl = new TimelineLite();
					// TweenLite.set('#modal-rect', {stroke: "red", strokeWidth:5});


					// tl.to('.modal-button', 2.5, {rotation: 360, scale: 5, transformOrigin:"50% 50%", y: -420});
						// .staggerFromTo('rect', 1, {drawSVG:"100%"}, {drawSVG:"50% 50%"}, 0.1)

					// .from('rect', 2.5, {drawSVG: 0});

					// tl.timeScale(2);

					// TweenLite.set("#myRect", {drawSVG: 0});
					TweenLite.set("#myRect", {visibility:"invisable"});


					TweenLite.set('#path', {drawSVG: "40% 60%"})

					// var tl2 = new TimelineMax();
					// tl2.from('rect', 2.5, {drawSVG: true});
					// TweenLite.from('rect', 2.5, {drawSVG: "50% 50%"});
					// TweenLite.to('.modal-button', 0.5, {rotation: 360, scale: 5, transformOrigin:"50% 50%", y: -420, drawSVG: 0});


					this.displayed = true;
				}
			},
			closeModal() {
				if(this.displayed == true) {
					document.body.className = '';
					document.getElementById("dark-div").remove();
					var tl = new TimelineLite();
					// TweenLite.set('#modal-rect', {stroke: "red", strokeWidth:5});


					tl.to('.modal-content', 2.5, {rotation: -360, scale: 1, transformOrigin:"50% 50%", y: 0})
					.to('rect', 2.5, {drawSVG: "100%"}, 1.5);

					// tl.timeScale(2);

					var tl2 = new TimelineLite();
					tl2.from('#myRect', 2.5, {drawSVG: "100%"}, {drawSVG: "50% 50%"}, 1.5);
					// TweenLite.to('.modal-content', 0.5, {rotation: -360, scale: 1, transformOrigin:"50% 50%", y: 0, drawSVG: 0});
					this.displayed = false;
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
	z-index: 1051;
	position: fixed;
    cursor: default;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    stroke-width: 1px;
}

/*#modal-rect, text {
	strokeWidth: 1px;
	stroke: red;
}*/

.display {
	display: block;
}

.modal-button {
	width: 120px;
	height: 40px;
	padding: 0;
	border: 0;
	opacity: 1;
	z-index: 1051;
	display: inline-block;
	position: fixed;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    stroke-width: 1px;
}

</style>
