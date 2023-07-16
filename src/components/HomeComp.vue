<template>
    <header-comp></header-comp>
    <h1>Hello {{username}}, Welcome on Home Page</h1>
    <table border="1px">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
                <div class="actions-container">
                    <router-link :to="'/update/' + item.id" class="update">Update</router-link>
                    <button @click="deleteRestaurant(item.id)" class="delete">Delete</button>
                </div>
            </td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
import HeaderComp from './HeaderComp.vue';
export default{
    name:'HomeComp',
    data(){
        return{
            username:'',
            restaurants:[],
        }
    },
    methods:{
        deleteRestaurant(id){
            axios.delete("http://localhost:3000/restaurants/" + id)
            .then(result =>{
                if(result.status == 200){
                    this.loadData();
                }
            });
            
        },
        loadData(){
            let user = localStorage.getItem("user-info");
            this.username= JSON.parse(user).name;
            console.warn(this.name);
            console.log(JSON.parse(user));
            if(!user){
                this.$router.push({ name: 'SignUp' });
            }

            axios.get("http://localhost:3000/restaurants")
            .then(result => {
                this.restaurants = result.data;
            })
        }
    },
    mounted(){
        this.loadData()
    },
    components:{
        HeaderComp,
    }
}
</script>

<style>
    table{
        margin:auto;
    }
    td{
        width:160px;
        height:40px;
    }
    .delete{
        margin-left: 6px;
        border: 1px solid skyblue;
        background: skyblue;
        color: white;
        cursor: pointer;
    }


    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #f5f5f5;
    }

    .delete {
        background-color: #f44336;
        color: white;
        border: none;
        padding: 6px 12px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        border-radius: 4px;
    }

    .delete:hover {
        background-color: #d32f2f;
    }

    .update {
        background-color: #039be5;
        color: white;
        border: none;
        padding: 6px 12px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        border-radius: 4px;
    }

    .update:hover {
        background-color: #0277bd;
    }

    .router-link {
        color: #039be5;
        text-decoration: none;
    }

    .actions-container {
        display: flex;
        justify-content: space-between;
    }
   
</style>