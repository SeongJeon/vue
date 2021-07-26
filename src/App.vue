<template>
  <div id="app">
    <ul class="skip_navigation">
      <li><a href="#gnb">주메뉴</a></li>
      <li><a href="#container">주내용</a></li>
      <li><a href="#footer">하단내용</a></li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
.skip_navigation {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }

  a {
    display: block;
    position: absolute;
    left: -100%;
    top: 0;
    text-decoration: none;

    &:focus,
    &:active {
      left: 0;
      transition: 0.2s ease-out;
    }
  }
}
</style>