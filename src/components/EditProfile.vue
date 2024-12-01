<template>
  <div class="edit-profile container">
    <h2 class="mb-4">Edit Profile</h2>
    <form @submit.prevent="updateProfile">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input id="email" v-model="user.email" type="email" class="form-control" readonly />
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">Name</label>
        <input id="username" v-model="user.name" type="text" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input id="password" v-model="user.password" type="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Cập nhật</button>
    </form>
    
    <button>
      <RouterLink :to="{ name: 'addPost', query: { author: user.email } }">Add a post</RouterLink>
    </button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUser } from "../composables/useUser.js";

const { user, loadUser, login } = useUser();

const updateProfile = () => {
  login(user.email, user.password, user.name);
  alert("Cập nhật thông tin thành công!");
};

onMounted(() => {
  loadUser();
});
</script>

<style scoped>
.edit-profile {
  margin-top: 200px;
  margin-bottom: 200px;
  max-width: 600px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
