const scoreCardTemplates: ScorecardTemplateModel[] = [
  {
    Id: 1,
    Name: 'Pathway 1',
    Description: 'Pathway Description 1',
    MaterialEvent: 'M & A',
    Industry: 'Dental',
    CompanySize: 100,
    Logo:
      'https://www.ansarada.com/wp-content/themes/ansarada/2017/img/ansarada-logo-small.svg',
  },
  {
    Id: 2,
    Name: 'Pathway 2',
    Description: 'Pathway Description 2',
    MaterialEvent: 'M & A',
    Industry: 'Dental',
    CompanySize: 100,
    Logo:
      'https://www.ansarada.com/wp-content/themes/ansarada/2017/img/ansarada-logo-small.svg',
  },
  {
    Id: 3,
    Name: 'Pathway 3',
    Description: 'Pathway Description 3',
    MaterialEvent: 'M & A',
    Industry: 'Dental',
    CompanySize: 100,
    Logo:
      'https://www.ansarada.com/wp-content/themes/ansarada/2017/img/ansarada-logo-small.svg',
  },
  {
    Id: 4,
    Name: 'Pathway 4',
    Description: 'Pathway Description 4',
    MaterialEvent: 'M & A',
    Industry: 'Dental',
    CompanySize: 100,
    Logo:
      'https://www.ansarada.com/wp-content/themes/ansarada/2017/img/ansarada-logo-small.svg',
  },
];

const responses: MockHttp[] = [
  {
    method: 'GET',
    url: /\/pathway\/scorecard-templates/,
    data: scoreCardTemplates,
  },
];

export default responses;
