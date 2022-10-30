import './Styles/UserInput.scss'

type UserInputProps = {}

export const UserInput = (props: UserInputProps) => {

	const verifyEmailAddress = (e?:React.FormEvent) => {
		if( (e === null) || (e === undefined) ) {
			return
		}

		//e.target[0].value
		//e.target.elements.
		e.preventDefault()

		let x:number = 0
		x += 1
		console.log("Foo..." + x)
	}

	return (
		<>
			<form onSubmit={(e:React.FormEvent) => verifyEmailAddress(e)}>
				<div className='primary-input'>
					<input type='text' placeholder='Your email address...'/>
				</div>
				<div className='primary-action'>
					<button>Notify Me</button>
				</div>
			</form>
		</>
	)
}