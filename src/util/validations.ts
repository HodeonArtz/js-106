function check8BitNegativity(bit8Value: number, allowNegative?: boolean): number {
  if (allowNegative && (bit8Value < -127 || bit8Value > 128))
    throw new Error(`Value "${bit8Value}" is not allowed for negative 8 bit values`);
  if (!allowNegative && (bit8Value < 0 || bit8Value > 255))
    throw new Error(`Value "${bit8Value}" can't be negative`);

  return bit8Value;
}
