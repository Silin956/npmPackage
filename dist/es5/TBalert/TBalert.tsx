import React from 'react';
import * as PropTypes from 'prop-types';
import { Component } from '../utils';
import './style.scss';

interface TBAlertProps {
  type: 'success' | 'warn' | 'error' | 'info'; // alert类型
  showIcon: boolean; // 是否显示icon图标
  message: string; // 默认标题
  description: string; // 默认详情描述
  closeable: boolean; // 默认显示关闭按钮
  closeText: React.ReactNode; // 默认关闭按钮样式
  beforeClose?: () => void;
  onClose?: () => void;
}

interface TBAlertStates {
  visible: boolean;
}

export default class TBAlert extends Component<TBAlertProps, TBAlertStates> {
  static propTypes = {
    type: PropTypes.string,
    showIcon: PropTypes.bool,
    massage: PropTypes.string,
    description: PropTypes.string,
    closeable: PropTypes.bool,
    closeText: PropTypes.string,
  };
  defaultProps = {
    type: 'success', // alert类型
    showIcon: false, // 是否显示icon图标
    message: '', // 默认标题
    description: '', // 默认详情描述
    closeable: true, // 默认显示关闭按钮
    closeText: <span>x</span>, // 默认关闭按钮样式
  };
  constructor(props: TBAlertProps) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  close(e: any) {
    const evt = e || event;
    evt.preventDefault();
    if (this.props.beforeClose) { // 窗口关闭前
      this.props.beforeClose();
    }
    if (this.props.onClose) {
      this.setState({ visible: false });
      this.props.onClose();
    }
  }

  iconType(type: string) {
    switch (type) {
      case 'success':
        return 'icon-tishichenggong';
      case 'warn':
        return 'icon-jinggao';
      case 'info':
        return 'icon-Group-';
      case 'error':
        return 'icon-error';
      default:
        return 'icon-tishichenggong';
    }
  }

  iconClassName() {
    const { type } = this.props;
    return `iconfont ${this.iconType(type)}`;
  }

  render() {
    const {
      type,
      showIcon,
      message,
      description,
      closeable,
      closeText,
    } = this.props;
    return (
      <>
      {
        this.state.visible ?
        <div style={this.props.type ? this.style(this.props.type) : {}}
        className={this.className('tb-alert', 'clear', `tb-alert-${type}`)}>
          {
            showIcon ?
              <div className="tb-alert-icon">
                <span className={this.iconClassName()}></span>
              </div>
              : null
          }
          <div className="tb-alert-message">
            {
              message ?
                <div className="tb-alert-title">{message}</div> : null
            }
            {
              description ?
                <div className="tb-alert-description">{description}</div> : null
            }
          </div>
          {
            closeable ?
              <div
                className="tb-alert-close"
                onClick={this.close.bind(this)}
              >{closeText}</div> : null
          }
        </div> : null
      }
      </>
    );
  }
}
