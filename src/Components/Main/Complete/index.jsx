import React,{useContext,useState,useEffect,useRef} from 'react'
import styles from './index.module.css'
import {Box} from '../index'

import StudyItem from '../Study/Study_item'

export default function Complete() {

  const [isInComplete,setisInComplete] = useState(0);

  const {fin,setPut,setnowEra} = useContext(Box);

  const CRef = useRef();

  const cnowRef = useRef();


  const name = "Complete";


  useEffect(()=>{
    CRef.current = isInComplete;
    cnowRef.current = name;
  },[isInComplete]);


  const Enter = ()=>{
    setisInComplete(1);
    // console.log("进入放置区域",name);
  }

  const Over = (e)=>{
    e.preventDefault();
    // console.log("放置区域拖拽中");
  }

  const Leave = ()=>{
    setisInComplete(0);
  }

  const Drop = ()=>{
    setnowEra(cnowRef.current);
    setPut(CRef.current);
  }


  return (
    <div className={styles.Box}>
      <div className={styles.Header}>Complete</div>
      <div className={styles.Main} onDragEnter={Enter} onDragOver={Over} onDragLeave={Leave} onDrop={Drop}>
      {
        fin.map(e => {
          return <StudyItem value={e} key={e.id} board={name}/>
        })
      }

      </div>
    </div>
  )


}
