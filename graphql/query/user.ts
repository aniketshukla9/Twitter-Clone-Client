import { graphql } from "../../gql";

export const verifyusergoogleTokenQuery = graphql(`
  #graphql
  query VerifyUserGoogleToken($token: String!) {
      verifyGoogleToken(token: $token)
}   
`);