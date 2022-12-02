import React from "react";
declare type Props = {
    type?: 'button' | 'submit';
    label: string;
    variant?: 'primary' | 'secondary';
    onclick?: () => void;
    onsubmit?: () => void;
};
export declare const Button: React.FC<Props>;
export {};
