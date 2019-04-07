import React from 'react'
import Pagination from './Pagination'
import { shallow,configure } from 'enzyme'
import sinon from 'sinon'
import 'jest-enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })


describe('Pagination Component', () => {

  it('renders pages based on totalItems', () => {
    const component = shallow(<Pagination maxPages={7} itemsPerPage={30}/>);
    component.setProps({totalItems: 100});
    expect(component.state().pages).toEqual([1,2,3,4]);
    expect(component.find('li').length).toEqual(4);
  })

  it('renders previous next buttons when total pages are greater than maxPages', () => {
    const component = shallow(<Pagination maxPages={5} itemsPerPage={30}/>);
    component.setProps({totalItems: 250});
    expect(component.state().pages).toEqual([ 'Previous', 1, 2, 3, 4, 5, 'Next' ]);
  })

})
