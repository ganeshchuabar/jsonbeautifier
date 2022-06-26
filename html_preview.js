let htmlJson = '';
// evaluate expressions
const createList = (items) => {
    switch ($.type(items)) {
      case "object":
        getItems(items);
        break;
      case "array":
        openArray();
        closeli();

        openul();
        items.forEach((item) => {
            createList(item);
        });
        closeArray();
        break;
        default:
            openli();
            val(items);
            closeli();
    }
  };
  // get items in the object
const getItems = (items) => {
    for (const item in items) {

        openul();
        openli();
        openObject();
        key(item);
        colon();
        createList(items[item]);
        closeObject();
        closeli();
        closeul();
    }
};
const key = (key) => {
    htmlJson += "<span class='key'>"+key+ "</span>";
};
const val = (value) => {
    htmlJson += "<span class='value'>"+value+ "</span>";
};
const colon = () => {
    htmlJson += "<span>:</span>";
};
const closeArray = () => {
    htmlJson += "<li>]</li>";
};
const openArray = () => {
    htmlJson += "<span>[</span>";
};
const openObject = () => {
    htmlJson += "<li>{</li>";
};
const closeObject = () => {
    htmlJson += "<li>}</li>";
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
