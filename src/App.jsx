import {RouterProvider, createBrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes";
const router = createBrowserRouter(routes);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Routes> {
          routes.map(({id, path, component, exect}) => {
            return (
              <Route path={path}
                component={component}
                key={id}
                exact={exect}/>
            );
          })
        } </Routes>
        <Routes/>
      </RouterProvider>
    </div>
  );
}


export default App;
