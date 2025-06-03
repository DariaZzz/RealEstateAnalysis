import{j as P}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./iframe-D4hbvkVB.js";import{F as D}from"./FlatsStatsPanel-DXDSnzRb.js";import"./Select-C6Ad4C3F.js";import"./createSimplePaletteValueFilter-Ccc1faLV.js";import"./mergeSlotProps-DnV3t0J5.js";import"./useSlot-wJBaZNqD.js";import"./Portal-CsH-Yoge.js";import"./index-Cj2LNWL0.js";import"./index-CwJXFEVm.js";import"./Paper-BWRL5p_w.js";import"./HistogramOptions-Dlv181sO.js";import"./FlatsScatter-B-GKaOYX.js";import"./ChartsToolbar-9axDz2a5.js";import"./Typography-BNuN9QES.js";import"./Popper-BEPXqgZR.js";import"./FlatsHistogram-DOE44-RK.js";const i=Array.from({length:100},(n,s)=>({id:`flat_${s+1}`,price:3e6+Math.floor(Math.random()*12e6),living_area:20+Math.floor(Math.random()*80),total_area:25+Math.floor(Math.random()*90),floor:Math.floor(Math.random()*25)+1,total_floors:Math.floor(Math.random()*25)+5,travel_time:Math.floor(Math.random()*30)+5,number_of_rooms:Math.floor(Math.random()*4)+1,metroStation:["Парк Культуры","Китай-Город","Охотный ряд"][Math.floor(Math.random()*3)],stationLineColor:["#FF9500","#099F49","#E42229"][Math.floor(Math.random()*3)],address:`ул. Примерная, ${Math.floor(Math.random()*100)}`,url:`https://cian.ru/flat_${s+1}`})),G={title:"Components/FlatsStatsPanel",component:D,parameters:{docs:{description:{component:`
Панель статистики квартир с возможностью визуализации данных через:
- Точечные диаграммы (Scatter Plot)
- Гистограммы распределения

**Функционал:**
- Отображение общего количества квартир
- Выбор типа графика
- Настройка параметров для осей
- Интерактивное построение графиков
        `}}},argTypes:{filteredFlats:{control:"object",description:"Отфильтрованный список квартир"},paginationData:{control:"object",description:"Данные пагинации (должен содержать total)"}}},e=n=>{const[s,b]=L.useState(n.filteredFlats);return P.jsx(D,{...n,filteredFlats:s})},l={total:124,current_page:1,pages:5},o=e.bind({});o.args={filteredFlats:i.slice(0,50),paginationData:l};const t=e.bind({});t.args={filteredFlats:i.slice(0,5),paginationData:{...l,total:5}};t.storyName="Мало квартир";const a=e.bind({});a.args={filteredFlats:[],paginationData:{...l,total:0}};a.storyName="Нет квартир";const r=e.bind({});r.args={filteredFlats:i,paginationData:{...l,total:325}};r.storyName="Большой набор данных";var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [localFlats, setLocalFlats] = useState(args.filteredFlats);
  return <FlatsStatsPanel {...args} filteredFlats={localFlats} />;
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,F,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [localFlats, setLocalFlats] = useState(args.filteredFlats);
  return <FlatsStatsPanel {...args} filteredFlats={localFlats} />;
}`,...(f=(F=t.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var g,u,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [localFlats, setLocalFlats] = useState(args.filteredFlats);
  return <FlatsStatsPanel {...args} filteredFlats={localFlats} />;
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var M,S,_;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [localFlats, setLocalFlats] = useState(args.filteredFlats);
  return <FlatsStatsPanel {...args} filteredFlats={localFlats} />;
}`,...(_=(S=r.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const H=["Default","FewFlats","NoFlats","LargeDataset"];export{o as Default,t as FewFlats,r as LargeDataset,a as NoFlats,H as __namedExportsOrder,G as default};
