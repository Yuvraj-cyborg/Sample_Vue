<template>
    <div>
        <h2>{{ $store.state.count }}</h2>
        <div class="SquareNums">
            <h2>
                {{ $store.state.count }} <sup>2</sup> =  {{ $store.getters.counterSquare }}
             </h2>
        </div>
        <div>
            <button @click="$store.commit('increment')">increment</button>
            <button @click="$store.commit('decrement')">decrement</button>

        </div>
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style scoped>

</style>