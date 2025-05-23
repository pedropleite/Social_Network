import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

import { SearchForm, ContainerSearch, ContainerPosts, BtnLink, Container } from './styles';
import CardPost from '../../components/CardPost';
import LoadingLoop from '../../components/LoadingLoop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const [searched, setSearched] = useState('');
    const { documents: posts, error, loading } = useFetch('posts');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (searched) {
            return navigate(`/search?q=${searched}`);
        }
    };

    return (
        <Container hasPosts={posts && posts.length === 0}>
            {!loading && posts && posts.length !== 0 && (
                <ContainerSearch>
                    <h1>Recent Posts</h1>
                        <SearchForm onSubmit={handleSubmit}>
                            <input type="text" placeholder="Search by tags..." onChange={(e) => setSearched(e.target.value)} />
                            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </SearchForm>
                </ContainerSearch>
            )}
            <ContainerPosts>
                {error && <p>{error}</p>}
                {posts ? posts.map((post) => <CardPost post={post} key={post.title}></CardPost>) : <LoadingLoop />}
                {!loading && posts && posts.length === 0 && (
                    <div>
                        <p>No posts found...</p>
                        <BtnLink to="/posts/create">Create a New Post</BtnLink>
                    </div>
                )}
            </ContainerPosts>
        </Container>
    );
};
