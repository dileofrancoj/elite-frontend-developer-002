import * as React from 'react'

/*
enum ButtonTypeEnum {
    ACTION = "action",
    BASIC = "basic"
}
 */

type ButtonType = "action " | "basic"


/*
    <Button type="..." label="navegar hacia la home" onFocus, onClick ...

    <Button onClick onFocus>
        <Navigate>
            Navegar hacia la home
        </Navigate>
    </Button>
*/
// texto, label
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}


type Button = React.FC<ButtonProps>

const BasicButton: Button = ({ children, ...rest }) => {
    return (
        <button {...rest}>
            {children}
        </button>

    )
}

const ActionButton: Button = ({ children, ...rest}) => {
    return (
    <button {...rest} style={{background: 'black', color:'gray', border:'1px solid darkgray'}}>
        {children}
    </button>
        
    )
}

interface ButtonFactoryProps {
    buttonType: ButtonType
    children: React.ReactNode
}

export const ButtonFactory: React.FC<ButtonFactoryProps> = ({ buttonType, children, ...props }) => {

    const buttonComponents: { [key in ButtonType]: Button } = {
        'basic': BasicButton,
        'action ': ActionButton
    }

    const SelectedButton = buttonComponents[buttonType]
    return <SelectedButton {...props}>{children}</SelectedButton>
}

/*

    {filters.map(({strategy, name})=> (
        <ButtonFactory buttonType='action' onClick={strategy}>
            {name}
        </ButtonFactory>

    ))}
*/

/*
    Solución sin patrones
         <ButtonFactory buttonType='action' onClick={strategy}>
            {name}
        </ButtonFactory>
*/