import { validateFunction } from '../../utils/validators';

export default function time(message) {
  return (target, key, descriptor) => {
    const userFunc = descriptor.value;
    validateFunction(userFunc, 'time');

    return {
      ...descriptor,
      value: function timer(...params) {
        //eslint-disable-next-line
        console.time(message);
        const result = userFunc.apply(this, [...params]);
        //eslint-disable-next-line
        console.timeEnd(message);
        return result;
      },
    };
  };
}
