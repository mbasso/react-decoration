## @renderComponent(component: React.Component)

Defines a render function that returns the given component.

#### Example

```js
class Foo extends React.Component {

  static propTypes = {
    foo: PropTypes.string,
  }

  render() {
    return (
      <div>
        {this.props.foo}
      </div>
    );
  }
}

@renderComponent(Foo)
class Bar extends React.Component {

  componentDidMount() {
    // do something here
  }

  /*
  render() {
    return <Foo {...this.props} />;
  }
  */
}
```
