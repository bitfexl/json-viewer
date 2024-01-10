import { ReactNode, useContext } from "react";
import { JsonContext } from "./JsonContext";

export interface JsonIndentProps {
    children: ReactNode;
    addCurrentLevel?: number;
    addLevel?: number;
}

export function JsonIndent({ children, addCurrentLevel = 0, addLevel = 1 }: JsonIndentProps) {
    const jsonCtx = useContext(JsonContext);

    return (
        <JsonContext.Provider value={{ ...jsonCtx, indentLevel: jsonCtx.indentLevel + addLevel }}>
            <pre className="inline-block">{" ".repeat(jsonCtx.indent * (jsonCtx.indentLevel + addCurrentLevel))}</pre>
            {children}
        </JsonContext.Provider>
    );
}
