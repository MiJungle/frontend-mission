<template>
  <div id='header'>
    <div class='headerbar' :class="{'headerbar--hidden' : !showHeaderbar }">SOCKSTEENS</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showHeaderbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  // beforeUnmount() {
  //   window.removeEventListner('scroll', this.onScroll);
  // },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showHeaderbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
.headerbar {
    background-color: rgba(219, 255, 0, 1);
    padding: 10px;
    position: fixed;
    right: 0px;
    width: 100vw;
    transform: translate3d(0,0,0);
    transition: 0.1s all ease-out;
    top: 0px;
    letter-spacing: 3px;
    color: rgba(55, 190, 248, 1);
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    font-weight: bold;
    text-shadow: -1px 0 #CF4EC2, 0 1px #CF4EC2, 1px 0 #CF4EC2, 0 -1px #CF4EC2;
}

.headerbar.headerbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
