import { validateFunction } from '../utils/validators';

export default function getEventPreprocessor(decorator, ...methods) {
  if (methods.length === 0) {
    throw new Error('Invalid method list');
  }

  return (target, key, descriptor) => {
    let userHandler = target;

    if (typeof userHandler !== 'function') {
      userHandler = descriptor && descriptor.value;
    }

    validateFunction(userHandler, decorator);

    return {
      ...descriptor,
      value: function processEvent(event, ...params) {
        methods.forEach((method) => {
          if (event && method && typeof event[method] === 'function') {
            event[method]();
          }
        });

        userHandler.apply(this, [event, ...params]);
      },
    };
  };
}
