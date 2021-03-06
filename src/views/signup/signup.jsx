import React from 'react';
import { withTheme } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-red.css';

import { NavBar, Footer } from '../../shared';

import {
	Parent,
	Title,
	SignUpContainer,
	SquatImage,
	SignUpFormWrapper,
	SignUpText,
} from './signup.styles';
import squatMan from '../../assets/squatMan.png';
import Routes from '../../router/routes';

class SignUpPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		const navToSignUp = () => {
			this.props.history.push(Routes.toSignUp());
		};
		const navToLogin = () => {
			this.props.history.push(Routes.toLogin());
		};
		const navToOwnerSignUp = () => {
			this.props.history.push(Routes.toOwnerSignUp());
		};
		const navToLanding = () => {
			this.props.history.push(Routes.toLanding());
		};
		return (
			<Parent>
				<NavBar
					default
					navToOwnerSignUp={navToOwnerSignUp}
					navToSignUp={navToSignUp}
					navToLogin={navToLogin}
					navToLanding={navToLanding}
				/>
				<Title>Become a Workout Buddy Today!</Title>
				<SignUpContainer>
					<SquatImage src={squatMan}></SquatImage>
					<SignUpFormWrapper>
						<Formik
							initialValues={{ email: '', password: '' }}
							validate={(values) => {
								let errors = {};
								if (values.email === '') {
									errors.email = 'Email is required';
								} else if (!emailTest.test(values.email)) {
									errors.email = 'Invalid email address format';
								}
								if (values.password === '') {
									errors.password = 'Password is required';
								} else if (values.password.length < 3) {
									errors.password = 'Password must be 3 characters at minimum';
								}
								return errors;
							}}
							onSubmit={() => {
								this.props.history.push(Routes.toBuddyDashboard());
							}}
						>
							{({ touched, errors, isSubmitting }) => (
								<Form>
									<div className='form-group'>
										<SignUpText htmlFor='email'>Name</SignUpText>
										<Field
											type='name'
											name='name'
											placeholder='Enter name'
											className={`form-control ${
												touched.password && errors.password ? 'is-invalid' : ''
											}`}
										/>
									</div>
									<div className='form-group'>
										<SignUpText htmlFor='email'>Email</SignUpText>
										<Field
											type='email'
											name='email'
											placeholder='Enter email'
											className={`form-control ${
												touched.email && errors.email ? 'is-invalid' : ''
											}`}
										/>
										<ErrorMessage
											component='div'
											name='email'
											className='invalid-feedback'
										/>
									</div>

									<div className='form-group'>
										<SignUpText htmlFor='password'>Password</SignUpText>
										<Field
											type='password'
											name='password'
											placeholder='Enter password'
											className={`form-control ${
												touched.password && errors.password ? 'is-invalid' : ''
											}`}
										/>
										<ErrorMessage
											component='div'
											name='password'
											className='invalid-feedback'
										/>
									</div>

									<AwesomeButton
										type='primary'
										className='btn btn-primary btn-block'
										disabled={isSubmitting}
										style={{
											marginTop: '3em',
											width: '95%',
										}}
									>
										{isSubmitting ? 'Please wait...' : 'Submit'}
									</AwesomeButton>
								</Form>
							)}
						</Formik>
					</SignUpFormWrapper>
				</SignUpContainer>
				<Footer />
			</Parent>
		);
	}
}

export default withTheme(SignUpPage);
