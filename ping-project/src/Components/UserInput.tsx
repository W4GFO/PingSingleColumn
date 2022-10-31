import  {useState} from 'react'
import './Styles/UserInput.scss'

type UserInputProps = {}

export const UserInput = (props: UserInputProps) => {

	const [isValid, setIsValid] = useState<boolean>(true)

	const verifyEmailAddress = (e?:React.FormEvent<HTMLFormElement>) => {
		if( (e === null) || (e === undefined) ) {
			return
		}

		e.preventDefault()

		let userEmailInput = e.currentTarget.elements[0] as HTMLInputElement
		console.log(userEmailInput.value)

		if(isValidEmail(userEmailInput.value) === true) {
			setIsValid(true)
		}
		else {
			setIsValid(false)
		}
	}

	const isValidEmail = (email:string) => {
		return /\S+@\S+\.\S+/.test(email)
	}

	return (
		<>
			<form onSubmit={(e:React.FormEvent<HTMLFormElement>) => verifyEmailAddress(e)}>
				<div className='primary-input'>
					<input className={isValid === true ? 'valid-border' : 'invalid-border'} type='text' placeholder='Your email address...'/>
					<p className={isValid === true ? 'no-error' : 'in-error'}>Please provide a valid email address</p>
				</div>
				<div className='primary-action'>
					<button>Notify Me</button>
				</div>
			</form>
		</>
	)
}