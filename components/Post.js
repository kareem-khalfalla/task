import { useState } from 'react'
import postStyles from '../styles/Post.module.css'
import Modal from './Modal'

const Post = ({ post }) => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <a href="#" type="button" onClick={toggleModal} className={postStyles.card}>
                <h3>{post.title} &rarr;</h3>
            </a>
            {modal && <Modal post={post} toggleModal={toggleModal} />}
        </>
    )
}

export default Post
