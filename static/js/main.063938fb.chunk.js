(this.webpackJsonpbchw19=this.webpackJsonpbchw19||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Bugs Bunny","image":"https://imgix.ranker.com/user_node_img/33/641410/original/bugs-bunny-people-in-tv-photo-u6?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"Management","location":"Toon Town"},{"id":2,"name":"Daffy Duck","image":"https://imgix.ranker.com/user_node_img/2624/52474880/original/daffy-duck-tv-characters-photo-u3?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"Management","location":"Toon Town"},{"id":3,"name":"Wile E. Coyote","image":"https://imgix.ranker.com/user_node_img/876/17510814/original/wile-e-coyote-people-in-tv-photo-u7?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"Sales","location":"Desert"},{"id":4,"name":"Pep\xe9 Le Pew","image":"https://imgix.ranker.com/node_img/89/1779191/original/pep-le-pew-people-in-film-photo-1?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"IT","location":"Paris"},{"id":5,"name":"Sylvester","image":"https://imgix.ranker.com/user_node_img/107/2134799/original/sylvester-u4?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"Human Resources","location":"Kansas"},{"id":6,"name":"Taz","image":"https://imgix.ranker.com/user_node_img/129/2561754/original/tasmanian-devil-u2?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"IT","location":"Desert"},{"id":7,"name":"Marvin the Martian","image":"https://imgix.ranker.com/user_node_img/77/1534094/original/marvin-the-martian-film-characters-photo-u1?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"Management","location":"Cartoon Network"},{"id":8,"name":"Elmer Fudd","image":"https://imgix.ranker.com/user_node_img/47/930970/original/elmer-fudd-people-in-tv-photo-u1?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"Sales","location":"Headquarters"},{"id":9,"name":"Porky Pig","image":"https://imgix.ranker.com/user_node_img/92/1824657/original/porky-pig-film-characters-photo-u1?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"Management","location":"Toon Town"},{"id":10,"name":"Yosemite Sam","image":"https://imgix.ranker.com/user_node_img/122/2429693/original/yosemite-sam-people-in-tv-photo-u1?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"Human Resources","location":"California"},{"id":11,"name":"Road Runner","image":"https://imgix.ranker.com/user_node_img/876/17511256/original/road-runner-film-characters-photo-u1?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"IT","location":"Headquarters"},{"id":12,"name":"Tweety","image":"https://imgix.ranker.com/user_node_img/115/2289670/original/tweety-bird-people-in-tv-photo-u7?fit=crop&fm=pjpg&q=60&w=144&h=144&dpr=2","occupation":"Sales","location":"Toon Town"}]')},,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},,,,function(e,t,o){},function(e,t,o){"use strict";o.r(t);var a=o(0),n=o(1),r=o(6),i=o.n(r),c=(o(13),o(3));o(14);var s=function(e){return console.log(e),Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"img-container",children:Object(a.jsx)("img",{alt:e.name,src:e.friend})})})};o(15);var p=function(e){return Object(a.jsx)("h1",{className:"title",children:e.children})},m=o(7),l=o(2),u=o(4);function d(e){var t=e.columns,o=e.data,r=Object(n.useState)(""),i=Object(c.a)(r,2),s=i[0],p=i[1],m=Object(n.useState)(""),d=Object(c.a)(m,2),g=d[0],h=d[1],j=Object(n.useState)(""),f=Object(c.a)(j,2),b=f[0],O=f[1],v=Object(u.useTable)({columns:t,data:o},u.useFilters,u.useSortBy),w=v.getTableProps,x=v.getTableBodyProps,_=v.headerGroups,k=v.rows,y=v.prepareRow,T=v.setFilter;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"search",children:[Object(a.jsx)("input",{value:s,onChange:function(e){var t=e.target.value||void 0;T("name",t),p(t)},placeholder:"Search Name"}),Object(a.jsx)("input",{value:g,onChange:function(e){var t=e.target.value||void 0;T("occupation",t),h(t)},placeholder:"Search Role"}),Object(a.jsx)("input",{value:b,onChange:function(e){var t=e.target.value||void 0;T("location",t),O(t)},placeholder:"Search Location"})]}),Object(a.jsxs)("table",Object(l.a)(Object(l.a)({},w()),{},{children:[Object(a.jsx)("thead",{children:_.map((function(e){return Object(a.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(a.jsx)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:e.isSorted?e.isSortedDesc?"sort-desc":"sort-asc":"",children:e.render("Header")}))}))}))}))}),Object(a.jsx)("tbody",Object(l.a)(Object(l.a)({},x()),{},{children:k.map((function(e,t){return y(e),Object(a.jsx)("tr",Object(l.a)(Object(l.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(a.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))]})}o(19);var g=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),o=t[0],r=t[1];Object(n.useEffect)((function(){r(m)}),[]);var i=Object(n.useMemo)((function(){return[{Header:"Employee",columns:[{Header:"Name",accessor:"name"},{Header:"Role",accessor:"occupation"}]},{Header:"Details",columns:[{Header:"Branch Location",accessor:"location"},{Header:"Headshot",accessor:"image",Cell:function(e){var t=e.cell.value;return Object(a.jsx)(s,{friend:t})}}]}]}),[]);return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{children:"Employee List"}),Object(a.jsx)(d,{columns:i,data:o,setTable:r})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(g,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[20,1,2]]]);
//# sourceMappingURL=main.063938fb.chunk.js.map