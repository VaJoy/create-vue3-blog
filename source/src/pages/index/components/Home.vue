<template>
  <h1>📚 文章列表</h1>
  <ul>
    <li v-for="(item, index) in articleList" :key="`article-${index}`"
    @click="gotoArticle(item)">
      <a>{{item.title}}</a>
    </li>
  </ul>
</template>

<script>
import { router } from '@src/js/router'
import { articleList } from '@pages/post/js/config'

export default {
  setup() {
    return {
      articleList,
      gotoArticle(item) {
        router.push(item.path);
      }
    }
  },
}
</script>

<style lang="sass">
@import '@pages/index/scss/home.scss'
</style>