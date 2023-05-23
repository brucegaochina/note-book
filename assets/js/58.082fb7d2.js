(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1177:function(s,t,a){s.exports=a.p+"assets/img/8cf4b1c09bca67d076b10b07016e9bac.097b00e0.png"},1178:function(s,t,a){s.exports=a.p+"assets/img/81ab8f2c0cc4e50de9f6974977303526.b3c8a89e.png"},1179:function(s,t,a){s.exports=a.p+"assets/img/2cb4c9e4f5627db7461a79219c50cf73.72598109.png"},1180:function(s,t,a){s.exports=a.p+"assets/img/da5df0052ac8057c66ef007de33688f9.3388e7e9.png"},1181:function(s,t,a){s.exports=a.p+"assets/img/3b877c617fc8cc04e67d17c23efe4799.38cb8903.png"},2e3:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"替换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#替换"}},[s._v("#")]),s._v(" 替换")]),s._v(" "),n("p",[n("strong",[s._v("Git 对象是不可改变的")]),s._v("，但它提供一种有趣的方式来用其他对象假装替换数据库中的 Git 对象。")]),s._v(" "),n("p",[s._v("replace 命令可以让你在 Git 中指定一个对象并可以声称 「每次你遇到这个 Git 对象时，假装它是其他的东西」。  "),n("strong",[s._v("在你用一个不同的提交替换历史中的一个提交时，这会非常有用")]),s._v("。")]),s._v(" "),n("p",[s._v("例如，你有一个大型的代码历史并想把自己的仓库分成一个短的历史和一个更大更长久的历史，短历史供新的开发者使用，后者给喜欢数据挖掘的人使用。 你可以通过用新仓库中最早的提交 replace 老仓库中最新的提交来连接历史，这种方式可以把一条历史移植到其他历史上。 这意味着你不用在新历史中真正替换每一个提交（因为历史来源会影响 SHA 的值），你可以加入他们。")]),s._v(" "),n("p",[s._v("让我们来试试吧。 首先获取一个已经存在的仓库，并将其分成两个仓库，一个是最近的仓库，一个是历史版本的仓库，然后我们将看到如何在不更改仓库 SHA 值的情况下通过 replace 命令来合并他们。")]),s._v(" "),n("p",[s._v("我们将使用一个拥有 5 个提交的简单仓库：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline\nef989d8 fifth commit\nc6e1e95 fourth commit\n9c68fdc third commit\n945704c second commit\nc1822cf first commit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("我们想将其分成拆分成两条历史。 第一个到第四个提交的作为第一个历史版本。 第四、第五个提交的作为最近的第二个历史版本。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1177),alt:"replace1"}})]),s._v(" "),n("p",[s._v("创建历史版本的历史很容易，我们可以只将一个历史中的分支推送到一个新的远程仓库的 master 分支。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" c6e1e95\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline --decorate\nef989d8 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD, master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" fifth commit\nc6e1e95 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("history"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" fourth commit\n9c68fdc third commit\n945704c second commit\nc1822cf first commit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1178),alt:"replace2"}})]),s._v(" "),n("p",[s._v("现在我们可以 "),n("strong",[s._v("把这个新的 history 分支推送到我们新仓库的 master 分支")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" project-history https://github.com/schacon/project-history\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push project-history history:master\nCounting objects: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(", done.\nDelta compression using up to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" threads.\nCompressing objects: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("/4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nWriting objects: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("/12"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("907")]),s._v(" bytes, done.\nTotal "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nUnpacking objects: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("/12"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nTo git@github.com:schacon/project-history.git\n * "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("这样一来，我们的历史版本就发布了。 "),n("strong",[s._v("稍难的部分则是删减我们最近的历史来让它变得更小")]),s._v("。 我们需要一个重叠以便于用一个相等的提交来替换另一个提交，这样一来，我们将截断到第四、五个提交。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline --decorate\nef989d8 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD, master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" fifth commit\nc6e1e95 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("history"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" fourth commit\n9c68fdc third commit\n945704c second commit\nc1822cf first commit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("在这种情况下，"),n("strong",[s._v("创建一个能够指导扩展历史的基础提交是很有用的")]),s._v("。 这样一来，如果其他的开发者想要修改第一次提交或者其他操作时就知道要做些什么，因此，"),n("strong",[s._v("接下来我们要做的是用命令创建一个最初的提交对象，然后将剩下的提交（第四、第五个提交）变基到它的上面。")])]),s._v(" "),n("p",[s._v("为了这么做，"),n("strong",[s._v("我们需要选择一个点去拆分")]),s._v("，对于我们而言是第三个提交（SHA 是 9c68fdc）。因此我们的提交将基于此提交树。我们可以使用 "),n("code",[s._v("commit-tree")]),s._v("  命令来创建基础提交，这样我们就有了一个树，并返回一个全新的、无父节点的 SHA 提交对象。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ echo 'get history from blah blah blah' | git commit-tree 9c68fdc^{tree}\n622e88e9cbfbacfb75b5279245b9fb38dfea10cf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("commit-tree 命令属于底层指令。有许多指令并非直接使用，而是被 "),n("strong",[s._v("其他的")]),s._v(" Git 命令用来做更小一些的工作。有时当我们做一些像这样的奇怪事情时，它们允许我们做一些不适用于日常使用但真正底层的东西。更多关于底层命令的内容请参见 "),n("a",{attrs:{href:""}},[s._v("底层命令和高层命令")])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(1179),alt:"replace3"}})]),s._v(" "),n("p",[s._v("现在我们已经有一个基础提交了，我们可以通过 "),n("code",[s._v("git rebase –onto")]),s._v(" 命令来将剩余的历史变基到基础提交之上。"),n("code",[s._v("–onto")]),s._v("  参数是刚才 "),n("code",[s._v("commit-tree")]),s._v(" 命令返回的 SHA 值，变基点会成为第三个提交（我们想留下的第一个提交的父提交，9c68fdc）：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --onto 622e88 9c68fdc\nFirst, rewinding "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" to replay your work on "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" of it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nApplying: fourth commit\nApplying: fifth commit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:a(1180),alt:"replace4"}})]),s._v(" "),n("p",[s._v("我们已经用基础提交重写了最近的历史，"),n("strong",[s._v("基础提交包括如何重新组成整个历史的说明")]),s._v("。 我们可以将新历史推送到新项目中，当其他人克隆这个仓库时，他们仅能看到最近两次提交以及一个包含上述说明的基础提交。")]),s._v(" "),n("p",[s._v("现在我们将以想获得整个历史的人的身份来初次克隆这个项目。 在克隆这个截断后的仓库后为了得到历史数据，需要添加第二个远程的历史版本库并对其做获取操作：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/schacon/project\n$ "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" project\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline master\ne146b5f fifth commit\n81a708d fourth commit\n622e88e get "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" from blah blah blah\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" project-history https://github.com/schacon/project-history\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch project-history\nFrom https://github.com/schacon/project-history\n * "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("      master     -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" project-history/master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("现在，协作者在 master 分支中拥有他们最近的提交并且在 project-history/master 分支中拥有过去的提交。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git log --oneline master\ne146b5f fifth commit\n81a708d fourth commit\n622e88e get history from blah blah blah\n\n$ git log --oneline project-history/master\nc6e1e95 fourth commit\n9c68fdc third commit\n945704c second commit\nc1822cf first commit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("为了合并它们，你可以使用 "),n("code",[s._v("git replace")]),s._v("  命令加上你想替换的提交信息来进行替换。 这样一来，我们就可以将 master 分支中的第四个提交替换为 "),n("code",[s._v("project-history/master")]),s._v(" 分支中的 “第四个” 提交。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" replace 81a708d c6e1e95\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("现在，查看 master 分支中的历史信息，显示如下：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline master\ne146b5f fifth commit\n81a708d fourth commit\n9c68fdc third commit\n945704c second commit\nc1822cf first commit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("很酷，是不是？不用改变上游的 SHA-1 我们就能用一个提交来替换历史中的所有不同的提交，并且所有的工具（bisect，blame 等）也都奏效。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(1181),alt:"replace5"}})]),s._v(" "),n("p",[s._v("有趣的是，即使是使用了 c6e1e95 提交数据来进行替换，它的 SHA-1 仍显示为 81a708d。 即使你运行了 "),n("code",[s._v("cat-file")]),s._v("  命令，它仍会显示你替换的数据：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cat-file -p 81a708d\ntree 7bc544cf438903b65ca9104a1e30345eee6c083d\nparent 9c68fdceee073230f19ebb8b5e7fc71b479c0252\nauthor Scott Chacon "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("schacon@gmail.com"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1268712581")]),s._v(" -0700\ncommitter Scott Chacon "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("schacon@gmail.com"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1268712581")]),s._v(" -0700\n\nfourth commit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("请记住，81a708d 真正的父提交是 622e882 占位提交，而非呈现的 9c68fdce 提交。")]),s._v(" "),n("p",[s._v("另一个有趣的事情是数据将会以以下引用显示：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ git for-each-ref\ne146b5f14e79d4935160c0e83fb9ebe526b8da0d commit\trefs/heads/master\nc6e1e95051d41771a649f3145423f8809d1a74d4 commit\trefs/remotes/history/master\ne146b5f14e79d4935160c0e83fb9ebe526b8da0d commit\trefs/remotes/origin/HEAD\ne146b5f14e79d4935160c0e83fb9ebe526b8da0d commit\trefs/remotes/origin/master\nc6e1e95051d41771a649f3145423f8809d1a74d4 commit\trefs/replace/81a708dd0e167a3f691541c7a6463343bc457040\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这意味着我们可以轻而易举的和其他人分享替换，因为我们可以将替换推送到服务器中并且其他人可以轻松地下载。 也许在历史移植情况下不是很有用（既然每个人都乐意下载最新版本和历史版本，为何还要拆分他们呢？），但在其他情况下仍然很有用。")])])}),[],!1,null,null,null);t.default=e.exports}}]);