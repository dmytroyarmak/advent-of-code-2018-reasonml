let result =
  Node.Fs.readFileAsUtf8Sync("inputs/Day1Part1.txt")
  |> Js.String.split("\n")
  |> Array.to_list
  |> List.filter(line => line != "")
  |> List.map(int_of_string)
  |> List.fold_left((a, b) => a + b, 0);

Js.log(result);
