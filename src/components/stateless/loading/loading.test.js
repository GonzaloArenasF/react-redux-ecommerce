import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

// Component
import Loading from './loading';

const componentSetUp = (props = {}) => shallow(Loading({ ...props }));

const props = {
    isLoading: true,
    message: 'testing'
};

describe('Loading Component', () => {
    let component;

    beforeEach(() => {
        component = componentSetUp(props);

        const propsErr = checkPropTypes(Loading.propTypes, props, 'props', Loading.name);
        expect(propsErr).toBeUndefined();
    });

    test('Should render without errors', () => {
        const wrapperFooter = component.find(`[data-test='loading']`)
        expect(wrapperFooter.length).toBe(1);
    });

    test('Should render right message', () => {
        const wrapperMessage = component.contains(props.message);
        expect(wrapperMessage).toBeTruthy();
    });
});
