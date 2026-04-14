import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const q="_avatar_1i2dt_1",K="_image_1i2dt_47",$="_initials_1i2dt_54",B="_statusDot_1i2dt_59",s={avatar:q,"size-XL":"_size-XL_1i2dt_16","size-L":"_size-L_1i2dt_22","size-M":"_size-M_1i2dt_28","size-S":"_size-S_1i2dt_34","size-XS":"_size-XS_1i2dt_40",image:K,initials:$,statusDot:B,"status-online":"_status-online_1i2dt_92","status-offline":"_status-offline_1i2dt_96","status-away":"_status-away_1i2dt_100"};function V(t){return t.split(" ").map(r=>r[0]).slice(0,2).join("").toUpperCase()}const a=({src:t,name:r="User",size:O="M",status:u="none",className:T})=>{const W=[s.avatar,s[`size-${O}`],T??""].filter(Boolean).join(" ");return e.jsxs("div",{className:W,children:[t?e.jsx("img",{className:s.image,src:t,alt:r}):e.jsx("span",{className:s.initials,children:V(r)}),u!=="none"&&e.jsx("span",{className:`${s.statusDot} ${s[`status-${u}`]}`})]})};a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"Image URL"},name:{required:!1,tsType:{name:"string"},description:"Alt text / user name for initials",defaultValue:{value:"'User'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'XL' | 'L' | 'M' | 'S' | 'XS'",elements:[{name:"literal",value:"'XL'"},{name:"literal",value:"'L'"},{name:"literal",value:"'M'"},{name:"literal",value:"'S'"},{name:"literal",value:"'XS'"}]},description:"Size",defaultValue:{value:"'M'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'online' | 'offline' | 'away' | 'none'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'offline'"},{name:"literal",value:"'away'"},{name:"literal",value:"'none'"}]},description:"Online status indicator",defaultValue:{value:"'none'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class"}}};const R={title:"Design System/Avatar",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["XL","L","M","S","XS"]},name:{control:"text"},src:{control:"text"},status:{control:{type:"radio"},options:["none","online","offline","away"]}}},i={args:{name:"John Doe",size:"L"}},n={args:{name:"Jane Smith",size:"L",src:"https://i.pravatar.cc/150?img=5"}},o={args:{name:"Alex",size:"L",status:"online"}},l={args:{name:"Sam",size:"L",status:"away"}},m={args:{name:"Kim",size:"L",status:"offline"}},c={name:"All Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(a,{size:"XL",name:"John Doe",status:"online"}),e.jsx(a,{size:"L",name:"Jane Smith",status:"online"}),e.jsx(a,{size:"M",name:"Alex B"}),e.jsx(a,{size:"S",name:"Sam K"}),e.jsx(a,{size:"XS",name:"P"})]})},p={name:"With Images",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(a,{size:"XL",src:"https://i.pravatar.cc/150?img=1",name:"User 1",status:"online"}),e.jsx(a,{size:"L",src:"https://i.pravatar.cc/150?img=2",name:"User 2",status:"away"}),e.jsx(a,{size:"M",src:"https://i.pravatar.cc/150?img=3",name:"User 3"}),e.jsx(a,{size:"S",src:"https://i.pravatar.cc/150?img=4",name:"User 4"}),e.jsx(a,{size:"XS",src:"https://i.pravatar.cc/150?img=5",name:"User 5"})]})};var d,g,v;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'L'
  }
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var z,_,f;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'Jane Smith',
    size: 'L',
    src: 'https://i.pravatar.cc/150?img=5'
  }
}`,...(f=(_=n.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};var S,h,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'Alex',
    size: 'L',
    status: 'online'
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,L,A;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'Sam',
    size: 'L',
    status: 'away'
  }
}`,...(A=(L=l.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var j,X,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'Kim',
    size: 'L',
    status: 'offline'
  }
}`,...(I=(X=m.parameters)==null?void 0:X.docs)==null?void 0:I.source}}};var U,w,M;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Avatar size="XL" name="John Doe" status="online" />
      <Avatar size="L" name="Jane Smith" status="online" />
      <Avatar size="M" name="Alex B" />
      <Avatar size="S" name="Sam K" />
      <Avatar size="XS" name="P" />
    </div>
}`,...(M=(w=c.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var D,J,N;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'With Images',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Avatar size="XL" src="https://i.pravatar.cc/150?img=1" name="User 1" status="online" />
      <Avatar size="L" src="https://i.pravatar.cc/150?img=2" name="User 2" status="away" />
      <Avatar size="M" src="https://i.pravatar.cc/150?img=3" name="User 3" />
      <Avatar size="S" src="https://i.pravatar.cc/150?img=4" name="User 4" />
      <Avatar size="XS" src="https://i.pravatar.cc/150?img=5" name="User 5" />
    </div>
}`,...(N=(J=p.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};const C=["Initials","WithImage","Online","Away","Offline","AllSizes","WithImages"];export{c as AllSizes,l as Away,i as Initials,m as Offline,o as Online,n as WithImage,p as WithImages,C as __namedExportsOrder,R as default};
