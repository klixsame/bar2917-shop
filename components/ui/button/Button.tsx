import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Add your custom props here
}

export const Button: FC<PropsWithChildren<IButton>> = ({ children, ...rest }) => {
  return (
    <button className="btn__default" {...rest}>
        {children}
    </button>
)
};

export default Button