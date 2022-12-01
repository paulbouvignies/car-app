function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var _excluded = ["label"];
var BackLink = function BackLink(props) {
  var label = props.label,
    rest = _objectWithoutPropertiesLoose(props, _excluded);
  return React.createElement("a", Object.assign({
    className: 'cta cta--goBack'
  }, rest), React.createElement("span", {
    className: "cta--goBack__arrow"
  }, "\u2190"), label);
};

var _excluded$1 = ["label"];
var generateUUID = function generateUUID() {
  return "xx-4x-yxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
var BaseInput = function BaseInput(props) {
  var label = props.label,
    rest = _objectWithoutPropertiesLoose(props, _excluded$1);
  var id = generateUUID();
  var _React$useState = React.useState(false),
    isFocus = _React$useState[0],
    setIsFocus = _React$useState[1];
  console.log(isFocus);
  return React.createElement("div", {
    className: "baseInput  " + (isFocus ? 'baseInput--focus' : '')
  }, React.createElement("label", {
    className: 'baseInput__label',
    htmlFor: id
  }, label), React.createElement("input", Object.assign({
    className: "baseInput__input",
    id: id,
    onFocus: function onFocus(_e) {
      setIsFocus(true);
    },
    onBlur: function onBlur(_e) {
      setIsFocus(false);
    }
  }, rest)));
};

var _excluded$2 = ["label"];
var BigLink = function BigLink(props) {
  var label = props.label,
    rest = _objectWithoutPropertiesLoose(props, _excluded$2);
  return React.createElement("a", Object.assign({
    className: 'cta cta--boxed'
  }, rest), label);
};

var _excluded$3 = ["label", "type", "required", "readonly"];
var generateUUID$1 = function generateUUID() {
  return "xx-4x-yxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
var BoolInput = function BoolInput(props) {
  var label = props.label,
    type = props.type,
    required = props.required,
    readonly = props.readonly,
    rest = _objectWithoutPropertiesLoose(props, _excluded$3);
  var id = generateUUID$1();
  return React.createElement("div", {
    className: 'boolInput'
  }, React.createElement("input", Object.assign({
    id: id,
    className: 'boolInput__input',
    type: type,
    required: required || false,
    readOnly: readonly || false
  }, rest)), label && React.createElement("label", {
    className: 'boolInput__label',
    htmlFor: id
  }, label));
};

var Button = function Button(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'button' : _props$type,
    label = props.label,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? "primary" : _props$variant;
  if (type === "submit") {
    return React.createElement("button", {
      className: 'cta cta--boxed--' + variant,
      type: type,
      onSubmit: props.onsubmit
    }, label);
  } else {
    return React.createElement("button", {
      className: 'cta cta--boxed--' + variant,
      type: type,
      onClick: props.onclick
    }, label);
  }
};

var FooterLink = function FooterLink(props) {
  var label = props.label,
    destination = props.destination,
    _props$target = props.target,
    target = _props$target === void 0 ? "_self" : _props$target,
    title = props.title;
  return React.createElement("a", {
    href: destination,
    target: target,
    title: title,
    className: 'cta cta--footerType'
  }, label);
};

var getFormatedContent = function getFormatedContent(content) {
  return content.split("/n").map(function (item, key) {
    return React.createElement("p", {
      key: key
    }, key === 0 && React.createElement("span", {
      className: "heroBanner__content__arrow"
    }, "\u25B7"), item, React.createElement("br", null));
  });
};
var HeroBanner = function HeroBanner(props) {
  var cover = props.cover,
    content = props.content;
  return React.createElement("div", {
    className: "heroBanner"
  }, React.createElement("img", {
    className: "heroBanner__cover",
    src: cover,
    alt: ""
  }), content && React.createElement("div", {
    className: "heroBanner__content"
  }, getFormatedContent(content)));
};

exports.BackLink = BackLink;
exports.BaseInput = BaseInput;
exports.BigLink = BigLink;
exports.BoolInput = BoolInput;
exports.Button = Button;
exports.FooterLink = FooterLink;
exports.HeroBanner = HeroBanner;
//# sourceMappingURL=index.js.map
