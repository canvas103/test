import React from 'react';
import {shallow} from 'enzyme';
import 'jest-enzyme';
import App from './App';

it('renders without crashing', () => {
    const wrapper = shallow(<App/>);
    const welcome = <h1 className="App-title">Welcome to React</h1>;
    // expect(wrapper.contains(welcome)).to.equal(true);
    expect(wrapper).toContainReact(welcome);
});
