<template>
  <div class="container">
    <label for="selector">
      Filter:
      <select v-model="select" id="selector">
        <option value="all" selected>All</option>
        <option value="test" selected>test</option>
      </select>
      <!-- <input class="form-control" @keyup="searchTitleMethod" v-model="searchTitle" type="search" placeholder="Search Title" aria-label="Search">
      <input class="form-control" @keyup="searchTitleMethod" v-model="searchPrice" type="number" placeholder="Search Price" aria-label="Search"> -->
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
  data() {
    return {
      products: [],
      select: "all",
      selectedFilter: "all",
      searchTitle: "",
      searchPrice: ""
    };
  },

  methods: {
    getProducts() {
      // let products = [];
      // let sortedProducts = productItems.sort((a, b) => Number(a.order) - Number(b.order));
      var filter = {
        price: 100,
        purchased: true
      };

      this.products = productItems.filter(item => {
        for (let key in filter) {
          console.log(item[key] + "=" + filter[key]);
          if (item[key] === undefined || item[key] != filter[key]) return false;
        }
        return true;
      });

      // console.log(this.searchPrice)
      // this.products = productItems
      //                 .filter(product => product.price == this.searchPrice)
      //                 .sort((a, b) => Number(a.order) - Number(b.order));

      // sortedProducts.forEach(product => {
      //   if (this.selectedFilter == "all") {
      //     this.products.push(product);
      //   } else if (product.title.includes(this.searchTitle)) {
      //     this.products.push(product);
      //   }
      // });
    },
    searchTitleMethod() {
      this.getProducts();
    }
  },
  created() {
    this.getProducts();
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
