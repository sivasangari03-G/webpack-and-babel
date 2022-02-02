import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <div className="main">
        <div>
            <img src="img/logo.jpg" id="logoImg">
            </img>
            <h1 id="takeNotes">Take Notes ✔</h1>
        </div>
        <div id="clear"></div>
		<fieldset class="grayBackground">
			<legend id="forLegend">Notes:</legend>
			<textarea class="TextArea" id="textAreaId"></textarea>
			<button id="btn">ADD</button>
		</fieldset>

		<div id="toAppend"></div>
	</div>,
	document.getElementById("root")
);

document.getElementById("btn").addEventListener("click", addFun);
var textAreaID = document.getElementById("textAreaId");
var toAppend = document.getElementById("toAppend");

function addFun() {
	if (textAreaID.value != "") {
		let ul = document.createElement("ul");
		let li = document.createElement("li");
		li.className = "forLi";
		li.innerHTML = textAreaID.value;
		ul.append(li);
		toAppend.appendChild(ul);
	}
}
