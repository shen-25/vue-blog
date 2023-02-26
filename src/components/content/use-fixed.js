import { computed, ref } from "vue";

import { getPx, getPxToRem } from "@/assets/js/dom";

export default function useFixed() {
  const maxHeight = 200;
  const showFix = ref(false);
  const scrollY = ref(0);
  const scrollRef = ref(null);
  const px = document.getElementsByTagName("html")[0].style["font-size"];
  const TITLE_HEIGHT = 0.6 * getPx(px);
  const headerStyle = computed(() => {
    let diff = TITLE_HEIGHT;
    const scrollYVal = scrollY.value;
    if (scrollYVal < 0) {
      return;
    }
    if (scrollYVal <= TITLE_HEIGHT) {
      showFix.value = false;
      diff = -scrollYVal;
    } else {
      showFix.value = true;
    }
    return {
      transform: `translate3d(0, ${diff}px, 0)`,
    };
  });

  const contentTopStyle = computed(() => {
    let top = 0.68;
    const scrollYVal = scrollY.value;
    if (scrollYVal > 0 && scrollYVal < TITLE_HEIGHT) {
      top = 0.68 - getPxToRem(scrollYVal);
    }
    return { top: `${top}rem` };
  });

  const showTop = computed(() => {
    if (scrollY.value > TITLE_HEIGHT) {
      return true;
    } else {
      return false;
    }
  });

  function onScroll(pos) {
    scrollY.value = -pos.y;
  }

  function toTop() {
    const scroll = scrollRef.value.scroll;
    console.log(scrollRef.value);
    scroll.scrollTo(0, 0);
  }

  return {
    headerStyle,
    contentTopStyle,
    showFix,
    onScroll,
    toTop,
    showTop,
    scrollRef,
  };
}
