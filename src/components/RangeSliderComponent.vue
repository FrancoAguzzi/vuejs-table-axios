<template>
  <div class="range-slider__wrapper">
    <p class="range-slider__title">Employee Salary</p>
    <input
      v-model="firstRangeValue"
      type="range"
      min="0"
      max="1000000"
      step="500"
      class="range-slider"
      value="0"
    />
    <input
      v-model="secondRangeValue"
      type="range"
      min="0"
      max="1000000"
      step="500"
      class="range-slider"
      value="50000"
    />
    <span class="range-slider__values">{{minValue}} to {{maxValue}}</span>
  </div>
</template>

<script>
import store from "../store/store";

export default {
  name: "RangeSlider",
  data() {
    return {
      firstRangeValue: 0,
      secondRangeValue: 1000000
    };
  },
  computed: {
    minValue: function() {
      return this.firstRangeValue;
    },
    maxValue: function() {
      return this.secondRangeValue;
    }
  },
  methods: {
    setRangeOrder: function() {
      if (this.firstRangeValue > this.secondRangeValue) {
        console.log('BEFORE = first: ' + this.firstRangeValue + ' | second: ' + this.secondRangeValue);
        var temp = this.firstRangeValue;
        this.firstRangeValue = this.secondRangeValue;
        this.secondRangeValue = temp;
        console.log('AFTER = first: ' + this.firstRangeValue + ' | second: ' + this.secondRangeValue);
      }
    }
  },
  watch: {
    firstRangeValue: function() {
      this.setRangeOrder();
      store.commit("setFirstRangeValue", this.minValue);
    },
    secondRangeValue: function() {
      this.setRangeOrder();
      store.commit("setSecondRangeValue", this.maxValue);
    }
  }
};
</script>

<style>
.range-slider__wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0;
  margin-bottom: 50px;
}

.range-slider {
  position: absolute;
  left: 0;
  top: 40px;
}

.range-slider {
  -webkit-appearance: none;
  width: 100%;
}
.range-slider:focus {
  outline: none;
}
.range-slider:focus::-webkit-slider-runnable-track {
  background: #343A40;
}
.range-slider:focus::-ms-fill-lower {
  background: #343A40;
}
.range-slider:focus::-ms-fill-upper {
  background: #343A40;
}
.range-slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #343A40;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
.range-slider::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #343A40;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
.range-slider::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #343A40;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
.range-slider::-moz-range-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #343A40;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
}
.range-slider::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.range-slider::-ms-fill-lower,
.range-slider::-ms-fill-upper {
  background: #343A40;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
.range-slider::-ms-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #343A40;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
}
</style>