import { JsonElement } from "./JsonElement";
import { JsonIndent } from "./JsonIndent";
import { JsonText } from "./JsonText";

export interface JsonArrayProps {
    value: unknown[];
}

export function JsonArray({ value }: JsonArrayProps) {
    return (
        <>
            <JsonText type="square_bracket" value="["></JsonText>
            <br />
            {value.map((item, i) => (
                <JsonIndent>
                    <JsonElement value={item} parent="array" isLast={i + 1 == value.length}></JsonElement>
                </JsonIndent>
            ))}
            <br />
            <JsonIndent>
                <JsonText type="square_bracket" value="]"></JsonText>
            </JsonIndent>
        </>
    );
}
