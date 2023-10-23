import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import './button.css';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  label: string;
  size: 'small' | 'large';

  /** There two variants at the moment. */
  variant: 'primary' | 'secondary';
}

/** My button component for user interaction */
export const Button = ({ children, ...props }: Props) => {

  console.log('props.variant: ' + props.variant);
  const mode = props.variant === 'secondary' ? 'storybook-button--secondary' : 'storybook-button--primary';

  return (
    <button 
    type="button"
    className={['storybook-button', `storybook-button--${props.size}`, mode].join(' ')}
    {...props}>
      {props.label}
    </button>
  );
};
