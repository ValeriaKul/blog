import { useState } from 'react';
import AddPostForm from './components/AddPostForm';
import NewPosts from './components/NewPosts';
import UpdateForm from './components/UpdateForm';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [posts, setPost] = useState([]);

  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostDesrc, setNewPostDescr] = useState('');
  const [updatePostTitle, setUpdatePostTitle] = useState('');
  const [updatePostDescr, setUpdatePostDescr] = useState('');
  const [updateData, setUpdateData] = useState('');

  const addPost = () => {
    console.log('post added');
    if (newPostTitle && newPostDesrc) {
      let num = posts.length +1;
      let newEntry = {
        id: num, 
        title: newPostTitle, 
        descr: newPostDesrc, 
        dttm: new Date().toLocaleString()
      };
      setPost([...posts, newEntry])
      setNewPostTitle('');
      setNewPostDescr('');
    } else {
      alert('Some fields are empty!')
    }
  }

  const deletePost = (id) => {
    console.log('post deleted');
    const newPosts = posts.filter((post) => post.id !== id);
    setPost(newPosts);
  }

  const changePost = (e) => {
    console.log('post changed');
    if (updatePostTitle && updatePostTitle.title){
      let newEntryTitle = {
        id: updatePostTitle.id,
        title: e.target.value,
        descr: updatePostTitle.descr,
      };
      setUpdatePostTitle(newEntryTitle);
    }
    if (updatePostDescr && updatePostDescr.descr) {
      let newEntryDescr = {
        id: updatePostDescr.id,
        title: updatePostDescr.title,
        descr: e.target.value,
      };
      setUpdatePostDescr(newEntryDescr);
    }

  }
  const updatePosts = (e) => {
    let filterRecords = [...posts].filter((post) => post.id !== updateData.id);
    let updateObj = [...filterRecords, updateData];
    setPost(updateObj);
    setUpdateData("");

  }

  const cancelUpdate = () => {
    setUpdatePostTitle('');
    setUpdatePostDescr('');
  }

  return (
    <div className="container App">
      <br/>
      <h2>My posts</h2>
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changePost={changePost}
          updatePosts={updatePosts}
          cancelUpdate={cancelUpdate}
        
        />
      ) : (
        <AddPostForm
         newPostTitle={newPostTitle}
         setNewPostTitle={setNewPostTitle}
         newPostDescr={newPostDesrc}
         setNewPostDescr={setNewPostDescr}
         addPost={addPost} />
      )}
      {posts && posts.length ? '' : 'No Posts...'}
      <NewPosts 
        posts={posts}
        setUpdateData={setUpdateData}
        deletePost={deletePost}/>
     </div>
  );
}

export default App;
