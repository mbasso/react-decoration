import { validateFunction } from '../../utils/validators';

export default function debounce(wait = 300, immediate = false) {
  return (target, key, descriptor) => {
    const userFunc = descriptor.value;

    validateFunction(userFunc, 'debounce');

    let timeout;

    return {
      ...descriptor,
      value: function debouncer(...params) {
        const callNow = immediate && !timeout;
        clearTimeout(timeout);

        timeout = setTimeout(() => {
          timeout = null;
          if (!immediate) {
            userFunc.apply(this, [...params]);
          }
        }, wait);

        if (callNow) {
          userFunc.apply(this, [...params]);
        }
      },
    };
  };
}
