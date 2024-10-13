const displayContent=(content)=>{
    output.value+=content
}

const showResult=()=>{
try{
    output.value = eval(output.value)

}
catch{
    output.value=""
    output.placeholder="Invalid Expression"
}
}
const clearAll=()=>{
    output.value=""
    output.placeholder="0"
}
const deleteoneItem=()=>{
        output.value=output.value.slice(0,-1)
}
const off=()=>{
    output.placeholder=""
    output.value=""
}