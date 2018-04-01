import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import React from 'react';
import {sharedStyles} from 'theme';

const PageNotFound = () => (
  <Container>
    <div css={sharedStyles.articleLayout.container}>
      <div css={sharedStyles.articleLayout.content}>
        <Header>Tutorials</Header>
        <TitleAndMetaTags title="Tutorials" />
        <div css={sharedStyles.markdown}>
          <p>This page will have all Tutorials Link</p>
          <p>
            This page need to be setup based on the all Tutorials added in
            future.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default PageNotFound;
