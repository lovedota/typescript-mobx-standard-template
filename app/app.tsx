import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import ProductCatalogStore from 'app/modules/product-catalog/store';
import ProductCatalogPage from 'app/modules/product-catalog';
import ProductDetailsPage from 'app/modules/product-details';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routingStore,
  productCatalogStore: new ProductCatalogStore(),
};

const history = syncHistoryWithStore(browserHistory, routingStore);

const App = () => (
  <Provider {...stores}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={ProductCatalogPage} />
        <Route path="/product/:id" component={ProductDetailsPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
