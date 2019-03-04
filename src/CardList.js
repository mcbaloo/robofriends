import React from 'react';
import Card from './Card';
const CardList = ({robot})=>{
    {/* or const cardcomponent = robot.map((user, i)=>{
return <Card key={i} id={robot[i].id} name={robot[i].name} email={robot[i].email}/>
    })*/}
    return(
     <div>
         {/*{cardcomponent} or */}
        { 
        robot.map((user, i)=>{
     return (
     <Card 
     key={i}
      id={robot[i].id}
       name={robot[i].name}
       email={robot[i].email}
       username={robot[i].username}
       occupation={robot[i].occupation}/>
     );
        })
    }
    </div>
    );
}
export default CardList;