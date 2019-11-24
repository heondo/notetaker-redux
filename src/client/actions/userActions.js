export function setName(name) {
  return {
    type: 'ADD',
    value: name
  };
}

export function setAge(age) {
  return {
    type: 'SUBTRACT',
    value: age
  };
}
