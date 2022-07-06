export const checkHyperlink = (str: string): any => {
  //new String to be returned
  let newString: string = "";

  const regex = new RegExp(
    "(http|ftp|https):\\/\\/([\\w_-]+(?:(?:\\.[\\w_-]+)+))([\\w.,@?^=%&:\\/~+#-]*[\\w@?^=%&\\/~+#-])"
  );

  // splits string in arrays to check for each word
  const strArray: string[] = str.split(" ");
  const newArray = [];

  for (let i = 0; i < strArray.length; i++) {
    const element = strArray[i];

    let startIndex: number;
    let match: RegExpExecArray | null;

    // checks regex and builds the anchor tag
    if ((match = regex.exec(element)) !== null) {
      startIndex = match.index;
      let hyperLink: string;

      const word = element.substring(0, startIndex - 1);
      const endIndexOfLink = element.indexOf(")", startIndex);
      const url = element.substring(startIndex, endIndexOfLink);
      hyperLink = `<a href="${url}" style="text-decoration: none; color: inherit">${word}&nbsp;</a>`;
      newArray.push(hyperLink);
      // manages stuff if user added comma(,) or dot(.) after the end of parenthesis.
      // if (element.length > endIndexOfLink) {
      //   hyperLink += element.substring(endIndexOfLink + 1, element.length);
      // }
      // element = hyperLink;
    } else {
      newArray.push(`${element} `);
    }
  }
  newString = `<p style="margin: 0px; padding: 0px;">${newArray.join(" ")}</p>`;
  return newString;
};
