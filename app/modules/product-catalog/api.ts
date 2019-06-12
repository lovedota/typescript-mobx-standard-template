// @flow

import { get } from 'app/common/services/http';

export default {
  getScorecardTemplates() {
    return get<ScorecardTemplateModel[]>('/pathway/scorecard-templates');
  },
};
