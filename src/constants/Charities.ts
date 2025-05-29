import BaseCharities from "./BaseCharities";

let Charities = BaseCharities.map(c => ({ 
  ...c, 
  donations: [...c.donations] 
}));

// on full page load, re-clone from the base:
window.addEventListener("load", () => {
  Charities = BaseCharities.map(c => ({ 
    ...c, 
    donations: [...c.donations] 
  }));
});

export default Charities;