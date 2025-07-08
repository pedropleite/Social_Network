import styles from './CreatePostPage.module.scss';

import { usePostActions } from '../../hooks/usePostActions';
import { useAuthValue } from '../../../auth/hooks/useAuthValue';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Input } from '../../../auth/components/Input/Input';
import { validateImage } from '../../utils/validateImage';

interface Inputs {
    title: string
    image: File[]
    content: string
    tags: string
}

export function CreatePostPage() {
    const { user } = useAuthValue();
    const { createPost, loading, error: createError } = usePostActions();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (!user) return

        const tags = data.tags
        const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());
        const idPost = crypto.randomUUID();

        const postData = {
            title: data.title,
            content: data.content,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName ?? "",
            idPost,
        };

        const imagePostData = {
            uid: user.uid,
            data: data.image[0],
            idPost,
        };

        const payload = {
            post: postData,
            image: imagePostData,
        };

        createPost(payload);
    }

    return (
        <section className={`containerDefault ${styles.container}`}>
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <h1>Create a post</h1>
                    <span>Write about what you like and share it with us</span>
                    <Input
                        placeholder="Write a cool title"
                        field="title"
                        errors={errors.title?.message}
                        register={register}
                        pattern={/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/}
                        required
                    />
                    <Input
                        placeholder="Insert an image that represents you"
                        type="file"
                        field="image"
                        errors={errors.image?.message}
                        register={register}
                        validate={validateImage}
                        required
                    />
                    <Input
                        placeholder="Talk about this post"
                        field="content"
                        errors={errors.content?.message}
                        register={register}
                        pattern={/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/}
                        required
                    />
                    <Input
                        placeholder="Enter tags separated by comma"
                        field="tags"
                        errors={errors.tags?.message}
                        register={register}
                        pattern={/^\s*([A-Za-zÀ-ÖØ-öø-ÿ0-9\s]+)(\s*,\s*([A-Za-zÀ-ÖØ-öø-ÿ0-9\s]+))*\s*$/}
                        required
                    />
                    {!loading && <button className={styles.button}>Create</button>}
                    {loading && <button className={styles.button} disabled>Loading...</button>}
                    {createError && <p className='errorDefault'>{createError}</p>}
                </form>
            </div>
        </section>
    );
};
