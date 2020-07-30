import {AllValidations} from "./all-validations";

/**
 * In this class, we will see the usage Promise.all()
 */
export class PromiseAllValidationsService {

    // All good conditions
    public validateAll_Type1(): void {
        const allVldns: AllValidations = new AllValidations();
        Promise.all([allVldns.validateAadharorSSN(),
            allVldns.validateDrivingLicense(),
            allVldns.payElectricBill()])
            .then((values) => {
                values.forEach((value) => {
                    console.log("Value: ", value);
                })
            });
    }

    // All good conditions with different style of writing
    public async validateAll_Type2(): Promise<void> {
        const allVldns: AllValidations = new AllValidations();
        const [result1, result2, result3]: string[] = await Promise.all([allVldns.validateAadharorSSN(),
            allVldns.validateDrivingLicense(),
            allVldns.payElectricBill()]);
        console.log("Result1: ", result1);
        console.log("Result2: ", result2);
        console.log("Result3: ", result3);
    }

    // When one of the validations fails
    public async validateAll_Type3(): Promise<void> {
        const allVldns: AllValidations = new AllValidations();
        const [result1, result2, result3]: string[] = await Promise.all(
            [allVldns.payElectricBill(), allVldns.payMobilePostpaid(), allVldns.payInternetBill()]);
        console.log("Result1: ", result1);
        console.log("Result2: ", result2);
        console.log("Result3: ", result3);
    }

    // All success validations, what about order in the following style
    public async validateAll_Type4(): Promise<void> {
        const allVldns: AllValidations = new AllValidations();
        const promises: any[] = [];
        promises.push(allVldns.validateAadharorSSN());
        promises.push(allVldns.payElectricBill());
        promises.push(allVldns.payInternetBill());

        const allPromiseValues: string[] = await Promise.all(promises);
        // console.log(...allPromiseValues)
        allPromiseValues.forEach((value) => {
            console.log(value);
        });

        console.log("============================================");
        // Manipulate the values
        allPromiseValues.map((value) => {
            const someManiVal = "===>" + value;
            console.log(someManiVal);
        });

        const values: string[] = allPromiseValues.map((val) => {
            return val + "\n";
        });
        console.log(...values);

        const oneLinevalues: string[] = allPromiseValues.map((val) => val + ",");
        console.log(...oneLinevalues);
    }

    public async validate_Type5(): Promise<void> {
        // const allPromises: any = await Promise.all([1,2,3, Promise.resolve(444)]);

        // In the above case, number 23 will not evaluated or called
        const allPromises: any = await Promise.all([1, 2, 3, Promise.reject(555), 23]);
        const validResults = allPromises.filter((result: any) => !(result instanceof Error));
        console.log("Valid Results: ", validResults);

    }

    // Few Success, few failures validations, what about order in the following style
    public async validateAll_Type6(): Promise<void> {
        const allVldns: AllValidations = new AllValidations();
        const promises: any[] = [];
        promises.push(allVldns.validateAadharorSSN());
        promises.push(allVldns.payMobilePostpaid());
        promises.push(allVldns.payInternetBill());

        const allPromiseValues: string[] = await Promise.all(promises);
        console.log(...allPromiseValues)
        allPromiseValues.forEach((value) => {
            console.log("Received Value: ", value);
        });
    }

    public async validateAll_Type7(): Promise<void> {
        const allVldns: AllValidations = new AllValidations();
        Promise.all([allVldns.validateAadharorSSN(),
            allVldns.payMobilePostpaid(),
            allVldns.payInternetBill()])
            .then((result) => {
                console.log("Success Result: ", result);
            })
            .catch((err) => {
                console.log(`Error in promises: ${err}`)
            });
    }

    public async validateAll_Type8(): Promise<void> {
        Promise.all([
            Promise.resolve(1),
            Promise.reject(0)
        ])
            .then(() => {
                console.log('resolved!');// This line will never be printed in NodeJs 12
            })
            .catch(() => {
                console.log('failed!')
            });
    }

    // The user does not use reject, only throws Error
    public async validateAll_Type9(): Promise<void> {
        const allVldns: AllValidations = new AllValidations();
        const promises: any[] = [];
        promises.push(allVldns.payElectricBill());
        promises.push(allVldns.payWaterBill());
        promises.push(allVldns.payLandLinePhone());
        promises.push(allVldns.payMobilePostpaid());

        const allPromiseValues: string[] = await Promise.all(promises);
        console.log(...allPromiseValues)
        allPromiseValues.forEach((value) => {
            console.log("Received Value: ", value);
        });
    }
}