import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const C="_wrapper_1dd81_1",E="_tooltip_1dd81_6",I="_visible_1dd81_24",k="_top_1dd81_39",z="_bottom_1dd81_51",D="_left_1dd81_63",F="_right_1dd81_75",r={wrapper:C,tooltip:E,visible:I,top:k,bottom:z,left:D,right:F},o=({children:c,text:q,placement:H="top",visible:A,className:L})=>{const P=[r.tooltip,r[H],A?r.visible:"",L].filter(Boolean).join(" ");return e.jsxs("div",{className:r.wrapper,children:[c,e.jsx("div",{className:P,role:"tooltip",children:q})]})};o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Design System/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placement:{control:"radio",options:["top","bottom","left","right"]}},decorators:[c=>e.jsx("div",{style:{padding:80},children:e.jsx(c,{})})]},t=()=>e.jsx("button",{style:{padding:"12px 24px",borderRadius:12,border:"none",background:"#ecedf2",fontFamily:"Inter, sans-serif",fontWeight:600,fontSize:14,cursor:"pointer"},children:"Hover me"}),s={args:{text:"Tooltip text",placement:"top",visible:!0,children:e.jsx(t,{})}},i={args:{text:"Tooltip text",placement:"bottom",visible:!0,children:e.jsx(t,{})}},a={args:{text:"Tooltip text",placement:"left",visible:!0,children:e.jsx(t,{})}},n={args:{text:"Tooltip text",placement:"right",visible:!0,children:e.jsx(t,{})}},l={name:"Hover to Reveal",args:{text:"This appears on hover",placement:"top",children:e.jsx(t,{})}},p={name:"All Placements",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,padding:40},children:[e.jsx(o,{text:"Top tooltip",placement:"top",visible:!0,children:e.jsx(t,{})}),e.jsx(o,{text:"Bottom tooltip",placement:"bottom",visible:!0,children:e.jsx(t,{})}),e.jsx(o,{text:"Left tooltip",placement:"left",visible:!0,children:e.jsx(t,{})}),e.jsx(o,{text:"Right tooltip",placement:"right",visible:!0,children:e.jsx(t,{})})]})};var d,m,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'Tooltip text',
    placement: 'top',
    visible: true,
    children: <TriggerButton />
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,x,T;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'Tooltip text',
    placement: 'bottom',
    visible: true,
    children: <TriggerButton />
  }
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var v,h,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'Tooltip text',
    placement: 'left',
    visible: true,
    children: <TriggerButton />
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,_,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'Tooltip text',
    placement: 'right',
    visible: true,
    children: <TriggerButton />
  }
}`,...(j=(_=n.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var y,B,R;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Hover to Reveal',
  args: {
    text: 'This appears on hover',
    placement: 'top',
    children: <TriggerButton />
  }
}`,...(R=(B=l.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var S,w,N;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'All Placements',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 64,
    padding: 40
  }}>
      <Tooltip text="Top tooltip" placement="top" visible>
        <TriggerButton />
      </Tooltip>
      <Tooltip text="Bottom tooltip" placement="bottom" visible>
        <TriggerButton />
      </Tooltip>
      <Tooltip text="Left tooltip" placement="left" visible>
        <TriggerButton />
      </Tooltip>
      <Tooltip text="Right tooltip" placement="right" visible>
        <TriggerButton />
      </Tooltip>
    </div>
}`,...(N=(w=p.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const G=["Top","Bottom","Left","Right","HoverToReveal","AllPlacements"];export{p as AllPlacements,i as Bottom,l as HoverToReveal,a as Left,n as Right,s as Top,G as __namedExportsOrder,W as default};
