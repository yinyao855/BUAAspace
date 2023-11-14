<template>
    <div class="container">
        <div class="panel" :class="{ active: activePanel === 0 }"
            style="background-image: url('scenery/img5.jpg')"
            @click="setActivePanel(0)">
            <h3>沙河西区宿舍</h3>
        </div>
        <div class="panel" :class="{ active: activePanel === 1 }"
            style="background-image: url('scenery/img6.jpg')"
            @click="setActivePanel(1)">
            <h3>蓝调时光</h3>
        </div>
        <div class="panel" :class="{ active: activePanel === 2 }"
            style="background-image: url('scenery/img7.jpg')"
            @click="setActivePanel(2)">
            <h3>北航特色TD</h3>
        </div>
        <div class="panel" :class="{ active: activePanel === 3 }"
            style="background-image: url('scenery/img8.jpg')"
            @click="setActivePanel(3)">
            <h3>沙河平板车</h3>
        </div>
        <div class="panel" :class="{ active: activePanel === 4 }"
            style="background-image: url('scenery/img9.jpg')"
            @click="setActivePanel(4)">
            <h3>体育场</h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activePanel: 0
        };
    },
    methods: {
        setActivePanel(index) {
            this.activePanel = index;
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    width: 90vw;
}

.panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    -webkit-transition: all 700ms ease-in;
    transition: all 700ms ease-in;
}

.panel h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in 0.4s;
}

.panel.active {
    flex: 5;
}

.panel.active h3 {
    opacity: 1;
}

@media (max-width: 480px) {
    .container {
        width: 100vw;
    }

    .panel:nth-of-type(4),
    .panel:nth-of-type(5) {
        display: none;
    }
}
</style>
