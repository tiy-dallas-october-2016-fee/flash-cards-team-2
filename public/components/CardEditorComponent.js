"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var CardEditorComponent = function (_React$Component) {
    _inherits(CardEditorComponent, _React$Component);

    function CardEditorComponent() {
      _classCallCheck(this, CardEditorComponent);

      return _possibleConstructorReturn(this, (CardEditorComponent.__proto__ || Object.getPrototypeOf(CardEditorComponent)).apply(this, arguments));
    }

    _createClass(CardEditorComponent, [{
      key: "submitCard",
      value: function submitCard(evt) {
        evt.preventDefault();

        var cb = function cb() {
          ReactRouter.browserHistory.goBack();
        };

        FC.UserData.addCardToSet(this.props.params.setId, this.frontInput.value, this.backInput.value, cb);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(
          "div",
          { className: "card-editor" },
          React.createElement(
            "h2",
            null,
            "The Card Editor"
          ),
          React.createElement(
            "form",
            { onSubmit: function onSubmit(evt) {
                _this2.submitCard(evt);
              } },
            React.createElement("input", { placeholder: "front", ref: function ref(input) {
                _this2.frontInput = input;
              } }),
            React.createElement("input", { placeholder: "back", ref: function ref(input) {
                _this2.backInput = input;
              } }),
            React.createElement(
              "button",
              null,
              "Save"
            )
          )
        );
      }
    }]);

    return CardEditorComponent;
  }(React.Component);

  FC.CardEditorComponent = CardEditorComponent;
})();
//# sourceMappingURL=CardEditorComponent.js.map
