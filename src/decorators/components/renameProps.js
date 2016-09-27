import React from 'react';
import { validateClass } from '../../utils/validators';

export default function renameProps(newNames) {
  return (Target) => {
    validateClass(Target, 'renameProps');

    return (props) => {
      const newProps = Object.assign({}, props);
      const names = Object.keys(newNames);
      Object.keys(newProps).forEach((key) => {
        const nameIndex = names.indexOf(key);
        if (names && key && nameIndex !== -1) {
          newProps[newNames[names[nameIndex]]] = newProps[key];
          delete newProps[key];
        }
      });
      return <Target {...newProps} />;
    };
  };
}
