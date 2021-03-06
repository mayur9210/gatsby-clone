import Container from 'components/Container';
import Flex from 'components/Flex';
import MarkdownHeader from 'components/MarkdownHeader';
import React from 'react';
import StickyResponsiveSidebar from 'components/StickyResponsiveSidebar';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import findSectionForPath from 'utils/findSectionForPath';
import toCommaSeparatedList from 'utils/toCommaSeparatedList';
import {sharedStyles} from 'theme';
import createOgUrl from 'utils/createOgUrl';

import type {Node} from 'types';

type Props = {
  authors: Array<string>,
  createLink: Function, // TODO: Add better flow type once we Flow-type createLink
  date?: string,
  enableScrollSync?: boolean,
  ogDescription: string,
  location: Location,
  markdownRemark: Node,
  sectionList: Array<Object>, // TODO: Add better flow type once we have the Section component
  titlePostfix: string,
};

const MarkdownPage = ({
  authors = [],
  createLink,
  date,
  enableScrollSync,
  ogDescription,
  location,
  markdownRemark,
  sectionList,
  titlePostfix = '',
}: Props) => {
  const hasAuthors = authors.length > 0;
  const titlePrefix = markdownRemark.frontmatter.title || '';

  return (
    <Flex
      direction="column"
      grow="1"
      shrink="0"
      halign="stretch"
      css={{
        width: '100%',
        flex: '1 0 auto',
        position: 'relative',
        zIndex: 0,
      }}>
      <TitleAndMetaTags
        ogDescription={ogDescription}
        ogUrl={createOgUrl(markdownRemark.fields.slug)}
        title={`${titlePrefix}${titlePostfix}`}
      />
      <div css={{flex: '1 0 auto'}}>
        <Container>
          <div css={sharedStyles.articleLayout.container}>
            {/* <Flex type="article" direction="column" grow="1" halign="stretch">
              <MarkdownHeader title={titlePrefix} />
              <div css={sharedStyles.articleLayout.content}>
                <div
                  css={[sharedStyles.markdown]}
                  dangerouslySetInnerHTML={{__html: markdownRemark.html}}
                />
              </div>
            </Flex> */}

            <div css={sharedStyles.articleLayout.sidebar}>
              <StickyResponsiveSidebar
                enableScrollSync={enableScrollSync}
                createLink={createLink}
                defaultActiveSection={findSectionForPath(
                  location.pathname,
                  sectionList,
                )}
                location={location}
                sectionList={sectionList}
              />
            </div>
            <Flex type="article" direction="column" grow="1" halign="stretch">
              <MarkdownHeader title={titlePrefix} />
              <div css={sharedStyles.articleLayout.content}>
                <div
                  css={[sharedStyles.markdown]}
                  dangerouslySetInnerHTML={{__html: markdownRemark.html}}
                />
              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </Flex>
  );
};

export default MarkdownPage;
