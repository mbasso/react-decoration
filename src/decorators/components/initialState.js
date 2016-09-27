import { validateClass } from '../../utils/validators';

export default function initialState(state) {
  return (target) => {
    validateClass(target, 'initialState');

    // eslint-disable-next-line
    target.prototype.state = state;
  };
}
