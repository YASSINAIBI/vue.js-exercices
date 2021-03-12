<template>
  <div class="tuto3">
    <h1>Change Website Colors with CSS Custom Variables</h1>

    <div class="countainer" :style="{ '--main-color': color }">
      <ul class="switchColor">
        <li data-color="#f1c40f" @click="setColor"></li>
        <li data-color="#3498db" @click="setColor"></li>
        <li data-color="#8e44ad" @click="setColor"></li>
        <li data-color="#c0392b" @click="setColor"></li>
        <li data-color="#95a5a6" @click="setColor"></li>
      </ul>

      <div class="colors">
        <div>Change</div>
        <div>Change</div>
        <div>Change</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selected: "",
      color: localStorage.getItem("color")
        ? localStorage.getItem("color")
        : "#f1c40f",
    };
  },

  methods: {
    setColor() {
      this.selected = event.target.getAttribute("data-color");
      localStorage.setItem("color", this.selected);

      this.color = localStorage.getItem("color");
    },
  },

  name: "Tuto3",
};
</script>

<style lang="scss" scoped>
@mixin selectedElements($selected, $color) {
  li {
    &:nth-of-type(#{$selected}) {
      background-color: $color;
      margin: 2%;
      padding: 2%;
      list-style: none;
      display: inline-flex;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }
}

.colors {
  div {
    display: inline-flex;
    margin: 5%;
    padding: 5%;
    background-color: var(--main-color);
  }
}

.switchColor {
  @include selectedElements(1, #f1c40f);
  @include selectedElements(2, #3498db);
  @include selectedElements(3, #8e44ad);
  @include selectedElements(4, #c0392b);
  @include selectedElements(5, #95a5a6);
}
</style>
