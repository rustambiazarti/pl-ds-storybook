import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const Q="_tag_t5ofv_1",U="_flexible_t5ofv_18",W="_iconOnly_t5ofv_23",X="_selected_t5ofv_30",Y="_disabled_t5ofv_35",$="_content_t5ofv_57",ee="_icon_t5ofv_23",se="_label_t5ofv_73",s={tag:Q,flexible:U,iconOnly:W,selected:X,disabled:Y,content:$,icon:ee,label:se},ae=({color:p="currentColor"})=>e.jsx("svg",{width:"14",height:"12",viewBox:"0 0 14 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7 11.5C7 11.5 0.5 8 0.5 3.5C0.5 1.84315 1.84315 0.5 3.5 0.5C4.97671 0.5 6.22671 1.43153 6.65139 2.72039C6.79647 3.1608 7.20353 3.1608 7.34861 2.72039C7.77329 1.43153 9.02329 0.5 10.5 0.5C12.1569 0.5 13.5 1.84315 13.5 3.5C13.5 8 7 11.5 7 11.5Z",fill:p})}),a=({children:p="Text",selected:y=!1,disabled:u=!1,type:F="flexible",leftIcon:G,rightIcon:J,icon:K,onClick:f,className:L})=>{const g=F==="icon-only",x=[s.tag,g?s.iconOnly:s.flexible,y?s.selected:"",u?s.disabled:"",L].filter(Boolean).join(" "),P=y?"#ffffff":"var(--content-primary)",m=e.jsx(ae,{color:P});return g?e.jsx("button",{className:x,onClick:f,disabled:u,children:e.jsx("span",{className:s.icon,children:K||m})}):e.jsx("button",{className:x,onClick:f,disabled:u,children:e.jsxs("span",{className:s.content,children:[e.jsx("span",{className:s.icon,children:G||m}),e.jsx("span",{className:s.label,children:p}),e.jsx("span",{className:s.icon,children:J||m})]})})};a.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{children:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Text'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'flexible' | 'icon-only'",elements:[{name:"literal",value:"'flexible'"},{name:"literal",value:"'icon-only'"}]},description:"",defaultValue:{value:"'flexible'",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ne={title:"Design System/Tag",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:"radio",options:["flexible","icon-only"]}}},t={args:{children:"Text",selected:!1,disabled:!1,type:"flexible"}},l={args:{children:"Text",selected:!0}},n={args:{children:"Text",disabled:!0}},r={name:"Disabled + Selected",args:{children:"Text",selected:!0,disabled:!0}},c={args:{type:"icon-only",selected:!1}},o={name:"Icon Only Selected",args:{type:"icon-only",selected:!0}},d={name:"Icon Only Disabled",args:{type:"icon-only",disabled:!0}},i={name:"All States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(a,{children:"Default"}),e.jsx(a,{selected:!0,children:"Selected"}),e.jsx(a,{disabled:!0,children:"Disabled"}),e.jsx(a,{selected:!0,disabled:!0,children:"Sel+Dis"})]}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(a,{type:"icon-only"}),e.jsx(a,{type:"icon-only",selected:!0}),e.jsx(a,{type:"icon-only",disabled:!0}),e.jsx(a,{type:"icon-only",selected:!0,disabled:!0})]})]})};var b,T,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Text',
    selected: false,
    disabled: false,
    type: 'flexible'
  }
}`,...(h=(T=t.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var v,_,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Text',
    selected: true
  }
}`,...(S=(_=l.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var j,D,I;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Text',
    disabled: true
  }
}`,...(I=(D=n.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var O,N,R;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Disabled + Selected',
  args: {
    children: 'Text',
    selected: true,
    disabled: true
  }
}`,...(R=(N=r.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var w,q,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: 'icon-only',
    selected: false
  }
}`,...(C=(q=c.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var A,V,B;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Icon Only Selected',
  args: {
    type: 'icon-only',
    selected: true
  }
}`,...(B=(V=o.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var E,H,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Icon Only Disabled',
  args: {
    type: 'icon-only',
    disabled: true
  }
}`,...(M=(H=d.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var Z,k,z;i.parameters={...i.parameters,docs:{...(Z=i.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        <Tag>Default</Tag>
        <Tag selected>Selected</Tag>
        <Tag disabled>Disabled</Tag>
        <Tag selected disabled>
          Sel+Dis
        </Tag>
      </div>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        <Tag type="icon-only" />
        <Tag type="icon-only" selected />
        <Tag type="icon-only" disabled />
        <Tag type="icon-only" selected disabled />
      </div>
    </div>
}`,...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const re=["Default","Selected","Disabled","DisabledSelected","IconOnly","IconOnlySelected","IconOnlyDisabled","AllStates"];export{i as AllStates,t as Default,n as Disabled,r as DisabledSelected,c as IconOnly,d as IconOnlyDisabled,o as IconOnlySelected,l as Selected,re as __namedExportsOrder,ne as default};
