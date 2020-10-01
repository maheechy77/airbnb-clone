import { Button } from "@material-ui/core";
import React from "react";
import SearchResult from "../SearchResult/SearchResult";
import "./SearchPage.css";

const SearchPage = () => {
	return (
		<div className="searchPage">
			<div className="searchPage_info">
				<p>62 stays . 26 June to 30 June . 2 Guests</p>
				<h1>Stays Nearby</h1>
				<Button variant="outlined">Cancellation Flexibility</Button>
				<Button variant="outlined">Type of place </Button>
				<Button variant="outlined">Price</Button>
				<Button variant="outlined">Rooms and beds </Button>
				<Button variant="outlined"> More filters</Button>
			</div>
			<SearchResult
				title="High Quality Double Room - Next to Oxford Circus!"
				img="https://a0.muscache.com/im/pictures/23d56af1-723b-4572-94c2-8e8c5c9dc16b.jpg?im_w=480"
				location="Greater London, England, United Kingdom"
				description="2 guests · 1 bedroom · 1 bed · 2 baths"
				star={4.73}
				price="$44/ night"
				total="$121 total"
			/>
			<SearchResult
				title="Pretty Bedroom in Central Covent Garden Apartment"
				img="https://a0.muscache.com/im/pictures/8f7ce067-b2bb-49cf-a527-b836c1320d14.jpg?im_w=480"
				location="Greater London, England, United Kingdom"
				description="2 guests · 1 bedroom · 1 bed · 1.5 shared baths"
				star={4.91}
				price="$50/ night"
				total="$136 total"
			/>

			<SearchResult
				title="WDR-5 - NEW Soho Studio Apartment"
				img="https://a0.muscache.com/im/pictures/miso/Hosting-31730029/original/86c25ca6-3616-45d9-9d53-9c0ef37c7233.jpeg?im_w=480"
				location="Greater London, England, United Kingdom"
				description="4 guests · Studio · 2 beds · 1 bath"
				star={4.87}
				price="$63/ night"
				total="$217 total"
			/>
			<SearchResult
				title="One-Bedroom,Farringdon,Clerkenwell,London EC1"
				img="https://a0.muscache.com/im/pictures/8196591/e59272f6_original.jpg?im_w=480"
				location="Greater London, England, United Kingdom"
				description="2 guests · 1 bedroom · 0 beds · 1 bath"
				star={4.78}
				price="$102/ night"
				total="$306 total"
			/>
			<SearchResult
				title="Central Modern Westminster Apartment ★★★★★ R1"
				img="https://a0.muscache.com/im/pictures/6288cc1b-b55c-4937-9bc2-aec12349c26e.jpg?im_w=480"
				location="Greater London, England, United Kingdom"
				description="3 guests · 1 bedroom · 2 beds · 1 bath"
				star={4.5}
				price="$38/ night"
				total="$106 total"
			/>

			<SearchResult
				title="Designer Studio Apartment in Central London"
				img="https://a0.muscache.com/im/pictures/2c34782d-bd8e-48c3-bdf1-335eb9118b22.jpg?aki_policy=xx_large"
				location="Greater London, England, United Kingdom"
				description="2 guests · Studio · 1 bed · 1 bath"
				star={4.89}
				price="$129/ night"
				total="$387 total"
			/>
		</div>
	);
};

export default SearchPage;
