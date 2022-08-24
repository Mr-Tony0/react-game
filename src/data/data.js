import render from '../render/render'
const data = {
    square:[
        
    ]
}
for(let i = 0; i<9; i++){
    let renderSquare = {
        id:i,
        content: null
    }
    data.square.push(renderSquare);
}

export let clickSquare = (value, id) => {
    let a = data.square.map((element) => {
        if(id == element.id ){
            element.content = value;
        }
    })
    render(data);
}
export default data;