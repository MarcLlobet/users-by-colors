export const hasKeysLeft = (object: object): boolean => {
    for (let _ in object) {
        return true
    }
    return false
}
