import { ReactNode, useContext } from "react";
import { JsonContext } from "./JsonContext";

export interface JsonIndentProps {
    children: ReactNode;
    addLevel?: number;
}

export function JsonIndent({ children, addLevel = 1 }: JsonIndentProps) {
    const jsonCtx = useContext(JsonContext);

    return (
        <JsonContext.Provider value={{ ...jsonCtx, indentLevel: jsonCtx.indentLevel + addLevel }}>
            <pre className="inline-block">{" ".repeat(jsonCtx.indent * jsonCtx.indentLevel)}</pre>
            {children}
        </JsonContext.Provider>
    );
}
