
function validateKeys(obj: object, keys: string[]): boolean {

    for (let i = 0; i < keys.length; i++) {
        if (!Object.keys(obj).includes(keys[i])) {
            return false;
        }
    }

    return true;
}
  