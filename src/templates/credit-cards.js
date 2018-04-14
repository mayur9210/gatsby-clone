import MarkdownPage from 'components/MarkdownPage';
import PropTypes from 'prop-types';
import React from 'react';
import {createLinkCredit} from 'utils/createLink';
import {sectionListCredit} from 'utils/sectionList';

const credit = ({data, location}) => (
  <MarkdownPage
    createLink={createLinkCredit}
    location={location}
    markdownRemark={data.markdownRemark}
    sectionList={sectionListCredit}
    titlePostfix=" | React"
  />
);

credit.propTypes = {
  data: PropTypes.object.isRequired,
};

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query TemplateCreditMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
      fields {
        path
        slug
      }
    }
  }
`;

export default credit;
