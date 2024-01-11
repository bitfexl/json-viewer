import { createContext } from "react";

export const DEFAULT_JSON_CONTEXT = {
    indent: 4,
    indentLevel: 0,

    displayIndentationLines: true,

    colorBrackets: false,
    bracketColors: ["red", "green", "orange", "blue"],
    bracketColorIndex: 0,
};

export const JsonContext = createContext(DEFAULT_JSON_CONTEXT);
