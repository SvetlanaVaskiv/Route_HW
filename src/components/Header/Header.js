import { Link } from "react-router-dom"
import { HeaderStyle } from "./styles"



export const Header=()=>{


    return(
        <HeaderStyle>
<Link>Movies</Link>
<Link>TV Showes</Link>
<Link>People</Link>
<Link>More</Link>

        </HeaderStyle>
    )
}