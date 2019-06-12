// @flow

import api from './api';
import ScorecardTemplatesStore from './store';

let store: ScorecardTemplateStore;

describe('ScorecardTemplateStore', () => {
  beforeEach(() => {
    store = new ScorecardTemplatesStore();
  });

  it('should handle get scorecard templates successfully', async () => {
    jest
      .spyOn(api, 'getScorecardTemplates')
      .mockImplementation(() => Promise.resolve([]));

    await store.getScorecardTemplates();

    expect(store.state).toEqual('success');
  });

  it('should handle get scorecard templates error', async () => {
    jest
      .spyOn(api, 'getScorecardTemplates')
      .mockImplementation(() => Promise.reject(new Error('api is not found')));

    await store.getScorecardTemplates();

    expect(store.state).toEqual('error');
  });
});
