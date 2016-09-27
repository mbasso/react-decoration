import { validateClass } from '../../utils/validators';

export default function childContext(obj) {
  return (target) => {
    validateClass(target, 'childContext');

    Object.defineProperty(target.prototype, 'getChildContext', {
      value: function childContextGetter() {
        return obj;
      },
    });
  };
}
