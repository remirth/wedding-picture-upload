export function isImage(obj: unknown): obj is Blob {
  return obj instanceof Blob && obj.type.includes('image');
}
