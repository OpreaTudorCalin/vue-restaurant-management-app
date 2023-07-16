<template>
    <img src="../assets/restaurant-logo.png" alt="logo" class="logo">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="name">
        <input type="text" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button @click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name:'SignUp',
    data(){
    return{
      name: '',
      email: '',
      password: '',
    }
  },
  methods:{
    signUp(){
        axios.post("http://localhost:3000/users", {
            name: this.name,
            email: this.email,
            password: this.password
        })
        .then(result => {
            console.warn(result);
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({ name: 'Home' });
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
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>

<style>

</style>