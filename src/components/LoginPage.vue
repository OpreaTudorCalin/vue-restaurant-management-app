<template>
    <img src="../assets/restaurant-logo.png" alt="logo" class="logo">
    <h1>Login</h1>
    <div class="login">
        <input type="text" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button @click="login">Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name: 'LoginPage',
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods:{
        login(){
            axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            .then(result => {
                console.warn(result);
                if(result.status == 200 && result.data.length > 0){
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push({name:'Home'});
                }
            })
            .catch(error => {
            console.error(error);
        });
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        if(user){
            this.$router.push({name:'Home'});
        }
    }
}
</script>