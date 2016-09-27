## @componentWillUpdate(callback: componentWillUpdate)

Defines component's lifecycle method [componentWillUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-componentwillupdate).

#### Example

```js
@componentWillUpdate(() => {
  console.log('Wait a second...');
})
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
