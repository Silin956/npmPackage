"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _utils = require("../utils");

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TBAlert =
/*#__PURE__*/
function (_Component) {
  _inherits(TBAlert, _Component);

  function TBAlert(props) {
    var _this;

    _classCallCheck(this, TBAlert);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TBAlert).call(this, props));
    _this.state = {
      visible: true
    };
    return _this;
  }

  _createClass(TBAlert, [{
    key: "close",
    value: function close(e) {
      var evt = e || event;
      evt.preventDefault();

      if (this.props.beforeClose) {
        // 窗口关闭前
        this.props.beforeClose();
      }

      if (this.props.onClose) {
        this.setState({
          visible: false
        });
        this.props.onClose();
      }
    }
  }, {
    key: "iconType",
    value: function iconType(type) {
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
  }, {
    key: "iconClassName",
    value: function iconClassName() {
      var type = this.props.type;
      return "iconfont ".concat(this.iconType(type));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          showIcon = _this$props.showIcon,
          message = _this$props.message,
          description = _this$props.description,
          closeable = _this$props.closeable,
          closeText = _this$props.closeText;
      return _react["default"].createElement(_react["default"].Fragment, null, this.state.visible ? _react["default"].createElement("div", {
        style: this.style(),
        className: this.className('tb-alert', 'clear', "tb-alert-".concat(type))
      }, showIcon ? _react["default"].createElement("div", {
        className: "tb-alert-icon"
      }, _react["default"].createElement("span", {
        className: this.iconClassName()
      })) : null, _react["default"].createElement("div", {
        className: "tb-alert-message"
      }, message ? _react["default"].createElement("div", {
        className: "tb-alert-title"
      }, message) : null, description ? _react["default"].createElement("div", {
        className: "tb-alert-description"
      }, description) : null), closeable ? _react["default"].createElement("div", {
        className: "tb-alert-close",
        onClick: this.close.bind(this)
      }, closeText) : null) : null);
    }
  }]);

  return TBAlert;
}(_utils.Component);

exports["default"] = TBAlert;
TBAlert.defaultProps = {
  type: 'success',
  // alert类型
  showIcon: false,
  //是否显示icon图标
  message: '',
  // 默认标题
  description: '',
  // 默认详情描述
  closeable: true,
  // 默认显示关闭按钮
  closeText: 'x' // 默认关闭按钮样式

};
TBAlert.propTypes = {
  type: _propTypes.PropTypes.string,
  showIcon: _propTypes.PropTypes.bool,
  massage: _propTypes.PropTypes.string,
  description: _propTypes.PropTypes.string,
  closeable: _propTypes.PropTypes.bool,
  closeText: _propTypes.PropTypes.string
};