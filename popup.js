//Add 10,000 Slayer Coins
document.getElementById('addTenThousandSC').addEventListener('click', function (){
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.addTenThousandSC();
    });
});

//Add 10,000 GP
document.getElementById('addTenThousandGP').addEventListener('click', function (){
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.addTenThousandGP();
    });
});

//Add Hella bank slots
document.getElementById('bankSlots').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.bankSlots();
    })
})

//get a fuck ton of xp for woodcutting
document.getElementById('allUnlockWoodCutting').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockWoodCutting();
    })
})
//get a fuck ton of xp for fishing
document.getElementById('allUnlockFishing').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockFishing();
    })
})
//get a fuck ton of xp for firemaking
document.getElementById('allUnlockFireMaking').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockFireMaking();
    })
})
//get a fuck ton of xp for cooking
document.getElementById('allUnlockCooking').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockCooking();
    })
})

//get a fuck ton of xp for mining
document.getElementById('allUnlockMining').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockMining();
    })
})

//get a fuck ton of xp for smithing
document.getElementById('allUnlockSmithing').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockSmithing();
    })
})

//get a fuck ton of xp for theiving
document.getElementById('allUnlockThieving').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockThieving();
    })
})

//get a fuck ton of xp for farming
document.getElementById('allUnlockFarming').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockFarming();
    })
})

//get a fuck ton of xp for fletching
document.getElementById('allUnlockFletching').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockFletching();
    })
})

//get a fuck ton of xp for crafting
document.getElementById('allUnlockCrafting').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockCrafting();
    })
})

//get a fuck ton of xp for runecrafting
document.getElementById('allUnlockRunecrafting').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockRunecrafting();
    })
})

//get a fuck ton of xp for herblore
document.getElementById('allUnlockHerblore').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allUnlockHerblore();
    })
})

//Unlock all mastery for tree
document.getElementById('allTreeMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allTreeMastery();
    })
})

//Unlock all mastery for fishing
document.getElementById('allFishMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allFishMastery();
    })
})

//Unlock all mastery for firemaking
document.getElementById('allFireMakingMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allFireMakingMastery();
    })
})

//Unlock all mastery for Cooking
document.getElementById('allCookingMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allCookingMastery();
    })
})

//Unlock all mastery for mining
document.getElementById('allMiningMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allMiningMastery();
    })
})

//Unlock all mastery for smithing
document.getElementById('allSmithingMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allSmithingMastery();
    })
})

//Unlock all mastery for Thieving
document.getElementById('allThievingMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allThievingMastery();
    })
})

//Unlock all mastery for Farming
document.getElementById('allFarmingMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allFarmingMastery();
    })
})

//Unlock all mastery for Fletching
document.getElementById('allFletchingMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allFletchingMastery();
    })
})

//Unlock all mastery for Crafting
document.getElementById('allCraftingMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allCraftingMastery();
    })
})

//Unlock all mastery for RuneCrafting
document.getElementById('allRuneCraftingMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allRuneCraftingMastery();
    })
})

//Unlock all mastery for Herblore
document.getElementById('allHerbloreMastery').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.allHerbloreMastery();
    })
})

//Add to bank
document.getElementById('addToBank').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        var ItemID = document.getElementById('idInput').value;
        var Quantity = document.getElementById('idQuantity').value;
        backgroundPage.addToBank(ItemID, Quantity);
    })
})

//Open wiki
document.getElementById('wiki').addEventListener('click', function (){
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.wiki();
    })
})


