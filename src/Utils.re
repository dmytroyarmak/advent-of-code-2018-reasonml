let readRows = fileName =>
  Node.Fs.readFileAsUtf8Sync(fileName)
  |> Js.String.split("\n")
  |> Js.Array.filter(line => line != "");
