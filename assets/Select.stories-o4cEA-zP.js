import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as t}from"./index-BioFo8Zg.js";import{a as ie}from"./icons-UMH4VIvd.js";import"./index-yBjzXJbu.js";const ce="_wrapper_jy9o7_1",de="_trigger_jy9o7_9",ue="_disabled_jy9o7_22",pe="_triggerOpen_jy9o7_27",me="_error_jy9o7_32",be="_sizeL_jy9o7_47",ye="_sizeM_jy9o7_55",ge="_label_jy9o7_64",_e="_labelFloated_jy9o7_77",ve="_labelResting_jy9o7_91",he="_value_jy9o7_98",fe="_hasLabel_jy9o7_108",je="_placeholder_jy9o7_112",Se="_chevron_jy9o7_117",ze="_chevronOpen_jy9o7_129",Le="_dropdown_jy9o7_134",Oe="_option_jy9o7_162",xe="_optionSelected_jy9o7_184",Ce="_optionDisabled_jy9o7_189",we="_hint_jy9o7_196",e={wrapper:ce,trigger:de,disabled:ue,triggerOpen:pe,error:me,sizeL:be,sizeM:ye,label:ge,labelFloated:_e,labelResting:ve,value:he,hasLabel:fe,placeholder:je,chevron:Se,chevronOpen:ze,dropdown:Le,option:Oe,optionSelected:xe,optionDisabled:Ce,hint:we},z=({options:r,value:o,onChange:i,label:c,placeholder:ee="Select...",size:ae="L",disabled:d=!1,error:L=!1,hint:O,className:se})=>{const[l,f]=t.useState(!1),j=t.useRef(null),x=r.find(a=>a.value===o),S=!!x,re=t.useCallback(()=>{d||f(a=>!a)},[d]),ne=t.useCallback(a=>{i==null||i(a),f(!1)},[i]);t.useEffect(()=>{const a=le=>{j.current&&!j.current.contains(le.target)&&f(!1)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const te=[e.trigger,ae==="L"?e.sizeL:e.sizeM,c?e.hasLabel:"",l?e.triggerOpen:"",L?e.error:"",d?e.disabled:"",se].filter(Boolean).join(" "),oe=[e.label,S||l?e.labelFloated:e.labelResting].join(" ");return s.jsxs("div",{className:e.wrapper,ref:j,children:[s.jsxs("button",{className:te,onClick:re,disabled:d,type:"button","aria-expanded":l,"aria-haspopup":"listbox",children:[c&&s.jsx("span",{className:oe,children:c}),s.jsx("span",{className:`${e.value} ${S?"":e.placeholder}`,children:S?x.label:c?"":ee}),s.jsx("span",{className:`${e.chevron} ${l?e.chevronOpen:""}`,children:s.jsx(ie,{size:16})})]}),l&&s.jsx("div",{className:e.dropdown,role:"listbox",children:r.map(a=>s.jsx("button",{className:[e.option,a.value===o?e.optionSelected:"",a.disabled?e.optionDisabled:""].filter(Boolean).join(" "),onClick:()=>!a.disabled&&ne(a.value),role:"option","aria-selected":a.value===o,disabled:a.disabled,children:a.label},a.value))}),O&&s.jsx("div",{className:e.hint,style:{color:L?"var(--accent-alert)":"var(--content-secondary)",fontSize:12,lineHeight:"18px"},children:O})]})};z.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select...'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'L' | 'M'",elements:[{name:"literal",value:"'L'"},{name:"literal",value:"'M'"}]},description:"",defaultValue:{value:"'L'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hint:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ne={title:"Design System/Select",component:z,tags:["autodocs"],parameters:{layout:"centered"},decorators:[r=>s.jsx("div",{style:{width:325},children:s.jsx(r,{})})],argTypes:{size:{control:"radio",options:["L","M"]}}},n=[{value:"uae",label:"United Arab Emirates"},{value:"usa",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"}],u={args:{options:n,label:"Country",size:"L"}},p={args:{options:n,label:"Country",value:"uae",size:"L"}},m={name:"Size M",args:{options:n,label:"Country",size:"M"}},b={args:{options:n,placeholder:"Choose a country...",size:"L"}},y={args:{options:n,label:"Country",error:!0,hint:"Please select a country",size:"L"}},g={args:{options:n,label:"Country",value:"uae",disabled:!0,size:"L"}},_={name:"With Disabled Options",args:{options:[{value:"uae",label:"United Arab Emirates"},{value:"usa",label:"United States"},{value:"uk",label:"United Kingdom",disabled:!0},{value:"de",label:"Germany"},{value:"fr",label:"France",disabled:!0}],label:"Country",size:"L"}},v={args:{options:n,label:"Country",hint:"Select your country of residence",size:"L"}},De=()=>{const[r,o]=t.useState("");return s.jsx(z,{options:n,label:"Country",value:r,onChange:o,size:"L",hint:r?`Selected: ${r}`:"Select a country"})},h={render:()=>s.jsx(De,{})};var C,w,D;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Country',
    size: 'L'
  }
}`,...(D=(w=u.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var T,M,E;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Country',
    value: 'uae',
    size: 'L'
  }
}`,...(E=(M=p.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var q,N,W;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Size M',
  args: {
    options: sampleOptions,
    label: 'Country',
    size: 'M'
  }
}`,...(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var U,k,V;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    placeholder: 'Choose a country...',
    size: 'L'
  }
}`,...(V=(k=b.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var F,I,R;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Country',
    error: true,
    hint: 'Please select a country',
    size: 'L'
  }
}`,...(R=(I=y.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var $,A,P;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Country',
    value: 'uae',
    disabled: true,
    size: 'L'
  }
}`,...(P=(A=g.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var G,H,K;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'With Disabled Options',
  args: {
    options: [{
      value: 'uae',
      label: 'United Arab Emirates'
    }, {
      value: 'usa',
      label: 'United States'
    }, {
      value: 'uk',
      label: 'United Kingdom',
      disabled: true
    }, {
      value: 'de',
      label: 'Germany'
    }, {
      value: 'fr',
      label: 'France',
      disabled: true
    }],
    label: 'Country',
    size: 'L'
  }
}`,...(K=(H=_.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var B,J,Q;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    options: sampleOptions,
    label: 'Country',
    hint: 'Select your country of residence',
    size: 'L'
  }
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <InteractiveTemplate />
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const We=["Default","WithValue","SizeM","WithPlaceholder","Error","Disabled","WithDisabledOptions","WithHint","Interactive"];export{u as Default,g as Disabled,y as Error,h as Interactive,m as SizeM,_ as WithDisabledOptions,v as WithHint,b as WithPlaceholder,p as WithValue,We as __namedExportsOrder,Ne as default};
