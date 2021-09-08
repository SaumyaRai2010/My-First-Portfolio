import "./topbar.scss"
import {EmojiPeople,Mail} from "@material-ui/icons"
export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Saumya Rai</a>
                    <div className="itemContainer">
                        <EmojiPeople className="icon"/>
                        <span>+91 88600 82814</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>saunya.rai2010@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
