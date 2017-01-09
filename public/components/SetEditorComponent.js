'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var SetEditorComponent = function (_React$Component) {
    _inherits(SetEditorComponent, _React$Component);

    function SetEditorComponent() {
      _classCallCheck(this, SetEditorComponent);

      return _possibleConstructorReturn(this, (SetEditorComponent.__proto__ || Object.getPrototypeOf(SetEditorComponent)).apply(this, arguments));
    }

    _createClass(SetEditorComponent, [{
      key: 'submitSet',
      value: function submitSet(evt) {
        evt.preventDefault();

        $.ajax({
          url: '/api/sets',
          method: 'POST',
          data: {
            name: this.nameInput.value,
            description: this.descriptionInput.value
          }
        }).done(function (data) {
          ReactRouter.browserHistory.goBack();
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return React.createElement(
          'div',
          { className: 'set-editor' },
          React.createElement(
            'h2',
            null,
            'Set Editor'
          ),
          React.createElement(
            'form',
            { onSubmit: function onSubmit(evt) {
                _this2.submitSet(evt);
              } },
            React.createElement('input', { placeholder: 'name', ref: function ref(input) {
                _this2.nameInput = input;
              } }),
            React.createElement('input', { placeholder: 'description', ref: function ref(input) {
                _this2.descriptionInput = input;
              } }),
            React.createElement(
              'button',
              null,
              'Save'
            )
          )
        );
      }
    }]);

    return SetEditorComponent;
  }(React.Component);

  FC.SetEditorComponent = SetEditorComponent;
})();
//# sourceMappingURL=SetEditorComponent.js.map
