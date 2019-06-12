// @flow

import React from 'react';
import { Provider } from 'mobx-react';
import { mount } from 'enzyme';
import Container from '.';

let wrapper;
let mockStore: ScorecardTemplateStore;

describe('<Container />', () => {
  describe('When mount to dom', () => {
    beforeEach(() => {
      mockStore = {
        state: 'pending',
        items: [],
        getScorecardTemplates: jest.fn(),
      };

      wrapper = mount(
        <Provider store={mockStore}>
          <Container />
        </Provider>,
      );
    });

    it('should get scorecard-templates when init', () => {
      expect(mockStore.getScorecardTemplates).toHaveBeenCalled();
    });

    it('should get scorecard-templates when init', () => {
      expect(wrapper.exists('Spinner')).toEqual(true);
    });
  });

  describe('When api return data', () => {
    it('should render scorecard-templates', () => {
      mockStore = {
        state: 'success',
        items: [],
        getScorecardTemplates: jest.fn(),
      };

      wrapper = mount(
        <Provider store={mockStore}>
          <Container />
        </Provider>,
      );

      expect(wrapper.exists('ScorecardTemplateList')).toEqual(true);
    });
  });
});
