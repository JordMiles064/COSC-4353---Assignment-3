var data = [
	{GallonsRequested: "John", DeliveryAddress: "Smith", DevlieveryDate: "New York", SuggestedPrice: "12", TotalAmountDue:"12"}
];


function buildTable(data) {
    let body = document.querySelector("#formHeader > tbody");
 
    for (var rowInfo of data.doc){
        buildRow(rowInfo,data.state,body);
    }
 }
 
 function buildRow(rowInfo,state,body){
    let row = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = rowInfo["_id"]
    row.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = rowInfo["Day"]
    row.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = rowInfo["SuggestedPrice"] 
    row.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = rowInfo["date" ] //Delivery Date
    row.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = rowInfo["gallonsrequested"]
    row.appendChild(td);

    var x = verify(state)
    var y = rowInfo["firstentry"] ? 0 : .01 // Previous History
    var z = rowInfo["gallonsRequested"] > 1000 ? .02 : .03 ;
    td = document.createElement("td");
    td.innerHTML =  (((x - y + z + .1) * 1.5) + 1.5) * rowInfo.gallonsrequested
    row.appendChild(td);


    body.appendChild(row);
}