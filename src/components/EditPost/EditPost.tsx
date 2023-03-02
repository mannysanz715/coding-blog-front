import { useState } from 'react'

import * as postsService from '../../services/postsService'
import { Post } from '../../types/models'

interface EditProps {
  post: Post;
}

const EditPost = (props: EditProps): JSX.Element =>{
  const { post } = props

  const handlePost = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      await postsService.createPost(formData)
    } catch (err) {
      console.log(err)
    }
  }
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  })
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  return(
  <>
    <form
    onSubmit={handlePost}
    >
      <h3>Post Title</h3>
      <input
      type="text"
      name="title"
      onChange={handleChange}
      value={post.title}
      />
      <h3>Post Content</h3>
      <textarea
      name="text"
      onChange={handleChange}
      value={post.text}
      />
      <button type="submit">Post</button>
    </form>
  </>
  )
}

export default EditPost