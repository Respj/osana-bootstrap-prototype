import React from "react";

class RememberMe extends React.Component {
  static displayName = "RememberMe";

  state = {
    email: "",
    password: "",
    isChecked: false,
  };

  componentDidMount() {
    if (localStorage.checkbox && localStorage.email !== "") {
      this.setState({
        isChecked: true,
        email: localStorage.username,
        password: localStorage.password,
      });
    }
  }

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangeCheckbox = (event) => {
    this.setState({
      isChecked: event.target.checked,
    });
  };

  loginSubmit = () => {
    const { email, password, isChecked } = this.state;
    if (isChecked && email !== "") {
      localStorage.username = email;
      localStorage.password = password;
      localStorage.checkbox = isChecked;
    }
    // here call the API to signup/login
  };

  render() {
    const { email, password, isChecked } = this.state;
    return (
      <div>
        <form>
          <table align="center">
            <tr>
              <td>
                <label>Email</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.onChangeValue}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.onChangeValue}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  name="lsRememberMe"
                  onChange={this.onChangeCheckbox}
                />
                <label>Remember me</label>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="button" value="Login" onClick={this.loginSubmit} />
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default RememberMe;
