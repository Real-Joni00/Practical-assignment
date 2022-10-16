import axios from "axios";
import { useState, useEffect } from 'react'

export default function Dictionary(props) {
  const [desc, setDesc] = useState('')
  const [numb, setNumb] = useState()

  const word = props.word

  const options = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: { term: word },
    headers: {
      'X-RapidAPI-Key': '7ceccbdea5msh77bec5ce140a82bp1b4d59jsn4116ea4c02f2',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  
  useEffect(() => {
    axios.request(options).then((response) => {
      setNumb([Math.floor(Math.random() * response.data.list.length)])
      setDesc(response.data.list[numb].definition)
    }).catch(function (error) {
      console.error(error);
    });
  }, [word])

  if (word === '') {
    return <p>Please enter a word in the input field.</p>
  } else {
    return <p>{desc}</p> 
  } 
}