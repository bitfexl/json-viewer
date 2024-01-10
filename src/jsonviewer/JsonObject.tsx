import { JsonBlock } from "./JsonBlock";
import { JsonElement } from "./JsonElement";
import { JsonIndent } from "./JsonIndent";
import { JsonString } from "./JsonString";
import { JsonText } from "./JsonText";

export interface JsonObjectProps {
    value: { [key: string]: unknown };
}

export function JsonObject({ value }: JsonObjectProps) {
    const keys = Object.keys(value);

    return (
        <JsonBlock
            openingBracket={<JsonText type="curly_bracket" value="{"></JsonText>}
            closingBracket={<JsonText type="curly_bracket" value="}"></JsonText>}
        >
            {keys.map((key, i) => (
                <JsonIndent>
                    <JsonString value={key}></JsonString>
                    <JsonText type="colon" value=": "></JsonText>
                    <JsonElement value={value[key]} parent="object" isLast={i + 1 == keys.length}></JsonElement>
                </JsonIndent>
            ))}
        </JsonBlock>
    );
}
