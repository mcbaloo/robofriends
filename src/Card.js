import React from 'react';
const Card = (props) =>{
    //or do const Card = ({name , email, id})
    const {name , email, id,username, occupation} = props;
    return(
<div className='tc bg-light-green dib br4 pa1 ma2 grow shadow-5'>
    <img src={`https://robohash.org/${id}?120x120`} alt="robot"/>
    <div>
        <h2>{name}</h2>
        <p>Nickname: {username}</p>
        <p>Occupation: {occupation}</p>
        <p>Email: {email}</p>
    </div>
</div>
    );
}
export default Card;