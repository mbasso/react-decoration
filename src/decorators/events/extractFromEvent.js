import { validateFunction } from '../../utils/validators';

export default function extractFromEvent(property) {
  if (!property) {
    throw new Error('@extractFromEvent: invalid property specified in decorator');
  }

  return (target, key, descriptor) => {
    const userHandler = descriptor && descriptor.value;

    validateFunction(userHandler, 'extractFromEvent');

    return {
      ...descriptor,
      value: function processEvent(event, ...params) {
        userHandler.apply(this, [
          property.split('.').reduce((current, next) => current[next], event),
          ...params,
        ]);
      },
    };
  };
}
