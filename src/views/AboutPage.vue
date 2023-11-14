<script setup>
import Cover from '../components/Cover.vue';
import Audio from '../components/Audio.vue';
import Me from '../components/Me.vue';
</script>


<template>
    <Cover img="scenery/img4.jpg" title="关于我"/>
    <div class="container mx-auto flex justify-center py-8">
        <Me></Me>
    </div>
    <div class="bg-gray-100 p-4 flex justify-center items-center h-screen">
        <Audio />
    </div>
</template>