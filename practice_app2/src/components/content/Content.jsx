import './Content.css';
import UCB from '../../assets/undraw_coffee-break_yeby 1.png'
import { FaLongArrowAltRight } from "react-icons/fa";
const Content = () => {
    return (
        <div className="content">
            <img src={UCB} alt="coffee-break" />
            <div className="contentHeading">
                <h1>Book your Service now</h1>
                <div className="contentButton">
                    <p>Click here</p>
                    <FaLongArrowAltRight/>
                </div>
            </div>
        </div>
    );
}

export default Content;