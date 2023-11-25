import classNames from 'classnames';
import { CSSVariableColors, OmitFirstTwoChars } from '../pages/_app';

import styles from './divider.module.scss';
import React from 'react';

function AsymmetricLine({ color = "var(--secondary)" }) {
    return (
        <svg viewBox="0 0 1728 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="1572" y1="150" x2="1728" y2="0" stroke={color} />
            <line x1="0" y1="150" x2="1572" y2="150" stroke={color} />
        </svg>
    )
}

function SymmetricLine({ color = 'var(--secondary)' }) {
    return (
        <svg viewBox="0 0 1728 300" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="300" x2="150" y2="150" stroke={color} />
            <line x1="150" y1="150" x2="1572" y2="150" stroke={color} />
            <line x1="1572" y1="150" x2="1728" y2="0" stroke={color} />
        </svg>
    )
}

type DividerProps = {
    className?: string;
    type?: "asymmetric" | "symmetric";
    color?: OmitFirstTwoChars<keyof typeof CSSVariableColors>;
    children?: React.ReactNode | React.ReactNode[];
}

export default function Divider({ className = "", type = "asymmetric", color = "secondary", children }: DividerProps) {

    let firstChild: React.ReactNode | undefined = undefined;

    if (children) {
        if (Array.isArray(children)) {
            firstChild = children[0];
            console.error('Yo, Divider.tsx here: we expect only a single child for the divider component. You gave me more. I\'m just gonna use the first one.')
        } else {
            firstChild = children;
        }
    }

    return (
        <div className={classNames(styles.main, className)}>
            {type === "asymmetric" ? <AsymmetricLine color={`var(--${color})`} /> : <SymmetricLine color={`var(--${color})`} />}
            {firstChild && <div className={classNames(styles.text, styles[type])}>
                {firstChild}
            </div>
            }
        </div>
    )
}