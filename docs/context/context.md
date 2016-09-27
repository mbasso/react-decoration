## @context(childContextTypes: contextTypes, childContext: Object)

Defines component's [childContextTypes and getChildContext](https://facebook.github.io/react/docs/context.html).

#### Example

```js
@context({
  theme: React.PropTypes.object,
}, {
  theme: {
    primaryColor: 'blue',
    secondaryColor: 'green',
  },
})
class ThemeProvider extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
```
