import './Styles/FooterInfo.scss'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

type FooterInfoProps = {}

export const FooterInfo = (props: FooterInfoProps) => {
	return (
		<div className='footer-info'>
			<div className='social-icons'>

				<div className='social-icon fb-icon'>
					<a href='https://www.facebook.com' rel='noopener noreferrer' target='_blank'>
						<FaFacebook />
					</a>
				</div>
				
				<div className='social-icon tw-icon'>
					<a href='https://www.twitter.com' rel='noopener noreferrer' target='_blank'>
						<FaTwitter />
						</a>
				</div>
				
				<div className='social-icon ig-icon'>
					<a href='https://www.instagram.com/' rel='noopener noreferrer' target='_blank'>
						<FaInstagram />
					</a>
				</div>

			</div>

			<p>@Copyright Ping.  All rights reserved.</p>
		</div>
	)
}