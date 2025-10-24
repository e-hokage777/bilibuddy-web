import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** custom utils functions */
export function camelCaseKeysToSnake(obj: { [key: string]: any }): {
  [key: string]: any;
} {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => camelCaseKeysToSnake(item));
  }

  const newObj: { [key: string]: any } = {};
  for (const oldName in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, oldName)) {
      const newName = oldName.replace(/([A-Z])/g, (g) => `_${g.toLowerCase()}`);
      newObj[newName] = camelCaseKeysToSnake(obj[oldName]); // Recursively convert nested objects
    }
  }
  return newObj;
}
