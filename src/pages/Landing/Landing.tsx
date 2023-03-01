// stylesheets
import styles from './Landing.module.css'

// types
import { User, Post} from '../../types/models'
import PostCard from '../../components/PostCard/PostCard'
import CreatePrompt from '../../components/CreatePrompt/CreatePrompt';

import * as postsService from '../../services/postsService'
import { FormEvent } from 'react';

interface LandingProps {
  user: User | null;
  postList: [Post] | null;
  counter: number;
  addCounter: React.Dispatch<React.SetStateAction<number>>;
}

interface post{
  title: string;
  text: string;
  id: number;
}
const Landing = (props: LandingProps): JSX.Element => {
  const { user, postList, counter, addCounter } = props

  
    console.log(postList)

  return (
    <main className={styles.container}>
      <>
      <h1>hello, {user ? user.name : 'friend'}</h1>

      <CreatePrompt counter={counter} addCounter={addCounter} />
      
      <>
      {postList?.map((post, idx) => { let postId = post.id
        return(<>
        <PostCard key={idx} post={post}
        />
        
        </>)}
        )}
        </>
    </>
    </main>
  )
}

export default Landing
