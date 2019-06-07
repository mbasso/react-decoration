import { validateFunction } from '../../utils/validators';

export default function lock(target, key, descriptor) {
  let userFunc = descriptor.value;

  validateFunction(userFunc, 'lock');

  return {
    ...descriptor,
    value: function locker(...params) {
      if (userFunc) {
        // Call the result immediately, but then set the function to
        // null so it cannot be called again
        userFunc.apply(this, [...params]);
        userFunc = null;
      }
    },
  };
}
