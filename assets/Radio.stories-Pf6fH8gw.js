import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const W="_wrapper_1u8o7_1",X="_disabled_1u8o7_9",Y="_circle_1u8o7_14",Z="_active_1u8o7_37",P="_error_1u8o7_50",ee="_dot_1u8o7_65",re="_label_1u8o7_95",e={wrapper:W,disabled:X,circle:Y,"size-M":"_size-M_1u8o7_26","size-S":"_size-S_1u8o7_31",active:Z,error:P,dot:ee,label:re,"label-M":"_label-M_1u8o7_101","label-S":"_label-S_1u8o7_106"},a=({checked:u=!1,label:S,size:_="M",disabled:p=!1,error:H=!1,onChange:m,className:J})=>{const[K,f]=g.useState(u);g.useEffect(()=>{f(u)},[u]);const b=K,Q=()=>{if(p)return;const z=!b;f(z),m==null||m(z)},U=[e.circle,e[`size-${_}`],b?e.active:"",H?e.error:"",p?e.disabled:""].filter(Boolean).join(" ");return r.jsxs("label",{className:`${e.wrapper} ${p?e.disabled:""} ${J??""}`,onClick:Q,children:[r.jsx("span",{className:U,children:r.jsx("span",{className:e.dot,style:{visibility:b?"visible":"hidden"}})}),S&&r.jsx("span",{className:`${e.label} ${e[`label-${_}`]}`,children:S})]})};a.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Selected state",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text"},size:{required:!1,tsType:{name:"union",raw:"'M' | 'S'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'S'"}]},description:"Size",defaultValue:{value:"'M'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"onChange handler"},className:{required:!1,tsType:{name:"string"},description:"Additional class"}}};const le={title:"Design System/Radio",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["M","S"]},checked:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},label:{control:"text"}}},s={args:{label:"Radio option",size:"M"}},o={args:{label:"Selected",checked:!0,size:"M"}},l={name:"Error",args:{label:"Error state",error:!0,size:"M"}},t={name:"Error / Checked",args:{label:"Error selected",error:!0,checked:!0,size:"M"}},i={args:{label:"Disabled",disabled:!0,size:"M"}},n={name:"Disabled / Checked",args:{label:"Disabled selected",disabled:!0,checked:!0,size:"M"}},c={name:"Size S",args:{label:"Size S",size:"S"}},d={name:"Radio Group",render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(a,{label:"Option 1",size:"M",checked:!0}),r.jsx(a,{label:"Option 2",size:"M"}),r.jsx(a,{label:"Option 3",size:"M"}),r.jsx(a,{label:"Disabled option",size:"M",disabled:!0})]})};var h,M,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Radio option',
    size: 'M'
  }
}`,...(k=(M=s.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var x,y,D;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Selected',
    checked: true,
    size: 'M'
  }
}`,...(D=(y=o.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var v,E,R;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    label: 'Error state',
    error: true,
    size: 'M'
  }
}`,...(R=(E=l.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var C,j,T;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Error / Checked',
  args: {
    label: 'Error selected',
    error: true,
    checked: true,
    size: 'M'
  }
}`,...(T=(j=t.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var q,O,$;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true,
    size: 'M'
  }
}`,...($=(O=i.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var w,N,G;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Disabled / Checked',
  args: {
    label: 'Disabled selected',
    disabled: true,
    checked: true,
    size: 'M'
  }
}`,...(G=(N=n.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var V,I,A;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Size S',
  args: {
    label: 'Size S',
    size: 'S'
  }
}`,...(A=(I=c.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var B,L,F;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Radio Group',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Radio label="Option 1" size="M" checked />
      <Radio label="Option 2" size="M" />
      <Radio label="Option 3" size="M" />
      <Radio label="Disabled option" size="M" disabled />
    </div>
}`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};const te=["Default","Checked","ErrorState","ErrorChecked","Disabled","DisabledChecked","SizeS","RadioGroup"];export{o as Checked,s as Default,i as Disabled,n as DisabledChecked,t as ErrorChecked,l as ErrorState,d as RadioGroup,c as SizeS,te as __namedExportsOrder,le as default};
