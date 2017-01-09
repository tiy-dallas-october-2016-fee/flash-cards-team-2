'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (window.FC === undefined) {
  window.FC = {};
}

(function () {
  var SetListComponent = function (_React$Component) {
    _inherits(SetListComponent, _React$Component);

    function SetListComponent() {
      _classCallCheck(this, SetListComponent);

      var _this = _possibleConstructorReturn(this, (SetListComponent.__proto__ || Object.getPrototypeOf(SetListComponent)).call(this));

      _this.state = {
        sets: []
      };
      return _this;
    }

    _createClass(SetListComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.loadSets();
      }
    }, {
      key: 'loadSets',
      value: function loadSets() {
        var _this2 = this;

        FC.UserData.loadSets(function (data) {
          _this2.setState({
            sets: data.sets
          });
        });
      }
    }, {
      key: 'deleteSet',
      value: function deleteSet(setId) {
        var _this3 = this;

        $.ajax({
          url: '/api/sets/' + setId,
          method: 'DELETE'
        }).done(function () {
          _this3.loadSets();
        });
      }
    }, {
      key: 'addCards',
      value: function addCards(setId) {
        ReactRouter.hashHistory.push('/set/' + setId);
      }
    }, {
      key: 'navigateToQuiz',
      value: function navigateToQuiz(setId) {
        ReactRouter.hashHistory.push('/set/' + setId + '/quizzer');
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        console.log('SetList.render', this.state);

        var noSetsMessaging;
        if (this.state.sets.length === 0) {
          noSetsMessaging = React.createElement(
            'p',
            null,
            'You do not have any sets! Create one.'
          );
        }

        return React.createElement(
          'div',
          { className: 'set-list' },
          React.createElement(
            'h2',
            null,
            'Set List'
          ),
          noSetsMessaging,
          React.createElement(
            ReactRouter.Link,
            { to: '/create-set' },
            'Create new set'
          ),
          React.createElement(
            'ul',
            null,
            this.state.sets.map(function (set, index) {
              return React.createElement(
                'li',
                { key: set.id, className: 'set' },
                React.createElement(
                  'div',
                  { className: 'set-name' },
                  set.name
                ),
                React.createElement(
                  'div',
                  { className: 'number-of-cards' },
                  '# of cards: ',
                  set.cards.length
                ),
                React.createElement(
                  'p',
                  null,
                  set.description
                ),
                React.createElement(
                  'div',
                  { className: 'button delete-set', onClick: function onClick() {
                      _this4.deleteSet(set.id);
                    } },
                  'delete'
                ),
                React.createElement(
                  'div',
                  { className: 'button add-cards', onClick: function onClick() {
                      _this4.addCards(set.id);
                    } },
                  'add cards'
                ),
                React.createElement(
                  'div',
                  { className: 'button quiz', onClick: function onClick() {
                      _this4.navigateToQuiz(set.id);
                    } },
                  'quiz'
                )
              );
            })
          )
        );
      }
    }]);

    return SetListComponent;
  }(React.Component);

  FC.SetListComponent = SetListComponent;
})();
//# sourceMappingURL=SetListComponent.js.map
