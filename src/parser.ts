import { promptForJson } from "./openai";

export async function parseShifts(eventDescription: string) {
  const input = `
    A "Shift" can be represented as an object with date, startTime, endTime, and volunteersNeeded properties. The date, startTime, and 
    endTime are dates that should be timezone agnostic. The volunteersNeeded are the number of volunteers needed for that shift.

    Create an array of shifts from the following description of my event. Make the follwing assumptions: All dates are in the future.
    One volunteer is needed per shift unless specified.

    Return the shifts as a json object with a shifts property that has the created array as the value.

    ${eventDescription}
  `;

  return await promptForJson(input);
}
