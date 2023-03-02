import EditPost from "../../components/EditPost/EditPost"
import { Post } from "../../types/models"

interface EditProps{
  post: Post
}
function Edit (props: EditProps){
  const { post } = props
  return(
    <>
      <EditPost post={post}/>
    </>
  )

}

export default Edit 