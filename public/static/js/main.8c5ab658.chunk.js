(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){e.exports=a(348)},158:function(e,t,a){},346:function(e,t,a){},348:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(10),o=a.n(l),s=(a(158),a(19)),c=a(20),i=a(22),m=a(21),u=a(23),p=a(354),h=a(246),d=(a(111),a(83)),g=(a(50),a(9)),E=(a(112),a(35)),f=a(48),v=a.n(f),y="localhost"===window.location.hostname?"http://localhost:3500/api":"https://compare-it-mern.herokuapp.com/api",S=function(e,t){v.a.post("".concat(y,"/auth/signup"),e).then(function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),alert(e.data.msg),t.push("/")}).catch(function(e){alert(e.response.data.msg)})},b=function(e,t){console.log("URL =====> ",y),v.a.post("".concat(y,"/auth/login"),e).then(function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),alert(e.data.msg),t.push("/")}).catch(function(e){e.response.data.msg?alert(e.response.data.msg):console.log("No message")})},O=function(e){localStorage.removeItem("token"),e.push("/login")},j=function(e){var t=localStorage.getItem("token");v.a.get("".concat(y,"/auth/loggedin"),{headers:{"x-access-token":t}}).then(function(e){}).catch(function(t){alert(t.response.data.msg),localStorage.removeItem("token"),e.push("/login")})},k=(a(185),a(149)),w=(a(190),a(84)),N=(a(193),a(138)),C=a(351),I=a(248),P=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).showDrawer=function(){e.setState({visible:!0})},e.onClose=function(){e.setState({visible:!1})},e.state={visible:!1,placement:"left"},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"mouseHover"},r.a.createElement(g.a,{onClick:this.showDrawer,type:"menu",style:{fontSize:"20px"}})),r.a.createElement("div",null,r.a.createElement(C.a,{to:"/search"},r.a.createElement("span",{className:"nav-logo"},r.a.createElement("i",{className:"fas fa-search"})))),r.a.createElement("div",null,e?r.a.createElement(C.a,{to:"/profile"},r.a.createElement(N.a,{src:"avatar"===e.profilePicture?"/avatar.png":e.profilePicture})):null),r.a.createElement(k.a,{placement:this.state.placement,closable:!1,onClose:this.onClose,visible:this.state.visible,className:"drawer-wrapper"},r.a.createElement("div",null,r.a.createElement(I.a,{to:"/"},r.a.createElement(g.a,{type:"home"})," Home")),r.a.createElement(w.a,null),r.a.createElement("div",null,r.a.createElement(I.a,{to:"/search"},r.a.createElement(g.a,{type:"search"})," Nueva B\xfasqueda")),r.a.createElement("div",null,r.a.createElement(I.a,{to:"/mysearches"},r.a.createElement(g.a,{type:"file-search"})," Mis B\xfasquedas")),r.a.createElement("div",null,r.a.createElement(I.a,{to:"/mylist"},r.a.createElement(g.a,{type:"file-done"})," Mi Lista")),r.a.createElement(w.a,null),r.a.createElement("div",null,r.a.createElement(I.a,{to:"/profile"},r.a.createElement(g.a,{type:"user"})," Mi Perfil")),r.a.createElement("div",null,r.a.createElement(I.a,{to:"/settings"},r.a.createElement(g.a,{type:"setting"})," Ajustes")),r.a.createElement(w.a,null),r.a.createElement("div",null,r.a.createElement(I.a,{to:"/"},r.a.createElement(g.a,{type:"logout"})," Cerrar Sesi\xf3n"))))}}]),t}(n.Component),L=E.a.Header,x=E.a.Footer,D=E.a.Content,F=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){if(localStorage.getItem("token")?j(this.props.history):this.props.history.push("/login"),void 0!==localStorage.getItem("items")){console.log("Yes Items");var e=JSON.parse(localStorage.getItem("items"));e?this.setState({items:e}):console.log("No items found")}else console.log("No Items");this.props.handleSetState()}},{key:"render",value:function(){var e=this.props.state.user;return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(L,null,r.a.createElement(P,{user:e})),r.a.createElement(D,null,r.a.createElement("div",{className:"profile-data"},r.a.createElement("h1",null,"Bienvenido"),r.a.createElement("img",{className:"profile-picture",src:"avatar"===e.profilePicture?"/avatar.png":e.profilePicture,alt:e.name}),r.a.createElement("div",null,e.name))),r.a.createElement(x,null,"Footer")),r.a.createElement("div",null,r.a.createElement(d.a,{id:"back-top-custom"},r.a.createElement("div",{className:"ant-back-top-inner"},r.a.createElement(g.a,{type:"to-top"})))))}}]),t}(n.Component),M=(a(256),a(150)),J=(a(259),a(142)),R=(a(102),a(34)),q=(a(350),a(148)),T="localhost"===window.location.hostname?"http://localhost:3500/api":"https://compare-it-mern.herokuapp.com/api",W=function(e){return console.log("Service =====>",e),console.log("URL =====> ",T),v.a.get("".concat(T,"/search/").concat(e.product))},A=(a(349),a(110)),B=A.a.Meta,H=function(e){var t=e.market,a=e.image,n=e.name,l=e.price,o=e.upc;return r.a.createElement(A.a,{hoverable:!0,extra:"".concat(t," ").concat(o),cover:r.a.createElement("img",{alt:n,src:a}),actions:[r.a.createElement(g.a,{type:"setting"}),r.a.createElement(g.a,{type:"edit"}),r.a.createElement(g.a,{type:"ellipsis"})]},r.a.createElement(B,{title:l,description:n}))},Y=E.a.Header,U=E.a.Footer,V=E.a.Content,z=(q.a.SubMenu,R.a.Search),$=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).toggleCollapsed=function(){e.setState({collapsed:!e.state.collapsed})},e.handleChange=function(t){var a=e.state.search;a.product=t.target.value,e.setState({search:a})},e.handleSearch=function(t){if(""!==t){var a=e.state.searching;a=!0,e.setState({searching:a});var n=e.state.search;n.product=t;var r=e.state.items;W(n).then(function(t){console.log("Search Data =====>",t.data.msg),r=t.data.items,localStorage.setItem("items",JSON.stringify(r)),e.setState({items:r}),a=!1,e.setState({searching:a}),console.log("Items from state =====>",e.state.items)}).catch(function(e){e.response.data.msg?alert(e.response.data.msg):console.log("No message")})}},e.state={search:{},items:[],searching:!1,collapsed:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){if(localStorage.getItem("token")?j(this.props.history):this.props.history.push("/login"),void 0!==localStorage.getItem("items")){console.log("Yes Items");var e=JSON.parse(localStorage.getItem("items"));e?this.setState({items:e}):console.log("No items found")}else console.log("No Items");this.props.handleSetState()}},{key:"render",value:function(){var e=this,t=this.state.searching,a=this.props.state.user,n=this.state.items;return console.log("Items initial",n),r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(Y,null,r.a.createElement(P,{user:a})),r.a.createElement(V,null,r.a.createElement("div",{className:"home-envelop"},r.a.createElement("div",{className:"input-search"},r.a.createElement(z,{placeholder:"busca un articulo",onSearch:function(t){return e.handleSearch(t)}})),t?r.a.createElement(J.a,null):null,r.a.createElement("div",{className:"cards-envelop"},n?n.map(function(e,t){return r.a.createElement(H,Object.assign({key:t},e))}):r.a.createElement(M.a,{active:!0})),r.a.createElement("p",{onClick:this.props.handleLogout},"Logout"))),r.a.createElement(U,null,"Footer")),r.a.createElement("div",null,r.a.createElement(d.a,{id:"back-top-custom"},r.a.createElement("div",{className:"ant-back-top-inner"},r.a.createElement(g.a,{type:"to-top"})))))}}]),t}(n.Component),G=(a(63),a(42)),K=(a(132),a(82)),Q=(a(135),a(43)),X=Q.a.Item,Z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||b(t,a.props.history)})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(Q.a,{onSubmit:this.handleSubmit,className:"form-envelop"},r.a.createElement("div",null,r.a.createElement("h1",null,"Login")),r.a.createElement(X,null,e("email",{rules:[{required:!0,message:"Please type your email!"}]})(r.a.createElement(R.a,{prefix:r.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"user@compareit.com"}))),r.a.createElement(X,null,e("password",{rules:[{required:!0,message:"Please type your Password!"}]})(r.a.createElement(R.a,{prefix:r.a.createElement(g.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Your password"}))),r.a.createElement(X,null,e("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(K.a,null,"Remember me")),r.a.createElement(I.a,{className:"login-form-forgot",to:"/forgot"},"Forgot password"),r.a.createElement(G.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Don't have an account yet? ",r.a.createElement(I.a,{to:"/signup"},"Register now!")))}}]),t}(n.Component),_=Q.a.create()(Z),ee=Q.a.Item,te=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1,autoCompleteResult:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||console.log("Received values of form: ",t)})},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("The password is not the same!"):n()},a.validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(Q.a,{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("h1",null,"Signup")),r.a.createElement(ee,null,e("username",{rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]})(r.a.createElement(R.a,{prefix:r.a.createElement(g.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"What is your name"}))),r.a.createElement(ee,null,e("email",{rules:[{type:"email",message:"Please enter a valid email!"},{required:!0,message:"Please enter your email!"}]})(r.a.createElement(R.a,{prefix:r.a.createElement(g.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"user@compareit.com"}))),r.a.createElement(ee,null,e("password",{rules:[{required:!0,message:"Please enter your Password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(R.a,{prefix:r.a.createElement(g.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Your password"}))),r.a.createElement(ee,null,e("confirm",{rules:[{required:!0,message:"Please confirm your Password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(R.a,{prefix:r.a.createElement(g.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Confirm password"}))),r.a.createElement(ee,null,e("agreement",{valuePropName:"checked"})(r.a.createElement(K.a,null,"I have read the ",r.a.createElement(I.a,{to:"/agreement"},"agreement"))),r.a.createElement(G.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Register"),"Already have an account? ",r.a.createElement(I.a,{to:"/login"},"Log in")))}}]),t}(n.Component),ae=Q.a.create()(te),ne=function(e){var t=e.title,a=e.name;return r.a.createElement("div",{className:"profile-field-envelop"},r.a.createElement("label",{className:"label"},t,r.a.createElement("p",{className:"data"},a)))},re=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleEdit=function(){e.setState({edit:!e.state.edit})},e.state={edit:!1,user:{}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("token")?j(this.props.history):this.props.history.push("/login"),this.props.handleSetState()}},{key:"render",value:function(){var e=this.props.state.user,t=this.state.edit;return r.a.createElement("div",null,r.a.createElement(P,{user:e}),r.a.createElement("div",null,r.a.createElement("h1",{onClick:this.handleEdit},"Mi perfil"),t?r.a.createElement("h2",null,"Edit"):null),r.a.createElement("div",{className:"profile-data"},r.a.createElement("img",{className:"profile-picture",src:"avatar"===e.profilePicture?"/avatar.png":e.profilePicture,alt:e.name}),r.a.createElement(ne,{title:"Nombre",name:e.name}),r.a.createElement(ne,{title:"Email",name:e.email}),r.a.createElement(ne,{title:"Rol",name:e.role}),r.a.createElement(ne,{title:"Estado",name:e.status})),r.a.createElement("div",null,r.a.createElement("p",{onClick:this.props.handleLogout},"Logout")))}}]),t}(n.Component),le=function(){return r.a.createElement("h1",null,"Estas perdido mijo")},oe=function(e){var t=e.state,a=e.handleLogin,n=e.handleLogout,l=e.handleChange,o=e.handleSignup,s=e.handleSetState;return r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(F,Object.assign({handleSetState:s,handleLogout:n,state:t},e))}}),r.a.createElement(h.a,{exact:!0,path:"/search",render:function(e){return r.a.createElement($,Object.assign({handleSetState:s,handleLogout:n,state:t},e))}}),r.a.createElement(h.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(_,Object.assign({handleLogin:a,handleChange:l},e))}}),r.a.createElement(h.a,{exact:!0,path:"/signup",render:function(e){return r.a.createElement(ae,Object.assign({handleSignup:o,handleChange:l},e))}}),r.a.createElement(h.a,{exact:!0,path:"/profile",render:function(e){return r.a.createElement(re,Object.assign({handleSetState:s,handleLogout:n,state:t},e))}}),r.a.createElement(h.a,{path:"*",component:le}))},se=a(353),ce=(a(346),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleLogin=function(t){t.preventDefault(),b(e.state.user,e.props.history)},e.handleSignup=function(t){t.preventDefault(),console.log("Signing up....."),S(e.state.user,e.props.history)},e.handleLogout=function(){O(e.props.history)},e.handleChange=function(t){var a=e.state.user;a[t.target.name]=t.target.files?t.target.files[0]:t.target.value,e.setState({user:a})},e.handleRedirect=function(){e.props.history.push("/login")},e.handleSetState=function(){var t=JSON.parse(localStorage.getItem("user"));t?e.setState({user:t}):e.props.history.push("/login")},e.state={user:{}},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("user"));e?this.setState({user:e}):this.props.history.push("/login")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(oe,{state:this.state,handleLogin:this.handleLogin,handleLogout:this.handleLogout,handleSignup:this.handleSignup,handleChange:this.handleChange,handleSetState:this.handleSetState}))}}]),t}(n.Component)),ie=Object(se.a)(ce);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(352);o.a.render(r.a.createElement(function(){return r.a.createElement(me.a,null,r.a.createElement(ie,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[153,2,1]]]);
//# sourceMappingURL=main.8c5ab658.chunk.js.map