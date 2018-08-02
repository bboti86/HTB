function hexToRgb(t) {
    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, n, i) {
        return e + e + n + n + i + i
    });
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return e ? {
        r: parseInt(e[1], 16),
        g: parseInt(e[2], 16),
        b: parseInt(e[3], 16)
    } : null
}

function clamp(t, e, n) {
    return Math.min(Math.max(t, e), n)
}

function isInArray(t, e) {
    return e.indexOf(t) > -1
}
if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
            function n(t) {
                var e = !!t && "length" in t && t.length,
                    n = ot.type(t);
                return "function" !== n && !ot.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }

            function i(t, e, n) {
                if (ot.isFunction(e)) return ot.grep(t, function(t, i) {
                    return !!e.call(t, i, t) !== n
                });
                if (e.nodeType) return ot.grep(t, function(t) {
                    return t === e !== n
                });
                if ("string" == typeof e) {
                    if (dt.test(e)) return ot.filter(e, t, n);
                    e = ot.filter(e, t)
                }
                return ot.grep(t, function(t) {
                    return Z.call(e, t) > -1 !== n
                })
            }

            function r(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }

            function o(t) {
                var e = {};
                return ot.each(t.match(gt) || [], function(t, n) {
                    e[n] = !0
                }), e
            }

            function s() {
                Q.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), ot.ready()
            }

            function a() {
                this.expando = ot.expando + a.uid++
            }

            function l(t, e, n) {
                var i;
                if (void 0 === n && 1 === t.nodeType)
                    if (i = "data-" + e.replace(kt, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? ot.parseJSON(n) : n)
                        } catch (t) {}
                        Tt.set(t, e, n)
                    } else n = void 0;
                return n
            }

            function c(t, e, n, i) {
                var r, o = 1,
                    s = 20,
                    a = i ? function() {
                        return i.cur()
                    } : function() {
                        return ot.css(t, e, "")
                    },
                    l = a(),
                    c = n && n[3] || (ot.cssNumber[e] ? "" : "px"),
                    u = (ot.cssNumber[e] || "px" !== c && +l) && St.exec(ot.css(t, e));
                if (u && u[3] !== c) {
                    c = c || u[3], n = n || [], u = +l || 1;
                    do {
                        o = o || ".5", u /= o, ot.style(t, e, u + c)
                    } while (o !== (o = a() / l) && 1 !== o && --s)
                }
                return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
            }

            function u(t, e) {
                var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
            }

            function p(t, e) {
                for (var n = 0, i = t.length; i > n; n++) wt.set(t[n], "globalEval", !e || wt.get(e[n], "globalEval"))
            }

            function d(t, e, n, i, r) {
                for (var o, s, a, l, c, d, f = e.createDocumentFragment(), h = [], v = 0, m = t.length; m > v; v++)
                    if ((o = t[v]) || 0 === o)
                        if ("object" === ot.type(o)) ot.merge(h, o.nodeType ? [o] : o);
                        else if (It.test(o)) {
                    for (s = s || f.appendChild(e.createElement("div")), a = (Dt.exec(o) || ["", ""])[1].toLowerCase(), l = jt[a] || jt._default, s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], d = l[0]; d--;) s = s.lastChild;
                    ot.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
                } else h.push(e.createTextNode(o));
                for (f.textContent = "", v = 0; o = h[v++];)
                    if (i && ot.inArray(o, i) > -1) r && r.push(o);
                    else if (c = ot.contains(o.ownerDocument, o), s = u(f.appendChild(o), "script"), c && p(s), n)
                    for (d = 0; o = s[d++];) Nt.test(o.type || "") && n.push(o);
                return f
            }

            function f() {
                return !0
            }

            function h() {
                return !1
            }

            function v() {
                try {
                    return Q.activeElement
                } catch (t) {}
            }

            function m(t, e, n, i, r, o) {
                var s, a;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = void 0);
                    for (a in e) m(t, a, n, i, e[a], o);
                    return t
                }
                if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = h;
                else if (!r) return this;
                return 1 === o && (s = r, r = function(t) {
                    return ot().off(t), s.apply(this, arguments)
                }, r.guid = s.guid || (s.guid = ot.guid++)), t.each(function() {
                    ot.event.add(this, e, r, i, n)
                })
            }

            function g(t, e) {
                return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
            }

            function y(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function b(t) {
                var e = Ft.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }

            function x(t, e) {
                var n, i, r, o, s, a, l, c;
                if (1 === e.nodeType) {
                    if (wt.hasData(t) && (o = wt.access(t), s = wt.set(e, o), c = o.events)) {
                        delete s.handle, s.events = {};
                        for (r in c)
                            for (n = 0, i = c[r].length; i > n; n++) ot.event.add(e, r, c[r][n])
                    }
                    Tt.hasData(t) && (a = Tt.access(t), l = ot.extend({}, a), Tt.set(e, l))
                }
            }

            function w(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && $t.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }

            function T(t, e, n, i) {
                e = G.apply([], e);
                var r, o, s, a, l, c, p = 0,
                    f = t.length,
                    h = f - 1,
                    v = e[0],
                    m = ot.isFunction(v);
                if (m || f > 1 && "string" == typeof v && !it.checkClone && Pt.test(v)) return t.each(function(r) {
                    var o = t.eq(r);
                    m && (e[0] = v.call(this, r, o.html())), T(o, e, n, i)
                });
                if (f && (r = d(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                    for (s = ot.map(u(r, "script"), y), a = s.length; f > p; p++) l = r, p !== h && (l = ot.clone(l, !0, !0), a && ot.merge(s, u(l, "script"))), n.call(t[p], l, p);
                    if (a)
                        for (c = s[s.length - 1].ownerDocument, ot.map(s, b), p = 0; a > p; p++) l = s[p], Nt.test(l.type || "") && !wt.access(l, "globalEval") && ot.contains(c, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Mt, "")))
                }
                return t
            }

            function C(t, e, n) {
                for (var i, r = e ? ot.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ot.cleanData(u(i)), i.parentNode && (n && ot.contains(i.ownerDocument, i) && p(u(i, "script")), i.parentNode.removeChild(i));
                return t
            }

            function k(t, e) {
                var n = ot(e.createElement(t)).appendTo(e.body),
                    i = ot.css(n[0], "display");
                return n.detach(), i
            }

            function E(t) {
                var e = Q,
                    n = Wt[t];
                return n || (n = k(t, e), "none" !== n && n || (Ht = (Ht || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ht[0].contentDocument, e.write(), e.close(), n = k(t, e), Ht.detach()), Wt[t] = n), n
            }

            function S(t, e, n) {
                var i, r, o, s, a = t.style;
                return n = n || Ut(t), n && (s = n.getPropertyValue(e) || n[e], "" !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)), !it.pixelMarginRight() && Bt.test(s) && zt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
            }

            function _(t, e) {
                return {
                    get: function() {
                        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                    }
                }
            }

            function A(t) {
                if (t in Kt) return t;
                for (var e = t[0].toUpperCase() + t.slice(1), n = Gt.length; n--;)
                    if ((t = Gt[n] + e) in Kt) return t
            }

            function $(t, e, n) {
                var i = St.exec(e);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
            }

            function D(t, e, n, i, r) {
                for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ot.css(t, n + _t[o], !0, r)), i ? ("content" === n && (s -= ot.css(t, "padding" + _t[o], !0, r)), "margin" !== n && (s -= ot.css(t, "border" + _t[o] + "Width", !0, r))) : (s += ot.css(t, "padding" + _t[o], !0, r), "padding" !== n && (s += ot.css(t, "border" + _t[o] + "Width", !0, r)));
                return s
            }

            function N(e, n, i) {
                var r = !0,
                    o = "width" === n ? e.offsetWidth : e.offsetHeight,
                    s = Ut(e),
                    a = "border-box" === ot.css(e, "boxSizing", !1, s);
                if (Q.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
                    if (o = S(e, n, s), (0 > o || null == o) && (o = e.style[n]), Bt.test(o)) return o;
                    r = a && (it.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
                }
                return o + D(e, n, i || (a ? "border" : "content"), r, s) + "px"
            }

            function j(t, e) {
                for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = wt.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && At(i) && (o[s] = wt.access(i, "olddisplay", E(i.nodeName)))) : (r = At(i), "none" === n && r || wt.set(i, "olddisplay", r ? n : ot.css(i, "display"))));
                for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
                return t
            }

            function I(t, e, n, i, r) {
                return new I.prototype.init(t, e, n, i, r)
            }

            function O() {
                return t.setTimeout(function() {
                    Zt = void 0
                }), Zt = ot.now()
            }

            function R(t, e) {
                var n, i = 0,
                    r = {
                        height: t
                    };
                for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = _t[i], r["margin" + n] = r["padding" + n] = t;
                return e && (r.opacity = r.width = t), r
            }

            function L(t, e, n) {
                for (var i, r = (F.tweeners[e] || []).concat(F.tweeners["*"]), o = 0, s = r.length; s > o; o++)
                    if (i = r[o].call(n, e, t)) return i
            }

            function q(t, e, n) {
                var i, r, o, s, a, l, c, u = this,
                    p = {},
                    d = t.style,
                    f = t.nodeType && At(t),
                    h = wt.get(t, "fxshow");
                n.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, u.always(function() {
                    u.always(function() {
                        a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], c = ot.css(t, "display"), "inline" === ("none" === c ? wt.get(t, "olddisplay") || E(t.nodeName) : c) && "none" === ot.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", u.always(function() {
                    d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                }));
                for (i in e)
                    if (r = e[i], ee.exec(r)) {
                        if (delete e[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                            if ("show" !== r || !h || void 0 === h[i]) continue;
                            f = !0
                        }
                        p[i] = h && h[i] || ot.style(t, i)
                    } else c = void 0;
                if (ot.isEmptyObject(p)) "inline" === ("none" === c ? E(t.nodeName) : c) && (d.display = c);
                else {
                    h ? "hidden" in h && (f = h.hidden) : h = wt.access(t, "fxshow", {}), o && (h.hidden = !f), f ? ot(t).show() : u.done(function() {
                        ot(t).hide()
                    }), u.done(function() {
                        var e;
                        wt.remove(t, "fxshow");
                        for (e in p) ot.style(t, e, p[e])
                    });
                    for (i in p) s = L(f ? h[i] : 0, i, u), i in h || (h[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
                }
            }

            function P(t, e) {
                var n, i, r, o, s;
                for (n in t)
                    if (i = ot.camelCase(n), r = e[i], o = t[n], ot.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = ot.cssHooks[i]) && "expand" in s) {
                        o = s.expand(o), delete t[i];
                        for (n in o) n in t || (t[n] = o[n], e[n] = r)
                    } else e[i] = r
            }

            function F(t, e, n) {
                var i, r, o = 0,
                    s = F.prefilters.length,
                    a = ot.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (r) return !1;
                        for (var e = Zt || O(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                        return a.notifyWith(t, [c, o, n]), 1 > o && l ? n : (a.resolveWith(t, [c]), !1)
                    },
                    c = a.promise({
                        elem: t,
                        props: ot.extend({}, e),
                        opts: ot.extend(!0, {
                            specialEasing: {},
                            easing: ot.easing._default
                        }, n),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: Zt || O(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(e, n) {
                            var i = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(i), i
                        },
                        stop: function(e) {
                            var n = 0,
                                i = e ? c.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; i > n; n++) c.tweens[n].run(1);
                            return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                        }
                    }),
                    u = c.props;
                for (P(u, c.opts.specialEasing); s > o; o++)
                    if (i = F.prefilters[o].call(c, t, u, c.opts)) return ot.isFunction(i.stop) && (ot._queueHooks(c.elem, c.opts.queue).stop = ot.proxy(i.stop, i)), i;
                return ot.map(u, L, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
                    elem: t,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }

            function M(t) {
                return t.getAttribute && t.getAttribute("class") || ""
            }

            function H(t) {
                return function(e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var i, r = 0,
                        o = e.toLowerCase().match(gt) || [];
                    if (ot.isFunction(n))
                        for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                }
            }

            function W(t, e, n, i) {
                function r(a) {
                    var l;
                    return o[a] = !0, ot.each(t[a] || [], function(t, a) {
                        var c = a(e, n, i);
                        return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                    }), l
                }
                var o = {},
                    s = t === ge;
                return r(e.dataTypes[0]) || !o["*"] && r("*")
            }

            function z(t, e) {
                var n, i, r = ot.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
                return i && ot.extend(!0, t, i), t
            }

            function B(t, e, n) {
                for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                    "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                if (i)
                    for (r in a)
                        if (a[r] && a[r].test(i)) {
                            l.unshift(r);
                            break
                        }
                if (l[0] in n) o = l[0];
                else {
                    for (r in n) {
                        if (!l[0] || t.converters[r + " " + l[0]]) {
                            o = r;
                            break
                        }
                        s || (s = r)
                    }
                    o = o || s
                }
                return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
            }

            function U(t, e, n, i) {
                var r, o, s, a, l, c = {},
                    u = t.dataTypes.slice();
                if (u[1])
                    for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                for (o = u.shift(); o;)
                    if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                        if ("*" === o) o = l;
                        else if ("*" !== l && l !== o) {
                    if (!(s = c[l + " " + o] || c["* " + o]))
                        for (r in c)
                            if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && t.throws) e = s(e);
                        else try {
                            e = s(e)
                        } catch (t) {
                            return {
                                state: "parsererror",
                                error: s ? t : "No conversion from " + l + " to " + o
                            }
                        }
                }
                return {
                    state: "success",
                    data: e
                }
            }

            function X(t, e, n, i) {
                var r;
                if (ot.isArray(e)) ot.each(e, function(e, r) {
                    n || xe.test(t) ? i(t, r) : X(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
                });
                else if (n || "object" !== ot.type(e)) i(t, e);
                else
                    for (r in e) X(t + "[" + r + "]", e[r], n, i)
            }

            function V(t) {
                return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
            }
            var J = [],
                Q = t.document,
                Y = J.slice,
                G = J.concat,
                K = J.push,
                Z = J.indexOf,
                tt = {},
                et = tt.toString,
                nt = tt.hasOwnProperty,
                it = {},
                rt = "2.2.0",
                ot = function(t, e) {
                    return new ot.fn.init(t, e)
                },
                st = function(t, e) {
                    return e.toUpperCase()
                };
            ot.fn = ot.prototype = {
                jquery: rt,
                constructor: ot,
                selector: "",
                length: 0,
                toArray: function() {
                    return Y.call(this)
                },
                get: function(t) {
                    return null != t ? 0 > t ? this[t + this.length] : this[t] : Y.call(this)
                },
                pushStack: function(t) {
                    var e = ot.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function(t) {
                    return ot.each(this, t)
                },
                map: function(t) {
                    return this.pushStack(ot.map(this, function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(Y.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: K,
                sort: J.sort,
                splice: J.splice
            }, ot.extend = ot.fn.extend = function() {
                var t, e, n, i, r, o, s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                    if (null != (t = arguments[a]))
                        for (e in t) n = s[e], i = t[e], s !== i && (c && i && (ot.isPlainObject(i) || (r = ot.isArray(i))) ? (r ? (r = !1, o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {}, s[e] = ot.extend(c, o, i)) : void 0 !== i && (s[e] = i));
                return s
            }, ot.extend({
                expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isFunction: function(t) {
                    return "function" === ot.type(t)
                },
                isArray: Array.isArray,
                isWindow: function(t) {
                    return null != t && t === t.window
                },
                isNumeric: function(t) {
                    var e = t && t.toString();
                    return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
                },
                isPlainObject: function(t) {
                    return "object" === ot.type(t) && !t.nodeType && !ot.isWindow(t) && !(t.constructor && !nt.call(t.constructor.prototype, "isPrototypeOf"))
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                type: function(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
                },
                globalEval: function(t) {
                    var e, n = eval;
                    (t = ot.trim(t)) && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : n(t))
                },
                camelCase: function(t) {
                    return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, st)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e) {
                    var i, r = 0;
                    if (n(t))
                        for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++);
                    else
                        for (r in t)
                            if (e.call(t[r], r, t[r]) === !1) break;
                    return t
                },
                trim: function(t) {
                    return null == t ? "" : (t + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                },
                makeArray: function(t, e) {
                    var i = e || [];
                    return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
                },
                inArray: function(t, e, n) {
                    return null == e ? -1 : Z.call(e, t, n)
                },
                merge: function(t, e) {
                    for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
                    return t.length = r, t
                },
                grep: function(t, e, n) {
                    for (var i = [], r = 0, o = t.length, s = !n; o > r; r++) !e(t[r], r) !== s && i.push(t[r]);
                    return i
                },
                map: function(t, e, i) {
                    var r, o, s = 0,
                        a = [];
                    if (n(t))
                        for (r = t.length; r > s; s++) null != (o = e(t[s], s, i)) && a.push(o);
                    else
                        for (s in t) null != (o = e(t[s], s, i)) && a.push(o);
                    return G.apply([], a)
                },
                guid: 1,
                proxy: function(t, e) {
                    var n, i, r;
                    return "string" == typeof e && (n = t[e], e = t, t = n), ot.isFunction(t) ? (i = Y.call(arguments, 2), r = function() {
                        return t.apply(e || this, i.concat(Y.call(arguments)))
                    }, r.guid = t.guid = t.guid || ot.guid++, r) : void 0
                },
                now: Date.now,
                support: it
            }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = J[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
                tt["[object " + e + "]"] = e.toLowerCase()
            });
            var at = function(t) {
                    function e(t, e, n, i) {
                        var r, o, s, a, c, p, d, f, h = e && e.ownerDocument,
                            v = e ? e.nodeType : 9;
                        if (n = n || [], "string" != typeof t || !t || 1 !== v && 9 !== v && 11 !== v) return n;
                        if (!i && ((e ? e.ownerDocument || e : P) !== D && $(e), e = e || D, j)) {
                            if (11 !== v && (p = vt.exec(t)))
                                if (r = p[1]) {
                                    if (9 === v) {
                                        if (!(s = e.getElementById(r))) return n;
                                        if (s.id === r) return n.push(s), n
                                    } else if (h && (s = h.getElementById(r)) && L(e, s) && s.id === r) return n.push(s), n
                                } else {
                                    if (p[2]) return Y.apply(n, e.getElementsByTagName(t)), n;
                                    if ((r = p[3]) && b.getElementsByClassName && e.getElementsByClassName) return Y.apply(n, e.getElementsByClassName(r)), n
                                }
                            if (b.qsa && !z[t + " "] && (!I || !I.test(t))) {
                                if (1 !== v) h = e, f = t;
                                else if ("object" !== e.nodeName.toLowerCase()) {
                                    for ((a = e.getAttribute("id")) ? a = a.replace(gt, "\\$&") : e.setAttribute("id", a = q), d = C(t), o = d.length, c = ut.test(a) ? "#" + a : "[id='" + a + "']"; o--;) d[o] = c + " " + u(d[o]);
                                    f = d.join(","), h = mt.test(t) && l(e.parentNode) || e
                                }
                                if (f) try {
                                    return Y.apply(n, h.querySelectorAll(f)), n
                                } catch (t) {} finally {
                                    a === q && e.removeAttribute("id")
                                }
                            }
                        }
                        return E(t.replace(ot, "$1"), e, n, i)
                    }

                    function n() {
                        function t(n, i) {
                            return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
                        }
                        var e = [];
                        return t
                    }

                    function i(t) {
                        return t[q] = !0, t
                    }

                    function r(t) {
                        var e = D.createElement("div");
                        try {
                            return !!t(e)
                        } catch (t) {
                            return !1
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), e = null
                        }
                    }

                    function o(t, e) {
                        for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
                    }

                    function s(t, e) {
                        var n = e && t,
                            i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                        if (i) return i;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === e) return -1;
                        return t ? 1 : -1
                    }

                    function a(t) {
                        return i(function(e) {
                            return e = +e, i(function(n, i) {
                                for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                            })
                        })
                    }

                    function l(t) {
                        return t && void 0 !== t.getElementsByTagName && t
                    }

                    function c() {}

                    function u(t) {
                        for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                        return i
                    }

                    function p(t, e, n) {
                        var i = e.dir,
                            r = n && "parentNode" === i,
                            o = M++;
                        return e.first ? function(e, n, o) {
                            for (; e = e[i];)
                                if (1 === e.nodeType || r) return t(e, n, o)
                        } : function(e, n, s) {
                            var a, l, c, u = [F, o];
                            if (s) {
                                for (; e = e[i];)
                                    if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                            } else
                                for (; e = e[i];)
                                    if (1 === e.nodeType || r) {
                                        if (c = e[q] || (e[q] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[i]) && a[0] === F && a[1] === o) return u[2] = a[2];
                                        if (l[i] = u, u[2] = t(e, n, s)) return !0
                                    }
                        }
                    }

                    function d(t) {
                        return t.length > 1 ? function(e, n, i) {
                            for (var r = t.length; r--;)
                                if (!t[r](e, n, i)) return !1;
                            return !0
                        } : t[0]
                    }

                    function f(t, n, i) {
                        for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
                        return i
                    }

                    function h(t, e, n, i, r) {
                        for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), c && e.push(a));
                        return s
                    }

                    function v(t, e, n, r, o, s) {
                        return r && !r[q] && (r = v(r)), o && !o[q] && (o = v(o, s)), i(function(i, s, a, l) {
                            var c, u, p, d = [],
                                v = [],
                                m = s.length,
                                g = i || f(e || "*", a.nodeType ? [a] : a, []),
                                y = !t || !i && e ? g : h(g, d, t, a, l),
                                b = n ? o || (i ? t : m || r) ? [] : s : y;
                            if (n && n(y, b, a, l), r)
                                for (c = h(b, v), r(c, [], a, l), u = c.length; u--;)(p = c[u]) && (b[v[u]] = !(y[v[u]] = p));
                            if (i) {
                                if (o || t) {
                                    if (o) {
                                        for (c = [], u = b.length; u--;)(p = b[u]) && c.push(y[u] = p);
                                        o(null, b = [], c, l)
                                    }
                                    for (u = b.length; u--;)(p = b[u]) && (c = o ? K(i, p) : d[u]) > -1 && (i[c] = !(s[c] = p))
                                }
                            } else b = h(b === s ? b.splice(m, b.length) : b), o ? o(null, s, b, l) : Y.apply(s, b)
                        })
                    }

                    function m(t) {
                        for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = p(function(t) {
                                return t === e
                            }, s, !0), c = p(function(t) {
                                return K(e, t) > -1
                            }, s, !0), f = [function(t, n, i) {
                                var r = !o && (i || n !== S) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                                return e = null, r
                            }]; r > a; a++)
                            if (n = x.relative[t[a].type]) f = [p(d(f), n)];
                            else {
                                if (n = x.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                                    for (i = ++a; r > i && !x.relative[t[i].type]; i++);
                                    return v(a > 1 && d(f), a > 1 && u(t.slice(0, a - 1).concat({
                                        value: " " === t[a - 2].type ? "*" : ""
                                    })).replace(ot, "$1"), n, i > a && m(t.slice(a, i)), r > i && m(t = t.slice(i)), r > i && u(t))
                                }
                                f.push(n)
                            }
                        return d(f)
                    }

                    function g(t, n) {
                        var r = n.length > 0,
                            o = t.length > 0,
                            s = function(i, s, a, l, c) {
                                var u, p, d, f = 0,
                                    v = "0",
                                    m = i && [],
                                    g = [],
                                    y = S,
                                    b = i || o && x.find.TAG("*", c),
                                    w = F += null == y ? 1 : Math.random() || .1,
                                    T = b.length;
                                for (c && (S = s === D || s || c); v !== T && null != (u = b[v]); v++) {
                                    if (o && u) {
                                        for (p = 0, s || u.ownerDocument === D || ($(u), a = !j); d = t[p++];)
                                            if (d(u, s || D, a)) {
                                                l.push(u);
                                                break
                                            }
                                        c && (F = w)
                                    }
                                    r && ((u = !d && u) && f--, i && m.push(u))
                                }
                                if (f += v, r && v !== f) {
                                    for (p = 0; d = n[p++];) d(m, g, s, a);
                                    if (i) {
                                        if (f > 0)
                                            for (; v--;) m[v] || g[v] || (g[v] = J.call(l));
                                        g = h(g)
                                    }
                                    Y.apply(l, g), c && !i && g.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                                }
                                return c && (F = w, S = y), m
                            };
                        return r ? i(s) : s
                    }
                    var y, b, x, w, T, C, k, E, S, _, A, $, D, N, j, I, O, R, L, q = "sizzle" + 1 * new Date,
                        P = t.document,
                        F = 0,
                        M = 0,
                        H = n(),
                        W = n(),
                        z = n(),
                        B = function(t, e) {
                            return t === e && (A = !0), 0
                        },
                        U = 1 << 31,
                        X = {}.hasOwnProperty,
                        V = [],
                        J = V.pop,
                        Q = V.push,
                        Y = V.push,
                        G = V.slice,
                        K = function(t, e) {
                            for (var n = 0, i = t.length; i > n; n++)
                                if (t[n] === e) return n;
                            return -1
                        },
                        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        tt = "[\\x20\\t\\r\\n\\f]",
                        et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                        it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                        rt = new RegExp(tt + "+", "g"),
                        ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                        st = new RegExp("^" + tt + "*," + tt + "*"),
                        at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                        lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                        ct = new RegExp(it),
                        ut = new RegExp("^" + et + "$"),
                        pt = {
                            ID: new RegExp("^#(" + et + ")"),
                            CLASS: new RegExp("^\\.(" + et + ")"),
                            TAG: new RegExp("^(" + et + "|[*])"),
                            ATTR: new RegExp("^" + nt),
                            PSEUDO: new RegExp("^" + it),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + Z + ")$", "i"),
                            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                        },
                        dt = /^(?:input|select|textarea|button)$/i,
                        ft = /^h\d$/i,
                        ht = /^[^{]+\{\s*\[native \w/,
                        vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        mt = /[+~]/,
                        gt = /'|\\/g,
                        yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                        bt = function(t, e, n) {
                            var i = "0x" + e - 65536;
                            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                        },
                        xt = function() {
                            $()
                        };
                    try {
                        Y.apply(V = G.call(P.childNodes), P.childNodes), V[P.childNodes.length].nodeType
                    } catch (t) {
                        Y = {
                            apply: V.length ? function(t, e) {
                                Q.apply(t, G.call(e))
                            } : function(t, e) {
                                for (var n = t.length, i = 0; t[n++] = e[i++];);
                                t.length = n - 1
                            }
                        }
                    }
                    b = e.support = {}, T = e.isXML = function(t) {
                            var e = t && (t.ownerDocument || t).documentElement;
                            return !!e && "HTML" !== e.nodeName
                        }, $ = e.setDocument = function(t) {
                            var e, n, i = t ? t.ownerDocument || t : P;
                            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, N = D.documentElement, j = !T(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)), b.attributes = r(function(t) {
                                return t.className = "i", !t.getAttribute("className")
                            }), b.getElementsByTagName = r(function(t) {
                                return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
                            }), b.getElementsByClassName = ht.test(D.getElementsByClassName), b.getById = r(function(t) {
                                return N.appendChild(t).id = q, !D.getElementsByName || !D.getElementsByName(q).length
                            }), b.getById ? (x.find.ID = function(t, e) {
                                if (void 0 !== e.getElementById && j) {
                                    var n = e.getElementById(t);
                                    return n ? [n] : []
                                }
                            }, x.filter.ID = function(t) {
                                var e = t.replace(yt, bt);
                                return function(t) {
                                    return t.getAttribute("id") === e
                                }
                            }) : (delete x.find.ID, x.filter.ID = function(t) {
                                var e = t.replace(yt, bt);
                                return function(t) {
                                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                    return n && n.value === e
                                }
                            }), x.find.TAG = b.getElementsByTagName ? function(t, e) {
                                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                            } : function(t, e) {
                                var n, i = [],
                                    r = 0,
                                    o = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                    return i
                                }
                                return o
                            }, x.find.CLASS = b.getElementsByClassName && function(t, e) {
                                return void 0 !== e.getElementsByClassName && j ? e.getElementsByClassName(t) : void 0
                            }, O = [], I = [], (b.qsa = ht.test(D.querySelectorAll)) && (r(function(t) {
                                N.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + q + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || I.push(".#.+[+~]")
                            }), r(function(t) {
                                var e = D.createElement("input");
                                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
                            })), (b.matchesSelector = ht.test(R = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(t) {
                                b.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), O.push("!=", it)
                            }), I = I.length && new RegExp(I.join("|")), O = O.length && new RegExp(O.join("|")), e = ht.test(N.compareDocumentPosition), L = e || ht.test(N.contains) ? function(t, e) {
                                var n = 9 === t.nodeType ? t.documentElement : t,
                                    i = e && e.parentNode;
                                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                            } : function(t, e) {
                                if (e)
                                    for (; e = e.parentNode;)
                                        if (e === t) return !0;
                                return !1
                            }, B = e ? function(t, e) {
                                if (t === e) return A = !0, 0;
                                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === P && L(P, t) ? -1 : e === D || e.ownerDocument === P && L(P, e) ? 1 : _ ? K(_, t) - K(_, e) : 0 : 4 & n ? -1 : 1)
                            } : function(t, e) {
                                if (t === e) return A = !0, 0;
                                var n, i = 0,
                                    r = t.parentNode,
                                    o = e.parentNode,
                                    a = [t],
                                    l = [e];
                                if (!r || !o) return t === D ? -1 : e === D ? 1 : r ? -1 : o ? 1 : _ ? K(_, t) - K(_, e) : 0;
                                if (r === o) return s(t, e);
                                for (n = t; n = n.parentNode;) a.unshift(n);
                                for (n = e; n = n.parentNode;) l.unshift(n);
                                for (; a[i] === l[i];) i++;
                                return i ? s(a[i], l[i]) : a[i] === P ? -1 : l[i] === P ? 1 : 0
                            }, D) : D
                        }, e.matches = function(t, n) {
                            return e(t, null, null, n)
                        }, e.matchesSelector = function(t, n) {
                            if ((t.ownerDocument || t) !== D && $(t), n = n.replace(lt, "='$1']"), b.matchesSelector && j && !z[n + " "] && (!O || !O.test(n)) && (!I || !I.test(n))) try {
                                var i = R.call(t, n);
                                if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                            } catch (t) {}
                            return e(n, D, null, [t]).length > 0
                        }, e.contains = function(t, e) {
                            return (t.ownerDocument || t) !== D && $(t), L(t, e)
                        }, e.attr = function(t, e) {
                            (t.ownerDocument || t) !== D && $(t);
                            var n = x.attrHandle[e.toLowerCase()],
                                i = n && X.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
                            return void 0 !== i ? i : b.attributes || !j ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                        }, e.error = function(t) {
                            throw new Error("Syntax error, unrecognized expression: " + t)
                        }, e.uniqueSort = function(t) {
                            var e, n = [],
                                i = 0,
                                r = 0;
                            if (A = !b.detectDuplicates, _ = !b.sortStable && t.slice(0), t.sort(B), A) {
                                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                                for (; i--;) t.splice(n[i], 1)
                            }
                            return _ = null, t
                        }, w = e.getText = function(t) {
                            var e, n = "",
                                i = 0,
                                r = t.nodeType;
                            if (r) {
                                if (1 === r || 9 === r || 11 === r) {
                                    if ("string" == typeof t.textContent) return t.textContent;
                                    for (t = t.firstChild; t; t = t.nextSibling) n += w(t)
                                } else if (3 === r || 4 === r) return t.nodeValue
                            } else
                                for (; e = t[i++];) n += w(e);
                            return n
                        }, x = e.selectors = {
                            cacheLength: 50,
                            createPseudo: i,
                            match: pt,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(t) {
                                    return t[1] = t[1].replace(yt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                                },
                                CHILD: function(t) {
                                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                                },
                                PSEUDO: function(t) {
                                    var e, n = !t[6] && t[2];
                                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(t) {
                                    var e = t.replace(yt, bt).toLowerCase();
                                    return "*" === t ? function() {
                                        return !0
                                    } : function(t) {
                                        return t.nodeName && t.nodeName.toLowerCase() === e
                                    }
                                },
                                CLASS: function(t) {
                                    var e = H[t + " "];
                                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && H(t, function(t) {
                                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function(t, n, i) {
                                    return function(r) {
                                        var o = e.attr(r, t);
                                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(rt, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                                    }
                                },
                                CHILD: function(t, e, n, i, r) {
                                    var o = "nth" !== t.slice(0, 3),
                                        s = "last" !== t.slice(-4),
                                        a = "of-type" === e;
                                    return 1 === i && 0 === r ? function(t) {
                                        return !!t.parentNode
                                    } : function(e, n, l) {
                                        var c, u, p, d, f, h, v = o !== s ? "nextSibling" : "previousSibling",
                                            m = e.parentNode,
                                            g = a && e.nodeName.toLowerCase(),
                                            y = !l && !a,
                                            b = !1;
                                        if (m) {
                                            if (o) {
                                                for (; v;) {
                                                    for (d = e; d = d[v];)
                                                        if (a ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                                    h = v = "only" === t && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                                for (d = m, p = d[q] || (d[q] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[t] || [], f = c[0] === F && c[1], b = f && c[2], d = f && m.childNodes[f]; d = ++f && d && d[v] || (b = f = 0) || h.pop();)
                                                    if (1 === d.nodeType && ++b && d === e) {
                                                        u[t] = [F, f, b];
                                                        break
                                                    }
                                            } else if (y && (d = e, p = d[q] || (d[q] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[t] || [], f = c[0] === F && c[1], b = f), b === !1)
                                                for (;
                                                    (d = ++f && d && d[v] || (b = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++b || (y && (p = d[q] || (d[q] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), u[t] = [F, b]), d !== e)););
                                            return (b -= r) === i || b % i == 0 && b / i >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(t, n) {
                                    var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                                    return o[q] ? o(n) : o.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                        for (var i, r = o(t, n), s = r.length; s--;) i = K(t, r[s]), t[i] = !(e[i] = r[s])
                                    }) : function(t) {
                                        return o(t, 0, r)
                                    }) : o
                                }
                            },
                            pseudos: {
                                not: i(function(t) {
                                    var e = [],
                                        n = [],
                                        r = k(t.replace(ot, "$1"));
                                    return r[q] ? i(function(t, e, n, i) {
                                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                                    }) : function(t, i, o) {
                                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                                    }
                                }),
                                has: i(function(t) {
                                    return function(n) {
                                        return e(t, n).length > 0
                                    }
                                }),
                                contains: i(function(t) {
                                    return t = t.replace(yt, bt),
                                        function(e) {
                                            return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                                        }
                                }),
                                lang: i(function(t) {
                                    return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, bt).toLowerCase(),
                                        function(e) {
                                            var n;
                                            do {
                                                if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                            } while ((e = e.parentNode) && 1 === e.nodeType);
                                            return !1
                                        }
                                }),
                                target: function(e) {
                                    var n = t.location && t.location.hash;
                                    return n && n.slice(1) === e.id
                                },
                                root: function(t) {
                                    return t === N
                                },
                                focus: function(t) {
                                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                                },
                                enabled: function(t) {
                                    return t.disabled === !1
                                },
                                disabled: function(t) {
                                    return t.disabled === !0
                                },
                                checked: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                                },
                                selected: function(t) {
                                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                                },
                                empty: function(t) {
                                    for (t = t.firstChild; t; t = t.nextSibling)
                                        if (t.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(t) {
                                    return !x.pseudos.empty(t)
                                },
                                header: function(t) {
                                    return ft.test(t.nodeName)
                                },
                                input: function(t) {
                                    return dt.test(t.nodeName)
                                },
                                button: function(t) {
                                    var e = t.nodeName.toLowerCase();
                                    return "input" === e && "button" === t.type || "button" === e
                                },
                                text: function(t) {
                                    var e;
                                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                },
                                first: a(function() {
                                    return [0]
                                }),
                                last: a(function(t, e) {
                                    return [e - 1]
                                }),
                                eq: a(function(t, e, n) {
                                    return [0 > n ? n + e : n]
                                }),
                                even: a(function(t, e) {
                                    for (var n = 0; e > n; n += 2) t.push(n);
                                    return t
                                }),
                                odd: a(function(t, e) {
                                            for (var n = 1; e > n; n += 2) t.push(n)
