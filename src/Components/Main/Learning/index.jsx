import React,{useContext,useState,useEffect,useRef} from 'react'
import styles from './index.module.css'
import {Box} from '../index'

import StudyItem from '../Study/Study_item'

export default function Learning() {

  const [isInLearning,setisInLearning] = useState(0);

  const {setPut,Learn,setnowEra,nowEra} = useContext(Box);

  const name = "Learning"

  const inRef = useRef();

  const nowRef = useRef();

  useEffect(()=>{
    inRef.current = isInLearning
    nowRef.current = name;
  },[isInLearning]);

  const Enter = ()=>{
    setisInLearning(1);
    // console.log("进入放置区域",name,isInLearning);
  }

  const Over = (e)=>{
    e.preventDefault();
  }

  const Leave = ()=>{
    setisInLearning(0);
    // console.log("离开放置区域",isInLearning);
  }

  const Drop = ()=>{
    // console.log(nowRef.current);
      setnowEra(nowRef.current);
      setPut(inRef.current);
  }


  // console.log(Learn);
  return (
    <div className={styles.Box}>
      <div className={styles.Header}>Learning...</div>
      <div className={styles.Main} onDragEnter={Enter} onDragOver={Over} onDragLeave={Leave} onDrop={Drop}>
        {
          Learn.map( e=> <StudyItem value={e} key={e.id} board={name}/>)
        }
      </div>
    </div>
  )
}
