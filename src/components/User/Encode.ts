function Encode(login: string): string {
    switch(login) {
        case "John": return "Basic Sm9objoxMjM=";
        case "Mary": return "Basic TWFyeToxMjQ=";
        case "Mark": return "Basic TWFyazoxMjM0";
        default: return "***";
    }
}

export default Encode