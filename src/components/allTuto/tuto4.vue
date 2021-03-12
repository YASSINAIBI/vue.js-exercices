<template>
  <div class="container">
    <h1>Calculate Product Price With Computed Properties</h1>

    <div class="card border-success mb-3" style="max-width: 20rem;">
      <img
        class="card-img-top"
        src="https://i.pinimg.com/originals/fc/4a/70/fc4a706ea69a56f510d946555a31d4d4.jpg"
        alt="Card image cap"
      />
      <div class="card-body text-success">
        <h5 class="card-title">product title</h5>
        <p class="card-text">
          product description
        </p>
        <input type="range" max="20" min="1" step="1" v-model="amount" />
      </div>
      <div class="card-footer bg-transparent border-success">
        subTotal: {{ total }}€
      </div>
      <div class="card-footer bg-transparent border-success">
        totalItems: {{ amount }}
      </div>
      <div class="card-footer bg-transparent border-success">
        total: {{ totalValue }}€
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      amount: 1,
      total: 20,
    };
  },

  computed: {
    totalValue: function() {
      return this.amount * this.total;
    },
  },

  name: "Tuto4",
};
</script>

<style lang="scss" scoped></style>

