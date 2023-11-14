<script setup>
defineProps({
  //指定照片路径
  img: String,
  title: String,
  msg: String
})

const begin = () => {
  //页面往下滑动
  window.scrollTo({
    top: 800,
    behavior: "smooth"
  })
}
</script>

<template>
  <div class="hero min-h-screen"
    :style="`background-image: url(${img})`">
    <div class="hero-overlay bg-opacity-40"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class=" mb-16 font-bold text-7xl">{{ title }}</h1>
        <p class="mb-16 text-lg">{{ msg }}</p>
        <button class="btn btn-primary glass btn-lg" @click="begin">开始探索</button>
      </div>
    </div>
  </div>
</template>