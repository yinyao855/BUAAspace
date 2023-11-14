<script setup>
import Comment from '../components/Comment.vue';
import { ref, onMounted, watch } from 'vue';

const messages = ref([]);
let rowdata;

onMounted(async () => {
    try {
        const response = await fetch('messages.json');
        const data = await response.json();
        rowdata = data;
        messages.value = data;
    } catch (error) {
        console.error('Error:', error);
    }
});

const searchText = ref('');

//根据类别查询，更新messages
const search1 = () => {
    if (searchText.value === '') {
        return;
    }
    const filteredMessages = rowdata.filter((message) => {
        return message.category.includes(searchText.value);
    });

    if (filteredMessages.length === 0) {
        alert('没有该类别的留言');
    } else {
        messages.value = filteredMessages;
    }
}

//根据内容查询，更新messages
const search2 = () => {
    if (searchText.value === '') {
        return;
    }
    const filteredMessages = rowdata.filter((message) => {
        return message.message.includes(searchText.value);
    });

    if (filteredMessages.length === 0) {
        alert('没有该内容的留言');
        return;
    } else {
        messages.value = filteredMessages;
    }
}

watch(searchText, newVal => {
    if (newVal === '') {
        messages.value = rowdata;
    }
})

</script>

<template>
    <div style="background-image: url(shahe.jpg)" class="bg-cover">
        <div class="hero min-h-16">
            <div class="hero-overlay bg-opacity-0"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-12 font-bold text-6xl pt-6">留言墙</h1>
                    <p class="mb-5 text-lg">在这里你可以写下自己的想法</p>
                    <button class="btn btn-warning">撰写留言</button>
                </div>
            </div>
        </div>
        <div>
            <div class="container flex mx-auto p-3 justify-center mt-5">
                <input type="text" placeholder="Type here" v-model="searchText"
                    class="input input-bordered input-info w-full max-w-xs mr-4" />
                <button class="btn btn-info mr-4" @click="search1">按类别搜索</button>
                <button class="btn btn-success" @click="search2">按内容搜索</button>
            </div>
            <div class="container mx-auto overflow-auto" style="height: 90rem">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 p-8 ">
                    <div v-for="message in messages" :key="message.id" class="backdrop-blur-sm flex mx-auto">
                        <Comment :Time="message.time" :Category="message.category" :Message="message.message"></Comment>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
