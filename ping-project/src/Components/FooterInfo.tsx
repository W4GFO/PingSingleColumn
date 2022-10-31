import './Styles/FooterInfo.scss'
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

type FooterInfoProps = {}

export const FooterInfo = (props: FooterInfoProps) => {
	return (
		<div className='footer-info'>
			<div className='social-icons'>

				<div className='social-icon fb-icon'>
					<FaFacebook />
				</div>
				
				<div className='social-icon tw-icon'>
					<FaTwitter />
				</div>
				
				<div className='social-icon ig-icon'>
					<FaInstagram />
				</div>

			</div>

			<p>@Copyright Ping.  All rights reserved.</p>
		</div>
	)
}