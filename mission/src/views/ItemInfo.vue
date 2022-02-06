<template>
<div v-if = "currentItem === '1'">
  <item-1> </item-1>
</div>
<div v-else-if = "currentItem === '2'">
  <item-2> </item-2>
</div>
<div v-else-if = "currentItem === '3'">
  <item-3> </item-3>
</div>
</template>

<script>
import Item1 from '../components/ItemList/Item1.vue';
import Item2 from '../components/ItemList/Item2.vue';
import Item3 from '../components/ItemList/Item3.vue';

export default {
  components: { Item1, Item2, Item3 },
  mounted() {
    console.log(this.$router);
  },
  computed: {
    currentItem() {
      return this.$route.params.id;
    },
  },
};

</script>
