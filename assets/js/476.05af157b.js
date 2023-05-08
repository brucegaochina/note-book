(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{1921:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ik-分词器配置文件和自定义词库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ik-分词器配置文件和自定义词库"}},[t._v("#")]),t._v(" IK 分词器配置文件和自定义词库")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#主要配置解说"}},[t._v("主要配置解说")])]),a("li",[a("a",{attrs:{href:"#自定义词库"}},[t._v("自定义词库")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"主要配置解说"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要配置解说"}},[t._v("#")]),t._v(" 主要配置解说")]),t._v(" "),a("p",[t._v("ik 配置文件地址：elasticsearch-5.2.0/plugins/ik/config 目录下都是存放配置文件，\n下面是一些主要配置文件含义：")]),t._v(" "),a("ul",[a("li",[t._v("IKAnalyzer.cfg.xml：用来配置自定义词库")]),t._v(" "),a("li",[t._v("main.dic：ik 原生内置的中文词库，总共有 27 万多条，只要是这些单词，都会被分在一起")]),t._v(" "),a("li",[t._v("quantifier.dic：放了一些单位相关的词")]),t._v(" "),a("li",[t._v("suffix.dic：放了一些后缀")]),t._v(" "),a("li",[t._v("surname.dic：中国的姓氏")]),t._v(" "),a("li",[t._v("stopword.dic：英文停用词")])]),t._v(" "),a("p",[t._v("IKAnalyzer.cfg.xml 内容如下")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token doctype"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),a("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("properties")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token name"}},[t._v("SYSTEM")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://java.sun.com/dtd/properties.dtd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("IK Analyzer 扩展配置"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("comment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--用户可以在这里配置自己的扩展字典 --\x3e")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("entry")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ext_dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("custom/mydict.dic;custom/single_word_low_freq.dic"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--用户可以在这里配置自己的扩展停止词字典--\x3e")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("entry")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ext_stopwords"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("custom/ext_stopword.dic"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("entry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--用户可以在这里配置远程扩展字典 --\x3e")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- <entry key="remote_ext_dict">words_location</entry> --\x3e')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--用户可以在这里配置远程扩展停止词字典--\x3e")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- <entry key="remote_ext_stopwords">words_location</entry> --\x3e')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("ik 原生最重要的两个配置文件")]),t._v(" "),a("ul",[a("li",[t._v("main.dic：包含了原生的中文词语，会按照这个里面的词语去分词")]),t._v(" "),a("li",[t._v("stopword.dic：包含了英文的停用词。custom/ext_stopword.dic 中包含了中文的一些扩展词")])]),t._v(" "),a("p",[t._v("什么是停用词？与其他词相比，功能词没有什么实际含义，比如'the'、'is'、'at'、'which'、'on'等。")]),t._v(" "),a("h2",{attrs:{id:"自定义词库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义词库"}},[t._v("#")]),t._v(" 自定义词库")]),t._v(" "),a("p",[t._v("每年都会涌现一些特殊的流行词，网红，蓝瘦香菇，喊麦，鬼畜，一般不会在 ik 的原生词典里，\n自己补充自己的最新的词语，到 ik 的词库里面去")]),t._v(" "),a("p",[a("code",[t._v("IKAnalyzer.cfg.xml：ext_dict，custom/mydict.dic")]),t._v(" 是在配置文件的默认文件，可以追加，也可以自定义")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("想要词库生效，需要重启 es")])]),t._v(" "),a("p",[t._v("可以使用如下语法进行检测")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("GET /_analyze\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"网红"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"analyzer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ik_max_word"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);