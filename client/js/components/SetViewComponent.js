if (window.FC === undefined) { window.FC = {}; }

(function() {

  class SetViewComponent extends React.Component {

    constructor() {
      super();

      this.state = {
        name: '',
        cards: []
      }
    }

    componentDidMount() {
      var cb = (set) => {
        this.setState({
          name: set.name,
          cards: set.cards
        });
      };

      FC.UserData.getSet(this.props.params.setId, cb);
    }

    render() {

      var cardList;
      if (this.state.cards.length === 0) {
        cardList = <div>You have no cards.</div>
      }
      else {
        cardList = <ul>
          {this.state.cards.map((card) => {
            return <li key={card.id} className="card">
              <div className="front">Front: {card.front}</div>
              <div className="back">Back: {card.back}</div>
            </li>
          })}
        </ul>;
      }

      return <div className="set-component">
        <h2>Set: {this.state.name} (id: {this.props.params.setId})</h2>

        <div className="controls">
          <ul>
            <li><ReactRouter.Link to={'/set/' + this.props.params.setId + '/newcard'}>Add a New Card</ReactRouter.Link></li>
            <li><ReactRouter.Link to={'/set/' + this.props.params.setId + '/quizzer'}>Quizzer</ReactRouter.Link></li>
          </ul>


        </div>

        {cardList}
      </div>
    }

  }

  FC.SetViewComponent = SetViewComponent;

})();
