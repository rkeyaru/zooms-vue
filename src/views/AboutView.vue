<script setup>

</script>

<template>
  <main>
    <div class="row zindex bg1">
      <div class="col gradient ">
        <img src="../assets/img/image1.jpg" class="">
      </div>
      <div class="col bg1 ">
        <h1></h1>
        <h1 class="clip">Animania</h1>
        <h1><i>A Home For Otakus...</i></h1>

      </div>

    </div>

  </main>

  <div id="text" class="container col-lg-2 bg-light rcorners2 mt-5  p-4 w-50 mb-5">
    <i>
      <p>

        Animania is our anime streaming website, the ultimate destination for all anime enthusiasts! We are dedicated to
        providing a vast collection of captivating anime series, movies, and episodes, carefully curated to cater to a
        wide range of tastes and interests. With a passion for the artistry, storytelling, and vibrant world of anime, we
        have created this platform to bring you an immersive and thrilling streaming experience. </p>
      <p>Explore our extensive library, where you'll find timeless classics, exciting new releases, and hidden gems from
        various genres. Our user-friendly interface, personalized recommendations, and interactive features will guide you
        on an unforgettable journey through the captivating realm of anime. Join our vibrant community of anime lovers,
        express your thoughts through ratings and reviews, and embark on a never-ending adventure in the anime universe.
      </p>
      <p>
        Get ready to indulge in the magic, excitement, and boundless creativity that anime has to offer. Start streaming
        now and let your imagination soar!
      </p>
    </i>
  </div>
  <div class="bg1 text-center">
    <div class="row text-center mt-5 pt-5 mb-3 fs-2">
      <center>Explore the rating of various animes on MyAnimeList</center>
    </div>
    <div class="row cen justify-content-center">
      
      <a href="https://myanimelist.net/" class="btn1 cen fs-4 w-25 px-3 mb-5">MAL Score</a>
    
    </div>

  </div>
</template>
<style>
.btn1 {
  /* z-index: 1 !important; */
  color: whitesmoke;
  background-color: #212627;
  border-radius: 10px;
  border-color: #ff6726;
}

.btn1:hover {
  /* z-index: 0; */
  background-color: #ff6726;
  color: whitesmoke;
  transition: 0.3s;
  cursor: pointer;
}

.bg1 {

  height: 50%;
  color: white;
  background-color: black;
  align-items: center;
  justify-content: center;
}

.blob {
  /* height: auto; */
  /* width:  */
  color: aqua;
}

.zindex {
  z-index: -1;
}

.gradient {
  background: linear-gradient(to right, rgba(255, 254, 254, 0) 0%, rgb(0, 0, 0) 100%);
}

img {
  height: auto;
  max-width: 100%;
  /* opacity: 70%; */
  position: relative;
  z-index: -1;
}

.clip {
  align-content: center;
  font-size: 72px;
  /* margin-top: 3rem; */
  /* margin-bottom: 1rem; */
  /* -webkit-transform: scale(3,1); */

  font-weight: 200;
  background: linear-gradient(to right, #fa5306,
      #ff6b08, #96ec0c, #eedd44);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}</style>