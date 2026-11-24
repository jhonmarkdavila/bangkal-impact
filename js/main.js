

/* =====================================================
   1. ELEMENTS
===================================================== */

// MAIN MENU
const mainMenu = document.getElementById("mainMenu");
const newGameBtn = document.getElementById("newGameBtn");
const continueBtn = document.getElementById("continueBtn");
const leaderboardBtn = document.getElementById("leaderboardBtn");
const settingsBtn = document.getElementById("settingsBtn");

// CHARACTER SELECTION
const characterSelection = document.getElementById("characterSelection");
const characterBackBtn = document.getElementById("characterBackBtn");
const startAdventureBtn = document.getElementById("startAdventureBtn");
const playerNameInput = document.getElementById("playerNameInput");
const playerNameDisplay = document.getElementById("playerName");

const characterButtons = document.querySelectorAll(".select-character");
const characterOptions = document.querySelectorAll(".character-option");

// GAME SCREEN
const gameScreen = document.getElementById("gameScreen");
const startBattleBtn = document.getElementById("startBattleBtn");
const backBtn = document.getElementById("backBtn");

// BATTLE MENU
const battleMenuPanel = document.getElementById("battleMenuPanel");
const resumeBtn = document.getElementById("resumeBtn");
const battleSettingsBtn = document.getElementById("battleSettingsBtn");
const exitGameBtn = document.getElementById("exitGameBtn");

// SETTINGS
const settingsScreen = document.getElementById("settingsScreen");
const settingsBackBtn = document.getElementById("settingsBackBtn");
const howToPlayBtn = document.getElementById("howToPlayBtn");
const howToPlayPanel = document.getElementById("howToPlayPanel");
const closeHowToPlayBtn = document.getElementById("closeHowToPlayBtn");
const musicToggle = document.getElementById("musicToggle");
let settingsReturnScreen = "main";
let musicEnabled = false;

// SAVE SLOTS
const saveSlotsScreen = document.getElementById("saveSlotsScreen");
const saveSlotList = document.getElementById("saveSlotList");
const saveSlotsBackBtn = document.getElementById("saveSlotsBackBtn");
const saveGameBtn = document.getElementById("saveGameBtn");

// LEADERBOARD
const leaderboardScreen = document.getElementById("leaderboardScreen");
const leaderboardList = document.getElementById("leaderboardList");
const leaderboardBackBtn = document.getElementById("leaderboardBackBtn");

// MONSTER PANEL
const monsterBtn = document.getElementById("monsterBtn");
const monsterPanel = document.getElementById("monsterPanel");
const monsterList = document.getElementById("monsterList");
const closeMonsterPanel = document.getElementById("closeMonsterPanel");

// MONSTER INFORMATION
const monsterInfoPanel = document.getElementById("monsterInfoPanel");
const closeMonsterInfo = document.getElementById("closeMonsterInfo");

const infoMonsterSprite = document.getElementById("infoMonsterSprite");
const infoMonsterName = document.getElementById("infoMonsterName");
const infoMonsterDescription = document.getElementById("infoMonsterDescription");
const infoMonsterElement = document.getElementById("infoMonsterElement");
const infoMonsterLevel = document.getElementById("infoMonsterLevel");
const infoMonsterHp = document.getElementById("infoMonsterHp");
const infoMonsterAttack = document.getElementById("infoMonsterAttack");
const infoMonsterDefense = document.getElementById("infoMonsterDefense");

// INVENTORY
const itemsBtn = document.getElementById("itemsBtn");
const inventoryPanel = document.getElementById("inventoryPanel");
const closeInventoryBtn = document.getElementById("closeInventoryBtn");
const inventoryGrid = document.getElementById("inventoryGrid");

// PLAYER MONSTER DISPLAY
const playerMonsterName = document.getElementById("playerMonsterName");
const playerMonsterLevel = document.getElementById("playerMonsterLevel");
const playerHpText = document.getElementById("playerHpText");
const playerHealthFill = document.getElementById("playerHealthFill");
const playerExpFill = document.getElementById("playerExpFill");
const playerExpText = document.getElementById("playerExpText");
const playerMonsterSprite = document.getElementById("playerMonsterSprite");

// ENEMY MONSTER DISPLAY
const enemyMonsterName = document.getElementById("enemyMonsterName");
const enemyMonsterLevel = document.getElementById("enemyMonsterLevel");
const enemyHpText = document.getElementById("enemyHpText");
const enemyHealthFill = document.getElementById("enemyHealthFill");
const enemyMonsterSprite = document.getElementById("enemyMonsterSprite");

// BATTLE SKILLS
const skill1Btn = document.getElementById("skill1Btn");
const skill2Btn = document.getElementById("skill2Btn");
const skill3Btn = document.getElementById("skill3Btn");
const skill4Btn = document.getElementById("skill4Btn");
const ultimateCooldown = document.getElementById("ultimateCooldown");

// BATTLE MESSAGES
const battleMessage = document.getElementById("battleMessage");

// BATTLE RESULTS
const battleResult = document.getElementById("battleResult");
const battleResultImage = document.getElementById("battleResultImage");
const battleResultMessage = document.getElementById("battleResultMessage");

const victoryChoices = document.getElementById("victoryChoices");
const defeatChoices = document.getElementById("defeatChoices");

const absorbBtn = document.getElementById("absorbBtn");
const captureBtn = document.getElementById("captureBtn");
const restartBtn = document.getElementById("restartBtn");

// AUDIO
const menuMusic = document.getElementById("menuMusic");
const battleMusic = document.getElementById("battleMusic");
const audioToggleBtn = document.getElementById("audioToggleBtn");


/* =====================================================
   2. GAME DATA
===================================================== */

// MONSTER DATABASE
const monsters = {

    tarsela: {
        name: "Tarsela",
        element: "Light",
        level: 1,
        maxHp: 35,
        attack: 15,
        defense: 10,
        description: "A cheerful tarsier monster with magical wings and star-powered abilities.",
        sprite: "ASSETS/monsters/tarsela/idle.png"
    },

    dagtwig: {
        name: "Dagtwig",
        element: "Nature",
        level: 1,
        maxHp: 30,
        attack: 13,
        defense: 12,
        description: "A small woodland rat monster that uses branches and nature-based attacks.",
        sprite: "ASSETS/monsters/dagtwig/idle.png"
    },

    hushus: {
        name: "Hushus",
        element: "Nature",
        level: 2,
        maxHp: 40,
        attack: 10,
        defense: 10,
        description: "A playful dog monster wearing a bonnet. It uses howls, bones, and powerful bites in battle.",
        sprite: "ASSETS/monsters/hushus/idle.png"
    },

    thundile: {
        name: "Thundile",
        element: "Electric",
        level: 3,
        maxHp: 45,
        attack: 14,
        defense: 11,
        description: "A powerful electric crocodile monster that uses lightning-based attacks to overwhelm its opponents.",
        sprite: "ASSETS/monsters/thundile/idle.png"
    }

};


// STAGE ENEMY ORDER
const stageMonsterOrder = [
    monsters.dagtwig,
    monsters.hushus,
    monsters.thundile
];


// MONSTER LEVEL SETTINGS
const maxMonsterLevel = 10;
const expToLevelUp = 100;


// TARSELA SKILL DATA
const skills = {

    starSpark: {
        name: "Star Spark",
        power: 1,
        missChance: 0.10,
        critChance: 0.15
    },

    wingSlash: {
        name: "Wing Slash",
        power: 1.5,
        missChance: 0.15,
        critChance: 0.20
    },

    floralGuard: {
        name: "Floral Guard",
        power: 0,
        missChance: 0,
        critChance: 0
    },

    parolBurst: {
        name: "Parol Burst",
        power: 2.5,
        missChance: 0.10,
        critChance: 0.25
    }

};


// SKILL SETS FOR ALL MONSTERS
const playerSkillSets = {

    Tarsela: {
        skill1: { ...skills.starSpark, sprite: "skill-2" },
        skill2: { ...skills.wingSlash, sprite: "skill-1" },
        skill3: { ...skills.floralGuard, sprite: "skill-3", type: "guard" },
        skill4: { ...skills.parolBurst, sprite: "skill-4" }
    },

    Dagtwig: {
        skill1: {
            name: "Twig Slash",
            power: 1,
            missChance: 0.10,
            critChance: 0.15,
            sprite: "skill-1"
        },

        skill2: {
            name: "Wooden Shot",
            power: 1.2,
            missChance: 0.10,
            critChance: 0.15,
            sprite: "skill-2"
        },

        skill3: {
            name: "Nature Spin",
            power: 1.5,
            missChance: 0.10,
            critChance: 0.20,
            sprite: "skill-3"
        },

        skill4: {
            name: "Forest Burst",
            power: 2,
            missChance: 0.10,
            critChance: 0.25,
            sprite: "skill-4"
        }
    },

    Hushus: {
        skill1: {
            name: "Howl",
            power: 1,
            missChance: 0.10,
            critChance: 0.15,
            sprite: "skill-1"
        },

        skill2: {
            name: "Throw Bone",
            power: 1.2,
            missChance: 0.10,
            critChance: 0.15,
            sprite: "skill-2"
        },

        skill3: {
            name: "Buff",
            power: 0,
            missChance: 0,
            critChance: 0,
            sprite: "skill-3",
            type: "guard"
        },

        skill4: {
            name: "Bite",
            power: 2,
            missChance: 0.10,
            critChance: 0.25,
            sprite: "skill-4"
        }
    },

    Thundile: {
        skill1: {
            name: "Thunder Claw",
            power: 1.2,
            missChance: 0.10,
            critChance: 0.15,
            sprite: "skill-1"
        },

        skill2: {
            name: "Lightning Shot",
            power: 1.5,
            missChance: 0.10,
            critChance: 0.20,
            sprite: "skill-2"
        },

        skill3: {
            name: "Static Spin",
            power: 1.7,
            missChance: 0.10,
            critChance: 0.20,
            sprite: "skill-3"
        },

        skill4: {
            name: "Thunderstorm Burst",
            power: 2.5,
            missChance: 0.10,
            critChance: 0.25,
            sprite: "skill-4"
        }
    }

};


/* =====================================================
   3. GAME VARIABLES AND STORAGE
===================================================== */

// PLAYER TEAM
let playerTeam = [
    {
        ...monsters.tarsela,
        currentHp: monsters.tarsela.maxHp,
        exp: 0
    }
];

// ACTIVE PLAYER MONSTER
let playerMonster = playerTeam[0];

// ENEMY MONSTER
let enemyMonster = {
    ...monsters.dagtwig,
    currentHp: monsters.dagtwig.maxHp
};

// PLAYER DATA
let selectedCharacter = null;
let currentStage = 1;

// BATTLE VARIABLES
let isPlayerTurn = true;
let playerGuard = false;
let parolCooldown = 0;

// CURRENT SKILLS
let currentSkills = skills;

// SAVE SLOT DATA
const totalSaveSlots = 3;
const saveStorageKey = "bangkalImpactSaveSlots";

let saveSlots = JSON.parse(
    localStorage.getItem(saveStorageKey)
) || [null, null, null];

let saveScreenMode = "load";
let saveSlotsReturnScreen = "main";

// LEADERBOARD DATA
const leaderboardStorageKey = "bangkalImpactLeaderboard";

let leaderboardData = JSON.parse(
    localStorage.getItem(leaderboardStorageKey)
) || [];


/* =====================================================
   4. GENERAL GAME FUNCTIONS
===================================================== */

// CREATE ENEMY FOR CURRENT STAGE
function createStageEnemy(stage) {

    const monsterIndex =
        (stage - 1) % stageMonsterOrder.length;

    const selectedMonster = stageMonsterOrder[monsterIndex];

    return {
        ...selectedMonster,
        currentHp: selectedMonster.maxHp
    };

}


// GET STAGE LOCATION
function getStageLocation(stage) {

    if (stage <= 5) {
        return "Divisoria";
    } else if (stage <= 9) {
        return "United Nations";
    } else {
        return "Bangkal";
    }

}


// DISPLAY BATTLE MESSAGE
function showBattleMessage(message) {
    battleMessage.textContent = message;
}


// ENABLE OR DISABLE SKILL BUTTONS
function setSkillButtons(enabled) {

    skill1Btn.disabled = !enabled;
    skill2Btn.disabled = !enabled;
    skill3Btn.disabled = !enabled;
    skill4Btn.disabled = !enabled || parolCooldown > 0;

}


/* =====================================================
   5. AUDIO SYSTEM
===================================================== */

// MUSIC VOLUME
menuMusic.volume = 0.4;
battleMusic.volume = 0.4;


// PLAY MENU MUSIC
function playMenuMusic() {

    battleMusic.pause();
    battleMusic.currentTime = 0;

    if (musicEnabled) {
        menuMusic.play().catch(function(error) {
            console.log("Menu music waiting for user interaction.");
        });
    } else {
        menuMusic.pause();
    }

}


// PLAY BATTLE MUSIC
function playBattleMusic() {

    menuMusic.pause();
    menuMusic.currentTime = 0;

    if (musicEnabled) {
        battleMusic.play().catch(function(error) {
            console.log("Battle music waiting for user interaction.");
        });
    } else {
        battleMusic.pause();
    }

}


// AUDIO TOGGLE BUTTON
audioToggleBtn.addEventListener("click", function() {

    musicEnabled = !musicEnabled;

    if (musicEnabled) {

        audioToggleBtn.textContent = "♫ Audio: ON";
        audioToggleBtn.classList.add("audio-on");
        audioToggleBtn.setAttribute("aria-pressed", "true");

        // PLAY MUSIC BASED ON CURRENT SCREEN
        if (gameScreen.classList.contains("battle-started")) {
            playBattleMusic();
        } else {
            playMenuMusic();
        }

    } else {

        audioToggleBtn.textContent = "♫ Audio: OFF";
        audioToggleBtn.classList.remove("audio-on");
        audioToggleBtn.setAttribute("aria-pressed", "false");

        menuMusic.pause();
        battleMusic.pause();

    }

}); 


/* =====================================================
   6. MONSTER DISPLAY SYSTEM
===================================================== */

// UPDATE PLAYER MONSTER DISPLAY
function updatePlayerMonsterUI() {

    playerMonsterName.textContent = playerMonster.name;
    playerMonsterLevel.textContent = playerMonster.level;

    playerHpText.textContent =
        "HP: " + playerMonster.currentHp + " / " + playerMonster.maxHp;

    const hpPercentage =
        (playerMonster.currentHp / playerMonster.maxHp) * 100;

    playerHealthFill.style.width = hpPercentage + "%";


    // UPDATE EXP BAR
    const expPercentage =
        (playerMonster.exp / expToLevelUp) * 100;

    playerExpFill.style.width = expPercentage + "%";

    playerExpText.textContent =
        "EXP: " + playerMonster.exp + " / " + expToLevelUp;


    // UPDATE ACTIVE MONSTER SPRITE
    playerMonsterSprite.src = playerMonster.sprite;

    updatePlayerSkills();

}


// UPDATE ENEMY MONSTER DISPLAY
function updateEnemyMonsterUI() {

    enemyMonsterName.textContent = enemyMonster.name;
    enemyMonsterLevel.textContent = enemyMonster.level;

    enemyHpText.textContent =
        "HP: " + enemyMonster.currentHp + " / " + enemyMonster.maxHp;

    const hpPercentage =
        (enemyMonster.currentHp / enemyMonster.maxHp) * 100;

    enemyHealthFill.style.width = hpPercentage + "%";

    enemyMonsterSprite.src = enemyMonster.sprite;

}


// UPDATE PLAYER SKILLS
function updatePlayerSkills() {

    currentSkills = playerSkillSets[playerMonster.name];

    skill1Btn.textContent = currentSkills.skill1.name;
    skill2Btn.textContent = currentSkills.skill2.name;
    skill3Btn.textContent = currentSkills.skill3.name;

    document.getElementById("skill4Name").textContent =
        currentSkills.skill4.name;

}


/* =====================================================
   7. MONSTER TEAM SYSTEM
===================================================== */

// DISPLAY MY MONSTERS
function updateMyMonstersUI() {

    monsterList.innerHTML = "";

    playerTeam.forEach(function(monster) {

        const monsterCard = document.createElement("div");
        monsterCard.classList.add("my-monster-card");

        const isActive = monster === playerMonster;

        monsterCard.innerHTML = `
            <img src="${monster.sprite}" alt="${monster.name}">

            <div class="my-monster-details">
                <h3>${monster.name}</h3>
                <p>Lv. ${monster.level} · ${monster.element}</p>

                <div class="monster-card-buttons">
                    <button class="monster-info-button">ⓘ</button>

                    ${
                        isActive
                        ? '<span class="active-monster-label">Active</span>'
                        : '<button class="switch-monster-button">Switch</button>'
                    }
                </div>
            </div>
        `;


        // MONSTER INFO BUTTON
        monsterCard.querySelector(".monster-info-button")
            .addEventListener("click", function() {
                showMonsterInfo(monster);
            });


        // SWITCH MONSTER BUTTON
        const switchButton =
            monsterCard.querySelector(".switch-monster-button");

        if (switchButton) {

            switchButton.addEventListener("click", function() {

                playerMonster = monster;

                updatePlayerMonsterUI();
                updateMyMonstersUI();

                showBattleMessage(
                    playerMonster.name + " is now your active monster!"
                );

            });

        }

        monsterList.appendChild(monsterCard);

    });

}


// SHOW MONSTER INFORMATION
function showMonsterInfo(monster) {

    monsterInfoPanel.style.display = "block";

    infoMonsterSprite.src = monster.sprite;
    infoMonsterName.textContent = monster.name;
    infoMonsterDescription.textContent = monster.description;

    infoMonsterElement.textContent = monster.element;
    infoMonsterLevel.textContent = monster.level;

    infoMonsterHp.textContent =
        monster.currentHp + " / " + monster.maxHp;

    infoMonsterAttack.textContent = monster.attack;
    infoMonsterDefense.textContent = monster.defense;

}


/* =====================================================
   8. INVENTORY SYSTEM
===================================================== */

// CREATE 16 INVENTORY SLOTS
for (let i = 0; i < 16; i++) {

    const slot = document.createElement("div");

    slot.classList.add("inventory-slot");

    inventoryGrid.appendChild(slot);

}


/* =====================================================
   9. SAVE AND LOAD SYSTEM
===================================================== */

// OPEN SAVE SLOTS SCREEN
function openSaveSlots(mode) {

    saveScreenMode = mode;

    mainMenu.style.display = "none";
    characterSelection.style.display = "none";
    gameScreen.style.display = "none";

    saveSlotsScreen.style.display = "flex";

    document.body.classList.add("save-slots-active");

    displaySaveSlots();

    if (mode === "load") {

        saveSlotsBackBtn.textContent = "← Back to Menu";
        saveSlotsReturnScreen = "main";

    } else {

        saveSlotsBackBtn.textContent = "← Back to Battle";
        saveSlotsReturnScreen = "battle";

    }

}


// DISPLAY SAVE SLOTS
function displaySaveSlots() {

    saveSlotList.innerHTML = "";

    for (let i = 0; i < totalSaveSlots; i++) {

        const slot = saveSlots[i];

        const slotCard = document.createElement("div");
        slotCard.className = "save-slot";

        slotCard.innerHTML = `
            <div class="save-slot-info">
                <h3>Save Slot ${i + 1}</h3>

                ${
                    slot
                    ? `
                        <p>Player: ${slot.playerName}</p>
                        <p>Character: ${slot.selectedCharacter}</p>
                        <p>Stage: ${slot.currentStage}</p>
                        <p>Saved: ${slot.dateSaved}</p>
                    `
                    : `<p>Empty Slot</p>`
                }
            </div>

            <button class="slot-action-button">
                ${
                    saveScreenMode === "load"
                    ? (slot ? "Load" : "Empty")
                    : "Save"
                }
            </button>
        `;


        const actionButton =
            slotCard.querySelector(".slot-action-button");


        // DISABLE EMPTY SLOTS WHEN LOADING
        if (saveScreenMode === "load" && !slot) {
            actionButton.disabled = true;
        }


        // SLOT BUTTON ACTION
        actionButton.addEventListener("click", function() {

            if (saveScreenMode === "save") {

                if (slot && !confirm("Overwrite this save slot?")) {
                    return;
                }

                saveGameToSlot(i);

            } else if (saveScreenMode === "load" && slot) {

                loadGameFromSlot(i);

            }

        });

        saveSlotList.appendChild(slotCard);

    }

}


// SAVE GAME TO SELECTED SLOT
function saveGameToSlot(index) {

    const activeMonsterIndex =
        playerTeam.indexOf(playerMonster);

    const saveData = {

        playerName: localStorage.getItem("playerName"),
        selectedCharacter: selectedCharacter,

        currentStage: currentStage,

        playerTeam: JSON.parse(JSON.stringify(playerTeam)),
        activeMonsterIndex: activeMonsterIndex,

        enemyMonster: JSON.parse(JSON.stringify(enemyMonster)),

        isPlayerTurn: isPlayerTurn,
        playerGuard: playerGuard,
        parolCooldown: parolCooldown,

        battleStarted: gameScreen.classList.contains("battle-started"),

        dateSaved: new Date().toLocaleString()

    };


    saveSlots[index] = saveData;

    localStorage.setItem(
        saveStorageKey,
        JSON.stringify(saveSlots)
    );

    alert("Game saved successfully!");

    displaySaveSlots();

}


// LOAD GAME FROM SELECTED SLOT
function loadGameFromSlot(index) {

    const saveData = saveSlots[index];

    if (!saveData) {
        alert("This save slot is empty!");
        return;
    }


    // RESTORE PLAYER DATA
    localStorage.setItem("playerName", saveData.playerName);
    localStorage.setItem("playerCharacter", saveData.selectedCharacter);

    selectedCharacter = saveData.selectedCharacter;

    playerNameDisplay.textContent = saveData.playerName;
    playerNameInput.value = saveData.playerName;


    // RESTORE MONSTER TEAM
    playerTeam = JSON.parse(JSON.stringify(saveData.playerTeam));

    playerMonster = playerTeam[saveData.activeMonsterIndex];


    // RESTORE ENEMY
    enemyMonster = JSON.parse(JSON.stringify(saveData.enemyMonster));


    // RESTORE STAGE
    currentStage = saveData.currentStage;


    // RESTORE BATTLE VARIABLES
    isPlayerTurn = saveData.isPlayerTurn;
    playerGuard = saveData.playerGuard;
    parolCooldown = saveData.parolCooldown;


    // RESTORE SCREENS
    saveSlotsScreen.style.display = "none";

    document.body.classList.remove("save-slots-active");

    mainMenu.style.display = "none";
    characterSelection.style.display = "none";
    settingsScreen.style.display = "none";
    gameScreen.style.display = "block";

    battleMenuPanel.style.display = "none";

    document.body.classList.remove("character-selection-active");
    document.body.classList.add("battle-active");


    // RESTORE BATTLE STATE AND MUSIC
    if (saveData.battleStarted) {

        gameScreen.classList.add("battle-started");
        playBattleMusic();

    } else {

        gameScreen.classList.remove("battle-started");
        playMenuMusic();

    }


    // RESTORE MONSTER DISPLAYS
    updatePlayerMonsterUI();
    updateEnemyMonsterUI();
    updateMyMonstersUI();


    // RESTORE STAGE TITLE
    document.querySelector(".stage-header").textContent =
        "STAGE " + currentStage + ": " +
        getStageLocation(currentStage).toUpperCase();


    // RESTORE COOLDOWN DISPLAY
    ultimateCooldown.textContent =
        parolCooldown > 0
        ? "Cooldown: " + parolCooldown + " turns"
        : "";


    // CLOSE OTHER PANELS
    monsterPanel.style.display = "none";
    monsterInfoPanel.style.display = "none";
    inventoryPanel.style.display = "none";


    setSkillButtons(isPlayerTurn);

    showBattleMessage("Welcome back, " + saveData.playerName + "!");

}


/* =====================================================
   10. LEADERBOARD SYSTEM
===================================================== */

// RECORD PLAYER RESULT AFTER DEFEAT
function recordLeaderboardResult() {

    const playerName =
        (localStorage.getItem("playerName") || "Player").trim();

    const result = {

        playerName: playerName,
        monsterLevel: playerMonster.level,
        stage: currentStage,
        location: getStageLocation(currentStage),
        date: new Date().toLocaleDateString()

    };


    // FIND EXISTING PLAYER RECORD
    const existingIndex = leaderboardData.findIndex(function(entry) {
        return entry.playerName.toLowerCase() === playerName.toLowerCase();
    });


    if (existingIndex !== -1) {

        const oldRecord = leaderboardData[existingIndex];

        // KEEP THE BETTER SCORE
        if (
            result.stage < oldRecord.stage ||
            (
                result.stage === oldRecord.stage &&
                result.monsterLevel <= oldRecord.monsterLevel
            )
        ) {
            return;
        }

        leaderboardData.splice(existingIndex, 1);

    }


    // ADD NEW RESULT
    leaderboardData.push(result);


    // SORT HIGHEST STAGE FIRST
    leaderboardData.sort(function(a, b) {

        if (b.stage !== a.stage) {
            return b.stage - a.stage;
        }

        return b.monsterLevel - a.monsterLevel;

    });


    // KEEP TOP 10 ONLY
    leaderboardData = leaderboardData.slice(0, 10);


    // SAVE LEADERBOARD
    localStorage.setItem(
        leaderboardStorageKey,
        JSON.stringify(leaderboardData)
    );

}


// DISPLAY LEADERBOARD
function displayLeaderboard() {

    leaderboardList.innerHTML = "";

    if (leaderboardData.length === 0) {

        leaderboardList.textContent = "No scores recorded yet.";
        return;

    }


    leaderboardData.forEach(function(player, index) {

        const playerEntry = document.createElement("div");
        playerEntry.className = "leaderboard-entry";

        const rank = document.createElement("h3");
        rank.textContent = "#" + (index + 1);

        const playerInfo = document.createElement("div");
        playerInfo.className = "leaderboard-player-info";

        const name = document.createElement("strong");
        name.textContent = player.playerName;

        const details = document.createElement("p");

        details.textContent =
            "Level " + player.monsterLevel +
            " · Stage " + player.stage +
            ": " + player.location;

        const date = document.createElement("small");
        date.textContent = "Recorded: " + player.date;

        playerInfo.appendChild(name);
        playerInfo.appendChild(details);
        playerInfo.appendChild(date);


        const score = document.createElement("div");
        score.className = "leaderboard-score";

        const scoreNumber = document.createElement("strong");
        scoreNumber.textContent = player.stage;

        const scoreLabel = document.createElement("small");
        scoreLabel.textContent = "SCORE";

        score.appendChild(scoreNumber);
        score.appendChild(scoreLabel);


        playerEntry.appendChild(rank);
        playerEntry.appendChild(playerInfo);
        playerEntry.appendChild(score);

        leaderboardList.appendChild(playerEntry);

    });

}


/* =====================================================
   11. BATTLE ANIMATION SYSTEM
===================================================== */

// PLAY MONSTER ANIMATION
function playMonsterAnimation(
    spriteElement,
    monster,
    spriteName,
    animationClass,
    duration
) {

    return new Promise(function(resolve) {

        const monsterFolder = monster.sprite.substring(
            0,
            monster.sprite.lastIndexOf("/") + 1
        );

        const newSprite = monsterFolder + spriteName + ".png";


        // CHANGE MONSTER IMAGE
        spriteElement.src = newSprite;

        const monsterContainer = spriteElement.parentElement;


        // RESTART CSS ANIMATION
        monsterContainer.classList.remove(animationClass);

        void monsterContainer.offsetWidth;

        monsterContainer.classList.add(animationClass);


        setTimeout(function() {

            monsterContainer.classList.remove(animationClass);

            // RETURN TO IDLE IMAGE
            spriteElement.src = monster.sprite;

            resolve();

        }, duration);

    });

}


/* =====================================================
   12. BATTLE RESULT SYSTEM
===================================================== */

// SHOW BATTLE RESULT
function showBattleResult(result) {

    battleResult.style.display = "flex";

    victoryChoices.style.display = "none";
    defeatChoices.style.display = "none";


    if (result === "victory") {

        gameScreen.classList.add("victory-state");
        gameScreen.classList.remove("defeat-state");

        battleResultImage.src = "ASSETS/victory.png";

        battleResultMessage.textContent =
            "You defeated " + enemyMonster.name +
            "! Choose your reward.";

        victoryChoices.style.display = "flex";

    } else {

        gameScreen.classList.add("defeat-state");
        gameScreen.classList.remove("victory-state");

        battleResultImage.src = "ASSETS/defeat.png";

        battleResultMessage.textContent =
            "Your monster was defeated. Your adventure will restart.";

        recordLeaderboardResult();

        defeatChoices.style.display = "flex";

    }

}


/* =====================================================
   13. CAPTURE AND ABSORB SYSTEM
===================================================== */

// CAPTURE MONSTER
function captureMonster() {

    // CHECK IF TEAM IS FULL
    if (playerTeam.length >= 3) {

        battleResultMessage.textContent =
            "Your monster team is already full!";

        return;

    }


    // SAVE DEFEATED ENEMY TO PLAYER TEAM
    const capturedMonster = {

        ...enemyMonster,
        currentHp: enemyMonster.maxHp,
        exp: 0

    };

    playerTeam.push(capturedMonster);


    // KEEP TARSELA AS ACTIVE MONSTER
    playerMonster = playerTeam[0];


    // MOVE TO NEXT STAGE
    currentStage++;

    enemyMonster = createStageEnemy(currentStage);


    // UPDATE MONSTER DISPLAYS
    updatePlayerMonsterUI();
    updateEnemyMonsterUI();
    updateMyMonstersUI();


    // CLOSE VICTORY SCREEN
    battleResult.style.display = "none";
    victoryChoices.style.display = "none";

    gameScreen.classList.remove("victory-state");
    gameScreen.classList.remove("defeat-state");


    // RESET BATTLE VARIABLES
    isPlayerTurn = true;
    playerGuard = false;
    parolCooldown = 0;

    ultimateCooldown.textContent = "";


    // UPDATE STAGE TITLE
    document.querySelector(".stage-header").textContent =
        "STAGE " + currentStage + ": " +
        getStageLocation(currentStage).toUpperCase();


    // SHOW NEXT STAGE MESSAGE
    showBattleMessage(
        capturedMonster.name + " joined your team! " +
        "Stage " + currentStage + ": " +
        enemyMonster.name + " approaches!"
    );


    setSkillButtons(true);

}


// ABSORB DEFEATED MONSTER
function absorbMonster() {

    // GIVE EXP TO ACTIVE MONSTER
    playerMonster.exp += 50;

    let message = playerMonster.name + " gained 50 EXP!";


    // CHECK LEVEL UP
    if (
        playerMonster.exp >= expToLevelUp &&
        playerMonster.level < maxMonsterLevel
    ) {

        playerMonster.exp -= expToLevelUp;

        playerMonster.level++;

        playerMonster.maxHp += 5;
        playerMonster.attack += 2;
        playerMonster.defense += 1;

        playerMonster.currentHp += 5;

        message += " Level Up!";

    }


    // UPDATE MONSTER DISPLAY
    updatePlayerMonsterUI();
    updateMyMonstersUI();


    // MOVE TO NEXT STAGE
    currentStage++;

    enemyMonster = createStageEnemy(currentStage);

    updateEnemyMonsterUI();


    // CLOSE VICTORY SCREEN
    battleResult.style.display = "none";
    victoryChoices.style.display = "none";

    gameScreen.classList.remove("victory-state");
    gameScreen.classList.remove("defeat-state");


    // RESET BATTLE VARIABLES
    isPlayerTurn = true;
    playerGuard = false;
    parolCooldown = 0;

    ultimateCooldown.textContent = "";


    // UPDATE STAGE TITLE
    document.querySelector(".stage-header").textContent =
        "STAGE " + currentStage + ": " +
        getStageLocation(currentStage).toUpperCase();


    showBattleMessage(
        message + " Stage " + currentStage +
        ": " + enemyMonster.name + " approaches!"
    );


    setSkillButtons(true);

}


/* =====================================================
   14. DAMAGE CALCULATION
===================================================== */

// CALCULATE DAMAGE
function calculateDamage(attacker, defender, skill) {

    // CHECK IF ATTACK MISSES
    if (Math.random() < skill.missChance) {

        return {
            damage: 0,
            message: attacker.name + " missed!"
        };

    }


    // CALCULATE BASE DAMAGE
    let damage = attacker.attack * skill.power;


    // APPLY DEFENDER'S DEFENSE
    damage = damage - defender.defense;


    // MINIMUM DAMAGE IS 1
    damage = Math.max(1, damage);


    // CHECK CRITICAL HIT
    const isCritical = Math.random() < skill.critChance;

    if (isCritical) {
        damage = damage * 2;
    }


    // RANDOMIZE DAMAGE SLIGHTLY
    damage = Math.floor(damage * (0.9 + Math.random() * 0.2));


    return {
        damage: damage,
        message: isCritical ? "CRITICAL HIT!" : "Direct hit!"
    };

}


/* =====================================================
   15. PLAYER BATTLE SYSTEM
===================================================== */

// PLAYER ATTACK
async function playerUseSkill(skill, spriteName) {

    // CHECK PLAYER TURN
    if (!isPlayerTurn || enemyMonster.currentHp <= 0) {
        return;
    }


    // END PLAYER TURN
    isPlayerTurn = false;

    setSkillButtons(false);


    // GUARD SKILL
    if (skill.type === "guard") {

        showBattleMessage(
            playerMonster.name + " used " + skill.name + "!"
        );

        await playMonsterAnimation(
            playerMonsterSprite,
            playerMonster,
            "skill-3",
            "attack-animation",
            500
        );

        playerGuard = true;

    } else {

        // PAROL BURST COOLDOWN
        if (skill.name === "Parol Burst") {

            parolCooldown = 3;

            ultimateCooldown.textContent = "Cooldown: 3 turns";

        }


        // SHOW SKILL MESSAGE
        showBattleMessage(
            playerMonster.name + " is preparing " + skill.name + "!"
        );


        // DASH ANIMATION
        await playMonsterAnimation(
            playerMonsterSprite,
            playerMonster,
            "dash",
            "dash-forward",
            400
        );


        // CALCULATE DAMAGE
        const damageResult = calculateDamage(
            playerMonster,
            enemyMonster,
            skill
        );


        // SKILL ANIMATION
        await playMonsterAnimation(
            playerMonsterSprite,
            playerMonster,
            spriteName,
            "attack-animation",
            500
        );


        // APPLY DAMAGE
        enemyMonster.currentHp -= damageResult.damage;

        if (enemyMonster.currentHp < 0) {
            enemyMonster.currentHp = 0;
        }


        // UPDATE ENEMY DISPLAY
        updateEnemyMonsterUI();


        // SHOW DAMAGE MESSAGE
        showBattleMessage(
            skill.name + "! " +
            damageResult.message +
            " Damage: " + damageResult.damage
        );

    }


    // CHECK IF ENEMY IS DEFEATED
    if (enemyMonster.currentHp <= 0) {

        setSkillButtons(false);

        showBattleResult("victory");

        return;

    }


    // WAIT BEFORE ENEMY TURN
    await new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    });


    // ENEMY TURN
    await enemyTurn();


    // CHECK IF PLAYER IS STILL ALIVE
    if (playerMonster.currentHp <= 0) {
        return;
    }


    // RETURN TO PLAYER TURN
    isPlayerTurn = true;


    // REDUCE PAROL BURST COOLDOWN
    if (parolCooldown > 0) {
        parolCooldown--;
    }

    ultimateCooldown.textContent =
        parolCooldown > 0
        ? "Cooldown: " + parolCooldown + " turns"
        : "";


    // ENABLE AVAILABLE SKILLS
    setSkillButtons(true);

}


/* =====================================================
   16. ENEMY BATTLE SYSTEM
===================================================== */

// ENEMY TURN
async function enemyTurn() {

    if (
        enemyMonster.currentHp <= 0 ||
        playerMonster.currentHp <= 0
    ) {
        return;
    }


    let enemySkills;


    // DAGTWIG SKILLS
    if (enemyMonster.name === "Dagtwig") {

        enemySkills = [

            { name: "Twig Slash", power: 1, sprite: "skill-1" },
            { name: "Wooden Shot", power: 1.2, sprite: "skill-2" },
            { name: "Nature Spin", power: 1.5, sprite: "skill-3" },
            { name: "Forest Burst", power: 2, sprite: "skill-4" }

        ];

    }


    // HUSHUS SKILLS
    else if (enemyMonster.name === "Hushus") {

        enemySkills = [

            { name: "Howl", power: 1, sprite: "skill-1" },
            { name: "Throw Bone", power: 1.2, sprite: "skill-2" },
            { name: "Buff", power: 0, sprite: "skill-3" },
            { name: "Bite", power: 2, sprite: "skill-4" }

        ];

    }


    // THUNDILE SKILLS
    else if (enemyMonster.name === "Thundile") {

        enemySkills = [

            { name: "Thunder Claw", power: 1.2, sprite: "skill-1" },
            { name: "Lightning Shot", power: 1.5, sprite: "skill-2" },
            { name: "Static Spin", power: 1.7, sprite: "skill-3" },
            { name: "Thunderstorm Burst", power: 2.5, sprite: "skill-4" }

        ];

    }


    // SELECT RANDOM SKILL
    const randomIndex = Math.floor(Math.random() * enemySkills.length);

    const chosenSkill = enemySkills[randomIndex];


    showBattleMessage(
        enemyMonster.name + " is preparing " + chosenSkill.name + "!"
    );


    // ENEMY DASH ANIMATION
    await playMonsterAnimation(
        enemyMonsterSprite,
        enemyMonster,
        "dash",
        "dash-forward",
        400
    );


    // ENEMY SKILL DATA
    const enemySkillData = {

        name: chosenSkill.name,
        power: chosenSkill.power,
        missChance: 0.10,
        critChance: 0.10

    };


    // CALCULATE DAMAGE
    const damageResult = calculateDamage(
        enemyMonster,
        playerMonster,
        enemySkillData
    );


    // ENEMY ATTACK ANIMATION
    await playMonsterAnimation(
        enemyMonsterSprite,
        enemyMonster,
        chosenSkill.sprite,
        "attack-animation",
        500
    );


    // APPLY PLAYER GUARD
    if (playerGuard) {

        damageResult.damage =
            Math.floor(damageResult.damage * 0.5);

        playerGuard = false;

    }


    // APPLY DAMAGE
    playerMonster.currentHp -= damageResult.damage;

    if (playerMonster.currentHp < 0) {
        playerMonster.currentHp = 0;
    }


    // UPDATE PLAYER DISPLAY
    updatePlayerMonsterUI();


    // SHOW DAMAGE MESSAGE
    showBattleMessage(
        enemyMonster.name + " used " + chosenSkill.name + "! " +
        damageResult.message +
        " Damage: " + damageResult.damage
    );


    // CHECK IF PLAYER IS DEFEATED
    if (playerMonster.currentHp <= 0) {

        setSkillButtons(false);

        showBattleResult("defeat");

    }

}


/* =====================================================
   17. ADVENTURE RESET SYSTEM
===================================================== */

// RESET ADVENTURE
function resetAdventure() {

    // RESET PLAYER TEAM
    playerTeam = [
        {
            ...monsters.tarsela,
            currentHp: monsters.tarsela.maxHp,
            exp: 0
        }
    ];

    playerMonster = playerTeam[0];


    // RESET ENEMY
    enemyMonster = createStageEnemy(1);


    // RESET STAGE AND BATTLE VARIABLES
    currentStage = 1;

    isPlayerTurn = true;
    playerGuard = false;
    parolCooldown = 0;


    // RESET BATTLE SCREEN STATE
    gameScreen.classList.remove("battle-started");
    gameScreen.classList.remove("victory-state");
    gameScreen.classList.remove("defeat-state");


    // CLOSE BATTLE PANELS
    battleResult.style.display = "none";
    victoryChoices.style.display = "none";
    defeatChoices.style.display = "none";

    monsterPanel.style.display = "none";
    monsterInfoPanel.style.display = "none";
    inventoryPanel.style.display = "none";
    battleMenuPanel.style.display = "none";


    // RESET STAGE TITLE
    document.querySelector(".stage-header").textContent =
        "STAGE 1: DIVISORIA";


    // UPDATE DISPLAYS
    updatePlayerMonsterUI();
    updateEnemyMonsterUI();
    updateMyMonstersUI();


    // RESET COOLDOWN
    ultimateCooldown.textContent = "";

    setSkillButtons(true);

}


/* =====================================================
   18. SCREEN NAVIGATION AND EVENT LISTENERS
===================================================== */

// NEW GAME
newGameBtn.addEventListener("click", function() {

    playMenuMusic();

    mainMenu.style.display = "none";
    characterSelection.style.display = "block";

    document.body.classList.add("character-selection-active");


    // RESET CHARACTER SELECTION
    selectedCharacter = null;
    playerNameInput.value = "";


    // RESET PREVIOUS ADVENTURE
    resetAdventure();


    // RESET CHARACTER BUTTONS
    characterButtons.forEach(function(button) {
        button.textContent = "Select";
    });

    characterOptions.forEach(function(option) {
        option.classList.remove("selected");
    });

});


// BACK TO MAIN MENU FROM CHARACTER SELECTION
characterBackBtn.addEventListener("click", function() {

    characterSelection.style.display = "none";
    mainMenu.style.display = "block";

    document.body.classList.remove("character-selection-active");

});


// SELECT CHARACTER
characterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedCharacter = button.dataset.character;


        // RESET ALL CHARACTER BUTTONS
        characterButtons.forEach(function(otherButton) {
            otherButton.textContent = "Select";
        });

        characterOptions.forEach(function(option) {
            option.classList.remove("selected");
        });


        // HIGHLIGHT SELECTED CHARACTER
        button.textContent = "Selected";
        button.parentElement.classList.add("selected");

    });

});


// START ADVENTURE
startAdventureBtn.addEventListener("click", function() {

    const playerName = playerNameInput.value.trim();


    // CHECK PLAYER NAME
    if (playerName === "") {

        alert("Please enter your player name.");

        playerNameInput.focus();

        return;

    }


    // CHECK SELECTED CHARACTER
    if (selectedCharacter === null) {

        alert("Please select your character.");

        return;

    }


    // SAVE PLAYER DATA
    localStorage.setItem("playerName", playerName);
    localStorage.setItem("playerCharacter", selectedCharacter);


    // DISPLAY PLAYER NAME
    playerNameDisplay.textContent = playerName;


    // UPDATE MONSTER DISPLAYS
    updatePlayerMonsterUI();
    updateEnemyMonsterUI();


    // CHANGE SCREEN
    characterSelection.style.display = "none";
    battleMenuPanel.style.display = "none";
    gameScreen.style.display = "block";

    document.body.classList.remove("character-selection-active");
    document.body.classList.add("battle-active");

    gameScreen.classList.remove("battle-started");

    playMenuMusic();

});


// START BATTLE
startBattleBtn.addEventListener("click", function() {

    gameScreen.classList.add("battle-started");

    playBattleMusic();

});


// OPEN AND CLOSE BATTLE MENU
backBtn.addEventListener("click", function() {

    if (battleMenuPanel.style.display === "block") {

        battleMenuPanel.style.display = "none";

    } else {

        battleMenuPanel.style.display = "block";

    }

});


// RESUME BATTLE
resumeBtn.addEventListener("click", function() {

    battleMenuPanel.style.display = "none";

});



// OPEN SETTINGS FROM MAIN MENU
settingsBtn.addEventListener("click", function() {

    settingsReturnScreen = "main";

    mainMenu.style.display = "none";
    settingsScreen.style.display = "block";

    settingsBackBtn.textContent = "Back to Menu";

});


// OPEN SETTINGS FROM BATTLE
battleSettingsBtn.addEventListener("click", function() {

    settingsReturnScreen = "battle";

    gameScreen.style.display = "none";
    settingsScreen.style.display = "block";

    battleMenuPanel.style.display = "none";

    settingsBackBtn.textContent = "Back to Battle";

});


// BACK BUTTON FROM SETTINGS
settingsBackBtn.addEventListener("click", function() {

    settingsScreen.style.display = "none";

    howToPlayPanel.style.display = "none";

    if (settingsReturnScreen === "battle") {

        gameScreen.style.display = "block";

    } else {

        mainMenu.style.display = "block";

    }

});


// OPEN HOW TO PLAY
howToPlayBtn.addEventListener("click", function() {

    howToPlayPanel.style.display = "block";

});


// CLOSE HOW TO PLAY
closeHowToPlayBtn.addEventListener("click", function() {

    howToPlayPanel.style.display = "none";

});

// EXIT GAME TO MAIN MENU
exitGameBtn.addEventListener("click", function() {

    gameScreen.style.display = "none";
    settingsScreen.style.display = "none";
    mainMenu.style.display = "block";

    document.body.classList.remove("battle-active");

    battleMenuPanel.style.display = "none";

    playMenuMusic();

});


// CONTINUE BUTTON
continueBtn.addEventListener("click", function() {
    openSaveSlots("load");
});


// SAVE GAME BUTTON
saveGameBtn.addEventListener("click", function() {
    openSaveSlots("save");
});


// BACK BUTTON FROM SAVE SLOTS
saveSlotsBackBtn.addEventListener("click", function() {

    saveSlotsScreen.style.display = "none";

    document.body.classList.remove("save-slots-active");


    if (saveSlotsReturnScreen === "battle") {

        gameScreen.style.display = "block";
        battleMenuPanel.style.display = "block";

    } else {

        mainMenu.style.display = "block";

    }

});


// OPEN LEADERBOARD
leaderboardBtn.addEventListener("click", function() {

    mainMenu.style.display = "none";
    characterSelection.style.display = "none";
    gameScreen.style.display = "none";
    settingsScreen.style.display = "none";
    saveSlotsScreen.style.display = "none";

    document.body.classList.add("leaderboard-active");

    leaderboardScreen.style.display = "flex";

    displayLeaderboard();

});


// BACK TO MAIN MENU FROM LEADERBOARD
leaderboardBackBtn.addEventListener("click", function() {

    leaderboardScreen.style.display = "none";

    document.body.classList.remove("leaderboard-active");

    mainMenu.style.display = "block";

});


/* =====================================================
   19. MONSTER AND INVENTORY EVENT LISTENERS
===================================================== */

// OPEN AND CLOSE MY MONSTERS
monsterBtn.addEventListener("click", function() {

    updateMyMonstersUI();

    if (monsterPanel.style.display === "block") {

        monsterPanel.style.display = "none";

    } else {

        monsterPanel.style.display = "block";

    }

    monsterInfoPanel.style.display = "none";
    inventoryPanel.style.display = "none";

});


// CLOSE MY MONSTERS
closeMonsterPanel.addEventListener("click", function() {

    monsterPanel.style.display = "none";
    monsterInfoPanel.style.display = "none";

});


// CLOSE MONSTER INFORMATION
closeMonsterInfo.addEventListener("click", function() {

    monsterInfoPanel.style.display = "none";

});


// OPEN INVENTORY
itemsBtn.addEventListener("click", function() {

    monsterPanel.style.display = "none";
    monsterInfoPanel.style.display = "none";


    if (inventoryPanel.style.display === "block") {

        inventoryPanel.style.display = "none";

    } else {

        inventoryPanel.style.display = "block";

    }

});


// CLOSE INVENTORY
closeInventoryBtn.addEventListener("click", function() {

    inventoryPanel.style.display = "none";

});


/* =====================================================
   20. BATTLE BUTTON EVENT LISTENERS
===================================================== */

// SKILL 1
skill1Btn.addEventListener("click", function() {

    playerUseSkill(
        currentSkills.skill1,
        currentSkills.skill1.sprite
    );

});


// SKILL 2
skill2Btn.addEventListener("click", function() {

    playerUseSkill(
        currentSkills.skill2,
        currentSkills.skill2.sprite
    );

});


// SKILL 3
skill3Btn.addEventListener("click", function() {

    playerUseSkill(
        currentSkills.skill3,
        currentSkills.skill3.sprite
    );

});


// SKILL 4
skill4Btn.addEventListener("click", function() {

    if (parolCooldown > 0) {

        showBattleMessage(
            currentSkills.skill4.name + " is still on cooldown!"
        );

        return;

    }

    playerUseSkill(
        currentSkills.skill4,
        currentSkills.skill4.sprite
    );

});


// CAPTURE BUTTON
captureBtn.addEventListener("click", function() {
    captureMonster();
});


// ABSORB BUTTON
absorbBtn.addEventListener("click", function() {
    absorbMonster();
});


// RESTART ADVENTURE
restartBtn.addEventListener("click", function() {

    resetAdventure();

    showBattleMessage("Your adventure begins again!");

    playMenuMusic();

});
