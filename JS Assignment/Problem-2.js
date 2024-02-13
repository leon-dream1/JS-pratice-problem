function checkName(name) {
  if (typeof name !== "string" || name.length === 0) {
    return "invalid";
  }

  name = name.toLowerCase();

  if (
    name[name.length - 1] == "a" ||
    name[name.length - 1] == "y" ||
    name[name.length - 1] == "i" ||
    name[name.length - 1] == "e" ||
    name[name.length - 1] == "o" ||
    name[name.length - 1] == "u" ||
    name[name.length - 1] == "w"
  ) {
    return "Good Name";
  } else return "Bad Name";
}

console.log(checkName(199));
