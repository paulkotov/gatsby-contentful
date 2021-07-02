// import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["AUTO", "WEBP", "AVIF"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     />
//     <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//     </p>
//   </Layout>
// )

import React from "react"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"

const query = graphql`
{
  allContentfulPost {
    edges {
      node {
        id
        title
        text {
          raw
        }
        banner {
          file {
            url
          }
        }
        publishedAt
      }
    }
  }
}
`;

const IndexPage = () => {
  const data = useStaticQuery(query);
  console.log(data);
  return (
    <Layout>
      <StaticQuery
        query={query}
        render={({
          allContentfulPost: {
            edges
          }
        }) => (
          edges.map(({ node }) => (
            <Article key={node.id} content={node} />
          ))
        )}
      />
    </Layout>
  );
};

export default IndexPage;
