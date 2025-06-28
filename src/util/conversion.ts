export function clampUnit(value: number, allowNegative?: boolean): number {
  const min = allowNegative ? -0.5 : 0;
  const max = allowNegative ? 0.5 : 1;
  return Math.max(min, Math.min(value, max));
}
export function clamp8Bit(value: number, allowNegative?: boolean): number {
  const min = allowNegative ? -127 : 0;
  const max = allowNegative ? 128 : 255;
  return Math.max(min, Math.min(value, max));
}

export function to8bit(unitValue: number, allowNegative?: boolean): number {
  return Math.floor(clamp8Bit(255 * (unitValue - (allowNegative ? 0.5 : 0)), allowNegative));
}
export function toUnitNumber(bit8Value: number, allowNegative?: boolean): number {
  return clampUnit(bit8Value / 255 + (allowNegative ? 0.5 : 0), allowNegative);
}
