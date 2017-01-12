if (window.FC === undefined) { window.FC = {}; }

(function() {

  class SetListComponent extends React.Component {

    constructor() {
      super();

      this.state = {
        sets: []
      }
    }

    componentDidMount() {
      this.loadSets();
    }

    loadSets() {

      FC.UserData.loadSets((data) => {
        this.setState({
          sets: data.sets
        });
      });

    }

    deleteSet(setId) {
      $.ajax({
        url: '/api/sets/' + setId,
        method: 'DELETE'
      })
      .done(() => {
        this.loadSets();
      });
    }

    addCards(setId) {
      ReactRouter.hashHistory.push('/set/' + setId);
    }

    navigateToQuiz(setId) {
      ReactRouter.hashHistory.push('/set/' + setId + '/quizzer');
    }

    alphabetizeSets(){
      var sortSets = this.state.sets;
      //test
      console.log("alphabetize set",sortSets);
      //
      sortSets.sort(function(a,b){

        if (a.name < b.name){
          return -1;
        }
        if (a.name > b.name){
          return 1;
        }
        return 0;

      })

      this.setState({
       sets:sortSets,
       sort:"alpha"
      })
    }

    sizeOrderSets(){
      var sortSets = this.state.sets;

      sortSets.sort(function(a,b){
        if (a.cards.length < b.cards.length){
          return 1;
        }
        if (a.cards.length > b.cards.length){
          return -1;
        }
        return 0;
      })

      this.setState({
        sets:sortSets,
        sort:"number"
      })
    }

    render() {
      console.log('SetList.render', this.state);

      var noSetsMessaging;
      if (this.state.sets.length === 0) {
        noSetsMessaging = <p>You do not have any sets! Create one.</p>
      }

      var activeAlpha = "inactive";
      var activeNum = "inactive";
      if (this.state.sort !==null){
        if(this.state.sort ==='number'){
          activeAlpha = 'inactive';
          activeNum = 'active';
        }
        else if (this.state.sort ==='alpha') {
          activeAlpha = 'active';
          activeNum ='inactive';
        }

      }

      return <div className="set-list">
        <h2>Set List</h2>

        <div className="sort">
          <div className={activeAlpha} onClick={() => {this.alphabetizeSets();}}>by name</div>
          <div className={activeNum} onClick={() => {this.sizeOrderSets();}}>by # of cards</div>
        </div>


        {noSetsMessaging}

        <ReactRouter.Link to="/create-set">Create new set</ReactRouter.Link>

        <ul>
        {this.state.sets.map((set, index) => {
          return <li key={set.id} className="set">
            <div className="set-name">{set.name}</div>
            <div className="number-of-cards"># of cards: {set.cards.length}</div>
            <p>{set.description}</p>

            <div className="button delete-set" onClick={() => {this.deleteSet(set.id)}}>delete</div>
            <div className="button add-cards" onClick={() => {this.addCards(set.id)}}>add cards</div>
            <div className="button quiz" onClick={() => {this.navigateToQuiz(set.id)}}>quiz</div>

          </li>
        })}
        </ul>
      </div>;
    }
  }

  FC.SetListComponent = SetListComponent;
})();
