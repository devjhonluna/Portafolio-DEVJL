import { ref, onMounted, onUnmounted } from 'vue';

interface TiltOptions {
  max?: number;        // Máxima rotación en grados
  perspective?: number; // Perspectiva CSS (profundidad)
  scale?: number;      // Escala al hacer hover
  speed?: number;      // Velocidad de transición al salir (ms)
}

export function useTilt(options: TiltOptions = {}) {
  const elementRef = ref<HTMLElement | null>(null);

  const settings = {
    max: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 400,
    ...options
  };

  const getEl = (): HTMLElement | null => {
    // Soporte para elementos DOM directos o componentes Vue
    return (elementRef.value as any)?.$el || elementRef.value;
  };

  const handleMouseMove = (e: MouseEvent) => {
    const el = getEl();
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calcular rotación (invertimos Y para que el tilt siga al mouse correctamente)
    const rotateX = ((y - centerY) / centerY) * -settings.max;
    const rotateY = ((x - centerX) / centerX) * settings.max;

    el.style.transition = 'none';
    el.style.transform = `perspective(${settings.perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`;
  };

  const handleMouseLeave = () => {
    const el = getEl();
    if (!el) return;

    el.style.transition = `transform ${settings.speed}ms ease`;
    el.style.transform = `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  onMounted(() => {
    const el = getEl();
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
    }
  });

  onUnmounted(() => {
    const el = getEl();
    if (el) {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    }
  });

  return { elementRef };
}