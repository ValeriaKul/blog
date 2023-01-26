import React from 'react'

export default function UpdateForm(updateData, updatePosts, changePost, cancelUpdate) {
  return (
    <>
    <div className="col">
      <div className="col">
        <input
          value={updateData && updateData.title}
          onChange={(e) => changePost(e)}
          className="form-control form-control-lg"
        />
        <input
          value={updateData && updateData.title}
          onChange={(e) => changePost(e)}
          className="form-control form-control-lg inp-2"
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-lg btn-success" onClick={updatePosts}>
          Update
        </button>
        <button className="btn btn-lg btn-warning" onClick={cancelUpdate}>
          Cancel
        </button>
      </div>
    </div>
    <br />
  </>
  )
}
