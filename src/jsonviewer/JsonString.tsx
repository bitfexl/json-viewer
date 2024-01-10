import { JsonText } from "./JsonText";

export interface JsonStringProps {
    value: string;
}

export function JsonString({ value }: JsonStringProps) {
    return <JsonText type="value" value={JSON.stringify(value)}></JsonText>;
}
