//$('#test').css('background-color', 'white').css('font-size', '18px').css('height', '18px').css('width', '80%').attr('rows', 10);

$('#product-property-page').live('pagebeforeshow', function(event, ui) {
console.debug("Sie haben Zutritt1");
	//getAllContacts();
	//getProductproperties();
});



function getAllContacts() {
	var fields = [ "displayName", "phoneNumbers" ];
	//Phonegap function
	navigator.contacts.find(fields, onContactsSuccess, onContactsError);
}

function onContactsSuccess(contacts) {
alert("Sie haben Zutritt3");
	$('#contacts-list').html('');
	for ( var i = 0; i < contacts.length; i++) {
		if (contacts[i].phoneNumbers != null) {
			$('#contacts-list').append(
					'<li><a href=\"tel:'
							+ contacts[i].displayName  + '\">'
							+ contacts[i].phoneNumbers[0].value+ '</a></li>');
		};
	};
	$('#contacts-list').listview('refresh');
}




function onContactsError(contactError) {
	alert('Error while retrieving contacts!');
}



  // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 2000000);
        db.transaction(populateDB, errorCB, successCB);
        console.debug("debug ausgabe %o", db);
    }

    // Populate the database 
    //
    function populateDB(tx) {
         tx.executeSql('DROP TABLE IF EXISTS DEMO');
         tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (product_id, product_name, GTIN)');
         tx.executeSql('INSERT INTO DEMO (product_id, product_name, GTIN) VALUES (1, "Jacke", 123)');
         tx.executeSql('INSERT INTO DEMO (product_id, product_name, GTIN) VALUES (2, "Hose", 456)');
         tx.executeSql('INSERT INTO DEMO (product_id, product_name, GTIN) VALUES (2, "Schuhe", 789)');
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
        alert("success!");
    }

