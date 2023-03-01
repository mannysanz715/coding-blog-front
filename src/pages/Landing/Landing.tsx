// stylesheets
import styles from './Landing.module.css'

// types
import { User, Post} from '../../types/models'
import PostCard from '../../components/PostCard/PostCard'
import CreatePrompt from '../../components/CreatePrompt/CreatePrompt';

interface LandingProps {
  user: User | null;
  postList: [Post] | null;
  counter: number;
  addCounter: React.Dispatch<React.SetStateAction<number>>;
}

interface postType{
  title: string;
  text: string;
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
      {postList?.map((post, idx) => {
        return<PostCard key={idx} post={post}
        />}
        )}
        </>
    </>
    </main>
  )
}

export default Landing
