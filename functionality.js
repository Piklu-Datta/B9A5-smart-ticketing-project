const buttonArr=document.getElementsByClassName('buttonn');
for(const btn of buttonArr)
{
    btn.addEventListener("click",function(e){
        const count=document.getElementById('count-id').innerText;
       var c=getText(count)
        c+=1;
        if(c>4) {
            return;
        }
        e.target.style.backgroundColor="#07D116";
        e.target.style.color="white";
        const seat=document.getElementById('seat-count').innerText;
        var seatInt=getText(seat);
        document.getElementById('seat-count').innerText=seatInt-1;

        document.getElementById('count-id').innerText=c;
       
        const p1=document.createElement("p");
        const p2=document.createElement("p");
        const p3=document.createElement("p");
        p1.innerText=btn.innerText;
        p2.innerText="Economoy";
        p3.innerText="550";
        const addContainer = document.getElementById("add-container");
        addContainer.appendChild(p1);
        addContainer.appendChild(p2);
        addContainer.appendChild(p3);
        //addContainer.appendChild(document.createElement("br"));
       var totalsum=0;
        const totalcostElement = document.getElementById('total-cost');
        const sum = toTalsend(totalcostElement.innerText);
        
        totalcostElement.innerText=totalsum+sum;
        updateGrandTotal();
        totalsum=sum;
        e.target.setAttribute('disabled',false);
    })
}

function updateGrandTotal(value)
{
    const totalcostElement = document.getElementById('total-cost').innerText;
    if(value==undefined)
    {
        
        document.getElementById('grand-total').innerText=totalcostElement;
    }
    else{
        const test=document.getElementById('input-field').value;
        if(test==='NEW50')
        {
            const bonus=totalcostElement*0.15;
            document.getElementById('grand-total').innerText=totalcostElement-bonus;
            inputfieldHide();
        }
        else if(test==='Couple 20')
        {
            const bonus=totalcostElement*0.2;
            document.getElementById('grand-total').innerText=totalcostElement-bonus;
            inputfieldHide();
        }
      
    }
  
}


function getText(text)
{
   
        const c=parseInt(text);
        return c;
}
function toTalsend(text)
{
    var cost=getText(text);
    cost+=parseInt(550);
    return cost;
}
function inputfieldHide()
{
    var inputField = document.getElementById('label-hide');
    inputField.style.display = "none";
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

//   function bodyHide()
// {
//     var inputField = document.getElementById('body-hidden');
//     inputField.style.display = "none";
// }