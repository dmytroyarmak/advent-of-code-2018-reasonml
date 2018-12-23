let ids = Utils.readRows("inputs/Day2Part1.txt");

let countLetters = id => {
  let counts = Js.Dict.empty();

  id
  |> Js.String.split("")
  |> Js.Array.forEach(char => {
       let currentCount =
         switch (counts->Js.Dict.get(char)) {
         | None => 0
         | Some(value) => value
         };
       counts->Js.Dict.set(char, currentCount + 1);
     });

  counts;
};

let hasExactNumberOfAnyLetter = (number, counts) =>
  Js.Dict.values(counts) |> Js.Array.some(count => count == number);

let hasExactlyTwoOfAnyLetter = hasExactNumberOfAnyLetter(2);
let hasExactlyThreeOfAnyLetter = hasExactNumberOfAnyLetter(3);

let idsWithCountedLetters = ids |> Js.Array.map(countLetters);

let filterAndCound = (fn, arr) =>
  arr |> Js.Array.filter(fn) |> Js.Array.length;

let numberOfIdsWithExactlyTwoOfAnyLetter =
  idsWithCountedLetters |> filterAndCound(hasExactlyTwoOfAnyLetter);

let numberOfIdsWithExactlyThreeOfAnyLetter =
  idsWithCountedLetters |> filterAndCound(hasExactlyThreeOfAnyLetter);

let checksum =
  numberOfIdsWithExactlyTwoOfAnyLetter * numberOfIdsWithExactlyThreeOfAnyLetter;

Js.log(checksum);
