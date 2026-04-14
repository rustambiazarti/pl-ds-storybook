import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-BioFo8Zg.js";import{H as Le}from"./Hint-BLi1tsq9.js";import"./index-yBjzXJbu.js";import"./icons-UMH4VIvd.js";const xe="_wrapper_1ug3d_2",ve="_field_1ug3d_18",Se="_hovered_1ug3d_43",_e="_focused_1ug3d_47",ye="_error_1ug3d_51",He="_disabled_1ug3d_55",Me="_noResize_1ug3d_60",we="_textarea_1ug3d_60",je="_content_1ug3d_65",De="_label_1ug3d_75",Te="_labelFloating_1ug3d_101",Ce="_textareaHidden_1ug3d_140",t={wrapper:xe,"wrapper-L":"_wrapper-L_1ug3d_9","wrapper-M":"_wrapper-M_1ug3d_13",field:ve,"size-L":"_size-L_1ug3d_32","size-M":"_size-M_1ug3d_36",hovered:Se,focused:_e,error:ye,disabled:He,noResize:Me,textarea:we,content:je,label:De,labelFloating:Te,textareaHidden:Ce},a=({size:v="L",label:ne="Label",placeholder:le="Placeholder",value:oe,hint:ie="Hint",showHint:de=!0,error:g=!1,disabled:r=!1,resizable:ce=!0,onChange:z,onFocus:L,onBlur:x,className:ue})=>{const[pe,me]=l.useState(""),[s,S]=l.useState(!1),[be,_]=l.useState(!1),y=l.useRef(null),H=oe??pe,M=H.length>0,he=n=>{const j=n.target.value;me(j),z==null||z(j)},fe=()=>{S(!0),L==null||L()},ge=()=>{S(!1),x==null||x()},ze=[t.field,t[`size-${v}`],s&&!r?t.focused:"",be&&!s&&!r?t.hovered:"",g?t.error:"",r?t.disabled:"",ce?"":t.noResize].filter(Boolean).join(" "),w=s||M;return e.jsxs("div",{className:`${t.wrapper} ${t[`wrapper-${v}`]} ${ue??""}`,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:[e.jsx("div",{className:ze,onClick:()=>{var n;return!r&&((n=y.current)==null?void 0:n.focus())},children:e.jsxs("div",{className:t.content,children:[e.jsx("label",{className:`${t.label} ${w?t.labelFloating:""}`,children:ne}),e.jsx("textarea",{ref:y,className:`${t.textarea} ${!w&&!s?t.textareaHidden:""}`,value:H,placeholder:s&&!M?le:"",disabled:r,onChange:he,onFocus:fe,onBlur:ge,rows:2})]})}),de&&e.jsx(Le,{text:ie,error:g,showIcon:g})]})};a.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{size:{required:!1,tsType:{name:"union",raw:"'L' | 'M'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"}]},description:"Textarea size variant",defaultValue:{value:"'L'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text",defaultValue:{value:"'Label'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Placeholder'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Current value"},hint:{required:!1,tsType:{name:"string"},description:"Hint text below",defaultValue:{value:"'Hint'",computed:!1}},showHint:{required:!1,tsType:{name:"boolean"},description:"Show hint",defaultValue:{value:"true",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"Allow resize",defaultValue:{value:"true",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"onChange handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onFocus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onBlur handler"},className:{required:!1,tsType:{name:"string"},description:"Additional class"}}};const $e={title:"Design System/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"radio"},options:["L","M"]},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},showHint:{control:"boolean"},error:{control:"boolean"},disabled:{control:"boolean"},resizable:{control:"boolean"}}},o={name:"Size L / Default",args:{size:"L",label:"Label",placeholder:"Placeholder",hint:"Hint",showHint:!0,error:!1,disabled:!1}},i={name:"Size L / With Content",args:{size:"L",label:"Label",value:"Content",hint:"Hint",showHint:!0}},d={name:"Size L / Error",args:{size:"L",label:"Label",hint:"This field is required",showHint:!0,error:!0}},c={name:"Size L / Disabled",args:{size:"L",label:"Label",hint:"Hint",showHint:!0,disabled:!0}},u={name:"Size M / Default",args:{size:"M",label:"Label",placeholder:"Placeholder",hint:"Hint",showHint:!0}},p={name:"Size M / With Content",args:{size:"M",label:"Label",value:"Content",hint:"Hint",showHint:!0}},m={name:"Size M / Error",args:{size:"M",label:"Label",hint:"This field is required",showHint:!0,error:!0}},b={name:"Size M / Disabled",args:{size:"M",label:"Label",hint:"Hint",showHint:!0,disabled:!0}},h={name:"Size L / All States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Default (no content)"}),e.jsx(a,{size:"L",label:"Label"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Default (with content)"}),e.jsx(a,{size:"L",label:"Label",value:"Content"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Error"}),e.jsx(a,{size:"L",label:"Label",error:!0,hint:"Hint"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Disabled"}),e.jsx(a,{size:"L",label:"Label",disabled:!0})]})]})},f={name:"Size M / All States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Default (no content)"}),e.jsx(a,{size:"M",label:"Label"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Default (with content)"}),e.jsx(a,{size:"M",label:"Label",value:"Content"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Error"}),e.jsx(a,{size:"M",label:"Label",error:!0,hint:"Hint"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#6e6e81"},children:"Disabled"}),e.jsx(a,{size:"M",label:"Label",disabled:!0})]})]})};var D,T,C;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Size L / Default',
  args: {
    size: 'L',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Hint',
    showHint: true,
    error: false,
    disabled: false
  }
}`,...(C=(T=o.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var q,B,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Size L / With Content',
  args: {
    size: 'L',
    label: 'Label',
    value: 'Content',
    hint: 'Hint',
    showHint: true
  }
}`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var V,A,$;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Size L / Error',
  args: {
    size: 'L',
    label: 'Label',
    hint: 'This field is required',
    showHint: true,
    error: true
  }
}`,...($=(A=d.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var W,F,N;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Size L / Disabled',
  args: {
    size: 'L',
    label: 'Label',
    hint: 'Hint',
    showHint: true,
    disabled: true
  }
}`,...(N=(F=c.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var P,R,I;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Size M / Default',
  args: {
    size: 'M',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Hint',
    showHint: true
  }
}`,...(I=(R=u.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var k,O,G;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Size M / With Content',
  args: {
    size: 'M',
    label: 'Label',
    value: 'Content',
    hint: 'Hint',
    showHint: true
  }
}`,...(G=(O=p.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Size M / Error',
  args: {
    size: 'M',
    label: 'Label',
    hint: 'This field is required',
    showHint: true,
    error: true
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Size M / Disabled',
  args: {
    size: 'M',
    label: 'Label',
    hint: 'Hint',
    showHint: true,
    disabled: true
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
        <Textarea size="L" label="Label" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Default (with content)
        </p>
        <Textarea size="L" label="Label" value="Content" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Error
        </p>
        <Textarea size="L" label="Label" error hint="Hint" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Disabled
        </p>
        <Textarea size="L" label="Label" disabled />
      </div>
    </div>
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,se;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
        <Textarea size="M" label="Label" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Default (with content)
        </p>
        <Textarea size="M" label="Label" value="Content" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Error
        </p>
        <Textarea size="M" label="Label" error hint="Hint" />
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#6e6e81'
      }}>
          Disabled
        </p>
        <Textarea size="M" label="Label" disabled />
      </div>
    </div>
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const We=["DefaultL","WithContentL","ErrorL","DisabledL","DefaultM","WithContentM","ErrorM","DisabledM","AllStatesL","AllStatesM"];export{h as AllStatesL,f as AllStatesM,o as DefaultL,u as DefaultM,c as DisabledL,b as DisabledM,d as ErrorL,m as ErrorM,i as WithContentL,p as WithContentM,We as __namedExportsOrder,$e as default};
