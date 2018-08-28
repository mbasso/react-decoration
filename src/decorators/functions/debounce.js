import { methodDecorator } from '../../utils/decorate';


export const debounce = (wait = 300, immediate = false) => methodDecorator((wrappedMethod) => {
  let timeout;

  // NOTE: If `this` would be used inside this function it would have been required
  //       to define the function as bindable function (no arrow function).
  const debouncer = (...params) => {
    const callNow = immediate && !timeout;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        wrappedMethod(...params);
      }
    }, wait);

    if (callNow) {
      wrappedMethod(...params);
    }
  };
  return debouncer;
});
