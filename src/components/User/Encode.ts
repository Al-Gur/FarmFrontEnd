function Encode(login: string): string {
    switch(login) {
        case "John": return "Basic Sm9objoxMjM=";
        default: return "***";
    }
}

export default Encode