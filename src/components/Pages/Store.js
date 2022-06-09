import React, { Component } from "react";
import Items from "./PagesComponents/Items";

export default class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Table with light",
          img: "img1.jpg",
          desc: "Wsadwqdqwdsadadwqdfwe",
          category: "Meble",
          price: "49,92",
        },
        {
          id: 2,
          title: "Chair black",
          img: "p2.jpg",
          desc: "",
          category: "Meble",
          price: "42,92",
        },
        {
          id: 3,
          title: "Cup",
          img: "/p2.jpg",
          desc: "Chair",
          category: "Chair",
          price: "43,92",
        },
        {
          id: 4,
          title: "Cup2",
          img: "/p3.jpg",
          desc: "",
          category: "Chair",
          price: "43,92",
        },
        {
          id: 5,
          title: "Cup3",
          img: "/p3.jpg",
          desc: "",
          category: "Chair",
          price: "43,92",
        },
      ],
    };
  }
  render() {
    return (
      <div class='wrapper'>
        <Items items={this.state.items} />
      </div>
    );
  }
}
