import {Link} from 'react-router-dom';
const BlogList = ({blogs,title})=>{
    return (
        <div className = "blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>{
                return (
                    <div className = "blog-preview">
                        <Link to = {`/blogs/${blog.id}`}>
                            
                            <h2> {blog.title} </h2>
                            <p> Authored by {blog.author} </p>
                            
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
 
export default BlogList;