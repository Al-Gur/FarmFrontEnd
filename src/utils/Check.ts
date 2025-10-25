function check(params: string, ...value: any[]): boolean {
    let message = "";
    if (params.includes("/")) {
        const n = params.indexOf("/");
        message = params.slice(n + 1);
        params = params.slice(0, n);
    }
    if (params.includes("net") || params.includes("refresh")) {
        if (message) {
            console.log(message);
        }
        value.map(v =>
            console.log(v));
        if (!message && !value.length) {
            console.log("CHECK");
        }
        return true;
    } else {
        return false;
    }
}

export default check
