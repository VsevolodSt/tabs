'use strict'

var tabNode = document.querySelectorAll('.tab__btn a');
var blockNode = document.querySelectorAll('.tab__inner');

var switchTabs = function(e){
		//e.preventDefault();
		removeActiveClass(tabNode, 'tab__btn--active');
		this.classList.add("tab__btn--active");

		for(var j = 0; j < tabNode.length; j++) {
			if(this.getAttribute('href') == "#" + blockNode[j].getAttribute('id')){
				removeActiveClass(blockNode, 'tab__inner--active');
				blockNode[j].classList.add("tab__inner--active");
			}
		}
	};


var removeActiveClass = function(arr2, classN){
	for (var j = 0; j < arr2.length; j++){
		arr2[j].classList.remove(classN);
	}
};


for(var i = 0; i < tabNode.length; i++) {
	tabNode[i].addEventListener('click', switchTabs);
}


/* auto switch tabs by timer*/
var n = 0;
setInterval( function(){
if(n <= 2) {
	console.log(n);
n++
} else {
	n = 0;
}
switchTabs.call(tabNode[n]);

}, 2000);


/*way of forEach*/

/*tabNode.forEach(function(item, i) {
  item.addEventListener('click', function(event){
		removeActiveClass(tabNode, 'tab__btn--active');
		var target = event.currentTarget;
		target.classList.add('tab__btn--active');
		var findID = target.getAttribute('href');

		if(findID == "#" + blockNode[i].getAttribute('id')){
			removeActiveClass(blockNode, 'tab__inner--active');
			blockNode[i].classList.add('tab__inner--active');
		}
	});
});

var removeActiveClass = function(arr2, classN){
	for (var j = 0; j < arr2.length; j++){
		arr2[j].classList.remove(classN);
	}
};*/


/* Bad way */

// for (var i = 0; i < tabNode.length; i++){
// 	tabNode[i].addEventListener('click', function(event){
// 		removeActiveClass();
// 		var target = event.currentTarget;
// 		target.classList.add('tab__btn--active');
// 		var findID = target.getAttribute('href');

// 		/*console.log(findID);
// 		console.log(blockNode[2].getAttribute('id'));
// 		*/
// 		if(findID == "#" + blockNode[2].getAttribute('id')){
// 			blockNode[2].classList.add('tab__inner--active');
// 		}
// 	});
// }




