<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="gnbExpanded"></v-app-bar-nav-icon>
    <v-app-bar-title>{{ $store.state.pageTitle }}</v-app-bar-title>

    <v-select
      v-model="selected"
      :hint="'컴포넌트를 선택하세요'"
      :items="menus"
      item-text="name"
      item-value="link"
      label="Select component"
    ></v-select>
  </v-app-bar>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      selected: '',
      menus: [
        {
          name: 'Reply component',
          link: '/reply',
        },
        {
          name: 'Page navigation',
          link: '/pageNavigation',
        },
      ],
    };
  },
  watch: {
    selected() {
      const url = '/components' + this.selected;

      if (this.$route.path === url) {
        return;
      }

      this.$router.push(url);
    },
  },
  methods: {
    ...mapActions(['setGnbExpanded']),

    gnbExpanded() {
      this.setGnbExpanded(!this.$store.state.gnbExpanded);
    },
  },
};
</script>
