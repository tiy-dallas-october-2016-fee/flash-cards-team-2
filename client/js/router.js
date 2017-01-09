if (window.FC === undefined) { window.FC = {}; }

(function() {

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  var router = <Router history={ReactRouter.hashHistory}>
      <Route path="/" component={FC.AppComponent}>
        <ReactRouter.IndexRoute component={FC.SetListComponent} />
        <Route path="/create-set" component={FC.SetEditorComponent} />
        <Route path="/set/:setId" component={FC.SetViewComponent} />
        <Route path="/set/:setId/newcard" component={FC.CardEditorComponent} />
        <Route path="/set/:setId/quizzer" component={FC.QuizzerComponent} />
      </Route>
    </Router>;


  ReactDOM.render(router, mountNode);
})();
