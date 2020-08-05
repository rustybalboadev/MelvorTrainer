//Add custom amount SC
function addSC(amount){
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"updateSlayerCoins(0+"+amount+");\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}
//Add custom amount GP
function addGP(amount){
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"gp += 0+"+amount+"; updateGP();\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Add custom amount Bank Slots
function bankSlots(amount) {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"bankMax+=0+"+amount+"; updateBank();\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Add XP to selected Skill
function addEXP(skill){
	chrome.tabs.getSelected(null, function(tab){
		var c = "var s = document.createElement('script');\
		s.textContent = \"addXP(CONSTANTS.skill."+skill+", 999999999);\";\
		document.head.appendChild(s);"
		chrome.tabs.executeScript(tab.id, {code: c});
	});
}

//Unlock selected Mastery skill
function unlockMastery(skill) {
    chrome.tabs.getSelected(null, function(tab){
		var c = "var s = document.createElement('script');\
		s.textContent = \"SMastery="+skill+"; function myfunction(item){ item.mastery=99; item.masteryXP+=99999;} var res = SMastery.forEach(myfunction);\";\
		document.head.appendChild(s);"
		chrome.tabs.executeScript(tab.id, {code: c});
	});
}

//add To Bank
function addToBank(ItemID, Quantity) {
    chrome.tabs.getSelected(null, function(tab){
        var command = "addItemToBank(" + ItemID + ", " + Quantity + ");";
        var c = "var s = document.createElement('script');\
        s.textContent = \"" + command + "\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//instakill
function instaKill() {
	chrome.tabs.getSelected(null, function(tab){
		var command = "if (enemyInCombat && combatData.enemy.hitpoints>0){damageEnemy(combatData.enemy.hitpoints); clearInterval(attackTimer);updateCombat(); stopCombat(); lootAll(); loadNewEnemy();}";
		var c = "var s = document.createElement('script');\
        s.textContent = \"" + command + "\";\
        document.head.appendChild(s);"
		chrome.tabs.executeScript(tab.id, {code: c});
	});
}

//Wiki
function wiki(){
    chrome.tabs.getSelected(null, function(tab){
        var newURL = "https://wiki.melvoridle.com/index.php?title=Table_of_Items";
        chrome.tabs.create({url: newURL});
    });
}
