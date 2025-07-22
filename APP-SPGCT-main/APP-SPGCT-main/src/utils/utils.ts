export const opcionSiNo = [
  {
    label: 'Si',
    value: 1,
  },
  {
    label: 'No',
    value: 0,
  },
];

export function numeroDecimal(numero: number): number {
  return Math.round(Number(numero) * 10) / 10;
}
