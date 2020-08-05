//Add custom Slayer Coins
document.getElementById('addSC').addEventListener('click', function (){
    chrome.runtime.getBackgroundPage(function(backgroundPage){
		var amount = document.getElementById('amount').value;
		backgroundPage.addSC(amount);
    });
});

//Add custom GP
document.getElementById('addGP').addEventListener('click', function (){
    chrome.runtime.getBackgroundPage(function(backgroundPage){
		var amount = document.getElementById("amount").value;
        backgroundPage.addGP(amount);
    });
});

//Add custom bank slots
document.getElementById('addBS').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
		var amount = document.getElementById("amount").value;
        backgroundPage.bankSlots(amount);
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

//Add EXP to selected skill
document.getElementById('addEXP').addEventListener('click', function() {
	chrome.runtime.getBackgroundPage(function(backgroundPage){
		var skill = document.getElementById("skillChoice").value;
		backgroundPage.addEXP(skill);
	})
})

//Unlock selected mastery skill
document.getElementById('unlockSkillMastery').addEventListener('click', function() {
	chrome.runtime.getBackgroundPage(function(backgroundPage){
		var skillMastery = document.getElementById("skillMastery").value;
		backgroundPage.unlockMastery(skillMastery);
	})
})

//Open wiki
document.getElementById('wiki').addEventListener('click', function() {
    chrome.runtime.getBackgroundPage(function(backgroundPage){
        backgroundPage.wiki();
    })
})

//Insta kill enemy.
document.getElementById('instaKill').addEventListener('click', function() {
	chrome.runtime.getBackgroundPage(function(backgroundPage){
		backgroundPage.instaKill();
	})
})