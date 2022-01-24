<template>
  <div class="item-list-item">
    <div class='productContainer'>
      <div v-for ='product in products' :key='product.name'>
        <img class='main' alt='main image' :src="require(`@/assets/img/${product.mainImage}.jpg`)"/>
        <div class='productName' data-test="productName">{{product.name}}</div>
        <div class='discountRate'>{{product.discountRate}}</div>
        <div class='discountPrice'>{{product.discountPrice}}</div>
        <i class="bi bi-house-door-fill"></i>
        <div class='price'>{{product.price}}</div>
        <div class='description'>{{product.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  data() {
    return {
      products: [
        {
          name: 'Wool Socks Blue Navy',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Unisex Soft Cozy Socks for Cold Weather',
          mainImage: 'blue',
        },
        {
          name: 'Wool Socks Violet Pink',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Unisex Soft Cozy Socks for Cold Weather',
          mainImage: 'violetpink',
        },
        {
          name: 'Wool Socks Yellow',
          discountPrice: '13,000원',
          price: '12,300원',
          discountRate: '5%',
          description: 'Wool Socks 80% Thick Warm Socks',
          mainImage: 'yellow',
        },
        {
          name: 'Wool Socks Turquoise',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Unisex Soft Cozy Socks for Cold Weather',
          mainImage: 'turquoise',
        },
        {
          name: 'Wool Socks Brown',
          discountPrice: '12,300원',
          price: '13,000원',
          discountRate: '5%',
          description: 'Wool Socks 80% Thick Warm Socks',
          mainImage: 'brown',
        },
        {
          name: 'Wool Socks Orange',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Unisex Soft Cozy Socks for Cold Weather',
          mainImage: 'orange',
        },
        {
          name: 'Wool Socks Green',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Unisex Soft Cozy Socks for Cold Weather',
          mainImage: 'green',
        },
        {
          name: 'Wool Socks Cherry Pink',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Unisex Soft Cozy Socks for Cold Weather',
          mainImage: 'cherrypink',
        },
      ],
    };
  },
  components: {
  },
};
</script>

<style>
img.main {
  display: inline-block;
  width: 50%;
}
.productContainer {
  display: grid;
  grid-template-columns: repeat(2, 50%);
}
.discountRate {
  font-weight: bold;
  color: red;
  display: inline-block;
  padding-right: 10px;
}
.discountPrice {
  display: inline-block;
}
.price {
  text-decoration: line-through;
  font-size: 15px;
}
</style>
