function debugg (params: string, value: any) {
    if (params.includes("net")) {
        console.log(value);
    }
}

export default debugg
