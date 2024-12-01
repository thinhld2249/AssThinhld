<template>
    <div class="add-post-form">
      <h3 class="text-center">Add New Post</h3>
      <form @submit.prevent="addNewPost">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input
            v-model="newPost.title"
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter post title"
            required
          />
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Image URL</label>
          <input
            v-model="newPost.image"
            type="text"
            class="form-control"
            id="image"
            placeholder="Enter image URL"
          />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Content</label>
          <textarea
            v-model="newPost.content"
            class="form-control"
            id="content"
            rows="4"
            placeholder="Enter post content"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Date</label>
          <input
            v-model="newPost.date"
            type="date"
            class="form-control"
            id="date"
            required
          />
        </div>
        <div class="mb-3">
          <label for="readTime" class="form-label">Read Time</label>
          <input
            v-model="newPost.readTime"
            type="text"
            class="form-control"
            id="readTime"
            placeholder="e.g., 2 min read"
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Add Post</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  import { InitPosts } from "@/resources/InitPosts";
  import { useRoute } from "vue-router";
  
  // Lấy thông tin từ route
  const route = useRoute();
  const author = route.query.author;
  
  // Tạo đối tượng newPost bằng reactive
  const newPost = reactive({
    id: null,
    title: "",
    image: "",
    content: "",
    date: "",
    readTime: "",
    likes: 0,
    likeClass: "",
    views: 0,
    comments: [],
    isShow: false,
  });
  
  // Hàm thêm bài viết mới
  const addNewPost = () => {
    // Gán author vào post
    newPost.author = author;
  
    // Tạo id mới cho bài viết
    newPost.id = InitPosts.length + 1; 
  
    // Thêm bài viết vào InitPosts
    InitPosts.push({ ...newPost });
  
    // Reset form sau khi thêm
    Object.keys(newPost).forEach((key) => {
      if (Array.isArray(newPost[key])) {
        newPost[key] = [];
      } else if (typeof newPost[key] === "string") {
        newPost[key] = "";
      } else {
        newPost[key] = null;
      }
    });
  
    // In ra InitPosts để kiểm tra
    console.log(InitPosts);
  };
  </script>
  
  <style scoped>
  .add-post-form {
    max-width: 500px;
    margin: 0 auto;
    margin-top: 100px;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  