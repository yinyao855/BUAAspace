<script setup>
import Panel from '../components/Panel.vue';
import PhotoCard from '../components/PhotoCard.vue';
</script>

<template>
    <div>
        <div class="container mx-auto m-16">
            <p class="text-center text-6xl font-bold">校园风景</p>
        </div>
        <div class="container mx-auto w-3/4">
            <PhotoCard img="img2.jpg" title="新主楼"
                des="新主楼整体呈长方形结构，将多栋教学科研楼整合成一个院落式布局的建筑组团，形成有着强烈围合感的建筑空间形态。追求空间层次和尺度，强调人在其中的体验。塑造均质化的立体肌理，赋予学校建筑以其应有的简约风格。有效使用生态设计方法，实践绿色建筑理念。" />
            <PhotoCard img="mirror.jpg" title="天空之镜"
                des="北航国家实验室全称航空科学与技术国家实验室，简称“国实”，即国家级大型实验室。目前全国拥有独立国家实验室的高校仅有七个，北航便是其中之一。实验室由空气动力学、飞行器综合设计、航空动力、航空材料与结构、空天电子与信息、航空数字化制造和网络化协同空管等7个科学研究部组成。国实与它前面的喷泉组合起来，成为了沙航最著名的景点，尤其在夏天的夜间，你可以看到美丽的北航版“天空之镜”。" />
            <PhotoCard img="youcaihua.jpg" title="油菜花田"
                des="当春风拂过北航校园，油菜花在阳光的照耀下绽放出绚烂多彩的花海。它们如黄金般灿烂，如绒毛般柔软，将整个校园装点得美轮美奂。油菜花的芬芳和色彩醉人，犹如大自然的一幅绝美画卷，给人一种宁静和喜悦的感觉。在北航的大片油菜花中漫步，仿佛踏入了一个诗意的世界，让心灵得到了一次愉悦的洗礼。" />
            <PhotoCard img="img3.jpg" title="体育馆"
                des="北京航空航天大学体育馆落成于2001年8月，是为了2001年世界大学生运动会排球比赛兴建的。北航体育馆是一个全封闭的、室内环境可调控的竞技场地，总座位数5400个，其中固定座席3400个，临时座席2000个,曾是大运会的排球场地。外形看似飞碟，北航体育馆体态轻盈又充满力量。让人产生航空、航天、空间、宇宙的遐想，似飞碟、似航船的寓意，银灰色现代化、高科技的造型，成为北京航空航天大学校园里独特一景。" />
        </div>
        <div class="divider text-lg">更多图片</div>
        <div class="container mx-auto">
            <Panel />
        </div>
    </div>
</template>