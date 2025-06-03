import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{e as L}from"./iframe-D4hbvkVB.js";import{H as h}from"./HistogramOptions-Dlv181sO.js";import"./Select-C6Ad4C3F.js";import"./createSimplePaletteValueFilter-Ccc1faLV.js";import"./mergeSlotProps-DnV3t0J5.js";import"./useSlot-wJBaZNqD.js";import"./Portal-CsH-Yoge.js";import"./index-Cj2LNWL0.js";import"./index-CwJXFEVm.js";import"./Paper-BWRL5p_w.js";const F={title:"Components/HistogramOptions",component:h,parameters:{docs:{description:{component:`
Компонент выбора параметра для построения гистограммы распределения квартир.

**Функционал:**
- Позволяет выбрать параметр для оси X гистограммы
- Интеграция с Material-UI Select
- Поддержка всех основных параметров квартир
        `}}},argTypes:{histogramAxisX:{control:"select",options:["price","living_area","total_area","kitchen_area","travel_time","number_of_rooms","floor","total_floors"],description:"Текущее выбранное значение оси X"},setHistogramAxisX:{action:"setHistogramAxisX",description:"Функция для изменения значения оси X"}}},e=a=>{const[S,H]=L.useState(a.histogramAxisX);return _.jsx(h,{...a,histogramAxisX:S,setHistogramAxisX:H})},s=e.bind({});s.args={histogramAxisX:"price"};s.storyName="По умолчанию (Цена)";const r=e.bind({});r.args={histogramAxisX:"living_area"};r.storyName="Выбрана жилая площадь";const t=e.bind({});t.args={histogramAxisX:"floor"};t.storyName="Выбран этаж";const o=e.bind({});o.args={histogramAxisX:"travel_time"};o.storyName="Выбрано время до метро";var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [localAxis, setLocalAxis] = React.useState(args.histogramAxisX);
  return <HistogramOptions {...args} histogramAxisX={localAxis} setHistogramAxisX={setLocalAxis} />;
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,l,g;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [localAxis, setLocalAxis] = React.useState(args.histogramAxisX);
  return <HistogramOptions {...args} histogramAxisX={localAxis} setHistogramAxisX={setLocalAxis} />;
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,x,A;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [localAxis, setLocalAxis] = React.useState(args.histogramAxisX);
  return <HistogramOptions {...args} histogramAxisX={localAxis} setHistogramAxisX={setLocalAxis} />;
}`,...(A=(x=t.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var d,u,X;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [localAxis, setLocalAxis] = React.useState(args.histogramAxisX);
  return <HistogramOptions {...args} histogramAxisX={localAxis} setHistogramAxisX={setLocalAxis} />;
}`,...(X=(u=o.parameters)==null?void 0:u.docs)==null?void 0:X.source}}};const k=["Default","LivingAreaSelected","FloorSelected","TravelTimeSelected"];export{s as Default,t as FloorSelected,r as LivingAreaSelected,o as TravelTimeSelected,k as __namedExportsOrder,F as default};
