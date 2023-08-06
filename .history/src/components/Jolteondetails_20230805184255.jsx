import React, { useState, useEffect } from 'react';
import {Jol}
export const Detail = (props) => {
  const [details, setDetails] = useState()

  useEffect(() => {
    fetch(props.url)
      .then(response => response.json())
      .then(json => {
        setDetails(json)
      })
  }, [props])
  
  return (
    <div>
      <h1>{props.name}</h1>
      {details && <img src={details.sprites.front_default} alt="pokemon" />}
    </div>
  )
}