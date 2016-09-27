import { validateClass } from '../../utils/validators';

export default function contextTypes(props) {
  return (target) => {
    validateClass(target, 'contextTypes');

    // eslint-disable-next-line
    target.contextTypes = props;
  };
}
