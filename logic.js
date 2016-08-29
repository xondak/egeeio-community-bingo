			rowa = {value: 0}, rowb = {value: 0}, rowc = {value: 1}, rowd = {value: 0}, rowe = {value: 0};

			colOne = {value: 0}, colTwo = {value: 0}, colThree = {value: 1}, colFour = {value: 0}, colFive = {value: 0};
			
			horOne = {value: 1}, horTwo = {value: 1}, center = true;
			
			
			
			// This function is the entire game loop, upon checking a tile, the tile sends it's state alone with it's coordinates through
			// function arguments. The logic here checks if it needs to add or subtract a point from each row, column, and diagonal square.
			function logicRun(modifier, rowAdd, colAdd, diagAdd){
				if (modifier.checked) {
					rowAdd.value++;
					colAdd.value++;
					
					// Special case for free space
					if (diagAdd === true) {
						horOne.value++;
						horTwo.value++;
					}

					// If it's not the free space, do your normal thing.
					else {
						diagAdd.value++;
					}

					// These nested if statements detect bingos.
					if (rowAdd.value === 5) { // Searches for a winning ROW
						if (rowa.value === 5) {
							conviction = "a";
							winning = "Bingo on Row A";
						}
						if (rowb.value === 5) {
							conviction = "b";
							winning = "Bingo on Row B";
						}
						if (rowc.value === 5) {
							conviction = "c";
							winning = "Bingo on Row C";
						}
						if (rowd.value === 5) {
							conviction = "d";
							winning = "Bingo on Row D";
						}
						if (rowe.value === 5) {
							conviction = "e";
							winning = "Bingo on Row E";
						}
						
						winState(conviction);

					}
					if (colAdd.value === 5){ // Searches for a winning COLUMN
						if (colOne.value === 5) {
							conviction = "one";
							winning = "Bingo on Column 1";
						}
						if (colTwo.value === 5) {
							conviction = "two";
							winning = "Bingo on Column 2";
						}
						if (colThree.value === 5) {
							conviction = "three";
							winning = "Bingo on Column 3";
						}
						if (colFour.value === 5) {
							conviction = "four";
							winning = "Bingo on Column 4";
						}
						if (colFive.value === 5) {
							conviction = "five";
							winning = "Bingo on Column 5";
						}
						
						winState(conviction);
					}
					
					if (diagAdd.value === 5 || diagAdd === true){ // Detects a diagonal win (and a free space win if someone feels like being a fucking contrarian)
						if (horOne.value === 5) {
							winning = "Bingo on the Backslash";
							conviction = "h-1";
							winState(conviction);
						}
						if (horTwo.value === 5) {
							winning = "Bingo on the Forwardslash";
							conviction = "h-2";
							winState(conviction);
						}

					}
					
				}
				
				else {
					rowAdd.value--;
					colAdd.value--;
					
					// Special case for free space
					if (diagAdd === true) {
						horOne.value--;
						horTwo.value--;
					}
					
					// If not free space, subtract as normal.
					else{
						diagAdd.value--;
					}
				}
			}
			
			function winState(conviction) { // Takes arguments from detection logic and adds a new class that is styled with a background color
				highlight = document.getElementsByClassName(conviction);

				var i;
				for (i = 0; i < 5; i++) {
					highlight[i].className += " win-tile";
					setTimeout('', 800);
				}
				
				//window.confirm(winning);
			}
