import { FavoriteBorderOutlined, StarBorderRounded } from "@material-ui/icons";
import React from "react";
import "./SearchResult.css";

const SearchResult = ({
	img,
	location,
	title,
	description,
	star,
	price,
	total,
}) => {
	return (
		<div className="search_result">
			<img src={img} alt="" />
			<FavoriteBorderOutlined className="searchResult_heart" />
			<div className="searchResult_info">
				<div className="searchResult_infoTop">
					<p>{location}</p>
					<h3>{title}</h3>
					<p>___</p>
					<p>{description}</p>
				</div>
				<div className="searchResult_infoBottom">
					<div className="searchResult_stars">
						<StarBorderRounded className="searchResult_star" />
						<p>
							<strong>{star}</strong>
						</p>
					</div>
					<div className="searchresult_price">
						<h2>{price}</h2>
						<p>{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchResult;
