import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button, { Props } from './Button';

describe('Button component', () => {
  let wrapper: ShallowWrapper<Props>;

  beforeEach(() => {
    const label = 'Submit';
    const size = 'large';
    const variant = 'primary';

    wrapper = shallow(
      <Button label={label} size={size} variant={variant}>
        {label}
      </Button>
    );
  });

  it('renders with correct label and class for variant', () => {
    const label = 'Submit';

    // Assert that the label is rendered correctly
    expect(wrapper.text()).toBe(label);

    // Assert that the button has the correct size class
    expect(wrapper.hasClass('storybook-button--large')).toBe(true);

    // Assert that the button has the correct variant class
    expect(wrapper.hasClass('storybook-button--primary')).toBe(true);
  });

  it('renders with secondary variant class', () => {
    const label = 'Cancel';
    const size = 'small';
    const variant = 'secondary';

    wrapper.setProps({ label, size, variant });

    // Assert that the button has the correct variant class
    expect(wrapper.hasClass('storybook-button--secondary')).toBe(true);
  });
});