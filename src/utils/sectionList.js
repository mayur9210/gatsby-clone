/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

// $FlowExpectedError
import navCommunity from '../../content/community/nav.yml';

// $FlowExpectedError
import navTutorial from '../../content/tutorial/nav.yml';

const sectionListCommunity = navCommunity.map((item: Object): Object => ({
  ...item,
  directory: 'community',
}));

export {sectionListCommunity, navTutorial as sectionListTutorial};
