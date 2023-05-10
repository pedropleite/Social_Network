import {
    Container,
    EditMessage,
    ContainerError,
    BtnCreate,
    ContainerPosts,
    ContainerHeader,
    ContainerPost,
    BtnEdit,
} from './styles';

import { useAuthValue } from '../../store/AuthContext';
import useFetch from '../../hooks/useFetch';
import useDelete from '../../hooks/useDelete';
import { LoadingLoop } from '../../components/LoadingLoop';

const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid;

    const { deletePost, response } = useDelete('posts');

    const { documents: posts } = useFetch('posts', null, uid);

    const handleContent = () => {
        if (posts && posts.length === 0) {
                return (<ContainerError>
                            <span>You don't have any posts created.</span>
                            <span>Shall we create a post?</span>
                            <BtnCreate to="/posts/create">Create</BtnCreate>
                        </ContainerError>)

        } else if (posts && posts.length !== 0) {
            return (<ContainerPosts>
                        <ContainerHeader>
                            <span>Title</span>
                            <span>Actions</span>
                        </ContainerHeader>
                        {posts &&
                            posts.map((post) => (
                                <ContainerPost key={post.id}>
                                    <div>
                                        <span>{post.title}</span>
                                        <div>
                                            <BtnEdit to={`/posts?q=${post.id}`}>Read</BtnEdit>
                                            <BtnEdit to={`/posts/edit?q=${post.id}`}>Edit</BtnEdit>
                                            <button onClick={() => deletePost(post.idPost, post.id)}>
                                                {response.loading ? 'Loading' : 'Delete'}
                                            </button>
                                        </div>
                                    </div>
                                </ContainerPost>
                            ))}
                    </ContainerPosts>)

        } else {
            return (<LoadingLoop />)
        }
    }

    return (
        <Container>
            <h1>Dashboard</h1>
            <EditMessage>Edit your posts</EditMessage>
            {handleContent()}
        </Container>
    );
};

export default Dashboard;
