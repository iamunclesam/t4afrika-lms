<template>
    <TechnicalAnalysis class="hidden md:block"/>
   
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { TechnicalAnalysis } from 'vue-tradingview-widgets';

export default defineComponent({
    name: 'App',
    components: {
        TechnicalAnalysis
        // CryptoMarket,
        // Screener,
        // Snaps,
    },
});
</script>