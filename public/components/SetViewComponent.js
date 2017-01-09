"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var SetViewComponent = function (_React$Component) {
    _inherits(SetViewComponent, _React$Component);

    function SetViewComponent() {
      _classCallCheck(this, SetViewComponent);

      var _this = _possibleConstructorReturn(this, (SetViewComponent.__proto__ || Object.getPrototypeOf(SetViewComponent)).call(this));

      _this.state = {
        name: '',
        cards: []
      };
      return _this;
    }

    _createClass(SetViewComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var cb = function cb(set) {
          _this2.setState({
            name: set.name,
            cards: set.cards
          });
        };

        FC.UserData.getSet(this.props.params.setId, cb);
      }
    }, {
      key: "render",
      value: function render() {

        var cardList;
        if (this.state.cards.length === 0) {
          cardList = React.createElement(
            "div",
            null,
            "You have no cards."
          );
        } else {
          cardList = React.createElement(
            "ul",
            null,
            this.state.cards.map(function (card) {
              return React.createElement(
                "li",
                { key: card.id, className: "card" },
                React.createElement(
                  "div",
                  { className: "front" },
                  "Front: ",
                  card.front
                ),
                React.createElement(
                  "div",
                  { className: "back" },
                  "Back: ",
                  card.back
                )
              );
            })
          );
        }

        return React.createElement(
          "div",
          { className: "set-component" },
          React.createElement(
            "h2",
            null,
            "Set: ",
            this.state.name,
            " (id: ",
            this.props.params.setId,
            ")"
          ),
          React.createElement(
            "div",
            { className: "controls" },
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: '/set/' + this.props.params.setId + '/newcard' },
                  "Add a New Card"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  ReactRouter.Link,
                  { to: '/set/' + this.props.params.setId + '/quizzer' },
                  "Quizzer"
                )
              )
            )
          ),
          cardList
        );
      }
    }]);

    return SetViewComponent;
  }(React.Component);

  FC.SetViewComponent = SetViewComponent;
})();
//# sourceMappingURL=SetViewComponent.js.map
