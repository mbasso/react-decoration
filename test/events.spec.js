import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {
  stopPropagation,
  preventDefault,
  killEvent,
  extractFromEvent,
  extractCurrentTarget,
  extractTarget,
  extractValue,
  extractNativeEvent,
  extractDataset,
} from '../src/';

describe('events', () => {
  it('stopPropagation', (done) => {
    let spy = null;

    // eslint-disable-next-line
    class Input extends React.Component {
      @stopPropagation
      onChange() {
        expect(this.props).toEqual({});
        expect(spy).toHaveBeenCalled();
        done();
      }

      render() {
        return (
          <input
            onChange={(e, ...params) => {
              spy = expect.spyOn(e, 'stopPropagation');
              this.onChange(e, ...params);
            }}
          />
        );
      }
    }
    const rendered = ReactTestUtils.renderIntoDocument(<Input />);
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'input');
    ReactTestUtils.Simulate.change(input);
  });

  it('preventDefault', (done) => {
    let spy = null;

    // eslint-disable-next-line
    class Input extends React.Component {
      @preventDefault
      onChange() {
        expect(this.props).toEqual({});
        expect(spy).toHaveBeenCalled();
        done();
      }

      render() {
        return (
          <input
            onChange={(e, ...params) => {
              spy = expect.spyOn(e, 'preventDefault');
              this.onChange(e, ...params);
            }}
          />
        );
      }
    }
    const rendered = ReactTestUtils.renderIntoDocument(<Input />);
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'input');
    ReactTestUtils.Simulate.change(input);
  });

  it('killEvent', (done) => {
    let spyStopPropagation = null;
    let spyPreventDefault = null;

    // eslint-disable-next-line
    class Input extends React.Component {
      @killEvent
      onChange() {
        expect(this.props).toEqual({});
        expect(spyStopPropagation).toHaveBeenCalled();
        expect(spyPreventDefault).toHaveBeenCalled();
        done();
      }

      render() {
        return (
          <input
            onChange={(e, ...params) => {
              spyStopPropagation = expect.spyOn(e, 'stopPropagation');
              spyPreventDefault = expect.spyOn(e, 'preventDefault');
              this.onChange(e, ...params);
            }}
          />
        );
      }
    }
    const rendered = ReactTestUtils.renderIntoDocument(<Input />);
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'input');
    ReactTestUtils.Simulate.change(input);
  });

  it('extractValue', (done) => {
    // eslint-disable-next-line
    class Input extends React.Component {
      @extractValue
      onChange(value) {
        expect(value).toEqual('foo');
        done();
      }

      render() {
        return (
          <input
            onChange={this.onChange}
            value="foo"
          />
        );
      }
    }
    const rendered = ReactTestUtils.renderIntoDocument(<Input />);
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'input');
    ReactTestUtils.Simulate.change(input);
  });

  it('extractTarget', (done) => {
    // eslint-disable-next-line
    class Input extends React.Component {
      @extractTarget
      onChange(target) {
        expect(target).toBeA(window.HTMLElement);
        done();
      }

      render() {
        return (
          <input
            onChange={this.onChange}
            value="foo"
          />
        );
      }
    }
    const rendered = ReactTestUtils.renderIntoDocument(<Input />);
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'input');
    ReactTestUtils.Simulate.change(input);
  });

  it('extractCurrentTarget', (done) => {
    // eslint-disable-next-line
    class Input extends React.Component {
      @extractCurrentTarget
      onChange(currentTarget) {
        expect(currentTarget).toBeA(window.HTMLElement);
        done();
      }

      render() {
        return (
          <input
            onChange={this.onChange}
            value="foo"
          />
        );
      }
    }
    const rendered = ReactTestUtils.renderIntoDocument(<Input />);
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'input');
    ReactTestUtils.Simulate.change(input);
  });

  it('extractNativeEvent', (done) => {
    // eslint-disable-next-line
    class Input extends React.Component {
      @extractNativeEvent
      onChange(nativeEvent) {
        expect(nativeEvent).toBeA(Object);
        expect(nativeEvent.type).toEqual('change');
        expect(nativeEvent.target).toBeA(window.HTMLElement);
        done();
      }

      render() {
        return (
          <input
            onChange={this.onChange}
            value="foo"
          />
        );
      }
    }
    const rendered = ReactTestUtils.renderIntoDocument(<Input />);
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'input');
    ReactTestUtils.Simulate.change(input);
  });

  it('extractDataset', (done) => {
    // eslint-disable-next-line
    class Button extends React.Component {
      @extractDataset
      onClick(/* dataset */) {
        // unable to test dataset:
        // https://github.com/tmpvar/jsdom/issues/961

        /* expect(dataset).toBeA(Object);
        expect(dataset.foo).toEqual('bar'); */
        done();
      }

      render() {
        return (
          <button
            onClick={this.onClick}
            data-foo="bar"
          />
        );
      }
    }
    const rendered = ReactTestUtils.renderIntoDocument(<Button />);
    const button = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'button');
    ReactTestUtils.Simulate.click(button);
  });

  it('extractFromEvent', (done) => {
    expect(extractFromEvent).toThrow('@extractFromEvent: invalid property specified in decorator');

    expect(() => {
      @extractFromEvent('bar')
      // eslint-disable-next-line
      class Foo extends React.Component {
        render() {
          return null;
        }
      }
    }).toThrow();

    // eslint-disable-next-line
    class Input extends React.Component {
      @extractFromEvent('isDefaultPrevented')
      onChange(isDefaultPrevented) {
        expect(isDefaultPrevented).toBeA('function');
        expect(isDefaultPrevented()).toEqual(false);
        done();
      }

      render() {
        return (
          <input
            onChange={this.onChange}
            value="foo"
          />
        );
      }
    }
    const rendered = ReactTestUtils.renderIntoDocument(<Input />);
    const input = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'input');
    ReactTestUtils.Simulate.change(input);
  });
});
