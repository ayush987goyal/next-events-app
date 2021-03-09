import { FC } from 'react';

import classes from './logistics-item.module.css';

export interface LogisticsItemProps {
  icon: () => JSX.Element;
}

const LogisticsItem: FC<LogisticsItemProps> = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
