import React, { useState } from 'react';

const SignIn = ({ onRouteChange, loadUser }) => {
	const [signInEmail, setSignInEmail] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

	const onEmailChange = (event) => {
		setSignInEmail(event.target.value)
	}

	const onPasswordChange = (event) => {
		setSignInPassword(event.target.value)
	}

	const onSubmitSignIn = () => {
		console.log(`email: ${signInEmail}, password: ${signInPassword}`)
		fetch('https://ztm-final-project-xzfw.onrender.com/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: signInEmail,
				password: signInPassword
			})
		})
			.then(res => res.json())
			.then(user => {
				if (user.id) {
					loadUser(user)
					onRouteChange('home')
				}
			})
	}

	return (
		<article className='br3 ba b--black-30 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
			<main className='pa4 black-80'>
				<div className='measure'>
					<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
						<legend className='f2 fw6 ph0 mh0'>Sign In</legend>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='email'
								name='email-address'
								id='email-address' 
								onChange={onEmailChange}
							/>
						</div>
						<div className='mv3'>
							<label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
							<input
								className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='password'
								name='password'
								id='password'
								onChange={onPasswordChange}
							/>
						</div>
					</fieldset>
					<div className=''>
						<input onClick={onSubmitSignIn} className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' type='submit' value='Sign in' />
					</div>
					<div className='lh-copy mt3'>
						<p onClick={() => onRouteChange('register')} className='f6 link dim black db pointer'>Register</p>
					</div>
				</div>
			</main>
		</article>
	)
}

export default SignIn