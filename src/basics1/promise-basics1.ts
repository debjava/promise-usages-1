export class PromiseBasics1 {

    public sleepFor(sleepDuration: number): void {
        const now = new Date().getTime();
        while (new Date().getTime() < now + sleepDuration) { /* do nothing */
        }
    }

    public checkPromise1(): void {
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done"), 1000);
            console.log("Operations completed ...");
        });

        prom.then((data) => {
            console.log("Now data is : ", data);
        })
    }

    public promiseWithReject(): void {
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => reject("An error is thrown"), 2000);
        });
        prom.then((data) => {
            console.log("Some error: ", data);
        });
    }

    public promiseWithCatch(): void {
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => reject("An error is thrown"), 2000);
        });
        prom.catch((errData) => {
            console.log("Some error: ", errData);
        });
    }

    public promiseWithCatchFinally(): void {
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => reject("An error is thrown"), 2000);
        });
        prom.catch((errData) => {
            console.log("Some error: ", errData);
        }).finally(() => {
            console.log("It is now final case...");
        });
    }

    public shoValueFromPromise(): void {
        this.returnFromPormise().then((data) => {
            console.log("Value received: ", data);
        })
    }

    public chainPromise(): void {
        const prom = new Promise((resolve, reject) => {
            this.sleepFor(2000);
            resolve("First Value");
        });
        prom.then((data) => {
            console.log("Value Obtained 1: ", data);
            return "Second Value";
        })
            .then((data) => {
                console.log("Value obtained 2: ", data);
                return "Third Value"
            })
            .then((data) => {
                console.log("Value Obtained 3: ", data);
                return "Fourth value";
            })
            .finally(() => {
                console.log("All over ...");
            })
            .finally(() => {
                console.log("Another finally ...")
            });
        // It means you can write finally multiple times
    }

    private returnFromPormise(): Promise<string> {
        const promp: Promise<string> = new Promise((resolve, reject) => {
            this.sleepFor(4000);
            const value: string = "Good value is coming...";
            resolve(value);
        });
        return promp;

        // return new Promise( (resolve, reject) => {
        //     // setTimeout( () => {}, 3000);
        //     setTimeout(() => {console.log()}, 5000);
        //     const value: string = "Good value is coming...";
        //     resolve(value);
        //     // return resolve(value);
        // });
    }

}

