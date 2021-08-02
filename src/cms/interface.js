import { request, gql } from "graphql-request";

const ENDPOINT =
  "https://api-us-east-1.graphcms.com/v2/ckokdizpoj98w01xs12m2f7n4/master";

const portfolioProjects = gql`
  {
    portfolioProjects {
      title
      description
      blogLink
      imageLink
      githubRepo
      live
    }
  }
`;

export const getProjects = async () => {
  const response = await request(ENDPOINT, portfolioProjects);
  return await response;
};
