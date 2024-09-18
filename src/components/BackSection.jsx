import Button from './button/Button'
import { useState, useRef } from 'react'


function InputValue() {
    const [newInputValue, setNewInputValue] = useState('');
    const [check, setCheck] = useState(false);
    let input = useRef();
  
    function handleEnter(event) {
      console.log(event);
      if (event.key === 'Enter') {
        setCheck(true);
        setNewInputValue(input.current.value);
        
            event.preventDefault();
        
            
        }
      
    }
   
    return (
      <div>
        <h3>Value: {check ? newInputValue : ''}</h3>
        <input
          type="text"
          ref={input}
          className="control"
          onKeyDown={(event) => handleEnter(event)}
        />
      </div>
    );
  }


export default function BackSection(){
    // const [name, setName] = useState('')
    // const [reason, setReason] = useState('')
    // const [hasError, setHasError] = useState(false)
    const [major, setMajor] = useState({
        name: "",
        reason: '',
        hasError: false,
    })
    



    function handleCheck(even){
        // setName(even.target.value)
        // setHasError(even.target.value.length === 0)
        even.preventDefault();
        setMajor({
            name: even.target.value,
            reason: major.reason,
            hasError: even.target.value.length === 0,
        })
        console.log(major.name)
        
    }
    return(
        <>
        <section>
            <h3 style={{textAlign: 'center'}}>Обратная связь</h3>
            <form onsubmit="return false;" action="">
                <label htmlFor="name">Имя</label>
                <input style={{
                    border: major.hasError ? '1px solid red' : 'none'
                }} id='name, myField' className="control" value={major.name} onChange={handleCheck} />

                <label htmlFor="reason">Причина</label>
                <select className="control" name="" id="reason" onChange={even => setMajor({name: major.name,reason: even.target.value, hasError:major.hasError})}>
                    <option value=""></option>
                    <option value="lorem1">lorem1</option>
                    <option value="lorem2">lorem2</option>
                    <option value="lorem3">lorem3</option>
                    <option value="lorem4">lorem4</option>
                    <option value="lorem5">lorem5</option>
                </select>


            <pre>
                name: {major.name}
                <br />
                reason: {major.reason}
            </pre>
                <Button disabled={major.hasError} Button={!major.hasError}>Send</Button>
                <hr />
            {InputValue()}
            </form>
            
        </section>
        </>
    )
}