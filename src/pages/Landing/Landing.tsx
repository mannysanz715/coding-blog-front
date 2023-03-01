// stylesheets
import styles from '../../App.css'

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


  return (
    <main>
    <>
      <h1 className='landing-title'>{user ? `${user.name}'s Blog` : 'Welcome to my Blog. Login/SignUp'}</h1>


      {user ?  <CreatePrompt counter={counter} addCounter={addCounter} /> : ''}
      <div className='post-list-container'>
        {postList?.map((post, idx) => { let postId = post.id
          return(<>
          <PostCard key={idx} post={post}
          />
          
          </>)}
          )}
      </div>
    </>
    </main>
  )
}

export default Landing
