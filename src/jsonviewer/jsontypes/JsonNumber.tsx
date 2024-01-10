import { JsonText } from "../JsonText";

export interface JsonNumberProps {
    value: number;
}

export function JsonNumber({ value }: JsonNumberProps) {
    return <JsonText type="value" value={JSON.stringify(value)}></JsonText>;
}
