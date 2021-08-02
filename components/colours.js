export const colours = {
  blue: '#3784b8',
  green: '#06A682',
  yellow: '#E9AC00',
}

const colourNames = ['blue', 'green', 'yellow']

export const randomColour = () => {
  return colours[colourNames[Math.floor(Math.random() * colourNames.length)]];
}