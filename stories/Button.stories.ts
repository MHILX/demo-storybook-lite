import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: 
  // https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'button-click' },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    children: {
      defaultValue: 'Default Value'
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    variant: 'primary',    
    label: 'Button (Primary)',
    size: 'large',
    onClick: action('You clicked Primary Button')
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Button',
    size: 'large',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button LG',
    variant: 'primary'
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
    variant: 'primary'
  },
};                                                                                                                    