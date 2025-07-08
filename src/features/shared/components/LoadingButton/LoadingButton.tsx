interface LoadingButtonProps {
    isLoading: boolean
    text: string
    className?: string
}

import styles from './LoadingButton.module.scss'

export function LoadingButton({ isLoading, text, className = "" }: LoadingButtonProps) {
    return (
        <button
            disabled={isLoading}
            className={`${styles.loadingButton} ${className}`}
        >
            <span className={`${styles.buttonText} ${isLoading ? styles.hidden : ""}`}>
                {text}
            </span>
            {isLoading && <span className={styles.spinner}></span>}
        </button>
    )
}
