import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

// Component
import Loading from './loading';

const componentSetUp = (props = {}) => shallow(Loading({...props}));

describe('Lowding Component', () => {
    let component;

    const props = {
        isLoading: true,
        message: 'testing'
    };

    beforeEach(() => {
        component = componentSetUp(props);
    });

    test('Should render without errors', () => {
        const wrapperFooter = component.find(`[data-test='loading']`)
        expect(wrapperFooter.length).toBe(1);
    });

    test('Should receive right props', () => {
        const propsErr = checkPropTypes(Loading.propTypes, props, 'props', Loading.name);
        expect(propsErr).toBeUndefined();
    });

    test('Should render right message', () => {
        const wrapperMessage = component.contains(props.message);
        expect(wrapperMessage).toBeTruthy();
    });
});
