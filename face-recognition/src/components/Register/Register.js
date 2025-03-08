import React, { useState } from 'react';

const Register = ({ onRouteChange, loadUser }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onNameChange = (event) => {
		setName(event.target.value)
	}

	const onEmailChange = (event) => {
		setEmail(event.target.value)
	}

	const onPasswordChange = (event) => {
		setPassword(event.target.value)
	}

	const onSubmitRegister = () => {
		console.log(`email: ${email}, password: ${password}`);
		fetch('https://cors-anywhere.herokuapp.com/https://ztm-final-project-xzfw.onrender.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: name,
				email: email,
				password: password
			})
		})
			.then(res => res.json())
			.then(user => {
				if (user.id) {
					loadUser(user);
					onRouteChange('home')
				}
			})
			const myObj = {
				name: name,
				email: email,
				password: password
			}
			const myStr = JSON.stringify(myObj);
			console.log(myObj);
			console.log(myStr);
			console.log(myStr.json());
			console.log(JSON.stringify(myObj));
			console.log(JSON.stringify(myObj).json());

	}

	return (
		<article className='br3 ba b--black-30 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center'>
			<main className='pa4 black-80'>
				<div className='measure'>
					<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
						<legend className='f2 fw6 ph0 mh0'>Register</legend>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' htmlFor='email-address'>Name</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-white w-100'
								type='text'
								name='name'
								id='name'
								onChange={onNameChange}
							/>
						</div>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-white w-100'
								type='email'
								name='email-address'
								id='email-address'
								onChange={onEmailChange}
							/>
						</div>
						<div className='mv3'>
							<label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
							<input
								className='b pa2 input-reset ba bg-transparent hover-white w-100'
								type='password'
								name='password'
								id='password'
								onChange={onPasswordChange}
							/>
						</div>
					</fieldset>
					<div className=''>
						<input onClick={onSubmitRegister} className='b ph3 pv2 input-reset ba b--black bg-transparent pointer f4 dib' type='submit' value='Register' />
					</div>
					<div className='lh-copy mt3'>
						<p onClick={() => onRouteChange('signin')} className='f6 link dim black db pointer'>Back To Sign-In</p>
					</div>
				</div>
			</main>
		</article>
	)
}

export default Register