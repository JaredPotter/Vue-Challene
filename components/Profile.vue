<template>
	<div>
		<h2>{{ name }}</h2>
		<div>
			<img :src="profilePicture" class="profile-picture" />
		</div>
		<div class="bio">
			<h3>Bio</h3>
			<span>{{ bio }}</span>
		</div>
		<div>
			<h3>Images</h3>
			<div class="row">
				<div v-for="image in images" class="col-md-4">
					<div>
						<img :src="image.url" :alt="image.alt" class="pictures"/>
						<div>
							<span>{{image.caption}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: 'name',
				profilePicture: 'profile.jpg',
				images: [{url: 'exmaple.jpg', alt: 'alt.jpg', caption: 'A caption!'}],
				bio: 'bio'
			};
		},
		props: {
			name: { required: true },
			profilePicture: { required: true },
			images: { required: true },
			bio: { required: true }
		}
	}
</script>

<style>

.pictures {
	padding:2px;
	border:1px solid #021a40;
	background-color:#ff0;
	max-width: 100%;
	height:auto;
}

.profile-picture {
	max-width: 30%;
	height:auto;
	padding:1px;
	border:3px solid #021a40;
	background-color:#ff0;
	float: left;
}

.bio {
	width: 500px;
	text-align: left;
	clear: both;
}

h2, h3 {
	text-align: left;
}

</style>