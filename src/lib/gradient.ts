function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function gradientFor(name: string): string {
  const h = hash(name);
  const h1 = h % 360;
  const h2 = (h1 + 35 + (h % 40)) % 360;
  const s1 = 55 + (h % 20);
  const s2 = 60 + ((h >> 3) % 20);
  const l1 = 55 + ((h >> 5) % 12);
  const l2 = 38 + ((h >> 7) % 18);
  return `linear-gradient(135deg, hsl(${h1} ${s1}% ${l1}%), hsl(${h2} ${s2}% ${l2}%))`;
}
