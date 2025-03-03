export default function Flex({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", ...style }}>{children}</div>;
}