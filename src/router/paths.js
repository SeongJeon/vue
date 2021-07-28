import store from '@/store';
import Layout from '@/layout';

// 로그인 사용자에 한해 어드민 페이지 진입
/*
const requireAuth = () => (from, to, next) => {
  if (store.state.isAuth) return next(); // isAuth === true면 페이지 이동
  next('/admin'); // isAuth === false면 다시 로그인 화면으로 이동
};
*/

// 로그인 사용자가 로그인 진입시 인터셉트
/*
const rejectAuth = () => (to, from, next) => {
  if (store.state.isAuth) return next('/admin/portfolio');
  next();
};
*/

const paths = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'index',
        path: '',
        component: () => import('@/views/Index'),
        meta: {
          title: 'Vue components',
        },
      },
    ],
  },
  {
    path: '/components',
    component: Layout,
    children: [
      {
        name: 'pageNavigation',
        path: 'pageNavigation',
        component: () => import('@/views/pageNavigation/Index'),
        meta: {
          title: 'Page navigation component | Vue',
        },
      },
      {
        name: 'reply',
        path: 'reply',
        component: () => import('@/views/reply/Index'),
        meta: {
          title: 'Reply component | Vue',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
  },
  {
    path: '*',
    redirect: '/404',
  },
];

export default paths;
