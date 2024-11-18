<template>
    <div class="body">
        <div class="title-section d-flex justify-content-center align-items-center ">
            <div
                class="title-box bg-white d-flex flex-column justify-content-center align-items-center border border-dark ">
                <h1 class="cormon-font">THE BOOK LOVER</h1>
                <p class="raleway-font">READ ALL ABOUT IT</p>
            </div>
        </div>

        <div class=" contents bg-light">
            <div class="posts container ps-5 pe-5 mx-auto col-8">
                <h3 class="mb-5 pt-5 raleway-font"><a href="">All Posts</a></h3>
                <div class="post row">
                    <div class="col-md-6" v-for="post in posts" :key="post.id">
                        <div class="card mb-4">
                            <a href=""><img :src="post.image" class="card-img-top" alt="..."></a>
                            <div class="card-body">
                                <div class="card-text row align-items-center mb-3 ">
                                    <div class="card-avatar col-2">
                                        <i class="fa-solid fa-circle-user fa-2x"></i>
                                    </div>
                                    <div class="col-8 ps-2">
                                        <p class="raleway-font mb-1">{{ post.author }}</p>
                                        <p class="raleway-font mb-0">{{ post.date }} <sup class="fw-bold">.</sup>
                                            {{ post.readTime }}</p>
                                    </div>
                                    <div class="card-avatar col-2 position-relative">
                                        <button class="border border-0 bg-white ps-4  ">
                                            <i @click="handleOptions(post)"
                                                class="fa-solid fa-ellipsis-vertical fa-lg"></i>
                                            <a v-show="post.isShow"
                                                class="share-post shadow bg-white p-2 position-absolute">
                                                <i class="fa-solid fa-share pe-1"></i>Share Post
                                            </a>
                                        </button>
                                    </div>
                                </div>
                                <a href="">
                                    <h3 class="card-title cormon-font">{{ post.title }}</h3>
                                    <p class="card-text raleway-font">{{ post.content }}
                                    </p>
                                </a>
                                <hr>
                                <div class="row raleway-font">
                                    <p class="col-3">{{ post.views }} Views</p>
                                    <p class="col-6">{{ post.comments }} Comments</p>
                                    <i :class="['fa-regular', 'fa-heart', 'col-3', 'pt-1', post.likeClass]"
                                        @click="countLikes(post)">
                                        &nbsp; {{ post.likes }}</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { InitPosts } from '@/resources/InitPosts';
import { reactive } from 'vue';
const posts = reactive(InitPosts);
const countLikes = (post) => {
    if (post.likeClass === '') {
        post.likeClass = 'text-danger';
        post.likes++;
    } else {
        post.likeClass = '';
        post.likes--;
    }
};

const handleOptions = (post) => {
    post.isShow = !post.isShow;
}
</script>
<style scoped>
.body {
    background-image: url(/src/assets/background.jpg);
    background-repeat: no-repeat;
    background-size: contain;
}

.raleway-font {
    font-family: 'raleway, sans-serif';
}

.cormon-font {
    font-family: cormorantgaramond-light, cormorantgaramond, "cormorant garamond", serif;
}

.title-box {
    height: 250px;
    width: 600px;
}

.title-section {
    height: 500px;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: red;
}

.share-post {
    top: 100%;
    right: 50%;
    width: 120px;
    text-align: center;
    z-index: 1;
}
</style>