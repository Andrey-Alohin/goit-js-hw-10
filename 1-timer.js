import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as g,i as l}from"./assets/vendor-njWUcVeN.js";let m=null;const s=document.querySelector("[data-start]");function o(t,n){n?t.removeAttribute("disabled"):t.setAttribute("disabled","true")}const e={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),isActive:!1};o(s,!1);const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=new Date,i=new Date(t[0]);if(!e.isActive)n.getTime()>i.getTime()?(l.warning({title:"Caution",message:"Please choose a date in the future",position:"topRight",timeout:2e3}),s.hasAttribute("disabled")||o(s,!1)):(o(s,!0),m=i.getTime());else{l.error({title:"Wait",message:"Please select a new target, then mark the old timer as completed.",position:"topCenter",timeout:4e3}),o(f.input,!1);return}}},f=g("#datetime-picker",y);function w(t){const n=Date.now();return t-n}const a=t=>t.toString().length<2?t.toString().padStart(2,"0"):t;s.addEventListener("click",t=>{if(e.isActive=!0,e.isActive)o(s,!1),o(f.input,!1);else return;const n=new Date(m),i=setInterval(()=>{const r=w(m),{seconds:h,minutes:c,hours:u,days:d}=D(r);r<=0?(clearInterval(i),e.seconds.textContent="00",o(f.input,!0),e.isActive=!1,l.success({title:"Time is up!",message:`It's now ${n}`,position:"center",timeout:2e3})):(e.days.textContent=a(d),e.hours.textContent=a(u),e.minutes.textContent=a(c),e.seconds.textContent=a(h))},1e3)});function D(t){const c=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:d,seconds:p}}
//# sourceMappingURL=1-timer.js.map
