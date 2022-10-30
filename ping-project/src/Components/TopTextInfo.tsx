import './Styles/TopTextInfo.scss'
import headerImage from '../Images/logo.svg'

type TopTextProps = {}

export const TopTextInfo = (props: TopTextProps) => {
	return (
		<>
			<img src={headerImage} className="app-logo" alt="logo" />
			<p className='primary-message'>We are launching <span className='dark-text'>soon!</span></p>
			<p className='secondary-message'>Subscribe and get notified</p>
		</>
	)
}