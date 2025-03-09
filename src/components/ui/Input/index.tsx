"use client";
import { StyledInput } from "./Input.style";

export default function TextInput({
	children,
	...props
}: {
	children?: React.ReactNode;
	[props: string]: unknown;
}) {
	return <StyledInput {...props}>{children}</StyledInput>;
}
