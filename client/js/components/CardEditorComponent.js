if (window.FC === undefined) { window.FC = {}; }

(function() {

  class CardEditorComponent extends React.Component {

    submitCard(evt) {
      evt.preventDefault();

      var cb = () => {
        ReactRouter.browserHistory.goBack();
      };

      FC.UserData.addCardToSet(this.props.params.setId, this.frontInput.value, this.backInput.value, cb);
    }

    render() {
      return <div className="card-editor">
        <h2>The Card Editor</h2>

        <form onSubmit={(evt) => { this.submitCard(evt);}}>

          <input placeholder="front" ref={(input) => {this.frontInput = input; }} />

          <input placeholder="back" ref={(input) => {this.backInput = input; }} />

          <button>Save</button>

        </form>

      </div>;
    }

  }

  FC.CardEditorComponent = CardEditorComponent;

})();
