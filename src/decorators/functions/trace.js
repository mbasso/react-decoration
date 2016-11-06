import { validateFunction } from '../../utils/validators';

export default function trace(target, key, descriptor) {
  const userFunc = descriptor.value;
  validateFunction(userFunc, 'trace');

  return {
    ...descriptor,
    value: function traceDecorator(...params) {
      //eslint-disable-next-line
      console.trace();
      return userFunc.apply(this, [...params]);
    },
  };
}
