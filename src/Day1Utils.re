let parseInputFile = fileName =>
  Utils.readRows(fileName) |> Js.Array.map(int_of_string);
