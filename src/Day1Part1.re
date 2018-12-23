let frequencyChanges = Day1Utils.parseInputFile("inputs/Day1Part2.txt");
let resultingFrequency =
  frequencyChanges |> Js.Array.reduce((a, b) => a + b, 0);

Js.log(resultingFrequency);
