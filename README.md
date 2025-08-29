ANSWER NO 1:
getElementsById("id")-select one element by its id.
getElementsByClassName("class")-select the all element with class.
querySelector("selector")-the first element match a css selector.
querySelectorAll("selector")-all element match the css selector.

ANSWER NO 2: 
const div = document.createElement("div");
div.textcontent = "Bye";
document.body.appenChild(div);

ANSWER NO 3: 
click on the button first then the goes up the parent and then it goes up to body.find out document.

ANSWER NO 4: 
parent.addEventListener("click",(e){
if(e.target.matches(".child"))console.log("clicked!");
});

ANSWER NO 5: 
preventDEfault means stop default action.
stopPropagation means stop going to parents.
