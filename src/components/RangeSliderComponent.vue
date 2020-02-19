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

    <span
      :class="{ firstBiggerThanSecond: warning }"
      class="range-slider__values"
    >{{firstRangeValue}} to {{secondRangeValue}}</span>
  </div>
</template>

<script>
import store from "../store/store";

export default {
  name: "RangeSlider",
  data() {
    return {
      firstRangeValue: 0,
      secondRangeValue: 1000000,
      warning: false
    };
  },
  methods: {
    commitChanges(callback, payload) {
      if (this.firstRangeValue > this.secondRangeValue) {
        this.warning = true;
      } else {
        this.warning = false;
      }
      store.commit(callback, payload);
    }
  },
  watch: {
    firstRangeValue: function() {
      this.commitChanges("setFirstRangeValue", this.firstRangeValue);
    },
    secondRangeValue: function() {
      this.commitChanges("setSecondRangeValue", this.secondRangeValue);
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
  height: 100px;
  padding: 0;
  margin-bottom: 50px;
}

.range-slider {
  position: absolute;
  left: 0;
  top: 40px;
}

.firstBiggerThanSecond {
  background-color: rgb(255, 238, 0);
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}

.range-slider {
  -webkit-appearance: none;
  width: 100%;
}
.range-slider:focus {
  outline: none;
}
.range-slider:focus::-webkit-slider-runnable-track {
  background: #343a40;
}
.range-slider:focus::-ms-fill-lower {
  background: #343a40;
}
.range-slider:focus::-ms-fill-upper {
  background: #343a40;
}
.range-slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #343a40;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
.range-slider::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #343a40;
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
  background: #343a40;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
.range-slider::-moz-range-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #343a40;
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
  background: #343a40;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}
.range-slider::-ms-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #343a40;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #a1d0ff;
  cursor: pointer;
}
</style>