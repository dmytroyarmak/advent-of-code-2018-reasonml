let parseInputFile = fileName =>
  Node.Fs.readFileAsUtf8Sync(fileName)
  |> Js.String.split("\n")
  |> Array.to_list
  |> List.filter(line => line != "")
  |> List.map(int_of_string);
