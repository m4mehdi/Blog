import { useLocation } from "react-router-dom"


const Post = () => {
    const location = useLocation();
    return (
      <article>
        <header>
          <h1 style={{color: 'var(--textTitle)'}}>{location.state.title}</h1>
          <p style={{fontSize: '0.83255rem', lineHeight: '1.75rem', display: 'block', marginBottom: '1.75rem', marginTop: '-1.4rem'}}>{location.state.date}{/* */} • ☕️☕️☕️ 14 min read</p>
        </header>
        <div>
          {location.state.body}
        </div>
      </article>
    )
}

export default Post
