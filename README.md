![DDLAB](./images/A22.png) 
# Usages of Promise Concept in Javascript and Typescript

## A few basic concepts
* pending - the promise does not have taken a value yet, it's future is still uncertain.
* fulfilled - the promise successfully got a result value "assigned"
* rejected - the promise is given a reason why no result could be acquired, typically an error.

Static methods
==============
Promise.all(iterable): Wait for all promises to be resolved, or for any to be rejected.
Promise.all fail-fast behaviour

**Promise.allSettled(iterable)**: Wait until all promises have settled (each may resolve or reject).

**Promise.any(iterable)**
Takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfils.

**Promise.reject(reason)**
Returns a new Promise object that is rejected with the given reason.

**Promise.resolve(value)**
Returns a new Promise object that is resolved with the given value.

**Promise.race(iterable)**
Wait until any of the promises is resolved or rejected.

Difference between Promise.all() and Promise.race()
===================================================

Promise.all accepts an array of promises, and will attempt to fulfill all of them. Exits early if just 1 promise gets rejected.

Promise.race also accepts an array of promises, but returns the first promise that is settled. A settled promise can either be resolved or rejected. The race() will return the promise instance which is firstly resolved or rejected

Promise.race and Promise.any do different things:

Promise.race is settled as soon as any of the promises you feed it settle, whether they are fulfilled or rejected.

Promise.any is settled as soon as any of the promises you feed it is fulfilled or they are all rejected, in which case it's rejected with an AggregateError.

The chief differences are:

race's promise is rejected when the first promise you give it is rejected; any doesn't, because another promise may be fulfilled instead.

any's promise's rejection reason will be an AggregateError, but race's rejection reason will be the rejection reason from the promise that was rejected.

# How to run and test

Use the following command to run.

`yarn install && yarn build && yarn start`


# Technicalities
* Refer to the Typescript class `test.ts` for running.

Notes to refer
==============
You can also wrte like this.

```Typescript
const [result1, result2, result3]: string[] = await Promise.all(
   [allVldns.performGood1(), allVldns.performGood2(), allVldns.performGood3()]);
```

The above is an array which contains the result in proper order.

In the following cases, if one of the validations fails,
functions/methods will not be validated. You have to handle graceful
termination. It happened because, we used `reject` for the failures.
We have to ensure that, all should be resolved in case of
`Promise.all()`. If there is a failure followed by `reject`, the next line
never be printed.

In the following code snippet,

```Typescript
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
```

In this case `then()` block will never be executed.

Promise.allSettled
==================
In the following code snippet, the output will be different from
normal `Promise.all()`.

```Typescript
Promise.allSettled([allVldns.validateAadharorSSN(),
            allVldns.validateDrivingLicense(),
            allVldns.payElectricBill()])
            .then((values) => {
                values.forEach((value) => {
                    console.log("Value: ", value);
                })
            });
```
output will be like this.

>
>Value:  {                                                                   
  status: 'fulfilled',                                                      
  value: 'Your Aadhar or SSN No - Validation successfull'                   
}                                                                           
Value:  {                                                                   
  status: 'fulfilled',                                                      
  value: 'Your Driving license No - Validation successfull'                 
}                                                                           
>Value:  { status: 'fulfilled', value: 'Your Electric Payment - Successful' }
>
There is a trick to get the result from Promise.allSettled.

You have to refer the following approaches.

### Approach-1
```Typescript
Promise.allSettled(prm)
    .then((results) => results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log(result.status,result.value);
        } else {
            console.log(result.status,result.reason);
        }
    }));
```

### Approach-2
```Typescript
Promise.allSettled(prm)
    .then((results) => {
        results.forEach((result) => {
            console.log("Status: ", result.status);
            console.log("Actual Result: ", (result as PromiseFulfilledResult<any>).value);
        });
    });
```
How to get all the result whether success or failure in an array
================================================================
```Typescript
const allPromiseValues: any[] = await Promise.allSettled(
            [allVldns.payElectricBill(), allVldns.payMobilePostpaid(), allVldns.payInternetBill()]);
        allPromiseValues.forEach((result) => {
            if(result.status === "fulfilled") {
                console.log("Success: ", result.value);
            } else {
                console.log("Failure: ", result.reason);
            }
        });
```

In case of exception, where there is no reject or resolve

```Typescript
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
```

It provides the following result. But it executes properly ie. it produces
both success or failure result.

>Success:  Your Electric Payment - Successful
 Failure:  Your post paid mobile payment - Unsuccessful
 Failure:  Error: Your Water Payment - Unsuccessful
     at E:\typescript-2020-1\promise-usages-1\lib\basics1\all-validations.js:50:19
     at new Promise (<anonymous>)
     at AllValidations.payWaterBill (E:\typescript-2020-1\promise-usages-1\lib\basics1\all-validations.js:48:22)
     at PromiseAllSettledService.validateAll_Type8 (E:\typescript-2020-1\promise-usages-1\lib\basics1\promise-allSettled.service.js:94:22)
     at Object.<anonymous> (E:\typescript-2020-1\promise-usages-1\lib\test.js:32:7)
     at Module._compile (internal/modules/cjs/loader.js:1137:30)
     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)
     at Module.load (internal/modules/cjs/loader.js:985:32)
     at Function.Module._load (internal/modules/cjs/loader.js:878:14)
     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
 Success:  Your post paid mobile payment - Successful
>
>

Promise.any()
=============
NodeJs 12 version does not support `Promise.any()`.


Contributor
==========
@Author : **Debadatta Mishra (PIKU)** [Know me](https://about.me/debadattamishra)

Conclusion
==========
Learning notes about Promise concept. Learn, explore more and share with all.

![DDLAB](./images/dd-logo.png)