import React, { useState, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const listItems = store.demo.map((item, i) => (
		<div
			key={i}
			className={item.color + " light " + item.isActive}
			onClick={() => actions.changeLight(i, "active")}
		/>
	));
	return (
		<div className="text-center mt-5">
			<div id="t-light">{listItems}</div>
		</div>
	);
};
