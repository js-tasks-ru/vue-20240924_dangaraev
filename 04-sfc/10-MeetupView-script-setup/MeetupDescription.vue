<script setup>
const props = defineProps({
  description: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="meetup-description">{{ props.description }}</div>
</template>

<style scoped>
.meetup-description {
  padding-top: 33px;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 28px;
  white-space: pre-wrap;
}
</style>
