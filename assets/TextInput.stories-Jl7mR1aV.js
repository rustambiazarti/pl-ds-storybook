import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a}from"./index-BioFo8Zg.js";import{S as T}from"./icons-UMH4VIvd.js";import{H as Te}from"./Hint-BLi1tsq9.js";import"./index-yBjzXJbu.js";const De="_wrapper_ioup8_2",Be="_field_ioup8_20",Ce="_hovered_ioup8_44",Ee="_focused_ioup8_48",qe="_error_ioup8_52",Ve="_disabled_ioup8_56",We="_content_ioup8_62",Ne="_iconLeft_ioup8_77",Ae="_label_ioup8_82",$e="_labelFloating_ioup8_108",Fe="_input_ioup8_114",Pe="_inputHidden_ioup8_144",ke="_iconRight_ioup8_151",Oe="_inlineButton_ioup8_178",t={wrapper:De,"wrapper-L":"_wrapper-L_ioup8_9","wrapper-M":"_wrapper-M_ioup8_14",field:Be,"size-L":"_size-L_ioup8_31","size-M":"_size-M_ioup8_37",hovered:Ce,focused:Ee,error:qe,disabled:Ve,content:We,iconLeft:Ne,label:Ae,labelFloating:$e,input:Fe,inputHidden:Pe,iconRight:ke,inlineButton:Oe},n=({size:S="L",label:me="Label",placeholder:fe="Placeholder",value:be,hint:ge="Hint",showHint:Le=!0,error:w=!1,disabled:o=!1,showRightIcon:we=!0,showLeftIcon:ze=!1,showButton:ve=!1,buttonText:xe="Edit",onChange:z,onFocus:v,onBlur:x,className:Se})=>{const[Ie,_e]=a.useState(""),[s,I]=a.useState(!1),[ye,_]=a.useState(!1),y=a.useRef(null),H=be??Ie,R=H.length>0,He=r=>{const M=r.target.value;_e(M),z==null||z(M)},Re=()=>{I(!0),v==null||v()},je=()=>{I(!1),x==null||x()},Me=[t.field,t[`size-${S}`],s&&!o?t.focused:"",ye&&!s&&!o?t.hovered:"",w?t.error:"",o?t.disabled:""].filter(Boolean).join(" "),j=s||R;return e.jsxs("div",{className:`${t.wrapper} ${t[`wrapper-${S}`]} ${Se??""}`,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:[e.jsxs("div",{className:Me,onClick:()=>{var r;return!o&&((r=y.current)==null?void 0:r.focus())},children:[ze&&e.jsx("div",{className:t.iconLeft,children:e.jsx(T,{size:24})}),e.jsxs("div",{className:t.content,children:[e.jsx("label",{className:`${t.label} ${j?t.labelFloating:""}`,children:me}),e.jsx("input",{ref:y,className:`${t.input} ${j?"":t.inputHidden}`,type:"text",value:H,placeholder:s&&!R?fe:"",disabled:o,onChange:He,onFocus:Re,onBlur:je})]}),we&&e.jsx("div",{className:t.iconRight,children:e.jsx(T,{size:24})}),ve&&e.jsx("button",{className:t.inlineButton,type:"button",disabled:o,children:xe})]}),Le&&e.jsx(Te,{text:ge,error:w,showIcon:w})]})};n.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{size:{required:!1,tsType:{name:"union",raw:"'L' | 'M'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"}]},description:"Input size variant",defaultValue:{value:"'L'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text",defaultValue:{value:"'Label'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text (visible when focused)",defaultValue:{value:"'Placeholder'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current value"},hint:{required:!1,tsType:{name:"string"},description:"Hint text below the input",defaultValue:{value:"'Hint'",computed:!1}},showHint:{required:!1,tsType:{name:"boolean"},description:"Show hint",defaultValue:{value:"true",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},showRightIcon:{required:!1,tsType:{name:"boolean"},description:"Show right search icon",defaultValue:{value:"true",computed:!1}},showLeftIcon:{required:!1,tsType:{name:"boolean"},description:"Show left icon",defaultValue:{value:"false",computed:!1}},showButton:{required:!1,tsType:{name:"boolean"},description:"Show inline button",defaultValue:{value:"false",computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"Button text",defaultValue:{value:"'Edit'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"onChange handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onFocus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onBlur handler"},className:{required:!1,tsType:{name:"string"},description:"Additional class"}}};const Xe={title:"Design System/TextInput",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["L","M"]},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},showHint:{control:"boolean"},error:{control:"boolean"},disabled:{control:"boolean"},showRightIcon:{control:"boolean"},showLeftIcon:{control:"boolean"},showButton:{control:"boolean"},buttonText:{control:"text"}}},i={name:"Size L / Default",args:{size:"L",label:"Label",placeholder:"Placeholder",hint:"Hint",showHint:!0,error:!1,disabled:!1,showRightIcon:!0}},l={name:"Size L / Error",args:{size:"L",label:"Label",hint:"This field is required",showHint:!0,error:!0,showRightIcon:!0}},c={name:"Size L / Disabled",args:{size:"L",label:"Label",hint:"Hint",showHint:!0,disabled:!0,showRightIcon:!0}},u={name:"Size L / With Content",args:{size:"L",label:"Label",value:"Content",hint:"Hint",showHint:!0,showRightIcon:!0}},d={name:"Size L / Left Icon",args:{size:"L",label:"Search",hint:"Hint",showHint:!0,showLeftIcon:!0,showRightIcon:!1}},h={name:"Size L / With Button",args:{size:"L",label:"Label",value:"Content",hint:"Hint",showHint:!0,showRightIcon:!1,showButton:!0,buttonText:"Edit"}},p={name:"Size M / Default",args:{size:"M",label:"Label",placeholder:"Placeholder",hint:"Hint",showHint:!0,error:!1,disabled:!1,showRightIcon:!0}},m={name:"Size M / Error",args:{size:"M",label:"Label",hint:"This field is required",showHint:!0,error:!0,showRightIcon:!0}},f={name:"Size M / Disabled",args:{size:"M",label:"Label",hint:"Hint",showHint:!0,disabled:!0,showRightIcon:!0}},b={name:"Size M / With Content",args:{size:"M",label:"Label",value:"Content",hint:"Hint",showHint:!0,showRightIcon:!0}},g={name:"Size L / All States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Default (no content)"}),e.jsx(n,{size:"L",label:"Label",showRightIcon:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Default (with content)"}),e.jsx(n,{size:"L",label:"Label",value:"Content",showRightIcon:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Error (no content)"}),e.jsx(n,{size:"L",label:"Label",error:!0,showRightIcon:!0,hint:"Hint"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Error (with content)"}),e.jsx(n,{size:"L",label:"Label",value:"Content",error:!0,showRightIcon:!0,hint:"Hint"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Disabled (no content)"}),e.jsx(n,{size:"L",label:"Label",disabled:!0,showRightIcon:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Disabled (with content)"}),e.jsx(n,{size:"L",label:"Label",value:"Content",disabled:!0,showRightIcon:!0})]})]})},L={name:"Size M / All States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Default (no content)"}),e.jsx(n,{size:"M",label:"Label",showRightIcon:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Default (with content)"}),e.jsx(n,{size:"M",label:"Label",value:"Content",showRightIcon:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Error"}),e.jsx(n,{size:"M",label:"Label",error:!0,showRightIcon:!0,hint:"Hint"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Disabled"}),e.jsx(n,{size:"M",label:"Label",disabled:!0,showRightIcon:!0})]})]})};var D,B,C;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Size L / Default',
  args: {
    size: 'L',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Hint',
    showHint: true,
    error: false,
    disabled: false,
    showRightIcon: true
  }
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var E,q,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Size L / Error',
  args: {
    size: 'L',
    label: 'Label',
    hint: 'This field is required',
    showHint: true,
    error: true,
    showRightIcon: true
  }
}`,...(V=(q=l.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var W,N,A;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Size L / Disabled',
  args: {
    size: 'L',
    label: 'Label',
    hint: 'Hint',
    showHint: true,
    disabled: true,
    showRightIcon: true
  }
}`,...(A=(N=c.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var $,F,P;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Size L / With Content',
  args: {
    size: 'L',
    label: 'Label',
    value: 'Content',
    hint: 'Hint',
    showHint: true,
    showRightIcon: true
  }
}`,...(P=(F=u.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var k,O,G;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Size L / Left Icon',
  args: {
    size: 'L',
    label: 'Search',
    hint: 'Hint',
    showHint: true,
    showLeftIcon: true,
    showRightIcon: false
  }
}`,...(G=(O=d.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Size L / With Button',
  args: {
    size: 'L',
    label: 'Label',
    value: 'Content',
    hint: 'Hint',
    showHint: true,
    showRightIcon: false,
    showButton: true,
    buttonText: 'Edit'
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Size M / Default',
  args: {
    size: 'M',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Hint',
    showHint: true,
    error: false,
    disabled: false,
    showRightIcon: true
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Size M / Error',
  args: {
    size: 'M',
    label: 'Label',
    hint: 'This field is required',
    showHint: true,
    error: true,
    showRightIcon: true
  }
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,se;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Size M / Disabled',
  args: {
    size: 'M',
    label: 'Label',
    hint: 'Hint',
    showHint: true,
    disabled: true,
    showRightIcon: true
  }
}`,...(se=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ae,ie;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Size M / With Content',
  args: {
    size: 'M',
    label: 'Label',
    value: 'Content',
    hint: 'Hint',
    showHint: true,
    showRightIcon: true
  }
}`,...(ie=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var le,ce,ue;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Size L / All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Default (no content)
        </p>
        <TextInput size="L" label="Label" showRightIcon />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Default (with content)
        </p>
        <TextInput size="L" label="Label" value="Content" showRightIcon />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Error (no content)
        </p>
        <TextInput size="L" label="Label" error showRightIcon hint="Hint" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Error (with content)
        </p>
        <TextInput size="L" label="Label" value="Content" error showRightIcon hint="Hint" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Disabled (no content)
        </p>
        <TextInput size="L" label="Label" disabled showRightIcon />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Disabled (with content)
        </p>
        <TextInput size="L" label="Label" value="Content" disabled showRightIcon />
      </div>
    </div>
}`,...(ue=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,he,pe;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Size M / All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Default (no content)
        </p>
        <TextInput size="M" label="Label" showRightIcon />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Default (with content)
        </p>
        <TextInput size="M" label="Label" value="Content" showRightIcon />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Error
        </p>
        <TextInput size="M" label="Label" error showRightIcon hint="Hint" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Disabled
        </p>
        <TextInput size="M" label="Label" disabled showRightIcon />
      </div>
    </div>
}`,...(pe=(he=L.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};const Ye=["DefaultL","ErrorL","DisabledL","WithContentL","WithLeftIcon","WithButton","DefaultM","ErrorM","DisabledM","WithContentM","AllStatesL","AllStatesM"];export{g as AllStatesL,L as AllStatesM,i as DefaultL,p as DefaultM,c as DisabledL,f as DisabledM,l as ErrorL,m as ErrorM,h as WithButton,u as WithContentL,b as WithContentM,d as WithLeftIcon,Ye as __namedExportsOrder,Xe as default};
