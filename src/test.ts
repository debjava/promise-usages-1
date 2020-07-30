import {PromiseAllValidationsService} from "./basics1/promise-all-validations.service";
import {PromiseAllSettledService} from "./basics1/promise-allSettled.service";
import {PromiseAnyService} from "./basics1/promise-any.service";
import {PromiseRaceService} from "./basics1/promise-race.service";
import {TestYield} from "./others/test-yield";
// import {PromiseBasics1} from "./basics1/promise-basics1";

// const test1 = new PromiseBasics1();
// test1.checkPromise1();
// test1.promiseWithReject();
// test1.promiseWithCatch();
// test1.promiseWithCatchFinally();
// test1.shoValueFromPromise();
// test1.chainPromise();

// ~~~~~~~~~~ Other Testing for Promise all ~~~~~~~~~~~
// const test2 = new PromiseAllValidationsService();
// test2.validateAll_Type1();
// test2.validateAll_Type2();
// test2.validateAll_Type3();
// test2.validateAll_Type4();
// test2.validate_Type5();
// test2.validateAll_Type6();
// test2.validateAll_Type7();
// test2.validateAll_Type8();
// test2.validateAll_Type9();

// ~~~~~~~~~~ Testing for Promise.allSettled() ~~~~~~~~~~~~
// const test5 = new PromiseAllSettledService();
// test5.validateAll_Type1();
// test5.validateAll_Type2();
// test5.validateAll_Type3();
// test5.validateAll_Type4();
// test5.validateAll_Type5();
// test5.validateAll_Type6();
// test5.validateAll_Type7();
// test5.validateAll_Type8();

// ~~~~~~~~~~ Testing for Promise.any() ~~~~~~~~~~~~
// const test6 = new PromiseAnyService();
// test6.validateAll_Type1();

// ~~~~~~~~~ Testing for Promise.all() ~~~~~~~~~~~~~
const test7 = new PromiseRaceService();
// test7.validate_Type1();
// test7.validate_Type2();
// test7.validate_Type3();
// test7.validate_Type4();
// test7.validate_Type5();
// test7.validate_Type6();
// test7.validate_Type7();
test7.validate_Type8();

// ~~~~~~~~~~~~~~ Test Yield Test ~~~~~~~~~~~~~
// const test3 = new TestYield();
// test3.checkYield();