import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {
  validateClass,
  validateFunction,
  validateClassAndFunction,
} from '../src/utils/validators';
import getEventPreprocessor from '../src/utils/getEventPreprocessor';
import wrapLifecycleMethod from '../src/utils/wrapLifecycleMethod';

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

  it('should validate class and function', () => {
    expect(() => validateClassAndFunction(() => 43)).toNotThrow();
    expect(() => validateClassAndFunction(class Foo {})).toNotThrow();
    expect(() => validateClassAndFunction(43)).toThrow();
    expect(() => validateClassAndFunction(undefined)).toThrow();
    expect(
      () => validateClassAndFunction(43, 'foo')
    ).toThrow('@foo decorator can only be applied to class and methods not: number');
  });

  it('should wrap a lifecycle method', (done) => {
    @wrapLifecycleMethod('componentDidUpdate',
      function componentDidUpdateWrapper(prevProps, prevState) {
        expect(prevProps).toEqual({});
        expect(prevState).toEqual({});
        expect(this.foo).toEqual('bar');
        return 'foo';
      }
    )
    // eslint-disable-next-line
    class DivWithoutUserMethod extends React.Component {

      constructor(...params) {
        super(...params);
        expect(this.componentDidUpdate({}, {})).toEqual('foo');
      }

      foo = 'bar'

      render() {
        return (
          <div />
        );
      }
    }

    @wrapLifecycleMethod('componentDidUpdate', (prevProps, prevState, res) => {
      expect(prevProps).toEqual({});
      expect(prevState).toEqual({});
      expect(res).toEqual(true);
      return 'foo';
    })
    // eslint-disable-next-line
    class DivWithUserMethod extends React.Component {

      constructor(...params) {
        super(...params);
        expect(this.componentDidUpdate({}, {})).toEqual('foo');
        done();
      }

      componentDidUpdate() {
        expect(this.foo).toEqual('bar');
        return true;
      }

      foo = 'bar';

      render() {
        return (
          <div />
        );
      }
    }

    ReactTestUtils.renderIntoDocument(<DivWithoutUserMethod />);
    ReactTestUtils.renderIntoDocument(<DivWithUserMethod />);
  });
});
