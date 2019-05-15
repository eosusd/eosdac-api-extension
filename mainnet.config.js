module.exports = {
    fillClusterSize: 4,
    clusterSize: 10,
    mongo: {
        url: 'mongodb://localhost:27017',
        dbName: 'dacmain',
        traceCollection: 'traces',
        stateCollection: 'states'
    },
    amq: {
        connectionString: 'amqp://127.0.0.1'
    },
    eos: {
        contracts: ['dactoken1111', 'daccustodia1', 'dacholding11', 'dacmultisig1', 'eosio.msig'],
        chainId: "aca376f206b8fc25a6ed44bdc66547c36c6c33e3a119ffbeaef943642f0e906",
        endpoint: 'https://eu.eosdac.io',
        wsEndpoint: 'ws://ex2.eosdac.io:8080',
        authContract: 'dacauth11111',
        msigContract: 'eosio.msig',
        custodianContract: 'daccustodia1',
        dacMsigContract: 'dacmultisig1',
        proposalsContract: 'dacproposals',
        dacGenesisBlock: 56700000  // the first block that includes any dac contract actions including the initial setcode
    }
};
