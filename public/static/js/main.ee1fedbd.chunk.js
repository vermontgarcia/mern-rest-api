(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(60)},32:function(e,t,a){},34:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(23),r=a.n(o),s=(a(32),a(6)),c=a(7),i=a(9),u=a(8),m=a(10),h=(a(34),a(64)),p=a(57),d=a(11),g=a.n(d),f="localhost"===window.location.hostname?"http://localhost:3500/api":"https://compare-it-mern.herokuapp.com/api",E=function(e,t){g.a.post("".concat(f,"/auth/signup"),e).then(function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),alert(e.data.msg),t.push("/")}).catch(function(e){alert(e.response.data.msg)})},v=function(e,t){console.log("URL =====> ",f),g.a.post("".concat(f,"/auth/login"),e).then(function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),alert(e.data.msg),t.push("/")}).catch(function(e){e.response.data.msg?alert(e.response.data.msg):console.log("No message")})},S=function(e){localStorage.clear(),e.push("/login")},b=function(e){var t=localStorage.getItem("token");g.a.get("".concat(f,"/auth/loggedin"),{headers:{"x-access-token":t}}).then(function(e){}).catch(function(t){alert(t.response.data.msg),localStorage.clear(),e.push("/login")})},y="localhost"===window.location.hostname?"http://localhost:3500/api":"https://compare-it-mern.herokuapp.com/api",N=function(e){return console.log("Service",e),console.log("URL =====> ",y),g.a.get("".concat(y,"/search/").concat(e.product))},O=function(e){var t=e.handleChange,a=e.title,n=e.type,o=e.name,r=e.placeholder,s=e.autofocus,c=e.className;return l.a.createElement("div",{className:"form-field-envelop"},l.a.createElement("label",{className:"label"},a,l.a.createElement("input",{className:c,type:n,name:o,placeholder:r,autoFocus:s,onChange:t})))},j=a(61),C=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.user;return l.a.createElement("nav",{className:"nav"},l.a.createElement("div",null,"Menu"),l.a.createElement("div",null,l.a.createElement(j.a,{to:"/"},l.a.createElement("img",{className:"nav-logo",src:"/search.png",alt:"Logo"}))),l.a.createElement("div",null,e?l.a.createElement(j.a,{to:"/profile"},l.a.createElement("img",{className:"nav-profile-picture",alt:e.name,src:"avatar"===e.profilePicture?"/avatar.png":e.profilePicture})):null))}}]),t}(n.Component),k=function(e){var t=e.market,a=e.image,n=e.name,o=e.price;return l.a.createElement("div",{className:"item-envelop"},l.a.createElement("p",null,t),l.a.createElement("img",{className:"item-img",alt:n,src:a}),l.a.createElement("p",null," ",n),l.a.createElement("p",null," ",o))},w=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var a=e.state.search;a.product=t.target.value,e.setState({search:a})},e.handleSearch=function(t){var a=e.state.search,n=e.state.items;N(a).then(function(t){console.log("Search Data =====>",t.data.msg),n=t.data.items,e.setState({items:n}),console.log("Items from state =====>",e.state.items)}).catch(function(e){e.response.data.msg?alert(e.response.data.msg):console.log("No message")})},e.state={search:{},items:[]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("token")?b(this.props.history):this.props.history.push("/login"),this.props.handleSetState()}},{key:"render",value:function(){var e=this.props.state.user,t=this.state.items;return console.log("Items initial",t),l.a.createElement("div",null,l.a.createElement(C,{user:e}),l.a.createElement("div",null,l.a.createElement("h1",null,"Home")),l.a.createElement("div",{className:"home-envelop"},l.a.createElement(O,{name:"search",className:"input-search input",placeholder:"Search",handleChange:this.handleChange}),l.a.createElement("span",{onClick:this.handleSearch},"Search"),t?t.map(function(e,t){return l.a.createElement(k,Object.assign({key:t},e))}):null,l.a.createElement("p",{onClick:this.props.handleLogout},"Logout")))}}]),t}(n.Component),L=function(e){var t=e.className,a=e.name,n=e.type;return l.a.createElement("button",{className:t,type:n},a)},I=a(59),P=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){console.log("login",this.props)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Login")),l.a.createElement("div",{className:"form-envelop"},l.a.createElement("form",{onSubmit:this.props.handleLogin},l.a.createElement("div",{className:"fields-envelop"},l.a.createElement(O,{className:"input",title:"Email:",type:"email",name:"email",placeholder:"user@copareit.com",handleChange:this.props.handleChange,autofocus:"autofocus"}),l.a.createElement(O,{className:"input",title:"Password:",type:"password",name:"password",placeholder:"Your password",handleChange:this.props.handleChange})),l.a.createElement("div",{className:"button-envelop"},l.a.createElement(L,{className:"form-button button",type:"submit",name:"Log in"})))),l.a.createElement("div",null,l.a.createElement("p",null,"Don't have an account yet? ",l.a.createElement("span",null,l.a.createElement(I.a,{to:"/signup"},"Register")))))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Signup")),l.a.createElement("div",{className:"form-envelop"},l.a.createElement("form",{onSubmit:this.props.handleSignup},l.a.createElement("div",{className:"fields-envelop"},l.a.createElement(O,{className:"input",title:"Name:",type:"text",name:"name",placeholder:"What is your name?",handleChange:this.props.handleChange,autofocus:"autofocus"}),l.a.createElement(O,{className:"input",title:"Email:",type:"email",name:"email",placeholder:"user@copareit.com",handleChange:this.props.handleChange}),l.a.createElement(O,{className:"input",title:"Password:",type:"password",name:"password",placeholder:"Your password",handleChange:this.props.handleChange}),l.a.createElement(O,{className:"input",title:"Confirm Password:",type:"password",name:"confirmPassword",placeholder:"Same password",handleChange:this.props.handleChange})),l.a.createElement("div",{className:"button-envelop"},l.a.createElement(L,{className:"form-button button",type:"submit",name:"Sign up"})))),l.a.createElement("div",null,l.a.createElement("p",null,"Already have an account? ",l.a.createElement("span",null,l.a.createElement(I.a,{to:"/login"},"Log in")))))}}]),t}(n.Component),W=function(e){var t=e.title,a=e.name;return l.a.createElement("div",{className:"profile-field-envelop"},l.a.createElement("label",{className:"label"},t,l.a.createElement("p",{className:"data"},a)))},J=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={user:{}},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("token")?b(this.props.history):this.props.history.push("/login"),this.props.handleSetState()}},{key:"render",value:function(){console.log(this.props);var e=this.props.state.user;return console.log("user",e),l.a.createElement("div",null,l.a.createElement(C,{user:e}),l.a.createElement("div",null,l.a.createElement("h1",null,"Profile")),l.a.createElement("div",{className:"profile-data"},l.a.createElement("img",{className:"profile-picture",src:"avatar"===e.profilePicture?"/avatar.png":e.profilePicture,alt:e.name}),l.a.createElement(W,{title:"Name",name:e.name}),l.a.createElement(W,{title:"Email",name:e.email}),l.a.createElement(W,{title:"Role",name:e.role}),l.a.createElement(W,{title:"Status",name:e.status})),l.a.createElement("div",null,l.a.createElement("p",{onClick:this.props.handleLogout},"Logout")))}}]),t}(n.Component),M=function(){return l.a.createElement("h1",null,"Estas perdido mijo")},R=function(e){var t=e.state,a=e.handleLogin,n=e.handleLogout,o=e.handleChange,r=e.handleSignup,s=e.handleSetState;return l.a.createElement(h.a,null,l.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(w,Object.assign({handleSetState:s,handleLogout:n,state:t},e))}}),l.a.createElement(p.a,{exact:!0,path:"/login",render:function(e){return l.a.createElement(P,Object.assign({handleLogin:a,handleChange:o},e))}}),l.a.createElement(p.a,{exact:!0,path:"/signup",render:function(e){return l.a.createElement(x,Object.assign({handleSignup:r,handleChange:o},e))}}),l.a.createElement(p.a,{exact:!0,path:"/profile",render:function(e){return l.a.createElement(J,Object.assign({handleSetState:s,handleLogout:n,state:t},e))}}),l.a.createElement(p.a,{path:"*",component:M}))},D=a(63),A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleLogin=function(t){t.preventDefault(),v(e.state.user,e.props.history)},e.handleSignup=function(t){t.preventDefault(),console.log("Signing up....."),E(e.state.user,e.props.history)},e.handleLogout=function(){S(e.props.history)},e.handleChange=function(t){var a=e.state.user;a[t.target.name]=t.target.files?t.target.files[0]:t.target.value,e.setState({user:a})},e.handleRedirect=function(){e.props.history.push("/login")},e.handleSetState=function(){var t=JSON.parse(localStorage.getItem("user"));t?e.setState({user:t}):e.props.history.push("/login")},e.state={user:{}},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("user"));e?this.setState({user:e}):this.props.history.push("/login")}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(R,{state:this.state,handleLogin:this.handleLogin,handleLogout:this.handleLogout,handleSignup:this.handleSignup,handleChange:this.handleChange,handleSetState:this.handleSetState}))}}]),t}(n.Component),B=Object(D.a)(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(62);r.a.render(l.a.createElement(function(){return l.a.createElement(U.a,null,l.a.createElement(B,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.ee1fedbd.chunk.js.map