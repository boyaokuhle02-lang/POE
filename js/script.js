// Coastal Cut Barbershop East London 

// 1. MAP - East London - 45 Beachfront
document.addEventListener("DOMContentLoaded", function() {
	if(document.getElementById("map")) {
		var map = L.map('map').setView([-33.0155, 27.9116], 15); //East London Beachfront coords
		L.titleLayer('https;//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '(C) OpenStreetMap'
		}).addTo(map);
		L.marker([-33.0153, 27.9116]).addTo(map)
		 .bindPopup("<b>Coastal Cut Barbershop</b><br>45 Beachfront, East London, 5201<br>Mon-Sat 09:00-19:00")
		 .openPopup();
	}
	loadServicesJSON();
	calculateCost();
});

// 2. COST CALCULATOR - Enquiry page
fuction calculateCost() {
	var service = document.getElementById("serviceSelect");
	var qty = document.getElementById("quantity");
	var extra = document.getElementById("extraBeard");
	var totalEl = document.getElementById("totalCost");
	var breakEl = document.getElementById("costBreakdown");
	if(!service || !totalEl) return;
	
	var base = parseInt(service.value) || 0;
	var q = parseInt(qty ? qty.value : 1) || 1;
	var extraCost = (extra && extra.checked) ? 50 : 0;
	var total = (base + extraCost) *q;
	
	totalEl.textContent = total;
	if(breakEl) {
		var name = service.options[service.selectedIndex].text;
		breakEl.textContent = name + " x " + q + (extraCost ? " + Beard Trim" : "") + " = R" + total;
		
	}
	
}

// 3. VALIDATION - Enquiry
function validateEnquiry() {
	var n = document.getElementById("name").value.trim();
	var e = document.getElementById("email").value.trim();
	var s = document.getElementById("servicesSelect").value;
	var d = document.getElementById("date").value;
	var err = document.getElementById("formError");
	err.textContent = "";
	
	if(n.length < 2){err.texContent="Enter full name"; return false;}
	if(!e.includes("@")){err.textContent="Enter valid email"; return false;}
	if(!s){err.textContent="Choose a service"; return false;}
	if(!d){err.textContent}
}