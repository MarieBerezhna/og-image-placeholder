"use client";

import { ReactElement, useEffect, useState } from "react";
import { StyledButton } from "./Button.style";

export default function Button({ children, ...props }: { children: React.ReactNode; [props: string]: unknown }) {
    const [button, setButton] = useState<ReactElement<typeof StyledButton> | null>(null);

    // avoiding className hydration conflict error
    useEffect(() => {   
        setButton(<StyledButton {...props}>{children}</StyledButton>)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    return button;
}