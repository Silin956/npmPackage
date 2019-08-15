import React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
// 继承React.Component并添加className和style函数
class Component<T, U> extends React.Component<any, any> {
  static defaultProps = {
      className: '',
      style: {},
  };
  static propType = {
      className: PropTypes.string,
      style: PropTypes.object,
  };
  constructor(props: any) {
    super(props);
  }
  classNames(...args: string[]) {
    return classnames(args);
  }
  className(...args: string[]) {
    return this.classNames.apply(this, args.concat([this.props.className]));
  }
  style(args: object) {
    return Object.assign({}, args, this.props.style);
  }
}

export default Component;
