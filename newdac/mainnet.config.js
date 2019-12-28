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
    ws: {
        host: '127.0.0.1',
        port: '3030'
    },
    ipc: {
        id: 'livenotifications',
        appspace: 'eosdac.'
    },
    eos: {
	    chainId: "aca376f206b8fc25a6ed44bdc66547c36c6c33e3a119ffbeaef943642f0e906",
        endpoint: 'https://eu.eosdac.io',
        wsEndpoint: 'ws://state.eosdac.io:8080',
        msigContract: 'eosio.msig',
        dacGenesisBlock: 56700000,  // the first block that includes any dac contract actions including the initial setcode
        dacDirectoryContract: 'dacdirectory',
        legacyDacs: ['vigor'],
        dacDirectoryMode: 'all',
        dacDirectoryDacId: 'vigor'
    },
    logger: {
        level: "info",
        environment: "mainnet",
        datadog: {
            apiKey: ""
        }
    }
};
