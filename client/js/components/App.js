if (window.FC === undefined) { window.FC = {}; }

(function() {

  class AppComponent extends React.Component {
    render() {
      return <div>

        {this.props.children}

      </div>;
    }
  }

  FC.AppComponent = AppComponent;
})();
