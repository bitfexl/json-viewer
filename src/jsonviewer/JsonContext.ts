import { createContext } from "react";

export const JsonContext = createContext({
    indent: 4,
    indentLevel: 0,

    displayIndentationLines: true,

    colorBrackets: false,
    bracketColors: ["red", "green", "orange", "blue"],
    bracketColorIndex: 0,
});
