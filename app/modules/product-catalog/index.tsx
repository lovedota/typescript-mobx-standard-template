// @flow

import { inject, observer } from 'mobx-react';
import { Spinner } from 'react-bootstrap';
import React from 'react';
import ScorecardTemplateList from './components/scorecard-template-list';

interface InjectedProps {
  productCatalogStore: ScorecardTemplateStore;
}

@inject('productCatalogStore')
@observer
class ScorecardTemplateContainer extends React.Component<{}, {}> {
  private get injected(): InjectedProps {
    return this.props as InjectedProps;
  }

  public componentDidMount(): void {
    const { productCatalogStore } = this.injected;

    if (productCatalogStore.state === 'pending') {
      productCatalogStore.getScorecardTemplates();
    }
  }

  public render(): JSX.Element {
    const { productCatalogStore } = this.injected;
    const { state, items } = productCatalogStore;

    if (state === 'pending') {
      return <Spinner animation="grow" />;
    }

    return <ScorecardTemplateList items={items} />;
  }
}

export default ScorecardTemplateContainer;
