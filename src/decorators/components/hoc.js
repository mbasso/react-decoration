import { validateClass } from '../../utils/validators';

export default function hoc(containerComponent, ...params) {
  return (target) => {
    validateClass(target, 'hoc');

    return params.length === 0 ? containerComponent(target) : containerComponent(...params)(target);
  };
}
