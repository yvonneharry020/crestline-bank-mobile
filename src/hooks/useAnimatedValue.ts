import { useEffect } from 'react';
import {
  useSharedValue,
  withSpring,
  withTiming,
  Easing,
} from 'react-native-reanimated';

interface AnimatedValueOptions {
  initialValue?: number;
  springConfig?: object;
}

export const useFadeIn = (delay = 0) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    const timer = setTimeout(() => {
      opacity.value = withTiming(1, { duration: 400, easing: Easing.out(Easing.quad) });
      translateY.value = withSpring(0, { damping: 20, stiffness: 100 });
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return { opacity, translateY };
};

export const useScalePress = () => {
  const scale = useSharedValue(1);

  const onPressIn = () => {
    scale.value = withSpring(0.96, { damping: 20, stiffness: 300 });
  };

  const onPressOut = () => {
    scale.value = withSpring(1, { damping: 20, stiffness: 300 });
  };

  return { scale, onPressIn, onPressOut };
};

export const useCountUp = (target: number, duration = 1200) => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = withTiming(target, {
      duration,
      easing: Easing.out(Easing.exp),
    });
  }, [target, duration]);

  return value;
};
