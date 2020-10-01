import React from "react";
import "./FieldTrips.css";

const FieldTrips = () => {
	return (
		<div className="fieldtrips">
			<div className="fieldtrips_headingSection">
				<div className="fieldtrips_heading">
					<h2>Online Experiences: Field Trips</h2>
					<p>
						Join interactive, global adventures with inspiring, kid-friendly
						hosts.
					</p>
				</div>
				<div className="fieldtrips_headingAnchor">
					<a href="#">Explore all</a>
				</div>
			</div>
			<div className="fieldtrips_infoSection">
				<div className="fieldtrips_cards">
					<div className="big_sections">
						<div className="card_one">
							<div className="image">
								<img
									src="https://a0.muscache.com/im/pictures/4e1d29d2-5148-444d-945d-c278121675a3.jpg?im_w=720"
									alt=""
								/>
							</div>

							<div className="card_text">
								<p>Decode the science of 2020 with Bill Nye</p>
							</div>
						</div>
						<div className="big_sectionsCards">
							<div className="small_sectionCards">
								<div className="card_two">
									<div className="image">
										<img
											src="https://a0.muscache.com/im/pictures/c4975e3c-32c2-4bca-9bc7-25a3e69ea341.jpg?im_w=720"
											alt=""
										/>
									</div>

									<div className="card_text">
										<p>Go on a leopard safari in Sri Lanka</p>
									</div>
								</div>
								<div className="card_three">
									<div className="image">
										<img
											src="https://a0.muscache.com/im/pictures/5d6ee25d-0d8e-472a-b8e7-56bb498b1403.jpg?im_w=720"
											alt=""
										/>
									</div>

									<div className="card_text">
										<p>Discover Buenos Aires street art and sketch</p>
									</div>
								</div>
							</div>

							<div className="card_four">
								<div className="image">
									<img
										src="https://a0.muscache.com/im/pictures/99897df7-97c9-4a14-aa4e-baa5324db825.jpg?im_w=720"
										alt=""
									/>
								</div>

								<div className="card_text">
									<p>Dive under the sea with a shark scientist</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FieldTrips;
