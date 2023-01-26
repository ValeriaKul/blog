import React from 'react'

export default function AddPostForm({newPostTitle, newPostDescr, setNewPostTitle, setNewPostDescr, addPost}) {
  return (
   <>
   <div className='col'>
        <div className='col'>Create Post
            <input 
                className='form-control form-control-lg'  
                placeholder="Введите заголовок"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                />
            <textarea 
                className='form-control form-control-lg inp-2'  
                placeholder="Введите описание"
                value={newPostDescr}
                onChange={(e) => setNewPostDescr(e.target.value)}
                />
        </div>
        <div className='col-auto'>
                <button 
                    onClick={addPost}
                    className = 'btn btn-lg btn-success'>
                        Add Post 
                    </button>
            
        </div>
    </div>
    <br/>
    </>
  )
}
