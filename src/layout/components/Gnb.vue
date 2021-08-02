<template>
  <v-navigation-drawer app v-model="$store.state.gnbExpanded">
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="(menu, index) in menus" :key="index">
          <router-link to="" @click.prevent="gotoLink('/components' + menu.link)">{{
            menu.name
          }}</router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'Gnb',
  data() {
    return {
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
  methods: {
    ...mapActions(['setPageTitle']),
    gotoLink(link) {
      console.log('dd');
      // this.$router.push(link);
      console.log(this.$route.params);
      console.log('test');
    },
  },
};
</script>

<style lagn="scss" scoped>
a {
  text-decoration: none;
  color: #000;
}
</style>
