<template>
    <div>
        <h2>FullName - {{firstName}} {{lastName}}</h2>
        <h2>Computed FullName - {{fullName}}</h2>
        <button @click="items.push({
            id:4,
            title:'table',
            price:400,
        })">Add item</button>
        <h2>total - {{ total }}</h2>
        <input type="text" v-model="country">
    </div>
</template>

<script>


export default {
    name: 'AppApp',
    data(){
        return{
            firstName: 'Bruce',
            lastName: 'Wayn',
            items:[
                {
                    id:1,
                    title:'TV',
                    price:100,
                },
                {
                    id:2,
                    title:'Phone',
                    price:200,
                },
                {
                    id:3,
                    title:'Laptop',
                    price:300,
                }
            ],
            country:''
        }
    },
    methods:{
        getTotal(){
            console.log('getTotal Method');
            return this.items.reduce((total, curr) => (total += curr.price),0)
        }
    },
    computed:{
        fullName(){
            return `${this.firstName} ${this.lastName}`;
        },
        total(){
            console.log('Computed total property');
            return this.items.reduce((total, curr) => (total += curr.price),0)
        }
    }
}
</script>

<style>

</style>
