import { validateClass } from '../../utils/validators';

export default function defaultProps(props) {
  return (target) => {
    validateClass(target, 'defaultProps');

    // eslint-disable-next-line
    target.defaultProps = props;
  };
}
