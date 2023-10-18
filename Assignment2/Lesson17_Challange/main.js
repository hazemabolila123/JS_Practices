let title = "Elzero", description = "Elzero Web School", date = "15/8";
let elemnt = `
<div class= "card">
    <h3>  Hello ${title} </h3>
    <p> ${description} </p>
    <span> ${date} </span>
</div> 
`;


let repeating = elemnt.repeat(4);

document.write(repeating);


