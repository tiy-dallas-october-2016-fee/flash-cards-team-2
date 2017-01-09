if (window.FC === undefined) { window.FC = {}; }

(function() {

  class SetEditorComponent extends React.Component {

    submitSet(evt) {
      evt.preventDefault();

      $.ajax({
        url: '/api/sets',
        method: 'POST',
        data: {
          name: this.nameInput.value,
          description: this.descriptionInput.value
        }
      })
      .done((data) => {
        ReactRouter.browserHistory.goBack();
      });


    }

    render() {
      return <div className="set-editor">
        <h2>Set Editor</h2>

        <form onSubmit={(evt) => { this.submitSet(evt); }}>

          <input placeholder="name" ref={(input) => { this.nameInput = input; }} />

          <input placeholder="description" ref={(input) => { this.descriptionInput = input; }} />

          <button>Save</button>
        </form>
      </div>
    }

  }

  FC.SetEditorComponent = SetEditorComponent;

})();
