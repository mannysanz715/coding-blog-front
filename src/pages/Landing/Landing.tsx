// stylesheets
import styles from './Landing.module.css'

// types
import { User, Post} from '../../types/models'
import PostCard from '../../components/PostCard/PostCard'

interface LandingProps {
  user: User | null;
  postList: [object] | undefined;
}

interface postType{
  title: string;
  text: string;
}
const Landing = (props: LandingProps): JSX.Element => {
  const { user, postList } = props

    console.log(postList)

  return (
    <main className={styles.container}>
      <>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {postList?.map((post, idx) =>
        <PostCard key={idx}
        post={post}
        />
        )}
    </>
    </main>
  )
}

export default Landing
