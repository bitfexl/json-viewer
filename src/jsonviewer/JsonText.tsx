import { useContext } from "react";
import { JsonContext } from "./JsonContext";

export interface JsonTextProps {
    type: "value" | "comma" | "square_bracket" | "curly_bracket" | "quote" | "colon";
    value: string;
}

export function JsonText({ type, value }: JsonTextProps) {
    const jsonCtx = useContext(JsonContext);

    return (
        <pre
            className={`inline-block ${type == "value" ? "text-slate-900" : "text-slate-500"}`}
            style={jsonCtx.colorBrackets && type.includes("bracket") ? { color: jsonCtx.bracketColors[jsonCtx.bracketColorIndex] } : {}}
        >
            {value}
        </pre>
    );
}
