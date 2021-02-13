class Cell{
   constructor(i,j){
       this.i = i
       this.j = j
       this.n = 0   //number of balls inside
       this.isRed = true       //is the ball red in color
 //      this.isFilled = false    //whether the cell is filled with balls
   }

   onTap(isRed){
       if(this.n==0 || this.n>0 && this.isRed == isRed)
       {
           this.addBall(isRed)
           return true
       }
       return false
   }

   addBall(isRed){
    this.isRed = isRed
    let color = this.isRed? "red" : "green" 
       //on corners
       if((this.i==0 && this.j==0 || this.i==0 && this.j==w-1 || this.i==h-1 && this.j == 0 || this.i == h-1 && this.j == w-1) && this.n==1)
       {
        this.ballPopped()
       }
       //on edges
       if((this.i==0 || this.i==h-1 || this.j==0 || this.j==w-1) && this.n==2)
       {
        this.ballPopped()
       }
       //on rest of the board
       if(this.n==3)
       {
           this.ballPopped()
       }
       print("a "+color+" ball added at " + this.i + "," + this.j)
       this.n+=1
       this.isRed = isRed
   }

   ballPopped(){


       //At the corners
       if(this.i==0 && this.j==0)
        {
            this.n-=1
            board[this.i][this.j+1].addBall(this.isRed)
            board[this.i+1][this.j].addBall(this.isRed)
        }
        else if(this.i==0 && this.j==w-1)
        {
            this.n-=1
            board[this.i][this.j-1].addBall(this.isRed)
            board[this.i+1][this.j].addBall(this.isRed)
        }
        else if(this.i==h-1 && this.j== 0)
        {
            this.n-=1
            board[this.i][this.j+1].addBall(this.isRed)
            board[this.i-1][this.j].addBall(this.isRed)
        }
        else if(this.i==h-1 && this.j== w-1)
        {
            this.n-=1
            board[this.i][this.j-1].addBall(this.isRed)
            board[this.i-1][this.j].addBall(this.isRed)
        }

       //At the edges
       else if(this.i==0){
            this.n-=2
            board[this.i][this.j+1].addBall(this.isRed)
            board[this.i][this.j-1].addBall(this.isRed)
            board[this.i+1][this.j].addBall(this.isRed)

       }
       else if(this.j==0){
            this.n-=2
            board[this.i][this.j+1].addBall(this.isRed)
            board[this.i-1][this.j].addBall(this.isRed)
            board[this.i+1][this.j].addBall(this.isRed)
       }
       else if(this.i==h-1){
        this.n-=2
        board[this.i][this.j+1].addBall(this.isRed)
        board[this.i][this.j-1].addBall(this.isRed)
        board[this.i-1][this.j].addBall(this.isRed)
       }
       else if(this.j==w-1){
        this.n-=2
        board[this.i][this.j-1].addBall(this.isRed)
        board[this.i-1][this.j].addBall(this.isRed)
        board[this.i+1][this.j].addBall(this.isRed)

       }
        //Rest of the board
       else{
        this.n-=3
        board[this.i][this.j-1].addBall(this.isRed)
        board[this.i-1][this.j].addBall(this.isRed)
        board[this.i+1][this.j].addBall(this.isRed)
        board[this.i][this.j+1].addBall(this.isRed)
        // this.moveBall(this.i, this.j, this.i, this.j-1, this.isRed)
        // this.moveBall(this.i, this.j, this.i-1, this.j, this.isRed)
        // this.moveBall(this.i, this.j, this.i, this.j+1, this.isRed)
       }

   }

//    moveBall(i1, j1, i2, j2, isRed){
//        i1 = lerp(i1, i2, 0.1)
//        j1 = lerp(j1, j2, 0.1)
//        push()
//         if(isRed){
//             fill(192, 57, 43)
//         }
//         else{
//             fill(39, 174, 96)
//         }
//         noStroke()
//         circle(a*j1+20, a*i1+20, 30)
//         pop()
//         // push()
//         // noStroke()
//         // fill(255)
//         // textSize(16)
//         // text(this.n,a*this.j+15, a*this.i+25)
//         // pop()

        
//    }

   show(){
       if(this.n>0){
        push()
        if(this.isRed){
            fill(192, 57, 43)
        }
        else{
            fill(39, 174, 96)
        }
        noStroke()
        circle(a*this.j+20, a*this.i+20, 24)
        pop()
        push()
        noStroke()
        fill(255)
        textSize(16)
        text(this.n,a*this.j+15, a*this.i+25)
        pop()
       }
       else{
           return
       }
   }
}