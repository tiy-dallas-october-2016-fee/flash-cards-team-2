"use strict";

if (window.FC === undefined) {
  window.FC = {};
}

(function () {

  var mountNode = document.querySelector('#react-root');

  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;

  var router = React.createElement(
    Router,
    { history: ReactRouter.hashHistory },
    React.createElement(
      Route,
      { path: "/", component: FC.AppComponent },
      React.createElement(ReactRouter.IndexRoute, { component: FC.SetListComponent }),
      React.createElement(Route, { path: "/create-set", component: FC.SetEditorComponent }),
      React.createElement(Route, { path: "/set/:setId", component: FC.SetViewComponent }),
      React.createElement(Route, { path: "/set/:setId/newcard", component: FC.CardEditorComponent }),
      React.createElement(Route, { path: "/set/:setId/quizzer", component: FC.QuizzerComponent })
    )
  );

  ReactDOM.render(router, mountNode);
})();
//# sourceMappingURL=router.js.map
