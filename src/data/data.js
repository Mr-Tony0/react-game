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
let value = '0'
export let clickSquare = (id) => {
    let addValue = data.square.map((element) => {
        
        if(id === element.id && element.content === null ){
            if(value === 'x'){
                value ='0';
                element.content = value;
            }else{
                value ='x';
                element.content = value; 
            }
           
        }
        return element;
    })
    console.log(addValue);
    render(data);
}
export default data;