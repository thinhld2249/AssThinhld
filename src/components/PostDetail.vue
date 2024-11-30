<template>
  <div class="body">
    <div class="detail-post container" v-if="post">
      <div class="post-detail mb-5 d-flex">
        <div class="post-left col-md-4">
          <img :src="post.image" alt="Post Image" class="img-fluid mb-3" />
        </div>

        <div class="post-right col-md-8 ps-4">
          <h1 class="cormon-font">{{ post.title }}</h1>
          <div class="post-info">
            <p class="raleway-font"><strong>By:</strong> {{ post.author }}</p>
            <p class="raleway-font">
              {{ post.date }} <sup class="fw-bold">.</sup> {{ post.readTime }}
            </p>
          </div>
          <p class="raleway-font">{{ post.content }}</p>
        </div>
      </div>

      <div class="comments-section border p-4">
        <h2>Comments</h2>
        <div class="comment-form row">
          <input
            v-model="newComment"
            type="text"
            class="form-control"
            placeholder="Write a comment..."
          />
          <button @click="addComment" class="btn btn-primary mx-4">
            Post Comment
          </button>
          <div
            v-for="comment in post.comments"
            :key="comment.id"
            class="comment mb-3 mt-3 row"
          >
            <div class="card">
              <div class="card-body">
                <p class="card-text">
                  <strong>{{ comment.author }}:</strong> {{ comment.comment }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { InitPosts } from '@/resources/InitPosts'
import { useUser } from '../composables/useUser.js'
const {user} = useUser();
const route = useRoute()
const post = ref(null)
const newComment = ref('')

onMounted(() => {
  const postId = parseInt(route.params.id)
  post.value = InitPosts.find(item => item.id === postId)

  if (!post.value) {
    console.error(`Post with id ${postId} not found.`)
  }
})

const addComment = () => {
  
  if (newComment.value.trim() !== '') {
    post.value.comments.push({
      id: post.value.comments.length + 1,
      author: user.name || 'Guest',
      comment: newComment.value,
    })
    newComment.value = ''
  }
}
</script>

<style scoped>
.body {
  margin-top: 100px;
}
.detail-post {
  background-color: white;
  padding: 20px;
}

.post-detail {
  display: flex;
  flex-wrap: wrap;
}

.post-left {
  width: 30%;
}

.post-right {
  width: 70%;
}

.post-left img {
  width: 100%;
  border-radius: 8px;
}

.post-right {
  padding-left: 20px;
}

.comment-form input {
  width: 80%;
}

.comment-form button {
  width: 15%;
}

.comments-section {
  margin-top: 30px;
}

.comment {
  margin-bottom: 15px;
}
</style>
