var __reflect=this&&this.__reflect||function(t,e,r){t.__class__=e,r?r.push(e):r=[e],t.__types__=t.__types__?r.concat(t.__types__):r},__extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);r.prototype=e.prototype,t.prototype=new r},__awaiter=this&&this.__awaiter||function(t,e,r,i){return new(r||(r=Promise))(function(s,a){function n(t){try{h(i.next(t))}catch(e){a(e)}}function o(t){try{h(i["throw"](t))}catch(e){a(e)}}function h(t){t.done?s(t.value):new r(function(e){e(t.value)}).then(n,o)}h((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function r(t){return function(e){return i([t,e])}}function i(r){if(s)throw new TypeError("Generator is already executing.");for(;h;)try{if(s=1,a&&(n=a[2&r[0]?"return":r[0]?"throw":"next"])&&!(n=n.call(a,r[1])).done)return n;switch(a=0,n&&(r=[0,n.value]),r[0]){case 0:case 1:n=r;break;case 4:return h.label++,{value:r[1],done:!1};case 5:h.label++,a=r[1],r=[0];continue;case 7:r=h.ops.pop(),h.trys.pop();continue;default:if(n=h.trys,!(n=n.length>0&&n[n.length-1])&&(6===r[0]||2===r[0])){h=0;continue}if(3===r[0]&&(!n||r[1]>n[0]&&r[1]<n[3])){h.label=r[1];break}if(6===r[0]&&h.label<n[1]){h.label=n[1],n=r;break}if(n&&h.label<n[2]){h.label=n[2],h.ops.push(r);break}n[2]&&h.ops.pop(),h.trys.pop();continue}r=e.call(t,h)}catch(i){r=[6,i],a=0}finally{s=n=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var s,a,n,o,h={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,r){function i(i){e.call(r,i,t)}if(RES.hasRes(t)){var s=RES.getRes(t);s?i(s):RES.getResAsync(t,i,this)}else RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Effect=function(t){function e(e,r,i){var s=t.call(this)||this;return s.stype=0,s.init(e,r,i),s}return __extends(e,t),e.prototype.init=function(t,e,r){this.x=Game.spriteBaseX+Game.spriteW*t+Game.spriteW/2,this.y=Game.spriteBaseY+Game.spriteH*e+Game.spriteH/2,this.stype=r,this.drawEffect()},e.prototype.drawEffect=function(){var t=1500;this.graphics.beginFill(Game.stypeColor[this.stype]),this.graphics.drawCircle(0,0,Game.spriteR),this.graphics.endFill(),egret.Tween.get(this).to({scaleX:2,scaleY:2,alpha:0},t,egret.Ease.bounceOut);var e=new egret.Timer(t+100,0);e.addEventListener(egret.TimerEvent.TIMER,this.removeFromParent,this)},e.prototype.removeFromParent=function(){this.parent&&this.parent.removeChild(this)},e}(egret.Shape);__reflect(Effect.prototype,"Effect");var Game=function(){function t(){}return t.random=function(t,e){return parseInt(Math.random()*(e-t+1)+t)},t.uniq=function(t){var e,r=[],i=t.length;for(e=0;i>e;e++)r.indexOf(t[e])<0&&r.push(t[e]);return r},t.init=function(e){t.spriteH=t.spriteW=(e.stage.stageWidth-2*t.spriteBaseX)/t.colamount,t.spriteR=t.spriteH/2*.7,t.spriteBaseX=t.paddingLeftRight,t.spriteBaseY=e.stage.stageHeight-t.paddingBottom-t.rowamount*t.spriteH},t.printArray=function(t){console.log(JSON.stringify(t))},t.rowamount=8,t.colamount=6,t.spriteTypeAmount=5,t.stypeColor=[170,10117855,2674057,15556974,15385098],t.paddingLeftRight=20,t.paddingTop=100,t.paddingBottom=40,t.spriteBaseX=20,t.spriteBaseY=20,t.spriteW=120,t.spriteH=120,t.spriteR=55,t}();__reflect(Game.prototype,"Game");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lines=[],e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return[4,this.loadResource()];case 1:return r.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=r.sent(),[4,platform.login()];case 3:return r.sent(),[4,platform.getUserInfo()];case 4:return e=r.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,this.loadTheme()];case 2:return r.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return r.sent(),this.stage.removeChild(t),[3,5];case 4:return e=r.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,r){var i=new eui.Theme("resource/default.thm.json",t.stage);i.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){var t=this.createBitmapByName("bg_jpg");this.addChild(t);var e=this.stage.stageWidth,r=this.stage.stageHeight;t.width=e,t.height=r;var i=new egret.Shape;i.graphics.beginFill(0,.5),i.graphics.drawRect(0,0,e,172),i.graphics.endFill(),i.y=33,this.addChild(i);var s=this.createBitmapByName("egret_icon_png");this.addChild(s),s.x=26,s.y=33;var a=new egret.Shape;a.graphics.lineStyle(2,16777215),a.graphics.moveTo(0,0),a.graphics.lineTo(0,117),a.graphics.endFill(),a.x=172,a.y=61,this.addChild(a);var n=new egret.TextField;n.textColor=16777215,n.width=e-172,n.textAlign="center",n.text="2019.6.3 - 2019.6.4 by yangshuai",n.size=24,n.x=172,n.y=80,this.addChild(n),Game.init(this);var o=new Map;o.initMap(this),this.map=o,this.bindEvent()},e.prototype.bindEvent=function(){this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchbeginHandler,this)},e.prototype.touchbeginHandler=function(t){return this.startcol=Math.floor((t.stageX-Game.spriteBaseX)/Game.spriteW),this.startrow=Math.floor((t.stageY-Game.spriteBaseY)/Game.spriteH),this.startcol<0||this.startrow<0||this.startcol>Game.colamount-1||this.startrow>Game.rowamount-1?void this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchmoveHandler,this):(this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchmoveHandler,this),this.addEventListener(egret.TouchEvent.TOUCH_END,this.touchupHandler,this),this.starttype=this.map.matrix[this.startrow][this.startcol],void this.addTouchLine(this.startcol,this.startrow,this.starttype))},e.prototype.touchmoveHandler=function(t){var e=Math.floor((t.stageX-Game.spriteBaseX)/Game.spriteW),r=Math.floor((t.stageY-Game.spriteBaseY)/Game.spriteH),i=this.map.matrix[r][e],s=t.stageX-Game.spriteBaseX-e*Game.spriteW-Game.spriteW/2,a=t.stageY-Game.spriteBaseY-r*Game.spriteH-Game.spriteH/2,n=Math.pow(s,2),o=Math.pow(a,2),h=Math.pow(Game.spriteR,2);n+o>h||(i!=this.starttype||this.map.sprites[r][e].selected||(this.startrow==r&&1==Math.abs(this.startcol-e)||this.startcol==e&&1==Math.abs(this.startrow-r)||1==Math.abs(this.startcol-e)&&1==Math.abs(this.startrow-r))&&(this.curline.moveToGrid(e,r),this.addTouchLine(e,r,this.starttype),this.startcol=e,this.startrow=r),this.curline.moveTo(t.stageX,t.stageY))},e.prototype.touchupHandler=function(){console.log("初始 "+this.map.matrix),Game.printArray(this.map.matrix);for(var t=0;t<this.lines.length;t++){var e=this.lines[t];this.removeChild(e),this.map.sprites[e.startrow][e.startcol].selected=!1,console.log("重置touchlines "+e.startcol+"  "+e.startrow)}this.lines.length>1&&(this.map.bomb(this.lines),this.map.drop(),this.map.supplement()),this.lines=[],this.curline=null,console.log("标记 "+this.map.matrix),this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchmoveHandler,this),this.removeEventListener(egret.TouchEvent.TOUCH_END,this.touchupHandler,this)},e.prototype.addTouchLine=function(t,e,r){var i=new TouchLine(t,e,r);this.addChild(i),this.lines.push(i),this.curline=i,this.map.sprites[e][t].selected=!0;var s=new Effect(t,e,r);this.addChild(s),console.log("addTouchLine "+t+"  "+e+" "+r)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,r=RES.getRes(t);return e.texture=r,e},e.prototype.onButtonClick=function(t){var e=new eui.Panel;e.title="Title",e.horizontalCenter=0,e.verticalCenter=0,this.addChild(e)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var Map=function(){function t(){}return t.prototype.initMap=function(t){this.scene=t,this.matrix=function(){for(var t=[],e=0;e<Game.rowamount;e++){for(var r=[],i=0;i<Game.colamount;i++)r.push(Game.random(0,Game.spriteTypeAmount-1));t.push(r)}return t.push([]),console.log(t),t}(),this.createSpritesByMatrix()},t.prototype.createSpritesByMatrix=function(){this.sprites=[];for(var t=0;t<Game.rowamount;t++){for(var e=[],r=0;r<Game.colamount;r++)e.push(new Sprite(r,t,this.matrix[t][r]));this.sprites.push(e)}for(var t=0;t<Game.rowamount;t++)for(var r=0;r<Game.colamount;r++)this.scene.addChild(this.sprites[t][r])},t.prototype.bomb=function(t){for(var e=0;e<t.length;e++)this.matrix[t[e].startrow][t[e].startcol]="■",this.sprites[t[e].startrow][t[e].startcol].bomb()},t.prototype.drop=function(){this.dropnumber=[[],[],[],[],[],[],[],[]];for(var t=Game.rowamount-1;t>=0;t--)for(var e=0;e<Game.colamount;e++){for(var r=0,i=t+1;i<Game.rowamount;i++)"■"==this.matrix[i][e]&&r++;if(this.dropnumber[t][e]=r,r>0&&"■"!=this.matrix[t][e]&&(console.log("drop move to "+e+"  "+t+" "+(t+r)),this.sprites[t][e].moveTo(e,t+r)),0!=r){this.matrix[t+r][e]=this.matrix[t][e],this.matrix[t][e]="■";var s=this.sprites[t+r][e];this.sprites[t+r][e]=this.sprites[t][e],this.sprites[t][e]=s}}console.log("最终 "+this.matrix)},t.prototype.supplement=function(){for(var t=0;t<Game.rowamount;t++)for(var e=0;e<Game.colamount;e++)if("■"==this.matrix[t][e]){var r=Game.random(0,Game.spriteTypeAmount-1);this.sprites[t][e].init(e,t,r),this.sprites[t][e].y-=4*Game.spriteH,this.sprites[t][e].moveTo(e,t),this.matrix[t][e]=r}},t}();__reflect(Map.prototype,"Map");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var Sprite=function(t){function e(e,r,i){var s=t.call(this)||this;return s.stype=0,s.selected=!1,s.init(e,r,i),s}return __extends(e,t),e.prototype.init=function(t,e,r){this.x=Game.spriteBaseX+Game.spriteW*t+Game.spriteW/2,this.y=Game.spriteBaseY+Game.spriteH*e+Game.spriteH/2,this.stype=r,console.log(this.x,this.y),this.drawSprite()},e.prototype.drawSprite=function(){this.graphics.beginFill(Game.stypeColor[this.stype]),this.graphics.drawCircle(0,0,Game.spriteR),this.graphics.endFill()},e.prototype.moveTo=function(t,e){var r=Game.spriteBaseX+t*Game.spriteW+Game.spriteW/2,i=Game.spriteBaseY+e*Game.spriteH+Game.spriteH/2;egret.Tween.get(this).to({x:r,y:i},300,egret.Ease.sineIn)},e.prototype.bomb=function(){this.graphics.clear(),this.graphics.endFill()},e}(egret.Shape);__reflect(Sprite.prototype,"Sprite");var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,r,i){function s(t){e.call(i,t)}function a(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),r.call(i))}var n=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(i,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,r){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(i,generateEUI2)},n)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var o=t.split("/");o.pop();var h=o.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(i,generateJSON.paths[t])},this):RES.getResByUrl(h,function(r){window.JSONParseClass.setData(r),egret.callLater(function(){e.call(i,generateJSON.paths[t])},n)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(i,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(t,s,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var TouchLine=function(t){function e(e,r,i){var s=t.call(this)||this;return s.stype=0,s.endcol=s.startcol=e,s.endrow=s.startrow=r,s.startX=Game.spriteBaseX+Game.spriteW*e+Game.spriteW/2,s.startY=Game.spriteBaseY+Game.spriteH*r+Game.spriteH/2,s.stype=i,s.drawLine(),s}return __extends(e,t),e.prototype.drawLine=function(){this.graphics.lineStyle(20,Game.stypeColor[this.stype]),this.graphics.moveTo(this.startX,this.startY),this.graphics.lineTo(this.startX,this.startY)},e.prototype.moveTo=function(t,e){this.graphics.clear(),this.graphics.lineStyle(30,Game.stypeColor[this.stype]),this.graphics.moveTo(this.startX,this.startY),this.graphics.lineTo(t,e)},e.prototype.moveToGrid=function(t,e){this.endcol=t,this.endrow=e,this.moveTo(Game.spriteBaseX+Game.spriteW*t+Game.spriteW/2,Game.spriteBaseY+Game.spriteW*e+Game.spriteW/2)},e}(egret.Shape);__reflect(TouchLine.prototype,"TouchLine");