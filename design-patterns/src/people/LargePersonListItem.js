import React from 'react'

export const LargePersonListItem = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;
  return (
    <>
    <h3>Name: {name}</h3> 
    <p>Age: {age}</p> 
    <p>Hair Color: {hairColor}</p> 
    <h3>Hobbies: {hobbies}</h3>
    <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
    </ul>
    </>
  )
} 
