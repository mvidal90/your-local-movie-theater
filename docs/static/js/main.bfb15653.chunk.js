(this["webpackJsonplocal-movie-theater"] = this["webpackJsonplocal-movie-theater"] || []).push([[0], { 13: function (e, t, r) { }, 14: function (e, t, r) { "use strict"; r.r(t); var a = r(0), n = r.n(a), c = r(4), o = r.n(c), s = r(1), u = function (e) { var t = e.setCategories, r = Object(a.useState)(""), c = Object(s.a)(r, 2), o = c[0], u = c[1]; return n.a.createElement("form", { onSubmit: function (e) { e.preventDefault(), o.trim().length > 0 && (t((function (e) { return [o] })), u("")) } }, n.a.createElement("input", { type: "Text", value: o, onChange: function (e) { u(e.target.value) }, placeholder: "Select yours movies here" })) }, l = r(2), i = r.n(l), m = r(5), p = function () { var e = Object(m.a)(i.a.mark((function e(t) { var r, a, n, c, o, s, u, l, m, p, v, d, b, f, g, h; return i.a.wrap((function (e) { for (; ;)switch (e.prev = e.next) { case 0: if ("Movies Suggested" !== t) { e.next = 13; break } return "https://api.themoviedb.org/3/discover/movie?api_key=ce4ee431c75143ac4b030f105376623b&sort_by=popularity.desc", e.next = 4, fetch("https://api.themoviedb.org/3/discover/movie?api_key=ce4ee431c75143ac4b030f105376623b&sort_by=popularity.desc"); case 4: return r = e.sent, e.next = 7, r.json(); case 7: return a = e.sent, n = a.results, c = n.map((function (e) { return { id: e.id, title: e.title, url: "https://image.tmdb.org/t/p/w200", popularity: e.popularity, poster: e.poster_path, descr: e.overview, vote: e.vote_average } })), e.abrupt("return", c); case 13: if ("1 Star" !== t && "2 Stars" !== t && "3 Stars" !== t && "4 Stars" !== t && "5 Stars" !== t) { e.next = 46; break } o = 8, s = 10, e.t0 = t, e.next = "1 Star" === e.t0 ? 19 : "2 Stars" === e.t0 ? 22 : "3 Stars" === e.t0 ? 25 : "4 Stars" === e.t0 ? 28 : 31; break; case 19: return o = 0, s = 1.99, e.abrupt("break", 34); case 22: return o = 2, s = 3.99, e.abrupt("break", 34); case 25: return o = 4, s = 5.99, e.abrupt("break", 34); case 28: return o = 6, s = 7.99, e.abrupt("break", 34); case 31: return o = 8, s = 10, e.abrupt("break", 34); case 34: return u = "https://api.themoviedb.org/3/discover/movie?api_key=ce4ee431c75143ac4b030f105376623b&sort_by=vote_average.desc&vote_average.gte=".concat(o, "&vote_average.lte=").concat(s, "&vote_count.gte=1"), e.next = 37, fetch(u); case 37: return l = e.sent, e.next = 40, l.json(); case 40: return m = e.sent, p = m.results, v = p.map((function (e) { return { id: e.id, title: e.title, url: "https://image.tmdb.org/t/p/w200", popularity: e.popularity, poster: e.poster_path, descr: e.overview, vote: e.vote_average } })), e.abrupt("return", v); case 46: return d = "https://api.themoviedb.org/3/search/movie?api_key=ce4ee431c75143ac4b030f105376623b&query=".concat(encodeURI(t)), e.next = 49, fetch(d); case 49: return b = e.sent, e.next = 52, b.json(); case 52: return f = e.sent, g = f.results, h = g.map((function (e) { return { id: e.id, title: e.title, url: "https://image.tmdb.org/t/p/w200", popularity: e.popularity, poster: e.poster_path, descr: e.overview, vote: e.vote_average } })), e.abrupt("return", h); case 56: case "end": return e.stop() } }), e) }))); return function (t) { return e.apply(this, arguments) } }(), v = function (e) { var t = e.n, r = e.descr; return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", { id: "more" + t, className: "more", onClick: function () { document.getElementById(t).style.display = "block", document.getElementById("more" + t).style.display = "none" } }, "Learn more..."), n.a.createElement("div", { id: t, className: "description" }, r, n.a.createElement("button", { className: "less", onClick: function () { document.getElementById(t).style.display = "none", document.getElementById("more" + t).style.display = "block" } }, "Learn less..."))) }, d = function (e) { var t = e.vote; return n.a.createElement("p", { className: "stars" }, "\u2605 ", t) }, b = 0, f = function (e) { var t = e.title, r = e.urlFull, a = e.descr, c = e.vote; return n.a.createElement("div", { className: "card" }, n.a.createElement("img", { src: r, alt: t }), n.a.createElement("h4", null, " ", t, " "), n.a.createElement(d, { vote: c / 2 }), n.a.createElement(v, Object.assign({ descr: a, n: b++ }, b))) }, g = r(6), h = r.n(g), y = function (e) { var t = e.title, r = e.url, a = e.poster, c = e.urlFull, o = e.popularity, s = e.descr, u = e.vote; return "" === s && (s = "No overview found."), c = null === a ? h.a : r + a, console.log(t, o), n.a.createElement(f, { title: t, descr: s, vote: u, urlFull: c }) }, E = function (e) { var t = e.category, r = function (e) { var t = Object(a.useState)({ results: [] }), r = Object(s.a)(t, 2), n = r[0], c = r[1]; return Object(a.useEffect)((function () { p(e).then((function (e) { c({ results: e }) })) }), [e]), n }(t).results; return n.a.createElement(n.a.Fragment, null, n.a.createElement("h3", null, t), n.a.createElement("div", { className: "card-grid" }, r.map((function (e) { return n.a.createElement(y, Object.assign({ key: e.id }, e)) })))) }, k = function (e) { var t = e.setCategories, r = Object(a.useState)(""), c = Object(s.a)(r, 2), o = c[0], u = c[1], l = function (e) { u(e.target.value) }; return n.a.createElement("form", { onSubmit: function (e) { e.preventDefault(), t((function (e) { return [o] })) }, className: "selectStars clasification" }, n.a.createElement("h2", { className: "titleStars" }, " Select yours movies by stars "), n.a.createElement("button", { onClick: function () { return u("5 Stars") }, onChange: l }, " \u2605 "), n.a.createElement("button", { onClick: function () { return u("4 Stars") }, onChange: l }, " \u2605 "), n.a.createElement("button", { onClick: function () { return u("3 Stars") }, onChange: l }, " \u2605 "), n.a.createElement("button", { onClick: function () { return u("2 Stars") }, onChange: l }, " \u2605 "), n.a.createElement("button", { onClick: function () { return u("1 Star") }, onChange: l }, " \u2605 ")) }, S = function () { var e = Object(a.useState)(["Movies Suggested"]), t = Object(s.a)(e, 2), r = t[0], c = t[1]; return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", { className: "header" }, n.a.createElement("h2", null, " Your Local Movie Theater "), n.a.createElement(u, { setCategories: c }), n.a.createElement(k, { setCategories: c })), n.a.createElement("ol", null, r.map((function (e) { return n.a.createElement(E, { key: e, category: e }) })))) }; r(13); o.a.render(n.a.createElement(S, null), document.getElementById("root")) }, 6: function (e, t, r) { e.exports = r.p +"/static/media/noimage.57aef36f.png" }, 7: function (e, t, r) { e.exports = r(14) } }, [[7, 1, 2]]]);
//# sourceMappingURL=main.bfb15653.chunk.js.map