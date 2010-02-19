YUI.add("gallery-jsonp",function(D){var A=D.Lang.isObject,C=D.Lang.isFunction;function B(){this._init.apply(this,arguments);}B._pattern=/\bcallback=(.*?)(?=&|$)/i;B._template="callback={callback}";B.prototype={_init:function(E,F){this.url=E;F=F||{};if(C(F)){F={on:{success:F}};}F.on=F.on||{};if(!F.on.success){F.on.success=this._getCallbackFromUrl(E);}this._config=D.merge({on:{},context:this,args:[],format:this._format},F);},_getCallbackFromUrl:function(F){var E=F.match(B._pattern),J,H,I,G;if(E){H=D.config.win;I=E[1].split(/\./).reverse();J=I.shift();for(G=I.length-1;G>=0;--G){H=H[I[G]];if(!A(H)){return null;}}if(A(H)&&C(H[J])){return D.bind(H[J],H);}}return null;},send:function(I){if(!this._config.on.success){return this;}var G=D.guid().replace(/-/g,"_"),F=this._config,E=F.format.call(this,this.url,"YUI.Env.JSONP."+G);function H(J){return(C(J))?function(K){delete YUI.Env.JSONP[G];J.apply(F.context,[K].concat(F.args));}:null;}YUI.Env.JSONP[G]=H(F.on.success);D.Get.script(E,{onFailure:H(F.on.failure),onTimeout:H(F.on.timeout||F.on.failure),timeout:F.timeout});return this;},_format:function(E,G){var H=B._template.replace(/\{callback\}/,G),F;if(B._pattern.test(E)){return E.replace(B._pattern,H);}else{F=E.slice(-1);if(F!=="&"&&F!=="?"){E+=(E.indexOf("?")>-1)?"&":"?";}return E+H;}}};D.JSONPRequest=B;D.jsonp=function(E,F){return new D.JSONPRequest(E,F).send();};YUI.Env.JSONP={};},"gallery-2010.02.10-01",{requires:["get","oop"]});