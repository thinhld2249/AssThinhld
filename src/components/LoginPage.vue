<template>
  <div
    class="container d-flex justify-content-center align-items-center vh-100"
  >
    <div class="card shadow-lg p-4" style="width: 100%; max-width: 400px">
      <h2 class="text-center mb-4">Log In</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="form.email"
            id="email"
            type="email"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="form.password"
            id="password"
            type="password"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Log In</button>
      </form>
      <p class="text-center mt-3">
        Don't have an account?
        <RouterLink to="/" class="text-primary text-decoration-none">
          Sign Up
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({
  email: '',
  password: '',
})

const handleLogin = () => {
  const storedPassword = localStorage.getItem(form.email)
  if (storedPassword === form.password) {
    router.push('/')
    alert(`Welcome back, ${form.email}!`)
  } else {
    alert('Invalid email or password.')
  }
}
</script>

<style scoped></style>
