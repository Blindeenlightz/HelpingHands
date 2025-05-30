import { ProgressBarProps } from "./ProgressBar.types";

export const ProgressBar: React.FC<ProgressBarProps> = ({
    amountRaised,
    targetAmount,
}) => {
    const raisedNum = parseFloat(amountRaised.replace(/[\$,]/g, ""));
    const targetNum = parseFloat(targetAmount.replace(/[\$,]/g, ""));
    const pct =
        targetNum > 0 ? Math.min((raisedNum / targetNum) * 100, 100) : 0;

    return (
        <div className="w-full">
            <div className="flex justify-between text-sm font-medium text-primary mb-1">
                <span>
                    {`Raised: `}{" "}
                    <span className="text-rose-400">{`$${raisedNum.toLocaleString()}`}</span>
                </span>
                <span>{`Goal: $${targetNum.toLocaleString()}`}</span>
            </div>

            <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                    className="h-full bg-green-500 transition-all"
                    style={{ width: `${pct}%` }}
                />
            </div>

            <div className="mt-2 flex justify-end text-sm font-bold text-primary">
                <span>{`${Math.round(pct)}%`} Funded</span>
            </div>
        </div>
    );
};
