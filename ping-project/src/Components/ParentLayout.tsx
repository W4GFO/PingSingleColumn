import './Styles/ParentLayout.scss'
import {TopTextInfo} from './TopTextInfo'
import {UserInput} from './UserInput'
import {FooterInfo} from './FooterInfo'

import Stats from '../Images/stats-board.png'

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
				<img src={Stats} alt='Stats Graph'/>
			</figure>

			<footer>
				<FooterInfo />
			</footer>
		</main>
	)
}