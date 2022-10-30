import './Styles/ParentLayout.scss'
import {TopTextInfo} from './TopTextInfo'
import {UserInput} from './UserInput'

type ParentLayoutProps = {}

export const ParentLayout = (props: ParentLayoutProps) => {
	return (
		<main>
			<header>
				<TopTextInfo />
			</header>

			<section>
				<UserInput />
			</section>

			<figure>
		
			</figure>

			<footer>
				
			</footer>
		</main>
	)
}