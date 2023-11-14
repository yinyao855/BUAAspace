<script setup>
defineProps({
  img: String,
  title: String,
  des: String
})
const path = 'scenery/'
let newpath = (img) => path + img
</script>

<template>
  <div class="card lg:card-side bg-base-100 shadow-xl my-16 slide-up">
    <figure class="lg:w-3/5"><img :src="newpath(img)" alt="Album" /></figure>
    <div class="card-body lg:w-2/5">
      <h2 class="card-title text-2xl">{{ title }}</h2>
      <p class=" text-lg  mt-10">{{ des }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary btn-outline"><a href="https://www.buaa.edu.cn/" target="_blank">查看详情</a></button>
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