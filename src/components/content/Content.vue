<template>
  <Header :style="headerStyle" v-show="!showFix"></Header>
  <Header :show-logo="false" v-show="showFix" :title="title"></Header>
  <div class="content" :style="contentTopStyle">
    <Scroll ref="scrollRef" class="article" :probeType="3" @scroll="onScroll">
      <Article class="article-item"></Article>
    </Scroll>
    <div class="to-top" @click="toTop" v-show="showTop">
      <div class="icon-top"></div>
    </div>
  </div>
</template>

<script>
import Scroll from "@/components/base/scroll/Scroll.vue";
import Article from "@/components/article/Article";
import Header from "@/components/header/Header.vue";
import useFixed from "./use-fixed";
export default {
  name: "Content",
  components: { Scroll, Article, Header },
  setup() {
    const title = "你话啊撒旦艰苦奋斗撒加大是否";
    const {
      scrollRef,
      headerStyle,
      contentTopStyle,
      showFix,
      onScroll,
      toTop,
      showTop,
    } = useFixed();
    return {
      title,
      headerStyle,
      contentTopStyle,
      onScroll,
      showFix,
      toTop,
      showTop,
      scrollRef,
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  background-color: $color-background;
  .article {
    position: absolute;
    left: 0;
    right: 0;
    top: 0rem;
    bottom: 0;
    width: 60%;
    overflow: hidden;
    margin: 0 auto;
    background-color: $color-content-background;
    .article-item {
      padding: 0.6rem 0rem 0.6rem 0.6rem;
    }
  }

  &.mini-enter-active,
  &.mini-leave-active {
    transition: all 6s cubic-bezier(0.45, 0, 0.55, 1);
  }
  &.mini-enter-from,
  &.mini-leave-to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  .to-top {
    position: fixed;
    right: 1.68rem;
    bottom: 0.4rem;
    .icon-top {
      font-size: 0.28rem;
      color: $color-icon;
      font-weight: 900;
    }
  }
}
</style>
