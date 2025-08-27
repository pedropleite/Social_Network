import styles from "./Divider.module.scss";

interface DividerProps {
    className?: string;
}

export function Divider({ className = "" }: DividerProps) {
    return <div className={`${styles.divider} ${className}`}></div>;
}
