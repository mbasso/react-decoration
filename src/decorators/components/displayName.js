import { validateClass } from '../../utils/validators';

export default function displayName(name) {
  return (target) => {
    validateClass(target, 'displayName');

    // eslint-disable-next-line
    target.displayName = name;
  };
}
