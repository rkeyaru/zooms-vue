<script setup>

import { onMounted, ref } from 'vue';
import axios from "axios";
let count = ref(0)
const AnimeData = ref();
onMounted(async function () {
    await axios.get('http://localhost:8080/animania/myresource/videos')
        .then(response => (AnimeData.value = response.data))
    console.log(AnimeData.value);
    for (let i of AnimeData.value) {
        console.log(i)
    }
})
</script>
<template>
    <div class="bg-image">
        <h1 class="text-center  mb-3">Top 10 Anime</h1>
        <center>
            <div class="row mt-3" v-for="anime in AnimeData ">
                <div class="col-1 bg1-opacity rcorners2 mx-5">
                   #{{ anime.video_id }}
                </div>
                <div class="col-6 bg1-opacity rcorners2 mx-5">
                    {{ anime.anime_name }}
                </div>
                <div class="col mt-4">
                    <!-- <router-link class="btn1 py-2  px-5" :to="{ name: 'WatchVideo', params: { video: anime.video_path } }">
                        Trailer
                    </router-link> -->
                    <!-- Button trigger modal -->
<button  class="btn1  py-2  px-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Trailer
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <video width="480" controls>
            <source :src="'/src/assets/videos/' + anime.video_path + '.mp4'" type="video/mp4">
            Your browser does not support the video tag.
        </video>
      </div>

    </div>
  </div>
</div>
                </div>
                <div class="col mt-4">
                    <router-link class="btn1 py-2  px-5" :to="{ name: 'WatchVideo', params: { video: anime.video_path } }">
                        Watch Now
                    </router-link>
                </div>
            </div>
        </center>
    </div>
</template>
<style>
.bg1-opacity {

    height: 50%;
    color: white;
    background-color: black;
    align-items: center;
    justify-content: center;
    opacity:0.6;
}
.bg-image {
    
    background-image: url('../assets/img/image3.jpg');


}
</style>