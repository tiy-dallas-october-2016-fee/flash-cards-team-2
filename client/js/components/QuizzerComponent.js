if (window.FC === undefined) { window.FC = {}; }

(function() {

  var correct;
  var incorrect

  class QuizzerComponent extends React.Component {

    constructor() {
      super();

      this.state = {
        currentCard: 0,
        showFront: true,
        completedQuiz: false
      }
    }

    reset(){
      correct = 0;
      incorrect = 0;


      this.setState({
        currentCard: 0,
        showFront:true,
        completedQuiz:false
      })

    }

    componentDidMount() {
      correct = 0;
      incorrect = 0;

      var cb = (set) => {

        // copy and shuffle array
        var shuffledCards = _.shuffle(set.cards.slice(0));

        this.setState({
          cards: shuffledCards,
          currentCard: 0,
          showFront: true
        });
      };

      FC.UserData.getSet(this.props.params.setId, cb);

    }
    componentWillUnmount(){
      correct = 0;
      incorrect = 0;
      console.log(this, 'componentDidUnmount')
    }

    cardClicked() {
      var copiedState = Object.assign({}, this.state);
      copiedState.showFront = !copiedState.showFront;

      this.setState(copiedState);
    }

    markCorrect() {

      var card = this.state.cards[this.state.currentCard];
      card.correctCount += 1;
      correct ++;
      FC.UserData.incrementCorrectCountOnCard(this.props.params.setId, card.id, () => {});

      var currentPosition = this.state.currentCard;
      if (currentPosition + 1 >= this.state.cards.length) {
        // ReactRouter.browserHistory.goBack();

        this.setState({
          completedQuiz:true,
        });
        return;
      }

      var copiedState = Object.assign({}, this.state);
      copiedState.currentCard += 1;
      this.setState(copiedState);
    }

    markIncorrect() {
      var card = this.state.cards[this.state.currentCard];
      card.incorrectCount += 1;
      incorrect ++;
      FC.UserData.incrementIncorrectCountOnCard(this.props.params.setId, card.id, () => {});

      var currentPosition = this.state.currentCard;
      if (currentPosition + 1 >= this.state.cards.length) {

        // ReactRouter.browserHistory.goBack();
        this.setState({
          completedQuiz:true,
        });
        return;
      }

      var copiedState = Object.assign({}, this.state);
      copiedState.currentCard += 1;
      this.setState(copiedState);
    }

    render() {

      var cardShower;
      var cardNavigation;
      var quizSummary;

      if (this.state.cards !== undefined) {
        var currentCard = this.state.cards[this.state.currentCard];
        var textToShow = this.state.showFront ? currentCard.front: currentCard.back;

        cardShower = <div>
          <div>Card count: {this.state.cards.length}</div>
          <div
            className="card"
            onClick={(evt) => { this.cardClicked(evt); }}>
            {textToShow}</div>
        </div>


        cardNavigation = <div className="card-navigation">
          <div className="correct" onClick={() => { this.markCorrect();}}>Correct</div>
          <div className="incorrect" onClick={() => {this.markIncorrect();}}>Incorrect</div>
        </div>;

        if (this.state.completedQuiz){
          cardNavigation = "";
          cardShower = "";
          quizSummary = <div className = "quiz-summary">
            <h1>Quiz Complete</h1>
            <h2>Correct: {correct} </h2>
            <h2>Incorrect: {incorrect}</h2>
            <div className='button quiz-done'
            onClick={()=> {ReactRouter.browserHistory.goBack();}}>click to go back</div>
            <div className='button quiz-done'
            onClick={()=>{this.reset();}}>Again!</div>
        </div>
        }
      }

      return <div className="quizzer">
        The Quizzer

        {cardShower}
        {cardNavigation}
        {quizSummary}
      </div>
    }

  }

  FC.QuizzerComponent = QuizzerComponent;

})();
