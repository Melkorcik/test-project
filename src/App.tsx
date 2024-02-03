import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Description from './Components/PageDescrioption/Description';
import Layout from './Components/Layout/Layout';
import './App.css';

function App() {
  const[posts, setPosts] = useState<any[]>([]);
  
  useEffect(() => {
    async function FetchUsers(){
      //users
      const requestUsers = await fetch('https://jsonplaceholder.typicode.com/users');
      const responseUsers = await requestUsers.json();
      //posts
      const requestPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
      const responsePosts = await requestPosts.json();

      setPosts(
        responsePosts.filter((obj:any) => {
          return responseUsers.find((obj2:any) => {
              return obj.id === obj2.id ? Object.assign(obj, obj2) : false;
          });
        })
      );

    }
    FetchUsers();
  },[])

  return (
    <BrowserRouter>
                {
                    posts.map((el:any) => {
                    return(
                        <>  
                          <Layout key={el.name} id={el.id} name={el.name} body={el.body}></Layout>
                        </>
                      )
                    })
                }
                    
        <Routes>   
          <Route path="/description/:id" element={<Description/>}></Route>
        </Routes>
    </BrowserRouter>   
  );
}

export default App;