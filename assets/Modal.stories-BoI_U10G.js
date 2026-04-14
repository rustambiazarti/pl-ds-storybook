import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-BioFo8Zg.js";import{C as x,A as de}from"./icons-UMH4VIvd.js";import"./index-yBjzXJbu.js";const ue="_overlay_evyv9_1",me="_bottomSheet_evyv9_13",ve="_modal_evyv9_34",he="_popup_evyv9_44",ye="_dialog_evyv9_49",fe="_pullIndicator_evyv9_62",ge="_pullGlyph_evyv9_68",xe="_navbar_evyv9_76",_e="_navButton_evyv9_82",be="_navSpacer_evyv9_101",Be="_header_evyv9_106",je="_touchHeader_evyv9_113",we="_titleRow_evyv9_117",ke="_title_evyv9_117",Se="_closeButton_evyv9_132",Te="_subtitle_evyv9_151",Ne="_content_evyv9_160",Ce="_touchContent_evyv9_166",De="_footer_evyv9_171",Pe="_buttonsGroup_evyv9_178",Re="_secondaryButton_evyv9_185",Ie="_primaryButton_evyv9_186",qe="_caption_evyv9_220",t={overlay:ue,bottomSheet:me,modal:ve,popup:he,dialog:ye,pullIndicator:fe,pullGlyph:ge,navbar:xe,navButton:_e,navSpacer:be,header:Be,touchHeader:je,titleRow:we,title:ke,closeButton:Se,subtitle:Te,content:Ne,touchContent:Ce,footer:De,buttonsGroup:Pe,secondaryButton:Re,primaryButton:Ie,caption:qe},Q=({isOpen:y,onClose:a,title:f="Welcome",subtitle:r="Something beautiful is about to happen. Your next goosebumps moment is just one step away.",children:_,variant:b="popup",adaptive:X="desktop",primaryButtonText:B="Button",secondaryButtonText:j="Button",onPrimaryClick:Z,onSecondaryClick:ee,showBackButton:te=!0,showCloseButton:g=!0,showCaption:ae=!1,captionText:w,className:oe})=>{const ne=S.useCallback(n=>{n.target===n.currentTarget&&(a==null||a())},[a]);if(S.useEffect(()=>{if(!y)return;const n=pe=>{pe.key==="Escape"&&(a==null||a())};return document.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",n),document.body.style.overflow=""}},[y,a]),!y)return null;const o=X==="touch",k=b==="dialog",s=b==="popup",re=o&&s,se=[t.overlay,o?t.bottomSheet:"",oe].filter(Boolean).join(" "),ie=[t.modal,k?t.dialog:"",s&&!o?t.popup:"",re?t.bottomSheet:""].filter(Boolean).join(" "),le=()=>o?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:t.pullIndicator,children:e.jsx("div",{className:t.pullGlyph})}),e.jsxs("div",{className:`${t.header} ${t.touchHeader}`,children:[e.jsxs("div",{className:t.titleRow,children:[e.jsx("div",{className:t.title,children:f}),g&&e.jsx("button",{className:t.closeButton,onClick:a,"aria-label":"Close",children:e.jsx(x,{size:24})})]}),r&&e.jsx("div",{className:t.subtitle,children:r})]})]}):e.jsxs(e.Fragment,{children:[s&&e.jsxs("div",{className:t.navbar,children:[te&&e.jsx("button",{className:t.navButton,"aria-label":"Back",children:e.jsx(de,{size:24})}),e.jsx("div",{className:t.navSpacer}),g&&e.jsx("button",{className:t.navButton,onClick:a,"aria-label":"Close",children:e.jsx(x,{size:24})})]}),e.jsxs("div",{className:t.header,children:[k?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:t.pullIndicator,children:e.jsx("div",{className:t.pullGlyph})}),e.jsxs("div",{className:t.titleRow,children:[e.jsx("div",{className:t.title,children:f}),g&&e.jsx("button",{className:t.closeButton,onClick:a,"aria-label":"Close",children:e.jsx(x,{size:24})})]})]}):e.jsx("div",{className:t.title,children:f}),r&&e.jsx("div",{className:t.subtitle,children:r})]})]}),ce=()=>e.jsxs("div",{className:t.footer,children:[e.jsxs("div",{className:t.buttonsGroup,children:[j&&e.jsx("button",{className:t.secondaryButton,onClick:ee,children:j}),B&&e.jsx("button",{className:t.primaryButton,onClick:Z,children:B})]}),ae&&w&&e.jsx("div",{className:t.caption,children:w})]});return e.jsx("div",{className:se,onClick:ne,children:e.jsxs("div",{className:ie,role:"dialog","aria-modal":"true",children:[le(),s&&_&&e.jsx("div",{className:`${t.content} ${o?t.touchContent:""}`,children:_}),ce()]})})};Q.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Welcome'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Something beautiful is about to happen. Your next goosebumps moment is just one step away.'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'popup' | 'dialog'",elements:[{name:"literal",value:"'popup'"},{name:"literal",value:"'dialog'"}]},description:"",defaultValue:{value:"'popup'",computed:!1}},adaptive:{required:!1,tsType:{name:"union",raw:"'desktop' | 'touch'",elements:[{name:"literal",value:"'desktop'"},{name:"literal",value:"'touch'"}]},description:"",defaultValue:{value:"'desktop'",computed:!1}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSecondaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showBackButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showCaption:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},captionText:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ge={title:"Design System/Modal",component:Q,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{variant:{control:"radio",options:["popup","dialog"]},adaptive:{control:"radio",options:["desktop","touch"]}},args:{isOpen:!0,title:"Welcome",subtitle:"Something beautiful is about to happen. Your next goosebumps moment is just one step away.",primaryButtonText:"Button",secondaryButtonText:"Button"}},h=()=>e.jsxs("div",{style:{background:"#f6ecfe",border:"1px dashed #7e05e8",borderRadius:12,padding:"54px 0",textAlign:"center",color:"#7e05e8",fontWeight:600,fontSize:14},children:["Swap instance to place",e.jsx("br",{}),"your content here"]}),i={args:{variant:"popup",adaptive:"desktop",children:e.jsx(h,{})}},l={args:{variant:"dialog",adaptive:"desktop"}},c={name:"Desktop Popup (No Back Button)",args:{variant:"popup",adaptive:"desktop",showBackButton:!1,children:e.jsx(h,{})}},p={args:{variant:"popup",adaptive:"touch",children:e.jsx(h,{})},parameters:{viewport:{defaultViewport:"mobile1"}}},d={args:{variant:"dialog",adaptive:"touch"},parameters:{viewport:{defaultViewport:"mobile1"}}},u={name:"Touch BottomSheet with Caption",args:{variant:"popup",adaptive:"touch",showCaption:!0,captionText:e.jsxs(e.Fragment,{children:["By signing up to create an account I accept Platinumlist's"," ",e.jsx("a",{href:"#",style:{color:"#1a56ff",textDecoration:"none"},children:"Terms of Use"})," ","and"," ",e.jsx("a",{href:"#",style:{color:"#1a56ff",textDecoration:"none"},children:"Privacy policy"})]}),children:e.jsx(h,{})},parameters:{viewport:{defaultViewport:"mobile1"}}},m={name:"Popup with Form Content",args:{variant:"popup",adaptive:"desktop",title:"Sign In",subtitle:"Enter your credentials to continue.",primaryButtonText:"Sign In",secondaryButtonText:"Cancel",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx("input",{type:"email",placeholder:"Email",style:{padding:"14px 16px",borderRadius:12,border:"1px solid #9999ac",fontSize:16,fontFamily:"Inter, sans-serif",outline:"none"}}),e.jsx("input",{type:"password",placeholder:"Password",style:{padding:"14px 16px",borderRadius:12,border:"1px solid #9999ac",fontSize:16,fontFamily:"Inter, sans-serif",outline:"none"}})]})}},v={name:"Dialog without Subtitle",args:{variant:"dialog",adaptive:"desktop",subtitle:"",title:"Are you sure?",primaryButtonText:"Confirm",secondaryButtonText:"Cancel"}};var T,N,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'popup',
    adaptive: 'desktop',
    children: <PlaceholderContent />
  }
}`,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var D,P,R;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'dialog',
    adaptive: 'desktop'
  }
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var I,q,V;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Desktop Popup (No Back Button)',
  args: {
    variant: 'popup',
    adaptive: 'desktop',
    showBackButton: false,
    children: <PlaceholderContent />
  }
}`,...(V=(q=c.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var F,E,z;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'popup',
    adaptive: 'touch',
    children: <PlaceholderContent />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(z=(E=p.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var G,W,A;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'dialog',
    adaptive: 'touch'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var H,$,L;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Touch BottomSheet with Caption',
  args: {
    variant: 'popup',
    adaptive: 'touch',
    showCaption: true,
    captionText: <>
        By signing up to create an account I accept Platinumlist&apos;s{' '}
        <a href="#" style={{
        color: '#1a56ff',
        textDecoration: 'none'
      }}>
          Terms of Use
        </a>{' '}
        and{' '}
        <a href="#" style={{
        color: '#1a56ff',
        textDecoration: 'none'
      }}>
          Privacy policy
        </a>
      </>,
    children: <PlaceholderContent />
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(L=($=u.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var M,Y,O;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Popup with Form Content',
  args: {
    variant: 'popup',
    adaptive: 'desktop',
    title: 'Sign In',
    subtitle: 'Enter your credentials to continue.',
    primaryButtonText: 'Sign In',
    secondaryButtonText: 'Cancel',
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <input type="email" placeholder="Email" style={{
        padding: '14px 16px',
        borderRadius: 12,
        border: '1px solid #9999ac',
        fontSize: 16,
        fontFamily: 'Inter, sans-serif',
        outline: 'none'
      }} />
        <input type="password" placeholder="Password" style={{
        padding: '14px 16px',
        borderRadius: 12,
        border: '1px solid #9999ac',
        fontSize: 16,
        fontFamily: 'Inter, sans-serif',
        outline: 'none'
      }} />
      </div>
  }
}`,...(O=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var U,J,K;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Dialog without Subtitle',
  args: {
    variant: 'dialog',
    adaptive: 'desktop',
    subtitle: '',
    title: 'Are you sure?',
    primaryButtonText: 'Confirm',
    secondaryButtonText: 'Cancel'
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const We=["DesktopPopup","DesktopDialog","DesktopPopupNoBack","TouchBottomSheet","TouchDialog","TouchBottomSheetWithCaption","WithFormContent","DialogNoSubtitle"];export{l as DesktopDialog,i as DesktopPopup,c as DesktopPopupNoBack,v as DialogNoSubtitle,p as TouchBottomSheet,u as TouchBottomSheetWithCaption,d as TouchDialog,m as WithFormContent,We as __namedExportsOrder,Ge as default};
