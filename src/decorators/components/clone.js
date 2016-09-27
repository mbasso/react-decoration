import { validateClass } from '../../utils/validators';

export default function clone(source) {
  return (target) => {
    validateClass(target, 'clone');
    const originalPrototype = Object.assign({}, target.prototype);
    const originalTarget = Object.assign({}, target);
    Object.setPrototypeOf(target.prototype, source.prototype);
    Object.setPrototypeOf(target, source);
    Object.assign(target.prototype, originalPrototype);
    Object.assign(target, originalTarget);
  };
}
