import styles from "./EditPostPage.module.scss"

import { useNavigate, useParams } from "react-router";
import { usePostById } from "../../hooks/usePostById";
import { usePostActions } from "../../hooks/usePostActions";
import { useAuthValue } from "../../../auth/hooks/useAuthValue";
import { Input } from "../../../auth/components/Input/Input";
import { LoadingLoop } from "../../../shared/components/LoadingLoop/LoadingLoop";
import { useForm, type SubmitHandler } from "react-hook-form";
import { validateImage } from "../../utils/validateImage";
import { useEffect } from "react";
import { LoadingButton } from "../../../shared/components/LoadingButton/LoadingButton";
import { ErrorMessage } from "../../../shared/components/ErrorMessage/ErrorMessage";

interface Inputs {
    title: string
    image: File[]
    content: string
    tags: string
}

export function EditPostPage() {
    const navigate = useNavigate()
    const { id } = useParams<string>();

    if (!id) {
        navigate("/")
    }

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<Inputs>()
    const { user } = useAuthValue();
    const { post, loading: loadingPost, error: errorPost } = usePostById({ id: id ?? "" })
    const { updatePost, loading: loadingPostUpdate, error: errorPostUpdate } = usePostActions();

    useEffect(() => {
        if (post) {
            setValue("title", post.title)
            setValue("content", post.content)

            const textTags = post.tagsArray.join(', ');
            setValue("tags", textTags)
        }
    }, [setValue, post]);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (!user) return

        const tags = data.tags
        const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase());

        const imageValue = watch("image")
        let imagePostData

        if (imageValue && imageValue.length > 0 && imageValue[0]) {
            imagePostData = {
                data: imageValue[0],
                idPost: post?.idPost ?? ""
            };
        }

        const payload = {
            id: id ?? "",
            post: {
                title: data.title,
                content: data.content,
                tagsArray,
            },
            image: imagePostData,
        };

        updatePost(payload);
    };

    function validateImageField(value: File[]) {
        if (value?.length > 0) return validateImage(value);
        return true;
    }

    if (loadingPost) return <LoadingLoop />

    return (
        <div className={`containerDefault ${styles.container}`}>
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <h1>Edit your post</h1>
                    <span>Change the post data as you like</span>

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
                        validate={validateImageField}
                    />

                    {post?.linkImage && (
                        <>
                            <span className={styles.previewLabel}>Current image preview:</span>
                            <img src={post.linkImage} alt="Current preview" className={styles.previewImage} />
                        </>
                    )}

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
                    
                    <LoadingButton isLoading={loadingPostUpdate} text="Update" className={styles.button}/>
                    <ErrorMessage hasError={errorPostUpdate} errorText={errorPostUpdate} />
                    <ErrorMessage hasError={errorPost} errorText={errorPost} />
                </form>
            </div>
        </div>
    );
};