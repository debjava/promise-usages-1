export class AllValidations {

    public validateAadharorSSN(): Promise<string> {
        const prom: Promise<string> = new Promise( (resolve, reject) => {
            this.sleepFor(13);
            resolve("Your Aadhar or SSN No - Validation successfull")
        });
        return prom;
    }

    public validateDrivingLicense(): Promise<string> {
        const prom: Promise<string> = new Promise( (resolve, reject) => {
            this.sleepFor(9);
            resolve("Your Driving license No - Validation successfull")
        });
        return prom;
    }

    public validatePassport(): Promise<string> {
        const prom: Promise<string> = new Promise( (resolve, reject) => {
            this.sleepFor(7);
            reject("Your Passport No - Validation Unsuccessful")
        });
        return prom;
    }

    public validatePanCard(): Promise<string> {
        const prom: Promise<string> = new Promise( (resolve, reject) => {
            this.sleepFor(8);
            reject("Your Passport No - Validation Unsuccessful")
        });
        return prom;
    }

    // ~~~~ Payment Processing

    public rechargeDTHService(): Promise<string> {
        const prom: Promise<string> = new Promise( (resolve, reject) => {
            this.sleepFor(8);
            reject("Your DTH Service - Payment Unsuccessful - Try after sometime")
        });
        return prom;
    }

    public payElectricBill(): Promise<string> {
        return new Promise<string>( (resolve,reject) => {
            this.sleepFor(4);
            resolve("Your Electric Payment - Successful");
        });
    }

    public payWaterBill(): Promise<string> {
        const prom = new Promise<string>( (resolve, reject) => {
            this.sleepFor(9);
            throw new Error("Your Water Payment - Unsuccessful");
        });
        return prom;
    }

    public payLandLinePhone(): Promise<string> {
        return new Promise<string>( (resolve, reject) => {
            this.sleepFor(3);
            resolve("Your Landline Payment - Successful");
        });
    }

    public payMobilePostpaid(): Promise<string> {
        return new Promise<string>( (resolve, reject) => {
           this.sleepFor(3);
           reject("Your post paid mobile payment - Unsuccessful");
        });
    }

    public payInternetBill(): Promise<string> {
        return new Promise<string>( (resolve, reject) => {
            this.sleepFor(6);
            resolve("Your post paid internet payment - Successful");
        });
    }

    public oneSecondPassedEvent(): Promise<string> {
        return new Promise<string>( (resolve, reject) => {
            this.sleepFor(1);
            resolve("One Second Event - Successful");
        });
    }

    public oneSecondFailedEvent(): Promise<string> {
        return new Promise<string>( (resolve, reject) => {
            this.sleepFor(1);
            reject("One Second Event - Failed");
        });
    }

    public twoSecondPassedEvent(): Promise<string> {
        return new Promise<string>( (resolve, reject) => {
            this.sleepFor(2);
            resolve("Two Second Event - Successful");
        });
    }

    public twoSecondFailedEvent(): Promise<string> {
        return new Promise<string>( (resolve, reject) => {
            this.sleepFor(2);
            reject("Two Second Event - Failed");
        });
    }

    private sleepFor(sleepDuration: number): void {
        sleepDuration = sleepDuration * 1000;
        const now = new Date().getTime();
        while (new Date().getTime() < now + sleepDuration) { /* do nothing */
        }
    }
}