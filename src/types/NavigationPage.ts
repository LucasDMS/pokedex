import { ElementType, ReactNode } from "react";

export interface NavigationPage {
    readonly path: string;
    readonly context: ElementType;
    readonly headerRenderer: () => ReactNode;
    readonly contentRenderer: () => ReactNode;
}