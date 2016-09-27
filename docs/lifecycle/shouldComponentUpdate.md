## @shouldComponentUpdate(callback: shouldComponentUpdate)

Defines component's lifecycle method [shouldComponentUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate).

#### Example

```js
@shouldComponentUpdate((nextProps, nextState) => (
  nextProps.id !== this.props.id
))
class Foo extends React.Component {

  render() {
    return (
      <div>
        bar
      </div>
    );
  }
}
```
