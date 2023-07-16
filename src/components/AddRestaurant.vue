<template>
    <header-comp></header-comp>
    <h1>Hello {{username}}, Welcome on Add Page</h1>
    <form action="" class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <button type="button" @click="addRestaurant">Add New Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios';
import HeaderComp from './HeaderComp.vue'
export default{
    name:'AddRestaurant',
    data(){
        return{
            username:'',
            restaurant:{
                name:'',
                contact:'',
                address:''
            }
            
        }
    },
    methods:{
        addRestaurant(){
            axios.post("http://localhost:3000/restaurants", {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            })
            .then(result => {
                if(result.status == 201){
                    this.$router.push({name:'Home'});
                }
            });
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        this.username = JSON.parse(user).name;
        if(!user){
            this.$router.push({ name: 'SignUp' });
        }
    },
    components:{
        HeaderComp,
    }
}
</script>