## @displayName(name: string)

Defines component's [displayName](https://facebook.github.io/react/docs/component-specs.html#displayname).

#### Example

```js
@displayName('AwesomeTextField')
class TextField extends React.Component {

  render() {
    const { foo, ...others } = this.props;
    return (
      <input type="text" value={foo} {...others} />
    );
  }
}
```
