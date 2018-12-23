let result =
  Node.Fs.readFileAsUtf8Sync("inputs/Day1Part1.txt")
  |> Js.String.split("\n")
  |> Js.Array.filter(line => line != "")
  |> Js.Array.map(Js.Float.fromString)
  |> Js.Array.reduce((a, b) => a +. b, 0.0);

Js.log(result);
