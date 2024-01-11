import { useState } from "react";
import { JsonElement } from "./jsonviewer/JsonElement";

export default function App() {
    const [rawJson, setRawJson] = useState("");

    let parsingSuccess = true;
    let parsedJson;

    try {
        parsedJson = JSON.parse(rawJson);
    } catch {
        parsingSuccess = false;
    }

    return (
        <div className="ml-60 mt-6 inline-block">
            <h1 className="font-bold text-2xl mb-4">JSON Viewer</h1>

            <textarea
                onChange={(e) => setRawJson(e.target.value)}
                cols={80}
                rows={20}
                className="border border-slate-500"
                placeholder="Enter json..."
            ></textarea>

            <br />
            <br />

            <i>Result:</i>

            <br />
            <br />

            {parsingSuccess ? (
                <JsonElement key={rawJson} value={parsedJson}></JsonElement>
            ) : rawJson.length == 0 ? (
                <p>Enter JSON to see result.</p>
            ) : (
                <p className="text-red-500">Error parsing JSON.</p>
            )}
        </div>
    );
}
