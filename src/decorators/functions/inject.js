import { validateFunction } from '../../utils/validators';

export default function inject(value) {
  return (target, key, descriptor) => {
    const userFunc = descriptor.value;

    validateFunction(userFunc, `inject${value.charAt(0).toUpperCase()}${value.slice(1)}`);

    return {
      ...descriptor,
      value: function Injector(...params) {
        return userFunc.apply(this, [this[value], ...params]);
      },
    };
  };
}
