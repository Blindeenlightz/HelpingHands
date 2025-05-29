import { Frequency } from "@/enums/Frequency";

export interface RecurringSelectionProps {
    value: Frequency;
    onChange: (next: Frequency) => void;
}
