export enum Frequency {
    OneTime = "one-time",
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Annual = "annual",
}

export const frequencies = [
    { id: Frequency.OneTime, name: "One-time" },
    { id: Frequency.Daily, name: "Daily" },
    { id: Frequency.Weekly, name: "Weekly" },
    { id: Frequency.Monthly, name: "Monthly" },
    { id: Frequency.Annual, name: "Annually" },
];
