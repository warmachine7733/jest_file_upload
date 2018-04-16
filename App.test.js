/**
 * @jest-environment node
 */
import React, { wrapper } from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from './App';


Enzyme.configure({ adapter: new Adapter() });

test('component is rendering or not', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('.file').exists()).toBe(true);
    expect(wrapper.find('.btn').exists()).toBe(true);
})

test('checking the state if nothing is selected to be uploaded', () => {
    const wrapper = shallow(<App />);
    wrapper.find('.btn').simulate('click');
    expect(wrapper.state().fileNameIs).toBe('empty')
})
test('uploading file', () => {
    const wrapper = shallow(<App />);
    wrapper.find('.file').simulate('change', { target: { value: 'something.apk' } })
    wrapper.find('.btn').simulate('click');
    expect(wrapper.state().supported).toBe(false);

})
test('checking whether the elements has classes or not', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').hasClass('')).toBe(true);
    expect(wrapper.find('h1').hasClass('')).toBe(true);
    expect(wrapper.find('input').hasClass('file')).toBe(true)
    expect(wrapper.find('button').hasClass('btn')).toBe(true)
})


