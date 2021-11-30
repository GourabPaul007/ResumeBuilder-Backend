export const isDark = (accentColor: string): boolean => {
  const accentColorText = accentColor.substring(1); // strip #
  const rgb = parseInt(accentColorText, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  if (luma < 120) {
    console.log("dark");
    return true;
  } else {
    return false;
  }
};
