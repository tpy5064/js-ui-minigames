let chessBoard = document.getElementById("board");
let isWhite = false;

boardSetUp();
pieceSetUp();
function boardSetUp() {
  let counter = 1;
  for (let i = 0; i < 64; i++) {
    if (i % 8 == 0) counter++;
    let square = document.createElement("div");
    if (counter % 2 == 0) {
      if (i % 2 == 0) {
        square.classList.add("light-square");
        chessBoard.appendChild(square);
      } else {
        square.classList.add("dark-square");
        chessBoard.appendChild(square);
      }
    } else {
      if (i % 2 == 0) {
        square.classList.add("dark-square");
        chessBoard.appendChild(square);
      } else {
        square.classList.add("light-square");
        chessBoard.appendChild(square);
      }
    }
  }
}

function pieceSetUp() {
  if (isWhite) {
    for (let i = 48; i < 56; i++) {
      placePiece(i, "assets/whitePieces/white-pawn.png", "white", "pawn");
    }
    placePiece(56, "assets/whitePieces/white-rook.png", "white", "rook");
    placePiece(63, "assets/whitePieces/white-rook.png", "white", "rook");
    placePiece(57, "assets/whitePieces/white-knight.png", "white", "knight");
    placePiece(62, "assets/whitePieces/white-knight.png", "white", "knight");
    placePiece(58, "assets/whitePieces/white-bishop.png", "white", "bishop");
    placePiece(61, "assets/whitePieces/white-bishop.png", "white", "bishop");
    placePiece(59, "assets/whitePieces/white-queen.png", "white", "queen");
    placePiece(60, "assets/whitePieces/white-king.png", "white", "king");

    for (let i = 8; i < 16; i++) {
      placePiece(i, "assets/blackPieces/black-pawn.png", "black", "pawn");
    }
    placePiece(0, "assets/blackPieces/black-rook.png", "black", "rook");
    placePiece(7, "assets/blackPieces/black-rook.png", "black", "rook");
    placePiece(1, "assets/blackPieces/black-knight.png", "black", "knight");
    placePiece(6, "assets/blackPieces/black-knight.png", "black", "knight");
    placePiece(2, "assets/blackPieces/black-bishop.png", "black", "bishop");
    placePiece(5, "assets/blackPieces/black-bishop.png", "black", "bishop");
    placePiece(3, "assets/blackPieces/black-queen.png", "black", "queen");
    placePiece(4, "assets/blackPieces/black-king.png", "black", "king");
  } else {
    for (let i = 48; i < 56; i++) {
        placePiece(i, "assets/blackPieces/black-pawn.png", "black", "pawn");
    }
    placePiece(56, "assets/blackPieces/black-rook.png", "black", "rook");
    placePiece(63, "assets/blackPieces/black-rook.png", "black", "rook");
    placePiece(57, "assets/blackPieces/black-knight.png", "black", "knight");
    placePiece(62, "assets/blackPieces/black-knight.png", "black", "knight");
    placePiece(58, "assets/blackPieces/black-bishop.png", "black", "bishop");
    placePiece(61, "assets/blackPieces/black-bishop.png", "black", "bishop");
    placePiece(60, "assets/blackPieces/black-queen.png", "black", "queen");
    placePiece(59, "assets/blackPieces/black-king.png", "black", "king");

    for (let i = 8; i < 16; i++) {
      placePiece(i, "assets/whitePieces/white-pawn.png", "white", "pawn");
    }
    placePiece(0, "assets/whitePieces/white-rook.png", "white", "rook");
    placePiece(7, "assets/whitePieces/white-rook.png", "white", "rook");
    placePiece(1, "assets/whitePieces/white-knight.png", "white", "knight");
    placePiece(6, "assets/whitePieces/white-knight.png", "white", "knight");
    placePiece(2, "assets/whitePieces/white-bishop.png", "white", "bishop");
    placePiece(5, "assets/whitePieces/white-bishop.png", "white", "bishop");
    placePiece(4, "assets/whitePieces/white-queen.png", "white", "queen");
    placePiece(3, "assets/whitePieces/white-king.png", "white", "king");
  }
}

function placePiece(index, pieceSrc, color, pieceName) {
  let piece = document.createElement("img");
  piece.src = pieceSrc;
  piece.classList.add(`${color}-${pieceName}`, `${color}-piece`, `chess-piece`);
  chessBoard.children[index].appendChild(piece);
}
