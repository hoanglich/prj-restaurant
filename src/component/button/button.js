
import './button.css'

import { Link } from "react-router-dom";

function Button({children, to, href, className,...props}){

    let Comp = 'button';
    if(to) {
        Comp = Link;
        props.to =to;
    }
    else if(href){
        Comp = 'a';
        props.href = href;
    }

    const classes = [`btn ${className}`]
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    )
}

export default Button