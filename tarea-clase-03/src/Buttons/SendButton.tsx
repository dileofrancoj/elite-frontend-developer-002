import * as React from 'react'

interface SendButtonProps {
    onClick: () => void
}
const Component: React.FC<SendButtonProps> = ({onClick}) => {
  return (
    <button onClick={onClick}>
        Enviar
    </button>
  )
}

export const SendButton = React.memo(Component)