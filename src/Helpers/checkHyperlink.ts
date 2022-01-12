export const checkHyperlink = (str: string): string => {
  //new String to be returned
  let newString: string = "";

  const regex = new RegExp(
    "(http|ftp|https):\\/\\/([\\w_-]+(?:(?:\\.[\\w_-]+)+))([\\w.,@?^=%&:\\/~+#-]*[\\w@?^=%&\\/~+#-])"
  );

  // splits string in arrays to check for each word
  const strArray: string[] = str.split(" ");

  strArray.forEach((element) => {
    let startIndex: number;
    let match: RegExpExecArray | null;

    // checks regex and builds the anchor tag
    if ((match = regex.exec(element)) !== null) {
      startIndex = match.index;
      let hyperLink: string;

      const word = element.substring(0, startIndex - 1);
      const endIndexOfLink = element.indexOf(")", startIndex);
      const url = element.substring(startIndex, endIndexOfLink);
      hyperLink = `<a href="${url}" style="text-decoration: none;">${word}</a>`;

      // manages stuff if user added comma(,) or dot(.) after the end of parenthesis.
      if (element.length > endIndexOfLink) {
        hyperLink += element.substring(endIndexOfLink + 1, element.length);
      }
      element = hyperLink;
    }
    // add the custom anchor tag(if it exists, else the same text) to the new string
    newString += `${element} `;
  });
  return newString;
};
