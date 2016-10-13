import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {
  component,
  pureComponent,
  displayName,
  propTypes,
  defaultProps,
  hoc,
  withStyles,
  computedProps,
  bindProps,
  transferProps,
  renameProps,
  mapProps,
  clone,
  initialState,
  renderNothing,
  renderChildren,
  renderComponent,
  handleRenderError,
} from '../src/';

describe('components', () => {
  const types = {
    foo: React.PropTypes.string,
  };

  it('propTypes', () => {
    @propTypes(types)
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    expect(Div.propTypes).toEqual(types);
  });

  it('defaultProps', () => {
    @defaultProps(types)
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    expect(Div.defaultProps).toEqual(types);
  });

  it('hoc', () => {
    const HighOrderComponent = (Component) => (
      // eslint-disable-next-line
      class HOC extends React.Component {

        render() {
          return (
            <span className="fooBar" >
              <Component {...this.props} />
            </span>
          );
        }
      }
    );

    @hoc(HighOrderComponent)
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div bar="foo" />);
    const span = renderer.getRenderOutput();
    expect(span.type).toBe('span');
    const div = span.props.children;
    expect(div.props).toEqual({
      bar: 'foo',
    });
  });

  it('hoc with params', () => {
    let param = null;

    const HighOrderComponent = (foo) => (Component) => {
      // do something with params...
      param = foo;
      // eslint-disable-next-line
      return class HOC extends React.Component {

        render() {
          return (
            <span className="fooBar" >
              <Component {...this.props} />
            </span>
          );
        }
      };
    };

    @hoc(HighOrderComponent, 'bar')
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div bar="foo" />);
    const span = renderer.getRenderOutput();
    expect(span.type).toBe('span');
    const div = span.props.children;
    expect(div.props).toEqual({
      bar: 'foo',
    });
    expect(param).toEqual('bar');
  });

  it('component', () => {
    @component
    // eslint-disable-next-line
    class Div {

      render() {
        return (
          <div />
        );
      }
    }

    const renderDiv = () => {
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(<Div />);
    };

    expect(renderDiv).toNotThrow();
  });

  it('pureComponent', () => {
    @pureComponent
    // eslint-disable-next-line
    class Div {

      render() {
        return (
          <div />
        );
      }
    }

    const renderDiv = () => {
      const renderer = ReactTestUtils.createRenderer();
      renderer.render(<Div />);
    };

    expect(renderDiv).toNotThrow();
  });

  it('displayName', () => {
    @displayName('awesomeDiv')
    // eslint-disable-next-line
    class Div {

      render() {
        return (
          <div />
        );
      }
    }

    expect(Div.displayName).toEqual('awesomeDiv');
  });

  it('withStyles', () => {
    const style = {
      center: {
        textAlign: 'center',
      },
    };

    @withStyles(style)
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div />);
    const result = renderer.getRenderOutput();
    expect(result.props.styles).toEqual(style);
  });

  it('computedProps', () => {
    @computedProps({
      fullName: ({ name, surname }) => `${name} ${surname}`,
    })
    // eslint-disable-next-line
    class Div extends React.Component {

      static propTypes = {
        name: React.PropTypes.string,
        surname: React.PropTypes.string,
      }

      render() {
        return (
          <div />
        );
      }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div name="Matteo" surname="Basso" />);
    const div = renderer.getRenderOutput();
    expect(div.props.name).toEqual('Matteo');
    expect(div.props.surname).toEqual('Basso');
    expect(div.props.fullName).toEqual('Matteo Basso');
  });

  it('bindProps', () => {
    @bindProps({
      name: 'Matteo',
      surname: 'Basso',
    })
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div />);
    const div = renderer.getRenderOutput();
    expect(div.props.name).toEqual('Matteo');
    expect(div.props.surname).toEqual('Basso');
  });

  it('transferProps', () => {
    @transferProps
    // eslint-disable-next-line
    class Div extends React.Component {

      static propTypes = {
        foo: React.PropTypes.string,
      }

      render() {
        return (
          <div />
        );
      }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div foo="foo" bar="bar" />);
    const result = renderer.getRenderOutput();
    expect(result.props).toEqual({
      foo: 'foo',
      others: {
        bar: 'bar',
      },
    });
  });

  it('renameProps', () => {
    @renameProps({
      foo: 'loremIpsum',
    })
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div foo="foo" bar="bar" example="example" />);
    const result = renderer.getRenderOutput();
    expect(result.props).toEqual({
      loremIpsum: 'foo',
      bar: 'bar',
      example: 'example',
    });
  });

  it('mapProps', () => {
    @mapProps((props) => {
      const newProps = Object.assign({}, props);
      Object.keys(newProps).forEach((key) => {
        newProps[key] += '.';
      });
      return newProps;
    })
    // eslint-disable-next-line
    class Div extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div foo="foo" bar="bar" example="example" />);
    const result = renderer.getRenderOutput();
    expect(result.props).toEqual({
      foo: 'foo.',
      bar: 'bar.',
      example: 'example.',
    });
  });

  it('clone', () => {
    // eslint-disable-next-line
    class Foo extends React.Component{

      static propTypes = {
        foo: React.PropTypes.string,
      }

      static childContextTypes = {
        example: React.PropTypes.string,
      }

      getChildContext() {
        return ({
          example: 'fooBar',
        });
      }

      render() {
        return (
          <div>
            foo
          </div>
        );
      }
    }

    @clone(Foo)
    // eslint-disable-next-line
    class Bar extends React.Component{

      static propTypes = {
        bar: React.PropTypes.string,
      }

      render() {
        return (
          <div>
            bar
          </div>
        );
      }
    }

    expect(Bar.propTypes).toEqual({
      bar: React.PropTypes.string,
    });
    expect(Bar.childContextTypes).toEqual({
      example: React.PropTypes.string,
    });
    expect(Bar.prototype.getChildContext()).toEqual({
      example: 'fooBar',
    });
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Bar />);
    const rendered = renderer.getRenderOutput();
    expect(rendered.type).toBe('div');
    expect(rendered.props.children).toEqual('bar');
  });

  it('initialState', () => {
    const state = {
      foo: 'bar',
    };

    @initialState(state)
    // eslint-disable-next-line
    class Foo extends React.Component {

      render() {
        return (
          <div />
        );
      }
    }

    expect(Foo.prototype.state).toEqual(state);
    const rendered = ReactTestUtils.renderIntoDocument(<Foo />);
    const foo = ReactTestUtils.findRenderedComponentWithType(rendered, Foo);
    expect(foo.state).toEqual(state);
  });

  it('renderNothing', () => {
    @renderNothing
    // eslint-disable-next-line
    class Div extends React.Component {

    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Div foo="foo" bar="bar" example="example" />);
    const result = renderer.getRenderOutput();
    expect(result).toEqual(null);
  });

  it('renderChildren', () => {
    @renderChildren
    // eslint-disable-next-line
    class Wrapper extends React.Component {

    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(
      <Wrapper>
        <div />
      </Wrapper>
    );
    const result = renderer.getRenderOutput();
    expect(result).toEqual(<div />);
  });

  it('renderComponent', () => {
    // eslint-disable-next-line
    class Foo extends React.Component {

      render() {
        return (
          <div>
            foo
          </div>
        );
      }
    }

    @renderComponent(Foo)
    // eslint-disable-next-line
    class Bar extends React.Component {

    }

    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Bar foo="bar" />);
    const result = renderer.getRenderOutput();
    expect(result).toEqual(<Foo foo="bar" />);
  });

  it('handleRenderError', () => {
    // eslint-disable-next-line
    class Foo extends React.Component {

      render() {
        return (
          <div>
            foo
          </div>
        );
      }
    }

    let renderer = ReactTestUtils.createRenderer();
    renderer.render(<Foo />);
    let result = renderer.getRenderOutput();
    expect(result).toEqual(<div>foo</div>);

    @handleRenderError()
    // eslint-disable-next-line
    class Bar extends React.Component {

      render() {
        throw new Error('Error during render');
      }
    }

    renderer = ReactTestUtils.createRenderer();
    renderer.render(<Bar />);
    result = renderer.getRenderOutput();
    expect(result).toEqual(<div>Error during render</div>);

    @handleRenderError((ex) => <div>{`${ex.message.length}`}</div>)
    // eslint-disable-next-line
    class Foo2 extends React.Component {

      render() {
        throw new Error('Error during render');
      }
    }

    renderer = ReactTestUtils.createRenderer();
    renderer.render(<Foo2 />);
    result = renderer.getRenderOutput();
    expect(result).toEqual(<div>19</div>);

    @handleRenderError('Unable to render this component')
    // eslint-disable-next-line
    class Bar2 extends React.Component {

      render() {
        throw new Error('Error during render');
      }
    }

    renderer = ReactTestUtils.createRenderer();
    renderer.render(<Bar2 />);
    result = renderer.getRenderOutput();
    expect(result).toEqual(<div>Unable to render this component</div>);

    @handleRenderError(Foo)
    // eslint-disable-next-line
    class Foo3 extends React.Component {

      render() {
        throw new Error('Error during render');
      }
    }

    renderer = ReactTestUtils.createRenderer();
    renderer.render(<Foo3 />);
    result = renderer.getRenderOutput();
    expect(result.type).toEqual(Foo);
    expect(result.props.error).toBeA(Error);
  });
});
