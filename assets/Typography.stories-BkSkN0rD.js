import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const V="_text_1u47a_7",O="_langRu_1u47a_15",$="_langAr_1u47a_16",J="_langEl_1u47a_21",M="_accent_1u47a_24",n={text:V,langRu:O,langAr:$,langEl:J,accent:M,"title-4xl":"_title-4xl_1u47a_38","title-3xl":"_title-3xl_1u47a_45","title-2xl":"_title-2xl_1u47a_52","title-xl":"_title-xl_1u47a_59","title-lg":"_title-lg_1u47a_66","title-base":"_title-base_1u47a_78","title-sm":"_title-sm_1u47a_85","body-short-lg":"_body-short-lg_1u47a_96","body-short-base":"_body-short-base_1u47a_103","body-short-sm":"_body-short-sm_1u47a_110","body-short-sm-strong":"_body-short-sm-strong_1u47a_117","body-short-caption":"_body-short-caption_1u47a_124","body-short-caption-strong":"_body-short-caption-strong_1u47a_131","body-long-lg":"_body-long-lg_1u47a_142","body-long-base":"_body-long-base_1u47a_149","body-long-sm":"_body-long-sm_1u47a_156","body-long-caption":"_body-long-caption_1u47a_163"},X={en:"",ru:n.langRu,ar:n.langAr,el:n.langEl},K={primary:"var(--content-primary)",secondary:"var(--content-secondary)",highlight:"var(--content-highlight)",inverse:"var(--content-pure-inverse)"};function Q(t){return t.startsWith("title-4xl")||t.startsWith("title-3xl")?"h1":t.startsWith("title-2xl")||t.startsWith("title-xl")?"h2":t.startsWith("title-lg")?"h3":t.startsWith("title-base")?"h4":t.startsWith("title-sm")?"h5":"p"}const a=({variant:t="body-short-base",lang:i="en",accent:r=!1,as:x,color:l,children:s,className:U,style:F})=>{const G=x||Q(t),I=[n.text,n[t],X[i],r?n.accent:"",U??""].filter(Boolean).join(" "),f={...F,...l?{color:K[l]}:{}};return e.jsx(G,{className:I,style:Object.keys(f).length?f:void 0,dir:i==="ar"?"rtl":void 0,children:s})};a.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'title-4xl'
| 'title-3xl'
| 'title-2xl'
| 'title-xl'
| 'title-lg'
| 'title-base'
| 'title-sm'
/* Body Short */
| 'body-short-lg'
| 'body-short-base'
| 'body-short-sm'
| 'body-short-sm-strong'
| 'body-short-caption'
| 'body-short-caption-strong'
/* Body Long */
| 'body-long-lg'
| 'body-long-base'
| 'body-long-sm'
| 'body-long-caption'`,elements:[{name:"literal",value:"'title-4xl'"},{name:"literal",value:"'title-3xl'"},{name:"literal",value:"'title-2xl'"},{name:"literal",value:"'title-xl'"},{name:"literal",value:"'title-lg'"},{name:"literal",value:"'title-base'"},{name:"literal",value:"'title-sm'"},{name:"literal",value:"'body-short-lg'"},{name:"literal",value:"'body-short-base'"},{name:"literal",value:"'body-short-sm'"},{name:"literal",value:"'body-short-sm-strong'"},{name:"literal",value:"'body-short-caption'"},{name:"literal",value:"'body-short-caption-strong'"},{name:"literal",value:"'body-long-lg'"},{name:"literal",value:"'body-long-base'"},{name:"literal",value:"'body-long-sm'"},{name:"literal",value:"'body-long-caption'"}]},description:"Typography variant",defaultValue:{value:"'body-short-base'",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'en' | 'ar' | 'ru' | 'el'",elements:[{name:"literal",value:"'en'"},{name:"literal",value:"'ar'"},{name:"literal",value:"'ru'"},{name:"literal",value:"'el'"}]},description:"Language — determines font family",defaultValue:{value:"'en'",computed:!1}},accent:{required:!1,tsType:{name:"boolean"},description:"Use accent font (for title variants)",defaultValue:{value:"false",computed:!1}},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"HTML element to render"},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'highlight' | 'inverse'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'highlight'"},{name:"literal",value:"'inverse'"}]},description:"Text color override"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const ae={title:"Design System/Typography",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["title-4xl","title-3xl","title-2xl","title-xl","title-lg","title-base","title-sm","body-short-lg","body-short-base","body-short-sm","body-short-sm-strong","body-short-caption","body-short-caption-strong","body-long-lg","body-long-base","body-long-sm","body-long-caption"]},lang:{control:"select",options:["en","ar","ru","el"]},accent:{control:"boolean"},color:{control:"select",options:["primary","secondary","highlight","inverse"]}}},o={en:{"title-4xl":"Title 4xlarge","title-4xl-accent":"Title 4xlarge ACCENT","title-3xl":"Title 3xlarge","title-3xl-accent":"Title 3xlarge ACCENT","title-2xl":"Title 2xlarge","title-2xl-accent":"Title 2xlarge Accent","title-xl":"Title xlarge","title-xl-accent":"Title xlarge Accent","title-lg-accent":"Title large Accent","title-lg":"Title large","title-base":"Title base","title-sm":"Title small","body-short-lg":"Body large","body-short-base":"Body base","body-short-sm":"Body small","body-short-sm-strong":"Body small strong","body-short-caption":"Body caption","body-short-caption-strong":"Body caption strong","body-long-lg":"Body large","body-long-base":"Body base","body-long-sm":"Body small","body-long-caption":"Body caption"},ru:{"title-4xl":"Заголовок 4х","title-4xl-accent":"Заголовок 4х Акцент","title-3xl":"Заголовок 3х","title-3xl-accent":"Заголовок 3х Акцент","title-2xl":"Заголовок 2х","title-2xl-accent":"Заголовок 2х акцент","title-xl":"Заголовок экстра большой","title-xl-accent":"Заголовок экстра большой Акцент","title-lg":"Заголовок большой","title-base":"Заголовок базовый","title-sm":"Заголовок маленький","body-short-lg":"Текст большой","body-short-base":"Текст базовый","body-short-sm":"Текст маленький","body-short-sm-strong":"Текст маленький Жирный","body-short-caption":"Комментарий","body-short-caption-strong":"Комментарий жирный","body-long-lg":"Текст большой","body-long-base":"Текст базовый","body-long-sm":"Текст маленький","body-long-caption":"Комментарий"},ar:{"title-4xl":"العنوان 4x كبير","title-4xl-accent":"العنوان 4x كبير المميز","title-3xl":"العنوان 3x كبير","title-3xl-accent":"العنوان 3x كبير المميز","title-2xl":"العنوان 2x كبير","title-2xl-accent":"العنوان 2x كبير المميز","title-xl":"العنوان x كبير","title-xl-accent":"العنوان x كبير المميز","title-lg-accent":"العنوان كبير المميز","title-lg":"العنوان الكبير","title-base":"العنوان الأساسي","title-sm":"العنوان الصغير","body-short-lg":"جسم كبير","body-short-base":"جسم أساسي","body-short-sm":"جسم صغير","body-short-sm-strong":"النص صغير","body-short-caption":"جسم شرح","body-short-caption-strong":"جسم شرح قوي","body-long-lg":"جسم أساسي","body-long-base":"جسم أساسي","body-long-sm":"جسم صغير","body-long-caption":"جسم شرح"},el:{"title-4xl":"Τίτλος τεράστιος","title-4xl-accent":"Τίτλος τεράστιος τόνος","title-3xl":"Τίτλος πολύ μεγάλος","title-3xl-accent":"Τίτλος πολύ μεγάλος τόνος","title-2xl":"Τίτλος διπλά μεγάλος","title-2xl-accent":"Τίτλος διπλά μεγάλος τόνος","title-xl":"Τίτλος μεγαλύτερος","title-xl-accent":"Τίτλος μεγαλύτερος τόνος","title-lg-accent":"Τίτλος μεγάλος τόνος","title-lg":"Τίτλος μεγάλος","title-base":"Τίτλος βασικός","title-sm":"Τίτλος μικρός","body-short-lg":"Κείμενο μεγάλο","body-short-base":"Κείμενο βασικό","body-short-sm":"Κείμενο μικρό","body-short-sm-strong":"Κείμενο μικρό έντονο","body-short-caption":"Κείμενο λεζάντα","body-short-caption-strong":"Κείμενο λεζάντα έντονο","body-long-lg":"Κείμενο μεγάλο","body-long-base":"Κείμενο βασικό","body-long-sm":"Κείμενο μικρό","body-long-caption":"Κείμενο λεζάντα"}},Y=[{variant:"title-4xl",label:"Title 4xlarge",weight:"Bold",size:"56",lineHeight:"60"},{variant:"title-4xl",accent:!0,label:"Title 4xlarge Accent",weight:"Bold",size:"56",lineHeight:"60"},{variant:"title-3xl",label:"Title 3xlarge",weight:"Bold",size:"48",lineHeight:"52"},{variant:"title-3xl",accent:!0,label:"Title 3xlarge Accent",weight:"Bold",size:"48",lineHeight:"52"},{variant:"title-2xl",label:"Title 2xlarge",weight:"Bold",size:"40",lineHeight:"44"},{variant:"title-2xl",accent:!0,label:"Title 2xlarge Accent",weight:"Bold",size:"40",lineHeight:"44"},{variant:"title-xl",label:"Title xlarge",weight:"Bold",size:"32",lineHeight:"40"},{variant:"title-xl",accent:!0,label:"Title xlarge Accent",weight:"Bold",size:"32",lineHeight:"40"},{variant:"title-lg",accent:!0,label:"Title large Accent",weight:"Bold",size:"24",lineHeight:"32"},{variant:"title-lg",label:"Title large",weight:"Semibold",size:"24",lineHeight:"32"},{variant:"title-base",label:"Title base",weight:"Semibold",size:"20",lineHeight:"24"},{variant:"title-sm",label:"Title small",weight:"Semibold",size:"16",lineHeight:"20"}],Z=[{variant:"body-short-lg",label:"Body large",weight:"Regular",size:"20",lineHeight:"24"},{variant:"body-short-base",label:"Body base",weight:"Regular",size:"16",lineHeight:"20"},{variant:"body-short-sm",label:"Body small",weight:"Regular",size:"14",lineHeight:"18"},{variant:"body-short-sm-strong",label:"Body small strong",weight:"Semibold",size:"14",lineHeight:"18"},{variant:"body-short-caption",label:"Body caption",weight:"Regular",size:"12",lineHeight:"14"},{variant:"body-short-caption-strong",label:"Body caption strong",weight:"Semibold",size:"12",lineHeight:"14"}],ee=[{variant:"body-long-lg",label:"Body large",weight:"Regular",size:"20",lineHeight:"28"},{variant:"body-long-base",label:"Body base",weight:"Regular",size:"16",lineHeight:"24"},{variant:"body-long-sm",label:"Body small",weight:"Regular",size:"14",lineHeight:"20"},{variant:"body-long-caption",label:"Body caption",weight:"Regular",size:"12",lineHeight:"18"}],P={fontFamily:"var(--font-family-default)",fontSize:16,color:"#232630",fontWeight:600},u={...P,width:99},d={...P,color:"#6f7478"},v=({title:t,specs:i,lang:r})=>{const x=l=>{const s=l.accent?`${l.variant}-accent`:l.variant;return o[r][s]||o[r][l.variant]||l.label};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:56,alignItems:"center"},children:[e.jsx("span",{style:{...d,flex:"1 0 0",minWidth:300},children:t}),e.jsx("span",{style:{...d,width:99},children:"Weight"}),e.jsx("span",{style:{...d,width:62},children:"Size"}),e.jsx("span",{style:{...d,width:105},children:"Line height"})]}),e.jsx("div",{style:{height:.5,background:"#ecedf2"}})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:i.map((l,s)=>e.jsxs("div",{style:{display:"flex",gap:56,alignItems:"center"},children:[e.jsx("div",{style:{flex:"1 0 0",minWidth:300},children:e.jsx(a,{variant:l.variant,lang:r,accent:l.accent,as:"span",children:x(l)})}),e.jsx("span",{style:u,children:l.weight}),e.jsx("span",{style:{...u,width:62},children:l.size}),e.jsx("span",{style:{...u,width:89},children:l.lineHeight})]},s))})]})},m=({lang:t,label:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:120,padding:"40px 0",maxWidth:964},children:[e.jsxs("h2",{style:{fontFamily:"var(--font-family-default)",fontSize:24,fontWeight:600,color:"#0f0f15",margin:0},children:["Typography styles for WEB (",i,")"]}),e.jsx(v,{title:`Title ${i}`,specs:Y,lang:t}),e.jsx(v,{title:"Body Short",specs:Z,lang:t}),e.jsx(v,{title:"Body Long",specs:ee,lang:t})]}),g={args:{variant:"title-lg",children:"Typography",lang:"en"}},c={name:"English (EN)",render:()=>e.jsx(m,{lang:"en",label:"EN"})},y={name:"Russian (RU)",render:()=>e.jsx(m,{lang:"ru",label:"RU"})},h={name:"Arabic (AR)",render:()=>e.jsx(m,{lang:"ar",label:"AR"})},p={name:"Greek (EL)",render:()=>e.jsx(m,{lang:"el",label:"EL"})},b={name:"All Languages",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:80},children:["en","ru","ar","el"].map(t=>e.jsxs("div",{children:[e.jsx("h2",{style:{fontFamily:"var(--font-family-default)",fontSize:20,fontWeight:600,color:"#6e6e81",marginBottom:24,borderBottom:"1px solid #ecedf2",paddingBottom:12},children:t.toUpperCase()}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{variant:"title-2xl",lang:t,children:o[t]["title-2xl"]}),e.jsx(a,{variant:"title-2xl",lang:t,accent:!0,children:o[t]["title-2xl-accent"]}),e.jsx(a,{variant:"title-lg",lang:t,children:o[t]["title-lg"]}),e.jsx(a,{variant:"body-short-base",lang:t,children:o[t]["body-short-base"]}),e.jsx(a,{variant:"body-short-sm",lang:t,children:o[t]["body-short-sm"]}),e.jsx(a,{variant:"body-short-caption",lang:t,children:o[t]["body-short-caption"]})]})]},t))})};var T,_,B;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'title-lg',
    children: 'Typography',
    lang: 'en'
  }
}`,...(B=(_=g.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var j,w,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'English (EN)',
  render: () => <TypographyPage lang="en" label="EN" />
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var R,z,A;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Russian (RU)',
  render: () => <TypographyPage lang="ru" label="RU" />
}`,...(A=(z=y.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var H,E,W;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Arabic (AR)',
  render: () => <TypographyPage lang="ar" label="AR" />
}`,...(W=(E=h.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var L,C,D;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Greek (EL)',
  render: () => <TypographyPage lang="el" label="EL" />
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var N,k,q;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'All Languages',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 80
  }}>
      {(['en', 'ru', 'ar', 'el'] as TypographyLang[]).map(lang => <div key={lang}>
          <h2 style={{
        fontFamily: 'var(--font-family-default)',
        fontSize: 20,
        fontWeight: 600,
        color: '#6e6e81',
        marginBottom: 24,
        borderBottom: '1px solid #ecedf2',
        paddingBottom: 12
      }}>
            {lang.toUpperCase()}
          </h2>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
            <Typography variant="title-2xl" lang={lang}>
              {sampleText[lang]['title-2xl']}
            </Typography>
            <Typography variant="title-2xl" lang={lang} accent>
              {sampleText[lang]['title-2xl-accent']}
            </Typography>
            <Typography variant="title-lg" lang={lang}>
              {sampleText[lang]['title-lg']}
            </Typography>
            <Typography variant="body-short-base" lang={lang}>
              {sampleText[lang]['body-short-base']}
            </Typography>
            <Typography variant="body-short-sm" lang={lang}>
              {sampleText[lang]['body-short-sm']}
            </Typography>
            <Typography variant="body-short-caption" lang={lang}>
              {sampleText[lang]['body-short-caption']}
            </Typography>
          </div>
        </div>)}
    </div>
}`,...(q=(k=b.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const oe=["Default","English","Russian","Arabic","Greek","AllLanguages"];export{b as AllLanguages,h as Arabic,g as Default,c as English,p as Greek,y as Russian,oe as __namedExportsOrder,ae as default};
