import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as r}from"./Checkbox-CHRIC3M6.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";const Q={title:"Design System/Checkbox",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["M","S"]},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},label:{control:"text"}}},a={args:{label:"Checkbox label",size:"M"}},s={args:{label:"Checked",checked:!0,size:"M"}},l={args:{label:"Indeterminate",indeterminate:!0,size:"M"}},c={args:{label:"Error state",error:!0,size:"M"}},t={name:"Error / Checked",args:{label:"Error checked",error:!0,checked:!0,size:"M"}},i={args:{label:"Disabled",disabled:!0,size:"M"}},o={name:"Disabled / Checked",args:{label:"Disabled checked",disabled:!0,checked:!0,size:"M"}},d={name:"Size S",args:{label:"Size S",size:"S"}},n={name:"Size S / Checked",args:{label:"Size S",size:"S",checked:!0}},b={name:"All States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{label:"Default",size:"M"}),e.jsx(r,{label:"Checked",size:"M",checked:!0}),e.jsx(r,{label:"Indeterminate",size:"M",indeterminate:!0}),e.jsx(r,{label:"Error",size:"M",error:!0}),e.jsx(r,{label:"Error checked",size:"M",error:!0,checked:!0}),e.jsx(r,{label:"Disabled",size:"M",disabled:!0}),e.jsx(r,{label:"Disabled checked",size:"M",disabled:!0,checked:!0}),e.jsx(r,{label:"Disabled indeterminate",size:"M",disabled:!0,indeterminate:!0}),e.jsxs("div",{style:{borderTop:"1px solid #eee",paddingTop:16},children:[e.jsx("p",{style:{fontSize:12,color:"#6e6e81",marginBottom:12},children:"Size S"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{label:"Default",size:"S"}),e.jsx(r,{label:"Checked",size:"S",checked:!0}),e.jsx(r,{label:"Indeterminate",size:"S",indeterminate:!0}),e.jsx(r,{label:"Disabled",size:"S",disabled:!0}),e.jsx(r,{label:"Disabled checked",size:"S",disabled:!0,checked:!0})]})]})]})};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox label',
    size: 'M'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,k,z;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Checked',
    checked: true,
    size: 'M'
  }
}`,...(z=(k=s.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var S,x,g;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate',
    indeterminate: true,
    size: 'M'
  }
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var C,D,M;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Error state',
    error: true,
    size: 'M'
  }
}`,...(M=(D=c.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var f,j,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Error / Checked',
  args: {
    label: 'Error checked',
    error: true,
    checked: true,
    size: 'M'
  }
}`,...(y=(j=t.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var E,v,I;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true,
    size: 'M'
  }
}`,...(I=(v=i.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var T,A,B;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Disabled / Checked',
  args: {
    label: 'Disabled checked',
    disabled: true,
    checked: true,
    size: 'M'
  }
}`,...(B=(A=o.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var _,O,R;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Size S',
  args: {
    label: 'Size S',
    size: 'S'
  }
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,w,F;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Size S / Checked',
  args: {
    label: 'Size S',
    size: 'S',
    checked: true
  }
}`,...(F=(w=n.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var G,H,J;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Checkbox label="Default" size="M" />
      <Checkbox label="Checked" size="M" checked />
      <Checkbox label="Indeterminate" size="M" indeterminate />
      <Checkbox label="Error" size="M" error />
      <Checkbox label="Error checked" size="M" error checked />
      <Checkbox label="Disabled" size="M" disabled />
      <Checkbox label="Disabled checked" size="M" disabled checked />
      <Checkbox label="Disabled indeterminate" size="M" disabled indeterminate />
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
          <Checkbox label="Default" size="S" />
          <Checkbox label="Checked" size="S" checked />
          <Checkbox label="Indeterminate" size="S" indeterminate />
          <Checkbox label="Disabled" size="S" disabled />
          <Checkbox label="Disabled checked" size="S" disabled checked />
        </div>
      </div>
    </div>
}`,...(J=(H=b.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const U=["Default","Checked","Indeterminate","Error","ErrorChecked","Disabled","DisabledChecked","SizeS","SizeSChecked","AllStates"];export{b as AllStates,s as Checked,a as Default,i as Disabled,o as DisabledChecked,c as Error,t as ErrorChecked,l as Indeterminate,d as SizeS,n as SizeSChecked,U as __namedExportsOrder,Q as default};
