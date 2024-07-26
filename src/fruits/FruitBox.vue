<template>
    <h1>Fruits</h1>
    <div v-for="fruit in fruits" :key="fruit.id">
        <router-link :to="{ name: 'FruitDetails', params: { id: fruit.id } }">
            <h2>{{ fruit.title }}</h2>
        </router-link>
    </div>
    <router-link to="/fruit/appleprice">appleprice</router-link>
    <router-view/>

</template>

<script>


export default {
    data() {
        return {
            fruits: [
                { title: 'Apple', id: 1, details: 'its red' },
                { title: 'Banana', id: 2, details: 'its yellow' },
                { title: 'Grapes', id: 3, details: 'its green' },
            ],
        };
    },
};
</script>

<style scoped>
</style>
