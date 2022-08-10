<template>
  <Banner></Banner>
  <div class="content-wrap">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Banner from '@pages/index/components/Banner.vue'
import Footer from '@pages/index/components/Footer.vue'

export default {
  components: { Banner, Footer },
  setup() {
    return {
    }
  },
}
</script>

<style lang="sass">
@import '@src/scss/reset.scss'
@import '@pages/index/scss/index.scss'
</style>
