import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as O}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const R="_tabs_n3s5s_1",V="_fullWidth_n3s5s_10",G="_tab_n3s5s_1",H="_active_n3s5s_51",J="_disabled_n3s5s_58",s={tabs:R,fullWidth:V,tab:G,"size-L":"_size-L_n3s5s_35","size-M":"_size-M_n3s5s_41",active:H,disabled:J},t=({items:u,activeKey:F,size:w="L",fullWidth:A=!1,onChange:m,className:q})=>{var p;const[C,B]=O.useState(((p=u[0])==null?void 0:p.key)??""),$=F??C,N=(a,b)=>{b||(B(a),m==null||m(a))};return e.jsx("div",{className:`${s.tabs} ${s[`size-${w}`]} ${A?s.fullWidth:""} ${q??""}`,children:u.map(a=>{const b=a.key===$,E=[s.tab,b?s.active:"",a.disabled?s.disabled:""].filter(Boolean).join(" ");return e.jsx("button",{className:E,onClick:()=>N(a.key,a.disabled),disabled:a.disabled,children:a.label},a.key)})})};t.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Tab items"},activeKey:{required:!1,tsType:{name:"string"},description:"Currently active tab key"},size:{required:!1,tsType:{name:"union",raw:"'L' | 'M'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"}]},description:"Size",defaultValue:{value:"'L'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width tabs",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"onChange handler"},className:{required:!1,tsType:{name:"string"},description:"Additional class"}}};const X={title:"Design System/Tabs",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["L","M"]},fullWidth:{control:"boolean"}}},i=[{key:"tab1",label:"Overview"},{key:"tab2",label:"Details"},{key:"tab3",label:"Reviews"}],r={args:{items:i,activeKey:"tab1",size:"L"}},n={name:"Size M",args:{items:i,activeKey:"tab1",size:"M"}},l={name:"Four Tabs",args:{items:[{key:"1",label:"Tab 1"},{key:"2",label:"Tab 2"},{key:"3",label:"Tab 3"},{key:"4",label:"Tab 4"}],activeKey:"2",size:"L"}},o={name:"With Disabled Tab",args:{items:[{key:"1",label:"Active"},{key:"2",label:"Available"},{key:"3",label:"Disabled",disabled:!0}],activeKey:"1",size:"L"}},d={name:"Full Width",render:()=>e.jsx("div",{style:{width:400},children:e.jsx(t,{items:i,activeKey:"tab1",size:"L",fullWidth:!0})})},c={name:"Size Comparison",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#6e6e81",marginBottom:8},children:"Size L"}),e.jsx(t,{items:i,activeKey:"tab1",size:"L"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#6e6e81",marginBottom:8},children:"Size M"}),e.jsx(t,{items:i,activeKey:"tab1",size:"M"})]})]})};var y,v,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeKey: 'tab1',
    size: 'L'
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var z,T,g;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Size M',
  args: {
    items: defaultItems,
    activeKey: 'tab1',
    size: 'M'
  }
}`,...(g=(T=n.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var h,k,_;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Four Tabs',
  args: {
    items: [{
      key: '1',
      label: 'Tab 1'
    }, {
      key: '2',
      label: 'Tab 2'
    }, {
      key: '3',
      label: 'Tab 3'
    }, {
      key: '4',
      label: 'Tab 4'
    }],
    activeKey: '2',
    size: 'L'
  }
}`,...(_=(k=l.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var S,x,K;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Disabled Tab',
  args: {
    items: [{
      key: '1',
      label: 'Active'
    }, {
      key: '2',
      label: 'Available'
    }, {
      key: '3',
      label: 'Disabled',
      disabled: true
    }],
    activeKey: '1',
    size: 'L'
  }
}`,...(K=(x=o.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var L,W,M;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Full Width',
  render: () => <div style={{
    width: 400
  }}>
      <Tabs items={defaultItems} activeKey="tab1" size="L" fullWidth />
    </div>
}`,...(M=(W=d.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var j,D,I;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Size Comparison',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div>
        <p style={{
        fontSize: 12,
        color: '#6e6e81',
        marginBottom: 8
      }}>Size L</p>
        <Tabs items={defaultItems} activeKey="tab1" size="L" />
      </div>
      <div>
        <p style={{
        fontSize: 12,
        color: '#6e6e81',
        marginBottom: 8
      }}>Size M</p>
        <Tabs items={defaultItems} activeKey="tab1" size="M" />
      </div>
    </div>
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Y=["Default","SizeM","FourTabs","WithDisabled","FullWidth","Comparison"];export{c as Comparison,r as Default,l as FourTabs,d as FullWidth,n as SizeM,o as WithDisabled,Y as __namedExportsOrder,X as default};
