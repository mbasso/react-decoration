import { validateFunction } from '../../utils/validators';

export default function log(target, key, descriptor) {
  const userFunc = descriptor.value;
  validateFunction(userFunc, 'log');

  return {
    ...descriptor,
    value: function logger(...params) {
      //eslint-disable-next-line
      console.log(`Calling function "${key}" with params: `, ...params);
      return userFunc.apply(this, [...params]);
    },
  };
}
