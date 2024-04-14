import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav";
import Navbar from "./Shared/Navbar";
import RightSideNav from "./Shared/RightSideNav";

const Home = () => {
    const  news = useLoaderData();
    //console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h1 className="text-3xl">This is Home</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard> )
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;