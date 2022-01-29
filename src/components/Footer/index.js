import React from 'react';
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';

import {FooterContainer, 
	FooterWrap, 
	FooterLinksContainer, 
	FooterLinkItems, 
	FooterLinksWrapper, 
	FooterLinkTitle, 
	FooterLink,
	FooterLinkExternal,
	SocialMedia,
	SocialMediaWrap,
	// SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink
} from './FooterElements';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>A propos</FooterLinkTitle>
							<FooterLink to="home" smooth={true} spy={true}>Home</FooterLink>
							<FooterLink to="profil" offset={-30} smooth={true} spy={true}>Qui je suis</FooterLink>
							<FooterLink to="competences" smooth={true} spy={true}>Ce que je sais faire</FooterLink>
							<FooterLink to="realisations" offset={-30} smooth={true} spy={true}>Ce que j&#39;ai déjà fait</FooterLink>							
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Mes formations</FooterLinkTitle>
							<FooterLink to="formations" offset={-30} smooth={true} spy={true}>Mes Formations</FooterLink>
							<FooterLink to="openclassrooms" offset={-100} smooth={true} spy={true}>OpenclassRooms</FooterLink>
							<FooterLink to="oclock" offset={-100} smooth={true} spy={true}>O&#39;clock</FooterLink>
							{/* <FooterLink to="realisations">Self</FooterLink>							 */}
						</FooterLinkItems>
						
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Me contacter</FooterLinkTitle>
							<FooterLink to="contactpage" smooth={true} spy={true}>Comment me contacter</FooterLink>
							<FooterLinkExternal href="https://www.linkedin.com/in/louis-villain/" target="_blank" rel="noreferrer">LinkedIn</FooterLinkExternal>
							<FooterLinkExternal href="mailto:louis.villainl@gmail.com" target="_blank" rel="noreferrer">Email</FooterLinkExternal>
							<FooterLinkExternal href="https://github.com/bcmplx/" target="_blank" rel="noreferrer">GitHub</FooterLinkExternal>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Les bonus</FooterLinkTitle>
							<FooterLink to="">Page 404</FooterLink>
							<FooterLink to="">Page 403</FooterLink>
							<FooterLink to="">J&#39;aime les cookies</FooterLink>
							<FooterLink to="">(Ceux qu&#39;on mange)</FooterLink>							
						</FooterLinkItems>
						
					</FooterLinksWrapper>
				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrap>
						<WebsiteRights>Louis Villain © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="https://www.linkedin.com/in/louis-villain/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
								<FaLinkedin />
							</SocialIconLink>
							<SocialIconLink href="https://github.com/bcmplx/" target="_blank" rel="noopener noreferrer" aria-label="Github">
								<FaGithub />
							</SocialIconLink>
							<SocialIconLink href="mailto:louis.villainl@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
								<FaGoogle />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>

			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
