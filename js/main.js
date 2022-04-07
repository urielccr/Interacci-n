let taReview = document.getElementById('taReview');
let radiousLT = document.getElementById('radiousLT');
let radiousRT = document.getElementById('radiousRT');
let radiousLB = document.getElementById('radiousLB');
let radiousRB = document.getElementById('radiousRB')
let inputLT = document.getElementById('inputLT');
let inputLB = document.getElementById('inputLB');
let inputRB = document.getElementById('inputRB');
let inputRT = document.getElementById('inputRT');
let allRadious = document.getElementById('allRadious');
let widthBorder = document.getElementById('widthBorder');
let border1 = document.getElementById('border1');
let border2 = document.getElementById('border2');
let borderDotted = document.getElementById('borderDotted');
let bordersolid = document.getElementById('bordersolid');
let borderdashed = document.getElementById('borderdashed');
let borderdouble = document.getElementById('borderdouble');
let bordergroove = document.getElementById('bordergroove');
let borderridge = document.getElementById('borderridge');
let borderinset = document.getElementById('borderinset');
let borderoutset = document.getElementById('borderoutset');
let borderhidden = document.getElementById('borderhidden');
let bordernone = document.getElementById('bordernone');
let borderall = document.getElementById('borderall');
let bordertop = document.getElementById('bordertop');
let borderright = document.getElementById('borderright');
let borderBottom = document.getElementById('borderBottom');
let borderLeft = document.getElementById('borderLeft');


let borderColor = document.getElementById('borderColor');
let alphaBorder = document.getElementById('alphaBorder');
let rangv = document.getElementById('rangv');
let rangv2 = document.getElementById('rangv2');



var estilo = '';



radiousLT.oninput = function (e) 
{
    inputLT.value = radiousLT.value;

    if (allRadious.checked) {
        taReview.style.borderRadius = radiousLT.value + 'px';
        inputLB.value = radiousLT.value;
        inputRB.value = radiousLT.value;
        inputRT.value = radiousLT.value;
        radiousRT.value=radiousLT.value;
        radiousLB.value=radiousLT.value;
        radiousRB.value=radiousLT.value;

    }

    else {
        taReview.style.borderTopLeftRadius = radiousLT.value + 'px';
    }

};


inputLT.oninput= function(e)
{
     radiousLT.value=inputLT.value ;
     taReview.style.borderTopLeftRadius  = radiousLT.value + 'px';

};

radiousRT.oninput= function(e)
{
    inputRT.value = radiousRT.value;
    taReview.style.borderTopRightRadius = radiousRT.value + 'px';

};


inputRT.oninput= function(e)
{
     radiousRT.value=inputRT.value ;
    taReview.style.borderTopRightRadius = radiousRT.value + 'px';

};

radiousLB.oninput= function(e)
{
    inputLB.value = radiousLB.value;
    taReview.style.borderBottomLeftRadius = radiousLB.value + 'px';

};

inputLB.oninput= function(e)
{
     radiousLB.value=inputLB.value;
    taReview.style.borderBottomLeftRadius = radiousLB.value + 'px';

};

radiousRB.oninput= function(e)
{
    inputRB.value = radiousRB.value;
    taReview.style.borderBottomRightRadius = radiousRB.value + 'px';

};




allRadious.oninput = function (e) 
{
    if (!allRadious.checked) 
    {
        taReview.style.borderRadius = '0px 0px 0px';
        inputLB.value = 0;
        inputRB.value = 0;
        inputRT.value = 0;
        radiousRB.value=0;
        radiousLB.value=0;
        radiousRT.value=0;
        radiousLT.value=0;
    }
};

widthBorder.oninput=function(e)
{
    taReview.style.borderWidth=widthBorder.value + 'px';
    rangv.value=widthBorder.value;
    
};

rangv.oninput=function(e)
{
   
    widthBorder.value=rangv.value;
    taReview.style.borderWidth=widthBorder.value + 'px';
    
};


border1.onclick=function(e)
{
    taReview.style.borderWidth='1px';
    widthBorder.value=1;
    rangv.value=1;
};

border2.onclick=function(e)
{
    alphaBorder.value=100;
    taReview.style.opacity=100;
    
};

borderDotted.onclick=function(e)
{
    taReview.style.borderStyle='dotted';
    estilo = 'dotted';
};

bordersolid.onclick=function(e)
{
    taReview.style.borderStyle='solid';
    estilo = 'solid';

    
};
borderdashed.onclick=function(e)
{
    taReview.style.borderStyle='dashed';
    estilo = 'dashed';
};

borderdouble.onclick=function(e)
{
    taReview.style.borderStyle='double';
    estilo = 'double';
};

bordergroove.onclick=function(e)
{
    taReview.style.borderStyle='groove';
    estilo = 'groove';
};
borderridge.onclick=function(e)
{
    taReview.style.borderStyle='ridge';
    estilo = 'ridge';
};
borderinset.onclick=function(e)
{
    taReview.style.borderStyle='inset';
    estilo = 'inset';
};
borderoutset.onclick=function(e)
{
    taReview.style.borderStyle='outset';
    estilo = 'outset';
};
borderhidden.onclick=function(e)
{
    taReview.style.borderStyle='hidden';
    estilo = 'hidden';

};
bordernone.onclick=function(e)
{
    taReview.style.borderStyle='none';
    estilo = 'none';
};

borderall.onclick=function(e)
{
    console.log(estilo);
    taReview.style.borderStyle=estilo;

};

bordertop.onclick=function(e)
{
    taReview.style.borderStyle='hidden';
    taReview.style.borderTopStyle = estilo;
   
};

borderright.onclick=function(e)
{
    taReview.style.borderStyle='hidden';
    taReview.style.borderRightStyle = estilo;
};
borderBottom.onclick=function(e)
{
    taReview.style.borderStyle='hidden';
    taReview.style.borderBottomStyle = estilo;
};
borderLeft.onclick=function(e)
{
    taReview.style.borderStyle='hidden';
    taReview.style.borderLeftStyle = estilo;
};

borderColor.oninput=function(e)

{
    
    taReview.style.borderColor=borderColor.value;
    
};

alphaBorder.oninput=function(e)
{
    taReview.style.opacity = alphaBorder.value / 100;
  
    rangv2.value=alphaBorder.value;
    rangv2.value = alphaBorder.value / 100;

};
rangv2.oninput=function(e)
{
   
    alphaBorder.value=rangv2.value;
    taReview.style.opacity = alphaBorder.value / 100;


};