import React, { useContext,useState} from 'react'

import styles from './Study_item.module.css'
import { Box } from '../index'

export default function Study_item(e) {
  // console.log(e.board);
  const { board } = e;
  const { Addstudy, setAddstudy, isPut, setLearn, Learn, fin, setFin, nowEra } = useContext(Box);

  const [Comein,setComein] = useState(0);

  const del = () => {
    if (e.board === "Addstudy") {
      DelMain(Addstudy, setAddstudy);
    } else if (e.board === "Learning") {
      DelMain(Learn, setLearn);
    } else {
      DelMain(fin, setFin);
    }

  }
  const Drag = (e) => {
    // console.log(board,nowEra);
  }

  const end = (e) => {
    // console.log(board);
    var from = board;
    var to;
    var preState;
    if(nowEra === "Learning"){
      to = setLearn;
      preState = Learn;
    }else if(nowEra === "Complete"){
      to = setFin;
      preState = fin;
    }else{
      to = setAddstudy;
      preState = Addstudy;
    }
    
    from === "Addstudy"?from = Addstudy:from === "Learning" ? from = Learn:from = fin;

    const tem = e.target.children[0].innerHTML;
    endHandle(from,to,preState,tem);  
    
  }

  const endHandle =(from,to,s,tem)=>{
    const index = from.findIndex(i => {
      return i.id === tem
    })
    if (isPut) {
        const L = from.splice(index, 1);
        to([...s, L[0]]);
    }
  }


  const DelMain = (state, OpState) => {
    const index = state.findIndex(i => {
      return i.id === e.value.id
    });
    state.splice(index, 1);
    OpState([...state]);
  }

  //鼠标进入时显示删除
  const comein = ()=>{
    setComein(1);
  }

  const out = ()=>{
    setComein(0);
  }

  return (
    <div className={styles.top} draggable={true} onDrag={Drag} onDragEnd={end} onMouseEnter={comein} onMouseLeave={out}>
      <div style={{ display: "none" }}>{e.value.id}</div>
      <div>{e.value.msg}</div>
      {
        Comein === 1?(<span className={styles.cancel} onClick={del} style={{display: 'block'}}>x</span>):(<span className={styles.cancel} onClick={del}>x</span>)
      }
    </div>
  )
}
