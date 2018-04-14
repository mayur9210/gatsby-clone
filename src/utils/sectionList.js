// $FlowExpectedError
import navCredit from '../../content/credit-cards/nav.yml';

// $FlowExpectedError

const sectionListCredit = navCredit.map((item: Object): Object => ({
  ...item,
  directory: 'credit-cards',
}));

export {sectionListCredit};
