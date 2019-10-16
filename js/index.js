function swapTiles(cell1,cell2) {
    let temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  
  function shuffle() {
    //On utilise des boucles pour accéder à chaque cellule de la grille 3x3
  for (let row=1;row<=3;row++) { // Chaque ligne de la grille 3x3
     for (let column=1;column<=3;column++) { // Chaque colonne de la grille 3x3
      let randomRow=Math.floor(Math.random()*3 + 1); // Choisis une ligne aléatoire entre les 3 possible
      let randomColumn=Math.floor(Math.random()*3 + 1); // Choisis une colonne aléatoire entre les 3 possible
      swapTiles("cell"+row+column,"cell"+randomRow+randomColumn); // Mélange et échange la place des différentes cellules
    } 
  } 
  }
  
  function clickTile(row,column) {
    let cell = document.getElementById("cell"+row+column);
    let tile = cell.className;
    if (tile!="tile9") {
        // Check si la cellule blanche est sur la droite
         if (column<3) {
           if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }
         // Check si la cellule blanche est sur la gauche
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }
         // Check si la cellule blanche est au dessus
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
         // Check si la cellule blanche est en dessous
         if (row<3) {
           if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }
    
  }