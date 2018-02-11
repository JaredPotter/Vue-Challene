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

			 	<rect x="100" y="70" width="40" height="20" fill="#0275d8" cursor="pointer" @click="closeModal()"/>
			 	<text x="100" y="85" fill="white" font-family="Verdana" font-size="12" cursor="pointer" text-anchor="middle" @click="closeModal()">{{modalButtonText}}</text>

			 	<rect x="250" y="70" width="40" height="20" fill="#0275d8" cursor="pointer" @click="closeModal()"/>
			 	<text x="255" y="85" fill="white" font-family="Verdana" font-size="12" cursor="pointer" text-anchor="middle" @click="closeModal()">{{modalButtonText}}</text>
			</svg>
		</div>
	</div>
</template>

<script>
	import { TweenMax } from 'gsap';

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
		methods: {
			showModal() {
				if(this.displayed == false) {
					document.body.className += 'modal-open';
					var darkDiv = document.createElement("div");
					darkDiv.className = 'modal-backdrop in';
					darkDiv.id = 'dark-div';
					document.body.appendChild(darkDiv);

					TweenMax.to('.modal-button', 0.5, {rotation: 360, scale: 5, transformOrigin:"50% 50%", y: -420});
					
					this.displayed = true;
				}
			},
			closeModal() {
				if(this.displayed == true) {
					document.body.className = '';		
					document.getElementById("dark-div").remove();

					TweenMax.to('.modal-content', 0.5, {rotation: -360, scale: 1, transformOrigin:"50% 50%", y: 0});
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
}

</style>