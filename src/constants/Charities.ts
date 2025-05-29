import BaseCharities from "./BaseCharities";

let Charities = BaseCharities.map((c) => ({
    ...c,
    donations: [...c.donations],
}));

if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
        Charities = BaseCharities.map((c) => ({
            ...c,
            donations: [...c.donations],
        }));
    });
}

export default Charities;
