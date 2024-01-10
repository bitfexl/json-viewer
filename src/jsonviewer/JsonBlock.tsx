import { ReactNode, useContext, useState } from "react";
import { JsonIndent } from "./JsonIndent";
import { JsonContext } from "./JsonContext";

export interface JsonBlockProps {
    openingBracket: ReactNode;
    closingBracket: ReactNode;
    children: ReactNode;
}

export function JsonBlock({ openingBracket, closingBracket, children }: JsonBlockProps) {
    const [open, setOpen] = useState(true);
    const jsonCtx = useContext(JsonContext);

    return (
        <>
            {openingBracket}
            <span className="inline-flex flex-col align-middle ml-1 mr-1">
                <button
                    onClick={() => setOpen(!open)}
                    className="select-none border-blue-500 border-2 w-4 h-4 rounded-lg font-bold items-top"
                    style={{ lineHeight: 0 }}
                >
                    {open ? "-" : "+"}
                </button>
            </span>

            <span style={{ display: open ? "initial" : "none" }}>
                <br className="select-none" />
                {jsonCtx.indentLevel == 0 ? <JsonIndent>{children}</JsonIndent> : children}
                <br />
            </span>

            {open ? <JsonIndent addCurrentLevel={jsonCtx.indentLevel > 0 ? -1 : 0}>{closingBracket}</JsonIndent> : closingBracket}
        </>
    );
}
