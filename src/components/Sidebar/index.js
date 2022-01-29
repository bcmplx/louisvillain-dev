import React from 'react';
import {SidebarContainer, 
	Icon, 
	CloseIcon, 
	SidebarWrapper, 
	SidebarMenu, 
	SidebarLink} from './SidebarElements.js';

const Sidebar = ({isOpen, toggle}) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon />
			</Icon>

			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='home' offset={-60} smooth={true} onClick={toggle}>Home</SidebarLink>
					<SidebarLink to='profil' offset={-60} smooth={true} onClick={toggle}>Profil</SidebarLink>
					<SidebarLink to='competences' onClick={toggle} smooth={true}>Compétences</SidebarLink>
					<SidebarLink to='realisations' onClick={toggle} smooth={true}>Réalisations</SidebarLink>
					<SidebarLink to='formations' onClick={toggle} smooth={true}>Formations</SidebarLink>
					<SidebarLink to='contactpage' offset={-60} onClick={toggle} smooth={true}>Contact</SidebarLink>
				</SidebarMenu>
				
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
