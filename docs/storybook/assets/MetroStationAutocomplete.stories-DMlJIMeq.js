import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-D4hbvkVB.js";import{M as S}from"./MetroStationAutocomplete-C-1bc-1n.js";import"./createSimplePaletteValueFilter-Ccc1faLV.js";import"./Select-C6Ad4C3F.js";import"./mergeSlotProps-DnV3t0J5.js";import"./useSlot-wJBaZNqD.js";import"./Portal-CsH-Yoge.js";import"./index-Cj2LNWL0.js";import"./index-CwJXFEVm.js";import"./Paper-BWRL5p_w.js";import"./Popper-BEPXqgZR.js";const a=[{stationId:1,stationName:"Парк Культуры",stationLineColor:"#FF9500"},{stationId:2,stationName:"Китай-Город",stationLineColor:"#099F49"},{stationId:3,stationName:"Охотный ряд",stationLineColor:"#E42229"},{stationId:4,stationName:"Библиотека Ленина",stationLineColor:"#FF9500"},{stationId:5,stationName:"Арбатская",stationLineColor:"#099F49"}],L={title:"Components/MetroStationAutocomplete",component:S,parameters:{docs:{description:{component:`
Компонент для выбора станций метро с автодополнением и множественным выбором.

**Особенности:**
- Загрузка данных станций при монтировании
- Множественный выбор с чипсами
- Визуализация цвета линии метро
- Кастомизированное отображение в выпадающем списке
        `}}},argTypes:{setSelectedStations:{action:"setSelectedStations",description:"Callback при изменении выбранных станций"},selectedStations:{control:"object",description:"Массив выбранных станций"}}},m=o=>{const[u,g]=x.useState(o.selectedStations||[]);return n.jsx("div",{style:{width:"500px",padding:"20px"},children:n.jsx(S,{...o,selectedStations:u,setSelectedStations:s=>{g(s),o.setSelectedStations(s)}})})},t=m.bind({});t.args={selectedStations:[]};t.storyName="По умолчанию";const e=m.bind({});e.args={selectedStations:[a[0],a[2]]};e.storyName="С выбранными станциями";var i,r,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState(args.selectedStations || []);
  return <div style={{
    width: '500px',
    padding: '20px'
  }}>\r
      <MetroStationAutocomplete {...args} selectedStations={selected} setSelectedStations={newValue => {
      setSelected(newValue);
      args.setSelectedStations(newValue);
    }} />\r
    </div>;
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var d,l,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState(args.selectedStations || []);
  return <div style={{
    width: '500px',
    padding: '20px'
  }}>\r
      <MetroStationAutocomplete {...args} selectedStations={selected} setSelectedStations={newValue => {
      setSelected(newValue);
      args.setSelectedStations(newValue);
    }} />\r
    </div>;
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const V=["Default","WithSelectedStations"];export{t as Default,e as WithSelectedStations,V as __namedExportsOrder,L as default};
