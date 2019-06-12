declare interface ScorecardTemplateModel {
  Id: number;
  Name: string;
  Description: string;
  MaterialEvent: string;
  Industry: string;
  CompanySize: number;
  Logo: string;
}

declare interface ScorecardTemplateViewModel {
  id: number;
  name: string;
  description: string;
  materialEvent: string;
  industry: string;
  companySize: number;
  logo: string;
}

declare interface ScorecardTemplateStore {
  state: string;
  items: ScorecardTemplateViewModel[];
  getScorecardTemplates(): Promise<void>;
}
