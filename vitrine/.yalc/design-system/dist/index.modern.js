import React from 'react';

var BackLink = function BackLink(props) {
  var label = props.label,
    destination = props.destination,
    title = props.title;
  return React.createElement("a", {
    href: destination,
    title: title,
    className: 'cta cta--goBack'
  }, React.createElement("span", {
    className: "cta--goBack__arrow"
  }, "\u2190"), label);
};

var generateUUID = function generateUUID() {
  return "xx-4x-yxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
var BaseInput = function BaseInput(props) {
  var type = props.type,
    placeholder = props.placeholder,
    label = props.label,
    required = props.required,
    readonly = props.readonly;
  var id = generateUUID();
  return React.createElement("div", {
    className: 'baseInput'
  }, React.createElement("label", {
    className: 'baseInput__label',
    htmlFor: id
  }, label), React.createElement("input", {
    className: 'baseInput__input',
    id: id,
    type: type,
    value: '',
    placeholder: placeholder || "",
    required: required || false,
    readOnly: readonly || false,
    onChange: props.onChange
  }));
};

var BigLink = function BigLink(props) {
  var label = props.label,
    destination = props.destination,
    _props$target = props.target,
    target = _props$target === void 0 ? "_self" : _props$target,
    title = props.title;
  return React.createElement("a", {
    href: destination,
    target: target,
    title: title,
    className: 'cta cta--boxed'
  }, label);
};

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
    readonly = props.readonly;
  var id = generateUUID$1();
  return React.createElement("div", {
    className: 'boolInput'
  }, React.createElement("input", {
    id: id,
    className: 'boolInput__input',
    type: type,
    required: required || false,
    readOnly: readonly || false,
    onChange: props.onChange
  }), label && React.createElement("label", {
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

export { BackLink, BaseInput, BigLink, BoolInput, Button, FooterLink, HeroBanner };
//# sourceMappingURL=index.modern.js.map
