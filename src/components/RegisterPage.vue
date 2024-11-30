<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow-lg p-4" style="width: 100%; max-width: 400px">
      <h2 class="text-center mb-4">Sign Up</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="form.email" id="email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="form.password" id="password" type="password" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirm Password</label>
          <input v-model="form.confirmPassword" id="confirmPassword" type="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Sign Up</button>
      </form>
      <p class="text-center mt-3">
        Already have an account?
        <RouterLink to="/login" class="text-primary text-decoration-none">Log In</RouterLink>
      </p>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '@/composables/useUser'

const { registerUser } = useUser()
const router = useRouter()
const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
})

const handleRegister = () => {
  if (form.password !== form.confirmPassword) {
    alert('Passwords do not match!')
    return
  }

  const success = registerUser(form.email, form.password)
  if (success) {
    alert('Registration successful!')
    router.push('/login')
  } else {
    alert('Email already exists!')
  }
}
</script>

<style scoped></style>
