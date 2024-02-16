import{e as r,j as e,r as x,b as E}from"./index-oeGMoITT.js";import{B as N}from"./chunk-UVUR7MCU-vb04iidk.js";import{H as j}from"./chunk-7OLJDQMT-vvWhvLvh.js";var v=r({displayName:"EditIcon",path:e.jsxs("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})}),C=r({displayName:"CloseIcon",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}),y=r({displayName:"DeleteIcon",path:e.jsx("g",{fill:"currentColor",children:e.jsx("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),f=r({viewBox:"0 0 14 14",path:e.jsx("g",{fill:"currentColor",children:e.jsx("polygon",{points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})})});const g=({selectedEventForEdit:o,onUpdateEvent:i,onClose:c})=>{const[s,m]=x.useState(o),[a,h]=x.useState(!0),p=()=>{i(s),h(!1)},n=d=>{m({...s,[d.target.name]:d.target.value})};return e.jsx("div",{className:`edit-modal ${a?"visible":""}`,children:e.jsx("div",{className:"edit-form",children:e.jsxs("form",{onSubmit:d=>d.preventDefault(),children:[e.jsx("button",{type:"button",className:"button-edit",onClick:c,disabled:!a,children:e.jsx(C,{color:"rgb(9, 9, 77)"})}),e.jsxs("label",{className:"label",children:["Nombre:",e.jsx("input",{type:"text",name:"name",value:s.name,onChange:n,disabled:!a,className:"input"})]}),e.jsxs("label",{className:"label",children:["Fecha:",e.jsx("input",{type:"date",name:"date",value:s.date,onChange:n,disabled:!a,className:"input"})]}),e.jsxs("label",{className:"label",children:["Lugar:",e.jsx("input",{type:"text",name:"place",value:s.place,onChange:n,disabled:!a,className:"input"})]}),e.jsxs("label",{className:"label",children:["Asistentes:",e.jsx("input",{type:"text",name:"numberOfPeople",value:s.numberOfPeople,onChange:n,disabled:!a,className:"input"})]}),e.jsx(N,{type:"button",onClick:p,disabled:!a,m:2,borderRadius:"1rem",children:"Guardar"})]})})})},L=g;function z(){const{events:o,dispatch:i}=E(),[c,s]=x.useState(null),m=o.filter(t=>!t.complete),a=o.filter(t=>t.complete),h=t=>{i({type:"DELETE_EVENT",payload:t})},p=t=>{i({type:"COMPLETED_EVENT",payload:t.id})},n=(t,l)=>{i({type:"UPDATE_EVENT",payload:{id:t,updatedData:l}}),s(null)},d=t=>{s(t)};function u(t){return t.map((l,b)=>e.jsxs("tr",{className:"table",children:[e.jsxs("td",{className:"td",children:[e.jsx("p",{className:"title",children:"Nombre "}),l.name]}),e.jsxs("td",{className:"td",children:[e.jsx("p",{className:"title",children:"Fecha "}),l.date]}),e.jsxs("td",{className:"td",children:[e.jsx("p",{className:"title",children:" Lugar "}),l.place]}),e.jsxs("td",{className:"td",children:[e.jsx("p",{className:"title",children:"Asistentes "}),l.numberOfPeople]}),e.jsxs("td",{children:[e.jsx("button",{onClick:()=>p(l),className:"button-1",children:e.jsx(f,{w:8})}),e.jsx("button",{onClick:()=>h(l.id),className:"button-2",children:e.jsx(y,{w:8})}),e.jsx("button",{onClick:()=>d(l),className:"button-3",children:e.jsx(v,{w:8})})]})]},b))}return e.jsxs("div",{children:[e.jsx(j,{children:"Eventos Pendientes"}),e.jsxs("table",{children:[e.jsx("thead",{}),e.jsx("tbody",{className:"tbody-1",children:u(m)})]}),e.jsx(j,{children:"Eventos Realizados"}),e.jsxs("table",{children:[e.jsx("thead",{}),e.jsx("tbody",{className:"tbody-2",children:u(a)})]}),c&&e.jsx(L,{selectedEventForEdit:c,onUpdateEvent:t=>n(c.id,t),onClose:()=>s(null)})]})}export{z as default};
