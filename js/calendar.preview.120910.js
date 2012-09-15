$.calendar = {
    //国历节日 *表示节假日
    sFtv : new Array(
        "0101*元旦",
        "0214 情人节",
        "0308 妇女节",
        "0312 植树节",
        "0315 消费者权益日",
        "0321 世界森林日、世界儿歌日",
        "0322 世界水日",
        "0323 世界气象日",
        "0324 世界防治结核病日",
        
        "0401 愚人节",
        "0407 世界卫生日",
        "0422 世界地球日",
        
        "0501*劳动节",
        "0504 青年节",
        "0505 碘缺乏病防治日",
        "0508 世界红十字日",
        "0512 国际护士节",
        "0515 国际家庭日",
        "0517 世界电信日",
        "0518 国际博物馆日",
        "0520 全国学生营养日",
        "0523 国际牛奶日",
        "0531 世界无烟日",
        
        "0601 儿童节",
        "0605 世界环境日",
        "0606 全国爱眼日",
        "0616 防治荒漠化和干旱日",
        "0623 国际奥林匹克日",
        "0625 全国土地日",
        "0626 国际反毒品日",
        
        "0701 建党节 香港回归纪念 国际建筑日",
        "0707 中国人民抗日战争纪念日",
        "0711 世界人口日",
    
        "0801 建军节",
        "0808 父亲节",
        
        "0908 国际扫盲日",
        "0909 毛泽东逝世纪念",
        "0910 教师节",
        "0916 国际臭氧层保护日",
        "0920 国际爱牙日",
        "0927 世界旅游日",
        "0928 孔子诞辰",
        
        "1001*国庆节 国际音乐日",
        "1004 世界动物日",
        "1006 老人节",
        "1008 全国高血压日 世界视觉日",
        "1009 世界邮政日",
        "1015 国际盲人节",
        "1016 世界粮食日",
        "1017 世界消除贫困日",
        "1024 联合国日",
        
        "1108 中国记者日",
        "1109 消防宣传日",
        "1112 孙中山诞辰纪念",
        "1114 世界糖尿病日",
        "1117 国际大学生节",

        "1201 世界艾滋病日",
        "1203 世界残疾人日",
        "1209 世界足球日",
        "1220 澳门回归纪念",
        "1225 圣诞节",
        "1226 毛泽东诞辰纪念",
        "1229 国际生物多样性日"
        )

    //农历节日 *表示节假日
    ,lFtv :new Array(
        "0101*春节",
        "0115 元宵节",
        "0505 端午节",
        "0506 立夏节",
        "0606 天贶节",
        "0707 七夕情人节",
        "0715 中元节(鬼节)",
        "0815 中秋节",
        "0909 重阳节",
        "1001 祭祖节",
        "1208 腊八节",
        "1223 小年",
        "0100*除夕"
        )

    //按周计算 月周日
    ,wFtv:new Array(
        "0520 国际母亲节",
        "0530 全国助残日",
        "0630 国际父亲节",
        "0932 国际和平日",
        "0940 国际聋人节",
        "1013 国际减轻自然灾害日",
        "1011 国际住房日"
        )
    ,SolarTerm:function(DateGL){
        var SolarTermStr=new Array(
            "小寒","大寒","立春","雨水","惊蛰","春分",
            "清明","谷雨","立夏","小满","芒种","夏至",
            "小暑","大暑","立秋","处暑","白露","秋分",
            "寒露","霜降","立冬","小雪","大雪","冬至");
        var DifferenceInMonth=new Array(
            1272060,1275495,1281180,1289445,1299225,1310355,
            1321560,1333035,1342770,1350855,1356420,1359045,
            1358580,1355055,1348695,1340040,1329630,1318455,
            1306935,1297380,1286865,1277730,1274550,1271556);
        var DifferenceInYear=31556926;
        var BeginTime=new Date(1901/1/1);
        BeginTime.setTime(947120460000);
        for(;DateGL.getFullYear()<BeginTime.getFullYear();){
            BeginTime.setTime(BeginTime.getTime()-DifferenceInYear*1000);
        }
        for(;DateGL.getFullYear()>BeginTime.getFullYear();){
            BeginTime.setTime(BeginTime.getTime()+DifferenceInYear*1000);
        }
        for(var M=0;DateGL.getMonth()>BeginTime.getMonth();M++){
            BeginTime.setTime(BeginTime.getTime()+DifferenceInMonth[M]*1000);
        }
        if(DateGL.getDate()>BeginTime.getDate()){
            BeginTime.setTime(BeginTime.getTime()+DifferenceInMonth[M]*1000);
            M++;
        }
        if(DateGL.getDate()>BeginTime.getDate()){
            BeginTime.setTime(BeginTime.getTime()+DifferenceInMonth[M]*1000);
            M==23?M=0:M++;
        }
        var JQ;
        if(DateGL.getDate()==BeginTime.getDate()){
            JQ="今日<span>"+SolarTermStr[M] + "</span>";
        }else if(DateGL.getDate()==BeginTime.getDate()-1){
            JQ="明日<span>"+SolarTermStr[M] + "</span>";
        }else if(DateGL.getDate()==BeginTime.getDate()-2){
            JQ="后日<span>"+SolarTermStr[M] + "</span>";
        }else{
            JQ=" ";
            if(DateGL.getMonth()==BeginTime.getMonth()){
                JQ+="本月";
            }else{
                JQ+="下月";
            }
            JQ+=BeginTime.getDate()+"日"+"<span>"+SolarTermStr[M]+"<span>";
        }
        return JQ;
    }
    ,DaysNumberofDate:function(DateGL){
        var y1 = DateGL.getFullYear();
        return parseInt((Date.parse(DateGL)-Date.parse(y1+"/1/1"))/86400000)+1;
    }
    ,CnEra:function(YYYY){
        var Tiangan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
        //var Dizhi=new Array("子(鼠)","丑(牛)","寅(虎)","卯(兔)","辰(龙)","巳(蛇)",
                        //"午(马)","未(羊)","申(猴)","酉(鸡)","戌(狗)","亥(猪)");
        var Dizhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
        return Tiangan[YYYY%10]+Dizhi[YYYY%12];
    }
    ,CnYearofDate:function(DateGL){
        var YYYY= DateGL.getFullYear();
        var MM=DateGL.getMonth()+1;
        var CnMM=parseInt(Math.abs($.calendar.CnDateofDate(DateGL))/100);
        if(YYYY<100) YYYY+=1900;
        if(CnMM>MM) YYYY--;
        YYYY-=1864;
        return $.calendar.CnEra(YYYY)+"年";
    }
    ,CnDateofDate:function(DateGL){
        var CnData=new Array(
        0x16,0x2a,0xda,0x00,0x83,0x49,0xb6,0x05,0x0e,0x64,0xbb,0x00,0x19,0xb2,0x5b,0x00,
        0x87,0x6a,0x57,0x04,0x12,0x75,0x2b,0x00,0x1d,0xb6,0x95,0x00,0x8a,0xad,0x55,0x02,
        0x15,0x55,0xaa,0x00,0x82,0x55,0x6c,0x07,0x0d,0xc9,0x76,0x00,0x17,0x64,0xb7,0x00,
        0x86,0xe4,0xae,0x05,0x11,0xea,0x56,0x00,0x1b,0x6d,0x2a,0x00,0x88,0x5a,0xaa,0x04,
        0x14,0xad,0x55,0x00,0x81,0xaa,0xd5,0x09,0x0b,0x52,0xea,0x00,0x16,0xa9,0x6d,0x00,
        0x84,0xa9,0x5d,0x06,0x0f,0xd4,0xae,0x00,0x1a,0xea,0x4d,0x00,0x87,0xba,0x55,0x04
        );
        var CnMonth=new Array();
        var CnMonthDays=new Array();
        var CnBeginDay;
        var LeapMonth;
        var Bytes=new Array();
        var I;
        var CnMonthData;
        var DaysCount;
        var CnDaysCount;
        var ResultMonth;
        var ResultDay;
        var yyyy=DateGL.getFullYear();
        //var mm=DateGL.getMonth()+1;
        //var dd=DateGL.getDate();
        if(yyyy<100) yyyy+=1900;
        if ((yyyy < 1997) || (yyyy > 2020)){
            return 0;
        }
        Bytes[0] = CnData[(yyyy - 1997) * 4];
        Bytes[1] = CnData[(yyyy - 1997) * 4 + 1];
        Bytes[2] = CnData[(yyyy - 1997) * 4 + 2];
        Bytes[3] = CnData[(yyyy - 1997) * 4 + 3];
        if ((Bytes[0] & 0x80) != 0) {CnMonth[0] = 12;}
        else {CnMonth[0] = 11;}
        CnBeginDay = (Bytes[0] & 0x7f);
        CnMonthData = Bytes[1];
        CnMonthData = CnMonthData << 8;
        CnMonthData = CnMonthData | Bytes[2];
        LeapMonth = Bytes[3];
        for (I=15;I>=0;I--){
            CnMonthDays[15 - I] = 29;
            if (((1 << I) & CnMonthData) != 0 ){
                CnMonthDays[15 - I]++;
            }
            if (CnMonth[15 - I] == LeapMonth ){
                CnMonth[15 - I + 1] = - LeapMonth;
            }else{
                if (CnMonth[15 - I] < 0 ){CnMonth[15 - I + 1] = - CnMonth[15 - I] + 1;}
                else {CnMonth[15 - I + 1] = CnMonth[15 - I] + 1;}
                if (CnMonth[15 - I + 1] > 12 ){ CnMonth[15 - I + 1] = 1;}
            }
        }
        DaysCount = $.calendar.DaysNumberofDate(DateGL) - 1;
        if (DaysCount <= (CnMonthDays[0] - CnBeginDay)){
            if ((yyyy > 1901) && ($.calendar.CnDateofDate(new Date((yyyy - 1)+"/12/31")) < 0)){
                ResultMonth = - CnMonth[0];
            }else{
                ResultMonth = CnMonth[0];
            }
            ResultDay = CnBeginDay + DaysCount;
        }else{
            CnDaysCount = CnMonthDays[0] - CnBeginDay;
            I = 1;
            while ((CnDaysCount < DaysCount) && (CnDaysCount + CnMonthDays[I] < DaysCount)){
                CnDaysCount+= CnMonthDays[I];
                I++;
            }
            ResultMonth = CnMonth[I];
            ResultDay = DaysCount - CnDaysCount;
        }
        if (ResultMonth > 0){
            return ResultMonth * 100 + ResultDay;
        }else{
            return ResultMonth * 100 - ResultDay;
        }
    }
    ,CnYearofDate:function(DateGL){
        var YYYY= DateGL.getFullYear();
        var MM=DateGL.getMonth()+1;
        var CnMM=parseInt(Math.abs($.calendar.CnDateofDate(DateGL))/100);
        if(YYYY<100) YYYY+=1900;
        if(CnMM>MM) YYYY--;
        YYYY-=1864;
        return $.calendar.CnEra(YYYY)+"年";
    }
    ,CnMonthofDate:function(DateGL){
        var  CnMonthStr=new Array("零","正","二","三","四","五","六","七","八","九","十","冬","腊");
        var  Month;
        Month = parseInt($.calendar.CnDateofDate(DateGL)/100);
        if (Month < 0){
            return {number:-Month,text:"闰" + CnMonthStr[-Month] + "月"};
        }else{
            return {number:Month,text:CnMonthStr[Month] + "月"};
        }
    }
    ,CnDayofDate:function(DateGL){
        var CnDayStr=new Array("零",
            "初一", "初二", "初三", "初四", "初五",
            "初六", "初七", "初八", "初九", "初十",
            "十一", "十二", "十三", "十四", "十五",
            "十六", "十七", "十八", "十九", "二十",
            "廿一", "廿二", "廿三", "廿四", "廿五",
            "廿六", "廿七", "廿八", "廿九", "三十");
        var Day;
        Day = (Math.abs($.calendar.CnDateofDate(DateGL)))%100;
        return {number:Day,text:CnDayStr[Day]};
    }
    ,today:new Date()
    ,detail:function(DateGL){
        if(typeof DateGL == "string"){
            DateGL = DateGL.toDate();
        };
        var ret = {};
        ret.value = DateGL.pattern("yyyy-MM-dd");
        DateGL.getFullYear()==$.calendar.today.getFullYear() && DateGL.getMonth()==$.calendar.today.getMonth() && DateGL.getDate()==$.calendar.today.getDate() && (ret.today = true);
        ret.cnYear = "农历"+$.calendar.CnYearofDate(DateGL);
        ret.cnMonth = $.calendar.CnMonthofDate(DateGL);
        ret.cnDay = $.calendar.CnDayofDate(DateGL);
        ret.solarTerm = $.calendar.SolarTerm(DateGL);
        for(i in $.calendar.sFtv)
            if($.calendar.sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
                if(Number(RegExp.$1)==(DateGL.getMonth()+1)) {
                    if(Number(RegExp.$2)==DateGL.getDate()){
                        ret.holiday = RegExp.$4;
                        if(RegExp.$3=='*'){
                            ret.imp = true;
                        }
                    }
                }
        for(i in $.calendar.lFtv)  
            if($.calendar.lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/))
                if(Number(RegExp.$1)==ret.cnMonth.number) {
                    if(Number(RegExp.$2)==ret.cnDay.number){
                        if(!!ret.holiday){
                           ret.holiday += " "+RegExp.$4;
                        }else{
                            ret.holiday = RegExp.$4;
                        }
                        ret.cn = true;
                        if(RegExp.$3=='*'){
                            ret.imp = true;
                        }
                    }
                }
        for(i in $.calendar.wFtv)
            if($.calendar.wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
                if(Number(RegExp.$1)==(DateGL.getMonth()+1)) {
                    if(Number(RegExp.$3)==DateGL.getDay()){
                        if(Number(RegExp.$2)==Math.floor((DateGL.getDate()+6)/7)){
                            if(!!ret.holiday){
                               ret.holiday += " "+RegExp.$5;
                            }else{
                                ret.holiday = RegExp.$5;
                            }
                            if(RegExp.$4=='*'){
                                ret.imp = true;
                            }
                        }
                    }
                }
        var tmp = "农历";
        tmp += ret.cnMonth.text;
        tmp += ret.cnDay.text;
        (ret.solarTerm == "今日<span>清明</span>") && (ret.holiday = '清明节') && (ret.cn = true);
        !!ret.holiday || (tmp+= "&nbsp;&nbsp;"+ret.solarTerm);
        !!ret.holiday && (tmp+="&nbsp;&nbsp;今日<span>"+ret.holiday+"</span>");
        ret.text = tmp;
        return ret;
    }
    ,counter:0
};
$.fn.extend({
    calendar:function(x){
        var d_x = {count:2,debug:!1,showHoliday:!0,yearRange:true,monthRange:false};
        x = $.extend(d_x,x);
        var m=null,n=null,w=null,_w=null,id=null;
        function K(){
            var z;
            $.calendar.counter++;
            id = $.calendar.counter;
            m = L();
            z = new Date();z.setDate(1);m.data("sd",z);
            T();
            n.focus(function(){
                var s = n.val(),t,u,_s = [];
				if(!!s){
					u = s.toDate();
				}else{
					u = new Date();
				}
                u.setDate(1);
                t = m.data("sd");t.setFullYear(u.getFullYear());t.setMonth(u.getMonth());
                for(var i = 0;i<x.count;i++){
                    t = u.pattern('yyyyMM');
                    t = m.find("#c"+id+t);
                    if(!t.length){
                        t = H(u);
                        m.find(".content").append(t);
                    };
                    u.setMonth(u.getMonth()+1);
                    _s.push(t);
                }
				
                if(!!s){
					u = s.toDate();
				}else{
					u = new Date();
				}
                m.find(".monthbox").each(function(i,j){
                    j = $(j);
                    var t1 = j.data("date");
                    var t2 = 12*(u.getFullYear()-t1.getFullYear())+(u.getMonth()-t1.getMonth());
                    j.css({left:-(t2*221)}).data("pos",-(t2*221));
                    if(x.debug){
                        console.log(j.attr('id')+":"+(-t2*221));
                    }
                });
                S(u);
                for(var i=0;i<_s.length;i++){
                    X(_s[i]);
                }
                N(u);
				$(".selectBox,.select_warp,.calendar").hide();
                m.show();m.position({
                    of: n,
                    my: "left top",
                    at: "left bottom",
                    offset:"0 4",
                    collision:"none none"
                });
                w.html($.calendar.detail(u).text);
                _w.show().position({
                    of: n,
                    my: "left bottom",
                    at: "left top",
                    offset:"0 -4",
                    collision:"none none"
                });
            });
            $(document).mousedown(function(e){
                var t = $(e.target);
                if(!!t.parents(".not_close").length || t.hasClass("not_close")){
                    O($('.select:visible'));
                    var a = t.data("showmenu");
                    m.find(".year,.month").data("showmenu",false);
                    if(t.hasClass('year') || t.hasClass('month')){
                        t.data("showmenu",!a);
                    }
                    return false;
                }
                n.blur();
                _w.hide();
                $(".select").hide();
                m.find(".year,.month").data("showmenu",false);
                m.hide();
            });
            !x.canread && n.attr("readonly","readonly").css({cursor:"pointer"});
            var st = !!n.val()?n.val().toDate():new Date();
            n.data("text",$.calendar.detail(st).text);
            z = H(st);
            m.find(".content").empty().append(z);
            m.find(".next,.prev").click(function(){
                var a,b,c = m.data("sd"),d = $(this).hasClass("next")?(221*x.count):-221,e,k;
                k = new Date(),k.setFullYear(c.getFullYear()),
                k.setDate(1),k.setMonth(c.getMonth()+(d>0?x.count:-1)),
                a = m.find("#c"+id+c.pattern("yyyyMM")),
                b = m.find("#c"+id+k.pattern("yyyyMM"));
                c.setMonth(c.getMonth()+(d>0?1:-1));
                if(b.length == 0){
                    c = H(k);
                    c.data("pos",d);
                    e = a.data("pos");  
                    !e && (e = 0);
                    c.css({left:e+d});
                    m.find(".content").append(c);
                    b = c;
                };
                k = G(m.data("sd"));
                if(k & 2 || k & 8)
                    return false;
                X(b);
                m.find(".monthbox").each(function(i,j){
                    var pos = $(j).data("pos");
                    !pos && (pos = 0);
                    pos -= (d>0?221:-221);
                    $(j).data("pos",pos);
                    if(!!i)
                        $(j).stop().animate({left:pos},500);
                    else
                        $(j).stop().animate({left:pos},500,function(){
                            N(m.data("sd"));
                            S(m.data("sd"));
                        });
                });   
                return false;
            });
        }
        function I(){
            var _this = $(this);
            w.html(_this.data("text"));
            if(w.height()!=_w.height()){
                _w.stop().animate({top:"-="+(w.height()-_w.height())+"px",height:w.height()},500);
            }
            _this.hasClass("dis") && _w.addClass("dis");
            if(_this.hasClass("dis") || _this.hasClass("cur")){
                n.data("f",true);
                return false;
            }
            _this.stop().animate({color:"#FFF",backgroundColor:"#5DA9E2",borderColor:"#666"},1000);
        }
        function J(){
            var _this = $(this);
            w.html(n.data("text"));
            _w.removeClass("dis");
            if(w.height()!=_w.height() && _w.is(":visible")){
                _w.stop().animate({top:"-="+(w.height()-_w.height())+"px",height:w.height()},500);
            }
            if(_this.hasClass("dis") || _this.hasClass("cur")){
                n.data("f",false);
                return false;
            }
            var t = _this.data("colors").split(",");
            _this.stop().animate({color:t[0],backgroundColor:t[1],borderColor:t[2]},1000);
        }
        function H(a){
              var d = new Date(),b,c,e,f=$("<ol>").addClass("monthbox"),g,_g,l,el,_a = new Date();
              d.setFullYear(a.getFullYear());
              d.setDate(1);
              d.setMonth(a.getMonth());
              _a.setFullYear(a.getFullYear());
              _a.setMonth(a.getMonth());
              c = d.getDay();
              !c && (c = 7);
              c--;
              f.data("date",_a);
              f.attr("id","c"+id+a.pattern("yyyyMM"));
              for(e=0;e<c;e++){
                  f.append($("<li>").addClass("daybtn"));
              }
              b = a.getMonth();
              while(d.getMonth() == b){
                  g = d.getDate();
                  l = $.calendar.detail(d);
                  _g = !1;
                  if(l.holiday){
                      if(/^([\u4E00-\u9FA5]{2})节?(\s|$)/.test(l.holiday)){
                          _g = RegExp.$1;
                      }
                  }else if(l.today){
                      _g = "今天";
                  }
                  f.append($("<li>").addClass("daybtn").append(el = $("<a>").data("text",l.text).data("date",(g<10?"0":"")+g).html(_g?_g:g).hover(I,J).mousedown(function(){
                      var a = $(this),b = a.parents(".monthbox");
                      if(a.hasClass("dis")){
                          return true;
                      }
                      m.find(".cur").removeClass("cur");
                      a.addClass("cur");
                      n.val(b.data("date").pattern("yyyy-MM-")+a.data("date"));
                      if(x.change && typeof x.change == "function"){
                          x.change(n);
                      }
                      return true;
                  })));
                  !!l.holiday && !l.cn && !l.imp && el.addClass("holiday");
                  !!l.holiday && !!l.cn && !l.imp && el.addClass("cnholiday");
                  !!l.imp && el.addClass("import");
                  !!l.today && el.addClass("today");
                  d.setDate(g+1);
              }
              if(x.debug){f.append($("<li>").css({
                  float:'right'
                  ,'text-align':'center'
                  ,font: '13px/23px \'黑体\''
                  ,color:'#FFF'
                  ,background:'#000'
              }).html((b+1)+"月"));}
              return f;
        }
        function L(){
            w = $("#cndate div");
            w.length || (w = $("<div>").appendTo($("<div id='cndate'>").appendTo($("body"))));
            _w = $("#cndate");
            var a = $("<div>").addClass("nav").addClass("not_close").append(
                $("<a>").addClass("prev"));
            for(var i=0;i<x.count;i++){
                a.append($("<span>").addClass("title").css({left:80+i*221}));
                if((x.yearRange||x.monthRange)&&i==0){
                    var l1 = $("<label>");
                    if(x.yearRange){
                        l1.addClass("year").click(function(){
                            var a = $(this),b,c,d;
                            b = a.data("showmenu");
                            if(!x.yts){P(a,false);}
                            if(b){
                                if(!x.yts.is(':visible')){
                                    x.yts.height(0).show();
                                    x.ybs.height(0).show();
                                }
								x.yts.stop();
                                x.yts.position({
                                    of: $(this),
                                    my: "left bottom",
                                    at: "left top",
                                    offset:"-1 0",
                                    collision:"none none"
                                });
								c = +x.yts.css('top').replace(/px/gi,''),d = x.yts.height();
                                x.yts.animate({height:x.th},{step:function(now,fx){
									$(fx.elem).css("top",c-now+d);
								}});
								x.ybs.stop();
                                x.ybs.position({
                                    of: $(this),
                                    my: "left top",
                                    at: "left bottom",
                                    offset:"-1 0",
                                    collision:"none none"
                                });
                                x.ybs.animate({height:x.bh});
                            }
                        });
                    }
                    a.find(".title").append(l1)
                    .append($("<span>").html('年'))
                    .append($("<label>").addClass("month"))
                    .append($("<span>").html('月'));
                }
            }
            a.append($("<a>").addClass("next"));
            return $("<div>").addClass("calendar").css("display","none")
            .append(a)
            .append($("<div>").addClass("week"))
            .append($("<div>").addClass("content")).appendTo($("body"));
        }
        function M(){
            n.unbind("focus").unbind("blur");
            m.detach();
        }
        function G(a){
            var r = 0,_a = new Date();
            if(!!a){
                _a.setFullYear(a.getFullYear());
                _a.setMonth(a.getMonth());
                _a.setDate(a.getDate());
            };
            var b = _a.pattern("yyyy-MM"),c = "";
            if(x.minDate){
                if(x.minDate.val){
                    c = x.minDate.val().replace(/-\d\d$/g,"");
                }else if(x.minDate.pattern){
                    c = x.minDate.pattern("yyyy-MM");
                }else if(typeof x.minDate == 'string' && /(\d{4}-\d{2})-\d{2}/.test(x.minDate)){
                    c = RegExp.$1;
                }
                c || (c = "0000-00");
                if(b.localeCompare(c)==0){
                    r += 1;
                }else if(b.localeCompare(c)<0){
                    r += 2;
                }
            }
            if(x.maxDate){
                _a.setDate(1);
                _a.setMonth(_a.getMonth()+x.count-1);
                b = _a.pattern("yyyy-MM");
                if(x.maxDate.val){
                    c = x.maxDate.val().replace(/-\d\d$/g,"");
                }else if(x.maxDate.pattern){
                    c = x.maxDate.pattern("yyyy-MM");
                }else if(typeof x.maxDate == 'string' && /(\d{4}-\d{2})-\d{2}/.test(x.maxDate)){
                    c = RegExp.$1;
                }
                c || (c = "9999-99");
                if(b.localeCompare(c)==0){
                    r += 4;
                }else if(b.localeCompare(c)>0){
                    r += 8;
                }
            }
            _a = null;
            return r;

        }
        function N(a){
            m.find(".prev,.next").show();
            var h = G(a);
            if(h & 1 || h & 2){
                m.find(".prev").hide();
            }
            if(h & 4 || h & 8){
                m.find(".next").hide();
            }
        }
        function X(a){
            var c="",d="",e,f,g,p=0,q=0,r,s={dis:"#DCDCDC",cur:"#fff",nor:"#222"};
            if(x.minDate || x.maxDate){
                if(x.minDate){
                    if(x.minDate.val){
                        c = x.minDate.val().replace(/-\d\d$/g,"");
                        p = parseInt(x.minDate.val().replace(/^\d{4}-\d{2}-/g,""),10);
                        c || (c = "0000-00",p=0);
                    }else if(x.minDate.pattern){
                        c = x.minDate.pattern("yyyy-MM");
                        p = x.minDate.getDate();
                    }
                }
                if(x.maxDate){
                    if(x.maxDate.val){
                        d = x.maxDate.val().replace(/-\d\d$/g,"");
                        q = parseInt(x.maxDate.val().replace(/^\d{4}-\d{2}-/g,""),10);
                        d || (d = "9999-99",q=32);
                    }else if(x.maxDate.pattern){
                        d = x.maxDate.pattern("yyyy-MM");
                        q = x.maxDate.getDate();
                    }
                }
            }
            e = a.data("date").pattern("yyyy-MM");
            f = a.find(".daybtn a");
            
            f.each(function(i,j){
                j = $(j);
                j.removeClass("dis");
                if(j.hasClass("cnholiday")){
                    j.css({color:"#26A10B",background:"#CEF6D8",borderColor:"#58FAAC"})
                    .data("colors","#26A10B,#CEF6D8,#58FAAC");
                }else if(j.hasClass("holiday")){
                    j.css({color:"#0168EA",background:"#EFF9FB",borderColor:"#E8F5F9"})
                    .data("colors","#0168EA,#EFF9FB,#E8F5F9");
                }else if(j.hasClass("import")){
                    j.css({color:"#FE001A",background:"#FFEFDB",borderColor:"#FFFACD"})
                    .data("colors","#FE001A,#FFEFDB,#FFFACD");
                }else{
                    j.css({color:"#222",background:"#FFF",borderColor:"#FFF"})
                    .data("colors","#222,#FFF,#FFF");
                }
                if(j.hasClass("today")){
                    j.css({borderColor:"#67A1E2"}).data("colors",j.data("colors").replace(/,#[a-fA-F0-9]+$/g,",#67A1E2"));
                }
            });
            r = n.val();
            if(r && r.indexOf(e)==0){
                var j = $(f[parseInt(r.split("-")[2],10)-1]);
                if(!j.hasClass("cur")){
                    m.find(".cur").removeClass("cur");
                    j.addClass("cur");
                }
                if(j.hasClass("today")){
                    j.css({color:"#FFF",background:"#FDAB00",borderColor:"#67A1E2"})
                    .data("colors","#FFF,#FDAB00,#000");
                }else{
                    j.css({color:"#FFF",background:"#FDAB00",borderColor:"#FFF"})
                    .data("colors","#FFF,#FDAB00,#FFF");
                }
            }
            if(c && c.localeCompare(e)==0){
                f.each(function(i,j){
                    g = $(j).html();
                    if(!g)return;
                    if(p > parseInt(g,10)){
                        $(j).addClass("dis");
                        $(j).css({color:s.dis});
                    }
                });
            }
            if(d && d.localeCompare(e)==0){
                f.each(function(i,j){
                    g = $(j).html();
                    if(!g)return;
                    if(q < parseInt(g,10)){
                        $(j).addClass("dis");
                        $(j).css({color:s.dis});
                    }
                });
            }
        }
        function S(u){
            var a = new Date();
            a.setFullYear(u.getFullYear());
            a.setMonth(u.getMonth());
            a.setDate(1);
            m.find(".title").each(function(i,j){
                if((x.yearRange||x.monthRange)&&i==0){
                    j = $(j).find("label");
                    $(j[0]).html(a.getFullYear());
                    $(j[1]).html((a.getMonth()<9?"0":"")+(a.getMonth()+1));
                }else{
                    $(j).html(a.pattern("yyyy年MM月"));
                }
                a.setMonth(a.getMonth()+1);
            });
            a = null;
        }
        function T(){
            var c = m.find(".content"),d = m.find(".nav"),e = c.width();
            c.width(e*x.count);
            d.width(d.width()+e*(x.count-1));
            var _w_ = m.find(".week");
            x.count >= 2 && _w_.width(_w_.width()+_w_.outerWidth(!0)*(x.count-1));
            for(var i = 0;i < x.count; i++){
                _w_.append($("<ol>")
                    .append($("<li>").append($("<span>").addClass("i1").html("一")))
                    .append($("<li>").append($("<span>").addClass("i2").html("二")))
                    .append($("<li>").append($("<span>").addClass("i3").html("三")))
                    .append($("<li>").append($("<span>").addClass("i4").html("四")))
                    .append($("<li>").append($("<span>").addClass("i5").html("五")))
                    .append($("<li>").append($("<span>").addClass("i6").html("六")))
                    .append($("<li>").append($("<span>").addClass("i0").html("日")))
                );
                !!i && _w_.css({padding:10});
            }
            m.width(m.width()*x.count);
        }
        function O(u){
            for(var i = 0;i<u.length;i++){
                var j = $(u[i]);
                if(j.hasClass('top')){
                    x.yts.stop();
                    var h = x.yts.height(),t = +x.yts.css('top').replace(/px/gi,'');
					console.log(t);
                    j.stop().animate({height:0},{step:function(now,fx){
						$(fx.elem).css("top",t+h-now);
					},complete: function() {
					  $(this).hide();
					}});
                }else{
                    j.stop().animate({height:0},"normal","linear",function(){$(this).hide()});
                }
            }
            return !!u.length;
        }
        function P(a,b){
            var u,v = +a.html(),s = 4;
            u = x.yts = $("<ul>").addClass("select").addClass("top").addClass("not_close");
            u.width(a.outerWidth(true));
            if(!b){
                for(var i=0;i<s;i++){
                    u.append($("<li>").html(v-s+i).hover(R,R).addClass(i==s-1?'last':'').mousedown(U));
                }
            }
            u.appendTo($("body"));
            x.th=u.height();
            u.height(0).hide();
            
            u = x.ybs = $("<ul>").addClass("select").addClass("bottom").addClass("not_close");
            u.width(a.outerWidth(true));
            if(!b){
                for(var i=0;i<s;i++){
                    u.append($("<li>").html(v+1+i).hover(R,R).addClass(i==0?'first':'').mousedown(U));
                }
            }
            u.appendTo($("body"));
            x.bh=u.height();
            u.height(0).hide();
        }
        function R(){
            var a = $(this),b = a.parents('ul'),c = a.index();
            a.toggleClass("hover");
            if(b.hasClass('top') && c == 0){
                if(a.hasClass('hover')){
                    a.css("border-top-color","#EFF9FB");
                }else{
                    a.css("border-top-color","#fff");
                }
            }
            if(b.hasClass('bottom') && c == b.find('li').length-1){
                if(a.hasClass('hover')){
                    a.css("border-bottom-color","#EFF9FB");
                }else{
                    a.css("border-bottom-color","#fff");
                }
            }
        }
        function U(){
            var a = $(this),b = +a.html();
            alert(b);
        }
        n = $(this);
        K();
        return M;
    }
});