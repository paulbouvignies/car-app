import React from "react";
declare type Props = {
    type: 'tel' | 'text' | 'email' | 'password' | 'number';
    placeholder?: string;
    label: string;
    required?: boolean;
    readOnly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
};
export declare const BaseInput: React.FC<Props>;
export {};
