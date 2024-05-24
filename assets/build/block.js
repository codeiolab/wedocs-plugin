!function(){"use strict";var e,t={994:function(){var e=window.wp.element,t=window.wp.blocks,o=window.wp.i18n,l=window.wp.primitives,a=(0,e.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(l.Path,{d:"M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zM12.8 3h-1.5v3h1.5V3zm-1.6 18h1.5v-3h-1.5v3zm6.8-9.8v1.5h3v-1.5h-3zm-12 0H3v1.5h3v-1.5zm9.7 5.6 2.1 2.1 1.1-1.1-2.1-2.1-1.1 1.1zM8.3 7.2 6.2 5.1 5.1 6.2l2.1 2.1 1.1-1.1zM5.1 17.8l1.1 1.1 2.1-2.1-1.1-1.1-2.1 2.1zM18.9 6.2l-1.1-1.1-2.1 2.1 1.1 1.1 2.1-2.1z"})),n=(0,e.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(l.Path,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})),r=window.wp.blockEditor,i=window.wp.components,d=({label:t,value:l,unit:a,onValueChange:n,onUnitChange:r})=>(0,e.createElement)(i.Flex,null,(0,e.createElement)(i.FlexBlock,null,(0,e.createElement)(i.TextControl,{label:t,value:parseInt(l),onChange:e=>n(e)})),(0,e.createElement)(i.FlexItem,null,(0,e.createElement)(i.SelectControl,{label:(0,o.__)("Unit","wedocs"),value:a,options:[{label:"px",value:"px"},{label:"%",value:"%"}],onChange:e=>r(e)}))),c=({selected:t,options:o,onChange:l})=>(0,e.createElement)(i.BaseControl,null,(0,e.createElement)("div",{className:"radio-image-control-options"},o.map((o=>(0,e.createElement)("div",{key:o.value,className:"radio-image-option"},(0,e.createElement)("input",{type:"radio",id:`radio-image-${o.value}`,value:o.value,checked:t===o.value,onChange:e=>l(e.target.value)}),(0,e.createElement)("label",{htmlFor:`radio-image-${o.value}`},o.icon&&(0,e.createElement)("i",{className:`dashicons ${o.icon}`}),o.img&&(0,e.createElement)("img",{src:o.img,alt:o.label}),o?.svg)))))),s={hideSearch:{type:"boolean",default:!1},searchWidth:{type:"number",default:50},widthUnit:{type:"string",default:"%"},placeholder:{type:"string",default:(0,o.__)("Search for a top or question","wedocs")},alignment:{type:"string",default:"right"},bgColor:{type:"string",default:"#FFFFFF"},hoverColor:{type:"string",default:"#FFFFFF"},padding:{type:"object",default:{top:14,left:22,right:22,bottom:14}},margin:{type:"object",default:{top:0,left:0,right:0,bottom:0}},borderColor:{type:"string",default:"#cccccc"},borderType:{type:"string",default:"solid"},borderWidth:{type:"number",default:1},borderRadius:{type:"number",default:30},iconColor:{type:"string",default:"#FFFFFF"},iconBgColor:{type:"string",default:"#3b82f6"},iconHoverColor:{type:"string",default:"#2563eb"},svgHoverColor:{type:"string",default:"#FFFFFF"},btnPadding:{type:"object",default:{top:24,left:26,right:26,bottom:24}},btnPosition:{type:"object",default:{top:0,right:0,bottom:10}},btnRadius:{type:"number",default:30}};(0,t.registerBlockType)("wedocs/wedocs-search",{attributes:s,save:({attributes:t})=>{const{margin:o,bgColor:l,padding:a,btnRadius:n,alignment:i,iconColor:d,widthUnit:c,hoverColor:s,borderType:u,hideSearch:g,btnPadding:h,searchWidth:m,btnPosition:p,placeholder:b,borderColor:v,borderWidth:C,iconBgColor:f,borderRadius:w,svgHoverColor:_,iconHoverColor:E}=t;if(g)return;const y={display:"flex",justifyContent:i},x={border:`${C}px ${u} ${v}`,paddingTop:a?.top,paddingLeft:a?.left,paddingRight:a?.right,borderRadius:`${w}px`,paddingBottom:a?.bottom,"--field-color":l,"--field-bg-color":s},B={top:p?.top,left:p?.left,right:p?.right,bottom:p?.bottom,height:"auto",paddingTop:h?.top,paddingLeft:h?.left,borderRadius:n,paddingRight:h?.right,paddingBottom:h?.bottom,"--field-icon-color":d,"--field-btn-bg-color":f,"--field-icon-hover-color":_,"--field-btn-bg-hover-color":E};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("form",{method:"get",role:"search",action:weDocsBlockVars?.siteUrl,...r.useBlockProps.save({className:"search-form wedocs-search-form"})},(0,e.createElement)("div",{style:y},(0,e.createElement)("div",{className:"wedocs-search-input",style:{width:m+c,marginTop:o?.top,marginLeft:o?.left,marginRight:o?.right,marginBottom:o?.bottom}},(0,e.createElement)("input",{name:"s",type:"search",style:x,className:"search-field",placeholder:b}),(0,e.createElement)("input",{type:"hidden",name:"post_type",value:"docs"}),(0,e.createElement)("button",{type:"submit",style:B,className:"search-submit"},(0,e.createElement)("svg",{width:"15",height:"16",fill:"none"},(0,e.createElement)("path",{fillRule:"evenodd",d:"M11.856 10.847l2.883 2.883a.89.89 0 0 1 0 1.257c-.173.174-.401.261-.629.261s-.455-.087-.629-.261l-2.883-2.883c-1.144.874-2.532 1.353-3.996 1.353a6.56 6.56 0 0 1-4.671-1.935c-2.576-2.575-2.576-6.765 0-9.341C3.179.934 4.839.247 6.603.247s3.424.687 4.671 1.935a6.56 6.56 0 0 1 1.935 4.67 6.55 6.55 0 0 1-1.353 3.995zM3.189 3.439c-1.882 1.882-1.882 4.945 0 6.827.912.912 2.124 1.414 3.414 1.414s2.502-.502 3.414-1.414 1.414-2.124 1.414-3.413-.502-2.502-1.414-3.413-2.124-1.414-3.414-1.414-2.502.502-3.414 1.414z"})))))))},edit:({attributes:t,setAttributes:l})=>{const s=(0,r.useBlockProps)(),{margin:u,bgColor:g,padding:h,btnRadius:m,alignment:p,iconColor:b,widthUnit:v,hoverColor:C,borderType:f,hideSearch:w,btnPadding:_,searchWidth:E,btnPosition:y,placeholder:x,borderColor:B,borderWidth:F,iconBgColor:k,borderRadius:R,svgHoverColor:M,iconHoverColor:S}=t;console.log("editor panel:",g);const P=[{value:"left",label:(0,o.__)("Align left","wedocs"),svg:(0,e.createElement)("svg",{width:"24",height:"25",fill:"none",strokeWidth:"2",strokeLinecap:"round",stroke:"left"===p?"#007cba":"#939494",strokeLinejoin:"round"},(0,e.createElement)("path",{d:"M8 9.462h12m-12 6h6m-10-9v12"}))},{value:"center",label:(0,o.__)("Align center","wedocs"),svg:(0,e.createElement)("svg",{width:"24",height:"25",fill:"none",strokeWidth:"2",strokeLinecap:"round",stroke:"center"===p?"#007cba":"#939494",strokeLinejoin:"round"},(0,e.createElement)("path",{d:"M18 9.462H6m8.99 6h-6"}),(0,e.createElement)("path",{d:"M12 6.462v12"}))},{value:"right",label:(0,o.__)("Align right","wedocs"),svg:(0,e.createElement)("svg",{width:"24",height:"25",fill:"none",strokeWidth:"2",strokeLinecap:"round",stroke:"right"===p?"#007cba":"#939494",strokeLinejoin:"round"},(0,e.createElement)("path",{d:"M16 9.462H4m12 6h-6m10-9v12"}))}],[L,H]=(0,e.useState)(!1),[z,O]=(0,e.useState)(!1),[T,N]=(0,e.useState)(!1),V={display:"flex",justifyContent:p},W={border:`${F}px ${f} ${B}`,paddingTop:h?.top,background:L?C:g,paddingLeft:h?.left,paddingRight:h?.right,borderRadius:`${R}px`,paddingBottom:h?.bottom},j={top:y?.top,left:y?.left,right:y?.right,bottom:y?.bottom,height:"auto",background:T?S:k,paddingTop:_?.top,paddingLeft:_?.left,borderRadius:m,paddingRight:_?.right,paddingBottom:_?.bottom},$=[{label:(0,o.__)("Solid","wedocs"),value:"solid"},{label:(0,o.__)("Dotted","wedocs"),value:"dotted"},{label:(0,o.__)("Dashed","wedocs"),value:"dashed"},{label:(0,o.__)("Double","wedocs"),value:"double"},{label:(0,o.__)("Groove","wedocs"),value:"groove"},{label:(0,o.__)("Ridge","wedocs"),value:"ridge"},{label:(0,o.__)("Inset","wedocs"),value:"inset"},{label:(0,o.__)("Outset","wedocs"),value:"outset"},{label:(0,o.__)("None","wedocs"),value:"none"},{label:(0,o.__)("Hidden","wedocs"),value:"hidden"}];return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r.InspectorControls,null,(0,e.createElement)(i.PanelBody,null,(0,e.createElement)(i.ToggleControl,{checked:w,className:"wedocs-search-toggle",label:(0,o.__)("Disable Block","wedocs"),onChange:e=>l({hideSearch:e})})),!w&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(i.PanelBody,{title:(0,o.__)("Color Settings","wedocs"),icon:a,initialOpen:!1,className:"wedocs-search-color-settings"},(0,e.createElement)(r.PanelColorSettings,{colors:[{name:"Sweet",color:"#F43F5E"},{name:"Orange",color:"#F97316"},{name:"Yellow",color:"#FACC15"},{name:"Purple",color:"#8B5CF6"},{name:"Light Blue",color:"#3B82F6"},{name:"Light Green",color:"#10B981"}],colorSettings:[{value:g,label:(0,o.__)("Field Background Color","wedocs"),onChange:e=>l({bgColor:e})},{value:C,label:(0,o.__)("Field Hover Color","wedocs"),onChange:e=>l({hoverColor:e})},{value:B,label:(0,o.__)("Border Color","wedocs"),onChange:e=>l({borderColor:e})},{value:b,label:(0,o.__)("Icon Color","wedocs"),onChange:e=>l({iconColor:e})},{value:k,label:(0,o.__)("Button Color","wedocs"),onChange:e=>l({iconBgColor:e})},{value:S,label:(0,o.__)("Button Hover Color","wedocs"),onChange:e=>l({iconHoverColor:e})},{value:M,label:(0,o.__)("Icon Hover Color","wedocs"),onChange:e=>l({svgHoverColor:e})}]})),(0,e.createElement)(i.PanelBody,{title:(0,o.__)("Search Bar Settings","wedocs"),icon:n},(0,e.createElement)(d,{unit:v,value:E,label:(0,o.__)("Field Width","wedocs"),onUnitChange:e=>l({widthUnit:e}),onValueChange:e=>l({searchWidth:e?parseInt(e):0})}),(0,e.createElement)(i.TextControl,{value:x,label:(0,o.__)("Placeholder","wedocs"),placeholder:(0,o.__)("Search bar placeholder","wedocs"),onChange:e=>l({placeholder:e})}),(0,e.createElement)("p",{style:{fontSize:11}},(0,o.__)("POSITION","wedocs")),(0,e.createElement)(c,{selected:p,options:P,onChange:e=>l({alignment:e})}),(0,e.createElement)(i.__experimentalBoxControl,{resetValues:{top:"14px",left:"22px",right:"22px",bottom:"14px"},values:h,label:(0,o.__)("Field Padding","wedocs"),onChange:e=>l({padding:e})}),(0,e.createElement)(i.__experimentalBoxControl,{resetValues:{top:"0px",left:"0px",right:"0px",bottom:"0px"},values:u,label:(0,o.__)("Field Margin","wedocs"),onChange:e=>l({margin:e})}),(0,e.createElement)(i.RangeControl,{min:0,max:10,value:F,label:(0,o.__)("Border Width","wedocs"),onChange:e=>l({borderWidth:e})}),(0,e.createElement)(i.RangeControl,{min:0,max:100,value:R,label:(0,o.__)("Border Radius","wedocs"),onChange:e=>l({borderRadius:e})}),(0,e.createElement)(i.SelectControl,{value:f,options:$,label:(0,o.__)("Border Type","wedocs"),onChange:e=>l({borderType:e})}),(0,e.createElement)(i.__experimentalBoxControl,{resetValues:{top:"24px",left:"26px",right:"26px",bottom:"24px"},values:_,label:(0,o.__)("Button Padding","wedocs"),onChange:e=>l({btnPadding:e})}),(0,e.createElement)(i.__experimentalBoxControl,{resetValues:{top:"0px",right:"0px",bottom:"10px"},values:y,label:(0,o.__)("Button Margin","wedocs"),onChange:e=>l({btnPosition:e})}),(0,e.createElement)(i.RangeControl,{min:0,max:100,value:m,label:(0,o.__)("Button Radius","wedocs"),onChange:e=>l({btnRadius:e})})))),(0,e.createElement)("div",{...s,style:V},(0,e.createElement)("div",{className:"wedocs-editor-search-input",style:{width:E+v,marginTop:u?.top,marginLeft:u?.left,marginRight:u?.right,marginBottom:u?.bottom}},(0,e.createElement)("input",{readOnly:!0,style:W,className:"search-field",placeholder:x,onMouseEnter:()=>H(!0),onMouseLeave:()=>H(!1)}),(0,e.createElement)("input",{type:"hidden",name:"post_type",value:"docs"}),(0,e.createElement)("button",{type:"submit",style:j,className:"search-submit",onMouseEnter:()=>N(!0),onMouseLeave:()=>N(!1)},(0,e.createElement)("svg",{width:"15",height:"16",fill:"none",onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1)},(0,e.createElement)("path",{fill:z?M:b,fillRule:"evenodd",d:"M11.856 10.847l2.883 2.883a.89.89 0 0 1 0 1.257c-.173.174-.401.261-.629.261s-.455-.087-.629-.261l-2.883-2.883c-1.144.874-2.532 1.353-3.996 1.353a6.56 6.56 0 0 1-4.671-1.935c-2.576-2.575-2.576-6.765 0-9.341C3.179.934 4.839.247 6.603.247s3.424.687 4.671 1.935a6.56 6.56 0 0 1 1.935 4.67 6.55 6.55 0 0 1-1.353 3.995zM3.189 3.439c-1.882 1.882-1.882 4.945 0 6.827.912.912 2.124 1.414 3.414 1.414s2.502-.502 3.414-1.414 1.414-2.124 1.414-3.413-.502-2.502-1.414-3.413-2.124-1.414-3.414-1.414-2.502.502-3.414 1.414z"})))),w&&(0,e.createElement)("div",{className:"backdrop"})))},icon:(0,e.createElement)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},(0,e.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.91421 1.5H5.5C4.39543 1.5 3.5 2.39543 3.5 3.5V6.91421V9.02779V15.5C3.5 16.6046 4.39543 17.5 5.5 17.5H7.02779C6.07771 16.4385 5.5 15.0367 5.5 13.5C5.5 10.1863 8.18629 7.5 11.5 7.5C13.0367 7.5 14.4385 8.07771 15.5 9.02779V8.5V6.91421C15.5 6.38378 15.2893 5.87507 14.9142 5.5L11.5 2.08579C11.1249 1.71071 10.6162 1.5 10.0858 1.5H8.91421ZM15.5 13.5C15.5 11.2909 13.7091 9.5 11.5 9.5C9.29086 9.5 7.5 11.2909 7.5 13.5C7.5 15.7091 9.29086 17.5 11.5 17.5C12.2414 17.5 12.9364 17.2977 13.5318 16.946L14.7929 18.2071C15.1834 18.5976 15.8166 18.5976 16.2071 18.2071C16.5976 17.8166 16.5976 17.1834 16.2071 16.7929L14.946 15.5318C15.2977 14.9364 15.5 14.2414 15.5 13.5ZM11.5 11.5C12.6046 11.5 13.5 12.3954 13.5 13.5C13.5 14.0526 13.2772 14.5512 12.9142 14.9142C12.5512 15.2772 12.0526 15.5 11.5 15.5C10.3954 15.5 9.5 14.6046 9.5 13.5C9.5 12.3954 10.3954 11.5 11.5 11.5Z",fill:"#111827"})),title:(0,o.__)("weDocs -  Searchbar","wedocs"),keywords:["Search","weDocs search bar","Bar"],category:"widgets",description:(0,o.__)("Simple search forms for easy user guidance for your documentation","wedocs")})}},o={};function l(e){var a=o[e];if(void 0!==a)return a.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,l),n.exports}l.m=t,e=[],l.O=function(t,o,a,n){if(!o){var r=1/0;for(s=0;s<e.length;s++){o=e[s][0],a=e[s][1],n=e[s][2];for(var i=!0,d=0;d<o.length;d++)(!1&n||r>=n)&&Object.keys(l.O).every((function(e){return l.O[e](o[d])}))?o.splice(d--,1):(i=!1,n<r&&(r=n));if(i){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[o,a,n]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={584:0,442:0};l.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,n,r=o[0],i=o[1],d=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(d)var s=d(l)}for(t&&t(o);c<r.length;c++)n=r[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(s)},o=self.webpackChunkweDocs=self.webpackChunkweDocs||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var a=l.O(void 0,[442],(function(){return l(994)}));a=l.O(a)}();