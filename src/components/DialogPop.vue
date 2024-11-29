<template>
  <div
    v-if="show"
    name="modal"
    class="modal-mask fade"
    id="share"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="dialogTitle"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="body">Default body content</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  post: Object,
  show: Boolean,
})

onMounted(() => {
  console.log('mounted')
  console.log(props.post)
})
</script>

<style scoped>
/* Add custom styles for your modal if needed */
</style>
