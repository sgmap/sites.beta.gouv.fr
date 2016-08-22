import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Content from '../src/Content';
import SiteRow from '../src/SiteRow'
const arraySite = require('./resources/array-sites')

describe("Content", () => {

  it("Without seeking, it must display the entire list", () => {
    const wrapper = mount(<Content sites={arraySite} />)

    expect(wrapper.contains(<SiteRow key={0} site={arraySite[0]} />)).to.equal(true)
    expect(wrapper.find('th')).to.have.length(2)
  })

  it('With seeking, it must display the corresponding single site', () => {
    const wrapper = mount(<Content search='bourse' sites={arraySite} />)

    expect(wrapper.find('th')).to.have.length(1)
  })

})