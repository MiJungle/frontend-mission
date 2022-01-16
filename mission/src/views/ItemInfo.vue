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
        <div class='productName'>{{product.name}}</div>
        <div class='discountRate'>{{product.discountRate}}</div>
        <div class='discountPrice'>{{product.discountPrice}}</div>
        <div class='originPrice'>{{product.originalPrice}}</div>
        <div class='buyNow'>
            <button type="button" @click="getData()"> {{product.discountPrice}} 구매하기 </button>
        </div>
        <h3>상품 정보</h3>
          <div v-html='productDetail'></div>
          <img class='detailImage' alt='detail image' :src='product.detailImage'/>
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
          discountPrice: '46,400원',
          originalPrice: '58,000원',
          discountRate: '20%',
          detailImage: 'https://images.unsplash.com/photo-1618677603544-51162346e165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        },
      ],
      productDetail: 'Colors: white <br/>Material: Polyester 44.8% Cotton 55.2% <br/>Size-Free(단면/cm)<br/>총장 61 <br/>가슴 55 <br/>소매 77',
    };
  },
  components: {},
  methods: {
    getData() {
    // eslint-disable-next-line no-alert
      alert('정말 구매하시겠습니까?');
    },
  },
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

/* 제품 상세 페이지 */
div.buyNow {
  width: 100%;
  position: fixed;
  bottom: -0px;
  z-index: 80;
}
.buyNow button {
  display: inline-block;
  width: 50%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgb(228, 228, 247);
}

div.discountRate {
  font-weight: bold;
  color: red;
  display: inline;
  margin-right: 10px;
}
div.originPrice {
  text-decoration: line-through;
  display: inline;
}
div.discountPrice {
  display: inline;
  margin-right: 10px;
}

img.detailImage2 {
  display: block;
  margin: auto;
}

img.detailImage {
  display: block;
  margin: auto;
}

</style>
