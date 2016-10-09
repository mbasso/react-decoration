import { validateClass } from '../../utils/validators';

export default function lifecycle(values) {
  return (target) => {
    validateClass(target, 'lifecycle');

    Object.keys(values).forEach((name) => {
      Object.defineProperty(target.prototype, name, {
        value: values[name],
      });
    });
  };
}
