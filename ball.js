class Ball{
    constructor(i,j,isRed){
        this.i = i
        this.j = j
        this.isRed = isRed
    }
    show(){
        push()
        fill(200,0,0)
        noStroke()
        circle(a*this.i + 15 , a*this.j + 15, 30)
        pop()
    }
}