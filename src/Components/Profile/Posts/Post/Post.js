import post from './Post.module.css'

const Post = (props) => {
    return <div><p>{props.text}</p>{props.likes} Likes</div>
}

export default Post