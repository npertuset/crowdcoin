const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "news subject census income source middle menu position already donor you able",
  "https://rinkeby.infura.io/v3/2a894533261047e3b75e1cc5b5914990"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account:", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", gasPrice: "5000000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};

deploy();
