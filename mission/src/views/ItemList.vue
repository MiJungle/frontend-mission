<template>
  <div id="item-list-page">
    <Header />
    <div class='top'> </div>
    <Nav />
    <Item />
    <div class='footer'> </div>
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
.top {
  margin-top: 100px;
}
.footer {
  margin-bottom: 100px;
}
</style>
