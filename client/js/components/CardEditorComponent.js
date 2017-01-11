if (window.FC === undefined) { window.FC = {}; }

(function() {

  class CardEditorComponent extends React.Component {

    submitCard(evt) {
      evt.preventDefault();

      var cb = () => {
        // ReactRouter.browserHistory.goBack();
        this.frontInput.value = '';
        this.backInput.value = '';
      };

       FC.UserData.addCardToSet(this.props.params.setId, this.frontInput.value, this.backInput.value, cb);

      }

    render() {
      return <div className="card-editor">
        <div className="directions">
          <h2>The Card Editor</h2>
          <p>Enter the data on the front and back of your card.</p>
          <p>When completed with the card click the submit button and your cards will be added to the set.</p>
          <p> When finished adding cards click the done button.</p>
        </div>  

        <form onSubmit={(evt) => { this.submitCard(evt);}}>

          <textarea placeholder="front" ref={(input) => {this.frontInput = input; }} />

          <input placeholder="back" ref={(input) => {this.backInput = input; }} />

          <button>Submit</button>
          <button onClick={(evt) => {ReactRouter.browserHistory.goBack();}}>Done</button>

        </form>

      </div>
    }

  }

  FC.CardEditorComponent = CardEditorComponent;

})();
