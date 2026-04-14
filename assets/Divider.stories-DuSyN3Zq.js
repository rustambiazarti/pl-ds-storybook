import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const W="_divider_fuxoe_1",I="_horizontal_fuxoe_6",T="_vertical_fuxoe_11",D="_wrapper_fuxoe_19",N="_verticalWrapper_fuxoe_25",b="_line_fuxoe_32",L="_text_fuxoe_44",t={divider:W,horizontal:I,vertical:T,wrapper:D,verticalWrapper:N,line:b,text:L},l=({orientation:r="horizontal",text:d,className:c})=>d?e.jsxs("div",{className:[t.wrapper,r==="vertical"?t.verticalWrapper:"",c].filter(Boolean).join(" "),role:"separator",children:[e.jsx("div",{className:t.line}),e.jsx("span",{className:t.text,children:d}),e.jsx("div",{className:t.line})]}):e.jsx("hr",{className:[t.divider,r==="horizontal"?t.horizontal:t.vertical,c].filter(Boolean).join(" ")});l.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"Design System/Divider",component:l,tags:["autodocs"],parameters:{layout:"centered"},decorators:[r=>e.jsx("div",{style:{width:400},children:e.jsx(r,{})})]},n={args:{orientation:"horizontal"}},i={args:{orientation:"vertical"},decorators:[r=>e.jsx("div",{style:{height:80,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(r,{})})]},o={args:{text:"or",orientation:"horizontal"}},a={name:"With Longer Text",args:{text:"continue with",orientation:"horizontal"}},s={name:"In Context",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,fontFamily:"Inter, sans-serif"},children:[e.jsx("div",{style:{padding:"12px 0",fontSize:14},children:"Content above the divider"}),e.jsx(l,{}),e.jsx("div",{style:{padding:"12px 0",fontSize:14},children:"Content below the divider"}),e.jsx(l,{text:"or"}),e.jsx("div",{style:{padding:"12px 0",fontSize:14},children:"Alternative content section"})]})};var p,x,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...(m=(x=n.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var v,u,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  decorators: [Story => <div style={{
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'or',
    orientation: 'horizontal'
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var _,z,j;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'With Longer Text',
  args: {
    text: 'continue with',
    orientation: 'horizontal'
  }
}`,...(j=(z=a.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var S,w,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'In Context',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    fontFamily: 'Inter, sans-serif'
  }}>
      <div style={{
      padding: '12px 0',
      fontSize: 14
    }}>
        Content above the divider
      </div>
      <Divider />
      <div style={{
      padding: '12px 0',
      fontSize: 14
    }}>
        Content below the divider
      </div>
      <Divider text="or" />
      <div style={{
      padding: '12px 0',
      fontSize: 14
    }}>
        Alternative content section
      </div>
    </div>
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const B=["Horizontal","Vertical","WithText","WithLongerText","InContext"];export{n as Horizontal,s as InContext,i as Vertical,a as WithLongerText,o as WithText,B as __namedExportsOrder,A as default};
