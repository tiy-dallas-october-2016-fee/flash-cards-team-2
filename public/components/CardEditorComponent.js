'use strict';

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
      key: 'submitCard',
      value: function submitCard(evt) {
        var _this2 = this;

        evt.preventDefault();

        if (this.frontInput.value === '' || this.backInput.value === '') {
          //error on no card front or back text
          console.log('no front/back info', this.frontInput.value, this.backInput.value);
          return;
        }

        var cb = function cb() {
          // ReactRouter.browserHistory.goBack();
          _this2.frontInput.value = '';
          _this2.backInput.value = '';
        };

        FC.UserData.addCardToSet(this.props.params.setId, this.frontInput.value, this.backInput.value, cb);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return React.createElement(
          'div',
          { className: 'card-editor' },
          React.createElement(
            'div',
            { className: 'directions' },
            React.createElement(
              'h2',
              null,
              'The Card Editor'
            ),
            React.createElement(
              'p',
              null,
              'Enter the data on the front and back of your card.'
            ),
            React.createElement(
              'p',
              null,
              'When completed with the card click the submit button and your cards will be added to the set.'
            ),
            React.createElement(
              'p',
              null,
              ' When finished adding cards click the done button.'
            )
          ),
          React.createElement(
            'form',
            { onSubmit: function onSubmit(evt) {
                _this3.submitCard(evt);
              } },
            React.createElement('textarea', { placeholder: 'front', ref: function ref(input) {
                _this3.frontInput = input;
              } }),
            React.createElement('input', { placeholder: 'back', ref: function ref(input) {
                _this3.backInput = input;
              } }),
            React.createElement(
              'button',
              null,
              'Submit'
            ),
            React.createElement(
              'button',
              { onClick: function onClick(evt) {
                  ReactRouter.browserHistory.goBack();
                } },
              'Done'
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
