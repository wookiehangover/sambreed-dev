export function getThemeClass(theme?: { value: string }) {
  let themeClass = "";
  if (theme?.value === "0") {
    themeClass = "light";
  } else if (theme?.value === "1") {
    themeClass = "dark";
  }
  return themeClass;
}
