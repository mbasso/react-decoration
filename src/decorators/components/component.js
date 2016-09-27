import React from 'react';
import { validateClass } from '../../utils/validators';

export default function component(target) {
  validateClass(target, 'component');

  Object.setPrototypeOf(target.prototype, React.Component.prototype);
  Object.setPrototypeOf(target, React.Component);
}
