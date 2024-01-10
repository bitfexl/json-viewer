import { JsonText } from "./JsonText";

export interface JsonBooleanProps {
    value: boolean;
}

export function JsonBoolean({ value }: JsonBooleanProps) {
    return <JsonText type="value" value={value ? "true" : "false"}></JsonText>;
}
