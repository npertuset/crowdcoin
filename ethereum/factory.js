import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x2adf6F73Ac4c7cDef0Efb55Fec7cd5F886239056"
);

export default instance;
