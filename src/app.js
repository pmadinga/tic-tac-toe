const scoreBoard = document.getElementById('scoreBoard');
const playerOneScore = document.createElement('h2');
const playerTwoScore = document.createElement('h2');
playerOneScore.innerHTML = 'Player 1 : 0';
playerTwoScore.innerHTML = '0 : Player 2';
scoreBoard.appendChild(playerOneScore);
scoreBoard.appendChild(playerTwoScore);

(() => {
	// 
	// __________________________
    
	//get button values
	document.querySelector('.gridContainer').addEventListener('click', (e) => {
		handleClick(e.target); 
	});
})();

let allBlocks = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const winningBlocks = {
	one: [0, 1, 2],
	two: [3, 4, 5],
	three: [6, 7, 8],
	four: [0, 3, 6],
	five: [1, 4, 7], 
	six: [2, 5, 8],
	seven: [2, 4, 6],
	eight: [0, 4, 8]
};

const players = {
	player1: {
		clickedBlocks: [],
		isPlaying: true,
		wins: 0,
		id: 'one',
        icon: 'x',
        winner: 'false'
	},
	player2: {
        clickedBlocks: [],
        isPlaying: false,
        wins: 0,
        id: 'two',
        icon: 'o',
        winner: 'false'
    }
};

const handleClick = blockProperties => {
    blockProperties.disabled = true;

    // integify 🔥🔥 the block index
    const clickedIndex = Number.parseInt(blockProperties.value);
    
    // remove the clicked index from allBlocks
    removeIndex(clickedIndex);
    
    // switch between the players
    players.player1.isPlaying ? 
    handlePlayer(players.player1, clickedIndex, blockProperties) : 
    handlePlayer(players.player2, clickedIndex, blockProperties);
};

const removeIndex = clickedIndex =>{
    
    if(allBlocks.indexOf(clickedIndex) > -1){
        return allBlocks.splice(allBlocks.indexOf(clickedIndex), 1);
    }
    
};
const handlePlayer = (player, index, blockProperties) =>{
    if(player.id === 'one'){
        // invert isPlaying state
        players.player1.isPlaying = !players.player1.isPlaying;
        players.player2.isPlaying = !players.player2.isPlaying;
        
        // append the clicked index to each players array
        players.player1.clickedBlocks.push(index);
        
        handlerPlayerIcon(blockProperties, players.player1.icon);
        if (players.player1.clickedBlocks.length >= 3) {
            handleWinner(players.player1.clickedBlocks);
        }
    }else{
        // invert isPlaying state
        players.player1.isPlaying = !players.player1.isPlaying;
        players.player2.isPlaying = !players.player2.isPlaying;
        
        // append the clicked index to each players array
        players.player2.clickedBlocks.push(index);
        
        handlerPlayerIcon(blockProperties, players.player2.icon); 
        if (players.player2.clickedBlocks.length >= 3) {
            handleWinner(players.player2.clickedBlocks);
        }
    }
    // console.log(({player}));

    // console.log(`Player 1 ${players. player1.isPlaying}\nPlayer 2 ${players. player2.isPlaying}`)
};

const handlerPlayerIcon = (block, icon) =>{
    block.innerText = icon;
};

const handleWinner = playerClickedBlock =>{
    
    for (const arr in winningBlocks) {
            const result = winningBlocks[arr].filter(match => playerClickedBlock.includes(match));
            if (result === playerClickedBlock) {
                console.log('sjot');
            }

    }
};

const resetAllBlock = () =>{
    allBlocks = [0, 1, 2, 3, 4, 5, 6, 7, 8];
};