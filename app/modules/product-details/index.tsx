import React from 'react';
import { observer } from 'mobx-react';
import { withRouter, RouteComponentProps } from 'react-router';

type Props = RouteComponentProps<{ id: string }>;

@observer
class ProductDetailPage extends React.Component<Props, {}> {
  public render(): React.ReactNode {
    const { match } = this.props;

    return <div>Details Page {match.params.id}</div>;
  }
}
export default withRouter(ProductDetailPage);
