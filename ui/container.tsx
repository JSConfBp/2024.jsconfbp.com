
import classNames from 'classnames';

import style from './container.module.scss';

type ContainerProps = {
    children?: React.ReactNode | React.ReactNode[];
    elementType?: keyof JSX.IntrinsicElements;
    className?: string;
    [key: string]: any;
}

export default function Container({ children, elementType: Element = "div", className = '', ...props }: ContainerProps) {
    return (
        <Element className={classNames(style.main, className)}  {...props}>
            {children}
        </Element>
    )
}