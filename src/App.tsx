import { useRoutes, RouteObject } from 'react-router-dom';
import React from 'react';
import { Layout } from './common/Layout';
import { Dashboard } from './features';

function App() {

  const routeData: RouteObject[] = [
    {
      path: '/',
      element: <Dashboard />
    }
  ]


  const routes = useRoutes(routeData);
  return (
    <Layout>
      {routes}
    </Layout>
  )
}

export default App;
