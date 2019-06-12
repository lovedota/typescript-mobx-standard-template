import React from 'react';
import { mount } from 'enzyme';
import ScorecardTemplateList from './index';

describe('When api return data', () => {
  it('should render scorecard-templates', () => {
    const items = [
      {
        id: 1,
        name: 'Pathway 1',
        description: 'Pathway Description 1',
        materialEvent: 'M & A',
        industry: 'Dental',
        companySize: 100,
        logo:
          'https://www.ansarada.com/wp-content/themes/ansarada/2017/img/ansarada-logo-small.svg',
      },
      {
        id: 2,
        name: 'Pathway 2',
        description: 'Pathway Description 2',
        materialEvent: 'M & A',
        industry: 'Dental',
        companySize: 100,
        logo:
          'https://www.ansarada.com/wp-content/themes/ansarada/2017/img/ansarada-logo-small.svg',
      },
    ];

    const wrapper = mount(<ScorecardTemplateList items={items} />);

    expect(wrapper.find('ScorecardTemplateItem').length).toEqual(2);
  });
});
