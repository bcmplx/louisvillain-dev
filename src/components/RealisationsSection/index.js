import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components/macro';
// import eiffelImg from '../../images/eiffel.svg';
import travelImg from '../../images/travel2.png';
// import carouselimg1 from '../../images/carousel/carousel1.svg';
// import carouselimg2 from '../../images/carousel/carousel5.svg';
// import carouselimg3 from '../../images/carousel/carousel6.svg';


const index = () => {

	let test = (event) => {
		// event.target.style.background = "black"
		event.target.classList.add("onHover")
		document.getElementById("imgContainer").classList.add('grey')
		// console.log("ici : ", event.target)
	}

	let leave = (event) => {

		setTimeout(() => {
			event.target.classList.remove("onHover")
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
					<ImgContainer id="imgContainer">
						<ImgCard src={travelImg} alt="Travel Website"/>
					</ImgContainer>
					
					<InfoContainer onMouseOver={test} onMouseLeave={leave}>
						<TopBox className='info' >
							<div>
							Travel
								{/* <a href="https://travel-louisvillain.netlify.app/">	</a> */}
							</div>
							
						</TopBox > 

						<BottomBox className='info' >
							<div>
								CSS HTML
							</div>
						</BottomBox>
						
					</InfoContainer>
					
				</Card>

				<Card>
					<ImgCard src={travelImg} alt="Travel Website"/>
					<a href="https://travel-louisvillain.netlify.app/">						
						<p className="legend">Travel</p>
					</a>
				</Card>

				<Card>
					<ImgCard src={travelImg} alt="Travel Website"/>
					<a href="https://travel-louisvillain.netlify.app/">						
						<p className="legend">Travel</p>
					</a>
				</Card>

				<Card>
					<ImgCard src={travelImg} alt="Travel Website"/>
					<a href="https://travel-louisvillain.netlify.app/">						
						<p className="legend">Travel</p>
					</a>
				</Card>
					

				
			</Wrapper>

		</Container>
	);
};

export default index;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	z-index: 1;
	height: auto;
	width: 80%;
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

`
const ImgContainer = styled.div`
	position: absolute;
	height: 100%;
	filter: brightness(1.75);
	z-index: 1;
	transition: all 0.4s ease-in-out;

	&:hover {
		opacity: 0.2;
		transition: all 0.4s ease-in-out;
	}


`

const TopBox = styled.div`
	width: 100%;
	height: 0%;
	/* opacity: 0; */
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
`