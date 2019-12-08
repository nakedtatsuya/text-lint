const configs = [
  { good: 'JavaScript', badList: ['javascript', 'javaScript'] },
  { good: 'Web', badList: ['web'] },
  { good: 'わかりました', badList: ['分かりました', '解りました', '判りました'] },
];

export const checkLint = (text: string) => {
  const result = [];
  configs.map(config => {
    config.badList.map(badText => {
      const re = new RegExp(`^(?=.*${badText}).*$`, 'g');
      if (text.match(re)) {
        result.push({ good: config.good, bad: badText });
      }
    });
  });

  return result.length !== 0 ? result : false;
};

export const filterInvalidTextNode = textNodes => {
  return textNodes.filter(textNode => {
    for (let i = 0; i < configs.length; i++) {
      if (isValid(textNode.characters, configs[i].badList)) {
        return true;
      }
    }
    return false;
  });
};

const isValid = (text: string, badList: string[]): boolean => {
  for (let i = 0; i < badList.length; i++) {
    const re = new RegExp(`^(?=.*${badList[i]}).*$`, 'g');
    if (text.match(re)) {
      return true;
    }
  }

  return false;
};
