import React from 'react';
import { validateClass } from '../../utils/validators';

export default function withStyles(obj) {
  return (Target) => {
    validateClass(Target, 'pureComponent');

    return (props) => <Target styles={obj} {...props} />;
  };
}
