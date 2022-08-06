import { Container, Title, ContainerContent, ContainerDescription, Btn } from './styles';

const CardPost = ({ post }) => {
    return (
        <Container>
            <Title>{post.title}</Title>
            <img src={post.linkImage} />
            <ContainerContent>
                <ContainerDescription>
                    <div>
                        <span>{post.content}</span>
                        <span>{post.createdBy}</span>
                    </div>
                    <div>
                        {post.tagsArray.map((tag) => (
                            <span key={tag}>
                                <span>#</span>
                                {tag + '  '}
                            </span>
                        ))}
                    </div>
                </ContainerDescription>
                <Btn to={`/posts?q=${post.id}`}>Read</Btn>
            </ContainerContent>
        </Container>
    );
};

export default CardPost;
