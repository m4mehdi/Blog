import { useEffect, useState } from 'react';
import axios from '../api/axios';
import Article from '../components/Article.js';

const POST_URL = '/posts';
const Home = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {    
    const getPosts = async (e) =>{
      try{
        const response = await axios.get(POST_URL);
        let result = response.data;
        setposts(result);
      }catch (error){
        if (!error?.response) {
          console.error('No Server Response');
        } else if (error.response?.status === 400) {
          console.error('Need Username or Password');
        } else if (error.response?.status === 401) {
          console.log('Unauthorized');
        } else {
          console.error('Failed');
        }
      }

    }

    getPosts();
},[]);

    return (
      <>
        {posts.map(item => (
          <Article title={item.title} date={item.id} body={item.body} ></Article>
        ))}
      </>

    )
}

export default Home
