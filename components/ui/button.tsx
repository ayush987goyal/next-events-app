import { FC } from 'react';
import Link from 'next/link';

import classes from './button.module.css';

export interface ButtonProps {
  link?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ link, onClick, children }) => {
  return link ? (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  ) : (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
