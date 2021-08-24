import { useEffect, useState } from 'react'
import modalStyles from '../styles/Modal.module.css'
const Modal = ({ toggleModal, post }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const user = await response.json();
        setUser(user);
        console.log(user);
    }

    return (
        <>
            <div className={modalStyles.overlay} onClick={toggleModal}></div>
            <div className={modalStyles.modal}>
                <div className={modalStyles.modalContent}>
                    <h2>{user.name}</h2>
                    <p>{user.company && user.company.catchPhrase}</p>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button className="close-modal" onClick={toggleModal}>X</button>
                </div>
            </div>
        </>
    )
}


export default Modal