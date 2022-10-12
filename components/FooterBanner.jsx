import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const FooterBanner = ({
	footerBanner: {
		discount,
		largeText1,
		largeText2,
		smallText,
		midText,
		desc,
		saleTime,
		product,
		buttonText,
		image,
	},
}) => {
	return (
		<div className="footer-banner-container">
			<div className="banner-desc">
				<div className="left">
					{/* <p>{discount}</p> */}
					<h3>{largeText1} &</h3>
					<h3>{largeText2}</h3>
					{/* <p>{saleTime}</p> */}
					<Link href={`/product/${product}`}>
						<button type="button">{buttonText}</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FooterBanner;
