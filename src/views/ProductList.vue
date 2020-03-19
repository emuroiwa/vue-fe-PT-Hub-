<template>
  <div class="container">
    <label for="selector">
      Filter:
      <select v-model="select" id="selector">
        <option value="all" selected>All</option>
        <option value="test" selected>test</option>
      </select>
    </label>
    <h1>SELECTED FILTER: {{ selectedFilter }}</h1>
    <div class="cards-container">
      <div v-for="(product, idx) in products" :key="idx">
        <product :product="product"></product>
      </div>
    </div>
  </div>
</template>

<script>
import product from "@/components/Product";
const productItems = require("@/assets/products.json");

export default {
  name: "ProductList",
  components: {
    product
  },
  computed: {
    products() {
      let products = [];
      productItems.forEach(product => {
        if (this.selectedFilter == "all") {
          products.push(product);
        }
      });

      return products;
    }
  },
  data() {
    return {
      select: "all",
      selectedFilter: "all"
    };
  },
  watch: {
    select: function(oldVal, newVal) {
      this.selectedFilter = newVal;
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1600px;
}
.cards-container {
  display: grid;
  grid-gap: 1rem;
}

@media only screen and (max-width: 600px) {
  .cards-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (max-width: 600px) {
  .cards-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (min-width: 601px) and (max-width: 800px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 801px) and (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (min-width: 1025px) {
  .cards-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
