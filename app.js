
document.getElementById("b1").addEventListener("click", function()
{
    document.getElementById("b2").style.visibility = 'hidden';
    document.getElementById("b3").style.visibility = 'hidden';
    document.getElementById("b4").style.visibility = 'hidden';
    if(document.getElementById("history").style.display=== 'none')
      {
        document.getElementById("history").style.display = 'block';
      }
      else
      {
        document.getElementById("history").style.display ===  'none';
      }
}


);
document.getElementById("b2").addEventListener("click", function()
{
    document.getElementById("b1").style.visibility = 'hidden';
    document.getElementById("b3").style.visibility = 'hidden';
    document.getElementById("b4").style.visibility = 'hidden';
    if(document.getElementById("tours").style.display=== 'none')
      {
        document.getElementById("tours").style.display = 'block';
      }
      else
      {
        document.getElementById("tours").style.display ===  'none';
      }
}


);
document.getElementById("b3").addEventListener("click", function()
{
    document.getElementById("b1").style.visibility = 'hidden';
    document.getElementById("b2").style.visibility = 'hidden';
    document.getElementById("b4").style.visibility = 'hidden';
    if(document.getElementById("albums").style.display=== 'none')
      {
        document.getElementById("albums").style.display = 'block';
      }
      else
      {
        document.getElementById("albums").style.display ===  'none';
      }
}


);
document.getElementById("b4").addEventListener("click", function()
{
    document.getElementById("b1").style.visibility = 'hidden';
    document.getElementById("b2").style.visibility = 'hidden';
    document.getElementById("b3").style.visibility = 'hidden';
    if(document.getElementById("contact").style.display=== 'none')
      {
        document.getElementById("contact").style.display = 'block';
      }
      else
      {
        document.getElementById("contact").style.display ===  'none';
      }
}


);


   
    

