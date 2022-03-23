import React from 'react';
import { shallow } from 'enzyme';
import About from './About'
import TeamCard from '../TeamCard/TeamCard';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';
import AboutHeroSection from '../AboutHeroSection/AboutHeroSection';
import VisionMissionSection from '../VisionMissionSection/VisionMissionSection';
import DifferenceSection from '../DifferenceSection/DifferenceSection';
import FacilitySection from '../FacilitySection/FacilitySection';


// component test

describe('AboutUs test', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<About/>);
    expect(component).toMatchSnapshot();
  });

  // all section check
  
  it('Section check', () =>{
    let wrapper = shallow(<About/>)
    expect(wrapper.contains(<NavigationBar />)).toEqual(true)
 })
  it('Section check 1', () =>{
    let wrapper = shallow(<About/>)
    expect(wrapper.contains( <SharedBanner pageName={"About Us"} />)).toEqual(true)
 })
  it('Section check 2', () =>{
    let wrapper = shallow(<About/>)
    expect(wrapper.contains(<AboutHeroSection/>)).toEqual(true)
 })
  it('Section check 3', () =>{
    let wrapper = shallow(<About/>)
    expect(wrapper.contains( <VisionMissionSection/>)).toEqual(true)
 })
  it('Section check 4', () =>{
    let wrapper = shallow(<About/>)
    expect(wrapper.contains(  <DifferenceSection />)).toEqual(true)
 })
  it('Section check 5', () =>{
    let wrapper = shallow(<About/>)
    expect(wrapper.contains(  <FacilitySection/>)).toEqual(true)
 })
  it('Section check 6', () =>{
    let wrapper = shallow(<About/>)
    expect(wrapper.contains(  <TeamCard />)).toEqual(true)
 })

});

