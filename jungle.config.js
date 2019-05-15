module.exports = {
    fillClusterSize: 4,
    clusterSize: 10,
    mongo: {
        url: 'mongodb://localhost:27017',
        dbName: 'dac',
        traceCollection: 'traces',
        stateCollection: 'states'
    },
    amq: {
        connectionString: 'amqp://127.0.0.1'
    },
    eos: {
        contracts: ['dactoken1111', 'daccustodia1', 'dacholding11', 'dacmultisig1', 'eosiomsigold'],
        chainId: "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473",
        endpoint: 'http://jungle2.eosdac.io:8882',
        wsEndpoint: 'ws://jungle2.eosdac.io:8080',
        authContract: 'dacauth11111',
        msigContract: 'eosiomsigold',
        custodianContract: 'daccustodia1',
        dacMsigContract: 'dacmultisig1',
        proposalsContract: 'dacproposals',
        dacGenesisBlock: 12345  // the first block that includes any dac contract actions including the initial setcode
    }
};
