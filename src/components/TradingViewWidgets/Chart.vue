<template>
    <MarketOverview class="hidden md:block"/>
   
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { MarketOverview } from 'vue-tradingview-widgets';

export default defineComponent({
    name: 'App',
    components: {
        MarketOverview
        // CryptoMarket,
        // Screener,
        // Snaps,
    },
});
</script>