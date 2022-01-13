<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div id="two-way-binding">
      <input type ="text" v-model="message" />
      <button type="button" @click="rotate">제출</button>
      <button type="button" @click="getData()">알림</button>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: '',
      count: 0,
    };
  },
  counter() {
    return {
    };
  },
  methods: {
    getData() {
      // eslint-disable-next-line no-alert
      alert(`${this.message} + 클릭한 횟수 : ${this.count}`);
      this.count += 1;
    },
    rotate() {
      this.message = this.message.slice(1) + this.message.slice(0, 1);
    },
  },
};

</script>

<style>
input {
  width: 140px;
}
</style>
