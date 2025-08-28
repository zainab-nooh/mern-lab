import React from 'react';
import HootListItem from '../HootListItem/HootListItem';
import styles from './HootList.module.scss';

const HootList = ({ hoots }) => {
  return (
    <div className={styles.HootList}>
      {hoots.length === 0 ? (
        <p>No hoots yet!</p>
      ) : (
        hoots.map((hoot) => (
          <HootListItem key={hoot._id} hoot={hoot} />
        ))
      )}
    </div>
  );
};

export default HootList;