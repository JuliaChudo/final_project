import React from "react"
import { Link} from "react-router";


export default function Logo(){
    return(
        <div className="logo">
                        <Link to='/'>
                            <img src="./public/logo.svg" alt="picture logo" />
                        </Link>
                    </div>
    )
}