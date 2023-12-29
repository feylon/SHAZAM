<template>
  <div class="box">
    <nav class="home_nav">
        <div class="shazam_header ">
            Shazam
        </div>
        <div class="right_nav">
            <p class="pricing">
                Pricing
            </p>
            <button class="join_discord"><i class="fab fa-discord"></i> Join Discord</button>
            <button class="login_nav"><i class="fas fa-right-to-bracket"></i> Login </button>
        </div>
    </nav>
    

    <div class="box_section">
<span class="discover_music">
  Discover music you'll love.

</span>
<span class="Search_for_a_song">
  Search for a song, get recommendations with similar vibes.
</span>

<div class="searchsection">

  <input type="text" v-model="search" placeholder="Search for a song..."  class="search_song text-center form-control mt-3 w-75 m-auto mt-3">
  <button @click="store.songs=search;route.push('/songs')" v-if="search" class="btn btn-outline-primary w-50 p-2 mt-4 m-auto d-block"><i class="fas fa-magnifying-glass"></i> Search ...  </button>
</div>

<div class="recent_section">
 <span class="recent mt-4">
  <i class="fas fa-arrow-rotate-left"></i> Recent searches
 </span>
</div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";
import {useStore} from "../Store";
let route = useRouter();
let store = useStore();

let search = ref('salom xayr')


</script>
<style lang="scss">
@import "home.scss";

</style>