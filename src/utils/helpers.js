export function multiQS(selector, scope) {
  return [...(scope || document).querySelectorAll(selector)];
}

export function singleQS(selector, scope) {
  return (scope || document).querySelector(selector);
}
