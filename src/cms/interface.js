import { request, gql } from "graphql-request";

const ENDPOINT =
  "https://api-us-east-1.graphcms.com/v2/ckrxg84xq19bk01z8agl1b9dr/master";

const portfolioProjects = gql`
  {
    projects {
      blog
      description
      github
      image
      live
      title
    }
  }
`;

export const getProjects = async () => {
  const response = await request(ENDPOINT, portfolioProjects);
  console.log(response)
  return await response;
};
