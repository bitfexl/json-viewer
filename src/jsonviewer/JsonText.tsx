export interface JsonTextProps {
    type: "value" | "comma" | "square_bracket" | "curly_bracket" | "quote" | "colon";
    value: string;
}

export function JsonText({ type, value }: JsonTextProps) {
    return <pre className={`inline-block ${type == value ? "text-slate-900" : "text-slate-700"}`}>{value}</pre>;
}
