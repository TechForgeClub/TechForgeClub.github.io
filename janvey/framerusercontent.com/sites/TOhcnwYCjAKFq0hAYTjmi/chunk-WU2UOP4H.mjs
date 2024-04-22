import{B as se,G as H,Q as V,R as K,T as t,W as le,Y as P,h as ie,j as S,l as u,p as m,q as d,u as D,v as j}from"./chunk-GYQDVITO.mjs";import{b as o}from"./chunk-ELYU6EKT.mjs";var ue={position:"relative",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},Fe={...ue,borderRadius:6,background:"rgba(136, 85, 255, 0.3)",color:"#85F",border:"1px dashed #85F",flexDirection:"column"},G={onClick:{type:t.EventHandler},onMouseEnter:{type:t.EventHandler},onMouseLeave:{type:t.EventHandler}},Ee={type:t.Number,title:"Font Size",min:2,max:200,step:1,displayStepper:!0},ke={font:{type:t.Boolean,title:"Font",defaultValue:!1,disabledTitle:"Default",enabledTitle:"Custom"},fontFamily:{type:t.String,title:"Family",placeholder:"Inter",hidden:({font:e})=>!e},fontWeight:{type:t.Enum,title:"Weight",options:[100,200,300,400,500,600,700,800,900],optionTitles:["Thin","Extra-light","Light","Regular","Medium","Semi-bold","Bold","Extra-bold","Black"],hidden:({font:e})=>!e}};function W(e,n){return ce(!0,e,n)}function q(e,n){return ce(!1,e,n)}function ce(e,n,l=!0){let c=P();u(()=>{l&&c===e&&n()},[c])}function A(e){let n=d(null);return n.current===null&&(n.current=e()),n.current}var Ie=()=>{if(typeof o<"u"){let e=o.userAgent.toLowerCase();return(e.indexOf("safari")>-1||e.indexOf("framermobile")>-1||e.indexOf("framerx")>-1)&&e.indexOf("chrome")<0}else return!1},Y=()=>m(()=>Ie(),[]);function J(){return m(()=>V.current()===V.canvas,[])}function Z(e){let{borderRadius:n,isMixedBorderRadius:l,topLeftRadius:c,topRightRadius:p,bottomRightRadius:f,bottomLeftRadius:h}=e;return m(()=>l?`${c}px ${p}px ${f}px ${h}px`:`${n}px`,[n,l,c,p,f,h])}var Q={borderRadius:{title:"Radius",type:t.FusedNumber,toggleKey:"isMixedBorderRadius",toggleTitles:["Radius","Radius per corner"],valueKeys:["topLeftRadius","topRightRadius","bottomRightRadius","bottomLeftRadius"],valueLabels:["TL","TR","BR","BL"],min:0}};var Be={padding:{type:t.FusedNumber,toggleKey:"paddingPerSide",toggleTitles:["Padding","Padding per side"],valueKeys:["paddingTop","paddingRight","paddingBottom","paddingLeft"],valueLabels:["T","R","B","L"],min:0,title:"Padding"}};var X=e=>e instanceof D;function pe(e,n){let l=d(n),c=d(),p=d(!1),f=V.current()===V.canvas,h=n?.onChangeDeps?n.onChangeDeps:[],g=S(n?.onChange,[...h]),M=S(v=>{var y;return!((y=l.current)===null||y===void 0)&&y.transform?l.current.transform(v):v},[]),b=A(()=>X(e)?e:j(M(e)));return u(()=>{if(!X(e)&&p.current){var v,y;let T=M(e);if((v=c.current)===null||v===void 0||v.stop(),g&&g(T,b),!((y=l.current)===null||y===void 0)&&y.animate&&!f){var _;c.current=K(b,T,(_=l.current)===null||_===void 0?void 0:_.transition)}else b.set(T)}p.current=!0},[e,...h]),b}var x;(function(e){e.Fill="fill",e.Contain="contain",e.Cover="cover",e.None="none",e.ScaleDown="scale-down"})(x||(x={}));var C;(function(e){e.Video="Upload",e.Url="URL"})(C||(C={}));function Oe(e){let{width:n,height:l,topLeft:c,topRight:p,bottomRight:f,bottomLeft:h,id:g,children:M,...b}=e;return b}function ee(e){let n=Oe(e);return H(Le,{...n})}var me=!1,Le=ie(function(n){let{srcType:l,srcFile:c,srcUrl:p,playing:f,canvasPlay:h,muted:g,playsinline:M,controls:b,progress:v,objectFit:y,backgroundColor:_,radius:T,topLeft:Ne,topRight:ze,bottomRight:Ue,bottomLeft:$e,isMixed:De,onSeeked:I,onPause:w,onPlay:B,onEnd:O,onClick:fe,onMouseEnter:he,onMouseLeave:ye,onMouseDown:Ce,onMouseUp:ge,poster:be,restartOnEnter:je,posterEnabled:ve,startTime:L,volume:te,loop:ne}=n,Se=P(),r=d(),xe=Y(),R=d(!1),N=d(null),re=d(null),F=J(),Ve=Z(n),oe=L===100?99.9:L,z=!F||h,U=m(()=>f,[]),Me=m(()=>F?!0:g,[F,g]),E=S(s=>{if(!r.current)return;let $=(s===1?.999:s)*r.current.duration,Re=Math.abs(r.current.currentTime-$)<.1;r.current.duration>0&&!Re&&(r.current.currentTime=$)},[]),k=S(()=>{!(r.current.currentTime>0&&r.current.onplaying&&!r.current.paused&&!r.current.ended&&r.current.readyState>r.current.HAVE_CURRENT_DATA)&&r.current&&!R.current&&Se&&(R.current=!0,r.current.play().catch($=>{}).finally(()=>R.current=!1))},[]),ae=S(()=>{!r.current||R.current||r.current.pause()},[]);u(()=>{f&&z?k():ae()},[f,h]),u(()=>{me?E(oe*.01):me=!0},[L,c,p]);let _e=pe(v,{transform:s=>s*.01,onChange:s=>{E(s)}});se(_e,"change",s=>{F||E(s)}),W(()=>{N.current!==null&&r.current&&(!re&&ne||!N.current)&&k()}),q(()=>{r.current&&(re.current=r.current.ended,N.current=r.current.paused,ae())});let Te=m(()=>{if(l===C.Url)return p;if(l===C.Video)return c},[l,c,p]);return u(()=>{xe&&r.current&&U&&setTimeout(()=>k(),50)},[]),u(()=>{r.current&&!g&&(r.current.volume=te/100)},[te]),H("video",{onClick:fe,onMouseEnter:he,onMouseLeave:ye,onMouseDown:Ce,onMouseUp:ge,src:Te,loop:ne,ref:r,onSeeked:s=>I?.(s),onPause:s=>w?.(s),onPlay:s=>B?.(s),onEnded:s=>O?.(s),autoPlay:U&&z,poster:ve?be:void 0,onLoadedData:()=>{r.current&&r.current.currentTime<.3&&E(oe*.01),z&&r.current&&U&&k()},controls:b,muted:Me,playsInline:M,style:{width:"100%",height:"100%",borderRadius:Ve,display:"block",objectFit:y,backgroundColor:_,objectPosition:"50% 50%"}})});ee.displayName="Video";ee.defaultProps={srcType:C.Url,srcUrl:"https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",srcFile:"",posterEnabled:!1,controls:!1,autoPlay:!0,canvasPlay:!1,loop:!0,muted:!0,playsinline:!0,restartOnEnter:!1,objectFit:x.Cover,backgroundColor:"rgba(0,0,0,0)",radius:0,volume:25,startTime:0};le(ee,{srcType:{type:t.Enum,displaySegmentedControl:!0,title:"Source",options:[C.Url,C.Video]},srcUrl:{type:t.String,title:" ",placeholder:"../example.mp4",hidden(e){return e.srcType===C.Video},description:"Hosted video file URL. For Youtube, use the Youtube component."},srcFile:{type:t.File,title:" ",allowedFileTypes:["mp4"],hidden(e){return e.srcType===C.Url}},playing:{type:t.Boolean,title:"Playing",enabledTitle:"Yes",disabledTitle:"No"},posterEnabled:{type:t.Boolean,title:"Poster",enabledTitle:"Yes",disabledTitle:"No"},poster:{type:t.Image,title:" ",hidden:({posterEnabled:e})=>!e},backgroundColor:{type:t.Color,title:"Background"},...Q,startTime:{title:"Start Time",type:t.Number,min:0,max:100,step:.1,unit:"%"},loop:{type:t.Boolean,title:"Loop",enabledTitle:"Yes",disabledTitle:"No"},objectFit:{type:t.Enum,title:"Fit",options:[x.Cover,x.Fill,x.Contain,x.ScaleDown,x.None]},canvasPlay:{type:t.Boolean,title:"On Canvas",enabledTitle:"Play",disabledTitle:"Pause",hidden(e){return e.autoPlay===!1}},controls:{type:t.Boolean,title:"Controls",enabledTitle:"Show",disabledTitle:"Hide"},muted:{type:t.Boolean,title:"Muted",enabledTitle:"Yes",disabledTitle:"No"},volume:{type:t.Number,max:100,min:0,unit:"%",hidden:({muted:e})=>e},onEnd:{type:t.EventHandler},onSeeked:{type:t.EventHandler},onPause:{type:t.EventHandler},onPlay:{type:t.EventHandler},...G});export{ee as a};
//# sourceMappingURL=chunk-WU2UOP4H.mjs.map