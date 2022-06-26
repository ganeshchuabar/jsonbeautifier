// A function is used for dragging and moving
function dragElement(element, direction)
{
    var   md; // remember mouse down info
    const first  = document.getElementById("first");
    const second = document.getElementById("second");

    element.onmousedown = onMouseDown;

    function onMouseDown(e)
    {
        //console.log("mouse down: " + e.clientX);
        md = {e,
              offsetLeft:  element.offsetLeft,
              offsetTop:   element.offsetTop,
              firstWidth:  first.offsetWidth,
              secondWidth: second.offsetWidth
             };

        document.onmousemove = onMouseMove;
        document.onmouseup = () => {
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        }
    }

    function onMouseMove(e)
    {
        //console.log("mouse move: " + e.clientX);
        var delta = {x: e.clientX - md.e.clientX,
                     y: e.clientY - md.e.clientY};

        if (direction === "H" ) // Horizontal
        {
            // Prevent negative-sized elements
            delta.x = Math.min(Math.max(delta.x, -md.firstWidth),
                       md.secondWidth);

            element.style.left = md.offsetLeft + delta.x + "px";
            first.style.width = (md.firstWidth + delta.x) + "px";
            second.style.width = (md.secondWidth - delta.x) + "px";
        }
    }
}
function beautify(){
    document.getElementById("second").innerHTML = "";
    var json = parseJSON(document.getElementById("plaintext").value);
    //var str = JSON.stringify(json,undefined,2);
    //document.getElementById("second").innerHTML = "<pre>"+str+"</str>";
    htmlJson='';
    createList(jsonObject);
    $("#second").html(htmlJson);
};
function clear(pane){
    if( pane == "textarea"){
        $("#plaintext").val("");
    }else{
        $("#second").html("");
    }
};
function format(){
    //$("#second").html("");
    //var json = parseJSON($("#plaintext").val());
    //var str = JSON.stringify(jsonObject,undefined,2);
    //$("#second").html("<pre>"+str+"</str>");
    htmlJson='';
    createList(jsonObject);
    $("#second").html(htmlJson);

};
function unformat(){
    $("#second").html("");
    //var json = parseJSON($("#plaintext").val());
    var str = JSON.stringify(jsonObject);
    $("#second").html("<pre>"+str+"</str>");
};
function copy() {
    /* Get the text field */
    var copyText = $("#second pre");
  
    /* Select the text field */
    copyText.select();
    //copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.html());
  
  }