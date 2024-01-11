import { useState } from "react";
import { StyledJsonElement } from "./jsonviewer/JsonElement";

export default function App() {
    const [rawJson, setRawJson] = useState("");

    const [indent, setIndent] = useState(4);
    const [displayIndentationLines, setDisplayIndentationLines] = useState(true);
    const [colorBrackets, setColorBrackets] = useState(false);

    let parsingSuccess = true;
    let parsedJson;

    try {
        parsedJson = JSON.parse(rawJson);
    } catch {
        parsingSuccess = false;
    }

    return (
        <div className="ml-[10%] w-[80%] mt-6 inline-block">
            <h1 className="font-bold text-2xl mb-4">JSON Viewer</h1>

            <textarea
                onChange={(e) => setRawJson(e.target.value)}
                cols={80}
                rows={12}
                className="border border-slate-500"
                placeholder="Enter json..."
            ></textarea>

            <br />
            <br />

            <i className="underline">Result:</i>

            <div className="flex flex-row gap-4">
                <label className="flex flex-row gap-2">
                    Indent
                    <input type="number" value={indent} onChange={(e) => setIndent(parseInt(e.target.value))} className="border w-10" />
                </label>
                <label className="flex flex-row gap-2">
                    <input
                        type="checkbox"
                        checked={displayIndentationLines}
                        onChange={() => setDisplayIndentationLines(!displayIndentationLines)}
                    />
                    Display Indentation Lines
                </label>
                <label className="flex flex-row gap-2">
                    <input type="checkbox" checked={colorBrackets} onChange={() => setColorBrackets(!colorBrackets)} />
                    Color Brackets
                </label>
            </div>

            <br />

            {parsingSuccess ? (
                <StyledJsonElement
                    key={rawJson}
                    value={parsedJson}
                    indent={indent}
                    displayIndentationLines={displayIndentationLines}
                    colorBrackets={colorBrackets}
                ></StyledJsonElement>
            ) : rawJson.length == 0 ? (
                <p>Enter JSON to see result.</p>
            ) : (
                <p className="text-red-500">Error parsing JSON.</p>
            )}

            <hr className="mt-40" />
            <div className="text-center mb-20 p-2">
                <a className="text-blue-400 hover:underline" href="https://github.com/bitfexl/json-viewer">
                    GitHub
                </a>
            </div>
        </div>
    );
}
