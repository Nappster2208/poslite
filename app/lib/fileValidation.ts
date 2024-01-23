// fileValidation.ts
export function validateFile(file: File | null): string | null {
  const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB
  const allowedFileTypes = ["image/png", "image/jpg", "image/jpeg"];

  if (!file) {
    return "File is required.";
  }

  if (!(file instanceof File)) {
    return "Invalid file type.";
  }

  if (file.size > maxSizeInBytes) {
    return "File size is too large. Maximum allowed size is 2 MB.";
  }

  if (!allowedFileTypes.includes(file.type)) {
    return "Unsupported file format. Allowed formats: PNG, JPG, JPEG.";
  }

  return null; // File is valid
}
