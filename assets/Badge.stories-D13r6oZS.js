import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const G="_badge_1rro3_1",H="_dot_1rro3_57",J="_text_1rro3_66",s={badge:G,"size-L":"_size-L_1rro3_12","size-M":"_size-M_1rro3_18","size-S":"_size-S_1rro3_24","variant-neutral":"_variant-neutral_1rro3_31","variant-primary":"_variant-primary_1rro3_36","variant-success":"_variant-success_1rro3_41","variant-warning":"_variant-warning_1rro3_46","variant-error":"_variant-error_1rro3_51",dot:H,text:J},a=({children:r,variant:O="neutral",size:$="M",dot:k=!1,className:C})=>{const F=[s.badge,s[`variant-${O}`],s[`size-${$}`],C??""].filter(Boolean).join(" ");return e.jsxs("span",{className:F,children:[k&&e.jsx("span",{className:s.dot}),e.jsx("span",{className:s.text,children:r})]})};a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Badge text"},variant:{required:!1,tsType:{name:"union",raw:"'neutral' | 'primary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Visual variant",defaultValue:{value:"'neutral'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'L' | 'M' | 'S'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"},{name:"literal",value:"'S'"}]},description:"Size",defaultValue:{value:"'M'",computed:!1}},dot:{required:!1,tsType:{name:"boolean"},description:"Dot indicator",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class"}}};const U={title:"Design System/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["neutral","primary","success","warning","error"]},size:{control:{type:"radio"},options:["L","M","S"]},dot:{control:"boolean"},children:{control:"text"}}},n={args:{children:"Badge",variant:"neutral"}},t={args:{children:"Badge",variant:"primary"}},i={args:{children:"Active",variant:"success"}},o={args:{children:"Pending",variant:"warning"}},c={name:"Error",args:{children:"Error",variant:"error"}},l={args:{children:"Online",variant:"success",dot:!0}},d={name:"Size L",args:{children:"Large",size:"L"}},m={name:"Size S",args:{children:"Small",size:"S"}},u={name:"All Variants",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["L","M","S"].map(r=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"#6e6e81",width:40},children:r}),e.jsx(a,{size:r,variant:"neutral",children:"Neutral"}),e.jsx(a,{size:r,variant:"primary",children:"Primary"}),e.jsx(a,{size:r,variant:"success",dot:!0,children:"Active"}),e.jsx(a,{size:r,variant:"warning",children:"Pending"}),e.jsx(a,{size:r,variant:"error",children:"Error"})]},r))})};var p,g,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'neutral'
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var S,_,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'primary'
  }
}`,...(y=(_=t.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var h,z,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Active',
    variant: 'success'
  }
}`,...(x=(z=i.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var f,B,L;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Pending',
    variant: 'warning'
  }
}`,...(L=(B=o.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var j,w,N;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Error',
  args: {
    children: 'Error',
    variant: 'error'
  }
}`,...(N=(w=c.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var E,A,M;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Online',
    variant: 'success',
    dot: true
  }
}`,...(M=(A=l.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var P,V,b;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Size L',
  args: {
    children: 'Large',
    size: 'L'
  }
}`,...(b=(V=d.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var D,T,q;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Size S',
  args: {
    children: 'Small',
    size: 'S'
  }
}`,...(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var R,W,I;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {(['L', 'M', 'S'] as const).map(size => <div key={size} style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
          <span style={{
        fontSize: 12,
        color: '#6e6e81',
        width: 40
      }}>{size}</span>
          <Badge size={size} variant="neutral">Neutral</Badge>
          <Badge size={size} variant="primary">Primary</Badge>
          <Badge size={size} variant="success" dot>Active</Badge>
          <Badge size={size} variant="warning">Pending</Badge>
          <Badge size={size} variant="error">Error</Badge>
        </div>)}
    </div>
}`,...(I=(W=u.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const X=["Neutral","Primary","Success","Warning","ErrorBadge","WithDot","SizeL","SizeS","AllVariants"];export{u as AllVariants,c as ErrorBadge,n as Neutral,t as Primary,d as SizeL,m as SizeS,i as Success,o as Warning,l as WithDot,X as __namedExportsOrder,U as default};
