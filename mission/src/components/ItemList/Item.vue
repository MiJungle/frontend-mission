<template>
  <div class="item-list-item">
      <img class='main' alt='main image' :src="require(`@/assets/img/${product.mainImage}.jpg`)"/>
      <div class="productInfo">
        <div class="productName">{{product.name}}</div>
        <div class='price'>{{product.price}}</div>
        <div class='discountRate'>{{product.discountRate}}</div>
        <div class='discountPrice'>{{product.discountPrice}}</div>
        <div class="description">{{product.description}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: ['product'],
};
</script>

<style>
</style>
