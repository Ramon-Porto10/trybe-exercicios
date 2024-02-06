const FuncPromise = async () => {
    const promise =new Promise((resolve) => {
        setTimeout(() => {
            resolve('Xablau');
        }, 5000);

    })

    await promise.then((response) => {
        console.log(response);
    })

    return promise;
};

FuncPromise();
