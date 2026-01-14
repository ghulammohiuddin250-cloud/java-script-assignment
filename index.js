let array = [
  "junk", "crew", "tools", "error", "fuel", "noise",
  "food", "broken panel", "water", "trash", "supplies",
  "oxygen", "spare parts", "debris", "lab equipment"
];

// 1. Copy items from "crew" to "trash" into a new array
let fixedStation = array.slice(
  array.indexOf("crew"),
  array.indexOf("trash") + 1
);

// 2. Remove "junk" from the start if present
if (fixedStation[0] === "junk") {
  fixedStation.shift();
}

// 3. Remove "error"
let errorIndex = fixedStation.indexOf("error");
if (errorIndex !== -1) {
  fixedStation.splice(errorIndex, 1);
}

// 4. Remove "noise"
let noiseIndex = fixedStation.indexOf("noise");
if (noiseIndex !== -1) {
  fixedStation.splice(noiseIndex, 1);
}

// 5. Remove "broken panel"
let brokenIndex = fixedStation.indexOf("broken panel");
if (brokenIndex !== -1) {
  fixedStation.splice(brokenIndex, 1);
}

// 6. Remove "trash" from the end
if (fixedStation[fixedStation.length - 1] === "trash") {
  fixedStation.pop();
}

// 7. Make sure "crew" is at the start
if (fixedStation[0] !== "crew") {
  fixedStation.unshift("crew");
}

// 8. Make sure "fuel" is after "tools"
let toolsIndex = fixedStation.indexOf("tools");
let fuelIndex = fixedStation.indexOf("fuel");

if (fuelIndex !== toolsIndex + 1) {
  fixedStation.splice(fuelIndex, 1);
  fixedStation.splice(toolsIndex + 1, 0, "fuel");
}

// 9. Add "supplies" and "oxygen" to the end
fixedStation.push("supplies", "oxygen");

// 10. Keep remaining items in order
fixedStation.push("spare parts", "lab equipment");

console.log(fixedStation);
