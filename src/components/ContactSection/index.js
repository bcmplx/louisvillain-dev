import React, {useState, useEffect } from 'react';
import { Button, ExtButton } from '../Services/ButtonElement';
import {Animated} from 'react-animated-css';
import img from '../../images/coding_11.svg';
import {ContactContainer, 
	ContactWrapper, 
	ContactRow, 
	Column1, 
	Column2, 
	TextWrapper, 
	TopLine, 
	Heading, 
	Subtitle, 
	BtnWrap,
	ImgWrap,
	Img} from './ContactElements';
import { useMediaQuery } from 'react-responsive';
// import Modal from '../Modal';
// import Dip from '../RealisationsSection/dip';
// import Travel from '../RealisationsSection/travel';

const ContactSection = () => {

	const [animatedBtn, setanimBtn] = useState(false);
	const [animated, setanimated] = useState(false);

	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });



	const changeDisplay = () => { 
		if (isMobile) {
			if(window.scrollY > 5750 && window.scrollY < 7100) {
				setanimBtn(true);
				setanimated(true);
			} else {
				setanimBtn(false);
				setanimated(false);
			}
		}
		else {
			if(window.scrollY > 4500 && window.scrollY < 5600) {
				setanimBtn(true);
				setanimated(true);
			} else {
				setanimBtn(false);
				setanimated(false);
			}
		}	
	};

	const animatedCss = (data, duraIn=1000, animIn = 'fadeIn', animOut='fadeOutLeft', duraOut=1000) => {
		return (
			<Animated animationIn={animIn} 
				animationOut={animOut} 
				animationInDuration={duraIn} 
				animationOutDuration={duraOut} 
				isVisible={animated}
			>
				{data}
			</Animated>
		);
		
	};
	
	const Btn = animatedBtn ? (		
		<Animated animationIn='fadeInLeft' 
			animationOut="fadeOutLeft" 
			animationInDuration={1500} 
			animationOutDuration={1000} 
			isVisible={true}
		>
			<ExtButton to ='' href="mailto:louis.villainl@gmail.com"
				spy={true}
				exact="true"
				offset={-80}
				primary={1} 
				dark={0}
			>Contact</ExtButton>
			
		</Animated>
	) : (
		<Animated animationIn='fadeInLeft'
			animationOut="fadeOutLeft" 
			animationInDuration={1500} 
			animationOutDuration={1000} 
			isVisible={false}
		>
			<Button to ='' href='mailto:louis.villainl@gmail.com'
				spy={true}
				exact="true"
				offset={-80}
				primary={1} 
				dark={0}
			>Contact</Button>
		</Animated>
	);

	const AnimTitle = animatedCss('Louis Villain', 1000, 'fadeInLeft', 'fadeOutLeft');
	const AnimTopLine = animatedCss('Me contacter', 1000, "bounceInDown", 'fadeOutLeft');
	const AnimDescription = animatedCss(`Une idée ? Un projet ? Une question ? N'hésitez pas à me demander un devis (gratuit) ! `, 2000, 'fadeInLeft', 'fadeOutLeft');


	useEffect(() => {
		window.addEventListener('scroll', changeDisplay);
	// eslint-disable-next-line
	}, []);
		
	return (
		
		<ContactContainer lightBg={false} id={'contactpage'}>
					<ContactWrapper>
						<ContactRow imgStart={false}>
							<Column1>
								<TextWrapper>
									<TopLine>
										{AnimTopLine}
									</TopLine>
									<Heading lightText={true}>
										{AnimTitle}
									</Heading>
									<Subtitle darkText={false}>{AnimDescription}</Subtitle>
									<BtnWrap>
										{Btn}
									</BtnWrap>
								</TextWrapper>
							</Column1>
							
							<Column2>
								<ImgWrap>
									<Img src={img} alt={'contact'}/>
								</ImgWrap>
							</Column2>
						</ContactRow>
					</ContactWrapper>

				</ContactContainer>
	);
};

export default ContactSection;
