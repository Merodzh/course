import classes from '../button/style.module.css'


export default function Button({children, onclick, Button, disabled}){ 
    
    return(
        <>
        <button disabled={disabled} className={Button ? classes.active : classes.button} onClick={onclick}>{children}</button>
        </>
    )
}