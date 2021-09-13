import { Thing } from "./thing";

export * from "./thing";

/**
 * Does a thing.
 */
export function doTheThing() {
    const thing = new Thing();
    return thing.doIt();
}