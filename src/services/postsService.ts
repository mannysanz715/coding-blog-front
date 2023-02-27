import { Profile, Posts } from '../types/models'
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/posts`

async function getUserPosts() : Promise<Posts>{
  try {
    const res = await fetch(BASE_URL, {
      headers:{ 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    console.log(res)
    return await res.json() as Posts
  } catch (error) {
    throw error
  }
}

export {
  getUserPosts
}