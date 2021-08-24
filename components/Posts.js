import Post from './Post'
import postStyles from '../styles/Post.module.css'

const Posts = ({ posts }) => {
    return (
        <div className={postStyles.grid}>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}

export default Posts
