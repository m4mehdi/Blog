import {useNavigate} from "react-router-dom";
import Post from '../pages/Post.js';

const Article = ({title, date,body}) => {
    const navigate = useNavigate();
    const clickhandle = () =>{
        navigate(title, {state:{title:title,date:date,body:body}});
    }

    return (
      <article>
          <header>
            <h3 style={{fontFamily: 'Montserrat, sans-serif', fontSize: '1.75rem', marginBottom: '0.4375rem'}}>
              <a style={{boxShadow: 'none', cursor: 'pointer'}} rel="bookmark" onClick={() =>{clickhandle()}}>{title}</a>
            </h3>
            <small>{date}{/* */} • ☕️☕️☕️ 14 min read</small>
          </header>
          <p>{body}</p>
      </article>
    )
}

export default Article
