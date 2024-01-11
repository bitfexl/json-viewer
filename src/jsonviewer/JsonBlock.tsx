import { ReactNode, useContext, useState } from "react";
import { JsonIndent } from "./JsonIndent";
import { JsonContext } from "./JsonContext";

export interface JsonBlockProps {
    openingBracket: ReactNode;
    closingBracket: ReactNode;
    children?: ReactNode;
}

export function JsonBlock({ openingBracket, closingBracket, children }: JsonBlockProps) {
    const [open, setOpen] = useState(true);
    const jsonCtx = useContext(JsonContext);

    if (
        children == null ||
        (typeof (children as Iterable<unknown>)[Symbol.iterator] == "function" &&
            (children as Iterable<unknown>)[Symbol.iterator]().next().done)
    ) {
        return (
            <>
                {openingBracket}
                {closingBracket}
            </>
        );
    }

    const nextBracketColorIndex = jsonCtx.bracketColors.length > jsonCtx.bracketColorIndex + 1 ? jsonCtx.bracketColorIndex + 1 : 0;

    return (
        <>
            {openingBracket}
            <span className="inline-flex flex-col align-middle ml-1 mr-1">
                <button
                    onClick={() => setOpen(!open)}
                    className="select-none border-blue-500 border-2 w-4 h-4 rounded-lg font-bold flex items-center justify-center"
                    style={{ lineHeight: 0 }}
                >
                    <div className="w-2 h-0 border-blue-500 border flex items-center justify-center">
                        {!open && <div className="h-2 w-0 border-blue-500 border"></div>}
                    </div>
                </button>
            </span>

            <span className="relative">
                <span style={{ display: open ? "initial" : "none" }}>
                    <br className="select-none" />
                    <JsonContext.Provider value={{ ...jsonCtx, bracketColorIndex: nextBracketColorIndex }}>
                        {jsonCtx.indentLevel == 0 ? <JsonIndent>{children}</JsonIndent> : children}
                    </JsonContext.Provider>
                    <br />
                </span>

                {jsonCtx.displayIndentationLines && (
                    <span className="absolute h-full top-0 select-none -z-10">
                        <JsonIndent addCurrentLevel={jsonCtx.indentLevel > 0 ? -1 : 0}>
                            <span className="absolute top-6 border-l" style={{ height: "calc(100% - 3rem)" }}></span>
                        </JsonIndent>
                    </span>
                )}
            </span>

            {open ? <JsonIndent addCurrentLevel={jsonCtx.indentLevel > 0 ? -1 : 0}>{closingBracket}</JsonIndent> : closingBracket}
        </>
    );
}
