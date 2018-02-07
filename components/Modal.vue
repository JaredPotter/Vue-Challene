<template>
	<div>
		<!-- Button trigger modal -->
		<button id="modal-button" type="button" class="btn btn-primary" @click="showModal()">
		Launch demo modal
		</button>
<!-- 		<button id="modal-button" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" @click="showModal()">
		Launch demo modal
		</button> -->
		<!-- Modal -->
		<div v-show="displayed" id="myModal" :class="{ 'display': displayed }" class="modal">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content" >
		      <div class="modal-header">
		        <h5 class="modal-title">{{title}}</h5>
		        <button type="button" class="close" @click="closeModal()" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <div class="modal-body">
		        <p>{{body}}</p>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-primary">Save changes</button>
		        <button type="button" class="btn btn-secondary" @click="closeModal()">Close</button>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	import { TweenMax } from 'gsap';

	export default {
		data() {
			return {
				displayed: false,
				title: 'Modal Title',
				body: 'Modal body text goes here.',
				width: 0,
				height: 0,
				top: 0,
				left: 0
			};
		},
		mounted() {
			var modalButton = document.querySelector('#modal-button');
			var modalDialog = document.querySelector('.modal-dialog');

			//:style="{width: width + 'px', height: height + 'px', left: left + 'px', top: top + 'px'}"

			
			//TweenMax.from('#myModal', 2, {rotation: 360*3});
			// this.width = modalButton.offsetWidth;
			// this.height = modalButton.offsetHeight;
			
			this.top = modalButton.offsetTop;
			this.left = modalButton.offsetLeft;

//TweenMax.set('#myModal', {left: this.left + "%", top: this.top + "%"}) 
				// 			var xRatio = modalButton.offsetLeft / screen.width;
				// var yRatio = modalButton.offsetTop / screen.height;
				// this.width = xRatio;
				// this.height = yRatio;
		},
		methods: {
			showModal() {
				this.displayed = true;
				document.body.className += 'modal-open';
				var darkDiv = document.createElement("div");
				darkDiv.className = 'modal-backdrop in';
				darkDiv.id = 'dark-div';
				document.body.appendChild(darkDiv);

				TweenMax.from('.modal-content', 1, {rotation: 360*3, scale: 0, transformOrigin:"50% 50%", left: this.left, top: this.top});
			},
			closeModal() {
				document.body.className = '';		
				document.getElementById("dark-div").remove();
				

				TweenMax.to('.modal-content', 1, {rotation: 360*3, scale: 0, transformOrigin:"50% 50%", left: this.left, top: this.top});

	            setTimeout(function(){
                	this.displayed = false;
            	}, 1000);
			}
		}
	};
</script>

<style>
.modal-content {
	opacity: 0.8;
}

.display {
	display: block;
}
</style>