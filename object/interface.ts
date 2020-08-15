
interface ITest {
    S1: string,
    N1: number,
    O1: {
        S2: string,
        N2: number,
    },
    O2: {
        S2: string,
        N2: number,
    }
}



const O: {S1: string,N1: number,O1: {S2: string,N2: number},O2: {S2: string,N2: number}} = {
    S1: "STRING1",
    N1: 1,
    O1: {
        S2: "STRING2",
        N2: 2,
    },
    O2: {
        S2: "STRING2",
        N2: 2,
    }
}

const P: {S1: string,N1: number,O1: {S2: string,N2: number},O2: {S2: string,N2: string}} = {
    S1: "STRING1",
    N1: 1,
    O1: {
        S2: "STRING2",
        N2: 2,
    },
    O2: {
        S2: "STRING2",
        N2: "2",
    }
}