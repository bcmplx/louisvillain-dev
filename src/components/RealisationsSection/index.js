import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components/macro';
// import eiffelImg from '../../images/eiffel.svg';
import travelImg from '../../images/travel.png';
import dipImg from '../../images/dip.png';
import vImg from '../../images/veronikawebsite.png';

import {Button} from '../Services/ButtonElement';
// import carouselimg1 from '../../images/carousel/carousel1.svg';
// import carouselimg2 from '../../images/carousel/carousel5.svg';
// import carouselimg3 from '../../images/carousel/carousel6.svg';


const Index = () => {

	const [hover, setHover] = useState(false);

	let test = (event) => {
		// event.target.style.background = "black"
		event.target.classList.add("onHover")
		// event.target.style.opacity = "0.7"
		document.getElementById("imgContainer").classList.add('grey')
		// console.log("ici : ", event.target)
	}
	
	const onHover = () => {
		setHover(!hover);
	};

	let leave = (event) => {

		setTimeout(() => {
			event.target.classList.remove("onHover")
			// event.target.style.opacity = "0"
			event.target.parentNode.classList.remove("onHover")
		}, 300)
		// event.target.classList.remove("onHover")
		// event.target.parentNode.classList.remove("onHover")
		document.getElementById("imgContainer").classList.remove('grey')
	}


	return (
		<Container id="realisations" >
			<H1>MES RÉALISATIONS</H1>
			<Wrapper className='wrapper'>

				<Card >
					<ImgContainer id="imgContainer" >
						<ImgCard src={travelImg} alt="Travel Website" className='bright'/>
					</ImgContainer> 
					
					<InfoContainer onMouseOver={test} onMouseLeave={leave}>
						<TopBox className='info' >
							<div>TRAVEL</div>
							<div>React JS</div>
							
						</TopBox > 

						<BottomBox className='info' >
							<ButtonContainer>
								<Button to="profil" 
									onMouseEnter={onHover} 
									onMouseLeave={onHover}
									smooth={true}
									duration={800}
									offset={-80}
								>
									See More 
								</Button>
							</ButtonContainer>
						</BottomBox>
						
					</InfoContainer>
					
				</Card>

				<Card >
					<ImgContainer id="imgContainer">
						<ImgCard src={dipImg} alt="Travel Website"/>
					</ImgContainer>
					
					<InfoContainer onMouseOver={test} onMouseLeave={leave}>
						<TopBox className='info' >
							<div>Days in Paris</div>
							<div>React JS / PostgresQL</div>
							
						</TopBox > 

						<BottomBox className='info' >
							<ButtonContainer>
								<Button to="profil" 
									onMouseEnter={onHover} 
									onMouseLeave={onHover}
									smooth={true}
									duration={800}
									offset={-80}
								>
									See More 
								</Button>
							</ButtonContainer>
						</BottomBox>
						
					</InfoContainer>
					
				</Card>

				<Card >
					<ImgContainer id="imgContainer">
						<ImgCard src={vImg} alt="Travel Website"/>
					</ImgContainer>
					
					<InfoContainer onMouseOver={test} onMouseLeave={leave}>
						<TopBox className='info' >
							<div>Portfolio</div>
							<div>React JS</div>
							
						</TopBox > 

						<BottomBox className='info' >
							<ButtonContainer>
								<Button to="profil" 
									onMouseEnter={onHover} 
									onMouseLeave={onHover}
									smooth={true}
									duration={800}
									offset={-80}
								>
									See More 
								</Button>
							</ButtonContainer>
						</BottomBox>
						
					</InfoContainer>
					
				</Card>

				<Card >
					<ImgContainer id="imgContainer">
						<ImgCard src={travelImg} alt="Travel Website"/>
					</ImgContainer>
					
					<InfoContainer onMouseOver={test} onMouseLeave={leave}>
						<TopBox className='info' >
							<div>Travel</div>
							<div>React JS</div>
							
						</TopBox > 

						<BottomBox className='info' >
							<ButtonContainer>
								<Button to="profil" 
									onMouseEnter={onHover} 
									onMouseLeave={onHover}
									smooth={true}
									duration={800}
									offset={-80}
								>
									See More 
								</Button>
							</ButtonContainer>
						</BottomBox>
						
					</InfoContainer>
					
				</Card>	
					

				
			</Wrapper>

		</Container>
	);
};

export default Index;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	z-index: 1;
	height: auto;
	width: 85%;
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
	padding: 1rem 5rem;
	justify-content: center;

	@media screen and (min-width: 769px) {
		min-width: 730px;
	}

	@media screen and (max-width: 768px){
		width: 90%;
		grid-template-columns: 1fr;
		padding: 0.5rem 0;
		margin: auto;
	}

	.slider-wrapper {
		border: 1px solid white;
		padding: 0.5rem;
		border-radius: 10px;
		/* grid-template-columns: 1fr; */
	}
`;

const Container = styled.div`
	color: #fefefe;
	background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#152436')};
	height: auto;
	overflow: hidden;
	padding: 2rem;

	@media screen and (max-width: 768px) {
		padding: 100px 0;
		/* height: 1000px; */
	}
	
	@media screen and (max-width: 468px) {
		padding: 70px 0;
		/* height: 950px; */
	}
`;

const H1 = styled.h1`
	font-size: 2.5rem;
	color: #fefefe;
	margin-bottom: 100px;
	font-weight: 600;
	text-align: center;


	@media screen and (max-width: 780px) {
		font-size: 2rem;
		margin: 60px 0 64px 0;
	}
	@media screen and (max-width: 480px) {
		font-size: 2rem;
		margin: 60px 0 64px 0;
	}
`;

const Card = styled.div`
	width: 95%;
	margin: 1rem;
	border: 5px solid white;
	border-radius: 10px;
	position: relative;
	height: 300px;

	@media screen and (max-width: 768px) {
		margin: 1rem auto;
	}
`

const ImgCard = styled.img`
	width: 100%;
	border-radius: 5px;
	height: 100%;
	object-fit: cover;	
`

const InfoContainer = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: 2;
	overflow: hidden;
	opacity: 0;
	transition: all 0.5s ease-in-out;

	&:hover {
		opacity: 1;
		transition: all 0.5s ease-in-out;
	}

`
const ImgContainer = styled.div`
	position: absolute;
	height: 100%;
	/* filter: brightness(1.75); */
	z-index: 1;
	transition: all 0.4s ease-in-out;
	width: 100%;


	&:hover {
		opacity: 0.2;
		transition: all 0.4s ease-in-out;
	}

	&.bright {
		filter: brightness(1.75);
	}

`

const TopBox = styled.div`
	width: 100%;
	height: 0%;
	opacity: 1;
	transition: all 0.4s ease-in-out;
	background-color: white;
	color: black;
	z-index: 12;
	position: absolute;
	top: 0; 

	div {
		height: inherit;
		display: flex;
		align-items: flex-end;
		justify-content: center;

	}

	div:nth-child(2n) {
		align-items: baseline;
		font-size: 0.8rem;
		color: aqua
	}

	a {
		position: relative;
		height: inherit;
	}

	&:hover {
		/* transition: all 0.4s ease-in-out;
		opacity: 0.9; */
		/* height: 30%; */
	}
`

const BottomBox = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	background: white;
	color: black;
	transition: all 0.4s ease-in-out;
	height: 0%;
	opacity: 1;
	text-align: center;
`

const ButtonContainer = styled.div`
	display: flex;
	height: 60%;
	margin: auto;
	justify-content: center;
	padding: 0.8rem;

	a {
		border-radius: 15px !important;
		opacity: 1;
	}
`