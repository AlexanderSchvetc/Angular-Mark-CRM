"use strict";(self.webpackChunkriskanalysis=self.webpackChunkriskanalysis||[]).push([[257],{6257:(Te,L,s)=>{s.d(L,{C0:()=>N,VY:()=>f,Vq:()=>H,T5:()=>Ie,Ic:()=>ye,fd:()=>Me});var v=s(4080),M=s(2687),x=s(445),h=s(1281),b=s(9521),e=s(4650),F=s(3353),S=s(7579),B=s(9646),_=s(8675),u=s(2722);function P(n,o){1&n&&e.Hsn(0)}const Y=["*"];let I=(()=>{class n{constructor(t){this._elementRef=t}focus(){this._elementRef.nativeElement.focus()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]}),n})(),C=(()=>{class n{constructor(t){this.template=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Rgc))},n.\u0275dir=e.lG2({type:n,selectors:[["","cdkStepLabel",""]]}),n})(),Q=0;const T=new e.OlP("STEPPER_GLOBAL_OPTIONS");let y=(()=>{class n{constructor(t,i){this._stepper=t,this.interacted=!1,this.interactedStream=new e.vpe,this._editable=!0,this._optional=!1,this._completedOverride=null,this._customError=null,this._stepperOptions=i||{},this._displayDefaultIndicatorType=!1!==this._stepperOptions.displayDefaultIndicatorType}get editable(){return this._editable}set editable(t){this._editable=(0,h.Ig)(t)}get optional(){return this._optional}set optional(t){this._optional=(0,h.Ig)(t)}get completed(){return this._completedOverride??this._getDefaultCompleted()}set completed(t){this._completedOverride=(0,h.Ig)(t)}_getDefaultCompleted(){return this.stepControl?this.stepControl.valid&&this.interacted:this.interacted}get hasError(){return this._customError??this._getDefaultError()}set hasError(t){this._customError=(0,h.Ig)(t)}_getDefaultError(){return this.stepControl&&this.stepControl.invalid&&this.interacted}select(){this._stepper.selected=this}reset(){this.interacted=!1,null!=this._completedOverride&&(this._completedOverride=!1),null!=this._customError&&(this._customError=!1),this.stepControl&&this.stepControl.reset()}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this.interacted||(this.interacted=!0,this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??null!=this._customError}}return n.\u0275fac=function(t){return new(t||n)(e.Y36((0,e.Gpc)(()=>m)),e.Y36(T,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cdk-step"]],contentQueries:function(t,i,r){if(1&t&&e.Suo(r,C,5),2&t){let a;e.iGM(a=e.CRH())&&(i.stepLabel=a.first)}},viewQuery:function(t,i){if(1&t&&e.Gf(e.Rgc,7),2&t){let r;e.iGM(r=e.CRH())&&(i.content=r.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],state:"state",editable:"editable",optional:"optional",completed:"completed",hasError:"hasError"},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[e.TTD],ngContentSelectors:Y,decls:1,vars:0,template:function(t,i){1&t&&(e.F$t(),e.YNc(0,P,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),n})(),m=(()=>{class n{constructor(t,i,r){this._dir=t,this._changeDetectorRef=i,this._elementRef=r,this._destroyed=new S.x,this.steps=new e.n_E,this._sortedHeaders=new e.n_E,this._linear=!1,this._selectedIndex=0,this.selectionChange=new e.vpe,this._orientation="horizontal",this._groupId=Q++}get linear(){return this._linear}set linear(t){this._linear=(0,h.Ig)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){const i=(0,h.su)(t);this.steps&&this._steps?(this._isValidIndex(i),this.selected?._markAsInteracted(),this._selectedIndex!==i&&!this._anyControlsInvalidOrPending(i)&&(i>=this._selectedIndex||this.steps.toArray()[i].editable)&&this._updateSelectedItemIndex(i)):this._selectedIndex=i}get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(t){this.selectedIndex=t&&this.steps?this.steps.toArray().indexOf(t):-1}get orientation(){return this._orientation}set orientation(t){this._orientation=t,this._keyManager&&this._keyManager.withVerticalOrientation("vertical"===t)}ngAfterContentInit(){this._steps.changes.pipe((0,_.O)(this._steps),(0,u.R)(this._destroyed)).subscribe(t=>{this.steps.reset(t.filter(i=>i._stepper===this)),this.steps.notifyOnChanges()})}ngAfterViewInit(){this._stepHeader.changes.pipe((0,_.O)(this._stepHeader),(0,u.R)(this._destroyed)).subscribe(t=>{this._sortedHeaders.reset(t.toArray().sort((i,r)=>i._elementRef.nativeElement.compareDocumentPosition(r._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new M.Em(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation("vertical"===this._orientation),(this._dir?this._dir.change:(0,B.of)()).pipe((0,_.O)(this._layoutDirection()),(0,u.R)(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t)),this._keyManager.updateActiveItem(this._selectedIndex),this.steps.changes.subscribe(()=>{this.selected||(this._selectedIndex=Math.max(this._selectedIndex-1,0))}),this._isValidIndex(this._selectedIndex)||(this._selectedIndex=0)}ngOnDestroy(){this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(t=>t.reset()),this._stateChanged()}_getStepLabelId(t){return`cdk-step-label-${this._groupId}-${t}`}_getStepContentId(t){return`cdk-step-content-${this._groupId}-${t}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(t){const i=t-this._selectedIndex;return i<0?"rtl"===this._layoutDirection()?"next":"previous":i>0?"rtl"===this._layoutDirection()?"previous":"next":"current"}_getIndicatorType(t,i="number"){const r=this.steps.toArray()[t],a=this._isCurrentStep(t);return r._displayDefaultIndicatorType?this._getDefaultIndicatorLogic(r,a):this._getGuidelineLogic(r,a,i)}_getDefaultIndicatorLogic(t,i){return t._showError()&&t.hasError&&!i?"error":!t.completed||i?"number":t.editable?"edit":"done"}_getGuidelineLogic(t,i,r="number"){return t._showError()&&t.hasError&&!i?"error":t.completed&&!i?"done":t.completed&&i?r:t.editable&&i?"edit":r}_isCurrentStep(t){return this._selectedIndex===t}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex}_updateSelectedItemIndex(t){const i=this.steps.toArray();this.selectionChange.emit({selectedIndex:t,previouslySelectedIndex:this._selectedIndex,selectedStep:i[t],previouslySelectedStep:i[this._selectedIndex]}),this._containsFocus()?this._keyManager.setActiveItem(t):this._keyManager.updateActiveItem(t),this._selectedIndex=t,this._stateChanged()}_onKeydown(t){const i=(0,b.Vb)(t),r=t.keyCode,a=this._keyManager;null==a.activeItemIndex||i||r!==b.L_&&r!==b.K5?a.onKeydown(t):(this.selectedIndex=a.activeItemIndex,t.preventDefault())}_anyControlsInvalidOrPending(t){return!!(this._linear&&t>=0)&&this.steps.toArray().slice(0,t).some(i=>{const r=i.stepControl;return(r?r.invalid||r.pending||!i.interacted:!i.completed)&&!i.optional&&!i._completedOverride})}_layoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_containsFocus(){const t=this._elementRef.nativeElement,i=(0,F.ht)();return t===i||t.contains(i)}_isValidIndex(t){return t>-1&&(!this.steps||t<this.steps.length)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x.Is,8),e.Y36(e.sBO),e.Y36(e.SBq))},n.\u0275dir=e.lG2({type:n,selectors:[["","cdkStepper",""]],contentQueries:function(t,i,r){if(1&t&&(e.Suo(r,y,5),e.Suo(r,I,5)),2&t){let a;e.iGM(a=e.CRH())&&(i._steps=a),e.iGM(a=e.CRH())&&(i._stepHeader=a)}},inputs:{linear:"linear",selectedIndex:"selectedIndex",selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange"},exportAs:["cdkStepper"]}),n})(),G=(()=>{class n{constructor(t){this._stepper=t,this.type="submit"}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275dir=e.lG2({type:n,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(t,i){1&t&&e.NdJ("click",function(){return i._stepper.next()}),2&t&&e.Ikx("type",i.type)},inputs:{type:"type"}}),n})(),J=(()=>{class n{constructor(t){this._stepper=t,this.type="button"}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m))},n.\u0275dir=e.lG2({type:n,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(t,i){1&t&&e.NdJ("click",function(){return i._stepper.previous()}),2&t&&e.Ikx("type",i.type)},inputs:{type:"type"}}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[x.vT]}),n})();var l=s(6895),U=s(4859),d=s(3238),D=s(7392),V=s(727),j=s(3900),q=s(4004),$=s(1884),p=s(7340);function K(n,o){if(1&n&&e.GkF(0,8),2&n){const t=e.oxw();e.Q6J("ngTemplateOutlet",t.iconOverrides[t.state])("ngTemplateOutletContext",t._getIconContext())}}function W(n,o){if(1&n&&(e.TgZ(0,"span",13),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t._getDefaultTextForState(t.state))}}function X(n,o){if(1&n&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t._intl.completedLabel)}}function ee(n,o){if(1&n&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t._intl.editableLabel)}}function te(n,o){if(1&n&&(e.TgZ(0,"mat-icon",13),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Oqu(t._getDefaultTextForState(t.state))}}function ne(n,o){if(1&n&&(e.ynx(0,9),e.YNc(1,W,2,1,"span",10),e.YNc(2,X,2,1,"span",11),e.YNc(3,ee,2,1,"span",11),e.YNc(4,te,2,1,"mat-icon",12),e.BQk()),2&n){const t=e.oxw();e.Q6J("ngSwitch",t.state),e.xp6(1),e.Q6J("ngSwitchCase","number"),e.xp6(1),e.Q6J("ngIf","done"===t.state),e.xp6(1),e.Q6J("ngIf","edit"===t.state)}}function ie(n,o){if(1&n&&(e.TgZ(0,"div",15),e.GkF(1,16),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",t._templateLabel().template)}}function oe(n,o){if(1&n&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.label)}}function re(n,o){if(1&n&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t._intl.optionalLabel)}}function ae(n,o){if(1&n&&(e.TgZ(0,"div",18),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.errorMessage)}}function se(n,o){}function pe(n,o){if(1&n&&(e.Hsn(0),e.YNc(1,se,0,0,"ng-template",0)),2&n){const t=e.oxw();e.xp6(1),e.Q6J("cdkPortalOutlet",t._portal)}}const le=["*"];function ce(n,o){1&n&&e._UZ(0,"div",11)}const O=function(n,o){return{step:n,i:o}};function de(n,o){if(1&n&&(e.ynx(0),e.GkF(1,9),e.YNc(2,ce,1,0,"div",10),e.BQk()),2&n){const t=o.$implicit,i=o.index,r=o.last;e.oxw(2);const a=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",a)("ngTemplateOutletContext",e.WLB(3,O,t,i)),e.xp6(1),e.Q6J("ngIf",!r)}}const w=function(n){return{animationDuration:n}},k=function(n,o){return{value:n,params:o}};function he(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",12),e.NdJ("@horizontalStepTransition.done",function(r){e.CHM(t);const a=e.oxw(2);return e.KtG(a._animationDone.next(r))}),e.GkF(1,13),e.qZA()}if(2&n){const t=o.$implicit,i=o.index,r=e.oxw(2);e.Q6J("@horizontalStepTransition",e.WLB(7,k,r._getAnimationDirection(i),e.VKq(5,w,r._getAnimationDuration())))("id",r._getStepContentId(i)),e.uIk("aria-labelledby",r._getStepLabelId(i))("aria-expanded",r.selectedIndex===i),e.xp6(1),e.Q6J("ngTemplateOutlet",t.content)}}function ue(n,o){if(1&n&&(e.TgZ(0,"div",4)(1,"div",5),e.YNc(2,de,3,6,"ng-container",6),e.qZA(),e.TgZ(3,"div",7),e.YNc(4,he,2,10,"div",8),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.steps),e.xp6(2),e.Q6J("ngForOf",t.steps)}}function me(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",15),e.GkF(1,9),e.TgZ(2,"div",16)(3,"div",17),e.NdJ("@verticalStepTransition.done",function(r){e.CHM(t);const a=e.oxw(2);return e.KtG(a._animationDone.next(r))}),e.TgZ(4,"div",18),e.GkF(5,13),e.qZA()()()()}if(2&n){const t=o.$implicit,i=o.index,r=o.last,a=e.oxw(2),Ce=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",Ce)("ngTemplateOutletContext",e.WLB(9,O,t,i)),e.xp6(1),e.ekj("mat-stepper-vertical-line",!r),e.xp6(1),e.Q6J("@verticalStepTransition",e.WLB(14,k,a._getAnimationDirection(i),e.VKq(12,w,a._getAnimationDuration())))("id",a._getStepContentId(i)),e.uIk("aria-labelledby",a._getStepLabelId(i))("aria-expanded",a.selectedIndex===i),e.xp6(2),e.Q6J("ngTemplateOutlet",t.content)}}function _e(n,o){if(1&n&&(e.ynx(0),e.YNc(1,me,6,17,"div",14),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.steps)}}function fe(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"mat-step-header",19),e.NdJ("click",function(){const a=e.CHM(t).step;return e.KtG(a.select())})("keydown",function(r){e.CHM(t);const a=e.oxw();return e.KtG(a._onKeydown(r))}),e.qZA()}if(2&n){const t=o.step,i=o.i,r=e.oxw();e.ekj("mat-horizontal-stepper-header","horizontal"===r.orientation)("mat-vertical-stepper-header","vertical"===r.orientation),e.Q6J("tabIndex",r._getFocusIndex()===i?0:-1)("id",r._getStepLabelId(i))("index",i)("state",r._getIndicatorType(i,t.state))("label",t.stepLabel||t.label)("selected",r.selectedIndex===i)("active",r._stepIsNavigable(i,t))("optional",t.optional)("errorMessage",t.errorMessage)("iconOverrides",r._iconOverrides)("disableRipple",r.disableRipple||!r._stepIsNavigable(i,t))("color",t.color||r.color),e.uIk("aria-posinset",i+1)("aria-setsize",r.steps.length)("aria-controls",r._getStepContentId(i))("aria-selected",r.selectedIndex==i)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null)("aria-disabled",!r._stepIsNavigable(i,t)||null)}}let f=(()=>{class n extends C{}return n.\u0275fac=function(){let o;return function(i){return(o||(o=e.n5z(n)))(i||n)}}(),n.\u0275dir=e.lG2({type:n,selectors:[["","matStepLabel",""]],features:[e.qOj]}),n})(),g=(()=>{class n{constructor(){this.changes=new S.x,this.optionalLabel="Optional",this.completedLabel="Completed",this.editableLabel="Editable"}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const ve={provide:g,deps:[[new e.FiY,new e.tp0,g]],useFactory:function ge(n){return n||new g}},xe=(0,d.pj)(class extends I{constructor(o){super(o)}},"primary");let E=(()=>{class n extends xe{constructor(t,i,r,a){super(r),this._intl=t,this._focusMonitor=i,this._intlSubscription=t.changes.subscribe(()=>a.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(t,i){t?this._focusMonitor.focusVia(this._elementRef,t,i):this._elementRef.nativeElement.focus(i)}_stringLabel(){return this.label instanceof f?null:this.label}_templateLabel(){return this.label instanceof f?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getIconContext(){return{index:this.index,active:this.active,optional:this.optional}}_getDefaultTextForState(t){return"number"==t?`${this.index+1}`:"edit"==t?"create":"error"==t?"warning":t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g),e.Y36(M.tE),e.Y36(e.SBq),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-step-header"]],hostAttrs:["role","tab",1,"mat-step-header"],inputs:{color:"color",state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple"},features:[e.qOj],decls:10,vars:19,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content",3,"ngSwitch"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngSwitchCase"],[3,"ngSwitch",4,"ngSwitchDefault"],[1,"mat-step-label"],["class","mat-step-text-label",4,"ngIf"],["class","mat-step-optional",4,"ngIf"],["class","mat-step-sub-label-error",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngSwitch"],["aria-hidden","true",4,"ngSwitchCase"],["class","cdk-visually-hidden",4,"ngIf"],["aria-hidden","true",4,"ngSwitchDefault"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[1,"mat-step-text-label"],[3,"ngTemplateOutlet"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"]],template:function(t,i){1&t&&(e._UZ(0,"div",0),e.TgZ(1,"div")(2,"div",1),e.YNc(3,K,1,2,"ng-container",2),e.YNc(4,ne,5,4,"ng-container",3),e.qZA()(),e.TgZ(5,"div",4),e.YNc(6,ie,2,1,"div",5),e.YNc(7,oe,2,1,"div",5),e.YNc(8,re,2,1,"div",6),e.YNc(9,ae,2,1,"div",7),e.qZA()),2&t&&(e.Q6J("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),e.xp6(1),e.Gre("mat-step-icon-state-",i.state," mat-step-icon"),e.ekj("mat-step-icon-selected",i.selected),e.xp6(1),e.Q6J("ngSwitch",!(!i.iconOverrides||!i.iconOverrides[i.state])),e.xp6(1),e.Q6J("ngSwitchCase",!0),e.xp6(2),e.ekj("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error","error"==i.state),e.xp6(1),e.Q6J("ngIf",i._templateLabel()),e.xp6(1),e.Q6J("ngIf",i._stringLabel()),e.xp6(1),e.Q6J("ngIf",i.optional&&"error"!=i.state),e.xp6(1),e.Q6J("ngIf","error"==i.state))},dependencies:[l.O5,l.tP,l.RF,l.n9,l.ED,D.Hw,d.wG],styles:[".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.cdk-high-contrast-active .mat-step-header{outline:solid 1px}.cdk-high-contrast-active .mat-step-header.cdk-keyboard-focused,.cdk-high-contrast-active .mat-step-header.cdk-program-focused{outline:solid 3px}.cdk-high-contrast-active .mat-step-header[aria-selected=true] .mat-step-label{text-decoration:underline}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],encapsulation:2,changeDetection:0}),n})();const R="500ms",z="225ms",A={horizontalStepTransition:(0,p.X$)("horizontalStepTransition",[(0,p.SB)("previous",(0,p.oB)({transform:"translate3d(-100%, 0, 0)",visibility:"hidden"})),(0,p.SB)("current",(0,p.oB)({transform:"none",visibility:"inherit"})),(0,p.SB)("next",(0,p.oB)({transform:"translate3d(100%, 0, 0)",visibility:"hidden"})),(0,p.eR)("* => *",(0,p.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)"),{params:{animationDuration:R}})]),verticalStepTransition:(0,p.X$)("verticalStepTransition",[(0,p.SB)("previous",(0,p.oB)({height:"0px",visibility:"hidden"})),(0,p.SB)("next",(0,p.oB)({height:"0px",visibility:"hidden"})),(0,p.SB)("current",(0,p.oB)({height:"*",visibility:"inherit"})),(0,p.eR)("* <=> current",(0,p.jt)("{{animationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)"),{params:{animationDuration:z}})])};let be=(()=>{class n{constructor(t){this.templateRef=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Rgc))},n.\u0275dir=e.lG2({type:n,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:["matStepperIcon","name"]}}),n})(),Se=(()=>{class n{constructor(t){this._template=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.Rgc))},n.\u0275dir=e.lG2({type:n,selectors:[["ng-template","matStepContent",""]]}),n})(),N=(()=>{class n extends y{constructor(t,i,r,a){super(t,a),this._errorStateMatcher=i,this._viewContainerRef=r,this._isSelected=V.w0.EMPTY}ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe((0,j.w)(()=>this._stepper.selectionChange.pipe((0,q.U)(t=>t.selectedStep===this),(0,_.O)(this._stepper.selected===this)))).subscribe(t=>{t&&this._lazyContent&&!this._portal&&(this._portal=new v.UE(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(t,i){return this._errorStateMatcher.isErrorState(t,i)||!!(t&&t.invalid&&this.interacted)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36((0,e.Gpc)(()=>H)),e.Y36(d.rD,4),e.Y36(e.s_b),e.Y36(T,8))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-step"]],contentQueries:function(t,i,r){if(1&t&&(e.Suo(r,f,5),e.Suo(r,Se,5)),2&t){let a;e.iGM(a=e.CRH())&&(i.stepLabel=a.first),e.iGM(a=e.CRH())&&(i._lazyContent=a.first)}},inputs:{color:"color"},exportAs:["matStep"],features:[e._Bn([{provide:d.rD,useExisting:n},{provide:y,useExisting:n}]),e.qOj],ngContentSelectors:le,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(t,i){1&t&&(e.F$t(),e.YNc(0,pe,2,1,"ng-template"))},dependencies:[v.Pl],encapsulation:2,changeDetection:0}),n})(),H=(()=>{class n extends m{constructor(t,i,r){super(t,i,r),this.steps=new e.n_E,this.animationDone=new e.vpe,this.labelPosition="end",this.headerPosition="top",this._iconOverrides={},this._animationDone=new S.x,this._animationDuration="";const a=r.nativeElement.nodeName.toLowerCase();this.orientation="mat-vertical-stepper"===a?"vertical":"horizontal"}get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t)?t+"ms":t}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:t,templateRef:i})=>this._iconOverrides[t]=i),this.steps.changes.pipe((0,u.R)(this._destroyed)).subscribe(()=>{this._stateChanged()}),this._animationDone.pipe((0,$.x)((t,i)=>t.fromState===i.fromState&&t.toState===i.toState),(0,u.R)(this._destroyed)).subscribe(t=>{"current"===t.toState&&this.animationDone.emit()})}_stepIsNavigable(t,i){return i.completed||this.selectedIndex===t||!this.linear}_getAnimationDuration(){return this.animationDuration?this.animationDuration:"horizontal"===this.orientation?R:z}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x.Is,8),e.Y36(e.sBO),e.Y36(e.SBq))},n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(t,i,r){if(1&t&&(e.Suo(r,N,5),e.Suo(r,be,5)),2&t){let a;e.iGM(a=e.CRH())&&(i._steps=a),e.iGM(a=e.CRH())&&(i._icons=a)}},viewQuery:function(t,i){if(1&t&&e.Gf(E,5),2&t){let r;e.iGM(r=e.CRH())&&(i._stepHeader=r)}},hostAttrs:["role","tablist"],hostVars:11,hostBindings:function(t,i){2&t&&(e.uIk("aria-orientation",i.orientation),e.ekj("mat-stepper-horizontal","horizontal"===i.orientation)("mat-stepper-vertical","vertical"===i.orientation)("mat-stepper-label-position-end","horizontal"===i.orientation&&"end"==i.labelPosition)("mat-stepper-label-position-bottom","horizontal"===i.orientation&&"bottom"==i.labelPosition)("mat-stepper-header-position-bottom","bottom"===i.headerPosition))},inputs:{selectedIndex:"selectedIndex",disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[e._Bn([{provide:m,useExisting:n}]),e.qOj],decls:5,vars:3,consts:[[3,"ngSwitch"],["class","mat-horizontal-stepper-wrapper",4,"ngSwitchCase"],[4,"ngSwitchCase"],["stepTemplate",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-horizontal-stepper-header-container"],[4,"ngFor","ngForOf"],[1,"mat-horizontal-content-container"],["class","mat-horizontal-stepper-content","role","tabpanel",3,"id",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","mat-stepper-horizontal-line",4,"ngIf"],[1,"mat-stepper-horizontal-line"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[3,"ngTemplateOutlet"],["class","mat-step",4,"ngFor","ngForOf"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","tabpanel",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color","click","keydown"]],template:function(t,i){1&t&&(e.ynx(0,0),e.YNc(1,ue,5,2,"div",1),e.YNc(2,_e,2,1,"ng-container",2),e.BQk(),e.YNc(3,fe,1,23,"ng-template",null,3,e.W1O)),2&t&&(e.Q6J("ngSwitch",i.orientation),e.xp6(1),e.Q6J("ngSwitchCase","horizontal"),e.xp6(1),e.Q6J("ngSwitchCase","vertical"))},dependencies:[l.sg,l.O5,l.tP,l.RF,l.n9,E],styles:['.mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container{order:1}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:"";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-wrapper{display:flex;flex-direction:column}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.cdk-high-contrast-active .mat-horizontal-content-container{outline:solid 1px}.mat-stepper-header-position-bottom .mat-horizontal-content-container{padding:24px 24px 0 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}.cdk-high-contrast-active .mat-vertical-content-container{outline:solid 1px}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:"";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}'],encapsulation:2,data:{animation:[A.horizontalStepTransition,A.verticalStepTransition]},changeDetection:0}),n})(),ye=(()=>{class n extends G{}return n.\u0275fac=function(){let o;return function(i){return(o||(o=e.n5z(n)))(i||n)}}(),n.\u0275dir=e.lG2({type:n,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(t,i){2&t&&e.Ikx("type",i.type)},inputs:{type:"type"},features:[e.qOj]}),n})(),Me=(()=>{class n extends J{}return n.\u0275fac=function(){let o;return function(i){return(o||(o=e.n5z(n)))(i||n)}}(),n.\u0275dir=e.lG2({type:n,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(t,i){2&t&&e.Ikx("type",i.type)},inputs:{type:"type"},features:[e.qOj]}),n})(),Ie=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[ve,d.rD],imports:[d.BQ,l.ez,v.eL,U.ot,Z,D.Ps,d.si,d.BQ]}),n})()}}]);