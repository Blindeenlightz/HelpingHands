export interface DollarInputProps {
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    label?: string;
    placeholder?: string;
    currency?: string;
}
