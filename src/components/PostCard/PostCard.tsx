import { ObjectLiteralElementLike } from 'typescript';

import { Post } from '../../types/models'

interface PostCardProps  {
  post: Post ;
}


function PostCard(props: PostCardProps): JSX.Element {
  const { post } = props;
  console.log(post)
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </>
  );

}

export default PostCard
