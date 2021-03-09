import { FC } from 'react';

import classes from './event-content.module.css';

const EventContent: FC = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
