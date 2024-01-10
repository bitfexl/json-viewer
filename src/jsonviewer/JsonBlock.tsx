import { ReactNode, useContext } from "react";
import { JsonIndent } from "./JsonIndent";
import { JsonContext } from "./JsonContext";

export interface JsonBlockProps {
    openingBracket: ReactNode;
    closingBracket: ReactNode;
    children: ReactNode;
}

export function JsonBlock({ openingBracket, closingBracket, children }: JsonBlockProps) {
    const jsonCtx = useContext(JsonContext);

    return (
        <>
            {openingBracket}
            <br />
            {jsonCtx.indentLevel == 0 ? <JsonIndent>{children}</JsonIndent> : children}
            <br />
            <JsonIndent addCurrentLevel={jsonCtx.indentLevel > 0 ? -1 : 0}>{closingBracket}</JsonIndent>
        </>
    );
}
