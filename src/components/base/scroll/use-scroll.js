import BScroll from "@better-scroll/core";
import observeDom from "@better-scroll/observe-dom";
import { onMounted, onUnmounted, ref } from "vue";

BScroll.use(observeDom);

export default function useScroll(rootRef, options, emit) {
  const scroll = ref(null);
  onMounted(() => {
    scroll.value = new BScroll(rootRef.value, {
      observeDOM: true,
      ...options,
    });
    if (options.probeType > 0) {
      scroll.value.on("scroll", (pos) => {
        emit("scroll", pos);
      });
    }
  });
  onUnmounted(() => {
    scroll.value.destroy();
  });
  return scroll;
}
