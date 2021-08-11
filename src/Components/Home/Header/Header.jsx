import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import HeaderImg from "../../../Main_images/Image.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Header.scss";

const Header = () => {
	return (
		<div className="header">
			<Container>
				<Row className="header-row">
					<Col md="6" className="headings">
						<p className="headings__p1">Welcome to Dental Clinic</p>
						<h2 className="headings__text">Professional,Warm and friendly Dental care for you</h2>
						<p className="headings__p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>			
						<Link className="headings__btn" to="/">Make Appointment</Link>
					</Col>
					<Col md="6" className="header-row__img">
						<LazyLoadImage 
						alt="header-row_image"
						src={HeaderImg}
						effect="blur"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default Header;