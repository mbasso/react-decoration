import React from 'react';
import { validateClass } from '../../utils/validators';

export default function computedProps(configs) {
  return (Target) => {
    validateClass(Target, 'bindProps');

    return (props) => {
      const newProps = Object.assign({}, props);
      Object.keys(configs).forEach((propName) => {
        newProps[propName] = configs[propName];
      });
      return (
        <Target {...newProps} />
      );
    };
  };
}
