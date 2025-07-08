export function validateImage(image: File[]) {
    if (!image || image.length === 0) {
        return "IMAGE is required";
    }

    if (!image[0].type.includes('jpg') && !image[0].type.includes('png') && !image[0].type.includes('jpeg')) {
        return "Only jpg/png/jpeg images are allowed"
    }

    return undefined
}