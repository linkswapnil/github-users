import React from 'react'
import Profile from './Profile'
import { shallow, mount, configure } from 'enzyme'
import sinon from 'sinon'

import 'jest-enzyme'

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })


describe('Profile Component', () => {

  it('renders profile info', () => {
    const fetchProfileInfo = (arg) => {}
    const profile = {
      avatar_url: "avatar_url",
      name: "name",
      login: "login",
      company: "company",
      location: "location"
    }
    const spyFetchProfileInfo = sinon.spy(fetchProfileInfo);
    const component = shallow(<Profile fetchProfileInfo={spyFetchProfileInfo} loginId="test" profileInfo={profile} />);
    expect(component).toMatchSnapshot();
  })

  it('invokes fetchProfileInfo when component mounts', () => {
    const fetchProfileInfo = (arg) => {};
    const loginId = "test";
    const profile = {
      avatar_url: "avatar_url",
      name: "name",
      login: "login",
      company: "company",
      location: "location"
    }
    const spyFetchProfileInfo = sinon.spy(fetchProfileInfo);
    shallow(<Profile fetchProfileInfo={spyFetchProfileInfo} loginId={loginId} profileInfo={profile} />);
    sinon.assert.calledWith(spyFetchProfileInfo,loginId);
  })

  xit('sets username on state when username input box is changes', () => {
    const state = {username:'', password:''};
    const username = 'myuser';
    const component = shallow(<Login/>);
    component.setState(state);
    const input = component.find('#username');
    input.simulate('change', {target: {value: username}});
    expect(component.state().username).toEqual(username);
    expect(component.state().password).toEqual('');
  })

  xit('sets password on state when password input box is changes', () => {
    const state = {username:'', password:''};
    const password = 'mypass';
    const component = shallow(<Login/>);
    component.setState(state);
    const input = component.find('#password');
    input.simulate('change', {target: {value: password}});
    expect(component.state().username).toEqual('');
    expect(component.state().password).toEqual(password);
  })

  xit('Should render login form', () => {
    const loginNode = shallow(<Login />)
    expect(loginNode).toMatchSnapshot()
  })

  xdescribe('componentWillReceiveProps()', () => {
    const serviceUnavailabeMessage = <span> Unable to connect to server !</span>;
    const invalidLoginMessage = <span> Invalid user name or password !</span>;

    it('sets service unavailble message when service is unavaiable', () => {
      const component = shallow(<Login/>);
      component.setProps({serviceUnavailable : true})
      expect(component.containsMatchingElement(serviceUnavailabeMessage)).toEqual(true);
      expect(component.containsMatchingElement(invalidLoginMessage)).toEqual(false);
    })

    it("doesn't sets service unavailble message when service is avaiable", () => {
      const component = shallow(<Login/>);
      component.setProps({serviceUnavailable : false})
      expect(component.containsMatchingElement(serviceUnavailabeMessage)).toEqual(false);
      expect(component.containsMatchingElement(invalidLoginMessage)).toEqual(false);
    })

    it("Sets invalid username or password message when isLoggedIn is false", () => {
      const component = shallow(<Login/>);
      component.setProps({isLoggedIn : false})
      expect(component.containsMatchingElement(invalidLoginMessage)).toEqual(true);
      expect(component.containsMatchingElement(serviceUnavailabeMessage)).toEqual(false);
    })

    it("redirectes to submission-per-journal route when isLoggedIn is true", () => {
      const component = shallow(<Login/>);
      const route = '/dashboard/submission-per-journal';
      const context = {
        username : 'test'
      };
      component.setState(context)
      let mockHistory = {
        push : () => {}
      }
      const stubHistoryPush = sinon.stub(mockHistory, 'push');
      component.setProps({isLoggedIn : true, history : mockHistory});

      expect(component.containsMatchingElement(invalidLoginMessage)).toEqual(false);
      expect(component.containsMatchingElement(serviceUnavailabeMessage)).toEqual(false);
      sinon.assert.calledWith(stubHistoryPush,route , context);
    })

  })

})

