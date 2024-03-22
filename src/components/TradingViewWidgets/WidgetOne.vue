<template>
    <TechnicalAnalysis class="hidden md:block" />
   
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

<style>
    .tv-embed-widget-wrapper__body {
    background: #fff;
    border: none !important;
    border-radius: 3px;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    position: relative;
}
</style>