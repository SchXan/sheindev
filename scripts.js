! function(b, L) {
    "object" == typeof exports && typeof module < "u" ? L(exports) : "function" == typeof define && define.amd ? define(["exports"], L) : L((b = typeof globalThis < "u" ? globalThis : b || self).marked = {})
}(this, function(b) {
    "use strict";

    function L(s, i) {
        for (var t = 0; t < i.length; t++) {
            var n = i[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(s, "symbol" == typeof(e = function(u, r) {
                if ("object" != typeof u || null === u) return u;
                var o = u[Symbol.toPrimitive];
                if (void 0 === o) return String(u);
                if ("object" != typeof(o = o.call(u, "string"))) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }(e = n.key)) ? e : String(e), n)
        }
        var e
    }

    function Z() {
        return (Z = Object.assign ? Object.assign.bind() : function(s) {
            for (var i = 1; i < arguments.length; i++) {
                var t, n = arguments[i];
                for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (s[t] = n[t])
            }
            return s
        }).apply(this, arguments)
    }

    function Fe(s, i) {
        (null == i || i > s.length) && (i = s.length);
        for (var t = 0, n = new Array(i); t < i; t++) n[t] = s[t];
        return n
    }

    function z(s, i) {
        var t, n = typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
        if (n) return (n = n.call(s)).next.bind(n);
        if (Array.isArray(s) || (n = function(e, u) {
                var r;
                if (e) return "string" == typeof e ? Fe(e, u) : "Map" === (r = "Object" === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Fe(e, u) : void 0
            }(s)) || i && s && "number" == typeof s.length) return n && (s = n), t = 0,
            function() {
                return t >= s.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: s[t++]
                }
            };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function T() {
        return {
            async: !1,
            baseUrl: null,
            breaks: !1,
            extensions: null,
            gfm: !0,
            headerIds: !0,
            headerPrefix: "",
            highlight: null,
            hooks: null,
            langPrefix: "language-",
            mangle: !0,
            pedantic: !1,
            renderer: null,
            sanitize: !1,
            sanitizer: null,
            silent: !1,
            smartypants: !1,
            tokenizer: null,
            walkTokens: null,
            xhtml: !1
        }
    }

    function $(s) {
        return N[s]
    }
    b.defaults = {
        async: !1,
        baseUrl: null,
        breaks: !1,
        extensions: null,
        gfm: !0,
        headerIds: !0,
        headerPrefix: "",
        highlight: null,
        hooks: null,
        langPrefix: "language-",
        mangle: !0,
        pedantic: !1,
        renderer: null,
        sanitize: !1,
        sanitizer: null,
        silent: !1,
        smartypants: !1,
        tokenizer: null,
        walkTokens: null,
        xhtml: !1
    };
    var q = /[&<>"']/,
        Ae = new RegExp(q.source, "g"),
        V = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        re = new RegExp(V.source, "g"),
        N = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

    function B(s, i) {
        if (i) {
            if (q.test(s)) return s.replace(Ae, $)
        } else if (V.test(s)) return s.replace(re, $);
        return s
    }
    var J = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

    function pe(s) {
        return s.replace(J, function(i, t) {
            return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
        })
    }
    var ke = /(^|[^\[])\^/g;

    function v(s, i) {
        s = "string" == typeof s ? s : s.source, i = i || "";
        var t = {
            replace: function(n, e) {
                return e = (e = e.source || e).replace(ke, "$1"), s = s.replace(n, e), t
            },
            getRegex: function() {
                return new RegExp(s, i)
            }
        };
        return t
    }
    var Ce = /[^\w:]/g,
        w = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

    function y(s, i, t) {
        if (s) {
            try {
                n = decodeURIComponent(pe(t)).replace(Ce, "").toLowerCase()
            } catch {
                return null
            }
            if (0 === n.indexOf("javascript:") || 0 === n.indexOf("vbscript:") || 0 === n.indexOf("data:")) return null
        }
        var n;
        i && !w.test(t) && (s = t, le[" " + (n = i)] || (le[" " + n] = Y.test(n) ? n + "/" : P(n, "/", !0)), i = -1 === (n = le[" " + n]).indexOf(":"), t = "//" === s.substring(0, 2) ? i ? s : n.replace(d, "$1") + s : "/" === s.charAt(0) ? i ? s : n.replace(H, "$1") + s : n + s);
        try {
            t = encodeURI(t).replace(/%25/g, "%")
        } catch {
            return null
        }
        return t
    }
    var le = {},
        Y = /^[^:]+:\/*[^/]*$/,
        d = /^([^:]+:)[\s\S]*$/,
        H = /^([^:]+:\/*[^/]*)[\s\S]*$/,
        _ = {
            exec: function() {}
        };

    function fe(s, i) {
        var t = s.replace(/\|/g, function(e, u, r) {
                for (var o = !1, p = u; 0 <= --p && "\\" === r[p];) o = !o;
                return o ? "|" : " |"
            }).split(/ \|/),
            n = 0;
        if (t[0].trim() || t.shift(), 0 < t.length && !t[t.length - 1].trim() && t.pop(), t.length > i) t.splice(i);
        else
            for (; t.length < i;) t.push("");
        for (; n < t.length; n++) t[n] = t[n].trim().replace(/\\\|/g, "|");
        return t
    }

    function P(s, i, t) {
        var n = s.length;
        if (0 === n) return "";
        for (var e = 0; e < n;) {
            var u = s.charAt(n - e - 1);
            if ((u !== i || t) && (u === i || !t)) break;
            e++
        }
        return s.slice(0, n - e)
    }

    function G(s, i) {
        if (i < 1) return "";
        for (var t = ""; 1 < i;) 1 & i && (t += s), i >>= 1, s += s;
        return t + s
    }

    function Q(s, u, t, n) {
        var e = u.href,
            r = (u = u.title ? B(u.title) : null, s[1].replace(/\\([\[\]])/g, "$1"));
        return "!" !== s[0].charAt(0) ? (n.state.inLink = !0, s = {
            type: "link",
            raw: t,
            href: e,
            title: u,
            text: r,
            tokens: n.inlineTokens(r)
        }, n.state.inLink = !1, s) : {
            type: "image",
            raw: t,
            href: e,
            title: u,
            text: B(r)
        }
    }
    var K = function() {
            function s(t) {
                this.options = t || b.defaults
            }
            var i = s.prototype;
            return i.space = function(t) {
                if ((t = this.rules.block.newline.exec(t)) && 0 < t[0].length) return {
                    type: "space",
                    raw: t[0]
                }
            }, i.code = function(e) {
                var n;
                if (e = this.rules.block.code.exec(e)) return n = e[0].replace(/^ {1,4}/gm, ""), {
                    type: "code",
                    raw: e[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? n : P(n, "\n")
                }
            }, i.fences = function(o) {
                var n, e, u, r;
                if (o = this.rules.block.fences.exec(o)) return e = n = o[0], u = o[3] || "", e = null === (e = n.match(/^(\s+)(?:```)/)) ? u : (r = e[1], u.split("\n").map(function(p) {
                    var F = p.match(/^\s+/);
                    return null !== F && F[0].length >= r.length ? p.slice(r.length) : p
                }).join("\n")), {
                    type: "code",
                    raw: n,
                    lang: o[2] && o[2].trim().replace(this.rules.inline._escapes, "$1"),
                    text: e
                }
            }, i.heading = function(u) {
                var n, e;
                if (u = this.rules.block.heading.exec(u)) return n = u[2].trim(), /#$/.test(n) && (e = P(n, "#"), !this.options.pedantic && e && !/ $/.test(e) || (n = e.trim())), {
                    type: "heading",
                    raw: u[0],
                    depth: u[1].length,
                    text: n,
                    tokens: this.lexer.inline(n)
                }
            }, i.hr = function(t) {
                if (t = this.rules.block.hr.exec(t)) return {
                    type: "hr",
                    raw: t[0]
                }
            }, i.blockquote = function(r) {
                var n, e, u;
                if (r = this.rules.block.blockquote.exec(r)) return n = r[0].replace(/^ *>[ \t]?/gm, ""), e = this.lexer.state.top, this.lexer.state.top = !0, u = this.lexer.blockTokens(n), this.lexer.state.top = e, {
                    type: "blockquote",
                    raw: r[0],
                    tokens: u,
                    text: n
                }
            }, i.list = function(t) {
                var n = this.rules.block.list.exec(t);
                if (n) {
                    var e, u, r, o, p, F, A, a, C, c, m, E = 1 < (k = n[1].trim()).length,
                        l = {
                            type: "list",
                            raw: "",
                            ordered: E,
                            start: E ? +k.slice(0, -1) : "",
                            loose: !1,
                            items: []
                        },
                        k = E ? "\\d{1,9}\\" + k.slice(-1) : "\\" + k;
                    this.options.pedantic && (k = E ? k : "[*+-]");
                    for (var x = new RegExp("^( {0,3}" + k + ")((?:[\t ][^\\n]*)?(?:\\n|$))"); t && (m = !1, n = x.exec(t)) && !this.rules.block.hr.test(t);) {
                        if (t = t.substring((e = n[0]).length), A = n[2].split("\n", 1)[0].replace(/^\t+/, function(de) {
                                return " ".repeat(3 * de.length)
                            }), a = t.split("\n", 1)[0], this.options.pedantic ? (o = 2, c = A.trimLeft()) : (o = n[2].search(/[^ ]/), c = A.slice(o = 4 < o ? 1 : o), o += n[1].length), p = !1, !A && /^ *$/.test(a) && (e += a + "\n", t = t.substring(a.length + 1), m = !0), !m)
                            for (var oe = new RegExp("^ {0," + Math.min(3, o - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))"), M = new RegExp("^ {0," + Math.min(3, o - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"), ae = new RegExp("^ {0," + Math.min(3, o - 1) + "}(?:```|~~~)"), te = new RegExp("^ {0," + Math.min(3, o - 1) + "}#"); t && (a = C = t.split("\n", 1)[0], this.options.pedantic && (a = a.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !ae.test(a)) && !te.test(a) && !oe.test(a) && !M.test(t);) {
                                if (a.search(/[^ ]/) >= o || !a.trim()) c += "\n" + a.slice(o);
                                else {
                                    if (p || 4 <= A.search(/[^ ]/) || ae.test(A) || te.test(A) || M.test(A)) break;
                                    c += "\n" + a
                                }
                                p || a.trim() || (p = !0), e += C + "\n", t = t.substring(C.length + 1), A = a.slice(o)
                            }
                        l.loose || (F ? l.loose = !0 : /\n *\n *$/.test(e) && (F = !0)), this.options.gfm && (u = /^\[[ xX]\] /.exec(c)) && (r = "[ ] " !== u[0], c = c.replace(/^\[[ xX]\] +/, "")), l.items.push({
                            type: "list_item",
                            raw: e,
                            task: !!u,
                            checked: r,
                            loose: !1,
                            text: c
                        }), l.raw += e
                    }
                    l.items[l.items.length - 1].raw = e.trimRight(), l.items[l.items.length - 1].text = c.trimRight(), l.raw = l.raw.trimRight();
                    for (var ne, Ee = l.items.length, ue = 0; ue < Ee; ue++) this.lexer.state.top = !1, l.items[ue].tokens = this.lexer.blockTokens(l.items[ue].text, []), l.loose || (ne = 0 < (ne = l.items[ue].tokens.filter(function(de) {
                        return "space" === de.type
                    })).length && ne.some(function(de) {
                        return /\n.*\n/.test(de.raw)
                    }), l.loose = ne);
                    if (l.loose)
                        for (ue = 0; ue < Ee; ue++) l.items[ue].loose = !0;
                    return l
                }
            }, i.html = function(e) {
                var n;
                if (e = this.rules.block.html.exec(e)) return n = {
                    type: "html",
                    raw: e[0],
                    pre: !this.options.sanitizer && ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
                    text: e[0]
                }, this.options.sanitize && (e = this.options.sanitizer ? this.options.sanitizer(e[0]) : B(e[0]), n.type = "paragraph", n.text = e, n.tokens = this.lexer.inline(e)), n
            }, i.def = function(r) {
                var n, e, u;
                if (r = this.rules.block.def.exec(r)) return n = r[1].toLowerCase().replace(/\s+/g, " "), e = r[2] ? r[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", u = r[3] && r[3].substring(1, r[3].length - 1).replace(this.rules.inline._escapes, "$1"), {
                    type: "def",
                    tag: n,
                    raw: r[0],
                    href: e,
                    title: u
                }
            }, i.table = function(t) {
                if (t = this.rules.block.table.exec(t)) {
                    var n = {
                        type: "table",
                        header: fe(t[1]).map(function(F) {
                            return {
                                text: F
                            }
                        }),
                        align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : []
                    };
                    if (n.header.length === n.align.length) {
                        n.raw = t[0];
                        for (var e, u, r, o = n.align.length, p = 0; p < o; p++) n.align[p] = /^ *-+: *$/.test(n.align[p]) ? "right" : /^ *:-+: *$/.test(n.align[p]) ? "center" : /^ *:-+ *$/.test(n.align[p]) ? "left" : null;
                        for (o = n.rows.length, p = 0; p < o; p++) n.rows[p] = fe(n.rows[p], n.header.length).map(function(F) {
                            return {
                                text: F
                            }
                        });
                        for (o = n.header.length, e = 0; e < o; e++) n.header[e].tokens = this.lexer.inline(n.header[e].text);
                        for (o = n.rows.length, e = 0; e < o; e++)
                            for (r = n.rows[e], u = 0; u < r.length; u++) r[u].tokens = this.lexer.inline(r[u].text);
                        return n
                    }
                }
            }, i.lheading = function(t) {
                if (t = this.rules.block.lheading.exec(t)) return {
                    type: "heading",
                    raw: t[0],
                    depth: "=" === t[2].charAt(0) ? 1 : 2,
                    text: t[1],
                    tokens: this.lexer.inline(t[1])
                }
            }, i.paragraph = function(e) {
                var n;
                if (e = this.rules.block.paragraph.exec(e)) return n = "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1], {
                    type: "paragraph",
                    raw: e[0],
                    text: n,
                    tokens: this.lexer.inline(n)
                }
            }, i.text = function(t) {
                if (t = this.rules.block.text.exec(t)) return {
                    type: "text",
                    raw: t[0],
                    text: t[0],
                    tokens: this.lexer.inline(t[0])
                }
            }, i.escape = function(t) {
                if (t = this.rules.inline.escape.exec(t)) return {
                    type: "escape",
                    raw: t[0],
                    text: B(t[1])
                }
            }, i.tag = function(t) {
                if (t = this.rules.inline.tag.exec(t)) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
                    type: this.options.sanitize ? "text" : "html",
                    raw: t[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : B(t[0]) : t[0]
                }
            }, i.link = function(t) {
                if (t = this.rules.inline.link.exec(t)) {
                    var n = t[2].trim();
                    if (!this.options.pedantic && /^</.test(n)) {
                        if (!/>$/.test(n)) return;
                        var u = P(n.slice(0, -1), "\\");
                        if ((n.length - u.length) % 2 == 0) return
                    } else -1 < (u = function(o, p) {
                        if (-1 !== o.indexOf(p[1]))
                            for (var F = o.length, A = 0, a = 0; a < F; a++)
                                if ("\\" === o[a]) a++;
                                else if (o[a] === p[0]) A++;
                        else if (o[a] === p[1] && --A < 0) return a;
                        return -1
                    }(t[2], "()")) && (r = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + u, t[2] = t[2].substring(0, u), t[0] = t[0].substring(0, r).trim(), t[3] = "");
                    u = t[2];
                    var e, r = "";
                    return this.options.pedantic ? (e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u)) && (u = e[1], r = e[3]) : r = t[3] ? t[3].slice(1, -1) : "", u = u.trim(), Q(t, {
                        href: (u = /^</.test(u) ? this.options.pedantic && !/>$/.test(n) ? u.slice(1) : u.slice(1, -1) : u) && u.replace(this.rules.inline._escapes, "$1"),
                        title: r && r.replace(this.rules.inline._escapes, "$1")
                    }, t[0], this.lexer)
                }
            }, i.reflink = function(t, n) {
                var e;
                if (e = (e = this.rules.inline.reflink.exec(t)) || this.rules.inline.nolink.exec(t)) return (t = n[(t = (e[2] || e[1]).replace(/\s+/g, " ")).toLowerCase()]) ? Q(e, t, e[0], this.lexer) : {
                    type: "text",
                    raw: n = e[0].charAt(0),
                    text: n
                }
            }, i.emStrong = function(t, n, e) {
                void 0 === e && (e = "");
                var u = this.rules.inline.emStrong.lDelim.exec(t);
                if (u && (!u[3] || !e.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) && (!u[1] && !u[2] || "" === e || this.rules.inline.punctuation.exec(e))) {
                    var o = u[0].length - 1,
                        p = o,
                        F = 0,
                        A = "*" === u[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                    for (A.lastIndex = 0, n = n.slice(-1 * t.length + o); null != (u = A.exec(n));) {
                        var a, C = u[1] || u[2] || u[3] || u[4] || u[5] || u[6];
                        if (C)
                            if (a = C.length, u[3] || u[4]) p += a;
                            else if ((u[5] || u[6]) && o % 3 && !((o + a) % 3)) F += a;
                        else if (!(0 < (p -= a))) return a = Math.min(a, a + p + F), C = t.slice(0, o + u.index + (u[0].length - C.length) + a), Math.min(o, a) % 2 ? (a = C.slice(1, -1), {
                            type: "em",
                            raw: C,
                            text: a,
                            tokens: this.lexer.inlineTokens(a)
                        }) : (a = C.slice(2, -2), {
                            type: "strong",
                            raw: C,
                            text: a,
                            tokens: this.lexer.inlineTokens(a)
                        })
                    }
                }
            }, i.codespan = function(r) {
                var n, e, u;
                if (r = this.rules.inline.code.exec(r)) return u = r[2].replace(/\n/g, " "), n = /[^ ]/.test(u), e = /^ /.test(u) && / $/.test(u), u = B(u = n && e ? u.substring(1, u.length - 1) : u, !0), {
                    type: "codespan",
                    raw: r[0],
                    text: u
                }
            }, i.br = function(t) {
                if (t = this.rules.inline.br.exec(t)) return {
                    type: "br",
                    raw: t[0]
                }
            }, i.del = function(t) {
                if (t = this.rules.inline.del.exec(t)) return {
                    type: "del",
                    raw: t[0],
                    text: t[2],
                    tokens: this.lexer.inlineTokens(t[2])
                }
            }, i.autolink = function(u, n) {
                var e;
                if (u = this.rules.inline.autolink.exec(u)) return n = "@" === u[2] ? "mailto:" + (e = B(this.options.mangle ? n(u[1]) : u[1])) : e = B(u[1]), {
                    type: "link",
                    raw: u[0],
                    text: e,
                    href: n,
                    tokens: [{
                        type: "text",
                        raw: e,
                        text: e
                    }]
                }
            }, i.url = function(t, n) {
                var e, u, r, o;
                if (e = this.rules.inline.url.exec(t)) {
                    if ("@" === e[2]) r = "mailto:" + (u = B(this.options.mangle ? n(e[0]) : e[0]));
                    else {
                        for (; o = e[0], e[0] = this.rules.inline._backpedal.exec(e[0])[0], o !== e[0];);
                        u = B(e[0]), r = "www." === e[1] ? "http://" + e[0] : e[0]
                    }
                    return {
                        type: "link",
                        raw: e[0],
                        text: u,
                        href: r,
                        tokens: [{
                            type: "text",
                            raw: u,
                            text: u
                        }]
                    }
                }
            }, i.inlineText = function(t, n) {
                if (t = this.rules.inline.text.exec(t)) return n = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : B(t[0]) : t[0] : B(this.options.smartypants ? n(t[0]) : t[0]), {
                    type: "text",
                    raw: t[0],
                    text: n
                }
            }, s
        }(),
        g = {
            newline: /^(?: *(?:\n|$))+/,
            code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
            fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
            hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
            heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
            html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
            def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
            table: _,
            lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
            text: /^[^\n]+/,
            _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
            _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
        },
        h = (g.def = v(g.def).replace("label", g._label).replace("title", g._title).getRegex(), g.bullet = /(?:[*+-]|\d{1,9}[.)])/, g.listItemStart = v(/^( *)(bull) */).replace("bull", g.bullet).getRegex(), g.list = v(g.list).replace(/bull/g, g.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + g.def.source + ")").getRegex(), g._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", g._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, g.html = v(g.html, "i").replace("comment", g._comment).replace("tag", g._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), g.paragraph = v(g._paragraph).replace("hr", g.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", g._tag).getRegex(), g.blockquote = v(g.blockquote).replace("paragraph", g.paragraph).getRegex(), g.normal = Z({}, g), g.gfm = Z({}, g.normal, {
            table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
        }), g.gfm.table = v(g.gfm.table).replace("hr", g.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", g._tag).getRegex(), g.gfm.paragraph = v(g._paragraph).replace("hr", g.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", g.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", g._tag).getRegex(), g.pedantic = Z({}, g.normal, {
            html: v("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", g._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^(#{1,6})(.*)(?:\n+|$)/,
            fences: _,
            lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            paragraph: v(g.normal._paragraph).replace("hr", g.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", g.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
        }), {
            escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: _,
            tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
            link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
            reflink: /^!?\[(label)\]\[(ref)\]/,
            nolink: /^!?\[(ref)\](?:\[\])?/,
            reflinkSearch: "reflink|nolink(?!\\()",
            emStrong: {
                lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
                rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
                rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
            },
            code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
            br: /^( {2,}|\\)\n(?!\s*$)/,
            del: _,
            text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
            punctuation: /^([\spunctuation])/
        });

    function ge(s) {
        return s.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026")
    }

    function De(s) {
        for (var i, t = "", n = s.length, e = 0; e < n; e++) i = s.charCodeAt(e), t += "&#" + (i = .5 < Math.random() ? "x" + i.toString(16) : i) + ";";
        return t
    }
    h._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", h.punctuation = v(h.punctuation).replace(/punctuation/g, h._punctuation).getRegex(), h.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, h.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g, h._comment = v(g._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), h.emStrong.lDelim = v(h.emStrong.lDelim).replace(/punct/g, h._punctuation).getRegex(), h.emStrong.rDelimAst = v(h.emStrong.rDelimAst, "g").replace(/punct/g, h._punctuation).getRegex(), h.emStrong.rDelimUnd = v(h.emStrong.rDelimUnd, "g").replace(/punct/g, h._punctuation).getRegex(), h._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, h._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, h._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, h.autolink = v(h.autolink).replace("scheme", h._scheme).replace("email", h._email).getRegex(), h._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, h.tag = v(h.tag).replace("comment", h._comment).replace("attribute", h._attribute).getRegex(), h._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, h._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, h._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, h.link = v(h.link).replace("label", h._label).replace("href", h._href).replace("title", h._title).getRegex(), h.reflink = v(h.reflink).replace("label", h._label).replace("ref", g._label).getRegex(), h.nolink = v(h.nolink).replace("ref", g._label).getRegex(), h.reflinkSearch = v(h.reflinkSearch, "g").replace("reflink", h.reflink).replace("nolink", h.nolink).getRegex(), h.normal = Z({}, h), h.pedantic = Z({}, h.normal, {
        strong: {
            start: /^__|\*\*/,
            middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            endAst: /\*\*(?!\*)/g,
            endUnd: /__(?!_)/g
        },
        em: {
            start: /^_|\*/,
            middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
            endAst: /\*(?!\*)/g,
            endUnd: /_(?!_)/g
        },
        link: v(/^!?\[(label)\]\((.*?)\)/).replace("label", h._label).getRegex(),
        reflink: v(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", h._label).getRegex()
    }), h.gfm = Z({}, h.normal, {
        escape: v(h.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    }), h.gfm.url = v(h.gfm.url, "i").replace("email", h.gfm._extended_email).getRegex(), h.breaks = Z({}, h.gfm, {
        br: v(h.br).replace("{2,}", "*").getRegex(),
        text: v(h.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    });
    var W = function() {
            function s(e) {
                this.tokens = [], this.tokens.links = Object.create(null), this.options = e || b.defaults, this.options.tokenizer = this.options.tokenizer || new K, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, (this.tokenizer.lexer = this).inlineQueue = [], this.state = {
                    inLink: !1,
                    inRawBlock: !1,
                    top: !0
                }, e = {
                    block: g.normal,
                    inline: h.normal
                }, this.options.pedantic ? (e.block = g.pedantic, e.inline = h.pedantic) : this.options.gfm && (e.block = g.gfm, e.inline = this.options.breaks ? h.breaks : h.gfm), this.tokenizer.rules = e
            }
            s.lex = function(e, u) {
                return new s(u).lex(e)
            }, s.lexInline = function(e, u) {
                return new s(u).inlineTokens(e)
            };
            var t, n = s.prototype;
            return n.lex = function(e) {
                var u;
                for (e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens); u = this.inlineQueue.shift();) this.inlineTokens(u.src, u.tokens);
                return this.tokens
            }, n.blockTokens = function(e, u) {
                var r, o, p, F, A = this;
                for (void 0 === u && (u = []), e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, function(C, c, m) {
                        return c + "    ".repeat(m.length)
                    }); e;)
                    if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(C) {
                            return !!(r = C.call({
                                lexer: A
                            }, e, u)) && (e = e.substring(r.raw.length), u.push(r), !0)
                        })))
                        if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), 1 === r.raw.length && 0 < u.length ? u[u.length - 1].raw += "\n" : u.push(r);
                        else if (r = this.tokenizer.code(e)) e = e.substring(r.raw.length), !(o = u[u.length - 1]) || "paragraph" !== o.type && "text" !== o.type ? u.push(r) : (o.raw += "\n" + r.raw, o.text += "\n" + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = o.text);
                else if (r = this.tokenizer.fences(e)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.heading(e)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.hr(e)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.blockquote(e)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.list(e)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.html(e)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.def(e)) e = e.substring(r.raw.length), !(o = u[u.length - 1]) || "paragraph" !== o.type && "text" !== o.type ? this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                    href: r.href,
                    title: r.title
                }) : (o.raw += "\n" + r.raw, o.text += "\n" + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = o.text);
                else if (r = this.tokenizer.table(e)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.lheading(e)) e = e.substring(r.raw.length), u.push(r);
                else if (p = e, this.options.extensions && this.options.extensions.startBlock && function() {
                        var C = 1 / 0,
                            c = e.slice(1),
                            m = void 0;
                        A.options.extensions.startBlock.forEach(function(E) {
                            "number" == typeof(m = E.call({
                                lexer: this
                            }, c)) && 0 <= m && (C = Math.min(C, m))
                        }), C < 1 / 0 && 0 <= C && (p = e.substring(0, C + 1))
                    }(), this.state.top && (r = this.tokenizer.paragraph(p))) o = u[u.length - 1], F && "paragraph" === o.type ? (o.raw += "\n" + r.raw, o.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : u.push(r), F = p.length !== e.length, e = e.substring(r.raw.length);
                else if (r = this.tokenizer.text(e)) e = e.substring(r.raw.length), (o = u[u.length - 1]) && "text" === o.type ? (o.raw += "\n" + r.raw, o.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : u.push(r);
                else if (e) {
                    var a = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(a);
                        break
                    }
                    throw new Error(a)
                }
                return this.state.top = !0, u
            }, n.inline = function(e, u) {
                return this.inlineQueue.push({
                    src: e,
                    tokens: u = void 0 === u ? [] : u
                }), u
            }, n.inlineTokens = function(e, u) {
                var r, o, p, F, A, a, C = this,
                    c = (void 0 === u && (u = []), e);
                if (this.tokens.links) {
                    var m = Object.keys(this.tokens.links);
                    if (0 < m.length)
                        for (; null != (F = this.tokenizer.rules.inline.reflinkSearch.exec(c));) m.includes(F[0].slice(F[0].lastIndexOf("[") + 1, -1)) && (c = c.slice(0, F.index) + "[" + G("a", F[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                }
                for (; null != (F = this.tokenizer.rules.inline.blockSkip.exec(c));) c = c.slice(0, F.index) + "[" + G("a", F[0].length - 2) + "]" + c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                for (; null != (F = this.tokenizer.rules.inline.escapedEmSt.exec(c));) c = c.slice(0, F.index + F[0].length - 2) + "++" + c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
                for (; e;)
                    if (A || (a = ""), A = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(l) {
                            return !!(r = l.call({
                                lexer: C
                            }, e, u)) && (e = e.substring(r.raw.length), u.push(r), !0)
                        })))
                        if (r = this.tokenizer.escape(e)) e = e.substring(r.raw.length), u.push(r);
                        else if (r = this.tokenizer.tag(e)) e = e.substring(r.raw.length), (o = u[u.length - 1]) && "text" === r.type && "text" === o.type ? (o.raw += r.raw, o.text += r.text) : u.push(r);
                else if (r = this.tokenizer.link(e)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(r.raw.length), (o = u[u.length - 1]) && "text" === r.type && "text" === o.type ? (o.raw += r.raw, o.text += r.text) : u.push(r);
                else if (r = this.tokenizer.emStrong(e, c, a)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.codespan(e)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.br(e)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.del(e)) e = e.substring(r.raw.length), u.push(r);
                else if (r = this.tokenizer.autolink(e, De)) e = e.substring(r.raw.length), u.push(r);
                else if (!this.state.inLink && (r = this.tokenizer.url(e, De))) e = e.substring(r.raw.length), u.push(r);
                else if (p = e, this.options.extensions && this.options.extensions.startInline && function() {
                        var l = 1 / 0,
                            k = e.slice(1),
                            x = void 0;
                        C.options.extensions.startInline.forEach(function(oe) {
                            "number" == typeof(x = oe.call({
                                lexer: this
                            }, k)) && 0 <= x && (l = Math.min(l, x))
                        }), l < 1 / 0 && 0 <= l && (p = e.substring(0, l + 1))
                    }(), r = this.tokenizer.inlineText(p, ge)) e = e.substring(r.raw.length), "_" !== r.raw.slice(-1) && (a = r.raw.slice(-1)), A = !0, (o = u[u.length - 1]) && "text" === o.type ? (o.raw += r.raw, o.text += r.text) : u.push(r);
                else if (e) {
                    var E = "Infinite loop on byte: " + e.charCodeAt(0);
                    if (this.options.silent) {
                        console.error(E);
                        break
                    }
                    throw new Error(E)
                }
                return u
            }, n = s, (t = [{
                key: "rules",
                get: function() {
                    return {
                        block: g,
                        inline: h
                    }
                }
            }]) && L(n, t), Object.defineProperty(n, "prototype", {
                writable: !1
            }), s
        }(),
        ee = function() {
            function s(t) {
                this.options = t || b.defaults
            }
            var i = s.prototype;
            return i.code = function(t, r, e) {
                var u;
                return r = (r || "").match(/\S*/)[0], this.options.highlight && null != (u = this.options.highlight(t, r)) && u !== t && (e = !0, t = u), t = t.replace(/\n$/, "") + "\n", r ? '<pre><code class="' + this.options.langPrefix + B(r) + '">' + (e ? t : B(t, !0)) + "</code></pre>\n" : "<pre><code>" + (e ? t : B(t, !0)) + "</code></pre>\n"
            }, i.blockquote = function(t) {
                return "<blockquote>\n" + t + "</blockquote>\n"
            }, i.html = function(t) {
                return t
            }, i.heading = function(t, n, e, u) {
                return this.options.headerIds ? "<h" + n + ' id="' + (this.options.headerPrefix + u.slug(e)) + '">' + t + "</h" + n + ">\n" : "<h" + n + ">" + t + "</h" + n + ">\n"
            }, i.hr = function() {
                return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }, i.list = function(t, n, e) {
                var u = n ? "ol" : "ul";
                return "<" + u + (n && 1 !== e ? ' start="' + e + '"' : "") + ">\n" + t + "</" + u + ">\n"
            }, i.listitem = function(t) {
                return "<li>" + t + "</li>\n"
            }, i.checkbox = function(t) {
                return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
            }, i.paragraph = function(t) {
                return "<p>" + t + "</p>\n"
            }, i.table = function(t, n) {
                return "<table>\n<thead>\n" + t + "</thead>\n" + (n = n && "<tbody>" + n + "</tbody>") + "</table>\n"
            }, i.tablerow = function(t) {
                return "<tr>\n" + t + "</tr>\n"
            }, i.tablecell = function(t, n) {
                var e = n.header ? "th" : "td";
                return (n.align ? "<" + e + ' align="' + n.align + '">' : "<" + e + ">") + t + "</" + e + ">\n"
            }, i.strong = function(t) {
                return "<strong>" + t + "</strong>"
            }, i.em = function(t) {
                return "<em>" + t + "</em>"
            }, i.codespan = function(t) {
                return "<code>" + t + "</code>"
            }, i.br = function() {
                return this.options.xhtml ? "<br/>" : "<br>"
            }, i.del = function(t) {
                return "<del>" + t + "</del>"
            }, i.link = function(t, n, e) {
                return null === (t = y(this.options.sanitize, this.options.baseUrl, t)) ? e : (t = '<a href="' + t + '"', n && (t += ' title="' + n + '"'), t + ">" + e + "</a>")
            }, i.image = function(t, n, e) {
                return null === (t = y(this.options.sanitize, this.options.baseUrl, t)) ? e : (t = '<img src="' + t + '" alt="' + e + '"', n && (t += ' title="' + n + '"'), t + (this.options.xhtml ? "/>" : ">"))
            }, i.text = function(t) {
                return t
            }, s
        }(),
        ce = function() {
            function s() {}
            var i = s.prototype;
            return i.strong = function(t) {
                return t
            }, i.em = function(t) {
                return t
            }, i.codespan = function(t) {
                return t
            }, i.del = function(t) {
                return t
            }, i.html = function(t) {
                return t
            }, i.text = function(t) {
                return t
            }, i.link = function(t, n, e) {
                return "" + e
            }, i.image = function(t, n, e) {
                return "" + e
            }, i.br = function() {
                return ""
            }, s
        }(),
        he = function() {
            function s() {
                this.seen = {}
            }
            var i = s.prototype;
            return i.serialize = function(t) {
                return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
            }, i.getNextSafeSlug = function(t, n) {
                var e = t,
                    u = 0;
                if (this.seen.hasOwnProperty(e))
                    for (u = this.seen[t]; e = t + "-" + ++u, this.seen.hasOwnProperty(e););
                return n || (this.seen[t] = u, this.seen[e] = 0), e
            }, i.slug = function(t, n) {
                return void 0 === n && (n = {}), t = this.serialize(t), this.getNextSafeSlug(t, n.dryrun)
            }, s
        }(),
        j = function() {
            function s(t) {
                this.options = t || b.defaults, this.options.renderer = this.options.renderer || new ee, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new ce, this.slugger = new he
            }
            s.parse = function(t, n) {
                return new s(n).parse(t)
            }, s.parseInline = function(t, n) {
                return new s(n).parseInline(t)
            };
            var i = s.prototype;
            return i.parse = function(t, n) {
                void 0 === n && (n = !0);
                for (var e, u, r, o, p, F, A, a, C, c, m, E, l, k, x, oe, M = "", ae = t.length, te = 0; te < ae; te++)
                    if (a = t[te], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[a.type] && (!1 !== (oe = this.options.extensions.renderers[a.type].call({
                            parser: this
                        }, a)) || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type))) M += oe || "";
                    else switch (a.type) {
                        case "space":
                            continue;
                        case "hr":
                            M += this.renderer.hr();
                            continue;
                        case "heading":
                            M += this.renderer.heading(this.parseInline(a.tokens), a.depth, pe(this.parseInline(a.tokens, this.textRenderer)), this.slugger);
                            continue;
                        case "code":
                            M += this.renderer.code(a.text, a.lang, a.escaped);
                            continue;
                        case "table":
                            for (F = C = "", r = a.header.length, e = 0; e < r; e++) F += this.renderer.tablecell(this.parseInline(a.header[e].tokens), {
                                header: !0,
                                align: a.align[e]
                            });
                            for (C += this.renderer.tablerow(F), A = "", r = a.rows.length, e = 0; e < r; e++) {
                                for (F = "", o = (p = a.rows[e]).length, u = 0; u < o; u++) F += this.renderer.tablecell(this.parseInline(p[u].tokens), {
                                    header: !1,
                                    align: a.align[u]
                                });
                                A += this.renderer.tablerow(F)
                            }
                            M += this.renderer.table(C, A);
                            continue;
                        case "blockquote":
                            A = this.parse(a.tokens), M += this.renderer.blockquote(A);
                            continue;
                        case "list":
                            for (C = a.ordered, ne = a.start, c = a.loose, r = a.items.length, A = "", e = 0; e < r; e++) l = (E = a.items[e]).checked, k = E.task, m = "", E.task && (x = this.renderer.checkbox(l), c ? 0 < E.tokens.length && "paragraph" === E.tokens[0].type ? (E.tokens[0].text = x + " " + E.tokens[0].text, E.tokens[0].tokens && 0 < E.tokens[0].tokens.length && "text" === E.tokens[0].tokens[0].type && (E.tokens[0].tokens[0].text = x + " " + E.tokens[0].tokens[0].text)) : E.tokens.unshift({
                                type: "text",
                                text: x
                            }) : m += x), m += this.parse(E.tokens, c), A += this.renderer.listitem(m, k, l);
                            M += this.renderer.list(A, C, ne);
                            continue;
                        case "html":
                            M += this.renderer.html(a.text);
                            continue;
                        case "paragraph":
                            M += this.renderer.paragraph(this.parseInline(a.tokens));
                            continue;
                        case "text":
                            for (A = a.tokens ? this.parseInline(a.tokens) : a.text; te + 1 < ae && "text" === t[te + 1].type;) A += "\n" + ((a = t[++te]).tokens ? this.parseInline(a.tokens) : a.text);
                            M += n ? this.renderer.paragraph(A) : A;
                            continue;
                        default:
                            var ne = 'Token with "' + a.type + '" type was not found.';
                            if (this.options.silent) return void console.error(ne);
                            throw new Error(ne)
                    }
                return M
            }, i.parseInline = function(t, n) {
                n = n || this.renderer;
                for (var e, u, r = "", o = t.length, p = 0; p < o; p++)
                    if (e = t[p], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[e.type] && (!1 !== (u = this.options.extensions.renderers[e.type].call({
                            parser: this
                        }, e)) || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(e.type))) r += u || "";
                    else switch (e.type) {
                        case "escape":
                        case "text":
                            r += n.text(e.text);
                            break;
                        case "html":
                            r += n.html(e.text);
                            break;
                        case "link":
                            r += n.link(e.href, e.title, this.parseInline(e.tokens, n));
                            break;
                        case "image":
                            r += n.image(e.href, e.title, e.text);
                            break;
                        case "strong":
                            r += n.strong(this.parseInline(e.tokens, n));
                            break;
                        case "em":
                            r += n.em(this.parseInline(e.tokens, n));
                            break;
                        case "codespan":
                            r += n.codespan(e.text);
                            break;
                        case "br":
                            r += n.br();
                            break;
                        case "del":
                            r += n.del(this.parseInline(e.tokens, n));
                            break;
                        default:
                            var F = 'Token with "' + e.type + '" type was not found.';
                            if (this.options.silent) return void console.error(F);
                            throw new Error(F)
                    }
                return r
            }, s
        }(),
        ie = function() {
            function s(t) {
                this.options = t || b.defaults
            }
            var i = s.prototype;
            return i.preprocess = function(t) {
                return t
            }, i.postprocess = function(t) {
                return t
            }, s
        }();

    function f(s, i) {
        return function(t, n, e) {
            "function" == typeof n && (e = n, n = null);
            var u, r, o, p = Z({}, n),
                F = (n = Z({}, D.defaults, p), u = n.silent, r = n.async, o = e, function(l) {
                    var k;
                    if (l.message += "\nPlease report this to https://github.com/markedjs/marked.", u) return k = "<p>An error occurred:</p><pre>" + B(l.message + "", !0) + "</pre>", r ? Promise.resolve(k) : o ? void o(null, k) : k;
                    if (r) return Promise.reject(l);
                    if (!o) throw l;
                    o(l)
                });
            if (null == t) return F(new Error("marked(): input parameter is undefined or null"));
            if ("string" != typeof t) return F(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
            if ((p = n) && p.sanitize && !p.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"), n.hooks && (n.hooks.options = n), e) {
                var A, a = n.highlight;
                try {
                    n.hooks && (t = n.hooks.preprocess(t)), A = s(t, n)
                } catch (l) {
                    return F(l)
                }
                var C, c = function(l) {
                    var k;
                    if (!l) try {
                        n.walkTokens && D.walkTokens(A, n.walkTokens), k = i(A, n), n.hooks && (k = n.hooks.postprocess(k))
                    } catch (x) {
                        l = x
                    }
                    return n.highlight = a, l ? F(l) : e(null, k)
                };
                return !a || a.length < 3 ? c() : (delete n.highlight, A.length ? (C = 0, D.walkTokens(A, function(l) {
                    "code" === l.type && (C++, setTimeout(function() {
                        a(l.text, l.lang, function(k, x) {
                            if (k) return c(k);
                            null != x && x !== l.text && (l.text = x, l.escaped = !0), 0 == --C && c()
                        })
                    }, 0))
                }), void(0 === C && c())) : c())
            }
            if (n.async) return Promise.resolve(n.hooks ? n.hooks.preprocess(t) : t).then(function(l) {
                return s(l, n)
            }).then(function(l) {
                return n.walkTokens ? Promise.all(D.walkTokens(l, n.walkTokens)).then(function() {
                    return l
                }) : l
            }).then(function(l) {
                return i(l, n)
            }).then(function(l) {
                return n.hooks ? n.hooks.postprocess(l) : l
            }).catch(F);
            try {
                n.hooks && (t = n.hooks.preprocess(t));
                var m = s(t, n),
                    E = (n.walkTokens && D.walkTokens(m, n.walkTokens), i(m, n));
                return n.hooks ? n.hooks.postprocess(E) : E
            } catch (l) {
                return F(l)
            }
        }
    }

    function D(s, i, t) {
        return f(W.lex, j.parse)(s, i, t)
    }
    ie.passThroughHooks = new Set(["preprocess", "postprocess"]), D.options = D.setOptions = function(s) {
        return D.defaults = Z({}, D.defaults, s), b.defaults = s = D.defaults, D
    }, D.getDefaults = T, D.defaults = b.defaults, D.use = function() {
        for (var s = D.defaults.extensions || {
                renderers: {},
                childTokens: {}
            }, i = arguments.length, t = new Array(i), n = 0; n < i; n++) t[n] = arguments[n];
        t.forEach(function(e) {
            var u, r = Z({}, e);
            if (r.async = D.defaults.async || r.async || !1, e.extensions && (e.extensions.forEach(function(c) {
                    if (!c.name) throw new Error("extension name required");
                    var m;
                    if (c.renderer && (s.renderers[c.name] = (m = s.renderers[c.name]) ? function() {
                            for (var E = arguments.length, l = new Array(E), k = 0; k < E; k++) l[k] = arguments[k];
                            var x = c.renderer.apply(this, l);
                            return !1 === x ? m.apply(this, l) : x
                        } : c.renderer), c.tokenizer) {
                        if (!c.level || "block" !== c.level && "inline" !== c.level) throw new Error("extension level must be 'block' or 'inline'");
                        s[c.level] ? s[c.level].unshift(c.tokenizer) : s[c.level] = [c.tokenizer], c.start && ("block" === c.level ? s.startBlock ? s.startBlock.push(c.start) : s.startBlock = [c.start] : "inline" === c.level && (s.startInline ? s.startInline.push(c.start) : s.startInline = [c.start]))
                    }
                    c.childTokens && (s.childTokens[c.name] = c.childTokens)
                }), r.extensions = s), e.renderer) {
                var o, p = D.defaults.renderer || new ee;
                for (o in e.renderer) ! function(c) {
                    var m = p[c];
                    p[c] = function() {
                        for (var E = arguments.length, l = new Array(E), k = 0; k < E; k++) l[k] = arguments[k];
                        var x = e.renderer[c].apply(p, l);
                        return !1 === x ? m.apply(p, l) : x
                    }
                }(o);
                r.renderer = p
            }
            if (e.tokenizer) {
                var F, A = D.defaults.tokenizer || new K;
                for (F in e.tokenizer) ! function(c) {
                    var m = A[c];
                    A[c] = function() {
                        for (var E = arguments.length, l = new Array(E), k = 0; k < E; k++) l[k] = arguments[k];
                        var x = e.tokenizer[c].apply(A, l);
                        return !1 === x ? m.apply(A, l) : x
                    }
                }(F);
                r.tokenizer = A
            }
            if (e.hooks) {
                var a, C = D.defaults.hooks || new ie;
                for (a in e.hooks) ! function(c) {
                    var m = C[c];
                    C[c] = ie.passThroughHooks.has(c) ? function(E) {
                        return D.defaults.async ? Promise.resolve(e.hooks[c].call(C, E)).then(function(l) {
                            return m.call(C, l)
                        }) : (E = e.hooks[c].call(C, E), m.call(C, E))
                    } : function() {
                        for (var E = arguments.length, l = new Array(E), k = 0; k < E; k++) l[k] = arguments[k];
                        var x = e.hooks[c].apply(C, l);
                        return !1 === x ? m.apply(C, l) : x
                    }
                }(a);
                r.hooks = C
            }
            e.walkTokens && (u = D.defaults.walkTokens, r.walkTokens = function(c) {
                var m = [];
                return m.push(e.walkTokens.call(this, c)), u ? m.concat(u.call(this, c)) : m
            }), D.setOptions(r)
        })
    }, D.walkTokens = function(s, i) {
        for (var t, n = [], e = z(s); !(t = e()).done;) ! function() {
            var u = t.value;
            switch (n = n.concat(i.call(D, u)), u.type) {
                case "table":
                    for (var r = z(u.header); !(o = r()).done;) {
                        var o = o.value;
                        n = n.concat(D.walkTokens(o.tokens, i))
                    }
                    for (var p, F = z(u.rows); !(p = F()).done;)
                        for (var A = z(p.value); !(a = A()).done;) {
                            var a = a.value;
                            n = n.concat(D.walkTokens(a.tokens, i))
                        }
                    break;
                case "list":
                    n = n.concat(D.walkTokens(u.items, i));
                    break;
                default:
                    D.defaults.extensions && D.defaults.extensions.childTokens && D.defaults.extensions.childTokens[u.type] ? D.defaults.extensions.childTokens[u.type].forEach(function(C) {
                        n = n.concat(D.walkTokens(u[C], i))
                    }) : u.tokens && (n = n.concat(D.walkTokens(u.tokens, i)))
            }
        }();
        return n
    }, D.parseInline = f(W.lexInline, j.parseInline), D.Parser = j, D.parser = j.parse, D.Renderer = ee, D.TextRenderer = ce, D.Lexer = W, D.lexer = W.lex, D.Tokenizer = K, D.Slugger = he, D.Hooks = ie, _ = (D.parse = D).options;
    var S = D.setOptions,
        R = D.use,
        I = D.walkTokens,
        X = D.parseInline,
        se = D,
        O = j.parse,
        U = W.lex;
    b.Hooks = ie, b.Lexer = W, b.Parser = j, b.Renderer = ee, b.Slugger = he, b.TextRenderer = ce, b.Tokenizer = K, b.getDefaults = T, b.lexer = U, b.marked = D, b.options = _, b.parse = se, b.parseInline = X, b.parser = O, b.setOptions = S, b.use = R, b.walkTokens = I
});
var Atropos = function() {
    "use strict";

    function b() {
        return b = Object.assign ? Object.assign.bind() : function(z) {
            for (var T = 1; T < arguments.length; T++) {
                var $ = arguments[T];
                for (var q in $) Object.prototype.hasOwnProperty.call($, q) && (z[q] = $[q])
            }
            return z
        }, b.apply(this, arguments)
    }
    var L = function(z, T) {
            return z.querySelector(T)
        },
        Z = function(z) {
            void 0 === z && (z = {});
            var T = {};
            return Object.keys(z).forEach(function($) {
                void 0 !== z[$] && (T[$] = z[$])
            }), T
        },
        Fe = {
            alwaysActive: !1,
            activeOffset: 50,
            shadowOffset: 50,
            shadowScale: 1,
            duration: 300,
            rotate: !0,
            rotateTouch: !0,
            rotateXMax: 15,
            rotateYMax: 15,
            rotateXInvert: !1,
            rotateYInvert: !1,
            stretchX: 0,
            stretchY: 0,
            stretchZ: 0,
            commonOrigin: !0,
            shadow: !0,
            highlight: !0
        };
    return function(z) {
        void 0 === z && (z = {});
        var T, $, q, Ae, V, re, N, B, J, pe, ke, v, w = z.el,
            y = z.eventsEl,
            le = z.isComponent,
            Y = {
                __atropos__: !0,
                params: b({}, Fe, {
                    onEnter: null,
                    onLeave: null,
                    onRotate: null
                }, Z(z || {})),
                destroyed: !1,
                isActive: !1
            },
            d = Y.params,
            H = [];
        ! function f() {
            v = requestAnimationFrame(function() {
                H.forEach(function(D) {
                    "function" == typeof D ? D() : D.element.style[D.prop] = D.value
                }), H.splice(0, H.length), f()
            })
        }();
        var fe, f, P = function(f, D) {
                H.push({
                    element: f,
                    prop: "transitionDuration",
                    value: D
                })
            },
            G = function(f, D) {
                H.push({
                    element: f,
                    prop: "transitionTimingFunction",
                    value: D
                })
            },
            Q = function(f, D) {
                H.push({
                    element: f,
                    prop: "transform",
                    value: D
                })
            },
            K = function(f, D) {
                H.push({
                    element: f,
                    prop: "opacity",
                    value: D
                })
            },
            g = function(f, D, _, S) {
                return f.addEventListener(D, _, S)
            },
            h = function(f, D, _, S) {
                return f.removeEventListener(D, _, S)
            },
            ge = function(f) {
                var O, D = f.rotateXPercentage,
                    _ = void 0 === D ? 0 : D,
                    S = f.rotateYPercentage,
                    R = void 0 === S ? 0 : S,
                    I = f.duration,
                    X = f.opacityOnly,
                    se = f.easeOut;
                (O = T, O.querySelectorAll("[data-atropos-offset], [data-atropos-opacity]")).forEach(function(O) {
                    P(O, I), G(O, se ? "ease-out" : "");
                    var U = function(e) {
                        if (e.dataset.atroposOpacity && "string" == typeof e.dataset.atroposOpacity) return e.dataset.atroposOpacity.split(";").map(function(u) {
                            return parseFloat(u)
                        })
                    }(O);
                    if (0 === _ && 0 === R) X || Q(O, "translate3d(0, 0, 0)"), U && K(O, U[0]);
                    else {
                        var s = parseFloat(O.dataset.atroposOffset) / 100;
                        if (Number.isNaN(s) || X || Q(O, "translate3d(" + -R * -s + "%, " + _ * -s + "%, 0)"), U) {
                            var i = U[0],
                                t = U[1],
                                n = Math.max(Math.abs(_), Math.abs(R));
                            K(O, i + (t - i) * n / 100)
                        }
                    }
                })
            },
            De = function(f, D) {
                var _ = w !== y;
                if (V || (V = w.getBoundingClientRect()), _ && !re && (re = y.getBoundingClientRect()), void 0 === f && void 0 === D) {
                    var S = _ ? re : V;
                    f = S.left + S.width / 2, D = S.top + S.height / 2
                }
                var R, I = 0,
                    X = 0,
                    O = V.top,
                    U = V.left,
                    s = V.width,
                    i = V.height;
                if (_) {
                    var n = re.top,
                        e = re.left;
                    X = d.rotateYMax * (f - e - (s / 2 + (U - e))) / (re.width - s / 2) * -1, I = d.rotateXMax * (D - n - (i / 2 + (O - n))) / (re.height - i / 2), R = f - U + "px " + (D - O) + "px"
                } else X = d.rotateYMax * (f - U - s / 2) / (s / 2) * -1, I = d.rotateXMax * (D - O - i / 2) / (i / 2);
                I = Math.min(Math.max(-I, -d.rotateXMax), d.rotateXMax), d.rotateXInvert && (I = -I), X = Math.min(Math.max(-X, -d.rotateYMax), d.rotateYMax), d.rotateYInvert && (X = -X);
                var k = I / d.rotateXMax * 100,
                    x = X / d.rotateYMax * 100,
                    oe = (_ ? x / 100 * d.stretchX : 0) * (d.rotateYInvert ? -1 : 1),
                    M = (_ ? k / 100 * d.stretchY : 0) * (d.rotateXInvert ? -1 : 1),
                    ae = _ ? Math.max(Math.abs(k), Math.abs(x)) / 100 * d.stretchZ : 0;
                Q($, "translate3d(" + oe + "%, " + -M + "%, " + -ae + "px) rotateX(" + I + "deg) rotateY(" + X + "deg)"), R && d.commonOrigin && H.push({
                    element: $,
                    prop: "transformOrigin",
                    value: R
                }), B && (P(B, d.duration + "ms"), G(B, "ease-out"), Q(B, "translate3d(" + .25 * -x + "%, " + .25 * k + "%, 0)"), K(B, Math.max(Math.abs(k), Math.abs(x)) / 100)), ge({
                    rotateXPercentage: k,
                    rotateYPercentage: x,
                    duration: d.duration + "ms",
                    easeOut: !0
                }), "function" == typeof d.onRotate && d.onRotate(I, X)
            },
            W = function() {
                H.push(function() {
                    return w.classList.add("atropos-active")
                }), P($, d.duration + "ms"), G($, "ease-out"), Q(q, "translate3d(0,0, " + d.activeOffset + "px)"), P(q, d.duration + "ms"), G(q, "ease-out"), N && (P(N, d.duration + "ms"), G(N, "ease-out")), Y.isActive = !0
            },
            ee = function(f) {
                if (J = void 0, !("pointerdown" === f.type && "mouse" === f.pointerType || "pointerenter" === f.type && "mouse" !== f.pointerType)) {
                    if ("pointerdown" === f.type && f.preventDefault(), pe = f.clientX, ke = f.clientY, d.alwaysActive) return V = void 0, void(re = void 0);
                    W(), "function" == typeof d.onEnter && d.onEnter()
                }
            },
            ce = function(f) {
                !1 === J && f.cancelable && f.preventDefault()
            },
            he = function(f) {
                if (d.rotate && Y.isActive) {
                    if ("mouse" !== f.pointerType) {
                        if (!d.rotateTouch) return;
                        f.preventDefault()
                    }
                    var D = f.clientX,
                        _ = f.clientY,
                        S = D - pe,
                        R = _ - ke;
                    if ("string" == typeof d.rotateTouch && (0 !== S || 0 !== R) && void 0 === J) {
                        if (S * S + R * R >= 25) {
                            var I = 180 * Math.atan2(Math.abs(R), Math.abs(S)) / Math.PI;
                            J = "scroll-y" === d.rotateTouch ? I > 45 : 90 - I > 45
                        }!1 === J && (w.classList.add("atropos-rotate-touch"), f.cancelable && f.preventDefault())
                    }
                    "mouse" !== f.pointerType && J || De(D, _)
                }
            },
            j = function(f) {
                if (V = void 0, re = void 0, Y.isActive && !(f && "pointerup" === f.type && "mouse" === f.pointerType || f && "pointerleave" === f.type && "mouse" !== f.pointerType)) {
                    if ("string" == typeof d.rotateTouch && J && w.classList.remove("atropos-rotate-touch"), d.alwaysActive) return De(), "function" == typeof d.onRotate && d.onRotate(0, 0), void("function" == typeof d.onLeave && d.onLeave());
                    H.push(function() {
                        return w.classList.remove("atropos-active")
                    }), P(q, d.duration + "ms"), G(q, ""), Q(q, "translate3d(0,0, 0px)"), N && (P(N, d.duration + "ms"), G(N, "")), B && (P(B, d.duration + "ms"), G(B, ""), Q(B, "translate3d(0, 0, 0)"), K(B, 0)), P($, d.duration + "ms"), G($, ""), Q($, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"), ge({
                        duration: d.duration + "ms"
                    }), Y.isActive = !1, "function" == typeof d.onRotate && d.onRotate(0, 0), "function" == typeof d.onLeave && d.onLeave()
                }
            },
            ie = function(f) {
                var D = f.target;
                !y.contains(D) && D !== y && Y.isActive && j()
            };
        return Y.destroy = function() {
            Y.destroyed = !0, cancelAnimationFrame(v), h(document, "click", ie), h(y, "pointerdown", ee), h(y, "pointerenter", ee), h(y, "pointermove", he), h(y, "touchmove", ce), h(y, "pointerleave", j), h(y, "pointerup", j), h(y, "lostpointercapture", j), delete w.__atropos__
        }, "string" == typeof w && (w = L(document, w)), w && (w.__atropos__ || (void 0 !== y ? "string" == typeof y && (y = L(document, y)) : y = w, T = le ? w.parentNode.host : w, Object.assign(Y, {
            el: w
        }), $ = L(w, ".atropos-rotate"), q = L(w, ".atropos-scale"), Ae = L(w, ".atropos-inner"), w.__atropos__ = Y)), w && y && (d.shadow && ((N = L(w, ".atropos-shadow")) || ((N = document.createElement("span")).classList.add("atropos-shadow"), fe = !0), Q(N, "translate3d(0,0,-" + d.shadowOffset + "px) scale(" + d.shadowScale + ")"), fe && $.appendChild(N)), d.highlight && ((B = L(w, ".atropos-highlight")) || ((B = document.createElement("span")).classList.add("atropos-highlight"), f = !0), Q(B, "translate3d(0,0,0)"), f && Ae.appendChild(B)), d.rotateTouch && w.classList.add("string" == typeof d.rotateTouch ? "atropos-rotate-touch-" + d.rotateTouch : "atropos-rotate-touch"), L(T, "[data-atropos-opacity]") && ge({
            opacityOnly: !0
        }), g(document, "click", ie), g(y, "pointerdown", ee), g(y, "pointerenter", ee), g(y, "pointermove", he), g(y, "touchmove", ce), g(y, "pointerleave", j), g(y, "pointerup", j), g(y, "lostpointercapture", j), d.alwaysActive && (W(), De())), Y
    }
}();

function loadAtropos() {
    Atropos({
        el: ".atropos-card",
        duration: 400,
        activeOffset: 70,
        shadow: !0,
        shadowScale: 1,
        highlight: !0
    })
}