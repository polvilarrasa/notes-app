import { Button } from 'primereact/button'
import React from 'react'

type OptionButtonProps = {
    icon: string,
    type: 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'help',
    action: () => void
};

const OptionButton = ({icon, type, action}: OptionButtonProps) => {
  return (
    <Button icon={icon} rounded severity={type} size='small' onClick={() => action()} />
  )
}

export default OptionButton