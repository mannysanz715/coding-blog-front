import { ObjectLiteralElementLike } from 'typescript';

import { Post } from '../../types/models'
import * as postsService from '../../services/postsService'

interface PostCardProps  {
  post: Post ;
}


function PostCard(props: PostCardProps): JSX.Element {
  const { post } = props;
  async function handleDelete(evt: React.FormEvent): Promise<void>{
    try {
      evt.preventDefault()
      const id: number  = post.id!
      await postsService.deletePost(id)

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='post-card'>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <form onSubmit={handleDelete}>
          <button className='button'>X</button>
        </form>
    </div>
  );

}

export default PostCard
