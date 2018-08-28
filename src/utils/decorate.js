import isAccessor from 'is-accessor-descriptor';

import { validateFunction } from './validators';


export const createClassDecorator = () => {};

export const methodDecorator = (decorate) => (target, key, descriptor) => {
  let decoratedMethod;
  if (isAccessor(descriptor)) {
    return {
      configurable: true,
      get() {
        if (!decoratedMethod) {
          const boundWrappedMethod = this[key].bind(this);
          validateFunction(boundWrappedMethod, key);
          decoratedMethod = decorate(boundWrappedMethod);
          Object.defineProperty(this, key, {
            configurable: true,
            get() {
              return decoratedMethod;
            },
          });
        }
        return decoratedMethod;
      },
    };
  }
  // else: data descriptor
  const wrappedMethod = descriptor.value;
  decoratedMethod = decorate(wrappedMethod);
  return {
    ...descriptor,
    value(...args) {
      return decoratedMethod(...args);
    },
  };
};
