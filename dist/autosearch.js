!function(t,i){"function"==typeof define&&define.amd?define(["$"],i):"object"==typeof exports?module.exports=i():t.AutoSearch=i(window.Zepto||window.jQuery||$)}(this,function(t){function i(){}return i.prototype={init:function(i){var n=Math.random().toString().replace(".","");this.id="autosearch_"+n,this.settings=i||{},this.input=t(this.settings.input),this.min=this.settings.min||1,this.data=this.settings.data,this.valueObj=t(this.settings.valueObj||this.settings.input),this.valueName=this.settings.valueName||"name",this.target=t(this.settings.target||this.settings.input),this.filterColumn=this.settings.filterColumn||["name"],this.column=this.settings.column||["name"],this.timer=null,this.content=null,this.createContent(),this.bindEvent()},bindEvent:function(){var i=this;this.target.click(function(){return i.settings.autoShow&&i.search(),!1}),this.input.on("focus",function(){var n=t(this);i.timer&&clearInterval(i.timer),i.timer=setInterval(function(){n.data("old")!=n.val()&&(i.search(),n.data("old",n.val()))},25),i.settings.focusCallback&&i.settings.focusCallback.call(i,i.input)}).on("keyup",function(t){input.data("old")!=input.val()&&(i.search(),input.data("old",input.val()))}).on("blur",function(){i.timer&&clearInterval(i.timer),i.settings.blurCallback&&i.settings.blurCallback.call(i,i.input)}),this.content.on("click",".item",function(){var n=t(this).data("data");i.valueObj.val(1==i.settings.mutil?i.valueObj.val()+n[i.valueName]+",":n[i.valueName]),i.settings.callback&&i.settings.callback.call(i,n),i.hide()}),t(document).click(function(){i.hide()})},createContent:function(){0==t("#"+this.id).size()&&(this.content=t('<div id="'+this.id+'" class="ui-autosearch-content"/>'),this.content.hide(),t("body").append(this.content))},show:function(){var t=this;t.content.show(),t.content.css({position:"absolute",zIndex:t.settings.zIndex||999,width:t.input.outerWidth()}),t.setPostion(),t.postimer=setInterval(function(){t.setPostion()},20),t.settings.showCallback&&t.settings.showCallback.call(t,t.input,t.content)},hide:function(){this.postimer&&clearInterval(this.postimer),this.content.hide()},search:function(){var t=this,i=t.input.val().split(",").pop();if(i>=t.min||t.settings.autoShow)if("function"==typeof t.data)t.getData();else{var n=t.filter(t.data);t.format(n),t.show()}else t.hide()},getData:function(){var t=this;this.settings.data(function(i){t.format(i),t.show()})},format:function(i){this.content.html("");for(var n=0,s=i.length;s>n;n++){var e=i[n],a=t();if(this.settings.format)a=t(this.settings.format.call(this,e));else{for(var o="",l=0,c=this.column.length;c>l;l++)o+='<span class="'+this.column[l]+'">'+e[this.column[l]]+"</span>";a=t('<div class="item">'+o+"</div>")}a.data("data",e),this.content.append(a)}},filter:function(t){for(var i=this,n=i.input.val().split(",").pop(),s=[],e=0,a=t.length;a>e;e++)for(var o=t[e],l=0,c=this.filterColumn.length;c>l;l++){var h=o[this.filterColumn[l]];-1!=h.toString().indexOf(n)&&s.push(o)}return s},setPostion:function(){var t=this,i=t.input.offset();t.content.css({top:i.top+t.input.outerHeight(),left:i.left})}},i});