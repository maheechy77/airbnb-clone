import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import FieldTrips from "../FieldTrips/FieldTrips";
import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<Banner />
			<div className="home_section">
				<Card
					src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
					title="Unique stays"
					description="Spaces that are more than just a place to sleep."
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/8e3d5167-55ca-4fbd-832d-e3b66dad54ec.jpg?im_w=720"
					title="Online Experiences"
					description="Spaces that are more than just a place to sleep."
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
					title="Entire homes"
					description="Spaces that are more than just a place to sleep."
				/>
			</div>
			<div className="home_section">
				<Card
					src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
					title="Bedroom Flat in Bournemouth"
					description="SuperHost with a stunning view of the bechside in Sunny Bournemouth."
					price="£ 130/night"
				/>
				<Card
					src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
					title="Pethouse in London"
					description="Enjoy the Amazing sights of London with this stunning penthouse."
					price="£ 350/night"
				/>
				<Card
					src="https://media.nomadicmatt.com/2018/apartment.jpg"
					title="1 Bedroom Apartment"
					description="SuperHost with great amenities and a fabulous shopping comlex nearby."
					price="£ 70/night"
				/>
			</div>

			<FieldTrips />
		</div>
	);
};

export default Home;
