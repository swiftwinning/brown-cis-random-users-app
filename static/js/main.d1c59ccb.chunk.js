(this["webpackJsonpbrown-cis-random-users-app"]=this["webpackJsonpbrown-cis-random-users-app"]||[]).push([[0],{10:function(t,e,a){t.exports=a(11)},11:function(t,e,a){"use strict";a.r(e);var r=a(1),s=a(2),n=a(4),o=a(3),c=a(6),l=a(5),i=a(0),u=a.n(i),d=a(8),h=a.n(d),m=a(9),p=a.n(m),b=(a(18),function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(n.a)(this,Object(o.a)(e).call(this,t))).sortByFirst=a.sortByFirst.bind(Object(c.a)(a)),a.sortByLast=a.sortByLast.bind(Object(c.a)(a)),a.state={results:[{dob:{date:0},gender:"",location:{country:""},name:{first:"",last:""}}],sortedByFirst:!1,sortedByLast:!1},a}return Object(l.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://randomuser.me/api/?results=20&nat=us,ca&inc=gender,name,location,dob").then((function(t){return t.json()})).then((function(e){t.setState({results:e.results}),console.log("fetch(URL) Results:"),console.log(t.state.results)}))}},{key:"render",value:function(){return u.a.createElement("table",{className:"table table-striped table-bordered table-hover table-sm"},u.a.createElement("thead",{className:"thead-dark"},u.a.createElement("tr",null,u.a.createElement("th",{scope:"col"},"Gender"),u.a.createElement("th",{scope:"col",onClick:this.sortByFirst},"First Name \u2191 \u2193"),u.a.createElement("th",{scope:"col",onClick:this.sortByLast},"Last Name ",u.a.createElement("span",null,"\u2191 \u2193")),u.a.createElement("th",{scope:"col"},"Country"),u.a.createElement("th",{scope:"col"},"Date of Birth"),u.a.createElement("th",{scope:"col"},"Birthday"))),u.a.createElement("tbody",null,this.state.results.map((function(t){return u.a.createElement(y,{user:t,key:t.name.last+t.dob.date})}))))}},{key:"sortByFirst",value:function(){var t;t=this.state.sortedByFirst?this.state.results.sort((function(t,e){var a=t.name.first.toLowerCase(),r=e.name.first.toLowerCase();return a<r?1:a>r?-1:0})):this.state.results.sort((function(t,e){var a=t.name.first.toLowerCase(),r=e.name.first.toLowerCase();return a<r?-1:a>r?1:0})),this.setState({results:t,sortedByFirst:!this.state.sortedByFirst,sortedByLast:!1})}},{key:"sortByLast",value:function(){var t;t=this.state.sortedByLast?this.state.results.sort((function(t,e){var a=t.name.last.toLowerCase(),r=e.name.last.toLowerCase();return a<r?1:a>r?-1:0})):this.state.results.sort((function(t,e){var a=t.name.last.toLowerCase(),r=e.name.last.toLowerCase();return a<r?-1:a>r?1:0})),this.setState({results:t,sortedByFirst:!1,sortedByLast:!this.state.sortedByLast})}}]),e}(u.a.Component)),y=function(t){function e(){return Object(r.a)(this,e),Object(n.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return u.a.createElement("tr",null,u.a.createElement(f,{data:this.props.user.gender}),u.a.createElement(f,{data:this.props.user.name.first}),u.a.createElement(f,{data:this.props.user.name.last}),u.a.createElement(f,{data:this.props.user.location.country}),u.a.createElement(j,{dob:this.props.user.dob}),u.a.createElement(E,{dob:this.props.user.dob}))}}]),e}(u.a.Component),f=function(t){function e(){return Object(r.a)(this,e),Object(n.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return u.a.createElement("td",null,this.props.data)}}]),e}(u.a.Component),j=function(t){function e(){return Object(r.a)(this,e),Object(n.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return u.a.createElement("td",null,u.a.createElement(p.a,{format:"MMM D, YYYY"},this.props.dob.date))}}]),e}(u.a.Component),E=function(t){function e(){return Object(r.a)(this,e),Object(n.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t,e=new Date(this.props.dob.date),a=new Date;return t=e.getMonth()<a.getMonth()?"already happened":e.getMonth()>a.getMonth()?"has yet to occur":e.getDate()<a.getDate()?"already happened":e.getDate()>a.getDate()?"has yet to occur":"is today!",u.a.createElement("td",null,t)}}]),e}(u.a.Component);h.a.render(u.a.createElement("div",null,u.a.createElement("h1",null,"20 Random Users from U.S. & Canada"),u.a.createElement("p",null,"Sort by clicking First Name and Last Name"),u.a.createElement(b,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d1c59ccb.chunk.js.map