import React, { useEffect } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'

export default function Home() {

  useEffect(() => {
    fetch("http://wthrcdn.etouch.cn/weather_mini?city=北京").then((response) => {
      // console.log(response.json());
      return response.json();
    }).then((data)=>{
      console.log(data);
    }).catch((e)=>{
      console.log(e.message);
    });
  }, [])


  return (
    <Link className={styles.start} to="/main">start App</Link>
  )
}
