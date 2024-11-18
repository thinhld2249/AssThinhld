<template>
    <nav :class="navbarClass" class="navbar navbar-expand-lg p-3 bg-white">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="/src/assets/TBL.png" alt="Logo"></a>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item ps-3">
                    <RouterLink class="nav-link" to="/">Home</RouterLink>
                </li>
                <li class="nav-item ps-3">
                    <RouterLink class="nav-link" to="/about">About</RouterLink>
                </li>
                <li class="nav-item ps-3">
                    <a class="nav-link" href="#subcribe-input">Subscribe</a>
                </li>
                <li class="nav-item ps-3 pt-2">
                    <span><i class="fa-solid fa-magnifying-glass pe-1"></i></span>
                    <input id="search" type="text" class="border-0" v-model="searchVal" @keypress.enter="handleSearch"
                        placeholder="Search...">
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa-brands fa-facebook"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fa-brands fa-twitter"></i></a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const searchVal = ref('');
const navbarClass = ref('navbar navbar-expand-lg p-3 bg-white fixed-top');

const handleSearch = () => {
    console.log(searchVal.value);
    searchVal.value = '';
};

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight / 1.5) {
        navbarClass.value = 'navbar navbar-expand-lg p-3 bg-white';
    } else {
        navbarClass.value = 'navbar navbar-expand-lg p-3 bg-white fixed-top';
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
#search:hover {
    border-bottom: 2px solid red !important;
}

#search:focus {
    outline: none;
    border-bottom: 2px solid red !important;
}
</style>
