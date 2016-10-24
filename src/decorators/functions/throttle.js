import { validateFunction } from '../../utils/validators';

export default function throttle(wait = 300, options = {}) {
  return (target, key, descriptor) => {
    const userFunc = descriptor.value;

    validateFunction(userFunc, 'throttle');

    let result;
    let timeout;
    let args;
    let previous = 0;

    return {
      ...descriptor,
      value: function throttler(...params) {
        const now = Date.now();
        if (!previous && options.leading === false) {
          previous = now;
        }
        const remaining = wait - (now - previous);
        args = [...params];
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          result = userFunc.apply(this, args);
          if (!timeout) {
            args = null;
          }
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(() => {
            previous = options.leading === false ? 0 : Date.now();
            timeout = null;
            result = userFunc.apply(this, args);
            if (!timeout) {
              args = null;
            }
          }, remaining);
        }
        return result;
      },
    };
  };
}
