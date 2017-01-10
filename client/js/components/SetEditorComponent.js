if (window.FC === undefined) { window.FC = {}; }

(function() {

  class SetEditorComponent extends React.Component {

    validateSet(evt){
      evt.preventDefault();

      if(!this.nameInput.value || !this.descriptionInput.value){

        this.setState({
          invalid:true
        })

      }else{

        this.setState({
          invalid:false
        })
        this.submitSet(evt);
      }

    }

    submitSet(evt) {

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
      var warnText;
      if (this.state != null){
        if (this.state.invalid){
          warnText = <div>"Missing Info!"</div>;
        }
        else{
          warnText = "";
        }
      }

      return <div className="set-editor">
        <h2>Set Editor</h2>

        <form onSubmit={(evt) => { this.validateSet(evt); }}>

          <input placeholder="name" ref={(input) => { this.nameInput = input; }} />

          <textarea placeholder="description" ref={(input) => { this.descriptionInput = input; }} />

          <button>save</button>

        </form>
        {warnText}
      </div>
    }

  }

  FC.SetEditorComponent = SetEditorComponent;

})();
