import React from 'react';
import { validateClass } from '../../utils/validators';

export default function computedProps(configs) {
  return (Target) => {
    validateClass(Target, 'computedProps');

    return (props) => {
      const newProps = Object.assign({}, props);
      Object.keys(configs).forEach((propName) => {
        newProps[propName] = configs[propName](newProps);
      });
      return (
        <Target {...newProps} />
      );
    };
  };
}
