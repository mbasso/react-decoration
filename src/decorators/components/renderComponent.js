import React from 'react';
import { validateClass } from '../../utils/validators';

export default function renderComponent(Component) {
  return (target) => {
    validateClass(target, 'renderComponent');

    // eslint-disable-next-line
    target.prototype.render = function render() {
      return <Component {...this.props} />;
    };
  };
}
