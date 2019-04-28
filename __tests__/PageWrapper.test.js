import React from 'react';
import { shallow } from 'enzyme'
import PageWrapper from '../components/Template/PageWrapper';
import Nav from '../components/Template/Nav';
import Footer from '../components/Template/Footer'

let wrapped;

beforeEach(() => {
    wrapped = shallow(<PageWrapper/>);
});

it('renders the Navigation once', () => {
  expect(wrapped.find(Nav).length).toEqual(1);
})

it('renders the Footer once', () => {
    expect(wrapped.find(Footer).length).toEqual(1);
})

afterEach(() => {
    wrapped.unmount();
})