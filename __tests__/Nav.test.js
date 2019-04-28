import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../components/Template/Nav';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<Nav/>);
})

it("renders a <ul> for the nav", () => {
    expect(wrapped.find('ul').length).toEqual(1);
})