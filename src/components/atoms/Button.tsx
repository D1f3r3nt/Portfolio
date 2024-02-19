interface ButtonProps {
    onClick: () => void;
    className?: string;
    children: any;
}

export const Button = ({ className, children, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={className}>
            {children}
        </button>
    )
}