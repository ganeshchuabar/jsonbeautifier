let htmlJson = '';
// evaluate expressions
const createList = (items) => {
    switch ($.type(items)) {
      case "object":
        getItems(items);
        break;
      case "array":
        htmlJson += '<span class="array">';
        openArray();
        

        htmlJson += '<ol>';
        for(var index=0; index< items.length; ){
            var item = items[index];
            htmlJson += '<li>';
            createList(item);
            ++index;
            if(  index < items.length){
                comma();
            }
            htmlJson += '</li>';
        }
        
        htmlJson += '</ol>';
        closeArray();
        cspan();
        break;
        default:
            ospan(); val(items); cspan();
    }
  };

  // get items in the object
const getItems = (items) => {
    htmlJson += '<span class="object"><span class=\'object_o\'>{</span>';
    openul();
    var index = 0;
    for (const item in items) {
        openli();
        key(item);
        createList(items[item]);
        index++;
        if( index < Object.keys(items).length){
            comma();
        }
        closeli();       
    }
    closeul(); 
    closeObject();
    cspan();
};
const key = (key) => {
    htmlJson += "<span class='key'>\""+key+ "\"</span>:";
};
const val = (value) => {
    if( $.type(value) === 'string'){
        htmlJson += "<span class='value'>\""+value+ "\"</span>";
    }else{
        htmlJson += "<span class='number'>"+value+ "</span>";
    }
    
};
const colon = () => {
    htmlJson += "<span>:&nbsp;</span>";
};
const closeArray = () => {
    htmlJson += "<span>]</span>";
};
const openArray = () => {
    htmlJson += "<span class='array_o'>[</span>";
};
const openObject = () => {
    htmlJson += "<li>{</li>";
};
const closeObject = () => {
    htmlJson += "<span>}</span>";
};
const comma = () => {
    htmlJson += "<span>,</span>";
};
const openli = () => {
    htmlJson += "<li>";
};
const openul = () => {
    htmlJson += "<ul>";
};
const closeli = () => {
    htmlJson += "</li>";
};
const closeul = () => {
    htmlJson += "</ul>";
};
const cspan = () => {
    htmlJson += "</span>";
};
const ospan = () => {
    htmlJson += "<span>";
};