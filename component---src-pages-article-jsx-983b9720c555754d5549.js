(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});var n=a(9),i=(a(0),a(163)),c=a(168),o=a(155),r=a.n(o);t.default=function(e){var t=e.data;return Object(n.a)(c.a,null,Object(n.a)("div",{className:r.a.article_layout},t.allMarkdownRemark.edges.map(function(e){var t=e.node;return Object(n.a)("div",{className:r.a.article_item,key:t.id},Object(n.a)("div",{className:r.a.article_item_body},Object(n.a)("h2",{className:r.a.article_item_body_title},Object(n.a)(i.a,{style:{color:"black"},to:t.fields.slug},t.frontmatter.title)),Object(n.a)("div",{className:r.a.article_item_body_des},Object(n.a)(i.a,{style:{color:"rgba(0,0,0,.54)"},to:t.fields.slug},t.excerpt)),Object(n.a)("div",{className:r.a.article_item_body_des},Object(n.a)(i.a,{to:t.fields.slug},t.frontmatter.date))))}),Object(n.a)("span",null,t.allMarkdownRemark.totalCount," Posts")))};var s="3432999163"},163:function(e,t,a){"use strict";a(9);var n=a(0),i=a.n(n),c=a(4),o=a.n(c),r=a(34),s=a.n(r);a.d(t,"a",function(){return s.a});a(164),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},164:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},165:function(e){e.exports={data:{site:{siteMetadata:{title:"superYipe's home"}}}}},166:function(e,t,a){"use strict";a.r(t);a(56);var n=a(0),i=a.n(n),c=a(4),o=a.n(c),r=a(57),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},168:function(e,t,a){"use strict";var n=a(9),i=a(165),c=a(0),o=a(163),r=a(146),s=a.n(r),l=a(147),u=a.n(l),m=a(7),d=a.n(m),b=[{path:"/",title:"Home"},{path:"/about/",title:"About"},{path:"/contact/",title:"Contact"},{path:"/article/",title:"Article"}],f=a(148),_=a.n(f),p=function(e){return Object(n.a)(o.a,{className:_.a.header_menu_link,activeClassName:_.a.header_menu_link_activeClassName,to:e.to},e.children)},v=function(e){function t(){return e.call(this)||this}return d()(t,e),t.prototype.render=function(){return b.map(function(e){return Object(n.a)(p,{key:e.title,to:e.path},e.title)})},t}(c.Component),h=a(149),j=a.n(h),O=function(e){function t(){var t;return(t=e.call(this)||this).showMenu=function(e){e.preventDefault(),t.setState({visibility:"mobile_menu_item_show"},function(){document.addEventListener("click",t.closeMenu)})},t.closeMenu=function(e){t.setState({visibility:"mobile_menu_item_hide"},function(){document.removeEventListener("click",t.closeMenu)})},t.state={visibility:"mobile_menu_item_hide"},t}return d()(t,e),t.prototype.render=function(){var e=this;return Object(n.a)("div",{className:j.a.mobile_menu},Object(n.a)("span",{className:j.a.mobile_menu_three_line,onClick:this.showMenu},Object(n.a)("div",{style:{zIndex:999,color:"white",fontSize:"40px",background:"black"}},"☰")),Object(n.a)("div",null,Object(n.a)("div",{className:""+j.a[this.state.visibility],ref:function(t){e.dropdownMenu=t}},b.map(function(e){return Object(n.a)(o.a,{activeClassName:j.a.mobile_active_menu_font_item,className:j.a.mobile_menu_font_item,key:e.title,to:e.path},e.title)}))))},t}(c.Component),y=function(e){return Object(n.a)("div",null,Object(n.a)("header",{className:u.a.header},Object(n.a)("div",{className:u.a.header_menu},Object(n.a)(v,null))),Object(n.a)(O,{routers:"route"}))};t.a=function(e){var t=e.children;i.data;return Object(n.a)("div",{className:s.a.layout},Object(n.a)(y,null),Object(n.a)("div",{className:s.a.content},t))}}}]);
//# sourceMappingURL=component---src-pages-article-jsx-983b9720c555754d5549.js.map