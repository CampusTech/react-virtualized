import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import { List as ImmutableList } from 'immutable';
import PropTypes from 'prop-types';
import * as React from 'react';
import { ContentBox, ContentBoxHeader, ContentBoxParagraph } from '../demo/ContentBox';
import AutoSizer from './AutoSizer';
import List from '../List';
/*:: import { type RowRendererParams } from '../List';*/
import styles from './AutoSizer.example.css';
/*:: type State = {
  hideDescription: boolean,
};*/
var AutoSizerExample = /*#__PURE__*/function (_React$PureComponent) {
  function AutoSizerExample() {
    var _this;
    _classCallCheck(this, AutoSizerExample);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, AutoSizerExample, [].concat(args));
    _defineProperty(_this, "state", {
      hideDescription: false
    });
    _defineProperty(_this, "_rowRenderer", function (_ref /*:: */) {
      var index = _ref /*:: */.index,
        key = _ref /*:: */.key,
        style = _ref /*:: */.style;
      var list = _this.context.list;
      var row = list.get(index);
      return /*#__PURE__*/React.createElement("div", {
        key: key,
        className: styles.row,
        style: style
      }, row.name);
    });
    return _this;
  }
  _inherits(AutoSizerExample, _React$PureComponent);
  return _createClass(AutoSizerExample, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var list = this.context.list;
      var hideDescription = this.state.hideDescription;
      return /*#__PURE__*/React.createElement(ContentBox, _extends({}, this.props, {
        style: {
          height: 400
        }
      }), /*#__PURE__*/React.createElement(ContentBoxHeader, {
        text: "AutoSizer",
        sourceLink: "https://github.com/bvaughn/react-virtualized/blob/master/source/AutoSizer/AutoSizer.example.js",
        docsLink: "https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md"
      }), /*#__PURE__*/React.createElement(ContentBoxParagraph, null, /*#__PURE__*/React.createElement("label", {
        className: styles.checkboxLabel
      }, /*#__PURE__*/React.createElement("input", {
        "aria-label": "Hide description (to show resize)?",
        className: styles.checkbox,
        type: "checkbox",
        checked: hideDescription,
        onChange: function onChange(event) {
          return _this2.setState({
            hideDescription: event.target.checked
          });
        }
      }), "Hide description (to show resize)?")), !hideDescription && /*#__PURE__*/React.createElement(ContentBoxParagraph, null, "This component decorates ", /*#__PURE__*/React.createElement("code", null, "List"), ", ", /*#__PURE__*/React.createElement("code", null, "Table"), ", or any other component and automatically manages its width and height. It uses Sebastian Decima's", ' ', /*#__PURE__*/React.createElement("a", {
        href: "https://github.com/sdecima/javascript-detect-element-resize",
        target: "_blank"
      }, "element resize event"), ' ', "to determine the appropriate size. In this example", ' ', /*#__PURE__*/React.createElement("code", null, "AutoSizer"), " grows to fill the remaining width and height of this flex column."), /*#__PURE__*/React.createElement("div", {
        className: styles.AutoSizerWrapper
      }, /*#__PURE__*/React.createElement(AutoSizer, null, function (_ref2) {
        var width = _ref2.width,
          height = _ref2.height;
        return /*#__PURE__*/React.createElement(List, {
          className: styles.List,
          height: height,
          rowCount: list.size,
          rowHeight: 30,
          rowRenderer: _this2._rowRenderer,
          width: width
        });
      })));
    }
  }]);
}(React.PureComponent);
_defineProperty(AutoSizerExample, "contextTypes", {
  list: PropTypes.instanceOf(ImmutableList).isRequired
});
export { AutoSizerExample as default };