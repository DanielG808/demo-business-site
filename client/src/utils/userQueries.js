import { gql } from "@apollo/client";

export const SIGN_UP = gql`
addUser(email: $email, password: $password) {
    user {
      _id
      email
      password
      admin
    }
  }
`;
