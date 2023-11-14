<script setup>
import Cover from '../components/Cover.vue'
import Card from '../components/MyCard.vue';

const towall = () => {
    window.location.href = '/wall';
}

const toscene = () => {
    window.location.href = '/scene';
}

const toabout = () => {
    window.location.href = '/about';
}
</script>

<template>
    <Cover img="scenery/img1.jpg" title="北航空间"></Cover>
    <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="mx-auto">
                <Card title="留言墙" msg="欢迎您在留言墙上留下您的评论，意见或问候，与其他人交流和共享想法" @click.native="towall"></Card>
            </div>
            <div class="mx-auto">
                <Card title="校园风景" msg="探索我们学校美丽的自然景观和令人惊叹的校园风景" @click.native="toscene"></Card>
            </div>
            <div class="mx-auto">
                <Card title="关于我" msg="了解更多关于我的个人信息、教育背景和职业追求" @click.native="toabout"></Card>
            </div>
        </div>
    </div>
</template>