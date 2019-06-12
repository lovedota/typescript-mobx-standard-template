// @flow

import MockAdapter from 'axios-mock-adapter';
import ScorecardTemplateMock from 'app/modules/product-catalog/mock';
import http from './http';

const mock = new MockAdapter(http, { delayResponse: 1000 });

const mocks: MockHttp[] = [...ScorecardTemplateMock];

const init = () => {
  mocks.forEach(api => {
    if (api.method === 'GET') {
      mock.onGet(api.url).reply(200, api.data);
    } else if (api.method === 'POST') {
      mock.onPost(api.url).reply(200, api.data);
    }
  });

  mock.onAny().passThrough();
};

export default {
  init,
};
