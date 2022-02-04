<template>
    <div class="flex flex-col items-center">
        <h2>{{title}}</h2>
        <img style="width:500px;" :src="image" :alt="title">
        
    </div>
</template>

<script>
export default {
    name:"Card",
    props: [
        "image", 
        "title",  
    ],
    
}
</script>