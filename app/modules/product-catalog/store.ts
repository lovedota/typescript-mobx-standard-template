// @flow

import { observable, action, runInAction, configure } from 'mobx';
import api from 'app/modules/product-catalog/api';

configure({ enforceActions: 'observed' });

class Store implements ScorecardTemplateStore {
  @observable public state = 'pending';

  @observable public items = [];

  @action
  public async getScorecardTemplates() {
    try {
      const scoreCardTemplates = await api.getScorecardTemplates();

      runInAction(() => {
        this.state = 'success';
        this.items = scoreCardTemplates.map(this.mapToViewModel);
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  private mapToViewModel(
    model: ScorecardTemplateModel,
  ): ScorecardTemplateViewModel {
    return {
      id: model.Id,
      name: model.Name,
      description: model.Description,
      materialEvent: model.MaterialEvent,
      companySize: model.CompanySize,
      logo: model.Logo,
      industry: model.Industry,
    };
  }
}

export default Store;
