import React from "react";
declare type Props = {
    label?: string;
    type: 'checkbox' | 'radio';
    required?: boolean;
    readonly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare const BoolInput: React.FC<Props>;
export {};
