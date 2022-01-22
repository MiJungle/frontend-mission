<template>
  <div id="item-list-page">
    <Header />
    <Nav />
    <Item />
  </div>

</template>

<script>
import Header from '../components/Header.vue';
import Nav from '../components/Nav.vue';
import Item from '../components/ItemList/Item.vue';

export default {
  name: 'ItemListPage',
  data() {
    return {
    };
  },
  components: {
    Header,
    Nav,
    Item,
  },
};

</script>

<style>
</style>
