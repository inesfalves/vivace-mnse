import "../../App.css";
import {Link} from 'react-router-dom'
import Button from "../Button.js";

function HomePage() {
    return (
        <div className="HomePage">
            <header className="Home-header">
                <h1>VIVACE</h1>
                <p className="Home-desc">An interactive timeline for pop music lovers</p>
            </header>
            <Link to='/example'>
                <Button/>
            </Link>
            <p className="Home-desc">Press Play to continue</p>
        </div>
    );
}

export default HomePage;