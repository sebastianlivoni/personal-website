import React, { Component } from "react";
import Switch from "react-switch";

export default class ToggleDarkMode extends Component {
  
  constructor() {
    super();
    this.state = { dark: false };
    this.handleChange = this.handleChange.bind(this);
  }

  setTheme(theme) {
    const root = document.getElementById('root');
    switch (theme) {
      case "dark":
        this.setState({dark: true});
        root.classList.add("dark");
        break;
      case "light":
        this.setState({dark: false});
        root.classList.remove("dark");
        break;
      default:
        this.setState({dark: false});
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('theme')) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.setTheme("dark");
        localStorage.setItem('theme', "system");
      } else {
        this.setTheme("light");
        localStorage.setItem('theme', "system");
      }
    } else if (localStorage.getItem('theme') === "dark") {
      this.setTheme("dark");
    } else if (localStorage.getItem('theme') === "light") {
      this.setTheme("light");
    } else if (localStorage.getItem('theme') === "system") {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.setTheme("dark");
      } else {
        this.setTheme("light");
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