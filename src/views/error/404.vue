<template>
  <div class="error_page">
    <div class="no-data">
      <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
      <p>
        페이지 주소(URL)가 잘못 입력되었거나<br />
        변경 또는 삭제되어 접속할 수 없습니다.
      </p>
      <div class="button_group ">
        <router-link to="" @click.native="gotoBack" class="btn_wh">이전 페이지로</router-link>
        <router-link to="/" class="btn_bk">홈으로 이동</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  methods: {
    gotoBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.button_group {
  > * + * {
    margin-left: 10px;
  }
  a {
    display: inline-block;
    height: 44px;
    width: 200px;
    line-height: 40px;
    padding: 0 20px;
    cursor: pointer;
    border-radius: 2px;
    text-align: center;
    font-size: 14px;
    font-family: 'NotoSansKR', sans-serif;

    &.btn_bk {
      background-color: #333333;
      border: 1px solid #333333;
      color: #ffffff;
    }
    &.btn_wh {
      background-color: #ffffff;
      border: 1px solid #dddddd;
      color: #1d1d1d;
    }
  }
}
.error_page {
  width: 100%;
  height: 100%;
  position: relative;
}
.error_page .no-data {
  max-width: 410px;
  margin: 0 auto;
  padding-top: 405px;
  padding-bottom: 160px;
  color: #1d1d1d;
  font-size: 16px;
  text-align: center;
  line-height: 1.4;
  letter-spacing: -0.38px;
}
.error_page .no-data h2 {
  padding-bottom: 8px;
  color: #1d1d1d;
  font-weight: bold;
  line-height: 1.38;
}
.error_page .no-data p {
  padding-bottom: 30px;
  color: #999999;
  font-size: 12px;
  line-height: 1.38;
}
.error_page .no-data .button-group {
  width: 100%;
}
.error_page .no-data .button-group a {
  width: calc(50% - 5px);

  display: block;
  float: left;
}
.error_page .no-data .button-group a button {
  width: 100%;
}
.error_page .no-data .button-group a:first-child {
  margin-right: 10px;
}
</style>
