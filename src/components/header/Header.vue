<template>
  <transition name="mini">
    <div class="container">
      <div class="logo" v-show="showLogo">{{ logo }}</div>
      <div class="title" :class="!showLogo ? 'entry-title' : ''">
        {{ title }}
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: "编程日志",
    },
    showLogo: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      logo: "我的博客分享",
    };
  },
  computed: {
    heightStyle() {
      const height = this.showLogo ? ".6rem" : ".5rem";
      return {
        height,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 0.6rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: $color-content-background;
  box-shadow: 0 4px 8px rgb(50 50 50 / 15%);
  .logo {
    font-size: 0.2rem;
    color: $color-icon;
    margin-right: 0.4rem;
  }
  .title {
    width: 60%;
    font-size: 0.16rem;
  }
  .entry-title {
    font-size: 0.18rem;
  }

  &.mini-enter-active,
  &.mini-leave-active {
    transition: all 0.6s cubic-bezier(0.45, 0, 0.55, 1);
  }
  &.mini-enter-from,
  &.mini-leave-to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
</style>
