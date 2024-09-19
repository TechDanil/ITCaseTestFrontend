import { IColor } from "./color.ts";

export interface IProduct {
    id: number;
    name: string
    colors: IColor[]
}