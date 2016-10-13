## @handleRenderError(handler: React.Component, string, function or nothing)

Suppress Components errors and show a message instead of failing to render the whole app.
Its behavior is based on the type of the parameter:
- `@handleRenderError()`: render the exception in a `div`.
- `@handleRenderError(handler: React.Component)`: render the given component with an `error` prop that represents the exception.
- `@handleRenderError(handler: string)`: render a `div` with the given string.
- `@handleRenderError(handler: function)`: render the element returned by the given function.
  The function accepts the exception as parameter.

#### Example

```js
@handleRenderError()
class Foo extends React.Component {

  render() {
    // this.undefined.bar will throw an Error
    // render => <div>{error}</div>
    return (
      <div>
        {this.undefined.bar}
      </div>
    );
  }
}

@handleRenderError((ex) => <div className="danger">{ex.message}<div>)
class Foo extends React.Component {

  render() {
    // this.undefined.bar will throw an Error
    // render => <div className="danger">{error.message}</div>
    return (
      <div>
        {this.undefined.bar}
      </div>
    );
  }
}

@handleRenderError('There is something wrong')
class Foo extends React.Component {

  render() {
    // this.undefined.bar will throw an Error
    // render => <div>There is something wrong</div>
    return (
      <div>
        {this.undefined.bar}
      </div>
    );
  }
}

class ErrorMessage extends React.Component {

  render() {
    return (
      <div>
        {this.props.error}
      </div>
    );
  }
}

@handleRenderError(ErrorMessage)
class Foo extends React.Component {

  render() {
    // this.undefined.bar will throw an Error
    // render => <ErrorMessage error={error}/>
    return (
      <div>
        {this.undefined.bar}
      </div>
    );
  }
}
```
