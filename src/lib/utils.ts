export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function isImagePath(path?: string) {
  return !!path && /\.(png|jpe?g|webp|avif|gif)$/i.test(path);
}
