function check(params: string, ...value: any[]): boolean {
    let message = "";
    if (params.includes("/")) {
        const n = params.indexOf("/");
        message = params.slice(n + 1);
        params = params.slice(0, n);
    }

    // ************* Condition **********************************

    const checkCondition = params.includes("net");

    // **********************************************************

    if (checkCondition) {
        if (message) {
            console.log(message);
        }
        value.map(v =>
            console.log(v));
        if (!message && !value.length) {
            console.log("CHECK");
        }
    }
    return checkCondition;
}

export default check
