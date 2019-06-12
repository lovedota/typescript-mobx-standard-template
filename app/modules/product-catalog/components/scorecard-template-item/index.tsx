// @flow

import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.scss';

interface Props {
  item: ScorecardTemplateViewModel;
  onClick: () => void;
}

const ScorecardTemplateItem = (props: Props) => {
  const { item, onClick } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span>{item.name}</span>
      </div>
      <div className={styles.body}>
        <span className={styles.description}>{item.description}</span>
        <div className={styles.information}>
          <p>Material Event: {item.materialEvent}</p>
          <p>Industry: {item.industry}</p>
          <p>Company Size: {item.companySize}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <Button variant="primary" onClick={onClick}>
          Get this pathway
        </Button>
      </div>
    </div>
  );
};

export default ScorecardTemplateItem;
