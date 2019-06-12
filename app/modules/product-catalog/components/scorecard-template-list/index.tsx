// @flow

import React from 'react';
import { observer, inject } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import ScorecardTemplateItem from 'app/modules/product-catalog/components/scorecard-template-item';
import styles from './styles.scss';

interface InjectedProps {
  routingStore: RouterStore;
}

interface Props {
  items: ScorecardTemplateViewModel[];
  routingStore?: RouterStore;
}

@inject('routingStore')
@observer
class ScorecardTemplateList extends React.Component<Props, {}> {
  private get injected(): InjectedProps {
    return this.props as InjectedProps;
  }

  public render() {
    const { items } = this.props;
    const { push } = this.props.routingStore;

    return (
      <div className={styles.wrapper}>
        {items.map(item => (
          <ScorecardTemplateItem
            key={item.id}
            item={item}
            onClick={() => push(`/product/${item.id}`)}
          />
        ))}
      </div>
    );
  }
}

export default ScorecardTemplateList;
