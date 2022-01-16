<template>
  <div id='item-info-page'></div>
  <div class="container">
    <div class="col-md-1">
      <h3>제품</h3>
      <div v-for ='product in products' :key='product.name'>
        <img class='main' :src='product.mainImage'/>
        <a class='sellerInfo'>
          <img class='seller' alt='review image' :src='product.sellerImage'/>
          <span class='sellerName'>Libly</span>
          <span class='hashtag'>#여성 #니트</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
      products: [
        {
          name: 'Round Neck Striped Sweater',
          mainImage: 'https://image.freepik.com/free-psd/ecological-tshirt-packaging-mockup_23-2149132440.jpg',
          sellerImage: 'https://cdn.pixabay.com/photo/2017/02/18/14/02/letters-2077238_960_720.png',
        },
      ],

    };
  },
  components: {},
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
    /* width: 375px;
    height: 667px; */
    background-color: #ffffff;
    margin: auto;
    position: relative;
}

a.sellerInfo {
  display: block;
  width:100%;
  margin-bottom: 10px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e9ecef;
}
span.hashtag {
  display: block;
  margin-top: 5px;
}
img.main {
  width: 375px;
  height: 375px;
}
img.seller {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border-style: solid;
  margin-left: 580px;
  background-color: #fff;
  vertical-align: middle;
}

.sellerName {
  font-weight: bold;
  margin-right: 600px;
  display: inline-block;
  padding-left: 10px;
}
</style>
