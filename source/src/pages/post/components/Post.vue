<template>
<div class="article-wrap">
  <Loading v-show="isLoading"></Loading>
  <h1 class="article-title">{{title}}</h1>
  <article>
    <component :is="view"></component>
  </article>
</div>
</template>

<script>
import { ref, watch } from 'vue'
import Loading from '@components/loading/Loading.vue'
import { useRoute } from 'vue-router'
import { getAsyncMdComponent, articleList } from '../js/config'
const title = ref('');
const isLoading = ref(true);
const page = ref(1);

export default {
  components: {
    Loading
  },
  setup() {
    const route = useRoute();
    watch(() => route.params,
      params => {
        page.value = Number(params.page) || 1;
      }, {
      immediate: true
    });
    return {
      articleList,
      page,
      isLoading,
      title,
      toggleLoadingState(state) {
        isLoading.value = state;
      },
    }
  },
  computed: {
    view() {
      this.toggleLoadingState(true);
      const page = this.page;
      return getAsyncMdComponent(page, (info) => {
        console.log(info.toc);  // 可以用来做侧边栏 toc
        const title = articleList[page - 1].title;
        this.title = title;
        this.toggleLoadingState(false);
      })
    }
  },
}
</script>


<style lang="sass">
@import '@src/scss/prism.scss'
@import '@src/scss/katex.scss'
@import '@src/scss/md.scss'
@import '../scss/post.scss'
</style>
