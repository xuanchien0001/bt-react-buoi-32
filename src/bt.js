import React, { Component } from "react";
import dsKinh from "./data.json";

export default class Bt extends Component {
  constructor() {
    super();
    this.state = {
      urlImg: "./glassesImage/v1.png",
      tenkinh: "GUCCI G8850U",
      moTa: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.",
    };
  }

  handleChangeGlasses = (kinh) => {
    this.setState({ urlImg: kinh.url, tenkinh: kinh.name, moTa: kinh.desc });
  };
  render() {
    return (
      <div className="App">
        <div className="bg">
          <h1 className="header">TRY GLASSES APP ONLINE</h1>
          <div className="d-flex justify-content-between px-5 mt-3">
            <div className="text-center position-relative">
              <div className="position-absolute matKinh">
                <img src={this.state.urlImg} alt="1" />
              </div>
              <div className="content position-absolute px-1">
                <h3 className="nameGlasses text-warning">
                  {this.state.tenkinh}
                </h3>
                <p className="text-white">{this.state.moTa}</p>
              </div>
              <img className="w-50" src="./glassesImage/model.jpg" alt="1" />
            </div>
            <div className="text-center">
              <img className="w-50" src="./glassesImage/model.jpg" alt="2" />
            </div>
          </div>
          <div className="dsKinh d-flex flex-wrap container bg-white justify-content-center mt-5">
            {dsKinh.map((item) => {
              return (
                <div
                  className="item-Kinh py-4"
                  key={item.id}
                  onClick={() => this.handleChangeGlasses(item)}
                >
                  <img className="w-75" src={item.url} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
