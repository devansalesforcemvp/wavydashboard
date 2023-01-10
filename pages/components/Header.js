import React from "react";
import styles from "../../styles/Home.module.css";

function Header() {
	return (
	<	div className="everything"><div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2 className="title">
						Hello,  <span>Michael Powers</span>
					</h2>
					<p>Welcome Fullstackdesk CRM!</p>
				</div>
				<div className={styles.profile}>
			
				</div>
			</div>
		</div></div>
	);
}

export default Header;
