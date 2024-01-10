import { JsonBlock } from "./JsonBlock";
import { JsonElement } from "./JsonElement";
import { JsonIndent } from "./JsonIndent";
import { JsonText } from "./JsonText";

export interface JsonArrayProps {
    value: unknown[];
}

export function JsonArray({ value }: JsonArrayProps) {
    return (
        <JsonBlock
            openingBracket={<JsonText type="square_bracket" value="["></JsonText>}
            closingBracket={<JsonText type="square_bracket" value="]"></JsonText>}
        >
            {value.map((item, i) => (
                <JsonIndent>
                    <JsonElement value={item} parent="array" isLast={i + 1 == value.length}></JsonElement>
                </JsonIndent>
            ))}
        </JsonBlock>
    );
}
