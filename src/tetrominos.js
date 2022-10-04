export const TETROMINOS = {
  0 : {
    shape: [[0]],
    color: '0,0,0'
  },
//Block I
  I : {
    shape: [[0,'I',0,0],
            [0,'I',0,0],
            [0,'I',0,0],
            [0,'I',0,0]],
    color: '80, 227, 230'
  },
//Block J = Block L but color different and inverted
  J : {
    shape: [[0,'J',0],
            [0,'J',0],
            ['J','J',0]],
    color: '223, 173, 36'
  },

  L : {
    shape: [[0,'L',0],
            [0,'L',0],
            [0,'L','L']],
    color: '132,61,198'
  },
//Block O
  O : {
    shape: [['O', 'O'],
            ['O', 'O']],
    color: '223, 217, 36'
  },
//Block S
  S : {
    shape: [[0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]],
    color: '48, 217, 56'
  },
//Block  T
  T : {
    shape: [[0,0,0],
            ['T','T','T'],
            [0,'T',0]],
    color: '132, 61, 198'
  },

  Z : {
    shape: [['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]],
    color: '227, 78, 78'
  },
};

export const randomTetromino = () => {
  const tetrominos = 'IJLOSTZ'
  const randTetromino =
  tetrominos[Math.floor(Math.random()*tetrominos.lenght)];
  return TETROMINOS[randTetromino];
};
