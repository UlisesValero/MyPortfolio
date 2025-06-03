import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Not found page</h1>
            <Link to={"/"}>
            <button>Go back Home</button>
            </Link>
        </div>
    )
}

export default NotFoundPage