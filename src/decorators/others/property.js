import { validateClass } from '../../utils/validators';

export default function property(name, value) {
  return (target) => {
    validateClass(target, name);

    Object.defineProperty(target.prototype, name, {
      value,
    });
  };
}
