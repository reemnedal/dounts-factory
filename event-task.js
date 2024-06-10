
function mainFunction(){


    let form= document.getElementById("form-id");
    
    
    let username = form.username.value;
    let numberAge = form.number.value;
    let genderr = form.genderr.value;
    let oderType = form.oderType.value;
    let hotCold=form.hotCold.value;
    
    
    
    // console.log(username);
    // console.log(numberAge);
    // console.log(genderr);
    // console.log(oderType);
    // console.log(hotCold);
    
    let arrayData=[username,numberAge,genderr,oderType,hotCold];
    
    
    let sectionData=document.getElementById("orderData");
    sectionData.style.height=500;
    sectionData.style.backgroundColor="#809bd6";
    let paragraphe=document.createElement("p");
    paragraphe.style.backgroundColor="#809bd6";
    let pText=document.createTextNode("Order Details")
    paragraphe.appendChild(pText);
    sectionData.appendChild(paragraphe);
    sectionData.style.padding=10;
    sectionData.style.margin=50;
    sectionData.style.fontSize=50;
    let text=document.createTextNode(arrayData);
    
    
    sectionData.appendChild(text);
    
    
    
    
    
    return false;   //prevent load html
    
    
    
    
    }
    
    
    
    
    