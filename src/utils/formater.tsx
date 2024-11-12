export const formater = (text: string) => {
    return text.split('/').map((value, index) => {
        if (index === 0) {
            return (<>{value}</>)
        } else {
            const control = value[0]
            const newValue = value.substring(1)
            if (control === "n") {
                return (<><br/>{newValue}</>)
            } else if (control === "t") {
                return (<><br/>&nbsp;<br/>{newValue}</>)
            }
        }
    })
}