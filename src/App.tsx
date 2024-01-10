import { JsonElement } from "./jsonviewer/JsonElement";

export default function App() {
    // const [count, setCount] = useState(0);

    const json = {
        glossary: {
            title: "example glossary",
            GlossDiv: {
                title: "S",
                GlossList: {
                    GlossEntry: {
                        ID: "SGML",
                        SortAs: "SGML",
                        GlossTerm: "Standard Generalized Markup Language",
                        Acronym: "SGML",
                        Abbrev: "ISO 8879:1986",
                        GlossDef: {
                            para: "A meta-markup language, used to create markup languages such as DocBook.",
                            GlossSeeAlso: ["GML", "XML"],
                        },
                        GlossSee: "markup",
                    },
                },
            },
        },
    };

    return (
        <>
            <JsonElement value={json}></JsonElement>
        </>
    );
}
