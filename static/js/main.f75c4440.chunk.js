(this.webpackJsonpqhacks2021=this.webpackJsonpqhacks2021||[]).push([[0],{44:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),c=n(15),o=n.n(c),d=n(32),u=n(14),b=n(16),s=n(17),l=n(19),f=n(18),g=n(3),m=n(22),j=n(4),h=n(9);function y(){var e=Object(h.a)(["\n\t\t\tfont-size: 150%;\n\t\t"]);return y=function(){return e},e}function F(){var e=Object(h.a)(["\n\t\t\tfont-size: 300%;\n\t\t"]);return F=function(){return e},e}function p(){var e=Object(h.a)(["\n\tcolor: ",";\n\tfont-family: ",";\n\tfont-weight: ",";\n\tfont-size: 250%;\n\tpadding: 0 0.5em;\n\t","\n\t","\n"]);return p=function(){return e},e}function O(){var e=Object(h.a)(["\n\t\t\tjustify-content: flex-start;\n\t\t"]);return O=function(){return e},e}function v(){var e=Object(h.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tpadding: 0 0.5em;\n\twidth: 50%;\n\t","\n"]);return v=function(){return e},e}function x(){var e=Object(h.a)(["\n\twidth: 10%;\n"]);return x=function(){return e},e}function k(){var e=Object(h.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 0.25em 0;\n\tposition: fixed;\n\tz-index: 10;\n\n\tposition: fixed;\n\ttop: 0;\n\theight: 100px;\n\n\tbackground-color: ",";\n"]);return k=function(){return e},e}var D=j.c.div(k(),(function(e){return e.theme.colors.grey1})),w=j.c.img(x()),B=j.c.div(v(),(function(e){return e.logo&&Object(j.b)(O())})),T=j.c.div(p(),(function(e){return e.theme.colors.darkRed}),(function(e){return e.theme.fonts.familyHeader}),(function(e){return e.theme.fonts.weightRegular}),(function(e){return e.logo&&Object(j.b)(F())}),(function(e){return e.small&&Object(j.b)(y())})),E=n.p+"static/media/dumbbell.02969ce7.svg",P=function(){},A=Object(j.d)((function(e){return Object(a.jsxs)(D,{onClick:function(){return P},children:[Object(a.jsxs)(B,{logo:!0,children:[Object(a.jsx)(w,{src:E}),Object(a.jsx)(T,{logo:!0,children:"QuickFit"})]}),Object(a.jsxs)(B,{children:[Object(a.jsx)(T,{small:!0,children:"Become a host"}),Object(a.jsx)(T,{small:!0,children:"Sign Up"}),Object(a.jsx)(T,{children:"Login"})]})]})}));function M(){var e=Object(h.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n"]);return M=function(){return e},e}var R=j.c.div(M()),C=n.p+"static/media/Garage-Gym.eccb60cd.jpg",S={toLanding:function(){return"/"},toLogin:function(){return"/login"}},L=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(R,{children:[Object(a.jsx)(A,{}),Object(a.jsx)("img",{src:C,width:"100%",height:"80%",alt:"Garage Gym"})]})}}]),n}(i.a.Component),U=Object(j.d)(L),G=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(){}},{key:"renderPublicRoute",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return Object(a.jsx)(g.a,{exact:n,path:e,render:function(e){return Object(a.jsx)(t,Object(u.a)({},e))}})}},{key:"renderNotFoundRoute",value:function(e){return Object(a.jsx)(g.a,{component:e})}},{key:"onErrorAcknowledge",value:function(){}},{key:"render",value:function(){return Object(a.jsx)(m.a,{children:Object(a.jsx)(g.c,{children:this.renderPublicRoute(S.toLanding(),U)})})}}]),n}(r.Component),I={familyBody:'"IBM Plex Sans", sans-serif',familyHeader:'"IBM Plex Sans", sans-serif',familyMono:"monospace",weightThin:100,weightExtraLight:200,weightLight:300,weightRegular:400,weightMedium:500,weightStrong:600,weightHeavy:700},N={systemBackgroundPrimary:"#FFFFFF",systemBackgroundSecondary:"#F8F8F8",systemBackgroundTertiary:"#F2F2F2",elevatedBackgroundPrimary:"#FFFFFF",elevatedBackgroundSecondary:"#F8F8F8",elevatedBackgroundTertiary:"#F2F2F2",textPrimary:"#000000",textSecondary:"#BFBFBF",textTertiary:"#8D8D8D",grey1:"#FFFFFF",grey2:"#F2F2F7",grey3:"#E5E5EA",grey4:"#AEAEB2",grey5:"#8E8E93",grey6:"#19191B",lightPurple:"#A852FF",purple:"#810BF8",darkPurple:"#5E16BA",lightGreen:"#23D8B6",green:"#1DBC94",darkGreen:"#17A078",lightYellow:"#FFE26A",yellow:"#FED941",darkYellow:"#FDB300",lightRed:"#FF8686",red:"#FE4141",darkRed:"#D93838",myPurple:"#a5b0fe",myDarkPurple:"#7d8dff",myVeryDarkPurple:"#3847b0"},_=function(e){var t={colors:N,fonts:I};return Object(a.jsx)(j.a,{theme:t,children:Object(a.jsx)(G,{})})},H=n(13),K={UPDATE_BUDDY_INFO:"UPDATE_BUDDY_INFO"},Y={userList:{buddies:[{name:"Michael Kurdyla",uid:"193c8f28-8536-4792-812c-70b1e1915ba8",dateAccountCreated:"22/1/2021",bookings:[{bid:"57ceee7d-71fc-4e20-b42b-8625547193e1",gym:"Ronnie's palace",gid:"aa3268e9-351a-47a1-a2bf-8e9efd8e6473",date:"23/1/2021",startTime:1900,timeDuration:60,price:21},{bid:"e4fe9a6b-0fb5-4437-8de0-d84163d8a3bb",gym:"Ronnie's palace",gid:"aa3268e9-351a-47a1-a2bf-8e9efd8e6473",date:"24/1/2021",startTime:1900,timeDuration:120,price:42},{bid:"a84bab82-42a3-4aec-80ba-3aca242b49f8",gym:"Ronnie's palace",gid:"aa3268e9-351a-47a1-a2bf-8e9efd8e6473",date:"25/1/2021",startTime:1900,timeDuration:60,price:21},{bid:"7a792542-e267-4642-951d-cc587ffc6ee0",gym:"The Meat Factory",gid:"6eb1d45b-2fb3-42ab-a560-5a3c33ed6920",date:"26/1/2021",startTime:1900,timeDuration:60,price:19}]}],owners:[{name:"Andrew Simonds",gymName:"The Meat Factory",gid:"6eb1d45b-2fb3-42ab-a560-5a3c33ed6920",dateAccountCreated:"22/1/2021",pricePerHour:19,bookings:[{bid:"7a792542-e267-4642-951d-cc587ffc6ee0",name:"Michael Kurdyla",uid:"193c8f28-8536-4792-812c-70b1e1915ba8",date:"26/1/2021",startTime:1900,timeDuration:60,price:19}]},{name:"Matthew Tanel",gymName:"Ronnie's palace",gid:"aa3268e9-351a-47a1-a2bf-8e9efd8e6473",dateAccountCreated:"22/1/2021",pricePerHour:"21.00",bookings:[{bid:"57ceee7d-71fc-4e20-b42b-8625547193e1",name:"Michael Kurdyla",uid:"193c8f28-8536-4792-812c-70b1e1915ba8",date:"23/1/2021",startTime:"1900",timeDuration:"60",price:"21.00"},{bid:"e4fe9a6b-0fb5-4437-8de0-d84163d8a3bb",name:"Michael Kurdyla",uid:"193c8f28-8536-4792-812c-70b1e1915ba8",date:"24/1/2021",startTime:"1900",timeDuration:"120",price:"42.00"},{bid:"a84bab82-42a3-4aec-80ba-3aca242b49f8",name:"Michael Kurdyla",uid:"193c8f28-8536-4792-812c-70b1e1915ba8",date:"25/1/2021",startTime:"1900",timeDuration:"60",price:"21.00"}]}]}},z=Object(H.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case K.UPDATE_BUDDY_INFO:a.user;return Object(u.a)(Object(u.a)({},e),{},{buddies:Object(u.a)({},e.buddies)});default:return e}}}),q=Object(H.c)(z);o.a.render(Object(a.jsx)(d.a,{store:q,children:Object(a.jsx)(_,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f75c4440.chunk.js.map