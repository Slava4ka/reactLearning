(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(46),r=n(7),o="react_test/dialogs-reduser/SEND-MESSAGE";var l={users:[{id:1,name:"Dima"},{id:2,name:"Sasha"},{id:3,name:"Masha"},{id:4,name:"Dasha"},{id:5,name:"Sveta"}],messages:[{id:1,message:"hi!"},{id:2,message:"How are you!"},{id:3,message:"I'm you"},{id:4,message:"y are me!"}]},c=function(e){return{type:o,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return function(e,t){var n=t.newMessageBody,o={id:e.messages.length+1,message:n};return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[o])})}(e,t);default:return e}}},133:function(e,t,n){e.exports={postsBody:"Posts_postsBody__3FJ5W"}},135:function(e,t,n){e.exports=n.p+"static/media/Spin-1s-200px.b5a19a3a.svg"},163:function(e,t,n){e.exports=n(289)},168:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(65),l=n.n(o),c=n(23),i=n(24),s=n(26),u=n(25),m=n(27),d=(n(168),n(12)),p=n(8),f=n.n(p),g=n(9);var h=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1],l=n?f.a.usersPressed:f.a.usersNotPressed;return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/profile",activeClassName:f.a.activeLink},"Profile")),r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/dialogs",activeClassName:f.a.activeLink},"Messages")),r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/news",activeClassName:f.a.activeLink},"News")),r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/posts",activeClassName:f.a.activeLink},"Posts")),r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/users",activeClassName:f.a.activeLink,onClick:function(){o(!n)}},"Users"),r.a.createElement("ul",{className:l},r.a.createElement("li",null,r.a.createElement(g.b,{to:"/users/users_list",activeClassName:f.a.activeLink},"Users List")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/users/my_friends",activeClassName:f.a.activeLink},"Friends")))),r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/store",activeClassName:f.a.activeLink},"Store")),r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/papers",activeClassName:f.a.activeLink},"Papers")),r.a.createElement("div",{className:f.a.item},r.a.createElement(g.b,{to:"/garbage",activeClassName:f.a.activeLink},"Garbage")))},v=n(34),E=n(88),b=n.n(E);var _=function(e){return r.a.createElement("header",{className:b.a.header},r.a.createElement("img",{src:"https://cityoflondonsinfonia.files.wordpress.com/2013/04/chanel-logo.jpg",alt:e.userId}),r.a.createElement("div",{className:b.a.loginBlock},r.a.createElement("span",null,r.a.createElement(g.b,{to:"/login"},e.avatar)),e.isAuth?r.a.createElement("span",null,r.a.createElement("button",{onClick:e.logOut},"Log Out")):""))},O=n(11),P=n(7),w=n(132).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8fa07788-cfec-4493-aab4-e35ba082ad82"}}),j={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return w.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return w.post("follow/".concat(e),{}).then(function(e){return e.data})},unfollow:function(e){return w.delete("follow/".concat(e)).then(function(e){return e.data})},authMe:function(){return S.authMe()}},S={authMe:function(){return w.get("auth/me",{withCredentials:!0}).then(function(e){return e.data})},login:function(e,t,n){return w.post("auth/login",{email:e,password:t,rememberMe:n})},loginOut:function(){return w.delete("auth/login")}},k=function(e){return w.get("profile/".concat(e)).then(function(e){return e.data})},C=function(e){return w.get("profile/status/".concat(e)).then(function(e){return e.data})},y=function(e){return w.put("profile/status",{status:e})},N=function(e){var t=new FormData;return t.append("image",e),w.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},I=function(e){return w.put("profile",e)},A=n(28),F={userId:null,email:null,login:null,avatar:"Login",isAuth:!1,isFetching:!0},T=function(e,t,n,a){return{type:"react_test/auth-reduser/SET-USER-DATA",data:{userId:e,email:t,login:n,isAuth:a}}},x=function(e){return{type:"react_test/auth-reduser/SET-USERS-AVATAR",avatar:e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"react_test/auth-reduser/SET-USER-DATA":return Object(P.a)({},e,t.data);case"react_test/auth-reduser/SET-USERS-AVATAR":return Object(P.a)({},e,{avatar:t.avatar});default:return e}},U=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(_,this.props)}}]),t}(r.a.Component),M=Object(O.b)(function(e){return{isAuth:e.auth.isAuth,userId:e.auth.userId,email:e.auth.email,login:e.auth.login,avatar:e.auth.avatar}},{logOut:function(){return function(e){console.log("click"),S.loginOut().then(function(t){0===t.data.resultCode&&(e(T(null,null,null,!1)),e(x("")))})}}})(U),z=n(133),D=n.n(z);var G,R=function(e){return r.a.createElement("div",null,r.a.createElement("span",null,e.data.message),r.a.createElement("br",null),r.a.createElement("span",null,"Likes: ",e.data.likesCount),r.a.createElement("br",null),r.a.createElement("br",null))},B=n(127),J=n(128),H=function(e){return e?void 0:"Field is required"},V=n(52),W=n(90),Y=n.n(W),Z=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,o=e.children,l=n&&a;return r.a.createElement("div",{className:Y.a.formControl+" "+(l?Y.a.error:"")},r.a.createElement("div",null,o),l&&r.a.createElement("span",null,a))},q=function(e){var t=e.input,n=(e.meta,e.child,Object(V.a)(e,["input","meta","child"]));return r.a.createElement(Z,e,r.a.createElement("textarea",Object.assign({},t,n)))},X=function(e){var t=e.input,n=(e.meta,e.child,Object(V.a)(e,["input","meta","child"]));return r.a.createElement(Z,e,r.a.createElement("input",Object.assign({},t,n)))},K=function(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(B.a,Object.assign({placeholder:e,name:t,validate:n,component:a},o))," ",l)},Q=(G=10,function(e){return e.length>G?"Max length is ".concat(G," symbols"):void 0});var $=Object(J.a)({form:"AddNewPostForm"})(function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(B.a,{name:"newPostText",component:q,placeholder:"Post massage",validate:[H,Q]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))});var ee=function(e){return r.a.createElement("div",{className:D.a.postsBody},r.a.createElement("h3",null,"Posts"),r.a.createElement($,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("hr",null),r.a.createElement("div",null,e.posts.map(function(e){return r.a.createElement(R,{data:e,key:e.id})})))},te=n(46),ne="react_test/posts-reduser/ADD-POST";var ae={posts:[{id:1,message:"Fuck you",likesCount:99},{id:2,message:"Suck the dick",likesCount:5},{id:3,message:"Show me your tits",likesCount:4},{id:4,message:"Jololo",likesCount:34},{id:5,message:"fap fpa",likesCount:87}]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return function(e,t){var n={id:e.posts.length+1,message:t.newPostText,likesCount:0};return Object(P.a)({},e,{posts:[].concat(Object(te.a)(e.posts),[n]),newPostText:""})}(e,t);default:return e}},oe=Object(O.b)(function(e){return{posts:e.postsPage.posts,newPostText:e.postsPage.newPostText}},function(e){return{addPost:function(t){e(function(e){return{type:ne,newPostText:e}}(t))}}})(ee),le=n(93),ce=n.n(le),ie=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",{key:t.id,className:ce.a.card},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(g.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:"https://cs16planet.ru/images/content/avatars/avatar648.jpg",className:ce.a.usersPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status),r.a.createElement("div",null,t.id))))},se=n(94),ue=n.n(se),me=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.onPageChanged,l=e.currentPage,c=e.portionSize,i=(Object(V.a)(e,["totalItemsCount","pageSize","onPageChanged","currentPage","portionSize"]),Math.ceil(t/n)),s=[],u=1;u<=i;u++)s.push(u);var m=Math.ceil(i/c),p=Object(a.useState)(1),f=Object(d.a)(p,2),g=f[0],h=f[1],v=(g-1)*c+1,E=g*c;return r.a.createElement("div",{className:ue.a.pagination},g>1&&r.a.createElement("button",{onClick:function(){return h(g-1)}},"prev"),s.filter(function(e){return e>=v&&e<=E}).map(function(e){return r.a.createElement("span",{onClick:function(t){o(e)},className:l===e?ue.a.selectedPage:"",key:e},e)}),m>g&&r.a.createElement("button",{onClick:function(){return h(g+1)}},"next"))},de=function(e){return r.a.createElement("div",null,r.a.createElement(me,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,onPageChanged:e.onPageChanged,currentPage:e.currentPage,portionSize:e.paginatorPortionSize}),r.a.createElement("div",null,e.users.map(function(t){return r.a.createElement(ie,{key:t.id,user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow})})))},pe=n(135),fe=n.n(pe),ge=function(e){return r.a.createElement("div",{className:"preloader"},r.a.createElement("img",{src:fe.a}))},he=n(18),ve=n.n(he),Ee=n(38),be=function(e,t,n,a){return e.map(function(e){return e[n]===t?Object(P.a)({},e,a):e})},_e="react_test/users-reduser/FOLLOW",Oe="react_test/users-reduser/UNFOLLOW",Pe="react_test/users-reduser/SET-USERS",we="react_test/users-reduser/SET-CURRENT-PAGE",je="react_test/users-reduser/SET-TOTAL-USERS-COUNT",Se="react_test/users-reduser/TOGGLE-IS-FETCHING",ke="react_test/users-reduser/TOGGLE-FOLLOWING-IN-PROGRESS",Ce={users:[],pageSize:20,paginatorPortionSize:10,totalUsersCount:21,currentPage:1,isFetching:!0,followingInProgress:[]};var ye=function(e){return{type:_e,userId:e}},Ne=function(e){return{type:Oe,userId:e}},Ie=function(e){return{type:Se,isFetching:e}},Ae=function(e,t){return{type:ke,inProgress:e,userId:t}},Fe=function(){var e=Object(Ee.a)(ve.a.mark(function e(t,n,a,r){return ve.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(Ae(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(r(n)),t(Ae(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,a,r){return e.apply(this,arguments)}}(),Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(P.a)({},e,{users:be(e.users,t.userId,"id",{followed:!0})});case Oe:return Object(P.a)({},e,{users:be(e.users,t.userId,"id",{followed:!1})});case Pe:return Object(P.a)({},e,{users:t.users});case we:return Object(P.a)({},e,{currentPage:t.currentPage});case je:return Object(P.a)({},e,{totalUsersCount:t.totalUsersCount});case Se:return Object(P.a)({},e,{isFetching:t.isFetching});case ke:return Object(P.a)({},e,{followingInProgress:t.inProgress?[].concat(Object(te.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},xe=n(5),Le=n(136),Ue=function(e){return e.usersPage.users},Me=(Object(Le.a)(Ue,function(e){return e.filter(function(e){return!0})}),function(e){return e.usersPage.pageSize}),ze=function(e){return e.usersPage.totalUsersCount},De=function(e){return e.usersPage.currentPage},Ge=function(e){return e.usersPage.paginatorPortionSize},Re=function(e){return e.usersPage.isFetching},Be=function(e){return e.usersPage.followingInProgress},Je=function(e){return e.auth.userId},He=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.getUsers(n.props.currentPage,n.props.pageSize)},n.onPageChanged=function(e){n.props.getUsers(e,n.props.pageSize,!1)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,!0===this.props.isFetching?r.a.createElement(ge,null):null,r.a.createElement(de,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,paginatorPortionSize:this.props.paginatorPortionSize,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),Ve=Object(xe.d)(Object(O.b)(function(e){return{users:Ue(e),pageSize:Me(e),paginatorPortionSize:Ge(e),totalUsersCount:ze(e),currentPage:De(e),isFetching:Re(e),followingInProgress:Be(e),myId:Je(e)}},{follow:function(e){return function(){var t=Object(Ee.a)(ve.a.mark(function t(n){return ve.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Fe(n,e,j.follow.bind(j),ye);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(Ee.a)(ve.a.mark(function t(n){return ve.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Fe(n,e,j.unfollow.bind(j),Ne);case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(a){a(Ie(!0)),j.getUsers(e,t).then(function(t){var r,o;n||a(function(e){return{type:we,currentPage:e}}(e)),a(Ie(!1)),a((r=t.items,{type:Pe,users:r})),n&&(a((o=t.totalCount,{type:je,totalUsersCount:o})),j.authMe().then(function(e){a(Ae(!0,e.data.id))}))})}}}))(He),We="react_test/profile-reduser/SET-USERS-PROFILE",Ye="react_test/profile-reduser/TOGGLE-IS-FETCHING",Ze="react_test/profile-reduser/SET-STATUS",qe="react_test/profile-reduser/SAVE_PHOTO_SUCCESS",Xe={profile:null,isFetching:!0,status:""};var Ke=function(e){return{type:Ye,isFetching:e}},Qe=function(e){return{type:Ze,status:e}},$e=function(e){return function(t){t(Ke(!0)),k(e).then(function(e){t(Ke(!1)),t({type:We,profile:e})})}},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case We:return Object(P.a)({},e,{profile:t.profile});case Ye:return Object(P.a)({},e,{isFetching:t.isFetching});case Ze:return Object(P.a)({},e,{status:t.status});case qe:return Object(P.a)({},e,{profile:Object(P.a)({},e.profile,{photos:t.photos})});default:return e}},tt=n(55),nt=n.n(tt),at=function(e){var t=Object(a.useState)(!1),n=Object(d.a)(t,2),o=n[0],l=n[1],c=Object(a.useState)(e.status),i=Object(d.a)(c,2),s=i[0],u=i[1];Object(a.useEffect)(function(){u(e.status)},[e.status]);var m=function(){l(!1),e.updateStatus(s)};return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){l(!0)}},"\u0421\u0442\u0430\u0442\u0443\u0441: ",e.status)),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:m,value:s,onKeyPress:function(e){console.log("key: ".concat(e.key)),"Enter"===e.key&&m()}})))},rt=function(e){var t=e.contactTitle,n=e.contactValue;return r.a.createElement("div",null,r.a.createElement("b",null,t),": ",n)},ot=n(35),lt=n.n(ot),ct=Object(J.a)({form:"editProfile"})(function(e){var t=e.handleSubmit,n=e.profile,a=e.error,o=n.lookingForAJob?{type:"checkbox",checked:"checked"}:{type:"checkbox"};return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("button",null,"save"),a&&r.a.createElement("div",{className:lt.a.errorMessage},a),r.a.createElement("div",null,r.a.createElement("h5",null,"id: ",n.userId)),r.a.createElement("div",null,r.a.createElement("b",null,"Full name"),": ",K("Full name","fullName",[],X)),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job"),": ",K("","lookingForAJob",[],X,o)),r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),": ",K("My professional skills","lookingForAJobDescription",[],q)),r.a.createElement("div",null,r.a.createElement("b",null,"About me"),": ",K("About me","aboutMe",[],q)),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts"),":",Object.keys(n.contacts).map(function(e){return r.a.createElement("div",{key:e},r.a.createElement("b",null,e,": ",K(e,"contacts."+e,[],X)))}))))});var it=function(e){var t=e.profile,n=e.isOwner,a=e.goToEditMode;return r.a.createElement("div",null,n&&r.a.createElement("div",null,r.a.createElement("button",{onClick:a},"Edit")),r.a.createElement("div",null,r.a.createElement("h5",null,"id: ",t.userId)),r.a.createElement("div",null,r.a.createElement("b",null,"Full name"),": ",t.fullName),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("b",null,"About me"),": ",t.aboutMe),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts"),":",Object.keys(t.contacts).map(function(e){return r.a.createElement(rt,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},st=function(e){var t=e.profile,n=e.status,o=e.updateStatus,l=e.isOwner,c=e.savePhoto,i=e.saveProfile,s=Object(a.useState)(!1),u=Object(d.a)(s,2),m=u[0],p=u[1];return t?r.a.createElement("div",{className:nt.a.profileBody},r.a.createElement("div",{className:nt.a.row},r.a.createElement("div",{className:nt.a.pictureAndSocial},r.a.createElement("div",null,r.a.createElement("img",{src:t.photos.large||"https://cs16planet.ru/images/content/avatars/avatar648.jpg",alt:"large photo"}),l&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&c(e.target.files[0])}})),r.a.createElement(at,{status:n,updateStatus:o})),r.a.createElement("div",{className:nt.a.info},m?r.a.createElement(ct,{initialValues:t,profile:t,onSubmit:function(e){i(e).then(function(){return p(!1)})}}):r.a.createElement(it,{goToEditMode:function(){p(!0)},profile:t,isOwner:l})))):r.a.createElement(ge,null)},ut=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId?this.props.match.params.userId:this.props.authorizedUserId;e||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){console.log("Profile componentDidMount"),this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&(console.log("Profile componentDidUpdate"),this.refreshProfile())}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,!0===this.props.isFetching?r.a.createElement(ge,null):null,r.a.createElement(st,Object.assign({},this.props,{isOwner:!this.props.match.params.userId})))}}]),t}(r.a.Component),mt=Object(xe.d)(Object(O.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getProfile:$e,getStatus:function(e){return function(t){C(e).then(function(e){return t(Qe(e))})}},updateStatus:function(e){return function(t){y(e).then(function(n){0===n.data.resultCode&&t(Qe(e))})}},savePhoto:function(e){return function(){var t=Object(Ee.a)(ve.a.mark(function t(n){var a;return ve.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e);case 2:0===(a=t.sent).data.resultCode&&n((r=a.data.data.photos,{type:qe,photos:r}));case 4:case"end":return t.stop()}var r},t)}));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(Ee.a)(ve.a.mark(function t(n,a){var r,o;return ve.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,I(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n($e(r)),t.next=10;break;case 8:return n(Object(A.a)("editProfile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}}),v.f)(ut),dt=n(39),pt=n.n(dt);var ft=function(e){return r.a.createElement("div",{className:pt.a.goods_item},r.a.createElement("div",{className:pt.a.name},r.a.createElement("h3",null,e.name)),r.a.createElement("div",{className:pt.a.picture},r.a.createElement("img",{src:e.img})),r.a.createElement("div",{className:pt.a.priceAndAdd},r.a.createElement("div",{className:pt.a.price},r.a.createElement("h5",null,e.price,"$")),r.a.createElement("div",{className:pt.a.add},r.a.createElement("button",{onClick:function(){console.log(e.id)}},"Add"))))},gt=[{id:10001,name:"vanish",image:"1014474865.jpg",price:50},{id:10002,name:"finish lemon",image:"1021028103.jpg",price:55},{id:10003,name:"QNT delicious whey",image:"1022398092.jpg",price:49},{id:10004,name:"Nitro TECH",image:"1023887020.jpg",price:55},{id:10005,name:"Finish powerball",image:"6000004255.jpg",price:87}];var ht=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Store"),gt.map(function(e){return r.a.createElement(ft,{key:e.id,id:e.id,name:e.name,img:e.image,price:e.price})}))},vt=n(70),Et=n.n(vt);var bt=function(e){var t=Object(a.useState)(e.status),n=Object(d.a)(t,2),o=n[0],l=n[1],c=function(){l(!o)};return r.a.createElement("div",null,r.a.createElement("div",null,!o&&r.a.createElement("div",{className:Et.a.full_dress,onClick:c},r.a.createElement("h3",null,"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044b\u0439")),o&&r.a.createElement("div",{className:Et.a.convolute,onClick:c},r.a.createElement("h3",null,"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044b\u0439"))))};var _t=function(e){for(var t=[],n=0;n<5;n++)t.push(r.a.createElement(bt,{status:0!==n}));return r.a.createElement("div",null,t)},Ot=n(95),Pt=n.n(Ot),wt=function(e){return console.log("ChildComponent props"),console.log(e),r.a.createElement("div",{className:"".concat(Pt.a.childComponent," ").concat(e.isActive?"".concat(Pt.a.active):""),onClick:e.onClick,"data-id":e.id,"data-name":e.name},r.a.createElement("h3",null,e.name))},jt=function(e){var t=e.items;t=[{id:0,name:"\u043e\u0434\u0438\u043d"},{id:1,name:"\u0434\u0432\u0430"},{id:2,name:"\u0442\u0440\u0438"}];var n=Object(a.useState)(null),o=Object(d.a)(n,2),l=o[0],c=o[1],i=function(e){var t=Number(e.target.dataset.id);console.log("came "+t+"; active "+l),t===l?(console.log("Set null"),c(null)):(console.log("Set "+t),c(t))};return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(wt,Object.assign({key:e.id,onClick:i,isActive:e.id===l,temp:l},e))}))},St=Object(J.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:lt.a.dwsInput},r.a.createElement(B.a,{placeholder:"Login/Email",name:"email",component:X,type:"email",validate:[H]})),r.a.createElement("div",{className:lt.a.dwsInput},r.a.createElement(B.a,{placeholder:"Password",name:"password",component:X,type:"password",validate:[H]})),r.a.createElement("div",null,r.a.createElement(B.a,{type:"checkbox",name:"remember me",component:X})," remember me"),console.log("props.error "+n),n&&r.a.createElement("div",{className:lt.a.errorMessage},n),r.a.createElement("div",null,r.a.createElement("button",{className:lt.a.dwsSubmit},"Enter")))}),kt=Object(O.b)(function(e){return{isAuth:e.auth.isAuth}},{login:function(e,t,n){return function(a){S.login(e,t,n).then(function(e){if(0===e.data.resultCode)a(function(e){j.authMe().then(function(t){0===t.resultCode?(console.log(t),e(T(t.data.id,t.data.email,t.data.login,!0)),k(t.data.id).then(function(t){t.photos.small?e(x(r.a.createElement("img",{src:t.photos.small,alt:"small avatar"}))):e(x(r.a.createElement("img",{src:"https://cs16planet.ru/images/content/avatars/avatar648.jpg",alt:"small avatar"})))})):console.log("Error of authentication\nresultCode "+t.resultCode)})});else{var t=e.length>0?e.data.message:"Some error";a(Object(A.a)("login",{_error:t}))}})}}})(function(e){var t=e.login;return e.isAuth?r.a.createElement(v.a,{to:"/profile"}):r.a.createElement("div",{className:lt.a.container},r.a.createElement("h1",null,"LOGIN"),r.a.createElement(St,{onSubmit:function(e){console.log(e),t(e.email,e.password,e.rememberMe)}}))}),Ct=n(40),yt=n.n(Ct);var Nt=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)("".concat(yt.a.box," ").concat(yt.a.disconnect)),c=Object(d.a)(l,2),i=c[0],s=c[1];return r.a.createElement("div",null,r.a.createElement("div",{className:i},"News",r.a.createElement("div",null,r.a.createElement("h5",null,i),r.a.createElement("button",{onClick:function(){return!1===n?(s(i.replace(yt.a.disconnect,yt.a.active)),o(!0)):(s(i.replace(yt.a.active,yt.a.disconnect)),o(!1)),void console.log(i)}},"test"))))},It=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(Nt,this.props)}}]),t}(r.a.Component),At=Object(xe.d)()(It),Ft={initialized:!1},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft;switch((arguments.length>1?arguments[1]:void 0).type){case"_react_test/app-reduser/INITIALIZED-SUCCESS":return Object(P.a)({},e,{initialized:!0});default:return e}},xt=n(126),Lt=n(137),Ut=n(129),Mt=Object(xe.c)({postsPage:re,dialogsPage:xt.b,usersPage:Te,profilePage:et,auth:L,app:Tt,form:Ut.a}),zt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.d,Dt=Object(xe.e)(Mt,zt(Object(xe.a)(Lt.a)));window.__store__=Dt;var Gt=Dt,Rt=r.a.lazy(function(){return n.e(3).then(n.bind(null,291))}),Bt=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"componentDidUpdate",value:function(e,t,n){e.userId!==this.props.userId&&(console.log(this.props.userId),this.props.getAuthAvatar(this.props.userId))}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(M,null),r.a.createElement("div",{className:"navbar"},r.a.createElement(h,null)),r.a.createElement("div",{className:"content"},r.a.createElement(v.b,{path:"/dialogs",render:(e=Rt,function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))})}),r.a.createElement(v.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(mt,null)}}),r.a.createElement(v.b,{path:"/news",render:function(){return r.a.createElement(At,null)}}),r.a.createElement(v.b,{path:"/posts",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(v.b,{path:"/users",render:function(){return r.a.createElement(Ve,null)}}),r.a.createElement(v.b,{path:"/login",render:function(){return r.a.createElement(kt,null)}}),r.a.createElement(v.b,{path:"/store",render:function(){return r.a.createElement(ht,null)}}),r.a.createElement(v.b,{path:"/papers",render:function(){return r.a.createElement(_t,null)}}),r.a.createElement(v.b,{path:"/garbage",render:function(){return r.a.createElement(jt,null)}}))):r.a.createElement(ge,null);var e}}]),t}(a.Component),Jt=Object(xe.d)(v.f,Object(O.b)(function(e){return{initialized:e.app.initialized,userId:e.auth.userId}},{initializeApp:function(){return function(e){var t=e(function(e){return j.authMe().then(function(t){if(0===t.resultCode){var n=t.data,a=n.id,r=n.login,o=n.email;e(T(a,o,r,!0))}})});Promise.all([t]).then(function(){e({type:"_react_test/app-reduser/INITIALIZED-SUCCESS"})})}},getAuthAvatar:function(e){return function(t){k(e).then(function(e){e.photos.small?t(x(r.a.createElement("img",{src:e.photos.small,alt:"small avatar"}))):t(x(r.a.createElement("img",{src:"https://cs16planet.ru/images/content/avatars/avatar648.jpg",alt:"small avatar"})))})}}}))(Bt),Ht=function(e){return r.a.createElement(g.a,{basename:"/reactLearning"},r.a.createElement(O.a,{store:Gt},r.a.createElement(Jt,null)))};l.a.render(r.a.createElement(Ht,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,n){e.exports={container:"Login_container__1B5YB",dwsSubmit:"Login_dwsSubmit__1M4XA",dwsInput:"Login_dwsInput__2YMAk",errorMessage:"Login_errorMessage__CtvHG"}},39:function(e,t,n){e.exports={goods_item:"Product_goods_item__1VZt0",name:"Product_name__KcLQW",picture:"Product_picture__eaM1R",priceAndAdd:"Product_priceAndAdd__1tNkt",price:"Product_price__2_i3Y",add:"Product_add__3Wwab"}},40:function(e,t,n){e.exports={box:"News_box__12md6",active:"News_active__6-l6Z",disconnect:"News_disconnect__3OEYa",color:"News_color__ACZGQ"}},55:function(e,t,n){e.exports={profileBody:"Profile_profileBody__2wZAC",row:"Profile_row__1ojMc",pictureAndSocial:"Profile_pictureAndSocial__3l99r",info:"Profile_info__71Nkv"}},70:function(e,t,n){e.exports={convolute:"Papers_convolute__1l6Xs",full_dress:"Papers_full_dress__nC4aF"}},8:function(e,t,n){e.exports={nav:"Navbar_nav__I8edd",item:"Navbar_item__5rG_L",activeLink:"Navbar_activeLink__2q0DS",usersPressed:"Navbar_usersPressed__2_2Oq",usersNotPressed:"Navbar_usersNotPressed__18_7N"}},88:function(e,t,n){e.exports={header:"Header_header__2AByi",loginBlock:"Header_loginBlock__1kPFM"}},90:function(e,t,n){e.exports={formControl:"FormsControls_formControl__lYFFh",error:"FormsControls_error__RGOYY"}},93:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__2U3Zh",card:"Users_card__38db5"}},94:function(e,t,n){e.exports={pagination:"Pagination_pagination__2qvOn",selectedPage:"Pagination_selectedPage__3S3wI",active:"Pagination_active__1T1GS"}},95:function(e,t,n){e.exports={childComponent:"Garbage_childComponent__10FcR",active:"Garbage_active__3ZgSp"}}},[[163,1,2]]]);
//# sourceMappingURL=main.5edf62fe.chunk.js.map