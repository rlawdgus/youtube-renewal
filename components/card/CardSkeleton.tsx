import React from "react";

import { Skeleton } from '@material-ui/lab';
import styles from './CardSkeleton.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const CardSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton className={cx('thumbnail')} variant="rect" width='100%' height='100%'/>
      <Skeleton variant='circle' width={34} height={34} />
      <Skeleton />
    </>
  );
};

export default CardSkeleton;
