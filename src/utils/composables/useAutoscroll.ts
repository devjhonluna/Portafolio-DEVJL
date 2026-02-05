import { ref, onMounted, onUnmounted } from 'vue';

export function useAutoscroll(speed: number = 1) {
 const elementRef=ref(null)
 const animationID=ref(null)

 const animate=()=>{
    const el:HTMLElement = elementRef.value?.$el || elementRef.value;
    if (!el) return

    if (el.scrollLeft >= el.scrollWidth / 2) {
      el.scrollLeft = 0;
    } else {
      el.scrollLeft += speed;
    }
    animationID.value = requestAnimationFrame(animate);
  };

  const play = () => {
    cancelAnimationFrame(animationID.value);
    animate();
  };

  const pause = () => {
    cancelAnimationFrame(animationID.value);
  };

  onMounted(play);
  onUnmounted(pause);

  return { elementRef, play, pause };   
}
