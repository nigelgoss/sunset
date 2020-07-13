$.pages["Patient List"] = (() => {

const load = ($d, $cb) => {
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");

	let table = document.createElement("table"); main.appendChild(table);
	table.style.width = "100%";
	table.style.borderCollapse = "collapse";
	
		let thead = document.createElement("thead"); table.appendChild(thead);
		thead.style.fontWeight = "bold";
		thead.style.backgroundColor = "lightgrey";
		thead.style.border = "0 solid white";
		thead.style.borderWidth = "2px 0 2px 0";
		
			let tr = document.createElement("tr"); thead.appendChild(tr);
				
				let td = document.createElement("td"); tr.appendChild(td); td.textContent = "Location";
				td = document.createElement("td"); tr.appendChild(td); td.textContent = "Name";
				td = document.createElement("td"); tr.appendChild(td); td.textContent = "NHS No.";
				td = document.createElement("td"); tr.appendChild(td); td.textContent = "Hospital No.";
				td = document.createElement("td"); tr.appendChild(td); td.textContent = "Birth";
				td = document.createElement("td"); tr.appendChild(td); td.textContent = "Death";
				
				td = document.createElement("td"); tr.appendChild(td);
				tr.style.width = "1px";
				tr.style.textAlign = "right";
				
					let button = document.createElement("button"); td.appendChild(button);
					button.style.backgroundColor = "#007f3b";
					button.style.color = "#ffffff";
					button.style.borderRadius = "999px";
					button.onpointerdown = function () {};;
					
						let span = document.createElement("span"); button.appendChild(span);
						span.className = "faS";
						span.textContent = ""
		
		
		
button = document.createElement("button"); main.appendChild(button);
button.textContent = "Episode";
button.onpointerdown = function () {
	$.nav.goTo("Episode Update", {"EPN":1, "Episode":1});
};

return {
	"forwards": load,
	"backwards": back,
};

}());


/*
let button = document.createElement("button"); main.appendChild(button);
button.textContent = "Episode";
button.onpointerdown = function () {
	$.nav.goTo("Episode Update", {"EPN":1, "Episode":1});
};

	<tbody style="border:0 solid white; border-width:2px 0 2px 0;">
		<tr>
			<td rowspan="3">THH-1</td>
			<td>SMITH, John (Mr)</td>
			<td>000-000-0000</td>
			<td>00000000</td>
			<td>01 Jan 1900</td>
			<td>01 Jan 2020</td>
			<td rowspan="2" style="text-align:right;"><button style="background-color:#007f3b; color:#ffffff; border-radius:999px;" onclick="swap();"><span class="faS"></span></button></td>
		</tr>
	</tbody>
	
	<tbody style="border:0 solid white; border-width:2px 0 2px 0;">
		<tr>
			<td rowspan="2">THH-2</td>
			<td>SMITH, John (Mr)</td>
			<td>000-000-0000</td>
			<td>00000000</td>
			<td>01 Jan 1900</td>
			<td>01 Jan 2020</td>
			<td rowspan="2" style="text-align:right;"><button style="background-color:#007f3b; color:#ffffff; border-radius:999px;" onclick="swap();"><span class="faS"></span></button></td>
		</tr><tr>
			<td colspan="5"><em>Notes: </em>Something...</td>
		</tr>
	</tbody>
	
	<tbody style="border:0 solid white; border-width:2px 0 2px 0;">
		<tr>
			<td rowspan="2">THH-3</td>
			<td>SMITH, John (Mr)</td>
			<td>000-000-0000</td>
			<td>00000000</td>
			<td>01 Jan 1900</td>
			<td>01 Jan 2020</td>
			<td rowspan="2" style="text-align:right;"><button style="background-color:#007f3b; color:#ffffff; border-radius:999px;" onclick="swap();"><span class="faS"></span></button></td>
		</tr><tr>
			<td colspan="5"><em>Notes: </em>Something...</td>
		</tr>
	</tbody>
	
	<tbody style="border:0 solid white; border-width:2px 0 2px 0;">
		<tr>
			<td rowspan="2">THH-4</td>
			<td>&nbsp;</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td rowspan="2" style="text-align:right;"></td>
		</tr>
	</tbody>
	
	<tbody style="border:0 solid white; border-width:2px 0 2px 0;">
		<tr>
			<td rowspan="2">THH-5</td>
			<td>SMITH, John (Mr)</td>
			<td>000-000-0000</td>
			<td>00000000</td>
			<td>01 Jan 1900</td>
			<td>01 Jan 2020</td>
			<td rowspan="2" style="text-align:right;"><button style="background-color:#007f3b; color:#ffffff; border-radius:999px;" onclick="swap();"><span class="faS"></span></button></td>
		</tr><tr>
			<td colspan="5"><em>Notes: </em>Something...</td>
		</tr>
	</tbody>
	
	<tbody style="border:0 solid white; border-width:2px 0 2px 0;">
		<tr>
			<td rowspan="2">THH-6-BAR</td>
			<td>&nbsp;</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td rowspan="2" style="text-align:right;"></td>
		</tr>
	</tbody>
	
	<tbody style="border:0 solid white; border-width:2px 0 2px 0;">
		<tr>
			<td rowspan="2">THH-7</td>
			<td>&nbsp;</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td rowspan="2" style="text-align:right;"></td>
		</tr>
	</tbody>
	
	<tbody style="border:0 solid white; border-width:2px 0 2px 0;">
		<tr>
			<td rowspan="2">THH-8</td>
			<td>&nbsp;</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td rowspan="2" style="text-align:right;"></td>
		</tr>
	</tbody>
	
*/
