import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className="space-y-6">
            <h1 className="text-2xl ml-4">All Categories</h1>
            {
                categories.map(category => <Link className="block ml-4 text-md font-semibold"
                    key={category.id}
                    to={`/category/${category.id}`}
                    >
                    {category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;