import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as k}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const H="_wrapper_1pk23_1",J="_disabled_1pk23_9",K="_track_1pk23_15",Q="_active_1pk23_38",U="_thumb_1pk23_44",W="_label_1pk23_71",a={wrapper:H,disabled:J,track:K,"size-L":"_size-L_1pk23_26","size-M":"_size-M_1pk23_32",active:Q,thumb:U,label:W,"label-L":"_label-L_1pk23_77","label-M":"_label-M_1pk23_82"},s=({checked:c=!1,label:m,size:u="L",disabled:p=!1,onChange:b,className:I})=>{const[R,f]=k.useState(c);k.useEffect(()=>{f(c)},[c]);const g=R,F=()=>{if(p)return;const z=!g;f(z),b==null||b(z)},G=[a.track,a[`size-${u}`],g?a.active:"",p?a.disabled:""].filter(Boolean).join(" ");return e.jsxs("label",{className:`${a.wrapper} ${p?a.disabled:""} ${I??""}`,onClick:F,children:[e.jsx("span",{className:G,children:e.jsx("span",{className:a.thumb})}),m&&e.jsx("span",{className:`${a.label} ${a[`label-${u}`]}`,children:m})]})};s.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"On/off state",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text"},size:{required:!1,tsType:{name:"union",raw:"'L' | 'M'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"}]},description:"Size",defaultValue:{value:"'L'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"onChange handler"},className:{required:!1,tsType:{name:"string"},description:"Additional class"}}};const P={title:"Design System/Toggle",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["L","M"]},checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},l={args:{label:"Toggle off",size:"L"}},r={args:{label:"Toggle on",checked:!0,size:"L"}},i={name:"Disabled / Off",args:{label:"Disabled off",disabled:!0,size:"L"}},o={name:"Disabled / On",args:{label:"Disabled on",disabled:!0,checked:!0,size:"L"}},n={name:"Size M / Off",args:{label:"Size M",size:"M"}},t={name:"Size M / On",args:{label:"Size M on",size:"M",checked:!0}},d={name:"All States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(s,{label:"Off",size:"L"}),e.jsx(s,{label:"On",size:"L",checked:!0}),e.jsx(s,{label:"Disabled off",size:"L",disabled:!0}),e.jsx(s,{label:"Disabled on",size:"L",disabled:!0,checked:!0}),e.jsxs("div",{style:{borderTop:"1px solid #eee",paddingTop:16},children:[e.jsx("p",{style:{fontSize:12,color:"#6e6e81",marginBottom:12},children:"Size M"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(s,{label:"Off",size:"M"}),e.jsx(s,{label:"On",size:"M",checked:!0}),e.jsx(s,{label:"Disabled off",size:"M",disabled:!0}),e.jsx(s,{label:"Disabled on",size:"M",disabled:!0,checked:!0})]})]})]})};var x,_,M;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Toggle off',
    size: 'L'
  }
}`,...(M=(_=l.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var h,S,O;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Toggle on',
    checked: true,
    size: 'L'
  }
}`,...(O=(S=r.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var y,D,L;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Disabled / Off',
  args: {
    label: 'Disabled off',
    disabled: true,
    size: 'L'
  }
}`,...(L=(D=i.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var T,v,j;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Disabled / On',
  args: {
    label: 'Disabled on',
    disabled: true,
    checked: true,
    size: 'L'
  }
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var $,q,w;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Size M / Off',
  args: {
    label: 'Size M',
    size: 'M'
  }
}`,...(w=(q=n.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var N,A,E;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Size M / On',
  args: {
    label: 'Size M on',
    size: 'M',
    checked: true
  }
}`,...(E=(A=t.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var B,C,V;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Toggle label="Off" size="L" />
      <Toggle label="On" size="L" checked />
      <Toggle label="Disabled off" size="L" disabled />
      <Toggle label="Disabled on" size="L" disabled checked />
      <div style={{
      borderTop: '1px solid #eee',
      paddingTop: 16
    }}>
        <p style={{
        fontSize: 12,
        color: '#6e6e81',
        marginBottom: 12
      }}>Size M</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Toggle label="Off" size="M" />
          <Toggle label="On" size="M" checked />
          <Toggle label="Disabled off" size="M" disabled />
          <Toggle label="Disabled on" size="M" disabled checked />
        </div>
      </div>
    </div>
}`,...(V=(C=d.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const ee=["Off","On","DisabledOff","DisabledOn","SizeM","SizeMOn","AllStates"];export{d as AllStates,i as DisabledOff,o as DisabledOn,l as Off,r as On,n as SizeM,t as SizeMOn,ee as __namedExportsOrder,P as default};
