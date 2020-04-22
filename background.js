//Add 10,000 SC
function addTenThousandSC(){
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"updateSlayerCoins(10000);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}
//Add 10,000 GP
function addTenThousandGP(){
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"gp += 10000; updateGP();\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Give Hella Bank Slots
function bankSlots() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"bankMax=99999; updateBank();\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//WoodCutting
function allUnlockWoodCutting() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Woodcutting, 999999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}
//Fishing
function allUnlockFishing() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Fishing, 999999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Firemaking
function allUnlockFireMaking() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Firemaking, 999999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Cooking
function allUnlockCooking() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Cooking, 999999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Mining
function allUnlockMining() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Mining, 999999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Smithing
function allUnlockSmithing() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Smithing, 999999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}
//Thieving
function allUnlockThieving() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Thieving, 999999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}
//Farming
function allUnlockFarming() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Farming, 999999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Fletching
function allUnlockFletching() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Fletching, 999999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Crafting
function allUnlockCrafting() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Crafting, 99999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Runecrafting
function allUnlockRunecrafting() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Runecrafting, 999999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Herblore
function allUnlockHerblore() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"addXP(CONSTANTS.skill.Herblore, 999999999);\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Woodcutting mastery
function allTreeMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"treeMasteryData[0].mastery = 99; treeMasteryData[0].masteryXP = 99999; treeMasteryData[1].mastery = 99; treeMasteryData[1].masteryXP = 99999; treeMasteryData[2].mastery = 99; treeMasteryData[2].masteryXP = 99999; treeMasteryData[3].mastery = 99; treeMasteryData[3].masteryXP = 99999; treeMasteryData[4].mastery = 99; treeMasteryData[4].masteryXP = 99999; treeMasteryData[5].mastery = 99; treeMasteryData[5].masteryXP = 99999; treeMasteryData[6].mastery = 99; treeMasteryData[6].masteryXP = 99999; treeMasteryData[7].mastery = 99; treeMasteryData[7].masteryXP = 99999; treeMasteryData[8].mastery = 99; treeMasteryData[8].masteryXP = 99999;\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Fishing mastery
function allFishMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"fishMastery[0].mastery = 99; fishMastery[0].masteryXP = 99999; fishMastery[1].mastery = 99; fishMastery[1].masteryXP = 99999; fishMastery[2].mastery = 99; fishMastery[2].masteryXP = 99999; fishMastery[3].mastery = 99; fishMastery[3].masteryXP = 99999; fishMastery[4].mastery = 99; fishMastery[4].masteryXP = 99999; fishMastery[5].mastery = 99; fishMastery[5].masteryXP = 99999; fishMastery[6].mastery = 99; fishMastery[6].masteryXP = 99999; fishMastery[7].mastery = 99; fishMastery[7].masteryXP = 99999; fishMastery[8].mastery = 99; fishMastery[8].masteryXP = 99999; fishMastery[9].mastery = 99; fishMastery[9].masteryXP = 99999; fishMastery[10].mastery = 99; fishMastery[10].masteryXP = 99999; fishMastery[11].mastery = 99; fishMastery[11].masteryXP = 99999; fishMastery[12].mastery = 99; fishMastery[12].masteryXP = 99999; fishMastery[13].mastery = 99; fishMastery[13].masteryXP = 99999; fishMastery[14].mastery = 99; fishMastery[14].masteryXP = 99999; fishMastery[15].mastery = 99; fishMastery[15].masteryXP = 99999; fishMastery[16].mastery = 99; fishMastery[16].masteryXP = 99999; fishMastery[17].mastery = 99; fishMastery[17].masteryXP = 99999; fishMastery[18].mastery = 99; fishMastery[18].masteryXP = 99999; fishMastery[19].mastery = 99; fishMastery[19].masteryXP = 99999; fishMastery[20].mastery = 99; fishMastery[20].masteryXP = 99999; fishMastery[21].mastery = 99; fishMastery[21].masteryXP = 99999; fishMastery[22].mastery = 99; fishMastery[22].masteryXP = 99999;\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Firemaking mastery
function allFireMakingMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"logsMastery[0].mastery = 99; logsMastery[0].masteryXP = 99999; logsMastery[1].mastery = 99; logsMastery[1].masteryXP = 99999; logsMastery[2].mastery = 99; logsMastery[2].masteryXP = 99999; logsMastery[3].mastery = 99; logsMastery[3].masteryXP = 99999; logsMastery[4].mastery = 99; logsMastery[4].masteryXP = 99999; logsMastery[5].mastery = 99; logsMastery[5].masteryXP = 99999; logsMastery[6].mastery = 99; logsMastery[6].masteryXP = 99999; logsMastery[7].mastery = 99; logsMastery[7].masteryXP = 99999; logsMastery[8].mastery = 99; logsMastery[8].masteryXP = 99999;\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Cooking mastery
function allCookingMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"cookingMastery[0].mastery = 99; cookingMastery[0].masteryXP = 99999; cookingMastery[1].mastery = 99; cookingMastery[1].masteryXP = 99999; cookingMastery[2].mastery = 99; cookingMastery[2].masteryXP = 99999; cookingMastery[3].mastery = 99; cookingMastery[3].masteryXP = 99999; cookingMastery[4].mastery = 99; cookingMastery[4].masteryXP = 99999; cookingMastery[5].mastery = 99; cookingMastery[5].masteryXP = 99999; cookingMastery[6].mastery = 99; cookingMastery[6].masteryXP = 99999; cookingMastery[7].mastery = 99; cookingMastery[7].masteryXP = 99999; cookingMastery[8].mastery = 99; cookingMastery[8].masteryXP = 99999; cookingMastery[9].mastery = 99; cookingMastery[9].masteryXP = 99999; cookingMastery[10].mastery = 99; cookingMastery[10].masteryXP = 99999; cookingMastery[11].mastery = 99; cookingMastery[11].masteryXP = 99999; cookingMastery[12].mastery = 99; cookingMastery[12].masteryXP = 99999; cookingMastery[13].mastery = 99; cookingMastery[13].masteryXP = 99999; cookingMastery[14].mastery = 99; cookingMastery[14].masteryXP = 99999; cookingMastery[15].mastery = 99; cookingMastery[15].masteryXP = 99999;\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Mining Mastery
function allMiningMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"miningOreMastery[0].mastery = 99; miningOreMastery[0].masteryXP = 99999; miningOreMastery[1].mastery = 99; miningOreMastery[1].masteryXP = 99999; miningOreMastery[2].mastery = 99; miningOreMastery[2].masteryXP = 99999; miningOreMastery[3].mastery = 99; miningOreMastery[3].masteryXP = 99999; miningOreMastery[4].mastery = 99; miningOreMastery[4].masteryXP = 99999; miningOreMastery[5].mastery = 99; miningOreMastery[5].masteryXP = 99999; miningOreMastery[6].mastery = 99; miningOreMastery[6].masteryXP = 99999; miningOreMastery[7].mastery = 99; miningOreMastery[7].masteryXP = 99999; miningOreMastery[8].mastery = 99; miningOreMastery[8].masteryXP = 99999; miningOreMastery[9].mastery = 99; miningOreMastery[9].masteryXP = 99999; miningOreMastery[10].mastery = 99; miningOreMastery[10].masteryXP = 99999;\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Smithing Mastery
function allSmithingMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"smithingMastery[0].mastery = 99; smithingMastery[0].masteryXP = 99999; smithingMastery[1].mastery = 99; smithingMastery[1].masteryXP = 99999; smithingMastery[2].mastery = 99; smithingMastery[2].masteryXP = 99999; smithingMastery[3].mastery = 99; smithingMastery[3].masteryXP = 99999; smithingMastery[4].mastery = 99; smithingMastery[4].masteryXP = 99999; smithingMastery[5].mastery = 99; smithingMastery[5].masteryXP = 99999; smithingMastery[6].mastery = 99; smithingMastery[6].masteryXP = 99999; smithingMastery[7].mastery = 99; smithingMastery[7].masteryXP = 99999; smithingMastery[8].mastery = 99; smithingMastery[8].masteryXP = 99999; smithingMastery[9].mastery = 99; smithingMastery[9].masteryXP = 99999; smithingMastery[10].mastery = 99; smithingMastery[10].masteryXP = 99999; smithingMastery[11].mastery = 99; smithingMastery[11].masteryXP = 99999; smithingMastery[12].mastery = 99; smithingMastery[12].masteryXP = 99999; smithingMastery[13].mastery = 99; smithingMastery[13].masteryXP = 99999; smithingMastery[14].mastery = 99; smithingMastery[14].masteryXP = 99999; smithingMastery[15].mastery = 99; smithingMastery[15].masteryXP = 99999; smithingMastery[16].mastery = 99; smithingMastery[16].masteryXP = 99999; smithingMastery[17].mastery = 99; smithingMastery[17].masteryXP = 99999; smithingMastery[18].mastery = 99; smithingMastery[18].masteryXP = 99999; smithingMastery[19].mastery = 99; smithingMastery[19].masteryXP = 99999; smithingMastery[20].mastery = 99; smithingMastery[20].masteryXP = 99999; smithingMastery[21].mastery = 99; smithingMastery[21].masteryXP = 99999; smithingMastery[22].mastery = 99; smithingMastery[22].masteryXP = 99999; smithingMastery[23].mastery = 99; smithingMastery[23].masteryXP = 99999; smithingMastery[24].mastery = 99; smithingMastery[24].masteryXP = 99999; smithingMastery[25].mastery = 99; smithingMastery[25].masteryXP = 99999; smithingMastery[26].mastery = 99; smithingMastery[26].masteryXP = 99999; smithingMastery[27].mastery = 99; smithingMastery[27].masteryXP = 99999; smithingMastery[28].mastery = 99; smithingMastery[28].masteryXP = 99999; smithingMastery[29].mastery = 99; smithingMastery[29].masteryXP = 99999; smithingMastery[30].mastery = 99; smithingMastery[30].masteryXP = 99999; smithingMastery[31].mastery = 99; smithingMastery[31].masteryXP = 99999; smithingMastery[32].mastery = 99; smithingMastery[32].masteryXP = 99999; smithingMastery[33].mastery = 99; smithingMastery[33].masteryXP = 99999; smithingMastery[34].mastery = 99; smithingMastery[34].masteryXP = 99999; smithingMastery[35].mastery = 99; smithingMastery[35].masteryXP = 99999; smithingMastery[36].mastery = 99; smithingMastery[36].masteryXP = 99999; smithingMastery[37].mastery = 99; smithingMastery[37].masteryXP = 99999; smithingMastery[38].mastery = 99; smithingMastery[38].masteryXP = 99999; smithingMastery[39].mastery = 99; smithingMastery[39].masteryXP = 99999; smithingMastery[40].mastery = 99; smithingMastery[40].masteryXP = 99999; smithingMastery[41].mastery = 99; smithingMastery[41].masteryXP = 99999; smithingMastery[42].mastery = 99; smithingMastery[42].masteryXP = 99999; smithingMastery[43].mastery = 99; smithingMastery[43].masteryXP = 99999; smithingMastery[44].mastery = 99; smithingMastery[44].masteryXP = 99999; smithingMastery[45].mastery = 99; smithingMastery[45].masteryXP = 99999; smithingMastery[46].mastery = 99; smithingMastery[46].masteryXP = 99999; smithingMastery[47].mastery = 99; smithingMastery[47].masteryXP = 99999; smithingMastery[48].mastery = 99; smithingMastery[48].masteryXP = 99999; smithingMastery[49].mastery = 99; smithingMastery[49].masteryXP = 99999; smithingMastery[50].mastery = 99; smithingMastery[50].masteryXP = 99999; smithingMastery[51].mastery = 99; smithingMastery[51].masteryXP = 99999; smithingMastery[52].mastery = 99; smithingMastery[52].masteryXP = 99999; smithingMastery[53].mastery = 99; smithingMastery[53].masteryXP = 99999; smithingMastery[54].mastery = 99; smithingMastery[54].masteryXP = 99999; smithingMastery[55].mastery = 99; smithingMastery[55].masteryXP = 99999; smithingMastery[56].mastery = 99; smithingMastery[56].masteryXP = 99999; smithingMastery[57].mastery = 99; smithingMastery[57].masteryXP = 99999; smithingMastery[58].mastery = 99; smithingMastery[58].masteryXP = 99999; smithingMastery[59].mastery = 99; smithingMastery[59].masteryXP = 99999; smithingMastery[60].mastery = 99; smithingMastery[60].masteryXP = 99999; smithingMastery[61].mastery = 99; smithingMastery[61].masteryXP = 99999; smithingMastery[62].mastery = 99; smithingMastery[62].masteryXP = 99999; smithingMastery[63].mastery = 99; smithingMastery[63].masteryXP = 99999; smithingMastery[64].mastery = 99; smithingMastery[64].masteryXP = 99999; smithingMastery[65].mastery = 99; smithingMastery[65].masteryXP = 99999; smithingMastery[66].mastery = 99; smithingMastery[66].masteryXP = 99999; smithingMastery[67].mastery = 99; smithingMastery[67].masteryXP = 99999; smithingMastery[68].mastery = 99; smithingMastery[68].masteryXP = 99999; smithingMastery[69].mastery = 99; smithingMastery[69].masteryXP = 99999; smithingMastery[70].mastery = 99; smithingMastery[70].masteryXP = 99999; smithingMastery[71].mastery = 99; smithingMastery[71].masteryXP = 99999; smithingMastery[72].mastery = 99; smithingMastery[72].masteryXP = 99999; smithingMastery[73].mastery = 99; smithingMastery[73].masteryXP = 99999; smithingMastery[74].mastery = 99; smithingMastery[74].masteryXP = 99999; smithingMastery[75].mastery = 99; smithingMastery[75].masteryXP = 99999; smithingMastery[76].mastery = 99; smithingMastery[76].masteryXP = 99999; smithingMastery[77].mastery = 99; smithingMastery[77].masteryXP = 99999; smithingMastery[78].mastery = 99; smithingMastery[78].masteryXP = 99999; smithingMastery[79].mastery = 99; smithingMastery[79].masteryXP = 99999; smithingMastery[80].mastery = 99; smithingMastery[80].masteryXP = 99999; smithingMastery[81].mastery = 99; smithingMastery[81].masteryXP = 99999; smithingMastery[82].mastery = 99; smithingMastery[82].masteryXP = 99999; smithingMastery[83].mastery = 99; smithingMastery[83].masteryXP = 99999; smithingMastery[84].mastery = 99; smithingMastery[84].masteryXP = 99999; smithingMastery[85].mastery = 99; smithingMastery[85].masteryXP = 99999; smithingMastery[86].mastery = 99; smithingMastery[86].masteryXP = 99999; smithingMastery[87].mastery = 99; smithingMastery[87].masteryXP = 99999; smithingMastery[88].mastery = 99; smithingMastery[88].masteryXP = 99999; smithingMastery[89].mastery = 99; smithingMastery[89].masteryXP = 99999; smithingMastery[90].mastery = 99; smithingMastery[90].masteryXP = 99999; smithingMastery[91].mastery = 99; smithingMastery[91].masteryXP = 99999; smithingMastery[92].mastery = 99; smithingMastery[92].masteryXP = 99999;\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Thieving Mastery
function allThievingMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"thievingMastery[0].mastery = 99; thievingMastery[0].masteryXP = 99999; thievingMastery[1].mastery = 99; thievingMastery[1].masteryXP = 99999; thievingMastery[2].mastery = 99; thievingMastery[2].masteryXP = 99999; thievingMastery[3].mastery = 99; thievingMastery[3].masteryXP = 99999; thievingMastery[4].mastery = 99; thievingMastery[4].masteryXP = 99999; thievingMastery[5].mastery = 99; thievingMastery[5].masteryXP = 99999; thievingMastery[6].mastery = 99; thievingMastery[6].masteryXP = 99999; thievingMastery[7].mastery = 99; thievingMastery[7].masteryXP = 99999;\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Farming Mastery
function allFarmingMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"farmingMastery[0].mastery = 99; farmingMastery[0].masteryXP = 99999; farmingMastery[1].mastery = 99; farmingMastery[1].masteryXP = 99999; farmingMastery[2].mastery = 99; farmingMastery[2].masteryXP = 99999; farmingMastery[3].mastery = 99; farmingMastery[3].masteryXP = 99999; farmingMastery[4].mastery = 99; farmingMastery[4].masteryXP = 99999; farmingMastery[5].mastery = 99; farmingMastery[5].masteryXP = 99999; farmingMastery[6].mastery = 99; farmingMastery[6].masteryXP = 99999; farmingMastery[7].mastery = 99; farmingMastery[7].masteryXP = 99999; farmingMastery[8].mastery = 99; farmingMastery[8].masteryXP = 99999; farmingMastery[9].mastery = 99; farmingMastery[9].masteryXP = 99999; farmingMastery[10].mastery = 99; farmingMastery[10].masteryXP = 99999; farmingMastery[11].mastery = 99; farmingMastery[11].masteryXP = 99999; farmingMastery[12].mastery = 99; farmingMastery[12].masteryXP = 99999; farmingMastery[13].mastery = 99; farmingMastery[13].masteryXP = 99999; farmingMastery[14].mastery = 99; farmingMastery[14].masteryXP = 99999; farmingMastery[15].mastery = 99; farmingMastery[15].masteryXP = 99999; farmingMastery[16].mastery = 99; farmingMastery[16].masteryXP = 99999; farmingMastery[17].mastery = 99; farmingMastery[17].masteryXP = 99999; farmingMastery[18].mastery = 99; farmingMastery[18].masteryXP = 99999; farmingMastery[19].mastery = 99; farmingMastery[19].masteryXP = 99999; farmingMastery[20].mastery = 99; farmingMastery[20].masteryXP = 99999; farmingMastery[21].mastery = 99; farmingMastery[21].masteryXP = 99999;\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Fletching Mastery
function allFletchingMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"fletchingMastery[0].mastery = 99; fletchingMastery[0].masteryXP = 99999; fletchingMastery[1].mastery = 99; fletchingMastery[1].masteryXP = 99999; fletchingMastery[2].mastery = 99; fletchingMastery[2].masteryXP = 99999; fletchingMastery[3].mastery = 99; fletchingMastery[3].masteryXP = 99999; fletchingMastery[4].mastery = 99; fletchingMastery[4].masteryXP = 99999; fletchingMastery[5].mastery = 99; fletchingMastery[5].masteryXP = 99999; fletchingMastery[6].mastery = 99; fletchingMastery[6].masteryXP = 99999; fletchingMastery[7].mastery = 99; fletchingMastery[7].masteryXP = 99999; fletchingMastery[8].mastery = 99; fletchingMastery[8].masteryXP = 99999; fletchingMastery[9].mastery = 99; fletchingMastery[9].masteryXP = 99999; fletchingMastery[10].mastery = 99; fletchingMastery[10].masteryXP = 99999; fletchingMastery[11].mastery = 99; fletchingMastery[11].masteryXP = 99999; fletchingMastery[12].mastery = 99; fletchingMastery[12].masteryXP = 99999; fletchingMastery[13].mastery = 99; fletchingMastery[13].masteryXP = 99999; fletchingMastery[14].mastery = 99; fletchingMastery[14].masteryXP = 99999; fletchingMastery[15].mastery = 99; fletchingMastery[15].masteryXP = 99999; fletchingMastery[16].mastery = 99; fletchingMastery[16].masteryXP = 99999; fletchingMastery[17].mastery = 99; fletchingMastery[17].masteryXP = 99999; fletchingMastery[18].mastery = 99; fletchingMastery[18].masteryXP = 99999; fletchingMastery[19].mastery = 99; fletchingMastery[19].masteryXP = 99999; fletchingMastery[20].mastery = 99; fletchingMastery[20].masteryXP = 99999; fletchingMastery[21].mastery = 99; fletchingMastery[21].masteryXP = 99999; fletchingMastery[22].mastery = 99; fletchingMastery[22].masteryXP = 99999; fletchingMastery[23].mastery = 99; fletchingMastery[23].masteryXP = 99999; fletchingMastery[24].mastery = 99; fletchingMastery[24].masteryXP = 99999; fletchingMastery[25].mastery = 99; fletchingMastery[25].masteryXP = 99999; fletchingMastery[26].mastery = 99; fletchingMastery[26].masteryXP = 99999; fletchingMastery[27].mastery = 99; fletchingMastery[27].masteryXP = 99999; fletchingMastery[28].mastery = 99; fletchingMastery[28].masteryXP = 99999; fletchingMastery[29].mastery = 99; fletchingMastery[29].masteryXP = 99999; fletchingMastery[30].mastery = 99; fletchingMastery[30].masteryXP = 99999; fletchingMastery[31].mastery = 99; fletchingMastery[31].masteryXP = 99999; fletchingMastery[32].mastery = 99; fletchingMastery[32].masteryXP = 99999; fletchingMastery[33].mastery = 99; fletchingMastery[33].masteryXP = 99999; fletchingMastery[34].mastery = 99; fletchingMastery[34].masteryXP = 99999; fletchingMastery[35].mastery = 99; fletchingMastery[35].masteryXP = 99999; fletchingMastery[36].mastery = 99; fletchingMastery[36].masteryXP = 99999;\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Crafting Mastery
function allCraftingMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"craftingMastery[0].mastery = 99; craftingMastery[0].masteryXP = 99999; craftingMastery[1].mastery = 99; craftingMastery[1].masteryXP = 99999; craftingMastery[2].mastery = 99; craftingMastery[2].masteryXP = 99999; craftingMastery[3].mastery = 99; craftingMastery[3].masteryXP = 99999; craftingMastery[4].mastery = 99; craftingMastery[4].masteryXP = 99999; craftingMastery[5].mastery = 99; craftingMastery[5].masteryXP = 99999; craftingMastery[6].mastery = 99; craftingMastery[6].masteryXP = 99999; craftingMastery[7].mastery = 99; craftingMastery[7].masteryXP = 99999; craftingMastery[8].mastery = 99; craftingMastery[8].masteryXP = 99999; craftingMastery[9].mastery = 99; craftingMastery[9].masteryXP = 99999; craftingMastery[10].mastery = 99; craftingMastery[10].masteryXP = 99999; craftingMastery[11].mastery = 99; craftingMastery[11].masteryXP = 99999; craftingMastery[12].mastery = 99; craftingMastery[12].masteryXP = 99999; craftingMastery[13].mastery = 99; craftingMastery[13].masteryXP = 99999; craftingMastery[14].mastery = 99; craftingMastery[14].masteryXP = 99999; craftingMastery[15].mastery = 99; craftingMastery[15].masteryXP = 99999; craftingMastery[16].mastery = 99; craftingMastery[16].masteryXP = 99999; craftingMastery[17].mastery = 99; craftingMastery[17].masteryXP = 99999; craftingMastery[18].mastery = 99; craftingMastery[18].masteryXP = 99999; craftingMastery[19].mastery = 99; craftingMastery[19].masteryXP = 99999; craftingMastery[20].mastery = 99; craftingMastery[20].masteryXP = 99999; craftingMastery[21].mastery = 99; craftingMastery[21].masteryXP = 99999; craftingMastery[22].mastery = 99; craftingMastery[22].masteryXP = 99999; craftingMastery[23].mastery = 99; craftingMastery[23].masteryXP = 99999; craftingMastery[24].mastery = 99; craftingMastery[24].masteryXP = 99999; craftingMastery[25].mastery = 99; craftingMastery[25].masteryXP = 99999; craftingMastery[26].mastery = 99; craftingMastery[26].masteryXP = 99999; craftingMastery[27].mastery = 99; craftingMastery[27].masteryXP = 99999; craftingMastery[28].mastery = 99; craftingMastery[28].masteryXP = 99999; craftingMastery[29].mastery = 99; craftingMastery[29].masteryXP = 99999; craftingMastery[30].mastery = 99; craftingMastery[30].masteryXP = 99999; craftingMastery[31].mastery = 99; craftingMastery[31].masteryXP = 99999; craftingMastery[32].mastery = 99; craftingMastery[32].masteryXP = 99999; craftingMastery[33].mastery = 99; craftingMastery[33].masteryXP = 99999; craftingMastery[34].mastery = 99; craftingMastery[34].masteryXP = 99999; craftingMastery[35].mastery = 99; craftingMastery[35].masteryXP = 99999; craftingMastery[36].mastery = 99; craftingMastery[36].masteryXP = 99999; craftingMastery[37].mastery = 99; craftingMastery[37].masteryXP = 99999; craftingMastery[38].mastery = 99; craftingMastery[38].masteryXP = 99999; craftingMastery[39].mastery = 99; craftingMastery[39].masteryXP = 99999; craftingMastery[40].mastery = 99; craftingMastery[40].masteryXP = 99999; craftingMastery[41].mastery = 99; craftingMastery[41].masteryXP = 99999; craftingMastery[42].mastery = 99; craftingMastery[42].masteryXP = 99999; craftingMastery[43].mastery = 99; craftingMastery[43].masteryXP = 99999;\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Runecrafting Mastery
function allRuneCraftingMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"runecraftingMastery[0].mastery = 99; runecraftingMastery[0].masteryXP = 99999; runecraftingMastery[1].mastery = 99; runecraftingMastery[1].masteryXP = 99999; runecraftingMastery[2].mastery = 99; runecraftingMastery[2].masteryXP = 99999; runecraftingMastery[3].mastery = 99; runecraftingMastery[3].masteryXP = 99999; runecraftingMastery[4].mastery = 99; runecraftingMastery[4].masteryXP = 99999; runecraftingMastery[5].mastery = 99; runecraftingMastery[5].masteryXP = 99999; runecraftingMastery[6].mastery = 99; runecraftingMastery[6].masteryXP = 99999; runecraftingMastery[7].mastery = 99; runecraftingMastery[7].masteryXP = 99999; runecraftingMastery[8].mastery = 99; runecraftingMastery[8].masteryXP = 99999; runecraftingMastery[9].mastery = 99; runecraftingMastery[9].masteryXP = 99999;\";\
        document.head.appendChild(s);"
        chrome.tabs.executeScript(tab.id, {code: c});
    });
}

//Herblore Mastery
function allHerbloreMastery() {
    chrome.tabs.getSelected(null, function(tab){
        var c = "var s = document.createElement('script');\
        s.textContent = \"herbloreMastery[0].mastery = 99; herbloreMastery[0].masteryXP = 99999; herbloreMastery[1].mastery = 99; herbloreMastery[1].masteryXP = 99999; herbloreMastery[2].mastery = 99; herbloreMastery[2].masteryXP = 99999; herbloreMastery[3].mastery = 99; herbloreMastery[3].masteryXP = 99999; herbloreMastery[4].mastery = 99; herbloreMastery[4].masteryXP = 99999; herbloreMastery[5].mastery = 99; herbloreMastery[5].masteryXP = 99999; herbloreMastery[6].mastery = 99; herbloreMastery[6].masteryXP = 99999; herbloreMastery[7].mastery = 99; herbloreMastery[7].masteryXP = 99999; herbloreMastery[8].mastery = 99; herbloreMastery[8].masteryXP = 99999; herbloreMastery[9].mastery = 99; herbloreMastery[9].masteryXP = 99999; herbloreMastery[10].mastery = 99; herbloreMastery[10].masteryXP = 99999; herbloreMastery[11].mastery = 99; herbloreMastery[11].masteryXP = 99999; herbloreMastery[12].mastery = 99; herbloreMastery[12].masteryXP = 99999; herbloreMastery[13].mastery = 99; herbloreMastery[13].masteryXP = 99999; herbloreMastery[14].mastery = 99; herbloreMastery[14].masteryXP = 99999; herbloreMastery[15].mastery = 99; herbloreMastery[15].masteryXP = 99999; herbloreMastery[16].mastery = 99; herbloreMastery[16].masteryXP = 99999; herbloreMastery[17].mastery = 99; herbloreMastery[17].masteryXP = 99999; herbloreMastery[18].mastery = 99; herbloreMastery[18].masteryXP = 99999; herbloreMastery[19].mastery = 99; herbloreMastery[19].masteryXP = 99999; herbloreMastery[20].mastery = 99; herbloreMastery[20].masteryXP = 99999; herbloreMastery[21].mastery = 99; herbloreMastery[21].masteryXP = 99999; herbloreMastery[22].mastery = 99; herbloreMastery[22].masteryXP = 99999; herbloreMastery[23].mastery = 99; herbloreMastery[23].masteryXP = 99999;\";\
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
function wiki(){
    chrome.tabs.getSelected(null, function(tab){
        var newURL = "https://wiki.melvoridle.com/index.php?title=Table_of_Items";
        chrome.tabs.create({url: newURL});
    });
}