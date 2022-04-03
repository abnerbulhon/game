const velha = {
    board: ['','','','','','','','','',''],
    simbol : {
        options: ['X','O'],
        turn_index:0,
        change: function(){
            this.turn_index = (this.turn_index === 0? 1: 0);
        }
    },
    container_element : null,
    gameover: false,
    winnin_sequences:[
        [0,1,2]
        [3,4,5]
        [0,3,6]
        [0,4,8]
        [2,4,6]
        [6,7,8]
        [1,4,7]
        [2,5,8]

    ],

    init : function (container){
        this.container_element = container;
    },

    make_play: function(position){
        if(this.gameover)return false;
        if(this.board[position] ===''){
            this.board[position] = this.simbols.options[this.simbols.turn_index];
            this.draw();
            let winning_sequences_index = this.check_winning_sequences(this.simbols.options);
            if(winning_sequences_index>=0){
                this.game_is_over();
            }else{
                this.simbols.change();
            }
            return true;
        }else{
            return false;
        }
    },

game_is_over: function(){
this.gameover = true;
console.log("GAME OVER");
},

check_winning_sequences: function (position){
    for(i in this.winnin_sequences){
        if(this.board [this.winnin_sequences[i][0]]==simbol &&
            this.board [this.winnin_sequences[i][1]]==simbol &&
            this.board [this.winnin_sequences[i][2]]==simbol){
                console.log('Sequencia vencedora: '+i);
                return i;
           
            }

    };
    return -1;
},
    draw: function(){
        let content = '';
        for( i in this.board){
            content += '<div>' + this.board[i] + '</div>' 
        }
        this.container_element.innerHTML = content;
    }
};