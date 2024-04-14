import { useParams } from "react-router-dom";
import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";
import RightSideNav from "./Shared/RightSideNav";

const News = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h1 className="text-3xl">News Details</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default News;