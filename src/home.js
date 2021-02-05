import useFetch from'./useFetch';
import BlogList from './BlogList';
import { useState } from 'react';
const Home = () => {
    let [url,setUrl] = useState("http://localhost:9000/blogs");
    const {err,isPending,data : blogs} = useFetch(url);
    return ( 
        <div className="home">
            {err && <div> Error occured </div>}
            {isPending && <div>Loading ... </div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!" />}  
        </div>
    );
}
 
export default Home;
