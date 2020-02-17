<template>
  <div class="range-slider-wrapper">
    <span class="print-range">{{minRange}} to {{maxRange}}</span>
    <span class="range-slider"><input value="0" min="0" max="99500" step="500" type="range"/>
    <input value="50000" min="500" max="100000" step="500" type="range"/></span>
  </div>
</template>

<script>
export default {
    name: 'RangeSlider',
    data() {
        return {
            minRange: '0',
            maxRange: '50000'
        }
    }
}
</script>

<style>
.range-slider-wrapper {
    width: 300px;
    margin: auto;
    text-align: center;
    position: relative;
    height: 6em;
}
.print-range {
    font-size: 18px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.range-slider{
    position: absolute;
    left: 0;
    bottom: 0;
}
.range-slider input[type="range"] {
    width: 100%;
    z-index: 2;
}
</style>