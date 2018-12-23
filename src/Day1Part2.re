let frequencyChanges = Day1Utils.parseInputFile("inputs/Day1Part2.txt");
let rec findFrequencyReachedTwice =
        (currentFrequency, reachedFrequencies, restFrequencyChanges) =>
  switch (restFrequencyChanges) {
  | [] =>
    findFrequencyReachedTwice(
      currentFrequency,
      reachedFrequencies,
      frequencyChanges,
    )
  | [frequencyChange, ...rest] =>
    let newFrequency = currentFrequency + frequencyChange;
    if (List.mem(newFrequency, reachedFrequencies)) {
      newFrequency;
    } else {
      findFrequencyReachedTwice(
        newFrequency,
        [newFrequency, ...reachedFrequencies],
        rest,
      );
    };
  };

let firstFrequencyReachedTwice =
  findFrequencyReachedTwice(0, [0], frequencyChanges);

Js.log(firstFrequencyReachedTwice);
