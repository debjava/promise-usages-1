import {AllValidations} from "./all-validations";

/**
 * NodeJs 12 does not support Promise.any()
 */
export class PromiseAnyService {

    // All good results, no failures
    public validateAll_Type1(): void {
        const promise1 = Promise.reject(0);
        const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
        const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
        const proms = [promise1, promise2, promise3];
        // Promise.any(proms).then((result) => console.log(result));

    }
}