/**
 * @param {TemplateStringsArray} strings
 * @param {...Array<string>} expressions
*/
export const html = (strings, ...expressions) => {
  const template = document.createElement("template");
  template.innerHTML = strings.reduce(
    (result, string, index) => result + string + (expressions[index] ?? ""),
    ""
  );
  return template;
};

