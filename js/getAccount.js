web3 = new Web3(new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));
async function getAccount() {
    let accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0];
    console.log(web3.eth.defaultAccount + ' account detected');
    return web3.eth.defaultAccount;
}

