import React, {useState} from 'react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import TemplateSections from '../components/TemplateSections';
import { profil } from '../Data/Data';

import IntroSection  from '../components/IntroSection';
import FormationsSection from '../components/FormationsSection';
import CompetencesSection from '../components/CompetencesSection';
import RealisationsSection from '../components/RealisationsSection';
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer';

const Home = () => {

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			
			<Sidebar isOpen={isOpen} toggle={toggle}/>
			 <Navbar toggle={toggle}/>
			<IntroSection />
			
			<TemplateSections {...profil} />
			
			<CompetencesSection/>
			
			<RealisationsSection />
			
			<FormationsSection />
			<ContactSection />
			<Footer /> 
		</>
	);
};

export default Home;
