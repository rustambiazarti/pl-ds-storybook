import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const Ce="_button_1553s_9",Pe="_disabled_1553s_121",we="_loading_1553s_126",Oe="_content_1553s_131",Ne="_iconWrap_1553s_139",Re="_label_1553s_148",Ge="_spinner_1553s_158",We="_spin_1553s_158",r={button:Ce,"variant-primary":"_variant-primary_1553s_26","variant-secondary":"_variant-secondary_1553s_37","variant-ghost":"_variant-ghost_1553s_48","size-L":"_size-L_1553s_59","size-M":"_size-M_1553s_67","size-S":"_size-S_1553s_75","size-XS":"_size-XS_1553s_83","type-fixed":"_type-fixed_1553s_91","type-icon-only":"_type-icon-only_1553s_96",disabled:Pe,loading:we,content:Oe,iconWrap:Ne,label:Re,spinner:Ge,spin:We},De=({size:t})=>{const i=t==="XS"?14:20;return e.jsxs("svg",{className:r.spinner,width:i,height:i,viewBox:"0 0 20 20",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"10",r:"8",stroke:"currentColor",strokeOpacity:"0.25",strokeWidth:"2.5"}),e.jsx("path",{d:"M10 2C14.4183 2 18 5.58172 18 10",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"})]})},n=({size:t=20})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 20 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10 16C9.69 16 9.39 15.89 9.15 15.69C8.42 15.05 7.71 14.45 7.09 13.92L7.08 13.91C5.03 12.15 3.25 10.63 2.01 9.13C0.63 7.47 0 5.9 0 4.19C0 2.53 0.56 1.01 1.58 -0.01C2.61 -1.03 4.01 -1.59 5.54 -1.59C6.7 -1.59 7.77 -1.22 8.72 -0.5C9.2 -0.14 9.63 0.3 10 0.81C10.37 0.3 10.8 -0.14 11.28 -0.5C12.23 -1.22 13.3 -1.59 14.46 -1.59C15.99 -1.59 17.39 -1.03 18.42 -0.01C19.44 1.01 20 2.53 20 4.19C20 5.9 19.37 7.47 17.99 9.13C16.75 10.63 14.97 12.15 12.92 13.91C12.3 14.45 11.58 15.05 10.85 15.7C10.61 15.89 10.31 16 10 16Z"})}),a=({children:t="Button Text",variant:i="primary",size:B="L",type:T="flexible",disabled:_=!1,loading:L=!1,leftIcon:H,rightIcon:b,icon:_e,onClick:He,className:be})=>{const Me=T==="icon-only",s=B==="XS"?16:24,Xe=[r.button,r[`variant-${i}`],r[`size-${B}`],r[`type-${T}`],_?r.disabled:"",L?r.loading:"",be??""].filter(Boolean).join(" ");return e.jsx("button",{className:Xe,disabled:_||L,onClick:He,children:L?e.jsx(De,{size:B}):Me?e.jsx("span",{className:r.iconWrap,style:{width:s,height:s},children:_e??e.jsx(n,{size:s-4})}):e.jsxs("span",{className:r.content,children:[H&&e.jsx("span",{className:r.iconWrap,style:{width:s,height:s},children:H}),e.jsx("span",{className:r.label,children:t}),b&&e.jsx("span",{className:r.iconWrap,style:{width:s,height:s},children:b})]})})};n.__docgenInfo={description:"",methods:[],displayName:"HeartIcon",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}};a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button text",defaultValue:{value:"'Button Text'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"Visual style",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'L' | 'M' | 'S' | 'XS'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"},{name:"literal",value:"'S'"},{name:"literal",value:"'XS'"}]},description:"Size",defaultValue:{value:"'L'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'flexible' | 'fixed' | 'icon-only'",elements:[{name:"literal",value:"'flexible'"},{name:"literal",value:"'fixed'"},{name:"literal",value:"'icon-only'"}]},description:"Layout type",defaultValue:{value:"'flexible'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Left icon"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Right icon"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for icon-only variant"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional class"}}};const ke={title:"Design System/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["primary","secondary","ghost"]},size:{control:{type:"radio"},options:["L","M","S","XS"]},type:{control:{type:"radio"},options:["flexible","fixed","icon-only"]},disabled:{control:"boolean"},loading:{control:"boolean"},children:{control:"text"}}},o={name:"Primary / L",args:{variant:"primary",size:"L",children:"Button Text",leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16})}},c={name:"Primary / M",args:{variant:"primary",size:"M",children:"Button Text",leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16})}},l={name:"Primary / S",args:{variant:"primary",size:"S",children:"Button Text",leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16})}},d={name:"Primary / XS",args:{variant:"primary",size:"XS",children:"Button Text",leftIcon:e.jsx(n,{size:12}),rightIcon:e.jsx(n,{size:12})}},p={name:"Secondary / L",args:{variant:"secondary",size:"L",children:"Button Text",leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16})}},y={name:"Secondary / M",args:{variant:"secondary",size:"M",children:"Button Text",leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16})}},m={name:"Ghost / L",args:{variant:"ghost",size:"L",children:"Button Text",leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16})}},u={name:"Ghost / M",args:{variant:"ghost",size:"M",children:"Button Text",leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16})}},g={name:"Fixed / Primary L",args:{variant:"primary",size:"L",type:"fixed",children:"Button Text",leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16})}},x={name:"Fixed / Secondary L",args:{variant:"secondary",size:"L",type:"fixed",children:"Button Text",leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16})}},z={name:"Icon Only / Primary L",args:{variant:"primary",size:"L",type:"icon-only",icon:e.jsx(n,{size:16})}},h={name:"Icon Only / Secondary M",args:{variant:"secondary",size:"M",type:"icon-only",icon:e.jsx(n,{size:16})}},f={name:"Icon Only / Ghost S",args:{variant:"ghost",size:"S",type:"icon-only",icon:e.jsx(n,{size:16})}},I={name:"Disabled",args:{variant:"primary",size:"L",disabled:!0,children:"Button Text",leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16})}},v={name:"Loading",args:{variant:"primary",size:"L",loading:!0,children:"Button Text"}},S={name:"Loading / Secondary",args:{variant:"secondary",size:"M",loading:!0,children:"Button Text"}},j={name:"All Variants Overview",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px 1fr 1fr 1fr",gap:16,alignItems:"center"},children:[e.jsx("span",{}),e.jsx("span",{style:{fontSize:12,color:"#6e6e81",fontWeight:600},children:"Primary"}),e.jsx("span",{style:{fontSize:12,color:"#6e6e81",fontWeight:600},children:"Secondary"}),e.jsx("span",{style:{fontSize:12,color:"#6e6e81",fontWeight:600},children:"Ghost"})]}),["L","M","S","XS"].map(t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px 1fr 1fr 1fr",gap:16,alignItems:"center"},children:[e.jsxs("span",{style:{fontSize:12,color:"#6e6e81"},children:["Size ",t]}),e.jsx(a,{variant:"primary",size:t,leftIcon:e.jsx(n,{size:t==="XS"?12:16}),rightIcon:e.jsx(n,{size:t==="XS"?12:16}),children:"Button Text"}),e.jsx(a,{variant:"secondary",size:t,leftIcon:e.jsx(n,{size:t==="XS"?12:16}),rightIcon:e.jsx(n,{size:t==="XS"?12:16}),children:"Button Text"}),e.jsx(a,{variant:"ghost",size:t,leftIcon:e.jsx(n,{size:t==="XS"?12:16}),rightIcon:e.jsx(n,{size:t==="XS"?12:16}),children:"Button Text"})]})},t)),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px 1fr 1fr 1fr",gap:16,alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"#6e6e81"},children:"Disabled"}),e.jsx(a,{variant:"primary",size:"L",disabled:!0,leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16}),children:"Button Text"}),e.jsx(a,{variant:"secondary",size:"L",disabled:!0,leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16}),children:"Button Text"}),e.jsx(a,{variant:"ghost",size:"L",disabled:!0,leftIcon:e.jsx(n,{size:16}),rightIcon:e.jsx(n,{size:16}),children:"Button Text"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px 1fr 1fr 1fr",gap:16,alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"#6e6e81"},children:"Loading"}),e.jsx(a,{variant:"primary",size:"L",loading:!0,children:"Button Text"}),e.jsx(a,{variant:"secondary",size:"L",loading:!0,children:"Button Text"}),e.jsx(a,{variant:"ghost",size:"L",loading:!0,children:"Button Text"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px 1fr 1fr 1fr",gap:16,alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"#6e6e81"},children:"Icon Only"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{variant:"primary",size:"L",type:"icon-only",icon:e.jsx(n,{size:16})}),e.jsx(a,{variant:"primary",size:"M",type:"icon-only",icon:e.jsx(n,{size:16})}),e.jsx(a,{variant:"primary",size:"S",type:"icon-only",icon:e.jsx(n,{size:16})}),e.jsx(a,{variant:"primary",size:"XS",type:"icon-only",icon:e.jsx(n,{size:12})})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{variant:"secondary",size:"L",type:"icon-only",icon:e.jsx(n,{size:16})}),e.jsx(a,{variant:"secondary",size:"M",type:"icon-only",icon:e.jsx(n,{size:16})}),e.jsx(a,{variant:"secondary",size:"S",type:"icon-only",icon:e.jsx(n,{size:16})}),e.jsx(a,{variant:"secondary",size:"XS",type:"icon-only",icon:e.jsx(n,{size:12})})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{variant:"ghost",size:"L",type:"icon-only",icon:e.jsx(n,{size:16})}),e.jsx(a,{variant:"ghost",size:"M",type:"icon-only",icon:e.jsx(n,{size:16})}),e.jsx(a,{variant:"ghost",size:"S",type:"icon-only",icon:e.jsx(n,{size:16})}),e.jsx(a,{variant:"ghost",size:"XS",type:"icon-only",icon:e.jsx(n,{size:12})})]})]})]})};var M,X,C;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Primary / L',
  args: {
    variant: 'primary',
    size: 'L',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />
  }
}`,...(C=(X=o.parameters)==null?void 0:X.docs)==null?void 0:C.source}}};var P,w,O;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Primary / M',
  args: {
    variant: 'primary',
    size: 'M',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />
  }
}`,...(O=(w=c.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var N,R,G;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Primary / S',
  args: {
    variant: 'primary',
    size: 'S',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />
  }
}`,...(G=(R=l.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var W,D,q;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Primary / XS',
  args: {
    variant: 'primary',
    size: 'XS',
    children: 'Button Text',
    leftIcon: <HeartIcon size={12} />,
    rightIcon: <HeartIcon size={12} />
  }
}`,...(q=(D=d.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var V,k,F;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Secondary / L',
  args: {
    variant: 'secondary',
    size: 'L',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />
  }
}`,...(F=(k=p.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var A,$,E;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Secondary / M',
  args: {
    variant: 'secondary',
    size: 'M',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />
  }
}`,...(E=($=y.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var Z,J,K;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Ghost / L',
  args: {
    variant: 'ghost',
    size: 'L',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Ghost / M',
  args: {
    variant: 'ghost',
    size: 'M',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />
  }
}`,...(Y=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var ee,ne,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Fixed / Primary L',
  args: {
    variant: 'primary',
    size: 'L',
    type: 'fixed',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />
  }
}`,...(ae=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,re,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Fixed / Secondary L',
  args: {
    variant: 'secondary',
    size: 'L',
    type: 'fixed',
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />
  }
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,oe,ce;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Icon Only / Primary L',
  args: {
    variant: 'primary',
    size: 'L',
    type: 'icon-only',
    icon: <HeartIcon size={16} />
  }
}`,...(ce=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var le,de,pe;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Icon Only / Secondary M',
  args: {
    variant: 'secondary',
    size: 'M',
    type: 'icon-only',
    icon: <HeartIcon size={16} />
  }
}`,...(pe=(de=h.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ye,me,ue;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Icon Only / Ghost S',
  args: {
    variant: 'ghost',
    size: 'S',
    type: 'icon-only',
    icon: <HeartIcon size={16} />
  }
}`,...(ue=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ge,xe,ze;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    variant: 'primary',
    size: 'L',
    disabled: true,
    children: 'Button Text',
    leftIcon: <HeartIcon size={16} />,
    rightIcon: <HeartIcon size={16} />
  }
}`,...(ze=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:ze.source}}};var he,fe,Ie;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Loading',
  args: {
    variant: 'primary',
    size: 'L',
    loading: true,
    children: 'Button Text'
  }
}`,...(Ie=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};var ve,Se,je;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Loading / Secondary',
  args: {
    variant: 'secondary',
    size: 'M',
    loading: true,
    children: 'Button Text'
  }
}`,...(je=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var Be,Le,Te;j.parameters={...j.parameters,docs:{...(Be=j.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'All Variants Overview',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {/* Sizes header */}
      <div style={{
      display: 'grid',
      gridTemplateColumns: '80px 1fr 1fr 1fr',
      gap: 16,
      alignItems: 'center'
    }}>
        <span />
        <span style={{
        fontSize: 12,
        color: '#6e6e81',
        fontWeight: 600
      }}>Primary</span>
        <span style={{
        fontSize: 12,
        color: '#6e6e81',
        fontWeight: 600
      }}>Secondary</span>
        <span style={{
        fontSize: 12,
        color: '#6e6e81',
        fontWeight: 600
      }}>Ghost</span>
      </div>

      {(['L', 'M', 'S', 'XS'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
          <div style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr 1fr 1fr',
        gap: 16,
        alignItems: 'center'
      }}>
            <span style={{
          fontSize: 12,
          color: '#6e6e81'
        }}>Size {size}</span>
            <Button variant="primary" size={size} leftIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />} rightIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />}>Button Text</Button>
            <Button variant="secondary" size={size} leftIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />} rightIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />}>Button Text</Button>
            <Button variant="ghost" size={size} leftIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />} rightIcon={<HeartIcon size={size === 'XS' ? 12 : 16} />}>Button Text</Button>
          </div>
        </div>)}

      {/* Disabled row */}
      <div style={{
      display: 'grid',
      gridTemplateColumns: '80px 1fr 1fr 1fr',
      gap: 16,
      alignItems: 'center'
    }}>
        <span style={{
        fontSize: 12,
        color: '#6e6e81'
      }}>Disabled</span>
        <Button variant="primary" size="L" disabled leftIcon={<HeartIcon size={16} />} rightIcon={<HeartIcon size={16} />}>Button Text</Button>
        <Button variant="secondary" size="L" disabled leftIcon={<HeartIcon size={16} />} rightIcon={<HeartIcon size={16} />}>Button Text</Button>
        <Button variant="ghost" size="L" disabled leftIcon={<HeartIcon size={16} />} rightIcon={<HeartIcon size={16} />}>Button Text</Button>
      </div>

      {/* Loading row */}
      <div style={{
      display: 'grid',
      gridTemplateColumns: '80px 1fr 1fr 1fr',
      gap: 16,
      alignItems: 'center'
    }}>
        <span style={{
        fontSize: 12,
        color: '#6e6e81'
      }}>Loading</span>
        <Button variant="primary" size="L" loading>Button Text</Button>
        <Button variant="secondary" size="L" loading>Button Text</Button>
        <Button variant="ghost" size="L" loading>Button Text</Button>
      </div>

      {/* Icon Only row */}
      <div style={{
      display: 'grid',
      gridTemplateColumns: '80px 1fr 1fr 1fr',
      gap: 16,
      alignItems: 'center'
    }}>
        <span style={{
        fontSize: 12,
        color: '#6e6e81'
      }}>Icon Only</span>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button variant="primary" size="L" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="primary" size="M" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="primary" size="S" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="primary" size="XS" type="icon-only" icon={<HeartIcon size={12} />} />
        </div>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button variant="secondary" size="L" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="secondary" size="M" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="secondary" size="S" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="secondary" size="XS" type="icon-only" icon={<HeartIcon size={12} />} />
        </div>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button variant="ghost" size="L" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="ghost" size="M" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="ghost" size="S" type="icon-only" icon={<HeartIcon size={16} />} />
          <Button variant="ghost" size="XS" type="icon-only" icon={<HeartIcon size={12} />} />
        </div>
      </div>
    </div>
}`,...(Te=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};const Fe=["PrimaryL","PrimaryM","PrimaryS","PrimaryXS","SecondaryL","SecondaryM","GhostL","GhostM","FixedPrimary","FixedSecondary","IconOnlyPrimaryL","IconOnlySecondaryM","IconOnlyGhostS","Disabled","Loading","LoadingSecondary","AllVariants"];export{j as AllVariants,I as Disabled,g as FixedPrimary,x as FixedSecondary,m as GhostL,u as GhostM,f as IconOnlyGhostS,z as IconOnlyPrimaryL,h as IconOnlySecondaryM,v as Loading,S as LoadingSecondary,o as PrimaryL,c as PrimaryM,l as PrimaryS,d as PrimaryXS,p as SecondaryL,y as SecondaryM,Fe as __namedExportsOrder,ke as default};
