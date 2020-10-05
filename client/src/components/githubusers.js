import React from 'react';
import { gql, useQuery } from '@apollo/client';
import User from './user';

const GITHUB_USERS = gql`{
  users {
		id
		login
		avatar_url
  }
 }
`;


const GitHubUsers = (props) => {
	
   const { loading, error, data } = useQuery(GITHUB_USERS);
   if(loading) return <h1>Loading...</h1>;
   if(error) return (<div><h1>Something went wrong !</h1></div>);
   
   return( 
	<div>
		{
			data && data.users && data.users.length ? data.users.map(user => <User user={user} key={user.id} />) : null
		}
    </div>
   )
}
export default GitHubUsers;