// =====================================================================================================
// SOme sample API functions for the Flying Dutchman data base.
// =====================================================================================================
// Author: Lars Oestreicher, 2018
//
// Adapted from a mySQL data base.
//
// We use (global) variables to store the data. This is not generally advisable, but has the
// advantage that the data is easy to access through simple APIs. Also, when storing as local storage,
// all data is stored as strings, which might be adding some complexity.
//
function allUserNames() {
    var nameCollect = [];
    for (i = 0; i < DB.users.length; i++) {
        nameCollect.push(DB.users[i].username);
    }
    return nameCollect;
}

// =====================================================================================================
// This is an example of a file that will return an array with some specific details about a
// selected user name (not the first name/alst name). It will also add details from another "database"
// which contains the current account status for the person.
//
function userDetails(userName) {
    var userCollect = [];
    var userID;
    var userIndex;
    var account;

    // First we find the user ID of the selected user. We also save the index number for the record in the JSON
    // structure.
    //
    for (i = 0; i < DB.users.length; i++) {
        if (DB.users[i].username == userName) {
            userID = DB.users[i].user_id;
            userIndex = i;
        };
    };

    // We get the current account status from another table in the database, account. We store this in
    // a variable here for convenience.
    //
    for (i = 0; i < DB.account.length; i++) {
        if (DB.account[i].user_id == userID) {
            account = DB.account[i].creditSEK;
        }
    };

    // This is the way to add the details you want from the db into your own data structure.
    // If you want to change the details, then just add or remove items accordingly below.
    userCollect.push(
        DB.users[userIndex].user_id,
        DB.users[userIndex].username,
        DB.users[userIndex].first_name,
        DB.users[userIndex].last_name,
        DB.users[userIndex].email,

        account
    );

    return userCollect;
}

// =====================================================================================================
// This function will change the credit amount in the user's account. Note that the amount given as argument is the new
// balance and not the changed amount (± balance).
//
function changeBalance(userName, newAmount) {

    // We use this variable to store the userID, since that is the link between the two data bases.
    var userID;

    // First we find the userID in the user data base.
    //
    for (i = 0; i < DB.users.length; i++) {
        if (DB.users[i].username == userName) {
            userID = DB.users[i].user_id;
        };
    };

    // Then we match the userID with the account list.
    // and change the account balance.
    //
    for (i = 0; i < DB.account.length; i++) {
        if (DB.account[i].user_id == userID) {
            DB.account[i].creditSEK = newAmount;   // This changes the value in the JSON object.
        };
    };
}

// =====================================================================================================
// Returns a list of all the names of the beverages in the database. This function can be used as a
// recipe for similar functions.
//
function allBeverages() {

    // Using a local variable to collect the items.
    var collector = [];

    // The DB is stored in the variable engBev, with "spirits" as key element. If you need to select only certain
    // items, you may introduce filter functions in the loop... see the template within comments.
    //
    for (i = 0; i < engBev.length; i++) {
        collector.push([engBev[i].namn, engBev[i].varugrupp]);
    };
    return collector;
}

// =====================================================================================================
// This function returns the names of all strong beverages (i.e. all that contain a percentage of alcohol
// higher than the strength given in percent.
//
function allStrongBeverages(strength) {

    // Using a local variable to collect the items.
    //
    var collector = [];

    // The DB is stored in the variable engBev, with "spirits" as key element. If you need to select only certain
    // items, you may introduce filter functions in the loop... see the template within comments.
    //
    for (i = 0; i < engBev.length; i++) {

        // We check if the percentage alcohol strength stored in the data base is lower than the
        // given limit strength. If the limit is set to 14, also liqueuers are listed.
        //
        if (percentToNumber(engBev[i].alkoholhalt) > strength) {

            // The key for the beverage name is "namn", and beverage type is "varugrupp".
            //
            collector.push([engBev[i].namn, engBev[i].varugrupp]);
        };
    };

    // Don't forget to return the result.
    //
    return collector;
}

// =====================================================================================================
// Lists all beverage types in the database. As you will see, there are quite a few, and you might want
// select only a few of them for your data.
//
function beverageTypes() {
    var types = [];
    for (i = 0; i < engBev.length; i++) {
        addToSet(types, engBev[i].catgegory);
    };
    return types;
}

//// =====================================================================================================
//This function returns an array of elements based on the given category 
function selectedCategory(product){
    if (product == 'All'){ //base case, returns all beverages.
        return (engBev);
    }
    var types = [];
    for (i = 0; i < engBev.length; i++) { //loop through the selection 
        if (engBev[i].catgegory == product){ //if the type is the same as the desired type 
            types.push(engBev[i]); //add to the array.
        };
    };
    return types;
}

// =====================================================================================================
// Adds an item to a set, only if the item is not already there.
// The set is modelled using an array.
//
function addToSet(set, item) {
    if (!set.includes(item)) {
        set.push(item);
    }
    return set;
}

// =====================================================================================================
// Convenience function to change "xx%" into the percentage in whole numbers (non-strings).
//
function percentToNumber(percentStr) {
    return Number(percentStr.slice(0,-1));
}

// =====================================================================================================

//=============BartenderMenu PAGE START FROM HERE=========================
var localdata = localStorage.getItem('drinks');//localStored-string-version all drinks
var datalist = [];// the array to contain all drinks

//=============1.Print the page (both boxes) ==========================
if (localdata == null) {//if localStorage don't have data
    engBev.forEach((ele) => {
        datalist.push({ 
            articleid: ele.articleid,
            priceinclvat: ele.priceinclvat,
            name: ele.name,
            alcoholstrength: ele.alcoholstrength,
            'state': false 
        })//set all drinks currently in the list as false
    }) //push all drinks from beverages_eng.js to datalist Array
    printBottomList(datalist);
    printMenu(datalist);
} else {
    datalist = JSON.parse(localdata);// translate localStored all drinks to json array
    printBottomList(datalist);
    printMenu(datalist);
   
}

//=============print all the drinks at the bottom list box  ==========================
function printBottomList(engBev) {
    var html = '';
    engBev.forEach((ele, i) => {
        if (ele.state == false) {// if nothing have been stored in localStorage
            html += `
            <div class="list_item" uid='${ele.articleid}' >
                <!----articleid--->
                <p class='drinkID'>${ele.articleid}</p>
                <!----articleid--->
                <p class='drinkName'>${ele.name}-${ele.alcoholstrength}</p>
                <!----name+(alcoholstrength)--->
                <p class="drinkPrice">${ele.priceinclvat}</p>
                <!----priceinclvat--->
                <a href='javascript:;' class="nav_btn" class="addToMenu" onClick='addlist(${ele.articleid})'>Add to Menu</a>
            </div>
            `
        }

    });
    document.querySelector('.listBoxBartender').innerHTML = html;
}

//=============print all the drinks at the top menu box ==========================
function printMenu(engBev) {
    var html = '';
    engBev.forEach((ele, i) => {

        if (ele.state == true) {//drinks currently at the menu box
            html += `
                <div class="list_item" uid='${ele.articleid}'>
                    <!----articleid--->
                    <p class='drinkID'>${ele.articleid}</p>
                    <!----articleid--->
                    <p class='drinkName'>${ele.name}-${ele.alcoholstrength}</p>
                    <!----name+(alcoholstrength)--->
                    <p class="drinkPrice">${ele.priceinclvat}</p>
                    <!---priceinclvat--->
                    <a onClick="deleted(${ele.articleid})" class="deleteFromMenu"><img class="delete" src="resources/Images/delete.png"></a>
                    <form class='changePriceBox'>
                        <label>SEK</label>
                        <input type="text" value='${ele.priceinclvat}'>
                        <a href='javascript:;' class="nav_btn" class="changePrice" onClick="changeprice(${ele.articleid},this)">Change price</a>
                    </form>
                </div>
            `;
        }

    });
    document.querySelector('.menuBoxBartender').innerHTML = html;
}

//============ update=re-write localStorage+ re-print two boxes
function updateData(data) {//data =whole list
    localStorage.setItem('drinks', JSON.stringify(data));//data=datalist, change json code to string + store all drinks in Local (update)
    printBottomList(datalist);//update available list
    printMenu(datalist);// update menu list
}

//============2.click 'add to menu', the drink will be add to the menu，and it will be removed from available options==========================

function addlist(uid) {//uid=${ele.articleid}
    datalist.map((ele) => {
        if (ele.articleid == uid) {// loop all drinks until uid match
            ele.state = true; //in the menu
        }
    })
    updateData(datalist);//re-print page
}



//============3.click"x",the drink will be removed from Menu，and show in available options==========================

function deleted(uid) {//uid=${ele.articleid}
    datalist.map((ele) => {
        console.log(ele.articleid == uid)
        if (ele.articleid == uid) {
            ele.state = false;// in the available list
        }
    })
    updateData(datalist);
}


//============4.In the Menu,write price+click "change price",the price will be changed.==========================


function changeprice(uid, e) {

    var price = e.parentNode.childNodes[3].value;//get form <input> value-new price
    

    datalist.map((ele) => {               
        console.log(ele.articleid == uid)
        if (ele.articleid == uid) { 
            ele.priceinclvat = price;
        }
    })
    printMenu(datalist); //update menu list
    localStorage.setItem('drinks', JSON.stringify(datalist));//update local storage
}

//=============BartenderMenu PAGE END HERE==========================
