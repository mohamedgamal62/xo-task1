let startBt = document.querySelectorAll(".backall .start")
console.log(startBt)
let backall = document.querySelector(".backall" )
let turn = "x"
let allBoxs = document.querySelectorAll(".boxs .box")
let array = Array.from(allBoxs)
let title = document.querySelector(".title")
let random = array[Math.floor(Math.random() * array.length )]
let text = document.querySelector(".fun .text")
let stop = true


function computer () {
        for (let i = 0 ; i < array.length ; i++) {
            array[i].addEventListener ("click" , (e) => {
                if (e.target.innerHTML !== "") {return}
                if (turn = "x") {
                    e.target.innerHTML = 'x'
                    title.innerHTML = "o"
                    winner()
                    let non = setTimeout(computerplay , 500)
                    if (stop === false) {
                        clearTimeout(non)
                    }

                    turn = 'o'
                    stop = true
                }
            })
        }
    }



function computerplay () {
    let emptyboxs = []
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i].innerHTML === ""){
            emptyboxs.push(array[i])
        }
    }
    let random = emptyboxs[Math.floor(Math.random() * emptyboxs.length )]
    random.innerHTML = "o"
    title.innerHTML = "x"
    winner()
    turn = "x"

}

startBt.forEach((e) => {
    e.addEventListener("click" , (el) => {
    backall.style.display = "none"
    if (el.currentTarget.dataset.num === "one"){
        computer()
    }
    if (el.currentTarget.dataset.num === "two"){
    allBoxs.forEach((el) => {
    el.onclick = function () {
        if (turn === "x" && el.innerHTML === "") {
            el.innerHTML = "x"
            turn = "o"
            title.innerHTML = "o"
        }else if (turn === "o" && el.innerHTML === "") {
            el.innerHTML = "o"
            turn = "x"
            title.innerHTML = "x"
        }
        winner()
    }
})
    }  
    })
})

function win (num1,num2,num3) {
    title.innerHTML = `${array[num1].innerHTML} Winner`
    text.innerHTML = `${array[num1].innerHTML} Winner`
    document.getElementById(`item`+num1).style.background = "#000"
    document.getElementById(`item`+num2).style.background = "#000"
    document.getElementById(`item`+num3).style.background = "#000"
    for (let i = 0 ; i< array.length ; i++) {
        array[i].classList.add("done")
    }
    pop()
    stop = false
    // setInterval(() => {title.innerHTML += '.'},1000)
}

function winner () {
    if (array[0].innerHTML === array[1].innerHTML && array[1].innerHTML === array[2].innerHTML && array[0].innerHTML !== "") {win(0,1,2)      
    }else if (array[3].innerHTML === array[4].innerHTML && array[4].innerHTML === array[5].innerHTML && array[3].innerHTML !== ""){ win(3,4,5)
    }else if (array[6].innerHTML === array[7].innerHTML && array[7].innerHTML === array[8].innerHTML && array[6].innerHTML !== ""){ win(6,7,8)
    }else if (array[0].innerHTML === array[3].innerHTML && array[3].innerHTML === array[6].innerHTML && array[0].innerHTML !== ""){ win(0,3,6)
    }else if (array[1].innerHTML === array[4].innerHTML && array[4].innerHTML === array[7].innerHTML && array[1].innerHTML !== ""){ win(1,4,7)
    }else if (array[2].innerHTML === array[5].innerHTML && array[5].innerHTML === array[8].innerHTML && array[2].innerHTML !== ""){ win(2,5,8)
    }else if (array[0].innerHTML === array[4].innerHTML && array[4].innerHTML === array[8].innerHTML && array[0].innerHTML !== ""){ win(0,4,8)
    }else if (array[2].innerHTML === array[4].innerHTML && array[4].innerHTML === array[6].innerHTML && array[2].innerHTML !== ""){ win(2,4,6)
    }
}


// reset.onclick = function () {
//     allBoxs.forEach((e) => {
//         e.innerHTML = ""
//         e.style.background = "#f44336"
//         title.innerHTML = `<div><span>X O</span> GAME</div>`
//         for (let i = 0 ; i< array.length ; i++) {
//         array[i].classList.remove("done")
//     }
//     })
// }

// console.log(array)
    // setTimeout(() => {
    //     allBoxs.forEach((e) => {
    //     e.innerHTML = ""
    //     e.style.background = "#f44336"
    //     title.innerHTML = `<div><span>X O</span> GAME</div>`
    //     for (let i = 0 ; i< array.length ; i++) {
    //     array[i].classList.remove("done")
    //     
    // }
    // })
    // },20000)
    // setTimeout(() => {fun.style.display = "flex"} , 1000)
let fun = document.querySelector(".fun")
let reset = document.querySelector(".reset")
let leave = document.querySelector(".leave")
let span = document.querySelector(".fun span")

    function pop () {
        fun.style.display = "flex"
        span.onclick = function () {fun.style.display = "none"  }
        reset.onclick = function () {
            fun.style.display = "none"
            allBoxs.forEach((e) => {
                e.innerHTML = ""
                e.style.background = "#f44336"
                title.innerHTML = `<div><span>X O</span> GAME</div>`
                for (let i = 0 ; i< array.length ; i++) {
                array[i].classList.remove("done")
            }
            })

        }
        leave.onclick = function () {location.reload()}
    }

let ball = document.querySelector(".ball")
ball.onclick = function ()  {
        fun.style.display = "flex"
        span.onclick = function () {fun.style.display = "none"  }
        reset.onclick = function () {
            fun.style.display = "none"
            allBoxs.forEach((e) => {
                e.innerHTML = ""
                e.style.background = "#f44336"
                title.innerHTML = `<div><span>X O</span>GAME</div>`
                for (let i = 0 ; i< array.length ; i++) {
                array[i].classList.remove("done")
            }
            })


        }
        leave.onclick = function () {location.reload()}
        text.innerHTML = "Tic Tac Toe"
}   