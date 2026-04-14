import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as z}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const U="_wrapper_1sfik_1",W="_wrapperDisabled_1sfik_16",X="_track_1sfik_21",Y="_active_1sfik_46",Z="_disabled_1sfik_46",P="_thumb_1sfik_66",ee="_insetShadow_1sfik_99",ae="_label_1sfik_108",se="_labelDisabled_1sfik_124",a={wrapper:U,"gap-M":"_gap-M_1sfik_8","gap-S":"_gap-S_1sfik_12",wrapperDisabled:W,track:X,"size-M":"_size-M_1sfik_33","size-S":"_size-S_1sfik_39",active:Y,disabled:Z,thumb:P,insetShadow:ee,label:ae,"label-M":"_label-M_1sfik_114","label-S":"_label-S_1sfik_119",labelDisabled:se},s=({checked:u=!1,label:S,size:m="M",disabled:l=!1,onChange:p,className:H})=>{const[J,k]=z.useState(u);z.useEffect(()=>{k(u)},[u]);const f=J,K=()=>{if(l)return;const _=!f;k(_),p==null||p(_)},Q=[a.track,a[`size-${m}`],f?a.active:"",l?a.disabled:""].filter(Boolean).join(" ");return e.jsxs("label",{className:`${a.wrapper} ${a[`gap-${m}`]} ${l?a.wrapperDisabled:""} ${H??""}`,onClick:K,children:[e.jsxs("span",{className:Q,children:[e.jsx("span",{className:a.thumb}),!f&&!l&&e.jsx("span",{className:a.insetShadow})]}),S&&e.jsx("span",{className:`${a.label} ${a[`label-${m}`]} ${l?a.labelDisabled:""}`,children:S})]})};s.__docgenInfo={description:"",methods:[],displayName:"Tumbler",props:{checked:{required:!1,tsType:{name:"boolean"},description:"On/off state",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text"},size:{required:!1,tsType:{name:"union",raw:"'M' | 'S'",elements:[{name:"literal",value:"'M'"},{name:"literal",value:"'S'"}]},description:"Size",defaultValue:{value:"'M'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"onChange handler"},className:{required:!1,tsType:{name:"string"},description:"Additional class"}}};const ie={title:"Design System/Tumbler",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["M","S"]},checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},r={args:{label:"Tumbler",size:"M"}},t={args:{label:"Tumbler",checked:!0,size:"M"}},i={args:{label:"Tumbler",disabled:!0,size:"M"}},n={name:"Disabled / Checked",args:{label:"Tumbler",disabled:!0,checked:!0,size:"M"}},o={name:"Size S",args:{label:"Tumbler",size:"S"}},c={name:"Size S / Checked",args:{label:"Tumbler",size:"S",checked:!0}},d={name:"Standalone (no label)",args:{size:"M"}},b={name:"All States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(s,{label:"Default off",size:"M"}),e.jsx(s,{label:"Default on",size:"M",checked:!0}),e.jsx(s,{label:"Disabled off",size:"M",disabled:!0}),e.jsx(s,{label:"Disabled on",size:"M",disabled:!0,checked:!0}),e.jsxs("div",{style:{borderTop:"1px solid #eee",paddingTop:16},children:[e.jsx("p",{style:{fontSize:12,color:"#6e6e81",marginBottom:12},children:"Size S"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(s,{label:"Default off",size:"S"}),e.jsx(s,{label:"Default on",size:"S",checked:!0}),e.jsx(s,{label:"Disabled off",size:"S",disabled:!0}),e.jsx(s,{label:"Disabled on",size:"S",disabled:!0,checked:!0})]})]})]})};var h,g,D;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Tumbler',
    size: 'M'
  }
}`,...(D=(g=r.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var x,T,M;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Tumbler',
    checked: true,
    size: 'M'
  }
}`,...(M=(T=t.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var y,j,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Tumbler',
    disabled: true,
    size: 'M'
  }
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var w,C,$;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Disabled / Checked',
  args: {
    label: 'Tumbler',
    disabled: true,
    checked: true,
    size: 'M'
  }
}`,...($=(C=n.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var N,q,A;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Size S',
  args: {
    label: 'Tumbler',
    size: 'S'
  }
}`,...(A=(q=o.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var E,O,B;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Size S / Checked',
  args: {
    label: 'Tumbler',
    size: 'S',
    checked: true
  }
}`,...(B=(O=c.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var V,I,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Standalone (no label)',
  args: {
    size: 'M'
  }
}`,...(L=(I=d.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var R,F,G;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Tumbler label="Default off" size="M" />
      <Tumbler label="Default on" size="M" checked />
      <Tumbler label="Disabled off" size="M" disabled />
      <Tumbler label="Disabled on" size="M" disabled checked />
      <div style={{
      borderTop: '1px solid #eee',
      paddingTop: 16
    }}>
        <p style={{
        fontSize: 12,
        color: '#6e6e81',
        marginBottom: 12
      }}>Size S</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Tumbler label="Default off" size="S" />
          <Tumbler label="Default on" size="S" checked />
          <Tumbler label="Disabled off" size="S" disabled />
          <Tumbler label="Disabled on" size="S" disabled checked />
        </div>
      </div>
    </div>
}`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const ne=["Default","Checked","Disabled","DisabledChecked","SizeS","SizeSChecked","StandaloneOnly","AllStates"];export{b as AllStates,t as Checked,r as Default,i as Disabled,n as DisabledChecked,o as SizeS,c as SizeSChecked,d as StandaloneOnly,ne as __namedExportsOrder,ie as default};
