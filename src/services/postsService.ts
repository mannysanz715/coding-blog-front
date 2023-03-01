import { Profile, Post } from '../types/models'
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/posts`

async function getUserPosts(){
  try {
    const res = await fetch(BASE_URL, {
      headers:{ 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    console.log(res)
    return await res.json()
  } catch (error) {
    throw error
  }
}

async function deletePost(id:number){
  const res = await fetch(BASE_URL+'/delete/'+id,{
    method: 'DELETE',
    headers: {
    'Authorization': `Bearer ${tokenService.getToken()}` },
  })
}

async function createPost(formData: Post) : Promise<void>{
  try {
    console.log(formData)
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}` },
      body: JSON.stringify(formData),
    })
  } catch (error) {
    
  }
}

export {
  getUserPosts,
  createPost,
  deletePost
}