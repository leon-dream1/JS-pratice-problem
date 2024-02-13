function password(obj) {
  console.log(typeof obj, typeof obj.name, typeof obj.birthYear, typeof obj.siteName);
  if (
    typeof obj !== "object" ||
    typeof obj.name !== "string" ||
    obj.name.length === 0 ||
    typeof obj.birthYear !== "number" ||
    typeof obj.siteName !== "string" ||
    obj.siteName.length === 0 ||
    obj.birthYear.toString().length !== 4
  ) {
    return "invalid";
  }

  const siteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  console.log(siteName, obj.siteName);

   const generatePassword = `${siteName}#${obj.name}@${obj.birthYear}`

  return generatePassword;
}

console.log(
  password([{ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }])
);
