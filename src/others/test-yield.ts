export class TestYield {

    public *getValues() { // you can put the return type Generator<number>, but it is ot necessary as ts will infer
        let index = 1;
        while(true) {
            yield index;
            index = index + 1;
            if (index > 10) {
                break;
            }
        }
    }

    public checkYield(): void {
        for (const num of this.getValues()) {
            console.log("Verified Number: ", num);
        }
    }
}