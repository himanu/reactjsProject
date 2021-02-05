import { useState } from "react";
import {useHistory} from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Himanshu');
    const history = useHistory();
    const func = (e)=>{
        e.preventDefault();
        const data = {title,body,author};

        fetch('http://localhost:9000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(()=>history.push("/"))
    }
    return (
        <div className="form-blog">
            <h2>Add a new Blog</h2> 
            <form className = "form" onSubmit = {func}>
                <label>Blog Name</label>
                <input type = "text" placeholder = "Enter blog Name" onChange = {(e)=>setTitle(e.target.value)} required></input>
                <label> Blog Body:</label>
                <textarea 
                    placeholder = "Enter some text ..."
                    onChange = {(e)=>setBody(e.target.value)}
                    required>
                </textarea>
                <label>Blog Author</label>
                <select  onChange = {(e)=>setAuthor(e.target.value)} required>
                    <option value = "Himanshu">Himanshu</option>
                    <option value = "Rahul">Rahul</option>
                </select>
                <button>Add Blog</button>
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p> {author} </p>
        </div>

    );
}
 
export default Create;