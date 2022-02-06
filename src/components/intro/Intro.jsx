import "./intro.scss";
import { init } from 'ityped';
import { useEffect ,useRef} from "react";

export default function Intro() {

    const textRef= useRef();
    useEffect(() => {
        init(textRef.current, { showCursor: true, backDelay:1600 ,  backSpeed:40 ,strings: ['Web Developer', 'Python Enthusiast','Competitive Programmer','Fitness Expert'] })
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man2.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1></h1>
                    <h2>Saumya Rai</h2>
                    <h3> I'm A <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png " alt="" />
                </a>
            </div>
        </div>
    )
}
