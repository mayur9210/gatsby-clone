import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import React from 'react';
import {sharedStyles} from 'theme';

const PageNotFound = () => (
  <Container>
    <div css={sharedStyles.articleLayout.container}>
      <div css={sharedStyles.articleLayout.content}>
        <Header>Communities</Header>
        <TitleAndMetaTags title="Tutorials" />
        <div css={sharedStyles.markdown}>
          <p>This page will have all Communities Link</p>
          <p>
            This page need to be setup based on the all Communities added in
            future.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default PageNotFound;
