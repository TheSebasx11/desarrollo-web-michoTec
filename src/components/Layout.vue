<template>
    <Navbar></Navbar>
    <router-view/>
</template>

<script>
import Navbar from "./Navbar.vue"
export default {
    components:{
        Navbar
    }
}
</script>