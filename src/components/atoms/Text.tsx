interface TextProps {
    value: string;
    size: 's' | 'm' | 'l' | 'xl';
    underline?: boolean;
    gradient?: boolean;
    className?: string;
    id?: string;
}

export const Text = ({value, size, underline = false, gradient = false, className = '', id}: TextProps) => {

    let fontSize: string = ''

    switch (size) {
        case "xl":
            fontSize = 'sm:text-[36px] text-[29px] font-bold'
            break
        case 'l':
            fontSize = 'sm:text-[32px] text-[25px] font-medium'
            break
        case "m":
            fontSize = 'sm:text-[20px] text-[17px]'
            break
        case "s":
            fontSize = 'sm:text-[12px] text-[9px]'
            break
        default:
            fontSize = ''
    }

    return (
        <p id={id} className={`
            ${gradient ? 'gold-gradient' : 'text-[#ECECEC]'}
            ${underline ? 'underline' : ''}
            ${fontSize}
            ${className}
        `}>
            {value}
        </p>
    )
}