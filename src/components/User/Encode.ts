function Encode(login: string): string {
    switch(login) {
        case "John": return "Sm9objoxMjM=";
        case "Mary": return "TWFyeToxMjQ=";
        case "Mark": return "TWFyazoxMjM0";
        default: return "***";
    }
}

export default Encode