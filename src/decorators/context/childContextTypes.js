import { validateClass } from '../../utils/validators';

export default function childContextTypes(props) {
  return (target) => {
    validateClass(target, 'childContextTypes');

    // eslint-disable-next-line
    target.childContextTypes = props;
  };
}
