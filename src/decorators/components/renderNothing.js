import { validateClass } from '../../utils/validators';

export default function renderNothing(target) {
  validateClass(target, 'renderNothing');

  // eslint-disable-next-line
  target.prototype.render = () => null;
}
