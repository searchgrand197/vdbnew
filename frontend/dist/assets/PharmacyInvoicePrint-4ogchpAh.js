import{a as e,n as t,t as n}from"./jsx-runtime-DWSWI4JT.js";import{n as r}from"./reactHotToast-DsHds9yY.js";import{t as i}from"./api-BERd3Mbl.js";import{_ as a,g as o,h as s,l as c,u as l,v as u}from"./dateTimeFormat-BiClRaTG.js";function d(e,t){let n=()=>o(t?.in,NaN),r=t?.additionalDigits??2,i=g(e),a;if(i.date){let e=_(i.date,r);a=v(e.restDateString,e.year)}if(!a||isNaN(+a))return n();let c=+a,l=0,u;if(i.time&&(l=b(i.time),isNaN(l)))return n();if(i.timezone){if(u=S(i.timezone),isNaN(u))return n()}else{let e=new Date(c+l),n=s(0,t?.in);return n.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),n.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),n}return s(c+l+u,t?.in)}var f={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},p=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,m=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,h=/^([+-])(\d{2})(?::?(\d{2}))?$/;function g(e){let t={},n=e.split(f.dateTimeDelimiter),r;if(n.length>2)return t;if(/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],f.timeZoneDelimiter.test(t.date)&&(t.date=e.split(f.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length))),r){let e=f.timezone.exec(r);e?(t.time=r.replace(e[1],``),t.timezone=e[1]):t.time=r}return t}function _(e,t){let n=RegExp(`^(?:(\\d{4}|[+-]\\d{`+(4+t)+`})|(\\d{2}|[+-]\\d{`+(2+t)+`})$)`),r=e.match(n);if(!r)return{year:NaN,restDateString:``};let i=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:a===null?i:a*100,restDateString:e.slice((r[1]||r[2]).length)}}function v(e,t){if(t===null)return new Date(NaN);let n=e.match(p);if(!n)return new Date(NaN);let r=!!n[4],i=y(n[1]),a=y(n[2])-1,o=y(n[3]),s=y(n[4]),c=y(n[5])-1;if(r)return te(t,s,c)?C(t,s,c):new Date(NaN);{let e=new Date(0);return!E(t,a,o)||!ee(t,i)?new Date(NaN):(e.setUTCFullYear(t,a,Math.max(i,o)),e)}}function y(e){return e?parseInt(e):1}function b(e){let t=e.match(m);if(!t)return NaN;let n=x(t[1]),r=x(t[2]),i=x(t[3]);return D(n,r,i)?n*a+r*u+i*1e3:NaN}function x(e){return e&&parseFloat(e.replace(`,`,`.`))||0}function S(e){if(e===`Z`)return 0;let t=e.match(h);if(!t)return 0;let n=t[1]===`+`?-1:1,r=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return ne(r,i)?n*(r*a+i*u):NaN}function C(e,t,n){let r=new Date(0);r.setUTCFullYear(e,0,4);let i=r.getUTCDay()||7,a=(t-1)*7+n+1-i;return r.setUTCDate(r.getUTCDate()+a),r}var w=[31,null,31,30,31,30,31,31,30,31,30,31];function T(e){return e%400==0||e%4==0&&e%100!=0}function E(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(w[t]||(T(e)?29:28))}function ee(e,t){return t>=1&&t<=(T(e)?366:365)}function te(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}function D(e,t,n){return e===24?t===0&&n===0:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}function ne(e,t){return t>=0&&t<=59}function re(e){if(!e)return{status:`ok`,days:null};let t=new Date(e);if(Number.isNaN(t.getTime()))return{status:`ok`,days:null};let n=new Date;n.setHours(0,0,0,0),t.setHours(0,0,0,0);let r=Math.round((t.getTime()-n.getTime())/864e5);return r<0?{status:`expired`,days:r}:r<=60?{status:`expiring`,days:r}:{status:`ok`,days:r}}function ie(e){return e===`expired`?`bg-rose-100 text-rose-800 border-rose-200`:e===`expiring`?`bg-amber-100 text-amber-900 border-amber-200`:``}function O(e){let t=String(e??``).trim();if(!t)return 0;let n=t.replace(/[^\d.]/g,``);if(!n||n===`.`)return 0;let r=Number(n);return Number.isFinite(r)&&r>=0?r:0}function ae(e){let t=String(e??``).replace(/\s/g,``);if(!t)return{sold:0,free:0};let n=t.indexOf(`+`);if(n<0)return{sold:O(t),free:0};let r=t.slice(0,n),i=t.slice(n+1);return{sold:O(r),free:O(i)}}function oe(e){return String(e??``).replace(/\s/g,``).replace(/[^0-9.+]/g,``).replace(/(\+.*)\+/g,`$1`)}function k(e,t,n){let r=Math.max(1,Number(n)||1),i=ae(e),a=ae(t);return{qty:i.sold*r+a.sold,freeQty:i.free*r+a.free}}function A(e){let t=Math.round((Number(e)||0)*100)/100;return t%1,String(t)}function j(e,t){let n=Math.max(0,Number(e)||0),r=Math.max(0,Number(t)||0);return r<=0?A(n):`${A(n)}+${A(r)}`}function M(e){let t=`${String(e?.form||``).toLowerCase()} ${String(e?.unit_name||e?.unit?.name||``).toLowerCase()}`.trim();if(!t||/\btab|tablet|tabl/.test(t))return`tab`;if(/\bcap|capsule/.test(t))return`cap`;if(/\bml\b|syrup|susp|liquid|drops?/.test(t))return`ml`;if(/\binj|vial|amp/.test(t))return`inj`;if(/\bpcs|piece|unit\b/.test(t))return`pcs`;let n=t.replace(/[^a-z]/g,``);return n.length>=3?n.slice(0,3):(n+`tab`).slice(0,3)}function se(e=`strip`){let t=String(e||`strip`).trim().toLowerCase();return!t||t===`strip`||t===`str`?`str`:t.length<=3?t:t.slice(0,3)}function ce(e,t,n=`tab`,r=`strip`){let i=Math.max(1,Number(t)||1),a=Math.max(0,Number(e)||0),o=(n||`tab`).toLowerCase(),s=se(r);if(i<=1)return a%1==0?String(a):String(Number(a.toFixed(2)));let c=Math.floor(a/i),l=a%i;return c<=0&&l<=0?`0 ${o}`:c>0&&l>0?`${c} ${s}-${l%1==0?l:Number(l.toFixed(2))} ${o}`:c>0?`${c} ${s}`:`${l%1==0?l:Number(l.toFixed(2))} ${o}`}function le(e,t,n,r=`tab`,i=`strip`){let a=Math.max(1,Number(n)||1),o=Math.max(0,Number(e)||0),s=Math.max(0,Number(t)||0);if(a<=1)return j(o,s);let c=(r||`tab`).toLowerCase(),l=o>0?ce(o,a,r,i):``,u=s>0?ce(s,a,r,i):``;return l&&u?`${l}+${u}`:u?`+${u}`:l||`0 ${c}`}function N({mode:e=`base_units`,packs:t=null,loose:n=null,qty:r=0,freeQty:i=0,packSize:a=1,baseSuffix:o=`tab`,packLabel:s=`strip`}){let c=e===`pack_and_loose`?`pack_and_loose`:`base_units`,l,u;if(t!=null||n!=null){let e=k(t??``,n??``,a);l=e.qty,u=e.freeQty}else l=Number(r)||0,u=Number(i)||0;return c===`base_units`?j(l,u):le(l,u,a,o,s)}function P(e){return e?.medicine&&typeof e.medicine==`object`?e.medicine:e?.medicine_print||null}function F(e){let t=Number(e?.strip_size_for_print);if(Number.isFinite(t)&&t>0)return t;let n=Number(e?.pack_size);if(Number.isFinite(n)&&n>0)return n;let r=P(e),i=Number(r?.unit_conversions?.strip)||Number(r?.unit_conversions?.STRIP)||Number(e?.unit_conversions?.strip)||Number(e?.unit_conversions?.STRIP);if(Number.isFinite(i)&&i>0)return i;let a=String(r?.pack_info||e?.pack_info||e?.pack||``).match(/x\s*(\d+(?:\.\d+)?)/i);if(a){let e=Number(a[1]);if(Number.isFinite(e)&&e>0)return e}return 1}function ue(e){let t=F(e);if(e?.packs_display!=null||e?.loose_display!=null){let n=Math.max(1,t),r=k(e.packs_display,e.loose_display,n);return{sold:r.qty,free:r.freeQty,packSize:n}}return{sold:Number(e?.qty)||0,free:Number(e?.free_qty)||0,packSize:Math.max(1,t)}}function de(e,t=`base_units`){let n=Array.isArray(e)?e:[],r=0,i=0,a=new Set,o=null;for(let e of n){let t=ue(e);t.sold<=0&&t.free<=0||(r+=t.sold,i+=t.free,a.add(t.packSize),o||=e)}if(t!==`pack_and_loose`)return j(r,i);if(a.size===1){let e=[...a][0];if(e>1){let t=M(P(o)||o);return le(r,i,e,t,`strip`)}}return j(r,i)}function fe(e){return!e||typeof e!=`object`?``:String(e.name??``).trim()}function pe(e){if(!e||typeof e!=`object`)return``;let t=String(e.name_on_bill??``).trim(),n=fe(e);return!t||t.toLowerCase()===n.toLowerCase()?``:t}function me(e){return pe(e)||fe(e)}function he(e,t=``){let n=String(e??``).replace(/[^\d.]/g,``);return n===``?`0`:(n.length>1&&n.startsWith(`0`)&&n[1]!==`.`&&(n=n.replace(/^0+/,``)||`0`),String(t??``).trim()===`0`&&n.length===2&&n.startsWith(`0`)&&/\d/.test(n[1])&&(n=n[1]),n)}function ge(e){if(!e||typeof e!=`object`)return null;let t=e.business_name!=null&&e.b2c&&e.b2b?e:e.data??e.entity;return!t||typeof t!=`object`||!t.b2c||!t.b2b?null:t}function _e(){return{address:``,mobile:``,gst_number:``,dl_number:``,email:``,website:``,invoice_prefix:`INV`,invoice_next_number:`1`,default_gst_percent:`5`,default_sale_discount_percent:`0`,default_sale_gst_enabled:!1,sale_bill_qty_display:`base_units`,low_stock_threshold:`10`,bank_name:``,bank_branch:``,bank_account_no:``,bank_ifsc:``,invoice_terms:``,signature_url:``}}function ve(e,{includeB2cOnly:t=!1}={}){let n=_e();if(!e||typeof e!=`object`)return n;let r={...n,address:e.address||``,mobile:e.mobile||``,gst_number:e.gst_number||``,dl_number:e.dl_number||``,email:e.email||``,website:e.website||``,invoice_prefix:String(e.invoice_prefix||`INV`),invoice_next_number:e.invoice_next_number!=null&&e.invoice_next_number!==``?String(e.invoice_next_number):`1`,default_gst_percent:e.default_gst_percent!=null&&e.default_gst_percent!==``?String(e.default_gst_percent):`5`,default_sale_gst_enabled:!!e.default_sale_gst_enabled,sale_bill_qty_display:e.sale_bill_qty_display===`pack_and_loose`?`pack_and_loose`:`base_units`,bank_name:e.bank_name||``,bank_branch:e.bank_branch||``,bank_account_no:e.bank_account_no||``,bank_ifsc:e.bank_ifsc||``,invoice_terms:e.invoice_terms||``,signature_url:e.signature_url||``};return t&&(r.default_sale_discount_percent=e.default_sale_discount_percent!=null&&e.default_sale_discount_percent!==``?String(e.default_sale_discount_percent):`0`,r.low_stock_threshold=e.low_stock_threshold==null?`10`:String(e.low_stock_threshold)),r}function ye(e){let t=ge(e)||e;return{business_name:t?.business_name||``,b2b_enabled:!!t?.b2b_enabled,b2c:ve(t?.b2c,{includeB2cOnly:!0}),b2b:ve(t?.b2b)}}function be(e,t=`b2c`){if(!e||typeof e!=`object`)return{};let n=t===`b2b`?`b2b`:`b2c`,r=e[n]&&typeof e[n]==`object`?e[n]:e;return{business_name:e.business_name||r.business_name||``,b2b_enabled:e.b2b_enabled,address:r.address||``,mobile:r.mobile||``,gst_number:r.gst_number||``,dl_number:r.dl_number||``,email:r.email||``,website:r.website||``,invoice_prefix:r.invoice_prefix||`INV`,invoice_next_number:r.invoice_next_number??1,default_gst_percent:r.default_gst_percent??`5`,default_sale_discount_percent:r.default_sale_discount_percent??`0`,default_sale_gst_enabled:!!r.default_sale_gst_enabled,sale_bill_qty_display:r.sale_bill_qty_display||`base_units`,low_stock_threshold:r.low_stock_threshold??10,bank_name:r.bank_name||``,bank_branch:r.bank_branch||``,bank_account_no:r.bank_account_no||``,bank_ifsc:r.bank_ifsc||``,invoice_terms:r.invoice_terms||``,signature_url:r.signature_url||``}}function xe(e){return e&&(e.party||e.party_id||e.party_details)?`b2b`:`b2c`}function Se(e,{includeB2cOnly:t=!1}={}){let n={address:e.address,mobile:e.mobile,gst_number:e.gst_number,dl_number:e.dl_number,email:e.email,website:e.website,invoice_prefix:String(e.invoice_prefix||`INV`).trim()||`INV`,invoice_next_number:Math.max(1,Number(e.invoice_next_number||1)||1),default_gst_percent:e.default_gst_percent,default_sale_gst_enabled:!!e.default_sale_gst_enabled,sale_bill_qty_display:e.sale_bill_qty_display||`base_units`,bank_name:e.bank_name,bank_branch:e.bank_branch,bank_account_no:e.bank_account_no,bank_ifsc:e.bank_ifsc,invoice_terms:e.invoice_terms};return t&&(n.default_sale_discount_percent=e.default_sale_discount_percent,n.low_stock_threshold=Math.max(0,Number(e.low_stock_threshold||0)||0)),n}var I=e(t(),1),L=n(),R=`pharm-invoice-editable`,z=`pharm-invoice-print-shell`,B=`pharm-invoice-print-root`,V=`pharm-invoice-header`,H=`pharm-invoice-footer`,U=`1px solid #000`,Ce={maxWidth:`210mm`,width:`100%`,margin:`0 auto`,border:U,boxSizing:`border-box`,overflow:`hidden`,fontFamily:`Arial, sans-serif`,fontSize:`10px`,color:`#000`,background:`#fff`},we={width:`100%`,boxSizing:`border-box`},W=`
  .${z} {
    box-sizing: border-box !important;
    width: 100% !important;
    max-width: 210mm !important;
    margin: 0 auto !important;
    border: ${U} !important;
    overflow: hidden !important;
    background: #fff !important;
  }
  .${B} {
    width: 100% !important;
    box-sizing: border-box !important;
    border: none !important;
  }
  .${B} > table {
    width: 100% !important;
    max-width: 100% !important;
    table-layout: fixed !important;
    border-collapse: separate !important;
    border-spacing: 0 !important;
    border-top: ${U} !important;
    border-bottom: ${U} !important;
    border-left: ${U} !important;
    border-right: ${U} !important;
  }
  .${B} table th,
  .${B} table td {
    border: ${U} !important;
    box-sizing: border-box !important;
  }
  .${B} table tr th:first-child,
  .${B} table tr td:first-child {
    border-left: ${U} !important;
  }
  .${B} table tr th:last-child,
  .${B} table tr td:last-child {
    border-right: ${U} !important;
  }
  .${B} table thead tr th {
    border-top: ${U} !important;
  }
  .${B} table tfoot tr td {
    border-bottom: ${U} !important;
  }
  .${B} table tbody tr { border-bottom: none !important; }
  .pharm-inv-cell-wrap {
    white-space: normal !important;
    word-break: break-word !important;
    overflow-wrap: anywhere !important;
    line-height: 1.25 !important;
    vertical-align: top !important;
  }
  .pharm-inv-cell-qty {
    white-space: normal !important;
    word-break: break-word !important;
    overflow-wrap: anywhere !important;
    line-height: 1.2 !important;
    vertical-align: top !important;
    font-size: 8px !important;
  }
  .pharm-inv-cell-amount {
    white-space: normal !important;
    word-break: break-word !important;
    overflow-wrap: anywhere !important;
    line-height: 1.25 !important;
    vertical-align: top !important;
  }
  .${V} {
    border-left: ${U} !important;
    border-right: ${U} !important;
    box-sizing: border-box !important;
  }
  .${V} > div:not(:last-child),
  .${H} > div:not(:last-child) { border-right: ${U} !important; }
  .${H} {
    border-left: ${U} !important;
    border-right: ${U} !important;
    box-sizing: border-box !important;
  }
  .${H} .pharm-invoice-totals > div { border-bottom: ${U} !important; }
`,Te=`
  .${R} { outline: none; border-radius: 2px; cursor: text; min-height: 1em; }
  .${R}:focus { background: rgba(37, 99, 235, 0.05); box-shadow: inset 0 0 0 1px rgba(37, 99, 235, 0.18); }
  td.${R}:focus { background: rgba(37, 99, 235, 0.04); }
  ${W}
`;function G(e){e.key===`Enter`&&e.preventDefault()}function K(e){e.preventDefault();let t=((e.clipboardData||window.clipboardData)?.getData(`text/plain`)||``).replace(/\r?\n/g,` `);t&&document.execCommand(`insertText`,!1,t)}function q(e){let t=e.inputType;if(!e.data&&t!==`insertFromPaste`||t!==`insertText`&&t!==`insertCompositionText`&&t!==`insertFromPaste`&&t!==`insertReplacementText`)return;let n=window.getSelection();if(!n?.rangeCount||!n.isCollapsed)return;let r=n.anchorNode;if(!r||(r.nodeType===Node.TEXT_NODE&&(r=r.parentElement),!r?.closest)||!r.closest(`.${R}`))return;let i=window.getComputedStyle(r),a=parseInt(i.fontWeight,10);if(i.fontWeight===`bold`||Number.isFinite(a)&&a>=600)try{document.execCommand(`bold`,!1,null)}catch{}if(i.fontStyle===`italic`)try{document.execCommand(`italic`,!1,null)}catch{}}function J({style:e,children:t,multiline:n=!1,as:r=`div`,...i}){return(0,L.jsx)(r,{contentEditable:!0,suppressContentEditableWarning:!0,className:R,style:e,onKeyDown:n?void 0:G,onPaste:K,onBeforeInput:q,...i,children:t})}function Y(e,t){if(!e)return`--/--`;try{let n=new Date(e);return isNaN(n.getTime())?`--/--`:l(n,c(t))}catch{return`--/--`}}function X(e){return e?.medicine&&typeof e.medicine==`object`?e.medicine:e?.medicine_print||null}function Ee(e){let t=Number(e?.strip_size_for_print);if(Number.isFinite(t)&&t>0)return t;let n=Number(e?.pack_size);if(Number.isFinite(n)&&n>0)return n;let r=X(e),i=Number(r?.unit_conversions?.strip)||Number(r?.unit_conversions?.STRIP)||Number(e?.unit_conversions?.strip)||Number(e?.unit_conversions?.STRIP);if(Number.isFinite(i)&&i>0)return i;let a=String(X(e)?.pack_info||e?.pack_info||e?.pack||``).match(/x\s*(\d+(?:\.\d+)?)/i);if(a){let e=Number(a[1]);if(Number.isFinite(e)&&e>0)return e}return 1}function De(e,t=0){let n=Number(e?.mrp??e?.batch?.mrp??t);return Number.isFinite(n)?n:0}function Oe(e){let t=De(e,Number(e?.rate??0)),n=Number(e?.rate??0);if(!(t>0))return 0;let r=(t-n)/t*100;return Number.isFinite(r)?Math.min(100,Math.max(0,Math.round(r*100)/100)):0}function ke(e,t=`base_units`){let n=Number(e?.pack_size)||Ee(e),r=M(X(e)||e),i={mode:t===`pack_and_loose`?`pack_and_loose`:`base_units`,packSize:n,baseSuffix:r};if(e?.packs_display!=null||e?.loose_display!=null)return N({...i,packs:e.packs_display,loose:e.loose_display});let a=Number(e?.free_qty||0),o=Number(e?.qty||0);return N(o<=0&&a>0?{...i,packs:`0`,loose:String(a)}:{...i,qty:o,freeQty:a})}function Ae(e){return String(e?.medicine_name??``).trim()||me(e?.medicine)||`—`}function je(e){if(!e||e?.party||e.ipd_admission)return!1;let t=String(e.billing_doctor_name||``).trim(),n=String(e.billing_hospital_name||``).trim();return!!(t||n)}function Me(e){if(!e||e?.party)return[];let t=e.patient_details;if(!t||typeof t!=`object`)return[];let n=[],r=ze(t);r&&n.push({key:`name`,label:`Patient Name`,value:r}),n.push({key:`age`,label:`Age`,value:Re(t)||`\xA0`}),n.push({key:`gender`,label:`Gender`,value:Le(t)||`\xA0`});let i=String(t.phone||``).trim();i&&n.push({key:`phone`,label:`Patient Phone`,value:i});let a=Be(t);a&&a!==`—`&&n.push({key:`address`,label:`Patient Address`,value:a});let o=!!t._walkInBilling,s=String(t.uhid||``).trim();if(!o&&s&&n.push({key:`uhid`,label:`UHID No.`,value:s}),je(e)){let t=String(e.billing_doctor_name||``).trim(),r=String(e.billing_hospital_name||``).trim();n.push({key:`doc`,label:`Doctor Name`,value:t||`\xA0`}),n.push({key:`hosp`,label:`Hospital Name`,value:r||`\xA0`})}return n}function Ne(e){return Me(e).map(({label:e,value:t})=>`<div><strong>${Q(e)} :</strong> ${Q(t)}</div>`).join(``)}function Pe(e){let t=Me(e);return t.length?(0,L.jsx)(L.Fragment,{children:t.map(({key:e,label:t,value:n})=>(0,L.jsxs)(J,{children:[(0,L.jsxs)(`strong`,{children:[t,` :`]}),` `,n]},e))}):null}function Fe(e,t=`base_units`){return de(e,t)}function Z(e){return`Rs ${Number(e||0).toFixed(2)}`}function Q(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Ie(e){let t=String(e||``);if(!t.trim())return``;let n=t.toLowerCase().indexOf(`notes/advice:`);return n<0?``:t.slice(n+13).trim()}function Le(e){let t=String(e?.gender||``).trim().toLowerCase();return t===`male`?`Male`:t===`female`?`Female`:t===`other`?`Other`:``}function Re(e){if(!e||typeof e!=`object`)return``;let t=String(e.age_unit||`years`).trim().toLowerCase(),n=t===`month`||t===`months`?`Months`:t===`day`||t===`days`?`Days`:`Years`,r=e.age_value!=null&&e.age_value!==``?e.age_value:e.age;if(r==null||r===``)return``;let i=Number(r);return Number.isFinite(i)?`${i} ${n}`:``}function ze(e){return!e||typeof e!=`object`?``:[e.first_name,e.middle_name,e.last_name].filter(e=>e!=null&&String(e).trim()!==``).map(e=>String(e).trim()).join(` `).trim()}function Be(e){return!e||typeof e!=`object`?`—`:String(e.address??``).trim()||[String(e.address_line1??``).trim(),[String(e.city??``).trim(),String(e.state??``).trim()].filter(Boolean).join(`, `)].filter(Boolean).join(`, `).trim()||`—`}function $(e){if(!e||typeof e!=`object`)return null;let t=e.party_details;return t&&typeof t==`object`?t:e.party&&typeof e.party==`object`?e.party:null}function Ve(e){let t=$(e)?.name;if(t!=null&&String(t).trim()!==``)return String(t).trim();let n=e?.party_name;if(n!=null&&String(n).trim()!==``)return String(n).trim();let r=e?.party_name_snapshot;return r!=null&&String(r).trim()!==``?String(r).trim():`—`}function He(e){let t=$(e)?.address;return t!=null&&String(t).trim()!==``?String(t).trim():`—`}function Ue(e){let t=$(e)?.phone;return t!=null&&String(t).trim()!==``?String(t).trim():`—`}function We(e){let t=$(e)?.gst_number;return t!=null&&String(t).trim()!==``?String(t).trim():`—`}function Ge(e){let t=$(e)?.dl_number;return t!=null&&String(t).trim()!==``?String(t).trim():`—`}var Ke=[`Please consult the Doctor before using medicine.`,`Medicine without batch and expiry date will not be taken back.`,`All disputes subject to local Jurisdiction only.`];function qe(e){let t=String(e?.invoice_terms||``).trim();return t?t.split(/\r?\n/).map(e=>e.trim()).filter(Boolean):Ke}function Je(e){return qe(e).map(e=>`<div>${Q(e)}</div>`).join(``)}function Ye(e){let t=e||{},n=[[`Bank Name`,t.bank_name],[`Branch Name`,t.bank_branch],[`Account No`,t.bank_account_no],[`IFSC Code`,t.bank_ifsc]].filter(([,e])=>e!=null&&String(e).trim()!==``);return n.length?n.map(([e,t])=>`<div><strong>${Q(e)} :</strong> ${Q(String(t).trim())}</div>`).join(``):`<div style="color:#888">—</div>`}function Xe(e){return e?/^https?:\/\//i.test(e)?e:typeof window<`u`&&window.location?.origin?`${window.location.origin}${e.startsWith(`/`)?e:`/${e}`}`:e:``}function Ze(e,t){let n=Xe(e?.signature_url||``);return n?`<div style="min-height:52px;display:flex;align-items:center;justify-content:center;margin:8px 0">
      <img src="${Q(n)}" alt="Signature" style="max-height:52px;max-width:140px;object-fit:contain" />
    </div>`:`<div style="min-height:52px;margin:8px 0">&nbsp;</div>`}function Qe(e,t=0){let n=De(e,t),r=Number(e?.qty||0);return n>0&&r>0?Math.round(n*r*100)/100:n}function $e(e){let t=Number(e?.qty||0),n=Number(e?.rate||0);return t>0?Math.round(n*t*100)/100:n}function et(e){let t=e||{};return[[`Bank Name`,t.bank_name],[`Branch Name`,t.bank_branch],[`Account No`,t.bank_account_no],[`IFSC Code`,t.bank_ifsc]].filter(([,e])=>e!=null&&String(e).trim()!==``)}function tt({outlet:e,title:t,notesAdvice:n,showGst:r,subtotal:i,totalDiscount:a,totalDiscountPercent:o,cgst:s,sgst:c,roundOff:l,paidAmount:u,dueAmount:d,grandTotal:f}){let p=qe(e),m=et(e),h=Xe(e?.signature_url||``);return(0,L.jsxs)(`div`,{className:H,style:{display:`flex`,borderBottom:U,alignItems:`stretch`,borderLeft:U,borderRight:U,boxSizing:`border-box`},children:[(0,L.jsxs)(`div`,{style:{flex:1,padding:`8px 10px`,borderRight:U,fontSize:`8px`,minWidth:0},children:[(0,L.jsx)(`div`,{style:{fontWeight:`bold`,marginBottom:`4px`,textDecoration:`underline`},children:`Terms & Conditions`}),(0,L.jsx)(`div`,{style:{lineHeight:1.6},children:p.map((e,t)=>(0,L.jsx)(J,{style:{fontSize:`8px`},children:e},t))}),(0,L.jsx)(`div`,{style:{marginTop:`8px`},children:n?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`strong`,{children:`Notes/Advice :`}),(0,L.jsx)(J,{multiline:!0,style:{marginTop:`3px`,lineHeight:1.4,whiteSpace:`pre-wrap`,fontSize:`8px`},children:n})]}):(0,L.jsxs)(J,{style:{fontSize:`8px`},children:[(0,L.jsx)(`strong`,{children:`Remark :`}),` ___________________________`]})})]}),(0,L.jsxs)(`div`,{style:{flex:1,padding:`8px 10px`,borderRight:U,fontSize:`8px`,minWidth:0},children:[(0,L.jsx)(`div`,{style:{fontWeight:`bold`,marginBottom:`4px`,textDecoration:`underline`},children:`BANK DETAILS :-`}),(0,L.jsx)(`div`,{style:{lineHeight:1.6},children:m.length?m.map(([e,t])=>(0,L.jsxs)(J,{style:{fontSize:`8px`},children:[(0,L.jsxs)(`strong`,{children:[e,` :`]}),` `,String(t).trim()]},e)):(0,L.jsx)(`div`,{style:{color:`#888`},children:`—`})})]}),(0,L.jsxs)(`div`,{style:{flex:1,padding:`8px 10px`,borderRight:U,textAlign:`center`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,minHeight:`100px`},children:[(0,L.jsxs)(J,{style:{fontSize:`8px`,marginBottom:`4px`},children:[`For `,t]}),h?(0,L.jsx)(`div`,{style:{minHeight:`52px`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`8px 0`},children:(0,L.jsx)(`img`,{src:h,alt:`Signature`,style:{maxHeight:`52px`,maxWidth:`140px`,objectFit:`contain`}})}):(0,L.jsx)(`div`,{style:{minHeight:`52px`,margin:`8px 0`},children:`\xA0`}),(0,L.jsx)(`div`,{style:{borderTop:U,paddingTop:`4px`,fontSize:`8px`,marginTop:`auto`},children:`Authorised Signatory`})]}),(0,L.jsxs)(`div`,{className:`pharm-invoice-totals`,style:{width:`160px`,flexShrink:0,fontSize:`9px`,borderLeft:U},children:[(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,padding:`4px 8px`,borderBottom:U},children:[(0,L.jsx)(`span`,{children:`SUB TOTAL`}),(0,L.jsx)(`span`,{style:{fontWeight:`bold`},children:Z(i)})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,padding:`4px 8px`,borderBottom:U},children:[(0,L.jsxs)(`span`,{children:[`ADD. DIS (`,o.toFixed(2),`%)`]}),(0,L.jsx)(`span`,{children:Z(a)})]}),r?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,padding:`4px 8px`,borderBottom:U},children:[(0,L.jsx)(`span`,{children:`CGST`}),(0,L.jsx)(`span`,{children:Z(s)})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,padding:`4px 8px`,borderBottom:U},children:[(0,L.jsx)(`span`,{children:`SGST`}),(0,L.jsx)(`span`,{children:Z(c)})]})]}):null,l?(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,padding:`4px 8px`,borderBottom:U},children:[(0,L.jsx)(`span`,{children:`ROUND OFF`}),(0,L.jsxs)(`span`,{children:[l>0?`+`:`-`,Z(Math.abs(l))]})]}):null,(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,padding:`4px 8px`,borderBottom:U},children:[(0,L.jsx)(`span`,{children:`PAID`}),(0,L.jsx)(`span`,{children:Z(u)})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,padding:`4px 8px`,borderBottom:U},children:[(0,L.jsx)(`span`,{children:`DUE`}),(0,L.jsx)(`span`,{children:Z(d)})]}),(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,padding:`6px 8px`,background:`#000`,color:`#fff`,fontWeight:`bold`,fontSize:`10px`},children:[(0,L.jsx)(`span`,{children:`GRAND TOTAL`}),(0,L.jsx)(`span`,{children:Z(f)})]}),(0,L.jsx)(`div`,{style:{padding:`4px 8px`,fontSize:`8px`,textAlign:`center`,fontStyle:`italic`},children:`Computer Generated Invoice`})]})]})}function nt(e){if(!e||typeof e!=`object`)return`—`;let t=e.doctor_details?.name;if(t!=null&&String(t).trim()!==``)return String(t).trim();let n=e.referred_by;return typeof n==`object`&&n&&n.name!=null&&String(n.name).trim()!==``?String(n.name).trim():typeof n==`string`&&n.trim()!==``&&!/^[0-9a-f-]{36}$/i.test(n.trim())?n.trim():`—`}function rt(e){return e?11:9}var it=[`4%`,`20%`,`6%`,`5%`,`7%`,`5%`,`8%`,`5%`,`7%`,`16%`,`17%`],at=[`4%`,`15%`,`5%`,`5%`,`6%`,`5%`,`7%`,`4%`,`6%`,`4%`,`4%`,`16%`,`19%`];function ot(e){return`<colgroup>${(e?at:it).map(e=>`<col style="width:${e}" />`).join(``)}</colgroup>`}function st({showGst:e}){return(0,L.jsx)(`colgroup`,{children:(e?at:it).map((e,t)=>(0,L.jsx)(`col`,{style:{width:e}},t))})}var ct={whiteSpace:`normal`,wordBreak:`break-word`,overflowWrap:`anywhere`,lineHeight:1.25,verticalAlign:`top`},lt={...ct,lineHeight:1.2,fontSize:`8px`,textAlign:`center`},ut={...ct,textAlign:`right`,fontWeight:`bold`};function dt(e){return new Promise(t=>{let n=document.createElement(`iframe`);n.style.cssText=`position:fixed;left:-9999px;top:-9999px;width:210mm;height:297mm;border:none;`,document.body.appendChild(n);let r=n.contentDocument||n.contentWindow.document;r.open(),r.write(e),r.close();let i=n.contentWindow,a=()=>{try{document.body.removeChild(n)}catch{}t()};i.addEventListener(`afterprint`,a);let o=()=>{try{i.focus(),i.print()}catch{}setTimeout(()=>a(),8e3)};r.readyState===`complete`?setTimeout(o,80):n.onload=()=>setTimeout(o,80)})}function ft({invoice:e,outlet:t}){let n=e.gst_enabled!==!1,r=Number(e.subtotal||0),i=Number(e.cgst||0),a=Number(e.sgst||0),o=i+a,s=Number(e.grand_total||0),c=Math.round((Number(e.round_off)||0)*100)/100,l=n?r+o:r,u=Math.max(0,Math.round((l-s+c)*100)/100),d=l>0?Math.max(0,Math.round(u/l*100*100)/100):0,f=Number(e.paid_amount||0),p=Math.max(0,Number(e.due_amount??s-f)),m=e.items||[],h=t||{},g=h.sale_bill_qty_display===`pack_and_loose`?`pack_and_loose`:`base_units`,_=(h.business_name||`Pharmacy`).toUpperCase(),v=Je(h),y=Ye(h),b=Ze(h,_),x=(h.address||``).split(/\n/).map(e=>e.trim()).filter(Boolean),S=n?13:11,C=n?`<th style="border:1px solid #000;padding:4px 2px;text-align:center">SGST%</th>
       <th style="border:1px solid #000;padding:4px 2px;text-align:center">CGST%</th>`:``,w=m.map((e,t)=>{let r=Number(e.qty||0),i=Qe(e,Number(e.rate||0)),a=$e(e),o=Oe(e),s=r>0?a:0,c=n?Number(e.sgst_rate??0):0,l=n?Number(e.cgst_rate??0):0,u=n?`<td style="border:1px solid #000;padding:3px;text-align:center">${c.toFixed(2)}</td>
           <td style="border:1px solid #000;padding:3px;text-align:center">${l.toFixed(2)}</td>`:``;return`<tr>
        <td style="border:1px solid #000;padding:3px;text-align:center">${t+1}</td>
        <td class="pharm-inv-cell-wrap" style="border:1px solid #000;padding:3px;font-weight:bold">${Q(Ae(e))}</td>
        <td style="border:1px solid #000;padding:3px;text-align:center">${X(e)?.pack_info||e.pack_info||`—`}</td>
        <td style="border:1px solid #000;padding:3px;text-align:center;font-size:8px">${e.medicine?.hsn_code||e.hsn_code||`—`}</td>
        <td style="border:1px solid #000;padding:3px;text-align:center;font-size:8px">${e.batch?.batch_no??e.batch_no??`—`}</td>
        <td style="border:1px solid #000;padding:3px;text-align:center;font-size:8px">${Y(e.batch?.expiry_date||e.expiry_date,`MM/yy`)}</td>
        <td style="border:1px solid #000;padding:3px;text-align:right">${Z(i)}</td>
        <td style="border:1px solid #000;padding:3px;text-align:center">${o.toFixed(2)}</td>
        <td style="border:1px solid #000;padding:3px;text-align:right">${Z(a)}</td>
        ${u}
        <td class="pharm-inv-cell-qty" style="border:1px solid #000;padding:3px;text-align:center">${Q(ke(e,g))}</td>
        <td class="pharm-inv-cell-amount" style="border:1px solid #000;padding:3px;text-align:right;font-weight:bold">${Z(s)}</td>
      </tr>`}).join(``),T=Fe(m,g),E=Math.max(0,8-m.length),ee=E>0?Array.from({length:E}).map(()=>`<tr style="height:18px">${Array.from({length:S}).map(()=>`<td style="border:1px solid #000;padding:3px">&nbsp;</td>`).join(``)}</tr>`).join(``):``,te=n?`Taxable ${Z(r)} &middot; CGST ${Z(i)} &middot; SGST ${Z(a)} &middot; GST ${Z(o)}`:`Subtotal ${Z(r)} &middot; Non-GST bill (no tax)`,D=rt(n),ne=n?`<div style="display:flex;justify-content:space-between;padding:4px 8px;border-bottom:1px solid #000">
         <span>CGST</span><span>${Z(i)}</span>
       </div>
       <div style="display:flex;justify-content:space-between;padding:4px 8px;border-bottom:1px solid #000">
         <span>SGST</span><span>${Z(a)}</span>
       </div>`:``,re=n?`${h.gst_number?`<div>GSTIN : ${h.gst_number}</div>`:``}${h.dl_number?`<div>D.L.NO. : ${h.dl_number}</div>`:``}`:`${h.dl_number?`<div>D.L.NO. : ${h.dl_number}</div>`:``}`,ie=!!e?.party,O=e.patient_details,ae=Ve(e),oe=He(e),k=Ue(e),A=We(e),j=Ge(e);Q(ze(O)||`—`),Q(Be(O));let M=Q(ae),se=Q(oe),ce=Q(k),le=Q(A),N=Q(j);Q(nt(e));let P=Y(e.created_at||new Date,`dd/MM/yyyy HH:mm`),F=Ie(e.remarks),ue=F?Q(F).replace(/\n/g,`<br/>`):``;return`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Invoice ${e.invoice_no||``}</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; color-adjust:exact !important; }
    html, body { width:100%; background:#fff; color:#000; font-family:Arial,sans-serif; font-size:10px; }
    @page { size:A4; margin:8mm; }
    ${W}
    @media print {
      html, body { background:#fff !important; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; color-adjust:exact !important; }
      ${W}
    }
  </style>
</head>
<body>
  <div class="${z}" style="max-width:210mm;width:100%;margin:0 auto;border:1px solid #000;box-sizing:border-box;overflow:hidden;background:#fff">
  <div class="${B}" style="width:100%;box-sizing:border-box">

    <div class="${V}" style="display:flex;border-bottom:1px solid #000;border-left:1px solid #000;border-right:1px solid #000;box-sizing:border-box">
      <div style="flex:1;padding:8px 10px;border-right:1px solid #000">
        <div style="font-size:14px;font-weight:bold">${_}</div>
        ${n?`<div style="font-size:8px;font-style:italic;margin-bottom:4px">GST Invoice</div>`:``}
        <div style="font-size:8px;line-height:1.5">
          ${x.length>0?x.map(e=>`<div>${e}</div>`).join(``):`<div>&mdash;</div>`}
          ${h.mobile?`<div>Phone: ${h.mobile}</div>`:``}
          ${h.email?`<div>E-Mail: ${h.email}</div>`:``}
          ${h.website?`<div>Web: ${h.website}</div>`:``}
        </div>
        <div style="font-size:8px;margin-top:4px;line-height:1.5">${re}</div>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;border-right:1px solid #000;padding:8px">
        <div style="font-size:16px;font-weight:bold;text-align:center">${n?`GST INVOICE`:`INVOICE`}</div>
      </div>
      <div style="flex:1.2;padding:8px 10px;font-size:9px;line-height:1.8">
        ${ie?`<div><strong>Party Name :</strong> ${M}</div>
               <div><strong>Party Address :</strong> ${se}</div>
               <div><strong>Party Phone :</strong> ${ce}</div>
               <div><strong>Party D.L.No. :</strong> ${N}</div>
               <div><strong>Party GSTIN :</strong> ${le}</div>`:Ne(e)}
        <div style="display:flex;justify-content:space-between;margin-top:4px;border-top:1px solid #000;padding-top:4px">
          <span><strong>Invoice No. : ${e.invoice_no||``}</strong></span>
          <span><strong>Date: ${P}</strong></span>
        </div>
      </div>
    </div>

    <table style="width:100%;border-collapse:separate;border-spacing:0;font-size:9px;table-layout:fixed;border-top:1px solid #000;border-bottom:1px solid #000;border-left:1px solid #000;border-right:1px solid #000">
      ${ot(n)}
      <thead>
        <tr style="background:#f0f0f0;border-bottom:1px solid #000;border-top:1px solid #000">
          <th style="border:1px solid #000;padding:4px 2px;text-align:center">SN.</th>
          <th style="border:1px solid #000;padding:4px 2px;text-align:left">PRODUCT NAME</th>
          <th style="border:1px solid #000;padding:4px 2px;text-align:center">PACK</th>
          <th style="border:1px solid #000;padding:4px 2px;text-align:center">HSN</th>
          <th style="border:1px solid #000;padding:4px 2px;text-align:center">BATCH</th>
          <th style="border:1px solid #000;padding:4px 2px;text-align:center">EXP.</th>
          <th style="border:1px solid #000;padding:4px 2px;text-align:right">MRP</th>
          <th style="border:1px solid #000;padding:4px 2px;text-align:center">DISC%</th>
          <th style="border:1px solid #000;padding:4px 2px;text-align:right">RATE</th>
          ${C}
          <th style="border:1px solid #000;padding:4px 2px;text-align:center">QTY</th>
          <th style="border:1px solid #000;padding:4px 2px;text-align:right">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        ${w}
        ${ee}
      </tbody>
      <tfoot>
        <tr style="border-top:1px solid #000;border-bottom:1px solid #000;background:#fff">
          <td colspan="${D}" style="padding:4px 8px;font-size:8px;border:1px solid #000">${te}</td>
          <td style="padding:3px 2px;text-align:center;font-size:8px;font-weight:700;border:1px solid #000;line-height:1.2">
            <div style="font-size:7px;color:#555">Total Qty</div>
            <div>${T}</div>
          </td>
          <td style="padding:3px 2px;border:1px solid #000">&nbsp;</td>
        </tr>
      </tfoot>
    </table>

    <div class="${H}" style="display:flex;border-bottom:1px solid #000;align-items:stretch;border-left:1px solid #000;border-right:1px solid #000;box-sizing:border-box">
      <div style="flex:1;padding:8px 10px;border-right:1px solid #000;font-size:8px;min-width:0">
        <div style="font-weight:bold;margin-bottom:4px;text-decoration:underline">Terms &amp; Conditions</div>
        <div style="line-height:1.6">${v}</div>
        ${ue?`<div style="margin-top:8px"><strong>Notes/Advice :</strong><div style="margin-top:3px;line-height:1.4">${ue}</div></div>`:`<div style="margin-top:8px"><strong>Remark :</strong> ___________________________</div>`}
      </div>
      <div style="flex:1;padding:8px 10px;border-right:1px solid #000;font-size:8px;min-width:0">
        <div style="font-weight:bold;margin-bottom:4px;text-decoration:underline">BANK DETAILS :-</div>
        <div style="line-height:1.6">${y}</div>
      </div>
      <div style="flex:1;padding:8px 10px;border-right:1px solid #000;text-align:center;display:flex;flex-direction:column;justify-content:space-between;min-height:100px">
        <div style="font-size:8px;margin-bottom:4px">For ${_}</div>
        ${b}
        <div style="border-top:1px solid #000;padding-top:4px;font-size:8px;margin-top:auto">Authorised Signatory</div>
      </div>
      <div class="pharm-invoice-totals" style="width:160px;flex-shrink:0;font-size:9px;border-left:1px solid #000">
        <div style="display:flex;justify-content:space-between;padding:4px 8px;border-bottom:1px solid #000">
          <span>SUB TOTAL</span><span style="font-weight:bold">${Z(r)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:4px 8px;border-bottom:1px solid #000">
          <span>ADD. DIS. (${d.toFixed(2)}%)</span><span>${Z(u)}</span>
        </div>
        ${ne}
        ${c===0?``:`<div style="display:flex;justify-content:space-between;padding:4px 8px;border-bottom:1px solid #000">
          <span>ROUND OFF</span><span>${c>0?`+`:`-`}${Z(Math.abs(c))}</span>
        </div>`}
        <div style="display:flex;justify-content:space-between;padding:4px 8px;border-bottom:1px solid #000">
          <span>PAID</span><span>${Z(f)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:4px 8px;border-bottom:1px solid #000">
          <span>DUE</span><span>${Z(p)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:6px 8px;background:#000;color:#fff;font-weight:bold;font-size:10px">
          <span>GRAND TOTAL</span><span>${Z(s)}</span>
        </div>
        <div style="padding:4px 8px;font-size:8px;text-align:center;font-style:italic">Computer Generated Invoice</div>
      </div>
    </div>

  </div>
  </div>
</body>
</html>`}var pt=`
  * { margin:0; padding:0; box-sizing:border-box; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; color-adjust:exact !important; }
  html, body { width:100%; background:#fff; color:#000; font-family:Arial,sans-serif; font-size:10px; }
  body { display:block; padding:0; margin:0; }
  @page { size:A4; margin:8mm; }
  ${W}
  @media print {
    html, body { background:#fff !important; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; color-adjust:exact !important; }
    .${z} { border: ${U} !important; }
    ${W}
  }
`;function mt(e){if(!e)return;e.style.setProperty(`box-sizing`,`border-box`,`important`),e.style.setProperty(`width`,`100%`,`important`),e.style.setProperty(`max-width`,`210mm`,`important`),e.style.setProperty(`border`,U,`important`),e.style.setProperty(`overflow`,`hidden`,`important`),e.style.setProperty(`background`,`#fff`,`important`);let t=e.querySelector(`.${B}`);t&&(t.style.setProperty(`width`,`100%`,`important`),t.style.setProperty(`border`,`none`,`important`))}function ht(e){return String(e||``).replace(/\s+/g,` `).trim()}function gt(e){return e?e.classList?.contains(z)?e:e.querySelector(`.${z}`)||e:null}function _t(e,t){let n=gt(e);if(!n)return``;let r=n.cloneNode(!0);r.querySelectorAll(`[contenteditable]`).forEach(e=>{e.removeAttribute(`contenteditable`)}),r.querySelectorAll(`style[data-preview-only]`).forEach(e=>e.remove()),mt(r);let i=r.outerHTML;return`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Invoice ${t||``}</title>
  <style>${pt}</style>
</head>
<body>
  ${i}
</body>
</html>`}function vt(e){if(!e)return``;try{let t=new DOMParser().parseFromString(e,`text/html`),n=t.querySelector(`.${z}`);return n?n.outerHTML:t.body?.innerHTML||``}catch{return``}}function yt(e){if(!e)return()=>{};let t=[];return e.querySelectorAll(`.${R}`).forEach(e=>{e.setAttribute(`contenteditable`,`true`),e.addEventListener(`keydown`,G),e.addEventListener(`paste`,K),e.addEventListener(`beforeinput`,q),t.push(()=>{e.removeEventListener(`keydown`,G),e.removeEventListener(`paste`,K),e.removeEventListener(`beforeinput`,q)})}),()=>t.forEach(e=>e())}var bt=I.memo(I.forwardRef(function({printHtml:e},t){let n=vt(e);return(0,I.useEffect)(()=>{let e=t?.current;if(e)return yt(gt(e))},[t,n]),n?(0,L.jsx)(`div`,{ref:t,dangerouslySetInnerHTML:{__html:n}}):(0,L.jsx)(`p`,{style:{textAlign:`center`,color:`#64748b`},children:`No printed copy saved yet.`})})),xt=I.memo(I.forwardRef(function({invoice:e,outlet:t},n){let r=e.gst_enabled!==!1,i=Number(e.subtotal||0),a=Number(e.cgst||0),o=Number(e.sgst||0),s=a+o,c=Number(e.grand_total||0),l=Math.round((Number(e.round_off)||0)*100)/100,u=r?i+s:i,d=Math.max(0,Math.round((u-c+l)*100)/100),f=u>0?Math.max(0,Math.round(d/u*100*100)/100):0,p=Number(e.paid_amount||0),m=Math.max(0,Number(e.due_amount??c-p)),h=e.items||[],g=t?.sale_bill_qty_display===`pack_and_loose`?`pack_and_loose`:`base_units`,_=!!e?.party,v=Ve(e),y=He(e),b=Ue(e),x=We(e),S=Ge(e),C=Ie(e.remarks),w=t||{},T=(w.business_name||`Pharmacy`).toUpperCase(),E=(w.address||``).split(/\n/).map(e=>e.trim()).filter(Boolean),ee=r?13:11,te=Fe(h,g),D=Math.max(0,8-h.length),ne=r?`Taxable ${Z(i)} · CGST ${Z(a)} · SGST ${Z(o)} · GST ${Z(s)}`:`Subtotal ${Z(i)} · Non-GST bill (no tax)`,re=rt(r);return(0,L.jsx)(`div`,{ref:n,className:z,style:Ce,children:(0,L.jsxs)(`div`,{className:B,style:we,children:[(0,L.jsxs)(`div`,{className:V,style:{display:`flex`,borderBottom:U,borderLeft:U,borderRight:U,boxSizing:`border-box`},children:[(0,L.jsxs)(`div`,{style:{flex:1,padding:`8px 10px`,borderRight:U},children:[(0,L.jsx)(J,{style:{fontSize:`14px`,fontWeight:`bold`},children:T}),r?(0,L.jsx)(J,{style:{fontSize:`8px`,fontStyle:`italic`,marginBottom:`4px`},children:`GST Invoice`}):null,(0,L.jsxs)(`div`,{style:{fontSize:`8px`,lineHeight:`1.5`},children:[E.length>0?E.map((e,t)=>(0,L.jsx)(J,{style:{fontSize:`8px`},children:e},t)):(0,L.jsx)(J,{style:{fontSize:`8px`},children:`—`}),w.mobile?(0,L.jsxs)(J,{style:{fontSize:`8px`},children:[`Phone: `,w.mobile]}):null,w.email?(0,L.jsxs)(J,{style:{fontSize:`8px`},children:[`E-Mail: `,w.email]}):null,w.website?(0,L.jsxs)(J,{style:{fontSize:`8px`},children:[`Web: `,w.website]}):null]}),r?(0,L.jsxs)(`div`,{style:{fontSize:`8px`,marginTop:`4px`,lineHeight:`1.5`},children:[w.gst_number?(0,L.jsxs)(J,{style:{fontSize:`8px`},children:[`GSTIN : `,w.gst_number]}):null,w.dl_number?(0,L.jsxs)(J,{style:{fontSize:`8px`},children:[`D.L.NO. : `,w.dl_number]}):null]}):(0,L.jsx)(`div`,{style:{fontSize:`8px`,marginTop:`4px`,lineHeight:`1.5`},children:w.dl_number?(0,L.jsxs)(J,{style:{fontSize:`8px`},children:[`D.L.NO. : `,w.dl_number]}):null})]}),(0,L.jsx)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`,borderRight:U,padding:`8px`},children:(0,L.jsx)(J,{style:{fontSize:`16px`,fontWeight:`bold`,textAlign:`center`},children:r?`GST INVOICE`:`INVOICE`})}),(0,L.jsxs)(`div`,{style:{flex:1.2,padding:`8px 10px`,fontSize:`9px`,lineHeight:`1.8`},children:[_?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(J,{children:[(0,L.jsx)(`strong`,{children:`Party Name :`}),` `,v]}),(0,L.jsxs)(J,{children:[(0,L.jsx)(`strong`,{children:`Party Address :`}),` `,y]}),(0,L.jsxs)(J,{children:[(0,L.jsx)(`strong`,{children:`Party Phone :`}),` `,b]}),(0,L.jsxs)(J,{children:[(0,L.jsx)(`strong`,{children:`Party D.L.No. :`}),` `,S]}),(0,L.jsxs)(J,{children:[(0,L.jsx)(`strong`,{children:`Party GSTIN :`}),` `,x]})]}):Pe(e),(0,L.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginTop:`4px`,borderTop:U,paddingTop:`4px`},children:[(0,L.jsx)(J,{as:`span`,children:(0,L.jsxs)(`strong`,{children:[`Invoice No. : `,e.invoice_no]})}),(0,L.jsx)(J,{as:`span`,children:(0,L.jsxs)(`strong`,{children:[`Date: `,Y(e.created_at||new Date,`dd/MM/yyyy HH:mm`)]})})]})]})]}),(0,L.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`separate`,borderSpacing:0,fontSize:`9px`,tableLayout:`fixed`,borderTop:U,borderBottom:U,borderLeft:U,borderRight:U},children:[(0,L.jsx)(st,{showGst:r}),(0,L.jsx)(`thead`,{children:(0,L.jsxs)(`tr`,{style:{background:`#f0f0f0`,borderBottom:U,borderTop:U},children:[(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`center`},children:`SN.`}),(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`left`},children:`PRODUCT NAME`}),(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`center`},children:`PACK`}),(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`center`},children:`HSN`}),(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`center`},children:`BATCH`}),(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`center`},children:`EXP.`}),(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`right`},children:`MRP`}),(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`center`},children:`DISC%`}),(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`right`},children:`RATE`}),r?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`center`},children:`SGST%`}),(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`center`},children:`CGST%`})]}):null,(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`center`},children:`QTY`}),(0,L.jsx)(`th`,{style:{border:U,padding:`4px 2px`,textAlign:`right`},children:`AMOUNT`})]})}),(0,L.jsxs)(`tbody`,{children:[h.map((e,t)=>{let n=Number(e.qty||0),i=Qe(e,Number(e.rate||0)),a=$e(e),o=Oe(e),s=n>0?a:0,c=r?Number(e.sgst_rate??0):0,l=r?Number(e.cgst_rate??0):0;return(0,L.jsxs)(`tr`,{children:[(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,textAlign:`center`},children:t+1}),(0,L.jsx)(`td`,{contentEditable:!0,suppressContentEditableWarning:!0,className:R,style:{border:U,padding:`3px`,fontWeight:`bold`,...ct},onKeyDown:G,onPaste:K,onBeforeInput:q,children:Ae(e)}),(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,textAlign:`center`},children:X(e)?.pack_info||e.pack_info||`—`}),(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,textAlign:`center`,fontSize:`8px`},children:e.medicine?.hsn_code||e.hsn_code||`—`}),(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,textAlign:`center`,fontSize:`8px`},children:e.batch?.batch_no??e.batch_no??`—`}),(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,textAlign:`center`,fontSize:`8px`},children:Y(e.batch?.expiry_date||e.expiry_date,`MM/yy`)}),(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,textAlign:`right`},children:Z(i)}),(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,textAlign:`center`},children:o.toFixed(2)}),(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,textAlign:`right`},children:Z(a)}),r?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,textAlign:`center`},children:c.toFixed(2)}),(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,textAlign:`center`},children:l.toFixed(2)})]}):null,(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,...lt},children:ke(e,g)}),(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,...ut},children:Z(s)})]},t)}),D>0&&Array.from({length:D}).map((e,t)=>(0,L.jsx)(`tr`,{style:{height:`18px`},children:Array.from({length:ee}).map((e,t)=>(0,L.jsx)(`td`,{style:{border:U,padding:`3px`,minHeight:`18px`},children:`\xA0`},t))},`empty-${t}`))]}),(0,L.jsx)(`tfoot`,{children:(0,L.jsxs)(`tr`,{style:{borderTop:U,borderBottom:U,background:`#fff`},children:[(0,L.jsx)(`td`,{colSpan:re,style:{padding:`4px 8px`,fontSize:`8px`,border:U},children:ne}),(0,L.jsxs)(`td`,{style:{padding:`3px 2px`,textAlign:`center`,fontSize:`8px`,fontWeight:700,border:U,lineHeight:1.2},children:[(0,L.jsx)(`div`,{style:{fontSize:`7px`,color:`#555`},children:`Total Qty`}),(0,L.jsx)(`div`,{children:te})]}),(0,L.jsx)(`td`,{style:{padding:`3px 2px`,border:U},children:`\xA0`})]})})]}),(0,L.jsx)(tt,{outlet:w,title:T,notesAdvice:C,showGst:r,subtotal:i,totalDiscount:d,totalDiscountPercent:f,cgst:a,sgst:o,roundOff:l,paidAmount:p,dueAmount:m,grandTotal:c})]})})}));function St({invoice:e,outlet:t,onClose:n,variant:a=`original`,onPrintCopySaved:o,embedded:s=!1,autoPrint:c=!1}){let[l,u]=(0,I.useState)(!1),[d,f]=(0,I.useState)(!1),p=(0,I.useRef)(null),m=(0,I.useRef)(``),h=a===`printed`,g=e?.print_html||``,_=I.useMemo(()=>be(t,xe(e)),[t,e]),v=(0,I.useCallback)(()=>{if(h&&g){m.current=g;return}let t=p.current;if(!t)return;let n=_t(t,e?.invoice_no);n&&(m.current=n)},[e?.invoice_no,h,g]);(0,I.useEffect)(()=>{let e=window.setTimeout(v,50);return()=>window.clearTimeout(e)},[v,e?.id,a]);let y=(0,I.useCallback)(async()=>{if(!e?.id)return!1;let t=p.current,n=t?_t(t,e.invoice_no):h?g:``;if(!n||ht(n)===ht(m.current))return!1;f(!0);try{let{data:t}=await i.patch(`/pharmacy/invoices/${e.id}/print-copy/`,{print_html:n}),r=t?.data||t;return o?.(e.id,{has_print_copy:!0,print_html:r?.print_html??n,print_html_updated_at:r?.print_html_updated_at??null}),m.current=n,!0}catch{return r.error(`Could not save printed copy`),!1}finally{f(!1)}},[e,h,g,o]),b=(0,I.useCallback)(async()=>{await y(),n?.()},[y,n]),x=(0,I.useCallback)(async()=>{if(!(!e||l)){u(!0);try{let t=p.current;await dt(t?_t(t,e.invoice_no):ft({invoice:e,outlet:_})),await y()}catch{}finally{u(!1)}}},[e,_,l,y]),S=(0,I.useRef)(x);(0,I.useEffect)(()=>{S.current=x},[x]);let C=(0,I.useRef)(!1);if((0,I.useEffect)(()=>{if(!c||s||!e?.id||C.current)return;C.current=!0;let t=window.setTimeout(async()=>{try{await S.current()}finally{n?.()}},400);return()=>window.clearTimeout(t)},[c,s,e?.id,n]),!e)return null;let w=h?`Printed copy`:`Original bill`;return(0,L.jsxs)(`div`,{style:s?{background:`white`,overflow:`visible`,padding:`8px 0 24px`}:c?{position:`fixed`,top:0,left:`-10000px`,width:`230mm`,background:`white`,zIndex:-1,opacity:0,pointerEvents:`none`}:{position:`fixed`,inset:0,background:`white`,zIndex:9999,overflowY:`auto`,padding:`20px`},children:[(0,L.jsx)(`style`,{"data-preview-only":!0,children:Te}),(0,L.jsxs)(`p`,{style:{textAlign:`center`,marginBottom:`8px`,fontSize:`11px`,fontWeight:700,color:`#475569`},children:[w,` · #`,e.invoice_no||`—`]}),h&&g?(0,L.jsx)(bt,{ref:p,printHtml:g}):(0,L.jsx)(xt,{ref:p,invoice:e,outlet:_}),(0,L.jsx)(`p`,{style:{textAlign:`center`,marginTop:`12px`,fontSize:`12px`,color:`#64748b`},children:`Click any text on the bill to edit before printing. Changes to the printed copy are saved when you close or print.`}),(0,L.jsxs)(`div`,{style:{textAlign:`center`,marginTop:`10px`,display:`flex`,justifyContent:`center`,gap:`12px`,flexWrap:`wrap`},children:[(0,L.jsx)(`button`,{type:`button`,onClick:x,disabled:l||d,style:{background:`#16a34a`,color:`white`,border:`none`,padding:`10px 28px`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`,fontWeight:`bold`},children:l?`Printing…`:`🖨 Print Invoice`}),!s&&(0,L.jsx)(`button`,{type:`button`,onClick:b,disabled:l||d,style:{background:`#1e40af`,color:`white`,border:`none`,padding:`10px 24px`,borderRadius:`6px`,cursor:`pointer`,fontSize:`14px`},children:d?`Saving…`:`✕ Close Preview`})]})]})}export{oe as _,ge as a,ie as c,pe as d,me as f,M as g,F as h,ye as i,re as l,he as m,Se as n,be as o,fe as p,_e as r,k as s,St as t,N as u,d as v};