export function addNumber(number) {
  return {
    type: 'ADD',
    value: number
  };
}

export function subtractNumber(number) {
  return {
    type: 'SUBTRACT',
    value: number
  };
}
