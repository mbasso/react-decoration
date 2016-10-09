import { validateClass } from '../../utils/validators';

export default function renderChildren(target) {
  validateClass(target, 'renderChildren');

  // eslint-disable-next-line
  target.prototype.render = function render() {
    return this.props.children;
  };
}
