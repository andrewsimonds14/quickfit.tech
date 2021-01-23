import React from 'react';
import { Link } from 'react-router-dom';
import { withTheme } from 'styled-components';

import { NavBar } from '../../shared';

import { Parent } from './login.styles';
import flagShipImg from "../../assets/Garage-Gym.jpg"
import Routes from '../../router/routes';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Parent>
				<form>

                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
			</Parent>
		);
	}
}

export default withTheme(LoginPage);
