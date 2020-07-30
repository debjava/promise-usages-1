import {AllValidations} from "./all-validations";

export class PromiseAllSettledService {

    // All good conditions
    public validateAll_Type1(): void {
        const allVldns: AllValidations = new AllValidations();
        Promise.allSettled([allVldns.validateAadharorSSN(),
            allVldns.validateDrivingLicense(),
            allVldns.payElectricBill()])
            .then((values) => {
                values.forEach((value) => {
                    console.log("Value: ", value);
                })
            });
    }

    // Basic example
    public validateAll_Type2(): void {
        const p1 = Promise.resolve(50);
        const p2 = new Promise((resolve, reject) =>
            setTimeout(reject, 100, 'geek'));
        const prm = [p1, p2];

        Promise.allSettled(prm)
            .then((results) => {
                results.forEach((result) => {
                    console.log("Status: ", result.status);
                    console.log("Actual Result: ", (result as PromiseFulfilledResult<any>).value);
                });
            });
    }

    public validateAll_Type3(): void {
        const p1 = Promise.resolve(50);
        const p2 = new Promise((resolve, reject) =>
            setTimeout(reject, 100, 'geek'));
        const prm = [p1, p2];

        Promise.allSettled(prm).then((results) => results.forEach(result => {
            if (result.status === 'fulfilled') {
                console.log("Status: ", result.status);
                console.log("Actual Result: ", result.value);
            } else {
                console.log("Status: ", result.status);
                console.log("Actual Result: ", result.reason);
            }
        }));

    }

    // When one of the validations fails
    public async validateAll_Type4(): Promise<void> {
        const allVldns: AllValidations = new AllValidations();
        const [result1, result2, result3]: any[] = await Promise.allSettled(
            [allVldns.payElectricBill(), allVldns.payMobilePostpaid(), allVldns.payInternetBill()]);
        console.log("Result1: ", (result1 as PromiseFulfilledResult<string>).value);
        console.log("Result2: ", (result2 as PromiseFulfilledResult<string>).value);
        console.log("Result3: ", (result3 as PromiseFulfilledResult<string>).value);
    }

    // When one of the validations fails
    public async validateAll_Type5(): Promise<void> {
        const allVldns: AllValidations = new AllValidations();
        const [result1, result2, result3]: any[] = await Promise.allSettled(
            [allVldns.payElectricBill(), allVldns.payMobilePostpaid(), allVldns.payInternetBill()]);
        console.log("Result1: ", (result1 as PromiseFulfilledResult<string>).value);
        console.log("Result2: ", (result2 as PromiseRejectedResult).reason);
        console.log("Result3: ", (result3 as PromiseFulfilledResult<string>).value);
    }

    // When one of the validations fails
    public async validateAll_Type6(): Promise<void> {
        const allVldns: AllValidations = new AllValidations();
        const [result1, result2, result3]: any[] = await Promise.allSettled(
            [allVldns.payElectricBill(), allVldns.payMobilePostpaid(), allVldns.payInternetBill()]);
        if (result1.status === 'fulfilled') {
            console.log("Actual Result: ", result1.value);
        } else {
            console.log("Failure: ", result1.reason);
        }
        if (result2.status === 'fulfilled') {
            console.log("Actual Result: ", result2.value);
        } else {
            console.log("Failure: ", result2.reason);
        }
    }

    public async validateAll_Type7(): Promise<void> {
        const allVldns: AllValidations = new AllValidations();
        const allPromiseValues: any[] = await Promise.allSettled(
            [allVldns.payElectricBill(), allVldns.payMobilePostpaid(), allVldns.payInternetBill()]);
        allPromiseValues.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log("Success: ", result.value);
            } else {
                console.log("Failure: ", result.reason);
            }
        });
    }

    public async validateAll_Type8(): Promise<void> {
        const allVldns: AllValidations = new AllValidations();
        const allPromiseValues: any[] = await Promise.allSettled(
            [allVldns.payElectricBill(), allVldns.payMobilePostpaid(),
                allVldns.payWaterBill(), allVldns.payInternetBill()]);
        allPromiseValues.forEach((result) => {
            if (result.status === "fulfilled") {
                console.log("Success: ", result.value);
            } else {
                console.log("Failure: ", result.reason);
            }
        });
    }


}