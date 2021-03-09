import { FC } from 'react';

import classes from './error-alert.module.css';

const ErrorAlert: FC = (props) => {
  return <div className={classes.alert}>{props.children}</div>;
};

export default ErrorAlert;
