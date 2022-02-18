import React,{useState,useContext,useRef} from 'react'
import styles from './index.module.css'
import {Box} from '../index'
import StudyItem from './Study_item'

//生成唯一id标识
import {nanoid} from 'nanoid'

export default function Study() {

  // const [Item,setItem] = useState([]);
  const [show,setShow] = useState(false);

  const inp = useRef();

  const {Addstudy,setAddstudy} = useContext(Box);

  const name = "Addstudy";


  //点击按钮出现输入框
  const Add = ()=>{    
    setShow(true); 
  }

  //失焦隐藏输入框
  const hide = ()=>{
    const item = inp.current.value.trim();
    if(item === ""){
      setShow(false);
    }
  }

  //按回车添加任务
  const AddItem = (e)=>{
    if(e.nativeEvent.keyCode === 13){
      // console.log(111);
      const item = inp.current.value.trim();
      setAddstudy([{id : nanoid(),msg : item},...Addstudy]);
      setShow(false);
    }
  }

  return (
    <div className={styles.Box}>
        <div className={styles.studyHeader}>prepare to study</div>
        <div className={styles.studyMain}>
            {

              Addstudy.map((e)=>{
                return <StudyItem value={e} key={e.id} board={name}/>
              })
            }
            {
              show ? <input type="text" className ={styles.msg} onBlur={hide} onKeyPress={AddItem} ref={inp}/> : ""
            }
            <div className={styles.AddItem} onClick={Add}>+</div>
        </div>
    </div>
  )
}
