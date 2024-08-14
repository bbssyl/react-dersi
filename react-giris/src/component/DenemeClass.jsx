import React from "react";
class DenemeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return <button onClick={this.increment}>Tıkla {this.state.count}</button>;
  }
}

export default DenemeClass;
