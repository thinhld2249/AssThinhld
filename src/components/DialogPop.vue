<template>
 <div class="text-center mt-3">
    <p class="fw-bold mb-3">Share Post {{ id }}</p>
    <div class="d-flex justify-content-center gap-3">
      <a 
        href="" 
        target="_blank" 
        class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center" 
        style="width: 40px; height: 40px;" 
        title="Share on Facebook"
      >
        <i class="fab fa-facebook-f"></i>
      </a>

      <a 
        href="" 
        target="_blank" 
        class="btn btn-info text-white rounded-circle d-flex align-items-center justify-content-center" 
        style="width: 40px; height: 40px;" 
        title="Share on X"
      >
        <i class="fab fa-twitter"></i>
      </a>

      <a 
        href="" 
        target="_blank" 
        class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center" 
        style="width: 40px; height: 40px; background-color: #0077b5;" 
        title="Share on LinkedIn"
      >
        <i class="fab fa-linkedin-in"></i>
      </a>

      <button 
        class="btn btn-dark rounded-circle d-flex align-items-center justify-content-center" 
        style="width: 40px; height: 40px;" 
        @click="copyLink" 
        title="Copy Link"
      >
        <i class="fas fa-link"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = ['id'];
</script>


<style scoped>
</style>