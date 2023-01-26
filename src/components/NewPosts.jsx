import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPen,
    faTrashCan,
  } from "@fortawesome/free-solid-svg-icons";

export default function NewPosts({posts, setUpdateData, deletePost }) {
  return (
    <>
    {posts && 
        posts.map((post) => {
            return (
                <React.Fragment key={post.id}>
                    <div className='row post'>
                        <div className='post-1'>
                            <p className='post-title'>{post.title}</p>
                            <p className='post-descr'>{post.descr}</p>
                            <p className='dttm'>{post.dttm}</p>
                        </div>
                        <div className='iconsWrap'>
                            <span 
                                title='Edit'
                                onClick={() => setUpdateData({
                                    id: post.id,
                                    title: post.title,
                                    descr: post.descr,
                                    dttm: post.dttm
                                })}>
                                <FontAwesomeIcon icon={faPen} />
                            </span>
                            <span 
                                title='Delete'
                                onClick={() => deletePost(post.id)}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </span>
                        </div>
                    </div>
                </React.Fragment>
            );
            })}
    </>
  );
};
