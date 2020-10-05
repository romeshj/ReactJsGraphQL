import React from 'react';

const User = ({user : {login, avatar_url}}) => {
	
	return(
		<div className='card' style={{ width : '70%', margin : '5px auto', borderRadius : '10px'}}>
			<div className='flex-container'>			
				<div><img src={avatar_url} className='img-fluid rounded-circle' alt={avatar_url} /></div>
				<div><h5 className='card-title'>{login}</h5></div>
				<div><a href={`https://github.com/${login}`} className='btn btn-primary'>See Profile</a></div>
			</div>
		</div>
	)

}
export default User;
