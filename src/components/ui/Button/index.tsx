"use client";
import { StyledButton } from "./Button.style";

export default function Button({ children, ...props }: { children: React.ReactNode; [props: string]: unknown }) {
    return <StyledButton {...props}>{children}</StyledButton>;
}