import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { validateClass, validateFunction } from '../src/utils/validators';
import getEventPreprocessor from '../src/utils/getEventPreprocessor';

describe('utils', () => {
  it('should get a decorator for given events', () => {
    expect(getEventPreprocessor).toThrow('Invalid method list');
    const prevent = getEventPreprocessor('prevent', 'preventDefault');
    expect(prevent(() => false)).toExist();
    const unknownEventPrepocessor = getEventPreprocessor('unknown', 'foo');
    expect(unknownEventPrepocessor(() => false)).toExist();
    const invalidEventFunc = getEventPreprocessor('invalidEventFunc', 'foo', undefined, null);

    // eslint-disable-next-line
    class Input extends React.Component {
      @invalidEventFunc
      onChange() {
        // do nothing
      }

      render() {
        return (
          <input
            onChange={this.onChange}
          />
        );
      }
    }
    const rendered = ReactTestUtils.renderIntoDocument(<Input />);
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'input');
    expect(() => ReactTestUtils.Simulate.change(input)).toNotThrow();
  });

  it('should validate class', () => {
    expect(() => validateClass(class Foo {})).toNotThrow();
    expect(() => validateClass(43)).toThrow();
    expect(() => validateClass(undefined)).toThrow();
    expect(
      () => validateClass(43, 'foo')
    ).toThrow('@foo decorator can only be applied to class not: number');
  });

  it('should validate function', () => {
    expect(() => validateFunction(() => 43)).toNotThrow();
    expect(() => validateFunction(43)).toThrow();
    expect(() => validateFunction(undefined)).toThrow();
    expect(
      () => validateFunction(43, 'foo')
    ).toThrow('@foo decorator can only be applied to methods not: number');
  });
});
