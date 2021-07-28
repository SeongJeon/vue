<template>
  <div id="wrap">
    <vue-header></vue-header>

    <vue-gnb></vue-gnb>

    <vue-main></vue-main>
  </div>
</template>

<script>
import {Header, Main, Gnb} from '@/layout/components';

export default {
  name: 'Layout',
  components: {
    VueHeader: Header,
    VueMain: Main,
    VueGnb: Gnb,
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
  },
};
</script>
