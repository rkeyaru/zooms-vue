<template>
    <div class="container-lg  d-flex align-items-center justify-content-center ">

        <video width="720" controls autoplay>
            <source :src="'/src/assets/videos/' + id + '.mp4'" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.video;
console.log(id);
</script>