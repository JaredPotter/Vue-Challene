<template>
	<div>
		
	    <svg x="0px" y="0px" width="570px" height="150px" viewBox="0 0 570 150" xml:space="preserve">
	      <circle class="circle-1" fill="none" cx="71.5" cy="77.5" r="51.5" stroke="#88CE02" stroke-width="4"/>
	    </svg>

	    <button v-on:click="anim_svg">Animate</button>

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
	</div>
</template>

<script>

	import TweenMax from 'gsap'
	import DrawSVGPlugin from "DrawSVGPlugin"

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

		},
		methods: {
			anim_svg() {
				
			    TweenLite.fromTo(".circle-1", 1, {drawSVG:"0 5%"}, {drawSVG:"9% 100%"});
			},
			showModal() {
				if(this.displayed == false) {
					document.body.className += 'modal-open';
					var darkDiv = document.createElement("div");
					darkDiv.className = 'modal-backdrop in';
					darkDiv.id = 'dark-div';
					document.body.appendChild(darkDiv);

					var tl = new TimelineLite();
					tl.to('.modal-button', 0.5, {rotation: 360, scale: 5, transformOrigin:"50% 50%", y: -420});

					this.displayed = true;
				}
			},
			closeModal() {
				if(this.displayed == true) {
					document.body.className = '';
					document.getElementById("dark-div").remove();

					var tl = new TimelineLite();
					tl.to('.modal-content', 0.5, {rotation: -360, scale: 1, transformOrigin:"50% 50%", y: 0});

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

#dark-div {
	opacity: 0.7;
}

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

#box {
  background-color: #88ce02;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  z-index: 1;
}
 
.boxSmall {
  position: absolute;
  background-color: #70a40b;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 25px;
  height: 75px;
  z-index: 2;
}
 
.boxTiny {
  background-color: #577a14;
  height: 50px;
  bottom: 0;
  right: 0;
  left: auto;
  z-index: 3;
}

</style>
