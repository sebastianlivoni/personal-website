import React, { Component } from "react";
import Switch from "react-switch";

export default class ToggleDarkMode extends Component {
  
  constructor() {
    super();
    this.state = { dark: false };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const root = document.getElementById('root');
    if (!localStorage.getItem('theme')) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.setState({dark: true});
        localStorage.setItem('theme', "system");
      } else {
        this.setState({dark: false});
        localStorage.setItem('theme', "system");
      }
      console.log("Intet tema endnu!");
    } else if (localStorage.getItem('theme') === "dark") {
      this.setState({dark: true});
      root.classList.add("dark");
    } else if (localStorage.getItem('theme') === "light") {
      this.setState({dark: false});
      root.classList.remove("dark");
    } else if (localStorage.getItem('theme') === "system") {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.setState({dark: true});
        root.classList.add("dark");
      } else {
        this.setState({dark: false});
        root.classList.remove("dark");
      }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (localStorage.getItem('theme') === "system") {
        this.handleChange(e.matches);
      }
    });
  }

  handleChange(dark) {
    this.setState({ dark });
    const root = document.getElementById('root');
    if (dark === true) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }

  render() {
    return (
      <div className="hidden">
        <Switch
                onChange={this.handleChange}
                checked={this.state.dark}
                onHandleColor={"#1f2937"}
                offHandleColor={"#fff"}
                onColor={"#fff"}
                offColor={"#1f2937"}
                checkedIcon={<div className="text-center pt-1.5 text-sm">🌞</div>}
                uncheckedIcon={<div className="text-center pt-1.5 text-sm">🌛</div>}
                handleDiameter={24}
                height={32}
        />
      </div>
    );
  }
}