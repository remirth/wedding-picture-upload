export function isImage(obj: unknown): obj is Blob {
  return (
    typeof obj === 'object' &&
    !!obj &&
    'type' in obj &&
    typeof obj.type === 'string' &&
    obj.type.includes('image')
  );
}
