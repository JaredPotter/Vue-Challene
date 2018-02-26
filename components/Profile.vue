<template>
	<div class="profile_container">
		<h2>{{ name }}</h2>
		<div>
			<img :src="profilePicture" class="profile-picture" />
		</div>
		<div class="bio">
			<h3>Bio</h3>
			<span>{{ bio }}</span>
		</div>
		<div class="imgs">
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
		<div class="resume">
			<h3>Resume</h3>
			<span class="resume_url"><a :href="resume">Resume</a></span>
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
				bio: 'bio',
				resume: 'resume'
			};
		},
		props: {
			name: { required: true },
			profilePicture: { required: true },
			images: { required: true },
			bio: { required: true },
			resume: { required: true }
		}
	}
</script>

<style>

.profile_container {
	padding-top:10px;
}

.pictures {
	padding:2px;
	border:1px solid #021a40;
	background-color:#ff0;
	max-width: 100%;
	height:auto;
}

.imgs {
	padding-top:10px;
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
	padding-top:10px;
}

.resume {
	padding-top:10px;
}

.resume_url {
	padding-bottom: 60px;
	float: left;
}


h2, h3 {
	text-align: left;
}

</style>
