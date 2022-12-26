import './App.css';
import { useEffect, useState } from 'react';
import Snowfall from 'react-snowfall';
import Typewriter from  "typewriter-effect";
import { countNumber, find_friend, get_random, search } from './services';

function App() {
  const [names, setNames] = useState()
  const [name,setName] = useState()
  const [values,setValues] = useState([])
  const [err, setErr] = useState()
  const [input, setInput] = useState()
  const [number, setNumber] = useState(0)
  useEffect(()=>{
    get_random().then((results)=>{
      if(results.data.msg){

      }else{
        console.log(results.data)
        setNames(results.data)
      }
    })
  },[])
  useEffect(()=>{
    countNumber().then((results)=>{
      setNumber(results.data.remaining)
      console.log(results.data.remaining)
    })
  },[name])
  const searchQuery = ()=>{
      search(input).then((results)=>{
        setValues(results.data)
      })
  }
  console.log(values)
  const get_friends = ()=>{
    find_friend(input).then((results)=>{
      if(results.data.msg){
        setName()
        console.log(results.data.msg)
        console.log(name)
        setErr("You have already selected!")
      }else{
        setErr()
        setName(results.data)
      }
    })
  }
  if (names){
    return (
      <div>
        
        <div className='App'>
          <div className=' d-flex justify-content-end align-items-start'>
            <a href='#' className='title my-3 mr-4 mr-lg-5'>home</a>
            <a href='#generator' className='title my-3 ml-2 ml-lg-3 mr-4 mr-lg-5 pr-0 pr-lg-4'>generator</a>
          </div>
            <div className='ml-auto' style={{width: 'fit-content'}}>
              <hr className='line' />
            </div>
        </div>
        
        <div id="generator" className='secondScreen d-flex align-items-center pt-5'>
        
          <div className='mt-5 pt-5 w-100'>
            <h3 className='question mt-5 pt-5 text-center mx-2 mx-lg-0'>
              Do you want to find your christmas friend ?</h3>
              
          </div>
          <div className='w-100 mt-5 pt-4 d-flex justify-content-center align-items-center box'>
            <p className='mr-3 ques'>Enter Your Name</p>
            <div className='inputDiv'>
                  <input type="text" className='input' placeholder='Enter your name' value={input} onChange={(e)=>{
                    setInput(e.target.value)
                    searchQuery()
                  }} />
                  
                  
              
              <div className='mt-5 suggestions' style={{position: 'absolute'}}>
                {values.map((ele, i)=>{
                  return <button style={{display: 'block'}} onClick={()=>{setInput(ele.name);setValues([])}}>{ele.name}</button>
                })}
              </div>
              
            </div>
          </div>
            <button className='mx-2 button mt-5' onClick={get_friends}>Find your Christmas friend</button>
            <div>
            <p className='mr-3 ques mt-5'>{name?
            <span style={{color: "#fff"}}>
            <Typewriter
              onInit={(typewriter)=> { typewriter.typeString("Your Friend is ").pauseFor(1000).typeString(`<span style=color:#BA8841;>${name.name}</span>`).start();}}/>
            </span>:
            err?
            <Typewriter
            onInit={(typewriter)=> { typewriter.typeString(err).start();}}/>
            :<></>}</p>
            </div>
            <div>
              <p className='ques mt-5'>Friends left  {number? <span style={{color: "#BA8841"}}>{number}</span> :<></>}</p>
            </div>
            <hr style={{color: '#BA8841', border: '.5px solid #BA8841', width: '100vw', opacity: '0.5'}} />
            <div className='mt-5 mb-5' >
              <h3 className='text-center' style={{color: "#BA8841"}}>
                Let's Talk.
              </h3>
              <div className='mt-5 mb-3'>
                <a href='https://instagram.com/as_www.in?igshid=YmMyMTA2M2Y=' target="_blank" className='mx-2 link'>Designer</a>
                <a href='https://www.linkedin.com/in/anurag-chandra-52a4a3205' target="_blank" className='mx-2 link'>Devoloper</a>
              </div>
            </div>
        </div>
        <Snowfall 
         style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          
        }}
        snowflakeCount={120}
        />
      </div>
    );
  }
  else{
    return <></>
  }
}


export default App;
