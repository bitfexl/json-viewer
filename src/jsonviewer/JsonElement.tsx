import { JsonArray } from "./JsonArray";
import { JsonBoolean } from "./JsonBoolean";
import { JsonNull } from "./JsonNull";
import { JsonNumber } from "./JsonNumber";
import { JsonObject } from "./JsonObject";
import { JsonString } from "./JsonString";
import { JsonText } from "./JsonText";

export interface JsonElementProps {
    value: unknown;
    parent?: "object" | "array" | "none";
    isLast?: boolean;
}

export function JsonElement({ value, parent = "none", isLast = true }: JsonElementProps) {
    const valueElement = <JsonElementValue value={value} parent={parent}></JsonElementValue>;

    if (isLast) {
        return valueElement;
    }

    return (
        <span>
            {valueElement}
            <JsonText type="comma" value=","></JsonText>
            <br />
        </span>
    );
}

function JsonElementValue({ value, parent }: { value: unknown; parent: "object" | "array" | "none" }) {
    if (value === null || (parent === "array" && value === undefined) || (typeof value === "number" && isNaN(value))) {
        return <JsonNull></JsonNull>;
    } else if (typeof value === "boolean") {
        return <JsonBoolean value={value}></JsonBoolean>;
    } else if (typeof value === "number") {
        return <JsonNumber value={value}></JsonNumber>;
    } else if (typeof value === "string") {
        return <JsonString value={value}></JsonString>;
    } else if (Array.isArray(value)) {
        return <JsonArray value={value}></JsonArray>;
    } else if (typeof value === "object") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <JsonObject value={value as any}></JsonObject>;
    }
    return null;
}
