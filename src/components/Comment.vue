<script setup>
defineProps({
  Time: String,
  Category: String,
  Message: String,
})
</script>

<template>
  <div class="card w-60 bg-base-100 bg-opacity-70 shadow-2xl slide-up transform hover:scale-105 
  hover:bg-opacity-100 transition outline outline-offset-2 outline-2 outline-cyan-500">
    <div class="card-body">
      <h2 class="card-title">{{ Category }}</h2>
      <p class=" text-base">{{ Message }}</p>
      <h6 class="text-sm justify-end text-cyan-800">{{ Time }}</h6>
      <div class="rating gap-1">
        <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.card.slide-up {
  animation: slide-up 0.5s;
}
</style>