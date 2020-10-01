import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<img
					src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
					alt="logo"
					className="header_icon"
				/>
			</Link>
			<div className="header_center">
				<input type="text" />
				<SearchIcon />
			</div>
			<div className="header_right">
				<p>Become a Host</p>
				<LanguageIcon />
				<ExpandMoreIcon />
				<AccountCircleIcon />
			</div>
		</div>
	);
};

export default Header;