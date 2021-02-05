import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id} = useParams();
    const {err,isPending,data:blog} = useFetch("http://localhost:9000/blogs/" + id);
    const history = useHistory();
    const handleDelete = ()=>{
        fetch("http://localhost:9000/blogs/" + id,{method : 'DELETE'})
        .then(()=>{
            history.push("/");
        })
    }
    return ( 
        <div>
            {err && <div> Error </div>}
            {isPending && <div>Loading..</div> }
            {blog && <div> <div>{blog.body}</div>  <button className = "btnDelete" onClick = {handleDelete}>Delete Blog</button> </div>}
        </div>
     );
}
 
export default BlogDetails;