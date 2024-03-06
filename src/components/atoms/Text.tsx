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
            fontSize = 'xl:text-[36px] text-[29px] font-bold'
            break
        case 'l':
            fontSize = 'xl:text-[32px] text-[25px] font-medium'
            break
        case "m":
            fontSize = 'xl:text-[20px] text-[17px]'
            break
        case "s":
            fontSize = 'text-[12px]'
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