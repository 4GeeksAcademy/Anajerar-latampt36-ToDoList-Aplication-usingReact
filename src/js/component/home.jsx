import React, { useState } from "react";
//create your first component

const Home = () => {

	const [toDo,setToDo] = useState([]);
	const [inputValue, setInputValue] = useState('');

	function keyHandler(e) {
		if (e.key==='Enter') {
			if (e.target.value != ""){
				setToDo(toDo.concat(inputValue));
				e.target.value=""
				setInputValue("")}
							}
					}

	return (
		<>
			<h1 className="text-center">ToDos</h1>
			<div className="m-auto tabs-borders">
				<input className="m-4 ps-2" placeholder="What needs to be done?"
				name="taskInput"
				onChange={e => setInputValue(e.target.value)}
				onKeyDown={ keyHandler }/>
			</div>
				
				<ul className="list-group list-group-flush tabs-borders">
					{toDo.map((task,indx)=>{
						return (
								
								<li className="list-item d-flex justify-content-between mt-2 pb-2" hidden={true} key={indx}
								onMouseOver={(e) => {if (e.target.lastChild) e.target.lastChild.hidden=false}} 
								onMouseOut={(e) => {if (e.target.lastChild) e.target.lastChild.hidden=true }}>
									<span className="ps-4">{task}</span>
									<button type="button" className="btn-close pe-5" aria-label="Close"
										onClick={() => setToDo(toDo.filter((t,thisIndex) => indx != thisIndex)) } hidden={true}
										onMouseOver={(e) => {e.target.hidden=false}} 
										onMouseOut={(e) => {e.target.hidden=true}}></button>
								</li>								
								
								)
						                     })
					}
											
				</ul>
			
				{toDo.length == 0 ? <p className="tabs-borders">No hay tareas, agrega una </p> : <p className="tabs-boders">{toDo.length} items left</p>}
			
			<div className="small-div" style={{width:"49%"}}></div>
			<div className="small-div" style={{width:"48%"}}></div>
		
		</>
	);
};

export default Home;
