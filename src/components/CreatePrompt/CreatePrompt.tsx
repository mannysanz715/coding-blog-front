import { useState } from 'react'

import * as postsService from '../../services/postsService'

const CreatePrompt = (): JSX.Element =>{
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
      />
      <h3>Post Content</h3>
      <textarea
      name="text"
      onChange={handleChange}
      />
      <button type="submit">Post</button>
    </form>
  </>
  )
}

export default CreatePrompt