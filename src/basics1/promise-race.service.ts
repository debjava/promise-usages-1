import {AllValidations} from "./all-validations";

export class PromiseRaceService {

    public validate_Type1(): void {
        const promise1 = Promise.reject(0);
        const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
        const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
        const proms = [promise1, promise2, promise3];
        Promise.race(proms).then((result) => {
            console.log(result); // Throw error
        });
    }

    // If all passed, then you will the result of first call only
    public validate_Type2(): void {
        const allVldns = new AllValidations();
        const promise1 = allVldns.payInternetBill(); // 6 seconds
        const promise2 = allVldns.payLandLinePhone(); // 3 seconds
        const promise3 = allVldns.payElectricBill(); // 4 seconds

        const proms = [promise1, promise2, promise3];
        Promise.race(proms).then((result) => {
            console.log("Now result:", result);
        });
    }

    // Even if there is a failure, still you get success and that too result from first call
    public async validate_Type3(): Promise<void> {
        const allVldns = new AllValidations();
        const promise1 = allVldns.payInternetBill(); // 6 seconds
        const promise2 = allVldns.payMobilePostpaid(); // 3 seconds, failure case
        const promise3 = allVldns.payElectricBill(); // 4 seconds
        const proms = [promise1, promise2, promise3];

        const response = await Promise.race(proms);
        console.log("Now result:", response);

    }

    // Even if there is a failure at the beginning, still you get success and that too result from first call
    public async validate_Type4(): Promise<void> {
        const allVldns = new AllValidations();
        const promise2 = allVldns.payMobilePostpaid(); // 3 seconds, failure case
        const promise1 = allVldns.payInternetBill(); // 6 seconds
        const promise3 = allVldns.payElectricBill(); // 4 seconds
        const proms = [promise1, promise2, promise3];

        const response = await Promise.race(proms);
        console.log("Now result:", response);
    }

    // One second failed
    public async validate_Type5(): Promise<void> {
        const allVldns = new AllValidations();
        const promise2 = allVldns.oneSecondPassedEvent(); // 1 seconds, Passed
        const promise1 = allVldns.oneSecondFailedEvent(); // 1 seconds, Failed
        const proms = [promise1, promise2];

        const response = await Promise.race(proms);
        console.log("Now result:", response);
    }

    // Two Second Event - Failed
    public async validate_Type6(): Promise<void> {
        const allVldns = new AllValidations();
        const promise2 = allVldns.oneSecondFailedEvent(); // 1 seconds, Failed
        const promise1 = allVldns.twoSecondFailedEvent(); // 2 seconds, Failed
        const proms = [promise1, promise2];

        const response = await Promise.race(proms);
        console.log("Now result:", response);
    }

    public async validate_Type7(): Promise<void> {
        const promise1 = new Promise((resolve, reject) => {
            setTimeout(resolve, 500, 'one');
        });
        const promise2 = new Promise((resolve, reject) => {
            setTimeout(resolve, 100, 'two');
        });
        const proms = [promise1, promise2];

        const response = await Promise.race(proms);
        console.log("Now result:", response);
    }

    public async validate_Type8(): Promise<void> {
        const allVldns = new AllValidations();
        const promise2 = allVldns.validateAadharorSSN();
        const promise1 = allVldns.validateDrivingLicense();
        const promise3 = allVldns.validatePassport();
        const proms = [promise1, promise2, promise3];

        const response = await Promise.race(proms);
        console.log("Now result:", response);// Your Driving license No - Validation successfull
    }




}