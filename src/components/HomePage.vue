<template>
  <div class="body">
    <div class="title-section d-flex justify-content-center align-items-center">
      <div
        class="title-box bg-white d-flex flex-column justify-content-center align-items-center border border-dark"
      >
        <h1 class="cormon-font">THE BOOK LOVER</h1>
        <p class="raleway-font">READ ALL ABOUT IT</p>
      </div>
    </div>
    <div class="contents bg-light">
      <div class="posts container ps-5 pe-5 mx-auto col-8">
        <h3 class="mb-5 pt-5 raleway-font"><a href="">All Posts</a></h3>
        <div class="post row">
          <div class="col-md-6" v-for="post in posts" :key="post.id">
            <div class="card mb-4">
              <RouterLink :to="`/post/${post.id}`">
                <img :src="post.image" class="card-img-top" alt="..." />
              </RouterLink>
              <div class="card-body">
                <div class="card-text row align-items-center mb-3">
                  <div class="card-avatar col-2">
                    <i class="fa-solid fa-circle-user fa-2x"></i>
                  </div>
                  <div class="col-8 ps-2">
                    <p class="raleway-font mb-1">{{ post.author }}</p>
                    <p class="raleway-font mb-0">
                      {{ post.date }} <sup class="fw-bold">.</sup>
                      {{ post.readTime }}
                    </p>
                  </div>
                  <div class="card-avatar col-2 position-relative">
                    <button class="border border-0 bg-white ps-4">
                      <i
                        @click="handleOptions(post)"
                        class="fa-solid fa-ellipsis-vertical fa-lg"
                      ></i>
                      <RouterLink
                        to="#"
                        v-show="post.isShow"
                        class="share-post shadow bg-white p-2 position-absolute"
                        @click="handleShowShareOptions(post)"
                      >
                        <i class="fa-solid fa-share pe-1"></i>Share Post
                      </RouterLink>
                    </button>
                  </div>
                </div>
                <RouterLink :to="`/post/${post.id}`">
                  <h3 class="card-title cormon-font">{{ post.title }}</h3>
                  <p class="card-text raleway-font">{{ post.content }}</p>
                </RouterLink>
                <hr />
                <div class="row raleway-font">
                  <p class="col-3">{{ post.views }} Views</p>
                  <p class="col-6">{{ post.comments.length }} Comments</p>
                  <i
                    :class="[
                      'fa-regular',
                      'fa-heart',
                      'col-3',
                      'pt-1',
                      post.likeClass,
                    ]"
                    @click="countLikes(post)"
                  >
                    &nbsp; {{ post.likes }}
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DialogPop :post="selectedPost" v-model="showShare" />
  </div>
</template>

<script setup>
import { InitPosts } from '@/resources/InitPosts'
import { ref, reactive } from 'vue'
import DialogPop from './DialogPop.vue'
const showShare = ref(false)
let selectedPost = ref(null)
const posts = reactive(InitPosts)
const countLikes = post => {
  post.likeClass = post.likeClass === 'text-danger' ? '' : 'text-danger'
  post.likes += post.likeClass ? 1 : -1
}

const handleOptions = post => {
  if (!post.isShow)
    posts.forEach(item => {
      item.isShow = false
    })
  post.isShow = !post.isShow
}

const handleShowShareOptions = post => {
  showShare.value = !showShare.value
  selectedPost.value = post
  handleOptions(post)
  console.log(showShare.value)
}
</script>
<style scoped>
.body {
  background-image: url(/src/assets/background.jpg);
  background-repeat: no-repeat;
  background-size: contain;
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
