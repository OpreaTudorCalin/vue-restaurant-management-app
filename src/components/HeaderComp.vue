<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <a href="#" @click="logout">Logout</a>
    </div>
</template>

<script>

export default{
    name: "HeaderComp",

    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'});
        }
    }
}
</script>

<style>
.nav{
    background-color: #039be5;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #f2f2f2;
    padding: 16px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover{
    background: #0277bd;
}
</style>