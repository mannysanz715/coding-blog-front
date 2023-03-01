import { useState } from 'react'

import * as postsService from '../../services/postsService'

interface counterProps {
  counter: number;
  addCounter: React.Dispatch<React.SetStateAction<number>>;
}

const CreatePrompt = (props: counterProps): JSX.Element =>{
  const { counter, addCounter} = props

  const handlePost = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      addCounter(counter + 1)
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