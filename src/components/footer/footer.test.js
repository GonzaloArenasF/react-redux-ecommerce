import React from 'react';
import { shallow } from 'enzyme';

// Component
import FooterSection from './footer';

const componentSetUp = (props = {}) => shallow(<FooterSection {...props} />);

describe('Footer Section', () => {
  let component;

  beforeEach(() => {
    component = componentSetUp();
  });

  test('Should render without errors', () => {
    const wrapperFooter = component.find(`[data-test='footer']`)
    expect(wrapperFooter.length).toBe(1);

    const wrapperP = component.find('p');
    expect(wrapperP.length).toBe(2);
  });

  test('Should appear the right messages', () => {
    const wrapperFirstText = component.contains('Ecommerce developed over ReacJS and Redux');
    expect(wrapperFirstText).toBeTruthy();

    const wrapperSecondText = component.contains('Copyright 2020');
    expect(wrapperSecondText).toBeTruthy();
  });
});
