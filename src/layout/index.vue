<template>
  <div id="wrap">
    <vue-header></vue-header>

    <vue-main></vue-main>

    <vue-footer></vue-footer>
  </div>
</template>

<script>
import {Header, Footer, Main} from '@/layout/components';

export default {
  name: 'Layout',
  components: {
    VueHeader : Header,
    VueFooter : Footer,
    VueMain : Main,
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
  },
};
</script>