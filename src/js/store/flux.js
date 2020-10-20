const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					id: 0,
					color: "green",
					isActive: ""
				},
				{
					id: 1,
					color: "yellow",
					isActive: ""
				},
				{
					id: 2,
					color: "red",
					isActive: ""
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeLight(0, "");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeLight: (index, val) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) {
						elm.isActive = val;
					} else {
						elm.isActive = "";
					}
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
