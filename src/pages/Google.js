import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import React from 'react';
import {sharedStyles} from 'theme';

const PageNotFound = () => (
  <Container>
    <div css={sharedStyles.articleLayout.container}>
      <div css={sharedStyles.articleLayout.content}>
        <Header>Page Not Found</Header>
        <TitleAndMetaTags title="Google Search" />
        <div css={sharedStyles.markdown}>
          <p>We couldn't find what you were looking for.</p>
          <p>
            Please contact the owner of the site that linked you to the original
            URL and let them know their link is broken.
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default PageNotFound;