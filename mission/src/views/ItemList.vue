<template>
  <div id="item-list-page">
    <Header />
    <div class='top'> </div>
    <div class="productContainer">
      <Product
        v-for="product in products"
        :key="product.name"
        :product="product"
        data-test="item">
      </Product>
    </div>
    <Nav />
    <Item />
    <div class='footer'> </div>
  </div>

</template>

<script>
import Header from '../components/Header.vue';
import Nav from '../components/Nav.vue';
import Product from '../components/ItemList/Item.vue';

export default {
  components: { Header, Nav, Product },
  name: 'ItemListPage',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Wool Socks Blue Navy',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Unisex Soft Cozy Socks for Cold Weather',
          mainImage: 'blue',
        },
        {
          id: 2,
          name: 'Wool Socks Violet Pink',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Unisex Soft Cozy Socks for Cold Weather',
          mainImage: 'violetpink',
        },
        {
          id: 3,
          name: 'Wool Socks Yellow',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Wool Socks 80% Thick Warm Socks',
          mainImage: 'yellow',
        },
        {
          id: 4,
          name: 'Wool Socks Turquoise',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Unisex Soft Cozy Socks for Cold Weather',
          mainImage: 'turquoise',
        },
        {
          id: 5,
          name: 'Wool Socks Brown',
          discountPrice: '13,000원',
          price: '12,300원',
          discountRate: '5%',
          description: 'Wool Socks 80% Thick Warm Socks',
          mainImage: 'brown',
        },
        {
          id: 6,
          name: 'Wool Socks Orange',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Unisex Soft Cozy Socks for Cold Weather',
          mainImage: 'orange',
        },
        {
          id: 7,
          name: 'Wool Socks Green',
          price: '13,000원',
          discountPrice: '12,300원',
          discountRate: '5%',
          description: 'Unisex Soft Cozy Socks for Cold Weather',
          mainImage: 'green',
        },
        {
          id: 8,
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
};

</script>

<style>
.top {
  margin-top: 100px;
}
.footer {
  margin-bottom: 100px;
}
img.main {
  display: inline-block;
  width: 50%;
}
.productContainer {
  display: grid;
  grid-template-columns: repeat(2,50%);
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
