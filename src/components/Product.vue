<template>
  <div class="card">
    <img
      :src="product ? product.image : ''"
      :alt="product ? product.title : 'pt hub-image'"
    />
    <div class="bottom-overlay">
      <div class="card-body">
        <div class="card-text">
          <div class="title">{{ product ? product.title : "" }}</div>
          <div class="price">{{ product.price | formatNumber }}</div>
          <div class="discount" v-if="product.discount">
            {{ this.discountedPrice(product) | formatNumber }}
          </div>
          <div class="description">
            {{ product ? product.description : "" }}
          </div>
        </div>
        <div class="card-image">
          <img
            :src="product ? product.image : ''"
            :alt="product ? product.title : 'pt hub-image'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    discountedPrice(product) {
      if (product.discount) {
        return (
          product.price - (product.price * product.discount.slice(0, -1)) / 100
        );
      }
    }
  }
};
</script>

<style lang="scss">
.card {
  border-radius: 5px;
  border: 3px solid #306b68;
  position: relative;
}
.card-body {
  padding: 10px 10px 10px 10px;
  color: #fff;
  display: flex;
}
.card-text {
  text-align: left;
  opacity: 1;
  flex: 80%;
}
.card-image {
  text-align: right;
  flex: 20%;
}
.bottom-overlay {
  position: absolute;
  bottom: 0px;
  background: rgba(51, 50, 50, 0.7);
  height: 30%;
  width: 100%;
}

img {
  max-width: 100%;
  max-height: 75%;
  display: block;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
span {
  display: block;
  font-weight: 600;
}
.card-image img {
  height: 50%;
  width: 50%;
  border-radius: 50%;
}
.discount {
  display: inline;
  font-size: 17px;
}
.price {
  display: inline;
  font-size: 10px;
}
.description {
  display: block;
  font-size: 10px;
}
</style>
