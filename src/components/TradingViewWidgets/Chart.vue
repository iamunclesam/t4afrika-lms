<template>
    <Chart class="hidden md:block"/>
    <CryptoMarket />
    <Snaps />
    <Screener />
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { Chart } from 'vue-tradingview-widgets';

export default defineComponent({
    name: 'App',
    components: {
        Chart,
        // CryptoMarket,
        // Screener,
        // Snaps,
    },
});
</script>