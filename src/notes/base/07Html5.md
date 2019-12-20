# Html5

## html5介绍

### html5设计目的

   HTML5的设计目的是为了在移动设备上支持多媒体。新的语法特征被引进以支持这一点，如video、audio和canvas 标记。HTML5还引进了新的功能，可以真正改变用户与文档的交互方式

### html5新特性

   增加了新特性：语义特性，本地存储特性，设备兼容特性，连接特性，网页多媒体特性，三维、图形及特效特性，性能与集成特性，CSS3特性

### html5优缺点

- 优点
   a、提高可用性和改进用户的友好体验；
   b、有几个新的标签，这将有助于开发人员定义重要的内容；
   c、可以给站点带来更多的多媒体元素(视频和音频)；
   d、可以很好的替代FLASH和Silverlight；
   e、当涉及到网站的抓取和索引的时候，对于SEO很友好；
   f、将被大量应用于移动应用程序和游戏；
   g、可移植性好。
- 缺点
    该标准并未能很好的被Pc端浏览器所支持。因新标签的引入，各浏览器之间将缺少一种统一的数据描述格式，造成用户体验不佳。

## Html5新增的标签

|     类别    |   标签            |            描述                                    |
|----------|----------------|----------------------------------------------|
|  canvas  |   &lt;canvas>    |标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API|
|  多媒体  |  &lt;audio>    |定义音频内容|
|  多媒体  |  &lt;video>    |定义视频（video 或者 movie）|
|  多媒体  |  &lt;source>  |定义多媒体资源 &lt;video> 和 <audio>  字体|
|  多媒体  |  &lt;embed> |定义嵌入的内容，比如插件。|
|  多媒体  |  &lt;track>    |为诸如 &lt;video> 和 &lt;audio> 元素之类的媒介规定外部文本轨道。|
|  语义和结构  |  &lt;article>   |定义页面的侧边栏内容 |
|  语义和结构  |  &lt;aside>    |定义页面内容之外的内容。   |
|  语义和结构  |  &lt;bdi>    |允许您设置一段文本，使其脱离其父元素的文本方向设置。   |
|  语义和结构  |  &lt;command>    |定义命令按钮，比如单选按钮、复选框或按钮   |
|  语义和结构  |  &lt;details>    |用于描述文档或文档某个部分的细节   |
|  语义和结构  |  &lt;dialog>    |定义对话框，比如提示框   |
|  语义和结构  |  &lt;summary>    |标签包含 details 元素的标题   |
|  语义和结构  |  &lt;figure>    |规定独立的流内容（图像、图表、照片、代码等等）。   |
|  语义和结构  |  &lt;figcaption>    |定义 <figure> 元素的标题   |
|  语义和结构  |  &lt;footer>    |定义 section 或 document 的页脚。   |
|  语义和结构  |  &lt;header>    |定义了文档的头部区域   |
|  语义和结构  |  &lt;mark>    |定义带有记号的文本。   |
|  语义和结构  |  &lt;meter>    |定义度量衡。仅用于已知最大和最小值的度量。   |
|  语义和结构  |  &lt;nav>    |定义运行中的进度（进程）。   |
|  语义和结构  |  &lt;progress>    |定义任何类型的任务的进度。   |
|  语义和结构  |  &lt;ruby>    |定义 ruby 注释（中文注音或字符）。   |
|  语义和结构  |  &lt;rt>    |定义字符（中文注音或字符）的解释或发音。   |
|  语义和结构  |  &lt;rp>    |在 ruby 注释中使用，定义不支持 ruby 元素的浏览器所显示的内容。   |
|  语义和结构  |  &lt;section>    |定义文档中的节（section、区段）。   |
|  语义和结构  |  &lt;time>    |定义日期或时间。   |
|  语义和结构  |  &lt;wbr>    |规定在文本中的何处适合添加换行符。   |

## html5移除的标签

以下的 HTML 4.01 元素在HTML5中已经被删除:
&lt;acronym> 字体兼容
&lt;applet> java组件
&lt;basefont> 字体
&lt;big>
&lt;center>
&lt;dir> 目录
&lt;font>
&lt;frame>
&lt;frameset>
&lt;noframes>
&lt;strike>

## Html的语义标签

- 传统页面的标签使用
- HTML5页面中的标签使用

~~~html
<body>
    <header>定义了文档的头部区域</header>
    <div>
        <article>定义页面的侧边栏内容</article>
        <aside>定义页面内容之外的内容</aside>
    </div>
    <footer>定义 section 或 document 的页脚</footer>
</body>
~~~

## hml5兼容处理

1.在不支持HTML5新标签的浏览器里，会将这些新的标签解析成行内元素(inline)对待，所以我们只需要将其转换成块元素(block)即可使用，但是在IE9版本以下，并不能正常解析这些新标签，但是却可以识别通过document.createElement('tagName')创建的自定义标签，于是我们的解决方案就是将HTML5的新标签全部通过document.createElement('tagName')来创建一遍，这样IE低版本也能正常解析HTML5新标签了。
2.处理方式：在实际开发中我们更多采用的是通过检测IE浏览器的版本来加载三方的一个JS库来解决兼容问题（测试在IE下面的兼容性：ieTester软件的使用）

~~~html
<script src="../js/html5shiv.min.js"></script>
~~~

## html5表单

### html5表单中新增的标签

- &lt;datalist>:与input配合使用：类似于拥有输入功能的下拉列表
- &lt;keygen>:提供一种验证用户数据的可靠方法。在提交表单数据的时候，会生成两个键，一个私钥，一个公钥。私钥存储在本地，公钥发送到服务器。在需要做验证的时候，我们可以从服务器下载一个客户端证书，通过私钥和证书来实现相关的验证操作。
- &lt;meter>:度量器，可用于标示级别
- &lt;output>:用于展示内容，只能展示，不能进行编辑

### html5表单中新增的属性

- placeholder 占位符
- autofocus 获取焦点
- multiple 文件上传多选或多个邮箱地址  
- autocomplete 自动完成，用于表单元素，也可用于表单自身
- form 指定表单项属于哪个form，处理复杂表单时会需要
- novalidate 关闭验证，可用于<form>标签
- required 验证条件，必填项
- pattern 正则表达式 验证表单

~~~html
autocomplete:属性规定表单是否应该启用自动完成功能。autocomplete 属性适用于 <form>，以及下面的 input 类型：text, search, url, telephone, email, password, datepickers, range 以及 color。<br>
<form action="" autocomplete="on">
    autofocus定位文本框焦点：<input type="text" autofocus> <br>
    placeholder设置文本框默认提示：<input type="text" placeholder="请输入***"><br>
    email邮件类型自带验证和提示：<input type="email"> <br>
    required属性设置非空特性：<input type="tel" required><br>
    pattern设置验证规则：<input type="tel" name="tel" required pattern="^(\+86)?1[358]\d{5}$"><br>
    multiple多文件选择：<input type="file" multiple><br>
    <input type="submit" value="提交"/>
</form>
~~~

### html5表单输入类型

- email： 输入email格式
- tel： 手机号码  
- url： 只能输入url格式
- number： 只能输入数字
- search： 搜索框
- range： 范围，可以进行拖动，通过value进行取值
- color ：拾色器，通过value进行取值
- time：时间
- date： 日期 不是绝对的
- datetime： 时间日期
- month： 月份
- week： 星期
  说明：部分类型是针对移动设备生效的，且具有一定的兼容性，在实际应用当中可选择性的使用

### html5表单新增事件

- oninput 用户输入内容时触发，可用于移动端输入字数统计
- oninvalid 验证不通过时触发

~~~html
<script>
    /*oninput可以监听用户的每一次输入*/
    document.getElementById("name").oninput=function(){
        console.log(this.value);
    }
    /*监听键盘弹起，每一个键盘弹出触发一次*/
    document.getElementById("name").onkeyup=function(){
        console.log("---"+this.value);
    }
    /*当指定表单元素验证不通过时触发*/
    document.getElementById("phone").oninvalid=function(){
        console.log("验证不通过");
    }
</script>

~~~

### html5表单案例

说明：

- &lt;fieldset> 标签将表单内容的一部分打包，生成一组相关表单的字段。当一组表单元素放到 &lt;fieldset> 标签内时，浏览器会以特殊方式来显示它们，它们可能有特殊的边界、3D 效果，或者甚至可创建一个子表单来处理这些元素.
- legend 元素为 fieldset 元素定义标题（caption）。

~~~html
<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        max-width:600px;
        margin: 0 auto;
    }
    form{
        width:100%;
    }
    form fieldset{
        padding:20px 20px 10px;
    }
    form fieldset label{
        font-weight:bold;
        line-height:20px;
    }
    form input,
    form meter{
        width:100%;
        margin:10px 0;
        display: block;
        height:30px;
        border: 1px solid #ccc;
        padding-left:5px;
    }
    form meter{
        width:100%;
        border: none;
        padding-left:0;
    }
    .btn{
        width:100%;
        height: 40px;
        margin-top: 20px;
    }
</style>
<body>
<form action="">
    <fieldset>
        <legend>学生档案</legend>
        <label for="userName">姓名:</label>
        <input type="text" name="userName" id="userName" placeholder="请输入姓名" required>
        <label for="phone">手机号码：</label>
        <input type="tel" name="phone" id="phone" pattern="^(\+86)?1[358]\d{9}$">
        <label for="email">邮箱地址：</label>
        <input type="email" name="email" id="email">
        所属学院：
        <input type="text" list="school" name="college" id="college" placeholder="请选择">
        <datalist id="school">
            <option>移动与前端开发学院</option>
            <option>IOS</option>
            <option>andriod</option>
            <option>c++</option>
        </datalist>
        <label for="score">入学成绩:</label>
        <input type="number" max="100" min="0" step="1" name="score" id="score" value="0">
        <label for="level">基础水平</label>
        <!--通过low/high的值来设置meter的颜色-->
        <meter name="level" id="level" value="0" max="100" min="0" low="59" high="90"></meter>
        <label for="inTime">入学日期</label>
        <input type="date" name="inTime" id="inTime">
        <label for="leaveTime">毕业日期</label>
        <input type="date" name="leaveTime" id="leaveTime">
        <input type="submit" name="submit" id="submit" class="btn">
    </fieldset>
</form>
<script>
    /*通过score成绩的输入，动态修改meter的颜色*/
    document.getElementById("score").oninput=function(){
        document.getElementById("level").value=this.value;
    }
</script>
</body>
~~~

## html5多媒体

### 音频播放：audio标签的使用

- 属性
  autoplay：如果出现该属性，则音频在就绪后马上播放。
  controls：如果出现该属性，则向用户显示控件，比如播放按钮。
  loop：如果出现该属性，则每当音频结束时重新开始播放。
  preload：如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。
  src： 要播放的音频的 URL。

  ~~~html
  <audio src="../mp3/See.mp3" controls autoplay></audio>
  ~~~

### 视频播放：video标签的使用

- 属性

autoplay：如果出现该属性，则视频在就绪后马上播放。
controls：如果出现该属性，则向用户显示控件，比如播放按钮。
height：设置视频播放器的高度。
loop：如果出现该属性，则当媒介文件完成播放后再次开始播放。
preload：如果出现该属性，则视频在页面加载时进行加载，并预备播放。
如果使用 "autoplay"，则忽略该属性。
src：要播放的视频的 URL。
width：设置视频播放器的宽度。

  ~~~html
  <video src="../mp3/561902ae6ac6e6649.mp4" controls></video>
  ~~~

- 说明：由于版权等原因，不同的浏览器可支持播放的格式是不一样的
   ![浏览器视频](media/07Html5/browser-video.png)

## DOM扩展

### DOM扩展获取元素：

- document.getElementsByClassName ('class') 通过类名获取元素，以类数组形式存在。getElementsByTagName
- document.querySelector('selector') 通过CSS选择器获取元素，符合匹配条件的第1个元素。
- document.querySelectorAll('selector') 通过CSS选择器获取元素，以类数组形式存在。

### DOM扩展类名操作：

- Node.classList.add('class') 添加class
- Node.classList.remove('class') 移除class
- Node.classList.toggle('class') 切换class，有则移除，无则添加
- Node.classList.contains('class') 检测是否存在class

### DOM扩展自定义属性：

- 在HTML5中我们可以自定义属性，其格式如下data-*=""，例如：data-info="我是自定义属性"，通过Node.dataset['info'] 我们便可以获取到自定义的属性值。
- 当我们如下格式设置时，则需要以驼峰格式才能正确获取：data-my-name="itcast"，获取Node.dataset['myName']

### DOM扩展案例：tab标签页

- 效果图
     ![效果图](media/07Html5/dom-demo.png)

~~~html
<div class="tabs">
    <div>
        <a href="javascript:;" data-target="local">国内新闻</a>
        <a href="javascript:;" data-target="global">国际新闻</a>
        <a href="javascript:;" data-target="sports">体育新闻</a>
        <a href="javascript:;" data-target="funny">娱乐新闻</a>
    </div>
    <section class="cont active" id="local">
        <ol>
            <li>习近平向2名晋升为上将军官颁发命令状</li>
            <li>郭声琨了解指导公安消防部队抗洪工作</li>
            <li>媒体：曾任职中办的这位官员仕途有变</li>
            <li>广西警方端掉地下兵工厂缴获大批炮弹</li>
            <li>她完美诠释奇葩考题夺金牌</li>
            <li>中国奥运选手在里约多次遭抢劫</li>
        </ol>
    </section>
    <section class="cont active" id="global">
        <ol>
            <li>河南再次发生矿难，死伤人数超过100</li>
            <li>禽流感次发生蔓延，温家宝指示</li>
            <li>南方大旱，农作物减产绝收面积上亩</li>
            <li>猪流感在广减产绝收发</li>
            <li>禽流感在全国多作物减产绝收面积上亩</li>
            <li>猪流感在广东群体性暴发</li>
        </ol>
    </section>
    <section class="cont" id="sports">
        <ol>
            <li>河南再次发生矿难，死伤人数超过10</li>
            <li>禽流感在全国多处农作物农延，温家宝指示</li>
            <li>南方大旱，农作物减产绝收面积上亩</li>
            <li>猪流感在广东群体性暴发</li>
            <li>禽流感在全农作物继续蔓延，温家宝指示</li>
            <li>南方大农作物减产绝收面积上亩</li>
            <li>猪流感在广东群体性暴发</li>
        </ol>
    </section>
    <section class="cont" id="funny">
        <ol>
            <li>福建发生血腥命案:两女遭割喉 1男孩被砍数刀</li>
            <li>四川原副省长李成云被查 5年前曾违纪又复出</li>
            <li>胡歌反对粉丝探班：以前请吃饭现在会黑脸</li>
            <li>曝郑爽爸爸歌厅撩妹 与女子勾肩搭背显亲密</li>
            <li>宜宾公安副局长无证驾驶出车祸 弃车离开现场</li>
            <li>国子监大街门匾现错字 已悬挂近10年(图)</li>
            <li>猪流感在广东群体性暴发</li>
        </ol>
    </section>
</div>
<script>
    (function(key){
        //1.获取所有a标签
        var allA=document.querySelector(".tabs").querySelector("div:first-child").querySelectorAll("a");
        //初始化操作
        for(var i=0;i<allA.length;i++){
            if(i==key){
                allA[i].classList.add("active");
                var active=allA[i].dataset["target"];
                document.querySelector("#"+active).style.display='block';
            }
            //2.循环遍历所有的a标签，为其添加点击事件
            allA[i].onclick=function(){
                //3.判断当前是否是当前已激活的页，如果是，则不进行处理
                if(this.classList.contains("active")){
                    return;
                }
                //4.否则，则需要找到当前a标签对应的data-target属性，利用这个属性找到对应id的section进行样式的设置，让其显示
                //4.1先移除之前a标签的active类样式
                var aActive=document.querySelector(".active");
                aActive.classList.remove("active");
                //4.2让之前显示的section隐藏
                var currentTarget=aActive.dataset["target"];
               document.querySelector("#"+currentTarget) .style.display ="none";
                //4.3为其添加active样式
                this.classList.add("active");
                //4.4获取当前被点击的a标签的data-target属性
                var value=this.dataset["target"];
                //4.5让对应id的section显示--添加active类样式即可
                document.querySelector("#"+value).style.display="block";
            };
        }
    })(0);
</script>
~~~

## 多媒体实际运用

- API地址：[http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp](http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp)
- 常用方法：load() 加载、  play() 播放、  pause() 暂停
  Jq没有提供对视频播放控件的方式，也就意味着如果要操作视频播放，必须使用原生的js方法—dom元素
- 常用属性：
   currentTime 视频播放的当前进度、
   duration:视频的总时间  100000/60
   paused:视频播放的状态.
- 常用事件：
   oncanplay: 事件在用户可以开始播放视频/音频（audio/video）时触发。
   ontimeupdate:通过该事件来报告当前的播放进度.
   onended:播放完时触发—重置
- 案例：

~~~html
<h3 class="playerTitle">视频播放器</h3>
<div class="player">
    <video src="../mp3/test.mp4"></video>
    <div class="controls">
        <a href="javascript:;" class="switch fa fa-pause"></a>
        <a href="javascript:;" class="expand fa fa-expand"></a>
        <div class="progress">
            <div class="bar"></div>
            <div class="loaded"></div>
            <div class="elapse"></div>
        </div>
        <div class="time">
            <span class="currentTime">00:00:00</span>
            \
            <span class="totalTime">00:00:00</span>
        </div>
    </div>
</div>
<script src="../js/jquery.min.js"></script>
<script>
    /*获取到播放器*/
    var video=$("video")[0];
    /*暂停-播放切换*/
    $(".switch").click(function(){
        //1.切换样式，从暂停切换到播放，或者从播放切换到暂停
        $(this).toggleClass("fa-pause fa-play");
        //2.修改播放器的状态
        if(video.paused){
            video.play();
        }
        else{
            video.pause();
        }
    });
    /*全屏*/
    $(".expand").click(function(){
        video.webkitRequestFullScreen();
    });
    /*当可以进行播放的时候触发oncanplay*/
    video.oncanplay=function(){
        setTimeout(function(){
            video.style.display="block";
            //1.获取视频的总时长,结果以秒作为单位
            var duration=video.duration;
            /*console.log(duration);*/  //256.278
            //2.计算 时  分  秒
            var hour= Math.floor(duration/3600);
            var menite= Math.floor(duration%3600/60);
            var second=Math.floor(duration%60);
            //3.将时分秒信息填充到总时长span中
            //3.1 设置时分秒的格式
            hour=hour<10?"0"+hour:hour;
            menite=menite<10?"0"+menite:menite;
            second=second<10?"0"+second:second;
            //3.2填充
            $(".totalTime").html(hour+":"+menite+":"+second);
        },2000);
    }
    /*当视频在播放的时候，会触发下下面的方法ontimeupdate*/
    video.ontimeupdate=function(){
        //1.获取当前已经播放过了时间
        var elapseTime=video.currentTime;
        //2.获取已过时间的时分秒
        var hour= Math.floor(elapseTime/3600);
        var menite= Math.floor(elapseTime%3600/60);
        var second=Math.floor(elapseTime%60);
        //3.将时分秒信息填充到当前时长span中
        //3.1 设置时分秒的格式
        hour=hour<10?"0"+hour:hour;
        menite=menite<10?"0"+menite:menite;
        second=second<10?"0"+second:second;
        //3.2填充
        $(".currentTime").html(hour+":"+menite+":"+second);
        //4.设置当前<div class="elapse"></div>的宽度
        var valuePercent=0;
        if(elapseTime>0){
            valuePercent=elapseTime/video.duration*100;
            $(".elapse").css("width",valuePercent+"%");
        }
    }
</script>
~~~

## 地理定位（了解）

- 在HTML规范中，增加了获取用户地理信息的API，这样使得我们可以基于用户位置开发互联网应用，即基于位置服务 (Location Base Service)
- 获取地理信息方式
   IP地址
   三维坐标：GPS（Global Positioning System，全球定位系统）、Wi-Fi、手机信号
   用户自定义数据
- 隐私:  推送通知
   HTML5 Geolocation(地理位置定位) 规范提供了一套保护用户隐私的机制。必须先得到用户明确许可，才能获取用户的位置信息
- API说明：
   navigator.getCurrentPosition(successCallback, errorCallback, options) 获取当前地理信息
   navigator.watchPosition(successCallback, errorCallback, options) 重复获取当前地理信息
   当成功获取地理信息后，会调用succssCallback，并返回一个包含位置信息的对象position。Coords(坐标)
   position.coords.latitude纬度
   position.coords.longitude经度
   当获取地理信息失败后，会调用errorCallback，并返回错误信息error
   可选参数 options 对象可以调整位置信息数据收集方式
如下图对不同获取方式的优缺点进行了比较，浏览器会自动以最优方式去获取用户地理信息。
   ![浏览器视频](media/07Html5/geolocation.png)

## html5拖拽

- 定义和用法：拖放是 HTML5 中非常常见的功能。
- 在拖放的过程中会触发以下事件：
   a.在拖动目标上触发事件 (源元素):
    ondragstart - 用户开始拖动元素时触发
    ondrag - 元素正在拖动时触发
    ondragend - 用户完成元素拖动后触发
   b.释放目标时触发的事件—   当拖拽元素在目标容器上进行操作的时候:
     ondragenter - 当被鼠标拖动的对象进入其容器范围内时触发此事件
     ondragover - 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
     ondragleave - 当被鼠标拖动的对象离开其容器范围内时触发此事件
     ondrop - 在一个拖动过程中，释放鼠标键时触发此事件
- 注意：
   在拖动元素时，每隔 350 毫秒会触发 ondrag 事件。
   为了让元素可拖动，需要使用 HTML5 draggable 属性
   链接和图片默认是可拖动的，不需要 draggable 属性
   可以通过addEventListener来添加拖拽相关事件
   事件源：触发事件的源，一般情况下我们会将相同操作的多个对象绑定到同一个处理事件，同时传递当前的对象到处理方法，这就是事件源参数
- 案例

~~~html
标记是否可以拖动，true表示可以拖动-
<div class="div1">
    <p draggable="true" id="pe">试着把我拖过去</p>
</div>
<div class="div2"></div>
<script>
    /*这几次拖拽的事件源都是当前被拖拽的元素*/
    /*开始拖拽*/
    document.addEventListener("dragstart",function(e){
        //设置当前目标元素的透明度，产生拖拽效果
        e.target.style.opacity=0.4;
        //将当前的被拖拽元素的id号存储到事件源对象中
        e.dataTransfer.setData("Text", e.target.id);
    });
  /*拖拽进行中*/
    document.addEventListener("drag",function(e){
        e.target.parentNode.style.borderColor="green";
    });
    /*拖拽结束*/
    document.addEventListener("dragend",function(e){
        e.target.style.opacity=1;
        e.target.parentNode.style.borderColor="red";
    });

    /*下面几个方法的事件源是目标元素，而不是被拖拽的元素*/
    /*当将当前元素拖拽到另外一个元素上时触发*/
    document.addEventListener("dragenter",function(e){
        if(e.target.className=="div2"){
            e.target.style.borderColor="pink";
        }
        else if(e.target.className=="div1"){
            e.target.style.borderColor="red";
        }
    });

    /*拖拽元素在目标元素上移动时触发*/
    document.addEventListener("dragover",function(e){
        /*默认情况下，一个元素不能拖拽到另外一个元素内，如果想允许拖拽，我们必须阻止默认的事件冒泡*/
        e.preventDefault();
    });
    /*当拖拽元素离开目标元素时触发*/
    document.addEventListener("dragleave",function(e){
        if(e.target.className=="div2"){
            e.target.style.borderColor="blue";
        }
    });
    /*当拖拽元素在目标元素上松开的时候触发*/
    document.addEventListener("drop",function(e){
        //1.阻止事件冒泡
        e.preventDefault();
        if(e.target.className=="div2" || e.target.className=="div1"){
            //2.还原目标元素的默认样式
            e.target.style.borderColor="blue";
            //3.获取被拖拽元素的id
            var id= e.dataTransfer.getData("Text");
            //4.追加被拖拽元素到目标元素
            e.target.appendChild(document.getElementById(id));
        }
    });
</script>
~~~

## web存储

- 传统方式我们以document.cookie来进行存储的，但是由于其存储大小只有4k左右，并且解析也相当的复杂，给开发带来诸多不便
- HTML5提供的解决方案：
   window.sessionStorage
   window.localStorage
- 特点：
   设置、读取方便
   容量较大，sessionStorage约5M、localStorage约20M
   只能存储字符串，可以将对象JSON.stringify() 编码后存储
- Window.sessionStorage
   a.特点：
    生命周期为关闭浏览器窗口：相当于存储在当前页面的内内存中
    在同一个窗口下数据可以共享(在当前页面下可以获取到，换另外一个页面下不能获取到)
   b.方法介绍：(两种存储方式的方法一致)
   SetItem(key,value):设置数据，以键值对的方式
   getItem(key):通过指定的键获取对应的值内容
   removeItem(key):删除指定的key及对应的值内容
   clear():清空所有存储内容
- Window.sessionStorage案例：

~~~html
<script>
    var userData=document.getElementById("userName");
    //存储数据
    document.getElementById("setData").onclick=function(){
        window.sessionStorage.setItem("userName",userData.value);
    }
    //获取数据
    document.getElementById("getData").onclick=function(){
        var value=window.sessionStorage.getItem("userName");
        alert(value);
    }
</script>
~~~

- Window.localStorage的
  特点：
  永久生效，除非手动删除：存储在硬盘上
  可以多窗口共享。但是不能跨浏览器
- Window.localStorage案例

~~~html
<script>
    var userData=document.getElementById("userName");
    //存储数据
    document.getElementById("setData").onclick=function(){
        window.localStorage.setItem("userName",userData.value);
    }
    //获取数据
    document.getElementById("getData").onclick=function(){
        var value=window.localStorage.getItem("userName");
        alert(value);
    }
    //删除数据
    document.getElementById("removeData").onclick=function(){
        window.localStorage.removeItem("userName");
    }
</script>
~~~

## 应用缓存

- 概念：使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本
- 优势：
   可配置需要缓存的资源
   网络无连接应用仍可用
   本地读取缓存资源，提升访问速度，增强用户体验
   减少请求，缓解服务器负担
- Cache Manifest 基础：
   如需启用应用程序缓存，请在文档的 &lt;html> 标签中包含 manifest 属性：
   每个指定了 manifest 的页面在用户对其访问时都会被缓存。如果未指定 manifest 属性，则页面不会被缓存（除非在 manifest 文件中直接指定了该页面）。
   manifest 文件的建议的文件扩展名是：".appcache"。
   注意，manifest 文件需要配置正确的 MIME-type，即 "text/cache-manifest"。必须在 web 服务器上进行配置
- Manifest 文件：
   a.概念：manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）
   b.manifest 文件可分为三个部分
   > CACHE MANIFEST – 开始
   > CACHE在此标题下列出的文件将在首次下载后进行缓存
   > NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
   > FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）

   c.CACHE MANIFEST说明：
   > CACHE MANIFEST，放置在第一行，是必需的：
   > CACHE ：
   > /theme.css
   > /logo.gif
   > /main.js
   > 上面的 manifest 文件列出了三个资源：一个 CSS 文件，一个 GIF 图像，以及一个 JavaScript 文件。当 manifest 文件加载后，浏览器会从网站的根目录下载这三个文件。然后，无论用户何时与因特网断开连接，这些资源依然是可用的

   d.NETWORK说明：
   > NETWORK 小节规定文件 "login.asp" 永远不会被缓存，且离线时是不可用的，如
   > NETWORK:
   > login.asp

   e.FALLBACK说明：
   > FALLBACK 小节规定如果无法建立因特网连接，就使用指定的资源代替所请求的url的资源，如：
   > FALLBACK:
   > /html5/ /404.html
   > 注释：当html5资源在离线状态下无法请求的时候，就使用404.html代替

   f.其它：
   > CACHE: 可以省略，这种情况下将需要缓存的资源写在CACHE MANIFEST
   > 可以指定多个CACHE: NETWORK: FALLBACK:，无顺序限制
   > #表示注释，只有当demo.appcache文件内容发生改变时或者手动清除缓存后，才会重新缓存。
   > chrome 可以通过chrome://appcache-internals/工具和离线（offline）模式来调试管理应用缓> 存

  g.更新缓存：
   > 一旦文件被缓存，则浏览器会继续展示已缓存的版本，即使修改了服务器上的文件。为了确保浏览器更新> 缓存，也需要更新 manifest 文件，也就意味着一旦应用被缓存，它就会保持缓存直到发生下列情况：
   > 用户清空浏览器缓存
   > manifest 文件被修改（参阅下面的提示）
   > 由程序来更新应用缓存
   > 说明：更新注释行中的日期和版本号是一种使浏览器重新缓存文件的办法

- Cache Manifest案例

~~~html
<!DOCTYPE HTML>
<html manifest="demo.appcache">
...
</html>
~~~

## 网络状态

我们可以通过window.onLine来检测，用户当前的网络状况，事件参数可以返回一个布尔值

- window.online用户网络连接时被调用
- window.offline用户网络断开时被调用
- 案例

~~~javascript
/*网络连接时调用*/
window.addEventListener("online",function(e){
    console.log("ok");
    console.log(e.returnValue);
});
/*网络断开时调用*/
window.addEventListener("offline",function(e){
    console.log("no");
    console.log(e.returnValue);
});
~~~

## 全屏

~~~javascript
btn.onclick=function() {
    /*能力测试*/
    if(docuEle.requestFullScreen){
        document.getElementById("img").requestFullScreen();
    }
    else if(docuEle.webkitRequestFullScreen){
        document.getElementById("img").webkitRequestFullScreen();
    }
    else if(docuEle.mozRequestFullScreen){
        document.getElementById("img").mozRequestFullScreen();
    }
}
~~~