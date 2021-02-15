//creating simple physics
let ww = 400, wh = 600
let w = 10, h = 15
let a = 40
let scale = 1
let hi = -1, hj = -1
let si = hi, sj = hj

//let the first move is always red's
let isRed = true

let board = new Array(w)
function setup(){
    let renderer = createCanvas(ww, wh)
    renderer.parent("canvas")


    //filling up the board with cells
    for (let i=0; i<h;i++){
        board[i] =  new Array(h)
        for(let j=0; j<w;j++){
            board[i][j] = new Cell(i,j)
        }
    }
}

function draw(){
    background(25, 35, 45)
    // background(200,0,0)

    hi = int(mouseY/a)
    hj = int(mouseX/a)

    //drawing the board
    for(let i=0;i<h;i++){
        for(let j=0;j<w;j++){
            push()
            noFill()
            stroke(25)
            strokeWeight(6)
            rect(j*a,i*a,a+3,a+3)
            pop()
        }
    }
    for(let i=0;i<h;i++){
        for(let j=0;j<w;j++){
            
            if(hi>=0 && hi<=h && hj>=0 && hj<=w){
                push()
                stroke(25, 125, 155, 20)
                strokeWeight(3)
                noFill()
                rect(hj*a,hi*a,a,a)
                pop()
            }
            push()
            noFill()
            stroke(233)
            rect(j*a,i*a,a,a)
            pop()

            //rendering the elememts on the board
            board[i][j].show()
             
        }
    }
}

function mouseClicked(){

    si = hi
    sj = hj
    if(board[si][sj].onTap(isRed))
        isRed?isRed=false:isRed=true
    // print("" + si + "," + sj)
}