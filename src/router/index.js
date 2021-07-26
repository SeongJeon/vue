import Vue from 'vue';
import VueRouter from 'vue-router';
import Paths from '@/router/paths.js';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: Paths,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  },
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  // to 경로에 해당하는 메타 태그 검색
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // from 경로에 해당하는 메타 태그 검색
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // paths 에 title이 있으면 변경
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // 기존 메타태그 삭제
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el =>
    el.parentNode.removeChild(el)
  );

  // 정의된 메타태그 없으면 건너뜀
  if (!nearestWithMeta) return next();

  // 메타태그 생성 및 head에 추가
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    .forEach(tag => document.head.appendChild(tag));
  next();
});

router.afterEach(() => {
  store.dispatch('setGnbExpanded', false);
  store.dispatch('setDimmedExpanded', false);
});

export default router;
