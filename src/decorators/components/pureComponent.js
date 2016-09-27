import React from 'react';
import { validateClass } from '../../utils/validators';

export default function pureComponent(target) {
  validateClass(target, 'pureComponent');

  Object.setPrototypeOf(target.prototype, React.PureComponent.prototype);
  Object.setPrototypeOf(target, React.PureComponent);
}
