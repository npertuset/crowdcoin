import React, { Component } from "react";
import web3 from "../ethereum/web3";

// import Campaign from "../../../ethereum/campaign";

class Network extends Component {
  async componentDidMount() {
    // FIXME: Check network...
    // To do something just after the promise is fullfilled
    // console.log("Looking up network");
    // const network = await web3.currentProvider;
    // console.log("network: ", network);
  }

  render() {
    return (
      <div>
        <h4>Network checker coming soon...</h4>
        <br />
      </div>
      //   <Layout>
      //     <Link route={`/campaigns/${this.props.address}`}>
      //       <a>Back</a>
      //     </Link>
      //     <h3>Requests</h3>
      //     <Table celled>
      //       <Header>
      //         <Row>
      //           <HeaderCell>ID</HeaderCell>
      //           <HeaderCell>Description</HeaderCell>
      //           <HeaderCell>Amount</HeaderCell>
      //           <HeaderCell>Recipient</HeaderCell>
      //           <HeaderCell>Approval Count</HeaderCell>
      //           <HeaderCell>Approve</HeaderCell>
      //           <HeaderCell>Finalize</HeaderCell>
      //         </Row>
      //       </Header>
      //       <Body>{this.renderRow()}</Body>
      //     </Table>
      //     <Link route={`/campaigns/${this.props.address}/requests/new`}>
      //       <a>
      //         <Button primary>Add Request</Button>
      //       </a>
      //     </Link>
      //   </Layout>
    );
  }
}

export default Network;
