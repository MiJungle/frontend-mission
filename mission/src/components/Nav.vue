<template>
  <div id='Nav'>
    <ul class='container'>
      <i class='fa fa-home'></i>
      <i class='fa fa-heart'></i>
      <i class='fa fa-cart-arrow-down'></i>
      <i class='fa fa-user'></i>
      <li class='homeButton'>홈</li>
      <li class='favButton' @click='favAlert()'>찜</li>
      <li class='cartButton' @click='cartAlert()'>장바구니</li>
      <li class='myPageButton'>마이 페이지</li>
    </ul>
  </div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
    };
  },
  methods: {
    favAlert() {
    // eslint-disable-next-line no-alert
      alert('찜한 상품에 추가되었습니다');
    },
    cartAlert() {
    // eslint-disable-next-line no-alert
      alert('장바구니에 추가되었습니다');
    },
  },
};
</script>

<style>
.container {
    width: 100%;
    justify-content: middle;
    position: fixed;
    bottom: -0px;
    right: 0px;
    background-color: rgba(158, 0, 255, 1);
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
}
li {
  list-style: none;
}
ul.container {
  margin: 0;
}
i {
  margin-bottom: 5px;
}
</style>
