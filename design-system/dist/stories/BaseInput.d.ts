import React from "react";
declare type Props = {
    type: 'tel' | 'text' | 'email' | 'password' | 'number';
    placeholder?: string;
    label: string;
    required?: boolean;
    readonly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare const BaseInput: React.FC<Props>;
export {};
