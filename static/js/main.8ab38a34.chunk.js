(this.webpackJsonpClassEditor=this.webpackJsonpClassEditor||[]).push([[0],{12:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(7),i=s.n(r),c=(s(12),s(2)),l=s(3),d=s(5),o=s(4),b=s(0),j=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).setSelection=function(e){e.persist(),a.setState({selection:e.target.name})},a.state={selection:n.a.Children.toArray(e.children)[0].props.name},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-2",children:n.a.Children.map(this.props.children,(function(t){return Object(b.jsx)("button",{name:t.props.name,onClick:e.setSelection,className:"btn btn-block m-2\n                            ".concat(e.state.selection===t.props.name?"btn-primary active":"btn-secondary"),children:t.props.name})}))}),Object(b.jsx)("div",{className:"col",children:n.a.Children.toArray(this.props.children).filter((function(t){return t.props.name===e.state.selection}))})]})})}}]),s}(a.Component),h=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.product;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.id}),Object(b.jsx)("td",{children:t.description}),Object(b.jsx)("td",{children:t.semester}),Object(b.jsx)("td",{children:t.prefix}),Object(b.jsx)("td",{children:t.number}),Object(b.jsx)("td",{children:t.grade}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{className:"btn btn-sm btn-warning m-1",onClick:function(){return e.props.editCallback(t)},children:"Edit"}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger m-1",onClick:function(){return e.props.deleteCallback(t)},children:"Delete"})]})]})}}]),s}(a.Component),u=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("table",{className:"table table-sm table-bordered table-dark table-hover",children:[Object(b.jsxs)("thead",{children:[Object(b.jsx)("tr",{children:Object(b.jsx)("th",{colSpan:"7",className:"bg-primary text-white text-center h4 p-2",children:"Academic Foundation"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Description"}),Object(b.jsx)("th",{children:"Semester"}),Object(b.jsx)("th",{children:"Prefix"}),Object(b.jsx)("th",{children:"Number"}),Object(b.jsx)("th",{children:"Grade"}),Object(b.jsx)("th",{children:"Editor"})]})]}),Object(b.jsx)("tbody",{children:this.props.courses.map((function(t){return Object(b.jsx)(h,{product:t,editCallback:e.props.editCallback,deleteCallback:e.props.deleteCallback},t.id)}))})]})}}]),s}(a.Component),m=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).handleChange=function(e){e.persist(),a.setState((function(t){return t.formData[e.target.name]=e.target.value}))},a.handleClick=function(){a.props.saveCallback(a.state.formData)},a.state={formData:{id:e.course.id||"",description:e.course.description||"",semester:e.course.semester||"",prefix:e.course.prefix||"",number:e.course.number||"",grade:e.course.grade||""}},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"m-2",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"ID"}),Object(b.jsx)("input",{className:"form-control",name:"id",disabled:!0,value:this.state.formData.id,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Description"}),Object(b.jsx)("input",{className:"form-control",name:"description",value:this.state.formData.description,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Semester"}),Object(b.jsx)("input",{className:"form-control",name:"semester",value:this.state.formData.semester,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Prefix"}),Object(b.jsx)("input",{className:"form-control",name:"prefix",value:this.state.formData.prefix,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Number"}),Object(b.jsx)("input",{className:"form-control",name:"number",value:this.state.formData.number,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Grade"}),Object(b.jsx)("input",{className:"form-control",name:"grade",value:this.state.formData.grade,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("button",{className:"btn btn-primary m-1",onClick:this.handleClick,children:"Save"}),Object(b.jsx)("button",{className:"btn btn-secondary",onClick:this.props.cancelCallback,children:"Cancel"})]})]})}}]),s}(a.Component),p=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).startEditing=function(e){a.setState({displayEditor:!0,selectedCourse:e})},a.createCourse=function(){a.setState({displayEditor:!0,selectedCourse:{}})},a.cancelEditing=function(){a.setState({displayEditor:!1,selectedCourse:null})},a.saveCourse=function(e){a.props.saveCallback(e),a.setState({displayEditor:!1,selectedCourse:null})},a.state={displayEditor:!1,selectedCourse:null},a}return Object(l.a)(s,[{key:"render",value:function(){return this.state.displayEditor?Object(b.jsx)(m,{course:this.state.selectedCourse,saveCallback:this.saveCourse,cancelCallback:this.cancelEditing},this.state.selectedCourse.id||-1):Object(b.jsxs)("div",{className:"m-2",children:[Object(b.jsx)(u,{courses:this.props.courses,editCallback:this.startEditing,deleteCallback:this.props.deleteCallback}),Object(b.jsx)("div",{className:"text-center"})]})}}]),s}(a.Component),O=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).handleChange=function(e){e.persist(),a.setState((function(t){return t.formData[e.target.name]="courses"===e.target.name?e.target.value.split(","):e.target.value}))},a.handleClick=function(){a.props.saveCallback(a.state.formData)},a.state={formData:{id:e.supplier.id||"",description:e.supplier.description||"",semester:e.supplier.semester||"",prefix:e.supplier.prefix||"",number:e.supplier.number||"",grade:e.supplier.grade||""}},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"m-2",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"ID"}),Object(b.jsx)("input",{className:"form-control",name:"id",disabled:!0,value:this.state.formData.id,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Description"}),Object(b.jsx)("input",{className:"form-control",name:"description",value:this.state.formData.description,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Semester"}),Object(b.jsx)("input",{className:"form-control",name:"semester",value:this.state.formData.semester,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Prefix"}),Object(b.jsx)("input",{className:"form-control",name:"prefix",value:this.state.formData.prefix,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Number"}),Object(b.jsx)("input",{className:"form-control",name:"number",value:this.state.formData.number,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Grade"}),Object(b.jsx)("input",{className:"form-control",name:"grade",value:this.state.formData.grade,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("button",{className:"btn btn-primary m-1",onClick:this.handleClick,children:"Save"}),Object(b.jsx)("button",{className:"btn btn-secondary",onClick:this.props.cancelCallback,children:"Cancel"})]})]})}}]),s}(a.Component),x=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.supplier;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.id}),Object(b.jsx)("td",{children:t.description}),Object(b.jsx)("td",{children:t.semester}),Object(b.jsx)("td",{children:t.prefix}),Object(b.jsx)("td",{children:t.number}),Object(b.jsx)("td",{children:t.grade}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{className:"btn btn-sm btn-warning m-1",onClick:function(){return e.props.editCallback(t)},children:"Edit"}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger m-1",onClick:function(){return e.props.deleteCallback(t)},children:"Delete"})]})]})}}]),s}(a.Component),f=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("table",{className:"table table-sm table-bordered table-dark table-hover",children:[Object(b.jsxs)("thead",{children:[Object(b.jsx)("th",{colSpan:"7",className:"bg-primary text-white text-center h4 p-2",children:"Distributive Requirement"}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Description"}),Object(b.jsx)("th",{children:"Semester"}),Object(b.jsx)("th",{children:"Prefix"}),Object(b.jsx)("th",{children:"Number"}),Object(b.jsx)("th",{children:"Grade"}),Object(b.jsx)("th",{children:"Editor"})]})]}),Object(b.jsx)("tbody",{children:this.props.suppliers.map((function(t){return Object(b.jsx)(x,{supplier:t,editCallback:e.props.editCallback,deleteCallback:e.props.deleteCallback},t.id)}))})]})}}]),s}(a.Component),C=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).startEditing=function(e){a.setState({displayEditor:!0,selected:e})},a.createSupplier=function(){a.setState({displayEditor:!0,selected:{}})},a.cancelEditing=function(){a.setState({displayEditor:!1,selected:null})},a.saveSupplier=function(e){a.props.saveCallback(e),a.setState({displayEditor:!1,selected:null})},a.state={displayEditor:!1,selected:null},a}return Object(l.a)(s,[{key:"render",value:function(){return this.state.displayEditor?Object(b.jsx)(O,{supplier:this.state.selected,saveCallback:this.saveSupplier,cancelCallback:this.cancelEditing},this.state.selected.id||-1):Object(b.jsxs)("div",{className:"m-2",children:[Object(b.jsx)(f,{suppliers:this.props.suppliers,editCallback:this.startEditing,deleteCallback:this.props.deleteCallback}),Object(b.jsx)("div",{className:"text-center"})]})}}]),s}(a.Component),v=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).handleChange=function(e){e.persist(),a.setState((function(t){return t.formData[e.target.name]="additionals"===e.target.name?e.target.value.split(","):e.target.value}))},a.handleClick=function(){a.props.saveCallback(a.state.formData)},a.state={formData:{id:e.additionals.id||"",description:e.additionals.description||"",semester:e.additionals.semester||"",prefix:e.additionals.prefix||"",number:e.additionals.number||"",grade:e.additionals.grade||""}},a}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"m-2",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"ID"}),Object(b.jsx)("input",{className:"form-control",name:"id",disabled:!0,value:this.state.formData.id,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Description"}),Object(b.jsx)("input",{className:"form-control",name:"description",value:this.state.formData.description,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Semester"}),Object(b.jsx)("input",{className:"form-control",name:"semester",value:this.state.formData.semester,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Prefix"}),Object(b.jsx)("input",{className:"form-control",name:"prefix",value:this.state.formData.prefix,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Number"}),Object(b.jsx)("input",{className:"form-control",name:"number",value:this.state.formData.number,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Grade"}),Object(b.jsx)("input",{className:"form-control",name:"grade",value:this.state.formData.grade,onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("button",{className:"btn btn-primary m-1",onClick:this.handleClick,children:"Save"}),Object(b.jsx)("button",{className:"btn btn-secondary",onClick:this.props.cancelCallback,children:"Cancel"})]})]})}}]),s}(a.Component),g=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=this.props.additionals;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.id}),Object(b.jsx)("td",{children:t.description}),Object(b.jsx)("td",{children:t.semester}),Object(b.jsx)("td",{children:t.prefix}),Object(b.jsx)("td",{children:t.number}),Object(b.jsx)("td",{children:t.grade}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{className:"btn btn-sm btn-warning m-1",onClick:function(){return e.props.editCallback(t)},children:"Edit"}),Object(b.jsx)("button",{className:"btn btn-sm btn-danger m-1",onClick:function(){return e.props.deleteCallback(t)},children:"Delete"})]})]})}}]),s}(a.Component),k=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("table",{className:"table table-sm table-bordered table-dark table-hover",children:[Object(b.jsxs)("thead",{children:[Object(b.jsx)("th",{colSpan:"7",className:"bg-primary text-white text-center h4 p-2",children:"Additional Requirement"}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Description"}),Object(b.jsx)("th",{children:"Semester"}),Object(b.jsx)("th",{children:"Prefix"}),Object(b.jsx)("th",{children:"Number"}),Object(b.jsx)("th",{children:"Grade"}),Object(b.jsx)("th",{children:"Editor"})]})]}),Object(b.jsx)("tbody",{children:this.props.additionals.map((function(t){return Object(b.jsx)(g,{additionals:t,editCallback:e.props.editCallback,deleteCallback:e.props.deleteCallback},t.id)}))})]})}}]),s}(a.Component),N=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).startEditing=function(e){a.setState({displayEditor:!0,selected:e})},a.createSupplier=function(){a.setState({displayEditor:!0,selected:{}})},a.cancelEditing=function(){a.setState({displayEditor:!1,selected:null})},a.saveAdditionals=function(e){a.props.saveCallback(e),a.setState({displayEditor:!1,selected:null})},a.state={displayEditor:!1,selected:null},a}return Object(l.a)(s,[{key:"render",value:function(){return this.state.displayEditor?Object(b.jsx)(v,{additionals:this.state.selected,saveCallback:this.saveAdditionals,cancelCallback:this.cancelEditing},this.state.selected.id||-1):Object(b.jsxs)("div",{className:"m-2",children:[Object(b.jsx)(k,{additionals:this.props.additionals,editCallback:this.startEditing,deleteCallback:this.props.deleteCallback}),Object(b.jsx)("div",{className:"text-center"})]})}}]),s}(a.Component),y=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).saveData=function(e,t){""===t.id?(t.id=a.idCounter++,a.setState((function(s){return s[e]=s[e].concat(t)}))):a.setState((function(s){return s[e]=s[e].map((function(e){return e.id===t.id?t:e}))}))},a.deleteData=function(e,t){a.setState((function(s){return s[e]=s[e].filter((function(e){return e.id!==t.id}))}))},a.state={courses:[{id:"1",description:"First Year Experience",semester:"",prefix:"FYE",number:"",grade:""},{id:"2",description:"English Composition I",semester:"",prefix:"WRT",number:"",grade:""},{id:"3",description:"English Composition II",semester:"",prefix:"WRT",number:"120",grade:""},{id:"4",description:"Mathematics",semester:"",prefix:"FYE",number:"200",grade:""},{id:"5",description:"Interdisciplinary",semester:"",prefix:"FYE",number:"151",grade:""},{id:"6",description:"Diverse Communities",semester:"",prefix:"FYE",number:"",grade:""}],suppliers:[{id:"1",description:"Science I",semester:"",prefix:"",number:"",grade:""},{id:"2",description:"Science II",semester:"",prefix:"",number:"",grade:""},{id:"3",description:"Behavior & Social Science I",semester:"",prefix:"",number:"",grade:""},{id:"4",description:"Behavior & Social Science II",semester:"",prefix:"",number:"",grade:""},{id:"5",description:"Humanity I",semester:"",prefix:"",number:"",grade:""},{id:"6",description:"Humanity II",semester:"",prefix:"",number:"",grade:""},{id:"7",description:"Art",semester:"",prefix:"",number:"",grade:""}],additionals:[{id:"1",description:"Writing Emphasis I",semester:"",prefix:"ENG",number:"",grade:""},{id:"2",description:"Writing Emphasis II",semester:"",prefix:"WRT",number:"",grade:""},{id:"3",description:"Writing Emphasis III",semester:"",prefix:"WRT",number:"",grade:""},{id:"4",description:"Speaking Emphasis I",semester:"",prefix:"SPK",number:"",grade:""},{id:"5",description:"Speaking Emphasis II",semester:"",prefix:"",number:"",grade:""},{id:"6",description:"Speaking Emphasis III",semester:"",prefix:"",number:"",grade:""}]},a.idCounter=100,a}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{children:Object(b.jsxs)(j,{children:[Object(b.jsx)(p,{name:"Academic Foundation",courses:this.state.courses,saveCallback:function(t){return e.saveData("courses",t)},deleteCallback:function(t){return e.deleteData("courses",t)}}),Object(b.jsx)(C,{name:"Distributive Requirement",suppliers:this.state.suppliers,saveCallback:function(t){return e.saveData("suppliers",t)},deleteCallback:function(t){return e.deleteData("suppliers",t)}}),Object(b.jsx)(N,{name:"Additional Requirement",additionals:this.state.additionals,saveCallback:function(t){return e.saveData("additionals",t)},deleteCallback:function(t){return e.deleteData("additionals",t)}})]})})}}]),s}(a.Component),D=function(e){Object(d.a)(s,e);var t=Object(o.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)(y,{})}}]),s}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s(14);i.a.render(Object(b.jsx)(D,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.8ab38a34.chunk.js.map