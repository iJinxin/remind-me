import { Component, Children } from 'react';

export class LocalizationProvider extends Component {
  render() {
    return Children.only(this.props.children);
  }
}

