<template>
    <header-comp></header-comp>
    <h1>Hello {{username}}, Welcome on Update Page</h1>
    <form action="" class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <button type="button" @click="updateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import axios from 'axios';
import HeaderComp from './HeaderComp.vue'
export default{
    name:'UpdateRestaurant',
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
        updateRestaurant(){
            let id = this.$route.params.id;
            axios.put("http://localhost:3000/restaurants/" + id, {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address
            })
            .then(result => {
                if(result.status == 200){
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
        let id = this.$route.params.id;
        axios.get(`http://localhost:3000/restaurants/` + id)
        .then(result => {
            this.restaurant = result.data;
        });
        console.warn(this.$route.params.id);
    },
    components:{
        HeaderComp,
    }
}
</script>