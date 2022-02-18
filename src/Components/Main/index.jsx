import React,{useState} from 'react'

import Study from './Study'
import Learning from './Learning'
import Complete from './Complete'

import styles from './index.module.css'


export  const Box = React.createContext();

function Main() {

  const [Addstudy,setAddstudy] = useState([{id : "xyk1121",msg:"test"}]);

  const [Learn,setLearn] = useState([{id : "test",msg : "asdasd"}])

  const [fin,setFin] = useState([{id : "123123",msg : "html"}])

  const [isPut,setPut] = useState(0);


  const [nowEra,setnowEra] = useState();
  // console.log(nowEra);

  // console.log(Learn);


  return (
    <Box.Provider value={{Addstudy,setAddstudy,isPut,setPut,Learn,setLearn,fin,setFin,setnowEra,nowEra}} >
      <div className={styles.container}>
      <Study></Study>
      <Learning/>
      <Complete/>
      </div>
    </Box.Provider>
  )
}

export default Main