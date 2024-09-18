import { createPortal } from 'react-dom'
import { useEffect, useRef } from 'react'


export default function Modal({children, checkModal}){
    const dialog = useRef()
    useEffect(()=>{
        if(checkModal){
            dialog.current.showModal()
        }else{
            dialog.current.close()
        }
       
    },[checkModal])
    return createPortal(
     <dialog ref={dialog}>{children}</dialog>,
     document.querySelector('#dialog-jsx')
    
    )
}