// $FlowExpectedError
import navCommunity from '../../content/community/nav.yml';

// $FlowExpectedError

const sectionListCommunity = navCommunity.map((item: Object): Object => ({
  ...item,
  directory: 'community',
}));

export {sectionListCommunity};
