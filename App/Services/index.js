import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clpshq77i4w0i01uffxf3aiyj/master";

export const getCourseList =async (level) => {
    const query = gql `
    query CourseList {
        courses(where: {level: `+level+`}) {
          id
          name
          level
          price
          tags
          time
          author
          banner {
            url
          }
          chapters {
            id
          }
        }
      }
      
    `
    const result=await request(MASTER_URL, query);
    return result;
}