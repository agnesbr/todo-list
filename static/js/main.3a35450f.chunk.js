(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},19:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),c=n.n(r),s=(n(19),n(7)),i=n(2),l=n(3),u=n(5),m=n(4),d=n(6),h=n(11),p=n(12),f=n(13),v=n.n(f),b=(n(25),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={value:"",placeholder:"enter your tasks here"},n.handleChange=function(e){n.setState({value:e.target.value})},n.getValue=function(e){var t=n.props.onEnter;e.target.value.length>=1&&"Enter"===e.key?(t(n.state.value),n.setState({value:""}),n.setState({placeholder:"enter your tasks here"}),e.preventDefault()):"Enter"===e.key&&n.setState({placeholder:"please enter a task first"})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",placeholder:this.state.placeholder,value:this.state.value,onChange:this.handleChange,onKeyPress:this.getValue})}}]),t}(a.Component)),O=(n(27),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.isDone,a=e.onClick;return o.a.createElement("li",{className:n?"li done":"li todo",onClick:function(){return a()}},t)}}]),t}(a.Component)),y=(n(29),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"Counter"},this.props.text," ",this.props.num)}}]),t}(a.Component)),k=(n(31),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.icon;return o.a.createElement("button",{onClick:function(){return t()}},n)}}]),t}(a.Component)),j=(n(33),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.num,e.sepText);return o.a.createElement("section",{className:"wrapper-separator"},o.a.createElement("div",{className:"hr"}),o.a.createElement("span",{className:"Separator"},t),o.a.createElement("div",{className:"hr"}))}}]),t}(a.Component)),E=(n(35),o.a.createElement(h.a,{className:"filter-button",icon:p.a})),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todoItems:n.load()},n.toggleDone=function(e){var t=n.state.todoItems,a=t.findIndex(function(t){return t.id===e});t[a].isDone=!t[a].isDone,n.setState({todoItems:t})},n.addItem=function(e){var t=n.state.todoItems;n.setState({todoItems:[{text:e,isDone:!1,id:v()()}].concat(Object(s.a)(t))})},n.deleteItem=function(e){var t=n.state.todoItems,a=t.findIndex(function(t){return t.id===e});n.setState({todoItems:Object(s.a)(t.slice(0,a)).concat(Object(s.a)(t.slice(a+1)))})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"createListItem",value:function(){var e=this;return this.state.todoItems.map(function(t,n){return o.a.createElement("section",{className:"todo-row",key:"box"+n},o.a.createElement(O,Object.assign({key:"todo"+n},t,{onClick:function(){return e.toggleDone(t.id)}})),o.a.createElement(k,{key:"button"+n,icon:E,onClick:function(){return e.deleteItem(t.id)}}))})}},{key:"renderListItemDone",value:function(){var e=this;return this.state.todoItems.filter(function(e){return e.isDone}).map(function(t){return e.renderSingleTodo(t.id,t)})}},{key:"renderListItemTodo",value:function(){var e=this;return this.state.todoItems.filter(function(e){return!e.isDone}).map(function(t){return e.renderSingleTodo(t.id,t)})}},{key:"renderSingleTodo",value:function(e,t){var n=this;return o.a.createElement("section",{className:"todo-row",key:"box"+e},o.a.createElement(O,Object.assign({key:"todo"+e},t,{onClick:function(){return n.toggleDone(e)}})),o.a.createElement(k,{key:"button"+e,icon:E,onClick:function(){return n.deleteItem(e)}}))}},{key:"save",value:function(){localStorage.setItem("todo-app--todos",JSON.stringify(this.state.todoItems))}},{key:"load",value:function(){try{return JSON.parse(localStorage.getItem("todo-app--todos"))||[]}catch(e){return[]}}},{key:"render",value:function(){this.save();var e=this.state.todoItems.filter(function(e){return e.isDone}).length,t=this.state.todoItems.filter(function(e){return!e.isDone}).length;return console.log(this.state),o.a.createElement("section",{className:"App"},o.a.createElement("h1",null,"my todos"),o.a.createElement(b,{onEnter:this.addItem}),o.a.createElement("section",{className:"wrapper-counter"},o.a.createElement(y,{text:"tasks to do:",num:t}),o.a.createElement("span",{className:"Counter"}," | "),o.a.createElement(y,{text:"already done:",num:e})),o.a.createElement("section",{className:"wrapper-tasks"},o.a.createElement(j,{sepText:"TODO"}),o.a.createElement("ul",null,this.renderListItemTodo()),o.a.createElement(j,{sepText:"DONE"}),o.a.createElement("ul",null,this.renderListItemDone())))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.register()})}},[[14,2,1]]]);
//# sourceMappingURL=main.3a35450f.chunk.js.map