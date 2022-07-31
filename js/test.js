(function (e) {
  function t(t) {
    for (var i, o, r = t[0], c = t[1], l = t[2], d = 0, m = []; d < r.length; d++)
      (o = r[d]), Object.prototype.hasOwnProperty.call(a, o) && a[o] && m.push(a[o][0]), (a[o] = 0);
    for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
    u && u(t);
    while (m.length) m.shift()();
    return s.push.apply(s, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < s.length; t++) {
      for (var n = s[t], i = !0, r = 1; r < n.length; r++) {
        var c = n[r];
        0 !== a[c] && (i = !1);
      }
      i && (s.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var i = {},
    a = { app: 0 },
    s = [];
  function o(t) {
    if (i[t]) return i[t].exports;
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = i),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          o.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = '/');
  var r = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    c = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var l = 0; l < r.length; l++) t(r[l]);
  var u = c;
  s.push([0, 'chunk-vendors']), n();
})({
  0: function (e, t, n) {
    e.exports = n('56d7');
  },
  '034f': function (e, t, n) {
    'use strict';
    n('64a9');
  },
  '05f9': function (e, t, n) {},
  '080f': function (e, t) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX8xRX8xRX8xRX8xRUAAACun70SAAAABHRSTlMCXZb3eTxZ0QAAAAFiS0dEBI9o2VEAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfmAhIQGiQcESMxAAADiElEQVRYw5VYUYKrIAwUvICWC9hygSr3v9urQJJJgrqP/dkCw0xCEsBpGrZ1/bzXdfpzWz+lt8/yJ0DIBdrxB9CrmPb+L4pOdA8RRC75T5g+61i7254xyVnche73CGPu6w4Tx04NFbMNIVfbUMUNzamyltFIvJAWLxGXY/luo+cRTbx3fx54IF/LIreZFU+S73TTZkdzktwhKs1uO25Jmg5Unrztq7VM0wTvj+C8kZT26N2V/UaodZMbj4NQVLMcSYte48MAPdEZ37Nzd71EnKyHa/T4GJllEaerBm5w6RNYTbC6UtvY5KRlWns2uigEg5PGFiQzwP51CRGJ1ngT9DhpfYmguwNuiE3g3IaiNkUZYKV1G7QpJsuNtL58Qu5gpJjf3YiM1oussIykNQgygyyaqItVXR8dBjIisylpqUO+0EErzuwU5ZDaLWNKd5TuDLWEIJ02YPkDCEqrXhYfJzQUyFFatTyRj7U7gaXRbOJl3hbofy2NJb4FUhBy2ND4TaksVMsCFIJTicQzems/IRR9vd5stJcdjpX9tOo3/VMEchBNqiwEYduDXEZI2JfKK7BEDNhEiJ2W+FLupgppO/thnwLNIpsR27wkLLp1mvckLFOYbiGTqskmchUkY7yoILuCzBAwWafRF/o1RFJ61jG2a8gBpOxoE5bAcnCMtZWXOmMnSCqe5cACk7gW9mTtVMiigp9ZauzU2T2DLQQMEJbyPVkoVAFS/50dpIbL70q50W4CJHbIJpCFaArkiIZsWPh5XzIhDuvkqgl+JyiVQOKnyF5ysaFIllpAkObfjBMXngT1DiBtfVX7JqQBz+7qP1WwOcbwxBSW7itxmYnk7+RYEu+tdDALlg9hIbtZArKMg79Iad1GLB7CtwuW/cjCd5gAdPcsfFPi+9gP8nuyttvuqWHt7dUhQQXKDmFS8RDNvKuzJDSV8BmCcQTJILZwBvP4AII3WPJEuGZZJnNPnukkyJxXGvLuWljXRKWklvdATn5PS/8jKXg7TKM30KZ7ir7q+feLg7inRC7mhu8gxQqZLU30V2SrNBteAxm8+Nxd1UCyJ3GvV3WoD67/RAOzsHRcvp+T6k8698fndh3gB0tWNalcPFQDVkhxhuoeSmuDkk0vyZdrzLGGF816+kKiv/X82FZ9AjxhDkm5h09RjNk4sR++KanTaJaMvG+BQyc+i2JQIJVDwD8p6C8c1J3YIwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMi0xOFQxNTo0NzoxNSswMTowMFbGj00AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDItMThUMTU6MjY6MzYrMDE6MDBTIYtsAAAAGnRFWHRleGlmOkJpdHNQZXJTYW1wbGUAOCwgOCwgOBLtPicAAAAhdEVYdGV4aWY6RGF0ZVRpbWUAMjAyMjowMjoxOCAxNDo1MzozMo89m/gAAAAUdEVYdGV4aWY6SW1hZ2VMZW5ndGgANjQ29dlfsQAAABN0RVh0ZXhpZjpJbWFnZVdpZHRoADY0NialTzwAAAAZdEVYdGV4aWY6U29mdHdhcmUAR0lNUCAyLjEwLjhJjERNAAAAAElFTkSuQmCC';
  },
  '0e35': function (e, t, n) {
    'use strict';
    n('2410');
  },
  1: function (e, t) {},
  '16ca': function (e, t, n) {},
  '1e64': function (e, t, n) {},
  2: function (e, t) {},
  '213c': function (e, t, n) {},
  2410: function (e, t, n) {},
  '24c8': function (e, t, n) {
    var i = {
      './Building.png': 'daa2',
      './Dashboard.png': '68cc',
      './Form.png': '72c3',
      './Plus.png': '9ede',
      './User.png': '6968',
      './User1.png': 'c7f2',
      './android-chrome-192x192.png': '35fd',
      './android-chrome-512x512.png': 'd5a1',
      './apple-touch-icon-120x120.png': '62b3',
      './apple-touch-icon-152x152.png': '7de7',
      './apple-touch-icon-180x180.png': '6330',
      './apple-touch-icon-60x60.png': '64aa',
      './apple-touch-icon-76x76.png': '50d4',
      './apple-touch-icon.png': '41c2',
      './favicon-16x16.png': '82b7',
      './favicon-32x32.png': '8940',
      './msapplication-icon-144x144.png': '72a3',
      './mstile-150x150.png': '8f6a',
    };
    function a(e) {
      var t = s(e);
      return n(t);
    }
    function s(e) {
      if (!n.o(i, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = 'MODULE_NOT_FOUND'), t);
      }
      return i[e];
    }
    (a.keys = function () {
      return Object.keys(i);
    }),
      (a.resolve = s),
      (e.exports = a),
      (a.id = '24c8');
  },
  2809: function (e, t, n) {
    'use strict';
    n('addb');
  },
  '2bc4': function (e, t, n) {},
  '2c8d': function (e, t, n) {
    'use strict';
    n('8e9a');
  },
  '2fad': function (e, t, n) {
    'use strict';
    n('36ec');
  },
  '32e0': function (e, t, n) {},
  '35fd': function (e, t, n) {
    e.exports = n.p + 'img/android-chrome-192x192.f130a0b7.png';
  },
  '36ec': function (e, t, n) {},
  '3f5f': function (e, t, n) {
    'use strict';
    n('b03e');
  },
  '41c2': function (e, t, n) {
    e.exports = n.p + 'img/apple-touch-icon.66830ea6.png';
  },
  '4c67': function (e, t, n) {
    'use strict';
    n('5d00');
  },
  '4f22': function (e, t, n) {
    'use strict';
    n('9071');
  },
  '4f7c': function (e, t, n) {},
  5020: function (e, t) {
    e.exports =
      'data:image/jpeg;base64,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';
  },
  '50d4': function (e, t) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAMAAADwSaEZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACPVBMVEX////5/fv5+/v5+fr5+vr+/v6Y17l7zKZ8zKd8zad6vKF1hpB0gI50gY66wce95tNVvY1NuodNt4ZHeXJDU2ZDVGZicH/m6OuN07JNu4dLpoFEX2mbpK3a8eZewZNIhnZVZHTW2t3+//+h28BMr4NFZ2yEj5v4+frp9vBsxpxJk3pDVmdKW2zCyM24489Qu4lMtYVGcW9vfIrw8fL0+/d9zadKn35EWmhEVWess7vM691Xvo5NuYdHfXNebXzi5ej7/fyS1bZLqYFEYWqUnqj9/f1EYGre8uliwpVIindRYXHR1dnR1tqo3cRMsYRFaW1/ipfu8PHs+PJxyJ9KlntDV2dLW22CjppSvIpNtoZGdHD2+/mDz6tLon9EXGjS7eBav49HgXT8/v1Mq4JEY2vi9Oxlw5dJjXlDVWau4MhOu4hMsoVFbG6t38jv+fR1yaJKmn1DWGfD6NdTvItGd3H4/PqI0a9LpYBEXWnX7+RcwJFIhHad2b1MrYNFZWvm9e5pxZpJkXq04sxPu4hMtIVGb2/y+vZ6y6VKnX5DWWjJ6tpNuIZHe3P6/fyO07NLp4FEX2rb8edfwZNIh3ek3MFMr4RDUmXq9/Ftxp1JlHu55NBJjnn1+/h/zal/zajO7N6U1bfg8+pjwpap3sVOuoft+PNyyKC/5tT3/PmEz6zT7uFav5D9/v6Z17rk9O1mxJiv4Mnw+fV2yqPE6NdUvYyK0rDY8OVdwJKf2r/n9u9qxZu14s3z+vfJ6tvH6dmVFkNzAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+EBEwcLLc1kIH0AAAN8SURBVFjD7dZXWxNREAbgQQwoIBBYehOkSA1N6VUQRQUEQaRLF1R671UULGDBgtJEpEpvir9NjGFnEkLYlDszV+Scmff5lj3ZDYC61KUuAA1SpzRPs8UT6+LhhuYpOiKOaWmfOayzOrp650Slpy/WpY8bujpn2QltLXHMwJDPlpExY3JYpmakycyUXWeMjXDA0EDiMs1xz8LSCjVrvFCeNVpWlhY4YC5xmWBji5t8O3bK5Lw922J/HpftSLetjeQdcLhAojk6YTRnF1GHizMGc3IkwS44HLmfF12J5ubODnp4iho8Pdg1dzdiuV6Ucjq8BNjg7YPRfP2E236+GMzHG1sFXtKOmv8lEu1yADsaGCTcDgpkVwIuk2CX/KUe3OAQbAkNw2jhEQebEeEYLCwUG0OCpX8LIqNItOgrqMXEQmwMWlejSbCoyGO+U3HXiHYdz0H8DbgZjx+vE+taHBxXtwiWkIjRkm4nYbDEBILdOtaC5BSi3UllgbS7aezfqXeIlZJ8PAYG6dh4LwOj4Z1kMu5hS7qBDAsys0i07BzUWCsnmwTLypSFQW4eOR73pWD3ybHIy5VpQb4WiVZQKKkxhQUkmFa+bAyKiolWUiqBlZYQq7gITqoHZYiVPxSPxjwsR6zs0YkWPK4g0SqrxLCqShKs4vHJGFTX4IBRLY3G1JJndU01Bwvq6km0hkbUmMYGEqy+jgsGTc04wm8hWAtZb27iZAGvlURraz/UmPY2EqyVxw2Djk6idR0ej9IuYnV2cLQAuntwrLfvXzSmrxcXe7o5W9D/hEQbeCrEng6QYE/6uWPwjLzgB4f+RmOGBnHJ8JkcFjx/QaK9fMWYMK9ekmAvnsuDwfAIOQavD5K9Jp9HhuWywOENifbW6Z3TWxLsjYN8GIy+J9qHqg/Eej8qpwXwkbzgez+RYyH4KLcFY5/Jf4k8XvlfxuTHYJy84EmFjCtgQf6EVGzipGe19JqckmJNTSpkAUx/PWJ9nVbQgplvR7CUGUUxmK2RsNJnFbbg+5wENvddcQzmF8SshXklLFhcEsOWFpXBYPkHsX4sK2UBrOALvmxFSQtW11hsbVVZDNY3RNbGutIWaGyKsE0N5THY2hZa21sqsIC3I8R2uL7CZdfu3oG1t6sSC+CngC/4qSILfmnztX+pCoP9kX2VWVD3m9svO3Wp67+uPzu88u9RisozAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTAxLTE5VDA3OjExOjQ1KzAxOjAwr27Q1AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wMS0xOVQwNzoxMTo0NSswMTowMN4zaGgAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=';
  },
  '536a': function (e, t, n) {
    'use strict';
    n('2bc4');
  },
  '56d7': function (e, t, n) {
    'use strict';
    n.r(t);
    n('cadf'), n('551c'), n('f751'), n('097d');
    var i = n('2b0e'),
      a = n('2f62');
    i['default'].use(a['a']);
    var s = new a['a'].Store({
        strict: !0,
        state: {
          showBuildingsModal: !1,
          deleteBuilding: { id: null, info: '' },
          buildingToEdit: null,
          showAccountModal: !1,
          showDeclarationModal: !1,
          currentUserData: {},
          declarationBuilding: {},
          declarationEditId: null,
          declarationsListTrigger: !1,
          declarationHistoryId: null,
          showHistoryModal: !1,
          declarationVerification: null,
          declarationVerificationFull: null,
          clonedDeclarationId: null,
          showCloneDeclarationModal: !1,
          clonedDeclarationFinalId: null,
          cachedBuildingData: null,
        },
        mutations: {
          updateDeclarationsList: function (e) {
            e.declarationsListTrigger = !e.declarationsListTrigger;
          },
          setDeclarationBuilding: function (e, t) {
            e.declarationBuilding = t;
          },
          openDeclarationModal: function (e) {
            e.showDeclarationModal = !0;
          },
          setDeclarationEditId: function (e, t) {
            e.declarationEditId = t;
          },
          closeDeclarationModal: function (e) {
            (e.declarationEditId = null), (e.showDeclarationModal = !1);
          },
          openBuildingsModal: function (e) {
            e.showBuildingsModal = !0;
          },
          closeBuildingModal: function (e) {
            (e.buildingToEdit = null), (e.showBuildingsModal = !1);
          },
          openAccountModal: function (e) {
            e.showAccountModal = !0;
          },
          closeAccountModal: function (e) {
            e.showAccountModal = !1;
          },
          setDeleteBuildingData: function (e, t) {
            e.deleteBuilding = t;
          },
          setBuildingToEdit: function (e, t) {
            e.buildingToEdit = t;
          },
          setCurrentUserData: function (e, t) {
            e.currentUserData = t;
          },
          setDeclarationHistoryId: function (e, t) {
            e.declarationHistoryId = t;
          },
          openHistoryModal: function (e) {
            e.showHistoryModal = !0;
          },
          closeHistoryModal: function (e) {
            (e.declarationHistoryId = null), (e.showHistoryModal = !1);
          },
          setDeclarationVerification: function (e, t) {
            e.declarationVerification = t;
          },
          setDeclarationVerificationFull: function (e, t) {
            e.declarationVerificationFull = t;
          },
          setClonedDeclarationId: function (e, t) {
            e.clonedDeclarationId = t;
          },
          openCloneDeclarationModal: function (e) {
            e.showCloneDeclarationModal = !0;
          },
          closeCloneDeclarationModal: function (e) {
            (e.clonedDeclarationId = null), (e.showCloneDeclarationModal = !1);
          },
          setDeclarationClonedFinalId: function (e, t) {
            e.clonedDeclarationFinalId = t;
          },
          resetDeclarationClonedFinalId: function (e) {
            e.clonedDeclarationFinalId = null;
          },
          setCachedBuildingData: function (e, t) {
            e.cachedBuildingData = t;
          },
        },
        actions: {},
      }),
      o = s,
      r = n('8c4f'),
      c = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          { staticClass: 'content-view' },
          [
            n(
              'b-navbar',
              { attrs: { type: 'dark', variant: 'dark' } },
              [
                n(
                  'b-navbar-nav',
                  [
                    n(
                      'b-nav-form',
                      [
                        n(
                          'b-button',
                          {
                            attrs: { variant: 'primary' },
                            on: {
                              click: function (t) {
                                e.filters.page--;
                              },
                            },
                          },
                          [e._v('Poprzednia strona')]
                        ),
                        n('div', { staticClass: 'page-number' }, [e._v(e._s(e.filters.page))]),
                        n(
                          'b-button',
                          {
                            attrs: { variant: 'primary' },
                            on: {
                              click: function (t) {
                                e.filters.page++;
                              },
                            },
                          },
                          [e._v('Następna strona')]
                        ),
                        n('model-list-select', {
                          staticClass: 'm-md-2',
                          attrs: {
                            list: e.filterDicts.cities,
                            'option-value': 'id',
                            'option-text': 'name',
                            placeholder: 'Wybierz miejscowość',
                          },
                          model: {
                            value: e.filters.cityId,
                            callback: function (t) {
                              e.$set(e.filters, 'cityId', t);
                            },
                            expression: 'filters.cityId',
                          },
                        }),
                        n(
                          'b-button',
                          {
                            staticClass: 'resetbtn',
                            attrs: { variant: 'default' },
                            on: { click: e.clearCitySearch },
                          },
                          [n('b-icon-x-circle')],
                          1
                        ),
                        n('b-form-input', {
                          staticClass: 'm-md-2',
                          staticStyle: { 'max-width': '80%' },
                          attrs: { disabled: -1 == e.filters.cityId, placeholder: 'Wpisz adres' },
                          model: {
                            value: e.filters.address,
                            callback: function (t) {
                              e.$set(e.filters, 'address', t);
                            },
                            expression: 'filters.address',
                          },
                        }),
                        n(
                          'b-button',
                          {
                            staticClass: 'resetbtn',
                            attrs: { variant: 'default' },
                            on: { click: e.clearAddressSearch },
                          },
                          [n('b-icon-x-circle')],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            e.showBuildingsModal ? n('building-modal') : e._e(),
            n('delete-building-modal', { on: { 'building-deleted': e.getBuildings } }),
            null !== e.buildings
              ? n('buildings-table', { attrs: { buildings: e.buildings } })
              : e._e(),
            null === e.buildings
              ? n(
                  'div',
                  { staticClass: 'text-center pt-5' },
                  [
                    n('b-spinner', { attrs: { label: 'Wczytuję' } }),
                    n('p', [e._v('Wczytuję listę budynków')]),
                  ],
                  1
                )
              : e._e(),
          ],
          1
        );
      },
      l = [],
      u =
        (n('7f7f'),
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'card' }, [
            n('div', { staticClass: 'card-header' }, [
              n('div', { staticClass: 'card-title' }, [
                n('p', [e._v(e._s(e.street) + ' ' + e._s(e.number))]),
                n('p', [
                  e._v(e._s(e.buildingData.postal_code) + ' ' + e._s(e.buildingData.city.name)),
                ]),
              ]),
              n(
                'div',
                { staticClass: 'card-menu' },
                [
                  n(
                    'b-dropdown',
                    {
                      attrs: {
                        variant: 'link',
                        'toggle-class': 'text-decoration-none',
                        'no-caret': '',
                      },
                      scopedSlots: e._u([
                        {
                          key: 'button-content',
                          fn: function () {
                            return [n('b-icon', { attrs: { icon: 'three-dots-vertical' } })];
                          },
                          proxy: !0,
                        },
                      ]),
                    },
                    [
                      n(
                        'b-dropdown-item',
                        {
                          staticClass: 'dropdown-item-zone',
                          attrs: { href: '#' },
                          on: {
                            click: function (t) {
                              return e.openDeclarationModal('A');
                            },
                          },
                        },
                        [e._v('\n          Dodaj Deklarację A\n        ')]
                      ),
                      n(
                        'b-dropdown-item',
                        {
                          staticClass: 'dropdown-item-zone',
                          attrs: { href: '#' },
                          on: {
                            click: function (t) {
                              return e.openDeclarationModal('B');
                            },
                          },
                        },
                        [e._v('\n          Dodaj Deklarację B\n        ')]
                      ),
                      e.anyDeclarationWasAdded(e.buildingData)
                        ? e._e()
                        : n(
                            'b-dropdown-item',
                            {
                              staticClass: 'dropdown-item-zone',
                              attrs: { href: '#' },
                              on: { click: e.openEditBuildingModal },
                            },
                            [e._v('\n          Edytuj Budynek\n        ')]
                          ),
                      n(
                        'b-dropdown-item',
                        {
                          staticClass: 'dropdown-item-zone',
                          attrs: { href: '#' },
                          on: { click: e.openDeleteModal },
                        },
                        [e._v('\n          Usuń Budynek\n        ')]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
            n('div', { staticClass: 'card-body' }, [
              n('img', {
                staticClass: 'card-image',
                attrs: { src: 'https://ceeb-devel.azurewebsites.net/staticfiles/img/city_a.png' },
              }),
              n('p', { staticClass: 'building-type-label' }, [e._v('Rodzaj budynku:')]),
              n('div', { staticClass: 'bottom-text' }, [
                n('div', { staticClass: 'letter-icon first-icon' }, [e._v('\n        A\n      ')]),
                n('p', { staticClass: 'bottom-text-title' }, [e._v('Budynek / lokal mieszkalny')]),
                n('p', { staticClass: 'bottom-text-drafts' }, [
                  e._v('Robocze: ' + e._s(e.buildingData.draft_a_declarations_count)),
                ]),
                n('p', { staticClass: 'bottom-text-published' }, [
                  e._v('Złożone: ' + e._s(e.buildingData.submitted_a_declarations_count)),
                ]),
              ]),
              n('div', { staticClass: 'bottom-text' }, [
                n('div', { staticClass: 'letter-icon second-icon' }, [e._v('B')]),
                n('p', { staticClass: 'bottom-text-title' }, [
                  e._v('Budynek / lokal niemieszkalny'),
                ]),
                n('p', { staticClass: 'bottom-text-drafts' }, [
                  e._v('Robocze: ' + e._s(e.buildingData.draft_b_declarations_count)),
                ]),
                n('p', { staticClass: 'bottom-text-published' }, [
                  e._v('Złożone: ' + e._s(e.buildingData.submitted_b_declarations_count)),
                ]),
              ]),
            ]),
          ]);
        }),
      d = [],
      m = {
        name: 'BuildingCard',
        data: function () {
          return { showDropdown: !1 };
        },
        props: { buildingData: { type: Object, required: !0 } },
        methods: {
          openEditBuildingModal: function () {
            this.$store.commit('setBuildingToEdit', this.buildingData),
              this.$store.commit('openBuildingsModal');
          },
          openDeclarationModal: function (e) {
            var t = this.buildingData;
            (t.declarationType = e),
              this.$store.commit('setDeclarationBuilding', t),
              this.$store.commit('openDeclarationModal');
          },
          openDeleteModal: function () {
            if (this.anyDeclarationWasAdded(this.buildingData))
              return (
                this.$store.commit('setDeleteBuildingData', { allowed: !1 }),
                void this.$bvModal.show('delete-building-modal')
              );
            var e = {
              id: this.buildingData.id,
              info: ''.concat(this.street, ' ').concat(this.number),
              allowed: !0,
            };
            this.$store.commit('setDeleteBuildingData', e),
              this.$bvModal.show('delete-building-modal');
          },
          anyDeclarationWasAdded: function (e) {
            return (
              e.draft_a_declarations_count > 0 ||
              e.submitted_a_declarations_count > 0 ||
              e.draft_b_declarations_count > 0 ||
              e.submitted_b_declarations_count > 0
            );
          },
        },
        computed: {
          street: function () {
            var e = '';
            if (this.buildingData.street) e = this.buildingData.street.name;
            else {
              var t = this.buildingData.custom_street_name;
              e = t.length ? 'ul. '.concat(t) : t;
            }
            return e.length >= 20 && (e = ''.concat(e.substr(0, 20), '...')), e;
          },
          number: function () {
            return this.buildingData.number
              ? this.buildingData.number.name
              : this.buildingData.custom_number;
          },
        },
      },
      p = m,
      h = (n('6d33'), n('2877')),
      A = Object(h['a'])(p, u, d, !1, null, '95e2544c', null),
      b = A.exports,
      f = function () {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      v = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'breadcrumbs' }, [
            e._v('\n  ZONE - '),
            n('span', { staticStyle: { 'font-weight': 'bold', color: '#202f64' } }, [
              e._v('Budynki'),
            ]),
          ]);
        },
      ],
      g = { name: 'Breadcrumps' },
      y = g,
      w = (n('5bfb'), Object(h['a'])(y, f, v, !1, null, '6e238225', null)),
      k = w.exports,
      C = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', [
          n('div', { staticClass: 'around-fade' }),
          n(
            'div',
            { staticClass: 'zone-modal' },
            [
              n('CloseModalButton', { attrs: { 'on-click': e.closeBuildingModal } }),
              n('h1', [e._v('Metryka budynku')]),
              n('div', { staticClass: 'forms' }, [
                n('div', { staticClass: 'row' }, [
                  n(
                    'div',
                    { staticClass: 'col-12' },
                    [
                      n('InputDropdown', {
                        ref: 'voivodeshipInput',
                        class: { error: e.errors.includes('voivodeship') },
                        attrs: { items: e.voivodeships, placeholder: 'Województwo' },
                        model: {
                          value: e.voivodeship,
                          callback: function (t) {
                            e.voivodeship = t;
                          },
                          expression: 'voivodeship',
                        },
                      }),
                    ],
                    1
                  ),
                  n(
                    'div',
                    { staticClass: 'col-12' },
                    [
                      n('InputDropdown', {
                        ref: 'countyInput',
                        class: { error: e.errors.includes('county') },
                        attrs: { items: e.counties, placeholder: 'Powiat' },
                        model: {
                          value: e.county,
                          callback: function (t) {
                            e.county = t;
                          },
                          expression: 'county',
                        },
                      }),
                    ],
                    1
                  ),
                  n(
                    'div',
                    { staticClass: 'col-12' },
                    [
                      n('InputDropdown', {
                        ref: 'communityInput',
                        class: { error: e.errors.includes('community') },
                        attrs: { items: e.communities, placeholder: 'Gmina' },
                        model: {
                          value: e.community,
                          callback: function (t) {
                            e.community = t;
                          },
                          expression: 'community',
                        },
                      }),
                    ],
                    1
                  ),
                  n(
                    'div',
                    { staticClass: 'col-12 col-md-8' },
                    [
                      n('InputDropdown', {
                        ref: 'cityInput',
                        class: { error: e.errors.includes('city') },
                        attrs: { items: e.cities, placeholder: 'Miejscowość' },
                        model: {
                          value: e.city,
                          callback: function (t) {
                            e.city = t;
                          },
                          expression: 'city',
                        },
                      }),
                    ],
                    1
                  ),
                  n(
                    'div',
                    { staticClass: 'col-12 col-md-4', staticStyle: { position: 'relative' } },
                    [
                      n('input', {
                        directives: [
                          {
                            name: 'mask',
                            rawName: 'v-mask',
                            value: '##-###',
                            expression: "'##-###'",
                          },
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.postalCode,
                            expression: 'postalCode',
                          },
                        ],
                        staticClass: 'text-input postal-code-input',
                        class: { error: e.errors.includes('postalCode') },
                        attrs: { placeholder: 'Kod pocztowy' },
                        domProps: { value: e.postalCode },
                        on: {
                          input: function (t) {
                            t.target.composing || (e.postalCode = t.target.value);
                          },
                        },
                      }),
                      null != e.postalCode && e.postalCode.length
                        ? n(
                            'button',
                            {
                              staticClass: 'clearbtn',
                              staticStyle: { top: '6px' },
                              on: {
                                click: function (t) {
                                  e.postalCode = null;
                                },
                              },
                            },
                            [e._v('×')]
                          )
                        : e._e(),
                    ]
                  ),
                  n(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: e.customStreetEntrance,
                          expression: 'customStreetEntrance',
                        },
                      ],
                      staticClass: 'col-8',
                      staticStyle: { 'min-height': '64px', position: 'relative' },
                    },
                    [
                      n('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.customStreetName,
                            expression: 'customStreetName',
                          },
                        ],
                        class: {
                          error: e.errors.includes('street'),
                          'text-input': !0,
                          'street-input': !0,
                        },
                        attrs: {
                          type: 'text',
                          'aria-label': 'Niestandardowa nazwa ulicy',
                          placeholder: 'Niestandardowa nazwa ulicy',
                        },
                        domProps: { value: e.customStreetName },
                        on: {
                          input: function (t) {
                            t.target.composing || (e.customStreetName = t.target.value);
                          },
                        },
                      }),
                      null != e.customStreetName && e.customStreetName.length
                        ? n(
                            'button',
                            {
                              staticClass: 'clearbtn',
                              on: {
                                click: function (t) {
                                  e.customStreetName = null;
                                },
                              },
                            },
                            [e._v('×')]
                          )
                        : e._e(),
                    ]
                  ),
                  n(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: !e.customStreetEntrance,
                          expression: '!customStreetEntrance',
                        },
                      ],
                      staticClass: 'col-12 col-md-8',
                      staticStyle: { position: 'relative' },
                    },
                    [
                      n('InputDropdown', {
                        ref: 'streetInput',
                        class: { error: e.errors.includes('street'), 'street-input': !0 },
                        attrs: { items: e.streets, placeholder: 'Ulica' },
                        model: {
                          value: e.street,
                          callback: function (t) {
                            e.street = t;
                          },
                          expression: 'street',
                        },
                      }),
                      null != e.street && e.street.id
                        ? n('button', { staticClass: 'clearbtn', on: { click: e.clearStreet } }, [
                            e._v('×'),
                          ])
                        : e._e(),
                    ],
                    1
                  ),
                  n(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: e.customNumberEntrance,
                          expression: 'customNumberEntrance',
                        },
                      ],
                      staticClass: 'col-12 col-md-4',
                    },
                    [
                      n('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.customNumber,
                            expression: 'customNumber',
                          },
                        ],
                        class: {
                          error: e.errors.includes('number'),
                          'text-input': !0,
                          'building-input': !0,
                        },
                        attrs: {
                          type: 'text',
                          'aria-label': 'Numer budynku',
                          placeholder: 'Wpisz numer budynku',
                        },
                        domProps: { value: e.customNumber },
                        on: {
                          input: function (t) {
                            t.target.composing || (e.customNumber = t.target.value);
                          },
                        },
                      }),
                    ]
                  ),
                  n(
                    'div',
                    {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: !e.customNumberEntrance,
                          expression: '!customNumberEntrance',
                        },
                      ],
                      staticClass: 'col-12 col-md-4',
                    },
                    [
                      n('InputDropdown', {
                        ref: 'numberInput',
                        staticClass: 'street-input',
                        class: { error: e.errors.includes('number'), 'street-input': !0 },
                        attrs: { items: e.numbers, placeholder: 'Wybierz numer budynku' },
                        model: {
                          value: e.number,
                          callback: function (t) {
                            e.number = t;
                          },
                          expression: 'number',
                        },
                      }),
                    ],
                    1
                  ),
                  n('div', { staticClass: 'col-12' }, [
                    n('label', { attrs: { for: 'custom_street_checkbox' } }, [
                      n('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.customStreetEntrance,
                            expression: 'customStreetEntrance',
                          },
                        ],
                        attrs: { type: 'checkbox', id: 'custom_street_checkbox' },
                        domProps: {
                          checked: Array.isArray(e.customStreetEntrance)
                            ? e._i(e.customStreetEntrance, null) > -1
                            : e.customStreetEntrance,
                        },
                        on: {
                          change: function (t) {
                            var n = e.customStreetEntrance,
                              i = t.target,
                              a = !!i.checked;
                            if (Array.isArray(n)) {
                              var s = null,
                                o = e._i(n, s);
                              i.checked
                                ? o < 0 && (e.customStreetEntrance = n.concat([s]))
                                : o > -1 &&
                                  (e.customStreetEntrance = n.slice(0, o).concat(n.slice(o + 1)));
                            } else e.customStreetEntrance = a;
                          },
                        },
                      }),
                      e._v(
                        '\n            Nie znalazłeś swojej ulicy, wpisz ją ręcznie\n            '
                      ),
                      n('span', { staticClass: 'checkmark' }),
                    ]),
                    n('label', { attrs: { for: 'custom_number_checkbox' } }, [
                      n('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.customNumberEntrance,
                            expression: 'customNumberEntrance',
                          },
                        ],
                        attrs: { type: 'checkbox', id: 'custom_number_checkbox' },
                        domProps: {
                          checked: Array.isArray(e.customNumberEntrance)
                            ? e._i(e.customNumberEntrance, null) > -1
                            : e.customNumberEntrance,
                        },
                        on: {
                          change: function (t) {
                            var n = e.customNumberEntrance,
                              i = t.target,
                              a = !!i.checked;
                            if (Array.isArray(n)) {
                              var s = null,
                                o = e._i(n, s);
                              i.checked
                                ? o < 0 && (e.customNumberEntrance = n.concat([s]))
                                : o > -1 &&
                                  (e.customNumberEntrance = n.slice(0, o).concat(n.slice(o + 1)));
                            } else e.customNumberEntrance = a;
                          },
                        },
                      }),
                      e._v(
                        '\n            Nie znalazłeś numeru swojego budynku, wpisz go ręcznie\n            '
                      ),
                      n('span', { staticClass: 'checkmark' }),
                    ]),
                  ]),
                ]),
                n('div', { staticStyle: { 'text-align': 'right', 'padding-top': '0.5em' } }, [
                  n(
                    'button',
                    {
                      staticClass: 'btn btn-outline-primary',
                      staticStyle: { float: 'left' },
                      attrs: { type: 'button' },
                      on: { click: e.clearAll },
                    },
                    [e._v('\n          Wyczyść formularz\n        ')]
                  ),
                  n(
                    'button',
                    {
                      staticClass: 'btn btn-link',
                      attrs: { type: 'button' },
                      on: { click: e.closeBuildingModal },
                    },
                    [e._v('\n          Anuluj\n        ')]
                  ),
                  n(
                    'button',
                    {
                      staticClass: 'btn btn-primary',
                      class: { disabled: e.saveButtonLock },
                      attrs: { disabled: e.saveButtonLock, type: 'button' },
                      on: { click: e.lockButtonAndSave },
                    },
                    [e._v('\n          ' + e._s(e.saveButtonText) + '\n        ')]
                  ),
                ]),
              ]),
            ],
            1
          ),
        ]);
      },
      _ = [],
      E = (n('96cf'), n('3b8d')),
      D = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'dropdown-container' }, [
          n('div', { staticClass: 'input-dropdown', class: { small: e.isSmall, error: e.error } }, [
            n('input', {
              directives: [
                {
                  name: 'model',
                  rawName: 'v-model',
                  value: e.inputContent,
                  expression: 'inputContent',
                },
              ],
              staticClass: 'text-input',
              attrs: { type: 'text', 'aria-label': e.placeholder, placeholder: e.placeholder },
              domProps: { value: e.inputContent },
              on: {
                input: [
                  function (t) {
                    t.target.composing || (e.inputContent = t.target.value);
                  },
                  function (t) {
                    e.content = null;
                  },
                ],
                focus: function (t) {
                  e.is_focused = !0;
                },
                blur: e.clearTextIfNotSelected,
              },
            }),
          ]),
          e.is_focused
            ? n(
                'div',
                { staticClass: 'items-list' },
                e._l(e.filteredItems, function (t) {
                  return n(
                    'div',
                    {
                      key: t.id,
                      staticClass: 'item',
                      class: { multiline: e.multiline },
                      attrs: { tabindex: '0' },
                      on: {
                        mousedown: function (n) {
                          return n.preventDefault(), e.selectValue(t);
                        },
                      },
                    },
                    [n('p', [e._v(e._s(t.name))])]
                  );
                }),
                0
              )
            : e._e(),
        ]);
      },
      x = [],
      z =
        (n('6762'),
        n('2fdb'),
        {
          name: 'InputDropdown',
          props: {
            error: { type: Boolean, required: !1, default: !1 },
            multiline: { type: Boolean, required: !1, default: !1 },
            isSmall: { type: Boolean, required: !1, default: !1 },
            placeholder: { type: String, required: !1 },
            items: { type: Array, required: !0 },
            value: { required: !0 },
          },
          data: function () {
            return { is_focused: !1, inputContent: '', content: this.value };
          },
          methods: {
            reset: function () {
              (this.inputContent = ''), this.clearValue();
            },
            clearValue: function () {
              (this.content && this.inputContent === this.content.name) ||
                ((this.content = null), this.$emit('input', this.content));
            },
            selectValue: function (e) {
              e &&
                e.name &&
                ((this.inputContent = e.name),
                (this.content = e),
                (this.is_focused = !1),
                this.$emit('input', this.content),
                this.$emit('change', this.content));
            },
            clearTextIfNotSelected: function () {
              (this.is_focused = !1),
                (this.content && this.inputContent === this.content.name) ||
                  (this.inputContent = '');
            },
          },
          computed: {
            filteredItems: function () {
              var e = this;
              return this.items.filter(function (t) {
                return t.name.toLowerCase().includes(e.inputContent.toLowerCase());
              });
            },
          },
          mounted: function () {
            this.selectValue(this.value);
          },
          watch: {
            value: function (e) {
              this.selectValue(e);
            },
          },
        }),
      B = z,
      j = (n('a8f4'), Object(h['a'])(B, D, x, !1, null, '21f791cf', null)),
      S = j.exports,
      N = n('bc3a'),
      I = n('9490'),
      M = n('24f8');
    (N.defaults.xsrfCookieName = 'csrftoken'), (N.defaults.xsrfHeaderName = 'X-CSRFToken');
    var G = N.create({
        timeout: 6e4,
        httpAgent: new I.Agent({ keepAlive: !0 }),
        httpsAgent: new M.Agent({ keepAlive: !0 }),
        maxRedirects: 10,
        maxContentLength: 5e7,
      }),
      T = G,
      Q = '/api/locations',
      O = {
        getVoivodeships: function () {
          return T.get(''.concat(Q, '/voivodeships'));
        },
        getCounties: function (e) {
          return T.get(''.concat(Q, '/counties?voivodeship_id=').concat(e));
        },
        getCommunities: function (e) {
          return T.get(''.concat(Q, '/communities?county_id=').concat(e));
        },
        getCities: function (e) {
          return T.get(''.concat(Q, '/cities?community_id=').concat(e));
        },
        getStreets: function (e) {
          return T.get(''.concat(Q, '/streets?city_id=').concat(e));
        },
        getHouses: function (e) {
          return T.get(''.concat(Q, '/houses?street_id=').concat(e));
        },
        createBuilding: function (e) {
          return T.post(''.concat(Q, '/buildings'), e);
        },
        deleteBuilding: function (e) {
          return T.delete(''.concat(Q, '/buildings/').concat(e));
        },
        getUserBuildings: function (e, t, n, i, a) {
          e = e || 0;
          var s = ''.concat(Q, '/buildings?page=').concat(e);
          return (
            t && -1 !== t && (s += '&city_id='.concat(t)),
            n && -1 !== n && (s += '&street_id='.concat(n)),
            i && (s += '&custom_streets=true'),
            a && (s += '&address='.concat(a)),
            T.get(s)
          );
        },
        getBuildingData: function (e) {
          return T.get(''.concat(Q, '/buildings/').concat(e));
        },
        updateBuilding: function (e, t) {
          return T.put(''.concat(Q, '/buildings/').concat(e), t);
        },
      },
      P = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'close-button' }, [
          n('a', { attrs: { href: '#' }, on: { click: e.onClick } }, [e._v('✕')]),
        ]);
      },
      F = [],
      L = { name: 'CloseModalButton', props: ['onClick'] },
      U = L,
      R = (n('f6cc'), Object(h['a'])(U, P, F, !1, null, '723e9442', null)),
      V = R.exports,
      W = {
        data: function () {
          return {
            voivodeship: {},
            county: {},
            community: {},
            city: {},
            street: {},
            customStreetName: '',
            number: {},
            customNumber: '',
            postalCode: '',
            voivodeships: [],
            counties: [],
            communities: [],
            cities: [],
            streets: [],
            numbers: [],
            customStreetEntrance: !1,
            customNumberEntrance: !1,
          };
        },
        methods: {
          getVoivodeships: function () {
            var e = this;
            O.getVoivodeships().then(function (t) {
              return (e.voivodeships = t.data);
            });
          },
          getCounties: function () {
            var e = this;
            this.voivodeship &&
              this.voivodeship.id &&
              O.getCounties(this.voivodeship.id).then(function (t) {
                return (e.counties = t.data);
              });
          },
          getCommunities: function () {
            var e = this;
            this.county &&
              this.county.id &&
              O.getCommunities(this.county.id).then(function (t) {
                return (e.communities = t.data);
              });
          },
          getStreets: function () {
            var e = this;
            this.city &&
              this.city.id &&
              O.getStreets(this.city.id).then(function (t) {
                return (e.streets = t.data);
              });
          },
          getCities: function () {
            var e = this;
            this.community &&
              this.community.id &&
              O.getCities(this.community.id).then(function (t) {
                return (e.cities = t.data);
              });
          },
          getNumbers: function () {
            var e = this;
            this.street &&
              this.street.id &&
              O.getHouses(this.street.id).then(function (t) {
                return (e.numbers = t.data);
              });
          },
        },
        watch: {
          voivodeship: function () {
            this.$refs.countyInput.reset(),
              this.$refs.communityInput.reset(),
              this.$refs.cityInput.reset(),
              this.$refs.streetInput.reset(),
              (this.customStreetName = ''),
              (this.customNumber = ''),
              this.$refs.numberInput.reset(),
              (this.postalCode = ''),
              this.getCounties();
          },
          county: function () {
            this.$refs.communityInput.reset(),
              this.$refs.cityInput.reset(),
              this.$refs.streetInput.reset(),
              (this.customStreetName = ''),
              (this.customNumber = ''),
              this.$refs.numberInput.reset(),
              (this.postalCode = ''),
              this.getCommunities();
          },
          community: function () {
            this.$refs.cityInput.reset(),
              this.$refs.streetInput.reset(),
              (this.customStreetName = ''),
              (this.postalCode = ''),
              (this.customNumber = ''),
              this.$refs.numberInput.reset(),
              this.getCities();
          },
          city: function () {
            this.$refs.streetInput.reset(),
              (this.customStreetName = ''),
              (this.postalCode = ''),
              (this.customNumber = ''),
              this.$refs.numberInput.reset(),
              this.getStreets();
          },
          street: function () {
            this.$refs.numberInput.reset(), this.getNumbers();
          },
        },
        mounted: (function () {
          var e = Object(E['a'])(
            regeneratorRuntime.mark(function e() {
              var t, n, i;
              return regeneratorRuntime.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), this.getVoivodeships();
                      case 2:
                        if (!this.buildingToEdit) {
                          e.next = 30;
                          break;
                        }
                        return (e.next = 5), O.getBuildingData(this.buildingToEdit.id);
                      case 5:
                        return (
                          (t = e.sent),
                          (n = t.data),
                          (this.voivodeship = n.voivodeship),
                          (e.next = 10),
                          this.getCounties()
                        );
                      case 10:
                        return (this.county = n.county), (e.next = 13), this.getCommunities();
                      case 13:
                        return (this.community = n.community), (e.next = 16), this.getCities();
                      case 16:
                        return (this.city = n.city), (e.next = 19), this.getStreets();
                      case 19:
                        if (
                          ((this.postalCode = n.postal_code),
                          n.custom_street_name &&
                            ((this.customStreetEntrance = !0),
                            (this.customStreetName = n.custom_street_name)),
                          n.street &&
                            n.street.id &&
                            ((this.custom_street_name = ''), (this.street = n.street)),
                          n.custom_number &&
                            ((this.customNumberEntrance = !0),
                            (this.customNumber = n.custom_number)),
                          !n.number || !n.number.id)
                        ) {
                          e.next = 28;
                          break;
                        }
                        return (e.next = 26), this.getNumbers();
                      case 26:
                        (this.customNumber = ''), (this.number = n.number);
                      case 28:
                        e.next = 46;
                        break;
                      case 30:
                        if (!this.cachedBuildingData) {
                          e.next = 46;
                          break;
                        }
                        return (
                          (i = this.cachedBuildingData),
                          (this.voivodeship = i.voivodeship),
                          (e.next = 35),
                          this.getCounties()
                        );
                      case 35:
                        return (this.county = i.county), (e.next = 38), this.getCommunities();
                      case 38:
                        return (this.community = i.community), (e.next = 41), this.getCities();
                      case 41:
                        return (this.city = i.city), (e.next = 44), this.getStreets();
                      case 44:
                        (this.postalCode = i.postalCode),
                          i.customStreetName
                            ? ((this.customStreetEntrance = !0),
                              (this.customStreetName = i.customStreetName))
                            : i.street &&
                              i.street.id &&
                              ((this.customStreetName = ''), (this.street = i.street));
                      case 46:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      K = {
        name: 'BuildingModal',
        mixins: [W],
        components: { CloseModalButton: V, InputDropdown: S },
        data: function () {
          return { saveButtonLock: !1, errors: [] };
        },
        methods: {
          lockButtonAndSave: (function () {
            var e = Object(E['a'])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!this.saveButtonLock) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt('return');
                        case 2:
                          return (
                            (this.saveButtonLock = !0),
                            (e.prev = 3),
                            (e.next = 6),
                            this.saveBuilding()
                          );
                        case 6:
                          return (e.prev = 6), (this.saveButtonLock = !1), e.finish(6);
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[3, , 6, 9]]
                );
              })
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          saveBuilding: (function () {
            var e = Object(E['a'])(
              regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = []),
                            (this.voivodeship && this.voivodeship.id) || t.push('voivodeship'),
                            (this.county && this.county.id) || t.push('county'),
                            (this.community && this.community.id) || t.push('community'),
                            (this.city && this.city.id) || t.push('city'),
                            (this.postalCode && this.postalCode.length) || t.push('postalCode'),
                            (this.customStreetEntrance && this.customNumberEntrance) ||
                              (this.customStreetEntrance ||
                                (this.street && this.street.id) ||
                                t.push('street'),
                              this.customNumberEntrance ||
                                (this.number && this.number.id) ||
                                t.push('number')),
                            (this.errors = t),
                            !t.length)
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (
                            this.$notify({
                              group: 'zone',
                              type: 'error',
                              title: 'Błąd!',
                              text: 'Nie wszystkie wymagane pola zostały wypełnione',
                            }),
                            e.abrupt('return')
                          );
                        case 11:
                          if (
                            ((n = { postal_code: this.postalCode, city_id: this.city.id }),
                            this.customStreetEntrance
                              ? (n.custom_street_name = this.customStreetName)
                              : (n.street_id = this.street.id),
                            this.customNumberEntrance
                              ? (n.custom_number = this.customNumber)
                              : (n.number_id = this.number.id),
                            this.$store.commit('setCachedBuildingData', {
                              voivodeship: this.voivodeship,
                              county: this.county,
                              community: this.community,
                              city: this.city,
                              postalCode: this.postalCode,
                              street: this.street,
                              customStreetEntrance: this.customStreetEntrance,
                              customStreetName: this.customStreetName,
                              number: this.number,
                              customNumberEntrance: this.customNumberEntrance,
                              customNumber: this.customNumber,
                            }),
                            this.buildingToEdit)
                          ) {
                            e.next = 27;
                            break;
                          }
                          return (e.prev = 16), (e.next = 19), O.createBuilding(n);
                        case 19:
                          this.$notify({
                            group: 'zone',
                            type: 'success',
                            title: 'Sukces',
                            text: 'Pomyślnie dodano nowy budynek',
                          }),
                            (e.next = 25);
                          break;
                        case 22:
                          (e.prev = 22),
                            (e.t0 = e['catch'](16)),
                            e.t0.response &&
                              e.t0.response.data &&
                              e.t0.response.data.detail &&
                              this.$notify({
                                group: 'zone',
                                type: 'error',
                                title: 'Błąd!',
                                text: e.t0.response.data.detail,
                              });
                        case 25:
                          e.next = 30;
                          break;
                        case 27:
                          return (e.next = 29), O.updateBuilding(this.buildingToEdit.id, n);
                        case 29:
                          this.$notify({
                            group: 'zone',
                            type: 'success',
                            title: 'Sukces',
                            text: 'Pomyślnie zapisano zmiany',
                          });
                        case 30:
                          this.closeBuildingModal();
                        case 31:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[16, 22]]
                );
              })
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          closeBuildingModal: function () {
            this.$store.commit('setBuildingToEdit', null), this.$store.commit('closeBuildingModal');
          },
          clearStreet: function () {
            (this.street = null), this.$refs.streetInput.reset();
          },
          clearAll: function () {
            (this.customNumberEntrance = !1),
              (this.customNumber = null),
              (this.number = null),
              this.$refs.numberInput.reset(),
              (this.customStreetEntrance = !1),
              (this.customStreetName = null),
              (this.street = null),
              this.$refs.streetInput.reset(),
              (this.postalCode = null),
              (this.city = null),
              this.$refs.cityInput.reset(),
              (this.community = null),
              this.$refs.communityInput.reset(),
              (this.county = null),
              this.$refs.countyInput.reset(),
              (this.voivodeship = null),
              this.$refs.voivodeshipInput.reset();
          },
        },
        computed: {
          buildingToEdit: function () {
            return this.$store.state.buildingToEdit;
          },
          cachedBuildingData: function () {
            return this.$store.state.cachedBuildingData;
          },
          saveButtonText: function () {
            return this.buildingToEdit ? 'Zapisz zmiany' : 'Dodaj budynek';
          },
        },
      },
      Z = K,
      J = (n('9a9f'), Object(h['a'])(Z, C, _, !1, null, '676270f6', null)),
      H = J.exports,
      Y = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          [
            e.data.allowed
              ? n(
                  'b-modal',
                  {
                    attrs: { id: 'delete-building-modal' },
                    scopedSlots: e._u(
                      [
                        {
                          key: 'modal-footer',
                          fn: function (t) {
                            t.ok;
                            var i = t.cancel;
                            return [
                              n(
                                'b-button',
                                {
                                  staticClass: 'btn btn-primary',
                                  on: {
                                    click: function (t) {
                                      return e.deleteBuilding();
                                    },
                                  },
                                },
                                [e._v('\n        Tak, usuń\n      ')]
                              ),
                              n(
                                'b-button',
                                {
                                  on: {
                                    click: function (e) {
                                      return i();
                                    },
                                  },
                                },
                                [e._v('\n        Cofnij\n      ')]
                              ),
                            ];
                          },
                        },
                      ],
                      null,
                      !1,
                      3352443252
                    ),
                  },
                  [
                    e._v(
                      '\n    Czy jesteś pewnien, że chcesz usunąć budynek ' +
                        e._s(e.data.info) +
                        '?\n\n    '
                    ),
                  ]
                )
              : n(
                  'b-modal',
                  {
                    attrs: { variant: 'danger', id: 'delete-building-modal' },
                    scopedSlots: e._u([
                      {
                        key: 'modal-footer',
                        fn: function (t) {
                          var i = t.cancel;
                          return [
                            n(
                              'b-button',
                              {
                                staticClass: 'btn btn-primary',
                                on: {
                                  click: function (e) {
                                    return i();
                                  },
                                },
                              },
                              [e._v('\n        Ok\n      ')]
                            ),
                          ];
                        },
                      },
                    ]),
                  },
                  [e._v('\n    Nie można usunąć budynku dla którego są dodane deklaracje.\n\n    ')]
                ),
          ],
          1
        );
      },
      X = [],
      q = {
        name: 'DeleteBuildingModal',
        methods: {
          deleteBuilding: function () {
            var e = this;
            if (this.data.id)
              return O.deleteBuilding(this.data.id).then(function () {
                e.$emit('building-deleted'), e.$bvModal.hide('delete-building-modal');
              });
          },
        },
        computed: {
          data: function () {
            return this.$store.state.deleteBuilding;
          },
        },
      },
      $ = q,
      ee = Object(h['a'])($, Y, X, !1, null, '49b08573', null),
      te = ee.exports,
      ne = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', [
          n('table', { staticClass: 'table table-striped d-none d-md-table' }, [
            e._m(0),
            n(
              'tbody',
              e._l(e.buildings, function (t) {
                return n('tr', { key: t.id }, [
                  n('td', [e._v('\n        ' + e._s(t.formatted_address) + '\n      ')]),
                  n('td', [e._v(e._s(t.draft_a_declarations_count))]),
                  n('td', [e._v(e._s(t.submitted_a_declarations_count))]),
                  n('td', [e._v(e._s(t.draft_b_declarations_count))]),
                  n('td', [e._v(e._s(t.submitted_b_declarations_count))]),
                  n(
                    'td',
                    [
                      n(
                        'b-dropdown',
                        {
                          attrs: {
                            size: 'lg',
                            variant: 'link',
                            'toggle-class': 'text-decoration-none',
                            'no-caret': '',
                            right: '',
                          },
                          scopedSlots: e._u(
                            [
                              {
                                key: 'button-content',
                                fn: function () {
                                  return [
                                    n('b-icon-three-dots-vertical'),
                                    n('span', { staticClass: 'sr-only' }, [e._v('User')]),
                                  ];
                                },
                                proxy: !0,
                              },
                            ],
                            null,
                            !0
                          ),
                        },
                        [
                          e.anyDeclarationWasAdded(t)
                            ? e._e()
                            : n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.openEditBuildingModal(t);
                                    },
                                  },
                                },
                                [e._v('\n            Edytuj budynek\n          ')]
                              ),
                          e.anyDeclarationWasAdded(t)
                            ? e._e()
                            : n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.openDeleteModal(t);
                                    },
                                  },
                                },
                                [e._v('\n            Usuń budynek\n          ')]
                              ),
                          n(
                            'b-dropdown-item',
                            {
                              on: {
                                click: function (n) {
                                  return e.openDeclarationModal('A', t);
                                },
                              },
                            },
                            [e._v('\n            Dodaj deklarację A\n          ')]
                          ),
                          n(
                            'b-dropdown-item',
                            {
                              on: {
                                click: function (n) {
                                  return e.openDeclarationModal('B', t);
                                },
                              },
                            },
                            [e._v('\n            Dodaj deklarację B\n          ')]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]);
              }),
              0
            ),
          ]),
          n('table', { staticClass: 'table table-striped d-table d-md-none' }, [
            e._m(1),
            n(
              'tbody',
              e._l(e.buildings, function (t) {
                return n('tr', { key: t.id }, [
                  n('td', [
                    e._v('\n        ' + e._s(t.formatted_address)),
                    n('br'),
                    e._v('\n        Robocze deklaracje A: ' + e._s(t.draft_a_declarations_count)),
                    n('br'),
                    e._v(
                      '\n        Złożone deklaracje A: ' + e._s(t.submitted_a_declarations_count)
                    ),
                    n('br'),
                    e._v('\n        Robocze deklaracje B: ' + e._s(t.draft_b_declarations_count)),
                    n('br'),
                    e._v(
                      '\n        Złożone deklaracje B: ' +
                        e._s(t.submitted_b_declarations_count) +
                        '\n      '
                    ),
                  ]),
                  n(
                    'td',
                    [
                      n(
                        'b-dropdown',
                        {
                          attrs: {
                            size: 'lg',
                            variant: 'link',
                            'toggle-class': 'text-decoration-none',
                            'no-caret': '',
                            right: '',
                          },
                          scopedSlots: e._u(
                            [
                              {
                                key: 'button-content',
                                fn: function () {
                                  return [
                                    n('b-icon-three-dots-vertical'),
                                    n('span', { staticClass: 'sr-only' }, [e._v('User')]),
                                  ];
                                },
                                proxy: !0,
                              },
                            ],
                            null,
                            !0
                          ),
                        },
                        [
                          e.anyDeclarationWasAdded(t)
                            ? e._e()
                            : n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.openEditBuildingModal(t);
                                    },
                                  },
                                },
                                [e._v('\n            Edytuj budynek\n          ')]
                              ),
                          e.anyDeclarationWasAdded(t)
                            ? e._e()
                            : n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.openDeleteModal(t);
                                    },
                                  },
                                },
                                [e._v('\n            Usuń budynek\n          ')]
                              ),
                          n(
                            'b-dropdown-item',
                            {
                              on: {
                                click: function (n) {
                                  return e.openDeclarationModal('A', t);
                                },
                              },
                            },
                            [e._v('\n            Dodaj deklarację A\n          ')]
                          ),
                          n(
                            'b-dropdown-item',
                            {
                              on: {
                                click: function (n) {
                                  return e.openDeclarationModal('B', t);
                                },
                              },
                            },
                            [e._v('\n            Dodaj deklarację B\n          ')]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]);
              }),
              0
            ),
          ]),
        ]);
      },
      ie = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('thead', [
            n('tr', [
              n('th', { attrs: { scope: 'col' } }, [e._v('Adres budynku')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Robocze deklaracje A')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Złożone deklaracje A')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Robocze deklaracje B')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Złożone deklaracje B')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Akcje')]),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('thead', [
            n('tr', [
              n('th', { attrs: { scope: 'col' } }, [e._v('Budynek')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Akcje')]),
            ]),
          ]);
        },
      ],
      ae = {
        name: 'BuildingsTable',
        props: ['buildings'],
        methods: {
          openEditBuildingModal: function (e) {
            this.$store.commit('setBuildingToEdit', e), this.$store.commit('openBuildingsModal');
          },
          openDeclarationModal: function (e, t) {
            (t.declarationType = e),
              this.$store.commit('setDeclarationBuilding', t),
              this.$store.commit('openDeclarationModal');
          },
          openDeleteModal: function (e) {
            if (this.anyDeclarationWasAdded(e))
              return (
                this.$store.commit('setDeleteBuildingData', { allowed: !1 }),
                void this.$bvModal.show('delete-building-modal')
              );
            var t =
                e.street && e.street.name && e.street.name.length
                  ? e.street.name
                  : e.custom_street_name
                  ? e.custom_street_name
                  : '',
              n =
                e.number && e.number.name && e.number.name.length
                  ? e.number.name
                  : e.custom_number
                  ? e.custom_number
                  : '',
              i = e.city.name,
              a = e.postal_code,
              s = {
                id: e.id,
                info: ''.concat(i, ' ').concat(a, ' ').concat(t, ' ').concat(n),
                allowed: !0,
              };
            this.$store.commit('setDeleteBuildingData', s),
              this.$bvModal.show('delete-building-modal');
          },
          anyDeclarationWasAdded: function (e) {
            return (
              e.draft_a_declarations_count > 0 ||
              e.submitted_a_declarations_count > 0 ||
              e.draft_b_declarations_count > 0 ||
              e.submitted_b_declarations_count > 0
            );
          },
        },
      },
      se = ae,
      oe = Object(h['a'])(se, ne, ie, !1, null, 'cc1b7c24', null),
      re = oe.exports,
      ce = n('2ef0'),
      le = n.n(ce),
      ue = n('bc3a'),
      de = n.n(ue),
      me = n('b410'),
      pe =
        (n('41e9'),
        {
          name: 'Buildings',
          data: function () {
            return {
              buildings: null,
              filters: { page: 0, cityId: -1, address: '' },
              filterDicts: { cities: [], streets: [] },
            };
          },
          methods: {
            getBuildings: function () {
              var e = this;
              (this.buildings = null),
                O.getUserBuildings(this.filters.page).then(function (t) {
                  return (e.buildings = t.data);
                });
            },
            getCities: function () {
              var e = this;
              return de.a.get('/api/locations/cities').then(function (t) {
                e.filterDicts.cities = t.data;
              });
            },
            clearCitySearch: function () {
              (this.filters.address = ''), (this.filters.cityId = -1);
            },
            clearAddressSearch: function () {
              this.filters.address = '';
            },
            performAddressSearch: le.a.debounce(function () {
              var e = this;
              (this.buildings = null),
                O.getUserBuildings(
                  this.filters.page,
                  this.filters.cityId,
                  -1,
                  !1,
                  this.filters.address
                ).then(function (t) {
                  return (e.buildings = t.data);
                });
            }, 250),
          },
          computed: {
            selectedCity: function () {
              var e = this;
              return -1 === this.filters.cityId
                ? 'Wszystkie'
                : this.filterDicts.cities.filter(function (t) {
                    return t.id === e.filters.cityId;
                  })[0].name;
            },
            showBuildingsModal: function () {
              return this.$store.state.showBuildingsModal;
            },
            declarationModalState: function () {
              return this.$store.state.showDeclarationModal;
            },
          },
          watch: {
            'filters.cityId': function () {
              (this.filters.page = 0), this.getBuildings();
            },
            'filters.page': function (e) {
              (e = parseInt(e)), e < 0 && (this.filters.page = 0), this.getBuildings();
            },
            'filters.address': function () {
              this.performAddressSearch();
            },
            showBuildingsModal: function (e) {
              e || this.getBuildings();
            },
            declarationModalState: function (e) {
              e || this.getBuildings();
            },
          },
          mounted: function () {
            this.getBuildings(), this.getCities();
          },
          components: {
            BuildingsTable: re,
            DeleteBuildingModal: te,
            Breadcrumps: k,
            BuildingCard: b,
            BuildingModal: H,
            ModelListSelect: me['ModelListSelect'],
          },
        }),
      he = pe,
      Ae = (n('2fad'), Object(h['a'])(he, c, l, !1, null, 'e42a594e', null)),
      be = Ae.exports,
      fe = function () {
        var e = this,
          t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      ve = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'content-view' }, [
            n('h1', [e._v('Tutaj będzie Pulpit Użytkownika')]),
          ]);
        },
      ],
      ge = { name: 'User' },
      ye = ge,
      we = Object(h['a'])(ye, fe, ve, !1, null, '4bd26db8', null),
      ke = we.exports,
      Ce = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          { staticClass: 'content-view' },
          [
            n(
              'b-modal',
              {
                scopedSlots: e._u([
                  {
                    key: 'modal-footer',
                    fn: function (t) {
                      t.ok;
                      var i = t.cancel;
                      return [
                        n(
                          'b-button',
                          {
                            staticClass: 'btn btn-primary',
                            on: {
                              click: function (t) {
                                return e.submitDeclaration();
                              },
                            },
                          },
                          [e._v('\n        Tak, złóż\n      ')]
                        ),
                        n(
                          'b-button',
                          {
                            on: {
                              click: function (e) {
                                return i();
                              },
                            },
                          },
                          [e._v('\n        Cofnij\n      ')]
                        ),
                      ];
                    },
                  },
                ]),
                model: {
                  value: e.showSubmitDeclarationModal,
                  callback: function (t) {
                    e.showSubmitDeclarationModal = t;
                  },
                  expression: 'showSubmitDeclarationModal',
                },
              },
              [
                e._v(
                  '\n    Czy na pewno chcesz złożyć tę deklarację? Tej czynności nie da się cofnąć.\n\n    '
                ),
                'A' === e.declarationToSubmitType
                  ? n('p', [
                      e._v(
                        '\n      Pamiętaj! Jeżeli w budynku znajduje się lokal lub lokale niemieszkalne ogrzewane źródłem ciepła nieuwzględnionym w niniejszej deklaracji, złóż również deklarację B.\n    '
                      ),
                    ])
                  : e._e(),
                'B' === e.declarationToSubmitType
                  ? n('p', [
                      e._v(
                        '\n      Pamiętaj! Jeżeli w budynku znajduje się lokal lub lokale mieszkalne ogrzewane źródłem ciepła nieuwzględnionym w niniejszej deklaracji, złóż także deklarację A.\n    '
                      ),
                    ])
                  : e._e(),
              ]
            ),
            n(
              'b-modal',
              {
                scopedSlots: e._u([
                  {
                    key: 'modal-footer',
                    fn: function (t) {
                      t.ok;
                      var i = t.cancel;
                      return [
                        n(
                          'b-button',
                          {
                            staticClass: 'btn btn-primary',
                            on: {
                              click: function (t) {
                                return e.deleteDeclaration();
                              },
                            },
                          },
                          [e._v('\n        Tak, usuń\n      ')]
                        ),
                        n(
                          'b-button',
                          {
                            on: {
                              click: function (e) {
                                return i();
                              },
                            },
                          },
                          [e._v('\n        Cofnij\n      ')]
                        ),
                      ];
                    },
                  },
                ]),
                model: {
                  value: e.showDeleteDeclarationModal,
                  callback: function (t) {
                    e.showDeleteDeclarationModal = t;
                  },
                  expression: 'showDeleteDeclarationModal',
                },
              },
              [
                e._v(
                  '\n    Czy na pewno chcesz usunąć tę deklarację? Tej czynności nie da się cofnąć.\n\n    '
                ),
              ]
            ),
            n(
              'b-navbar',
              { attrs: { type: 'dark', variant: 'dark' } },
              [
                n(
                  'b-navbar-nav',
                  [
                    n(
                      'b-nav-form',
                      [
                        n('model-list-select', {
                          staticClass: 'm-md-2',
                          attrs: {
                            list: e.buildingsFormatted,
                            'option-value': 'value',
                            'option-text': 'text',
                            placeholder: 'Adres budynku',
                          },
                          model: {
                            value: e.filters.buildingId,
                            callback: function (t) {
                              e.$set(e.filters, 'buildingId', t);
                            },
                            expression: 'filters.buildingId',
                          },
                        }),
                        n(
                          'b-button',
                          {
                            staticClass: 'resetbtn',
                            attrs: { variant: 'default' },
                            on: { click: e.clearBuildingSearch },
                          },
                          [n('b-icon-x-circle')],
                          1
                        ),
                        n(
                          'b-dropdown',
                          {
                            staticClass: 'm-md-2',
                            attrs: {
                              text: 'Typ deklaracji: ' + e.filterDicts.type[e.filters.type],
                            },
                          },
                          [
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.type = 'ALL';
                                  },
                                },
                              },
                              [e._v('Wszystkie')]
                            ),
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.type = 'A';
                                  },
                                },
                              },
                              [e._v('Typ A')]
                            ),
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.type = 'B';
                                  },
                                },
                              },
                              [e._v('Typ B')]
                            ),
                          ],
                          1
                        ),
                        n(
                          'b-dropdown',
                          {
                            staticClass: 'm-md-2',
                            attrs: {
                              text: 'Status deklaracji: ' + e.filterDicts.status[e.filters.status],
                            },
                          },
                          [
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.status = 'ALL';
                                  },
                                },
                              },
                              [e._v('Wszystkie')]
                            ),
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.status = 'DRAFT';
                                  },
                                },
                              },
                              [e._v('Wersja robocza')]
                            ),
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.status = 'SUBMITTED';
                                  },
                                },
                              },
                              [e._v('Złożona')]
                            ),
                          ],
                          1
                        ),
                        n('model-list-select', {
                          staticClass: 'm-md-2',
                          attrs: {
                            list: e.filterDicts.cities,
                            'option-value': 'id',
                            'option-text': 'name',
                            placeholder: 'Wybierz miejscowość',
                          },
                          model: {
                            value: e.filters.cityId,
                            callback: function (t) {
                              e.$set(e.filters, 'cityId', t);
                            },
                            expression: 'filters.cityId',
                          },
                        }),
                        n(
                          'b-button',
                          {
                            staticClass: 'resetbtn',
                            attrs: { variant: 'default' },
                            on: { click: e.clearCitySearch },
                          },
                          [n('b-icon-x-circle')],
                          1
                        ),
                        n('b-form-input', {
                          staticClass: 'm-md-2',
                          staticStyle: { 'max-width': '80%' },
                          attrs: { disabled: -1 == e.filters.cityId, placeholder: 'Wpisz adres' },
                          model: {
                            value: e.filters.address,
                            callback: function (t) {
                              e.$set(e.filters, 'address', t);
                            },
                            expression: 'filters.address',
                          },
                        }),
                        n(
                          'b-button',
                          {
                            staticClass: 'resetbtn',
                            attrs: { variant: 'default' },
                            on: { click: e.clearAddressSearch },
                          },
                          [n('b-icon-x-circle')],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            n('div', { staticClass: 'container-fluid table-container' }, [
              n('div', { staticClass: 'row' }, [
                n(
                  'div',
                  { staticClass: 'col-12' },
                  [
                    e.declarationsLoaded
                      ? e._e()
                      : n(
                          'div',
                          { staticClass: 'text-center pt-5' },
                          [
                            n('b-spinner', { attrs: { label: 'Wczytuję' } }),
                            n('p', [e._v('Wczytuję listę deklaracji')]),
                          ],
                          1
                        ),
                    e.declarationsLoaded
                      ? n('ByBuildingList', {
                          attrs: { declarations: e.declarations },
                          on: {
                            'submit-declaration': e.showSubmitModal,
                            'delete-declaration': e.showDeleteModal,
                          },
                        })
                      : e._e(),
                  ],
                  1
                ),
              ]),
              e.declarationsLoaded
                ? n('div', { staticClass: 'row' }, [
                    n(
                      'div',
                      { staticClass: 'col-12 text-center mb-5' },
                      [
                        e.hasNext
                          ? n('b-button', { on: { click: e.getNextPage } }, [
                              e._v('Załaduj Kolejne Deklaracje'),
                            ])
                          : n('p', [
                              e._v('Wyświetlono wszystkie deklaracje o wybranych parametrach'),
                            ]),
                      ],
                      1
                    ),
                  ])
                : e._e(),
            ]),
            e.showBuildingsModal ? n('building-modal') : e._e(),
          ],
          1
        );
      },
      _e = [],
      Ee = (n('8e6e'), n('456d'), n('ac6a'), n('75fc')),
      De = n('bd86'),
      xe = (n('6b54'), n('e762')),
      ze = '/api/declarations',
      Be = {
        saveDeclaration: function (e, t) {
          return T.post(''.concat(ze, '/form?building=').concat(t), e);
        },
        updateDeclaration: function (e, t) {
          return T.put(''.concat(ze, '/form/').concat(t), e);
        },
        getHeatSources: function () {
          return T.get(''.concat(ze, '/soh_types'));
        },
        getBoilerClasses: function () {
          return T.get(''.concat(ze, '/solid_fuel_boiler_classes'));
        },
        getFuelClasses: function () {
          return T.get(''.concat(ze, '/solid_fuel_types'));
        },
        getUserDeclarations: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = new URLSearchParams(e).toString();
          return T.get(''.concat(ze, '/?').concat(t));
        },
        getDeclarationById: function (e) {
          return T.get(''.concat(ze, '/form/').concat(e));
        },
        printDeclaration: function (e) {
          return T.get(''.concat(ze, '/pdf/').concat(e));
        },
        getDeclarationIdByTextid: function (e) {
          return T.get(''.concat(ze, '/getbytextid/').concat(e));
        },
        submitDeclaration: function (e) {
          return T.post(''.concat(ze, '/').concat(e, '/submit'));
        },
        deleteDeclaration: function (e) {
          return T.delete(''.concat(ze, '/form/').concat(e));
        },
        getBuildingTypesForB: function () {
          return T.get(''.concat(ze, '/building_types/'));
        },
        createEditedDeclaration: function (e) {
          return T.post(''.concat(ze, '/').concat(e, '/edit'));
        },
        getDeclarationHistoryById: function (e) {
          return T.get(''.concat(ze, '/').concat(e, '/history'));
        },
        verifyDeclarationForAddress: function (e) {
          return T.get(''.concat(ze, '/verify_for_address?q=') + xe['a'].encode(JSON.stringify(e)));
        },
        getDeclarationForVerification: function (e) {
          return T.get(''.concat(ze, '/get_for_verify?q=') + xe['a'].encode(JSON.stringify(e)));
        },
        getDeclarationSummaryById: function (e) {
          return T.get(''.concat(ze, '/').concat(e, '/summary'));
        },
        cloneDeclaration: function (e, t) {
          return T.post(''.concat(ze, '/').concat(e, '/clone?building=').concat(t));
        },
      },
      je = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', [
          n('table', { staticClass: 'table table-striped d-none d-md-table' }, [
            e._m(0),
            n(
              'tbody',
              e._l(e.declarations, function (t) {
                return n('tr', { key: t.id }, [
                  n('td', [e._v(e._s(e._f('toPolish')(t.type)))]),
                  n('td', [e._v(e._s(t.building.formatted_address))]),
                  n('td', [e._v(e._s(t.created_at))]),
                  n('td', [e._v(e._s(t.updated_at))]),
                  n('td', [
                    e._v('\n        ' + e._s(e._f('statusToPolish')(t.status)) + '\n        '),
                    'SUBMITTED' === t.status || 'EDITED' === t.status
                      ? n('div', { staticClass: 'submit-date' }, [e._v(e._s(t.submitted_at))])
                      : e._e(),
                  ]),
                  n(
                    'td',
                    [
                      n(
                        'b-dropdown',
                        {
                          attrs: {
                            size: 'lg',
                            variant: 'link',
                            'toggle-class': 'text-decoration-none',
                            'no-caret': '',
                            right: '',
                          },
                          scopedSlots: e._u(
                            [
                              {
                                key: 'button-content',
                                fn: function () {
                                  return [
                                    n('b-icon-three-dots-vertical'),
                                    n('span', { staticClass: 'sr-only' }, [e._v('User')]),
                                  ];
                                },
                                proxy: !0,
                              },
                            ],
                            null,
                            !0
                          ),
                        },
                        [
                          'SUBMITTED' !== t.status
                            ? n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.$emit('submit-declaration', {
                                        declarationId: t.id,
                                        declarationType: t.type,
                                        hasStatement: t.has_statement,
                                      });
                                    },
                                  },
                                },
                                [e._v('\n            Złóż\n          ')]
                              )
                            : e._e(),
                          'SUBMITTED' !== t.status
                            ? n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.editDeclaration(t.building, t.id, t.type);
                                    },
                                  },
                                },
                                [e._v('\n            Edytuj\n          ')]
                              )
                            : e._e(),
                          'SUBMITTED' === t.status && t.editable
                            ? n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.editSubmittedDeclaration(t.building, t.id, t.type);
                                    },
                                  },
                                },
                                [e._v('\n            Edytuj\n          ')]
                              )
                            : e._e(),
                          'SUBMITTED' === t.status && t.edited
                            ? n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.showHistory(t.id);
                                    },
                                  },
                                },
                                [e._v('\n            Pokaż historię\n          ')]
                              )
                            : e._e(),
                          n(
                            'b-dropdown-item',
                            { attrs: { href: '/api/declarations/pdf/' + t.id, target: '_blank' } },
                            [e._v('Pobierz PDF\n          ')]
                          ),
                          n(
                            'b-dropdown-item',
                            {
                              attrs: { href: '#' },
                              on: {
                                click: function (n) {
                                  return e.cloneDeclaration(t.id);
                                },
                              },
                            },
                            [e._v('\n            Powiel deklarację do nowego budynku\n          ')]
                          ),
                          'SUBMITTED' !== t.status
                            ? n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.$emit('delete-declaration', t.id);
                                    },
                                  },
                                },
                                [e._v('\n            Usuń\n          ')]
                              )
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]);
              }),
              0
            ),
          ]),
          n('table', { staticClass: 'table table-striped d-table d-md-none' }, [
            e._m(1),
            n(
              'tbody',
              e._l(e.declarations, function (t) {
                return n('tr', { key: t.id }, [
                  n('td', [
                    e._v('\n        Typ: ' + e._s(e._f('toPolish')(t.type))),
                    n('br'),
                    e._v('\n        Adres: ' + e._s(t.building.formatted_address)),
                    n('br'),
                    e._v(
                      '\n        Status: ' + e._s(e._f('statusToPolish')(t.status)) + '\n      '
                    ),
                  ]),
                  n(
                    'td',
                    [
                      n(
                        'b-dropdown',
                        {
                          attrs: {
                            size: 'lg',
                            variant: 'link',
                            'toggle-class': 'text-decoration-none',
                            'no-caret': '',
                            right: '',
                          },
                          scopedSlots: e._u(
                            [
                              {
                                key: 'button-content',
                                fn: function () {
                                  return [
                                    n('b-icon-three-dots-vertical'),
                                    n('span', { staticClass: 'sr-only' }, [e._v('User')]),
                                  ];
                                },
                                proxy: !0,
                              },
                            ],
                            null,
                            !0
                          ),
                        },
                        [
                          'SUBMITTED' !== t.status
                            ? n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.$emit('submit-declaration', {
                                        declarationId: t.id,
                                        declarationType: t.type,
                                      });
                                    },
                                  },
                                },
                                [e._v('\n            Złóż\n          ')]
                              )
                            : e._e(),
                          'SUBMITTED' !== t.status
                            ? n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.editDeclaration(t.building, t.id, t.type);
                                    },
                                  },
                                },
                                [e._v('\n            Edytuj\n          ')]
                              )
                            : e._e(),
                          'SUBMITTED' === t.status && t.editable
                            ? n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.editSubmittedDeclaration(t.building, t.id, t.type);
                                    },
                                  },
                                },
                                [e._v('\n            Edytuj\n          ')]
                              )
                            : e._e(),
                          n(
                            'b-dropdown-item',
                            { attrs: { href: '/api/declarations/pdf/' + t.id, target: '_blank' } },
                            [e._v('Pobierz PDF\n          ')]
                          ),
                          'SUBMITTED' === t.status && t.edited
                            ? n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.showHistory(t.id);
                                    },
                                  },
                                },
                                [e._v('\n            Pokaż historię\n          ')]
                              )
                            : e._e(),
                          'SUBMITTED' !== t.status
                            ? n(
                                'b-dropdown-item',
                                {
                                  attrs: { href: '#' },
                                  on: {
                                    click: function (n) {
                                      return e.$emit('delete-declaration', t.id);
                                    },
                                  },
                                },
                                [e._v('\n            Usuń\n          ')]
                              )
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]);
              }),
              0
            ),
          ]),
        ]);
      },
      Se = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('thead', [
            n('tr', [
              n('th', { attrs: { scope: 'col' } }, [e._v('Typ')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Adres budynku')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Data utworzenia')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Data ostatniej modyfikacji')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Status deklaracji')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Akcje')]),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('thead', [
            n('tr', [
              n('th', { attrs: { scope: 'col' } }, [e._v('Deklaracja')]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Akcje')]),
            ]),
          ]);
        },
      ],
      Ne = {
        name: 'ByBuildingList',
        props: ['declarations'],
        components: { DeclarationsModel: Be },
        methods: {
          editDeclaration: function (e, t, n) {
            (e.declarationType = n),
              this.$store.commit('setDeclarationBuilding', e),
              this.$store.commit('setDeclarationEditId', t),
              this.$store.commit('openDeclarationModal');
          },
          editSubmittedDeclaration: function (e, t, n) {
            var i = this;
            Be.createEditedDeclaration(t).then(function (t) {
              if ((console.dir(t), 'ok' === t.data.status)) {
                var a = t.data.declarationId;
                (e.declarationType = n),
                  i.$store.commit('setDeclarationBuilding', e),
                  i.$store.commit('setDeclarationEditId', a),
                  i.$store.commit('openDeclarationModal');
              }
            });
          },
          showHistory: function (e) {
            this.$store.commit('setDeclarationHistoryId', e),
              this.$store.commit('openHistoryModal');
          },
          cloneDeclaration: function (e) {
            this.$store.commit('setClonedDeclarationId', e),
              this.$store.commit('openCloneDeclarationModal');
          },
        },
        filters: {
          toPolish: function (e) {
            return e ? ((e = e.toString()), e.charAt(0).toUpperCase() + e.slice(1)) : '';
          },
          statusToPolish: function (e) {
            return { DRAFT: 'Wersja robocza', SUBMITTED: 'Złożona', EDITED: 'Złożona w edycji' }[e];
          },
        },
      },
      Ie = Ne,
      Me = (n('5a7b'), Object(h['a'])(Ie, je, Se, !1, null, '3cbc845e', null)),
      Ge = Me.exports;
    function Te(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function Qe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Te(Object(n), !0).forEach(function (t) {
              Object(De['a'])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Te(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    var Oe = {
        name: 'Declarations',
        components: {
          ByBuildingList: Ge,
          DeclarationsModel: Be,
          ModelListSelect: me['ModelListSelect'],
          BuildingModal: H,
        },
        data: function () {
          return {
            showSubmitDeclarationModal: !1,
            showDeleteDeclarationModal: !1,
            declarationToSubmitId: null,
            declarationToSubmitType: null,
            declarationToDeleteId: null,
            page: 1,
            hasNext: !1,
            declarations: [],
            declarationsLoaded: !1,
            buildings: [],
            filters: { type: 'ALL', status: 'ALL', buildingId: '', cityId: -1, address: '' },
            filterDicts: {
              type: { ALL: 'Wszystkie', A: 'A', B: 'B' },
              status: { ALL: 'Wszystkie', SUBMITTED: 'Złożona', DRAFT: 'Wersja robocza' },
              cities: [],
            },
          };
        },
        methods: {
          submitDeclaration: le.a.debounce(function () {
            var e = this;
            Be.submitDeclaration(this.declarationToSubmitId).then(function (t) {
              'ok' === t.data.status &&
                ((e.declarations = []),
                (e.page = 1),
                e.getDeclarations(),
                (e.declarationToSubmitId = null),
                (e.showSubmitDeclarationModal = !1),
                e.$notify({
                  group: 'zone',
                  type: 'success',
                  title: 'Sukces',
                  text: 'Pomyślnie złożono deklarację',
                }));
            });
          }, 500),
          deleteDeclaration: function () {
            var e = this;
            Be.deleteDeclaration(this.declarationToDeleteId).then(function (t) {
              'ok' === t.data.status &&
                ((e.declarations = []),
                (e.page = 1),
                e.getDeclarations(),
                (e.declarationToDeleteId = null),
                (e.showDeleteDeclarationModal = !1),
                e.$notify({
                  group: 'zone',
                  type: 'success',
                  title: 'Sukces',
                  text: 'Pomyślnie usunięto deklarację',
                }));
            });
          },
          showSubmitModal: function (e) {
            e.hasStatement
              ? ((this.declarationToSubmitId = e.declarationId),
                (this.declarationToSubmitType = e.declarationType),
                (this.showSubmitDeclarationModal = !0))
              : this.$notify({
                  group: 'zone',
                  type: 'error',
                  title: 'Błąd',
                  text: 'Aby złożyć deklarację, zaznacz pole z oświadczeniem.',
                });
          },
          showDeleteModal: function (e) {
            (this.declarationToDeleteId = e), (this.showDeleteDeclarationModal = !0);
          },
          getNextPage: function () {
            this.page++, this.getDeclarations();
          },
          getDeclarations: function () {
            var e = this;
            (this.declarationsLoaded = !1),
              Be.getUserDeclarations(Qe(Qe({}, this.filters), {}, { page: this.page })).then(
                function (t) {
                  var n;
                  (n = e.declarations).push.apply(n, Object(Ee['a'])(t.data.results)),
                    (e.hasNext = !!t.data.next),
                    (e.declarationsLoaded = !0);
                }
              );
          },
          getBuildings: function () {
            var e = this;
            O.getUserBuildings().then(function (t) {
              return (e.buildings = t.data);
            });
          },
          clearBuildingSearch: function () {
            this.filters.buildingId = '';
          },
          getCities: function () {
            var e = this;
            return de.a.get('/api/locations/cities').then(function (t) {
              e.filterDicts.cities = t.data;
            });
          },
          clearCitySearch: function () {
            (this.filters.address = ''), (this.filters.cityId = -1);
          },
          clearAddressSearch: function () {
            this.filters.address = '';
          },
          performAddressSearch: le.a.debounce(function () {
            (this.declarations = []), (this.page = 1), this.getDeclarations();
          }, 250),
        },
        mounted: function () {
          this.getDeclarations(), this.getBuildings(), this.getCities();
        },
        watch: {
          'filters.type': function () {
            (this.declarations = []), (this.page = 1), this.getDeclarations();
          },
          'filters.status': function () {
            (this.declarations = []), (this.page = 1), this.getDeclarations();
          },
          'filters.buildingId': function () {
            (this.declarations = []), (this.page = 1), this.getDeclarations();
          },
          'filters.cityId': function () {
            (this.page = 1), (this.declarations = []), this.getDeclarations();
          },
          'filters.address': function () {
            this.performAddressSearch();
          },
          declarationsListTrigger: function (e) {
            (this.declarations = []), (this.page = 1), this.getDeclarations();
          },
        },
        computed: {
          selectedBuilding: function () {
            var e = this;
            return this.filters.buildingId
              ? this.buildings.filter(function (t) {
                  return t.id === e.filters.buildingId;
                })[0].formatted_address
              : 'Wszystkie';
          },
          selectedCity: function () {
            var e = this;
            return -1 === this.filters.cityId
              ? 'Wszystkie'
              : this.filterDicts.cities.filter(function (t) {
                  return t.id === e.filters.cityId;
                })[0].name;
          },
          declarationsListTrigger: function () {
            return this.$store.state.declarationsListTrigger;
          },
          buildingsFormatted: function () {
            var e = [{ value: '', text: 'Proszę Wybrać Adres Budynku...' }];
            return (
              this.buildings.forEach(function (t) {
                e.push({ value: t.id, text: t.formatted_address });
              }),
              e
            );
          },
          showBuildingsModal: function () {
            return this.$store.state.showBuildingsModal;
          },
        },
      },
      Pe = Oe,
      Fe = (n('dac9'), Object(h['a'])(Pe, Ce, _e, !1, null, '43837f06', null)),
      Le = Fe.exports,
      Ue = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'content-view' }, [
          n(
            'div',
            { staticClass: 'container-fluid' },
            [
              n(
                'b-card',
                { staticClass: 'mt-3', attrs: { title: 'Witaj w aplikacji ZONE' } },
                [
                  n('b-card-text', [
                    n('p', [e._v('Aby '), n('b', [e._v('złożyć')]), e._v(' deklarację:')]),
                    n('ul', [
                      n('li', [e._v('przejdź do listy budynków,')]),
                      n('li', [
                        e._v(
                          'jeżeli nie dodałeś wcześniej budynku, dla którego chcesz złożyć deklarację, wybierz opcję '
                        ),
                        n('i', [e._v('Dodaj Budynek')]),
                        e._v(' i wypełnij jego metrykę,'),
                      ]),
                      n('li', [
                        e._v(
                          'po dodaniu budynku przejdź do listy budynków i w prawym górnym rogu karty budynku wybierz rodzaj deklaracji, którą chcesz dla niego złożyć,'
                        ),
                      ]),
                      n('li', [
                        e._v(
                          'alternatywnie: po dodaniu budynku możesz przejść do listy deklaracji i wybrać rodzaj budynku oraz adres, dla którego chcesz złożyć deklarację.'
                        ),
                      ]),
                    ]),
                    n('p', [e._v('Aby '), n('b', [e._v('pobrać')]), e._v(' złożoną deklarację:')]),
                    n('ul', [
                      n('li', [
                        e._v('przejdź do zakładki '),
                        n('i', [e._v('Pobierz swoją deklarację')]),
                        e._v(','),
                      ]),
                      n('li', [e._v('odszukaj deklarację, dla której chcesz wygenerować PDF.')]),
                    ]),
                    n('p', [e._v('LUB')]),
                    n('ul', [
                      n('li', [
                        e._v('przejdź do zakładki '),
                        n('i', [e._v('Deklaracje')]),
                        e._v(','),
                      ]),
                      n('li', [
                        e._v('odszukaj deklarację, dla której chcesz wygenerować plik PDF,'),
                      ]),
                      n('li', [
                        e._v('w kolumnie '),
                        n('i', [e._v('Akcje')]),
                        e._v(' wybierz opcję: '),
                        n('i', [e._v('Pobierz PDF')]),
                        e._v('.'),
                      ]),
                    ]),
                    n('p', [e._v('Aby '), n('b', [e._v('edytować')]), e._v(' deklarację:')]),
                    n('ul', [
                      n('li', [
                        e._v('przejdź do zakładki '),
                        n('i', [e._v('Deklaracje')]),
                        e._v(','),
                      ]),
                      n('li', [e._v('odszukaj deklarację, którą chcesz edytować,')]),
                      n('li', [
                        e._v('w kolumnie '),
                        n('i', [e._v('Akcje')]),
                        e._v(' wybierz opcję: '),
                        n('i', [e._v('Edytuj')]),
                        e._v('.'),
                      ]),
                    ]),
                    n('p', [
                      e._v('Pamiętaj! Opcja '),
                      n('i', [e._v('Edytuj')]),
                      e._v(
                        ' dotyczy tylko i wyłącznie korygowania drobnych błędów. Jeżeli doszło do wymiany bądź zmiany źródła ciepła lub spalania paliw lub innych istotnych danych, konieczne jest złożenie nowej deklaracji.'
                      ),
                    ]),
                  ]),
                  n('b-button', { attrs: { to: { name: 'buildings' }, variant: 'primary' } }, [
                    e._v('Lista budynków'),
                  ]),
                  e._v(' \n      '),
                  n('b-button', { attrs: { to: { name: 'declarations' }, variant: 'primary' } }, [
                    e._v('Lista deklaracji'),
                  ]),
                  e._v(' \n      '),
                  n(
                    'b-button',
                    {
                      attrs: {
                        href: 'https://www.gunb.gov.pl/sites/default/files/pliki/dokumenty/instrukcja_-_ceeb_0.pdf',
                        target: '_blank',
                        variant: 'primary',
                      },
                    },
                    [e._v('Instrukcja składania deklaracji')]
                  ),
                ],
                1
              ),
              n(
                'b-card',
                { staticClass: 'mt-3', attrs: { title: 'Aktualności' } },
                [
                  n('b-card-text', [
                    n('p', [
                      n(
                        'a',
                        {
                          staticClass: 'pure-link',
                          attrs: {
                            href: 'https://ceeb.gov.pl/nowe_wersje_formularzy_deklaracji_dot_zrodel_ciepla_i_spalania_paliw_-_panel_obywatela.pdf',
                            target: '_blank',
                          },
                        },
                        [e._v('Nowe wzory deklaracji')]
                      ),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ]);
      },
      Re = [],
      Ve = { name: 'Welcome' },
      We = Ve,
      Ke = (n('f691'), Object(h['a'])(We, Ue, Re, !1, null, '68473a18', null)),
      Ze = Ke.exports,
      Je = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          { staticClass: 'content-view' },
          [
            n(
              'b-navbar',
              { attrs: { type: 'dark', variant: 'dark' } },
              [
                n(
                  'b-navbar-nav',
                  [
                    n(
                      'b-nav-form',
                      [
                        n('model-list-select', {
                          staticClass: 'm-md-2',
                          attrs: {
                            list: e.buildingsFormatted,
                            'option-value': 'value',
                            'option-text': 'text',
                            placeholder: 'Adres budynku',
                          },
                          model: {
                            value: e.filters.buildingId,
                            callback: function (t) {
                              e.$set(e.filters, 'buildingId', t);
                            },
                            expression: 'filters.buildingId',
                          },
                        }),
                        n(
                          'b-button',
                          {
                            staticClass: 'resetbtn',
                            attrs: { variant: 'default' },
                            on: { click: e.clearBuildingSearch },
                          },
                          [n('b-icon-x-circle')],
                          1
                        ),
                        n(
                          'b-dropdown',
                          {
                            staticClass: 'm-md-2',
                            attrs: {
                              text: 'Typ deklaracji: ' + e.filterDicts.type[e.filters.type],
                            },
                          },
                          [
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.type = 'ALL';
                                  },
                                },
                              },
                              [e._v('Wszystkie')]
                            ),
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.type = 'A';
                                  },
                                },
                              },
                              [e._v('Typ A')]
                            ),
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.type = 'B';
                                  },
                                },
                              },
                              [e._v('Typ B')]
                            ),
                          ],
                          1
                        ),
                        n(
                          'b-dropdown',
                          {
                            staticClass: 'm-md-2',
                            attrs: {
                              text: 'Status deklaracji: ' + e.filterDicts.status[e.filters.status],
                            },
                          },
                          [
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.status = 'ALL';
                                  },
                                },
                              },
                              [e._v('Wszystkie')]
                            ),
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.status = 'DRAFT';
                                  },
                                },
                              },
                              [e._v('Wersja robocza')]
                            ),
                            n(
                              'b-dropdown-item',
                              {
                                on: {
                                  click: function (t) {
                                    e.filters.status = 'SUBMITTED';
                                  },
                                },
                              },
                              [e._v('Złożona')]
                            ),
                          ],
                          1
                        ),
                        n('model-list-select', {
                          staticClass: 'm-md-2',
                          attrs: {
                            list: e.filterDicts.cities,
                            'option-value': 'id',
                            'option-text': 'name',
                            placeholder: 'Wybierz miejscowość',
                          },
                          model: {
                            value: e.filters.cityId,
                            callback: function (t) {
                              e.$set(e.filters, 'cityId', t);
                            },
                            expression: 'filters.cityId',
                          },
                        }),
                        n(
                          'b-button',
                          {
                            staticClass: 'resetbtn',
                            attrs: { variant: 'default' },
                            on: { click: e.clearCitySearch },
                          },
                          [n('b-icon-x-circle')],
                          1
                        ),
                        n('b-form-input', {
                          staticClass: 'm-md-2',
                          attrs: { disabled: -1 == e.filters.cityId, placeholder: 'Wpisz adres' },
                          model: {
                            value: e.filters.address,
                            callback: function (t) {
                              e.$set(e.filters, 'address', t);
                            },
                            expression: 'filters.address',
                          },
                        }),
                        n(
                          'b-button',
                          {
                            staticClass: 'resetbtn',
                            attrs: { variant: 'default' },
                            on: { click: e.clearAddressSearch },
                          },
                          [n('b-icon-x-circle')],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            n('div', { staticClass: 'container-fluid table-container' }, [
              n('div', { staticClass: 'row' }, [
                n(
                  'div',
                  { staticClass: 'col-12' },
                  [
                    e.declarationsLoaded
                      ? e._e()
                      : n(
                          'div',
                          { staticClass: 'text-center pt-5' },
                          [
                            n('b-spinner', { attrs: { label: 'Wczytuję' } }),
                            n('p', [e._v('Wczytuję listę deklaracji')]),
                          ],
                          1
                        ),
                    e.declarationsLoaded
                      ? n('ReceiptList', { attrs: { declarations: e.declarations } })
                      : e._e(),
                  ],
                  1
                ),
              ]),
              e.declarationsLoaded
                ? n('div', { staticClass: 'row' }, [
                    n(
                      'div',
                      { staticClass: 'col-12 text-center mb-5' },
                      [
                        e.hasNext
                          ? n('b-button', { on: { click: e.getNextPage } }, [
                              e._v('Załaduj Kolejne Deklaracje'),
                            ])
                          : n('p', [
                              e._v('Wyświetlono wszystkie deklaracje o wybranych parametrach'),
                            ]),
                      ],
                      1
                    ),
                  ])
                : e._e(),
            ]),
          ],
          1
        );
      },
      He = [],
      Ye = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          [
            n(
              'b-container',
              { attrs: { fluid: '' } },
              [
                n(
                  'b-row',
                  e._l(e.declarations, function (t) {
                    return n(
                      'b-col',
                      { key: t.id, attrs: { lg: '3', md: '6', sm: '12' } },
                      [
                        n(
                          'div',
                          {
                            staticClass: 'declaration-card card',
                            on: {
                              click: function (n) {
                                return e.downloadPdf(t.id);
                              },
                            },
                          },
                          [
                            n('div', { staticStyle: { 'margin-right': '30px' } }, [
                              n('strong', [e._v(e._s(t.building.formatted_address))]),
                              n('br'),
                              e._v(
                                '\n            ' +
                                  e._s(e._f('statusToPolish')(t.status)) +
                                  ', typ ' +
                                  e._s(e._f('toPolish')(t.type))
                              ),
                              n('br'),
                              n('small', [e._v(e._s(t.created_at))]),
                            ]),
                            n('b-icon-download', {
                              staticClass: 'dicon',
                              attrs: { 'font-scale': '1.8' },
                            }),
                          ],
                          1
                        ),
                        n('b-col'),
                      ],
                      1
                    );
                  }),
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      Xe = [],
      qe = {
        name: 'ReceiptList',
        props: ['declarations'],
        components: { DeclarationsModel: Be },
        methods: {
          downloadPdf: function (e) {
            window.open('/api/declarations/pdf/' + e, '_blank');
          },
        },
        filters: {
          toPolish: function (e) {
            return e ? ((e = e.toString()), e.charAt(0).toUpperCase() + e.slice(1)) : '';
          },
          statusToPolish: function (e) {
            return { DRAFT: 'Wersja robocza', SUBMITTED: 'Złożona', EDITED: 'Złożona w edycji' }[e];
          },
        },
      },
      $e = qe,
      et = (n('9a4d'), Object(h['a'])($e, Ye, Xe, !1, null, '22ec3c3f', null)),
      tt = et.exports;
    function nt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function it(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? nt(Object(n), !0).forEach(function (t) {
              Object(De['a'])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : nt(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    var at = {
        name: 'Receipts',
        components: {
          ReceiptList: tt,
          DeclarationsModel: Be,
          ModelListSelect: me['ModelListSelect'],
        },
        data: function () {
          return {
            page: 1,
            hasNext: !1,
            declarations: [],
            declarationsLoaded: !1,
            buildings: [],
            filters: { type: 'ALL', status: 'ALL', buildingId: '', cityId: -1, address: '' },
            filterDicts: {
              type: { ALL: 'Wszystkie', A: 'A', B: 'B' },
              status: { ALL: 'Wszystkie', SUBMITTED: 'Złożona', DRAFT: 'Wersja robocza' },
              cities: [],
            },
          };
        },
        methods: {
          getNextPage: function () {
            this.page++, this.getDeclarations();
          },
          getDeclarations: function () {
            var e = this;
            (this.declarationsLoaded = !1),
              Be.getUserDeclarations(it(it({}, this.filters), {}, { page: this.page })).then(
                function (t) {
                  var n;
                  (n = e.declarations).push.apply(n, Object(Ee['a'])(t.data.results)),
                    (e.hasNext = !!t.data.next),
                    (e.declarationsLoaded = !0);
                }
              );
          },
          getBuildings: function () {
            var e = this;
            O.getUserBuildings().then(function (t) {
              return (e.buildings = t.data);
            });
          },
          clearBuildingSearch: function () {
            this.filters.buildingId = '';
          },
          getCities: function () {
            var e = this;
            return de.a.get('/api/locations/cities').then(function (t) {
              e.filterDicts.cities = t.data;
            });
          },
          clearCitySearch: function () {
            (this.filters.address = ''), (this.filters.cityId = -1);
          },
          clearAddressSearch: function () {
            this.filters.address = '';
          },
          performAddressSearch: le.a.debounce(function () {
            (this.declarations = []), (this.page = 1), this.getDeclarations();
          }, 250),
        },
        mounted: function () {
          this.getDeclarations(), this.getBuildings(), this.getCities();
        },
        watch: {
          'filters.type': function () {
            (this.declarations = []), (this.page = 1), this.getDeclarations();
          },
          'filters.status': function () {
            (this.declarations = []), (this.page = 1), this.getDeclarations();
          },
          'filters.buildingId': function () {
            (this.declarations = []), (this.page = 1), this.getDeclarations();
          },
          'filters.cityId': function () {
            (this.page = 1), (this.declarations = []), this.getDeclarations();
          },
          'filters.address': function () {
            this.performAddressSearch();
          },
          declarationsListTrigger: function (e) {
            (this.declarations = []), (this.page = 1), this.getDeclarations();
          },
        },
        computed: {
          selectedBuilding: function () {
            var e = this;
            return this.filters.buildingId
              ? this.buildings.filter(function (t) {
                  return t.id === e.filters.buildingId;
                })[0].formatted_address
              : 'Wszystkie';
          },
          selectedCity: function () {
            var e = this;
            return -1 === this.filters.cityId
              ? 'Wszystkie'
              : this.filterDicts.cities.filter(function (t) {
                  return t.id === e.filters.cityId;
                })[0].name;
          },
          declarationsListTrigger: function () {
            return this.$store.state.declarationsListTrigger;
          },
          buildingsFormatted: function () {
            var e = [{ value: '', text: 'Proszę Wybrać Adres Budynku...' }];
            return (
              this.buildings.forEach(function (t) {
                e.push({ value: t.id, text: t.formatted_address });
              }),
              e
            );
          },
        },
      },
      st = at,
      ot = (n('2809'), Object(h['a'])(st, Je, He, !1, null, '2c000939', null)),
      rt = ot.exports,
      ct = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'content-view' }, [
          n('div', { staticClass: 'container-fluid' }, [
            n('div', { staticClass: 'row' }, [
              n(
                'div',
                { staticClass: 'col-12 col-lg-6' },
                [
                  null != e.verificationResult
                    ? n('b-card', { staticClass: 'mt-3' }, [
                        n('div', { staticClass: 'row mb-5' }, [
                          n('div', { staticClass: 'col-12' }, [
                            '' === e.verificationResult
                              ? n('div', [
                                  e._v(
                                    'Deklaracja o wskazanych parametrach nie istnieje w bazie CEEB. Jeżeli złożyłeś deklarację w formie papierowej do właściwego urzędu gminy/miasta skontaktuj się z właściwym urzędem. Pamiętaj, że pracownik urzędu ma 30 dni na wprowadzenie Twojej deklaracji do bazy CEEB w przypadku źródeł ciepła/spalania paliw, które uruchomione zostały po 1.07.2021 r. oraz 6 miesięcy w przypadku źródeł ciepła/spalania paliw, które uruchomione zostały przed 1.07.2021 r.'
                                  ),
                                ])
                              : e._e(),
                            '' !== e.verificationResult
                              ? n('div', [
                                  e._v(
                                    'Deklaracja dla wskazanego punktu adresowego została złożona do bazy CEEB.'
                                  ),
                                  n('br'),
                                  n('br'),
                                  e._v(
                                    '\n              Jeżeli deklaracja została złożona w formie elektronicznej i chcesz wydrukować jej potwierdzenie, zaloguj się ponownie na swoje Konto użytkownika z wykorzystaniem login.gov.pl: '
                                  ),
                                  n(
                                    'a',
                                    { attrs: { href: 'https://zoneapp.gunb.gov.pl/wk/login' } },
                                    [e._v('Logowanie do bazy CEEB')]
                                  ),
                                  e._v(
                                    ' i pobierz PDF deklaracji. Jeżeli posiadasz unikalny numer deklaracji, możesz również wpisać go w wyszukiwarkę obok i wygenerować PDF z deklaracją.'
                                  ),
                                  n('br'),
                                  n('br'),
                                  e._v(
                                    '\n              Jeżeli deklaracja została złożona w formie papierowej i posiadasz jej unikalny numer, wpisz go wyszukiwarkę obok, aby wygenerować plik PDF. Jeżeli nie posiadasz unikalnego numeru deklaracji, skontaktuj się z właściwym urzędem gminy/miasta, do którego składana była deklaracja.'
                                  ),
                                ])
                              : e._e(),
                          ]),
                        ]),
                        n('div', { staticClass: 'buttons-row' }, [
                          n(
                            'button',
                            {
                              staticClass: 'btn btn-primary mr-3',
                              attrs: { type: 'button' },
                              on: { click: e.closeDeclarationVerification },
                            },
                            [e._v('\n              Sprawdź kolejny adres\n            ')]
                          ),
                        ]),
                      ])
                    : e._e(),
                  null == e.verificationResult
                    ? n(
                        'b-card',
                        { staticClass: 'mt-3' },
                        [
                          n('b-card-text', [
                            n('div', { staticClass: 'mb-3' }, [
                              n('strong', [
                                e._v(
                                  'Czy deklaracja dla Twojego punktu adresowego została zgłoszona do bazy CEEB?'
                                ),
                              ]),
                            ]),
                            n('div', { staticClass: 'forms' }, [
                              n('div', { staticClass: 'row' }, [
                                n(
                                  'div',
                                  { staticClass: 'col-12' },
                                  [
                                    n('InputDropdown', {
                                      class: { error: e.errors.includes('voivodeship') },
                                      attrs: { items: e.voivodeships, placeholder: 'Województwo' },
                                      model: {
                                        value: e.voivodeship,
                                        callback: function (t) {
                                          e.voivodeship = t;
                                        },
                                        expression: 'voivodeship',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                n(
                                  'div',
                                  { staticClass: 'col-12' },
                                  [
                                    n('InputDropdown', {
                                      ref: 'countyInput',
                                      class: { error: e.errors.includes('county') },
                                      attrs: { items: e.counties, placeholder: 'Powiat' },
                                      model: {
                                        value: e.county,
                                        callback: function (t) {
                                          e.county = t;
                                        },
                                        expression: 'county',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                n(
                                  'div',
                                  { staticClass: 'col-12' },
                                  [
                                    n('InputDropdown', {
                                      ref: 'communityInput',
                                      class: { error: e.errors.includes('community') },
                                      attrs: { items: e.communities, placeholder: 'Gmina' },
                                      model: {
                                        value: e.community,
                                        callback: function (t) {
                                          e.community = t;
                                        },
                                        expression: 'community',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                n(
                                  'div',
                                  { staticClass: 'col-12 col-md-8' },
                                  [
                                    n('InputDropdown', {
                                      ref: 'cityInput',
                                      class: { error: e.errors.includes('city') },
                                      attrs: { items: e.cities, placeholder: 'Miejscowość' },
                                      model: {
                                        value: e.city,
                                        callback: function (t) {
                                          e.city = t;
                                        },
                                        expression: 'city',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                n('div', { staticClass: 'col-12 col-md-4' }, [
                                  n('input', {
                                    directives: [
                                      {
                                        name: 'mask',
                                        rawName: 'v-mask',
                                        value: '##-###',
                                        expression: "'##-###'",
                                      },
                                      {
                                        name: 'model',
                                        rawName: 'v-model',
                                        value: e.postalCode,
                                        expression: 'postalCode',
                                      },
                                    ],
                                    staticClass: 'text-input postal-code-input',
                                    class: { error: e.errors.includes('postalCode') },
                                    attrs: { placeholder: 'Kod pocztowy' },
                                    domProps: { value: e.postalCode },
                                    on: {
                                      input: function (t) {
                                        t.target.composing || (e.postalCode = t.target.value);
                                      },
                                    },
                                  }),
                                ]),
                                n(
                                  'div',
                                  {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: e.customStreetEntrance && !e.hasNoStreets,
                                        expression: 'customStreetEntrance && (!hasNoStreets)',
                                      },
                                    ],
                                    staticClass: 'col-8',
                                    staticStyle: { 'min-height': '64px' },
                                  },
                                  [
                                    n('input', {
                                      directives: [
                                        {
                                          name: 'model',
                                          rawName: 'v-model',
                                          value: e.customStreetName,
                                          expression: 'customStreetName',
                                        },
                                      ],
                                      class: {
                                        error: e.errors.includes('street'),
                                        'text-input': !0,
                                        'street-input': !0,
                                      },
                                      attrs: {
                                        type: 'text',
                                        'aria-label': 'Niestandardowa nazwa ulicy',
                                        placeholder: 'Niestandardowa nazwa ulicy',
                                      },
                                      domProps: { value: e.customStreetName },
                                      on: {
                                        input: function (t) {
                                          t.target.composing ||
                                            (e.customStreetName = t.target.value);
                                        },
                                      },
                                    }),
                                  ]
                                ),
                                n(
                                  'div',
                                  {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !e.customStreetEntrance && !e.hasNoStreets,
                                        expression: '(!customStreetEntrance) && (!hasNoStreets)',
                                      },
                                    ],
                                    staticClass: 'col-12 col-md-8',
                                  },
                                  [
                                    n('InputDropdown', {
                                      ref: 'streetInput',
                                      class: {
                                        error: e.errors.includes('street'),
                                        'street-input': !0,
                                      },
                                      attrs: { items: e.streets, placeholder: 'Ulica' },
                                      model: {
                                        value: e.street,
                                        callback: function (t) {
                                          e.street = t;
                                        },
                                        expression: 'street',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                n(
                                  'div',
                                  {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: e.hasNoStreets,
                                        expression: 'hasNoStreets',
                                      },
                                    ],
                                    staticClass: 'col-8',
                                    staticStyle: { 'min-height': '64px' },
                                  },
                                  [e._v('\n                   \n                ')]
                                ),
                                n(
                                  'div',
                                  {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: e.customNumberEntrance,
                                        expression: 'customNumberEntrance',
                                      },
                                    ],
                                    staticClass: 'col-12 col-md-4',
                                  },
                                  [
                                    n('input', {
                                      directives: [
                                        {
                                          name: 'model',
                                          rawName: 'v-model',
                                          value: e.customNumber,
                                          expression: 'customNumber',
                                        },
                                      ],
                                      class: {
                                        error: e.errors.includes('number'),
                                        'text-input': !0,
                                        'building-input': !0,
                                      },
                                      attrs: {
                                        type: 'text',
                                        'aria-label': 'Numer budynku',
                                        placeholder: 'Wpisz numer budynku',
                                      },
                                      domProps: { value: e.customNumber },
                                      on: {
                                        input: function (t) {
                                          t.target.composing || (e.customNumber = t.target.value);
                                        },
                                      },
                                    }),
                                  ]
                                ),
                                n(
                                  'div',
                                  {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !e.customNumberEntrance,
                                        expression: '!customNumberEntrance',
                                      },
                                    ],
                                    staticClass: 'col-12 col-md-4',
                                  },
                                  [
                                    n('InputDropdown', {
                                      ref: 'numberInput',
                                      staticClass: 'street-input',
                                      class: {
                                        error: e.errors.includes('number'),
                                        'street-input': !0,
                                      },
                                      attrs: {
                                        items: e.numbers,
                                        placeholder: 'Wybierz numer budynku',
                                      },
                                      model: {
                                        value: e.number,
                                        callback: function (t) {
                                          e.number = t;
                                        },
                                        expression: 'number',
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                n('div', { staticClass: 'col-12' }, [
                                  n(
                                    'label',
                                    {
                                      directives: [
                                        {
                                          name: 'show',
                                          rawName: 'v-show',
                                          value: !e.hasNoStreets,
                                          expression: '(!hasNoStreets)',
                                        },
                                      ],
                                      attrs: { for: 'custom_street_checkbox' },
                                    },
                                    [
                                      n('input', {
                                        directives: [
                                          {
                                            name: 'model',
                                            rawName: 'v-model',
                                            value: e.customStreetEntrance,
                                            expression: 'customStreetEntrance',
                                          },
                                        ],
                                        attrs: { type: 'checkbox', id: 'custom_street_checkbox' },
                                        domProps: {
                                          checked: Array.isArray(e.customStreetEntrance)
                                            ? e._i(e.customStreetEntrance, null) > -1
                                            : e.customStreetEntrance,
                                        },
                                        on: {
                                          change: function (t) {
                                            var n = e.customStreetEntrance,
                                              i = t.target,
                                              a = !!i.checked;
                                            if (Array.isArray(n)) {
                                              var s = null,
                                                o = e._i(n, s);
                                              i.checked
                                                ? o < 0 && (e.customStreetEntrance = n.concat([s]))
                                                : o > -1 &&
                                                  (e.customStreetEntrance = n
                                                    .slice(0, o)
                                                    .concat(n.slice(o + 1)));
                                            } else e.customStreetEntrance = a;
                                          },
                                        },
                                      }),
                                      e._v(
                                        '\n                    Nie znalazłeś swojej ulicy, wpisz ją ręcznie\n                    '
                                      ),
                                      n('span', { staticClass: 'checkmark' }),
                                    ]
                                  ),
                                  n('br'),
                                  n('label', { attrs: { for: 'custom_number_checkbox' } }, [
                                    n('input', {
                                      directives: [
                                        {
                                          name: 'model',
                                          rawName: 'v-model',
                                          value: e.customNumberEntrance,
                                          expression: 'customNumberEntrance',
                                        },
                                      ],
                                      attrs: { type: 'checkbox', id: 'custom_number_checkbox' },
                                      domProps: {
                                        checked: Array.isArray(e.customNumberEntrance)
                                          ? e._i(e.customNumberEntrance, null) > -1
                                          : e.customNumberEntrance,
                                      },
                                      on: {
                                        change: function (t) {
                                          var n = e.customNumberEntrance,
                                            i = t.target,
                                            a = !!i.checked;
                                          if (Array.isArray(n)) {
                                            var s = null,
                                              o = e._i(n, s);
                                            i.checked
                                              ? o < 0 && (e.customNumberEntrance = n.concat([s]))
                                              : o > -1 &&
                                                (e.customNumberEntrance = n
                                                  .slice(0, o)
                                                  .concat(n.slice(o + 1)));
                                          } else e.customNumberEntrance = a;
                                        },
                                      },
                                    }),
                                    e._v(
                                      '\n                    Nie znalazłeś numeru swojego budynku, wpisz go ręcznie\n                    '
                                    ),
                                    n('span', { staticClass: 'checkmark' }),
                                  ]),
                                  n('br'),
                                  n('label', { attrs: { for: 'has_no_streets' } }, [
                                    n('input', {
                                      directives: [
                                        {
                                          name: 'model',
                                          rawName: 'v-model',
                                          value: e.hasNoStreets,
                                          expression: 'hasNoStreets',
                                        },
                                      ],
                                      attrs: { type: 'checkbox', id: 'has_no_streets' },
                                      domProps: {
                                        checked: Array.isArray(e.hasNoStreets)
                                          ? e._i(e.hasNoStreets, null) > -1
                                          : e.hasNoStreets,
                                      },
                                      on: {
                                        change: function (t) {
                                          var n = e.hasNoStreets,
                                            i = t.target,
                                            a = !!i.checked;
                                          if (Array.isArray(n)) {
                                            var s = null,
                                              o = e._i(n, s);
                                            i.checked
                                              ? o < 0 && (e.hasNoStreets = n.concat([s]))
                                              : o > -1 &&
                                                (e.hasNoStreets = n
                                                  .slice(0, o)
                                                  .concat(n.slice(o + 1)));
                                          } else e.hasNoStreets = a;
                                        },
                                      },
                                    }),
                                    e._v(
                                      '\n                    W deklaracji nie wskazano ulicy\n                    '
                                    ),
                                    n('span', { staticClass: 'checkmark' }),
                                  ]),
                                ]),
                              ]),
                              n(
                                'div',
                                { staticClass: 'buttons-row' },
                                [
                                  n(
                                    'button',
                                    {
                                      staticClass: 'btn btn-primary',
                                      attrs: { type: 'button', disabled: e.inProgress },
                                      on: { click: e.verifyDeclarationForAddress },
                                    },
                                    [e._v('\n                  Sprawdź\n                ')]
                                  ),
                                  e._v('\n                 \n                '),
                                  e.inProgress
                                    ? n('b-spinner', { attrs: { label: 'Wczytuję' } })
                                    : e._e(),
                                ],
                                1
                              ),
                            ]),
                          ]),
                        ],
                        1
                      )
                    : e._e(),
                ],
                1
              ),
              null == e.verificationResult
                ? n(
                    'div',
                    { staticClass: 'col-12 col-lg-6' },
                    [
                      n(
                        'b-card',
                        { staticClass: 'mt-3' },
                        [
                          n('b-card-text', [
                            n('div', { staticClass: 'row mb-3' }, [
                              n('div', { staticClass: 'col-12' }, [
                                n('strong', [
                                  e._v(
                                    'Wpisz unikalny numer deklaracji aby pobrać ją w formacie PDF'
                                  ),
                                ]),
                              ]),
                            ]),
                            n('div', { staticClass: 'row mb-3' }, [
                              n('div', { staticClass: 'col-12' }, [
                                n('input', {
                                  directives: [
                                    {
                                      name: 'model',
                                      rawName: 'v-model',
                                      value: e.textid,
                                      expression: 'textid',
                                    },
                                  ],
                                  staticClass: 'text-input',
                                  class: { error: e.pdfErrors.includes('textid') },
                                  attrs: { type: 'text', placeholder: 'Unikalny numer deklaracji' },
                                  domProps: { value: e.textid },
                                  on: {
                                    input: function (t) {
                                      t.target.composing || (e.textid = t.target.value);
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            n('div', { staticClass: 'row' }, [
                              n('div', { staticClass: 'col-12 radios' }, [
                                n('label', { class: { error: e.pdfErrors.includes('isOwner') } }, [
                                  n('input', {
                                    directives: [
                                      {
                                        name: 'model',
                                        rawName: 'v-model',
                                        value: e.isOwner,
                                        expression: 'isOwner',
                                      },
                                    ],
                                    attrs: { type: 'radio' },
                                    domProps: { value: !0, checked: e._q(e.isOwner, !0) },
                                    on: {
                                      change: function (t) {
                                        e.isOwner = !0;
                                      },
                                    },
                                  }),
                                  e._v(
                                    '\n                  Właściciel / Współwłaściciel\n                '
                                  ),
                                ]),
                                n(
                                  'label',
                                  {
                                    class: { error: e.pdfErrors.includes('isOwner') },
                                    staticStyle: { 'margin-left': '3em' },
                                  },
                                  [
                                    n('input', {
                                      directives: [
                                        {
                                          name: 'model',
                                          rawName: 'v-model',
                                          value: e.isOwner,
                                          expression: 'isOwner',
                                        },
                                      ],
                                      attrs: { type: 'radio' },
                                      domProps: { value: !1, checked: e._q(e.isOwner, !1) },
                                      on: {
                                        change: function (t) {
                                          e.isOwner = !1;
                                        },
                                      },
                                    }),
                                    e._v('\n                  Zarządzający\n                '),
                                  ]
                                ),
                              ]),
                            ]),
                            n('div', { staticClass: 'row mb-3' }, [
                              n('div', { staticClass: 'col-12' }, [
                                n('input', {
                                  directives: [
                                    {
                                      name: 'model',
                                      rawName: 'v-model',
                                      value: e.name,
                                      expression: 'name',
                                    },
                                  ],
                                  staticClass: 'text-input',
                                  class: { error: e.pdfErrors.includes('name') },
                                  attrs: {
                                    type: 'text',
                                    placeholder:
                                      'Imię i nazwisko wypełniającego lub nazwa instytucji/firmy',
                                  },
                                  domProps: { value: e.name },
                                  on: {
                                    input: function (t) {
                                      t.target.composing || (e.name = t.target.value);
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            n(
                              'div',
                              { staticClass: 'buttons-row' },
                              [
                                n(
                                  'button',
                                  {
                                    staticClass: 'btn btn-primary',
                                    attrs: { type: 'button', disabled: e.inTextidProgress },
                                    on: { click: e.downloadPdf },
                                  },
                                  [e._v('\n                  Pobierz PDF\n                ')]
                                ),
                                e._v('\n                 \n                '),
                                e.inTextidProgress
                                  ? n('b-spinner', { attrs: { label: 'Wczytuję' } })
                                  : e._e(),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : e._e(),
            ]),
          ]),
        ]);
      },
      lt = [],
      ut =
        (n('28a5'),
        {
          name: 'Verification',
          mixins: [W],
          components: { InputDropdown: S },
          data: function () {
            return {
              saveButtonLock: !1,
              errors: [],
              verificationResult: null,
              inProgress: !1,
              hasNoStreets: !1,
              textid: null,
              inTextidProgress: !1,
              isOwner: null,
              name: null,
              pdfErrors: [],
            };
          },
          methods: {
            closeDeclarationVerification: function () {
              (this.verificationResult = null),
                (this.voivodeship = null),
                (this.county = null),
                (this.community = null),
                (this.city = null),
                (this.postalCode = null),
                (this.street = null),
                (this.number = null),
                (this.customStreetEntrance = null),
                (this.customNumberEntrance = null),
                (this.hasNoStreets = !1);
            },
            verifyDeclarationForAddress: function () {
              var e = this,
                t = [];
              if (
                ((this.voivodeship && this.voivodeship.id) || t.push('voivodeship'),
                (this.county && this.county.id) || t.push('county'),
                (this.community && this.community.id) || t.push('community'),
                (this.city && this.city.id) || t.push('city'),
                (this.postalCode && this.postalCode.length) || t.push('postalCode'),
                this.hasNoStreets
                  ? this.customNumberEntrance || (this.number && this.number.id) || t.push('number')
                  : (this.customStreetEntrance && this.customNumberEntrance) ||
                    (this.customStreetEntrance ||
                      (this.street && this.street.id) ||
                      t.push('street'),
                    this.customNumberEntrance ||
                      (this.number && this.number.id) ||
                      t.push('number')),
                (this.errors = t),
                t.length)
              )
                this.$notify({
                  group: 'zone',
                  type: 'error',
                  title: 'Błąd!',
                  text: 'Nie wszystkie wymagane pola zostały wypełnione',
                });
              else {
                var n = { postal_code: this.postalCode, city_id: this.city.id };
                this.customStreetEntrance || this.hasNoStreets
                  ? (n.custom_street_name = '' + this.customStreetName)
                  : (n.street_id = this.street.id),
                  this.customNumberEntrance
                    ? (n.custom_number = this.customNumber)
                    : (n.number_id = this.number.id),
                  (this.inProgress = !0),
                  Be.verifyDeclarationForAddress(n).then(function (t) {
                    if (t.data.result.length) {
                      var n = t.data.result.split('|');
                      e.verificationResult = { date: n[0], type: n[1] };
                    } else e.verificationResult = '';
                    e.inProgress = !1;
                  });
              }
            },
            downloadPdf: function () {
              var e = this,
                t = [];
              if (
                (this.textid || t.push('textid'),
                this.name || t.push('name'),
                null === this.isOwner && t.push('isOwner'),
                (this.pdfErrors = t),
                t.length)
              )
                this.$notify({
                  group: 'zone',
                  type: 'error',
                  title: 'Błąd!',
                  text: 'Należy wypełnić wszystkie pola',
                });
              else {
                var n = { textid: this.textid, name: this.name, isOwner: this.isOwner },
                  i = xe['a'].encode(JSON.stringify(n));
                (this.inTextidProgress = !0),
                  Be.getDeclarationIdByTextid(i).then(function (t) {
                    (e.inTextidProgress = !1),
                      t.data.result
                        ? (window.location = '/api/declarations/pdf/x' + i)
                        : e.$notify({
                            group: 'zone',
                            type: 'error',
                            title: 'Błąd!',
                            text: 'Wpisywane dane różnią się od tych, które zostały uzupełnione w deklaracji.',
                          });
                  });
              }
            },
          },
          computed: {
            address: function () {
              var e = this.city.name + ' ' + this.postalCode;
              return (
                this.customStreetName
                  ? (e += ', ' + this.customStreetName)
                  : this.street && 'name' in this.street && (e += ', ' + this.street.name),
                this.customNumber
                  ? (e += ' ' + this.customNumber)
                  : this.number && 'name' in this.number && (e += ' ' + this.number.name),
                e
              );
            },
          },
          mounted: function () {
            'nr' in this.$route.query &&
              this.$route.query.nr &&
              (this.textid = this.$route.query.nr);
          },
        }),
      dt = ut,
      mt = (n('ddcf'), Object(h['a'])(dt, ct, lt, !1, null, '44c91678', null)),
      pt = mt.exports,
      ht = [
        { path: '', name: 'welcome', component: Ze },
        { path: '/buildings', name: 'buildings', component: be },
        { path: '/declarations', name: 'declarations', component: Le },
        { path: '/user', name: 'user', component: ke },
        { path: '/receipts', name: 'receipts', component: rt },
        { path: '/verify', name: 'verify', component: pt },
      ];
    i['default'].use(r['a']);
    var At = new r['a']({
        scrollBehavior: function (e, t, n) {
          return { x: 0, y: 0 };
        },
        mode: 'hash',
        routes: ht,
      }),
      bt = At,
      ft = n('ee98'),
      vt = n.n(ft),
      gt = n('5f5b'),
      yt = n('b1e0'),
      wt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          [
            n('sidebar', { attrs: { version: e.version } }),
            n('navbar'),
            n('router-view'),
            n('notifications', {
              attrs: { group: 'zone', position: 'bottom right', classes: 'zone-notification' },
            }),
          ],
          1
        );
      },
      kt = [],
      Ct = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i('div', { staticClass: 'sidebar' }, [
          e._m(0),
          e.isUserLogged
            ? i(
                'div',
                {
                  staticClass: 'menu-label d-none d-md-block',
                  class: { 'selected-menu-label': 'welcome' === e.$route.name },
                },
                [
                  i(
                    'router-link',
                    { attrs: { to: { name: 'welcome' } } },
                    [
                      i('b-icon-house-door', { attrs: { 'font-scale': '1.4' } }),
                      e._v('\n      Strona główna\n    '),
                    ],
                    1
                  ),
                ],
                1
              )
            : e._e(),
          e.isUserLogged
            ? i(
                'div',
                {
                  staticClass: 'menu-label d-none d-md-block',
                  class: { 'selected-menu-label': 'buildings' === e.$route.name },
                },
                [
                  i(
                    'router-link',
                    { attrs: { to: { name: 'buildings' } } },
                    [
                      i('b-icon-building', { attrs: { 'font-scale': '1.4' } }),
                      e._v('\n      Budynki\n    '),
                    ],
                    1
                  ),
                ],
                1
              )
            : e._e(),
          e.isUserLogged
            ? i(
                'div',
                {
                  staticClass: 'menu-label d-none d-md-block',
                  class: { 'selected-menu-label': 'declarations' === e.$route.name },
                },
                [
                  i(
                    'router-link',
                    { attrs: { to: { name: 'declarations' } } },
                    [
                      i('b-icon-file-text', { attrs: { 'font-scale': '1.4' } }),
                      e._v('\n      Deklaracje\n    '),
                    ],
                    1
                  ),
                ],
                1
              )
            : e._e(),
          e.isUserLogged
            ? i(
                'div',
                {
                  staticClass: 'menu-label d-none d-md-block',
                  class: { 'selected-menu-label': 'receipts' === e.$route.name },
                },
                [
                  i(
                    'router-link',
                    { attrs: { to: { name: 'receipts' } } },
                    [
                      i('b-icon-download', { attrs: { 'font-scale': '1.4' } }),
                      e._v('\n      Pobierz swoją deklarację\n    '),
                    ],
                    1
                  ),
                ],
                1
              )
            : e._e(),
          i(
            'div',
            { staticClass: 'mobile-menu d-block d-md-none' },
            [
              e.isUserLogged
                ? i('img', {
                    attrs: { id: 'zone-logo', src: n('080f'), alt: 'Logo aplikacji Zone' },
                  })
                : e._e(),
              e.isUserLogged
                ? e._e()
                : i('img', {
                    staticClass: 'lonely',
                    attrs: { id: 'zone-logo', src: n('080f'), alt: 'Logo aplikacji Zone' },
                  }),
              e.isUserLogged
                ? i(
                    'router-link',
                    { attrs: { to: { name: 'welcome' } } },
                    [i('b-icon-house-door', { attrs: { 'font-scale': '1.3' } })],
                    1
                  )
                : e._e(),
              e.isUserLogged
                ? i(
                    'router-link',
                    { attrs: { to: { name: 'buildings' } } },
                    [i('b-icon-building', { attrs: { 'font-scale': '1.3' } })],
                    1
                  )
                : e._e(),
              e.isUserLogged
                ? i(
                    'router-link',
                    { attrs: { to: { name: 'declarations' } } },
                    [i('b-icon-file-text', { attrs: { 'font-scale': '1.3' } })],
                    1
                  )
                : e._e(),
              e.isUserLogged
                ? i(
                    'router-link',
                    { attrs: { to: { name: 'receipts' } } },
                    [i('b-icon-download', { attrs: { 'font-scale': '1.3' } })],
                    1
                  )
                : e._e(),
            ],
            1
          ),
          i('div', { staticClass: 'bottom-logo-container d-none d-md-block' }, [
            e._m(1),
            e._m(2),
            i('img', { attrs: { id: 'gunb-logo', src: n('5020'), alt: 'Logo GUNB' } }),
            i('p', [e._v('\n      Główny Urząd Nadzoru Budowlanego\n    ')]),
            i('p', [e._v('\n      ul. Krucza 38/42, 00-926 Warszawa\n    ')]),
            i('p', [e._v('\n      Wersja: ' + e._s(e.version) + '\n    ')]),
          ]),
        ]);
      },
      _t = [
        function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i('div', { staticClass: 'p-3 logo-panel d-none d-md-block' }, [
            i('img', { attrs: { id: 'zone-logo', src: n('080f'), alt: 'Logo aplikacji Zone' } }),
            i('h1', { staticClass: 'logo-text' }, [
              e._v(
                '\n      Zintegrowany System Wsparcia Polityk i Programów Ograniczenia Niskiej Emisji\n    '
              ),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('p', [
            n(
              'a',
              { attrs: { href: 'https://ceeb.gov.pl/polityka_prywatnosci.pdf', target: '_blank' } },
              [e._v('Polityka prywatności »')]
            ),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('p', [
            n(
              'a',
              {
                attrs: { href: 'https://ceeb.gov.pl/deklaracja_dostepnosci.pdf', target: '_blank' },
              },
              [e._v('Deklaracja dostępności »')]
            ),
          ]);
        },
      ],
      Et = {
        name: 'Sidebar',
        props: ['version'],
        computed: {
          isUserLogged: function () {
            return (
              this.$store.state.currentUserData &&
              'pesel' in this.$store.state.currentUserData &&
              this.$store.state.currentUserData.pesel
            );
          },
        },
      },
      Dt = Et,
      xt = (n('fa03'), Object(h['a'])(Dt, Ct, _t, !1, null, 'bd7719fc', null)),
      zt = xt.exports,
      Bt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          { staticClass: 'navbar' },
          [
            e.showAccountModal ? n('EditAccountModal') : e._e(),
            e.showDeclarationModal ? n('DeclarationModal') : e._e(),
            e.showHistoryModal ? n('HistoryModal') : e._e(),
            e.showCloneDeclarationModal ? n('CloneDeclarationModal') : e._e(),
            e.newDeclarationModal
              ? n(
                  'div',
                  { attrs: { id: 'declaration-type-modal' } },
                  [
                    n('h4', [e._v('\n      Dodaj Deklarację\n    ')]),
                    n('label', [
                      n('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.declarationType,
                            expression: 'declarationType',
                          },
                        ],
                        attrs: { value: 'A', type: 'radio' },
                        domProps: { checked: e._q(e.declarationType, 'A') },
                        on: {
                          change: function (t) {
                            e.declarationType = 'A';
                          },
                        },
                      }),
                      e._v('\n      Budynki i lokale mieszkalne\n    '),
                    ]),
                    n('label', [
                      n('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.declarationType,
                            expression: 'declarationType',
                          },
                        ],
                        attrs: { value: 'B', type: 'radio' },
                        domProps: { checked: e._q(e.declarationType, 'B') },
                        on: {
                          change: function (t) {
                            e.declarationType = 'B';
                          },
                        },
                      }),
                      e._v('\n      Budynki i lokale niemieszkalne\n    '),
                    ]),
                    n('b-form-select', {
                      attrs: { options: e.buildingsFormatted, 'select-size': 4 },
                      model: {
                        value: e.buildingData,
                        callback: function (t) {
                          e.buildingData = t;
                        },
                        expression: 'buildingData',
                      },
                    }),
                    n(
                      'div',
                      { staticStyle: { 'flex-direction': 'row-reverse', display: 'flex' } },
                      [
                        null != e.buildingData
                          ? n(
                              'button',
                              {
                                staticClass: 'btn btn-primary',
                                attrs: { type: 'button' },
                                on: { click: e.openDeclarationModal },
                              },
                              [e._v('\n        Dodaj deklarację\n      ')]
                            )
                          : e._e(),
                        null == e.buildingData
                          ? n(
                              'button',
                              {
                                staticClass: 'btn btn-primary disabled',
                                attrs: { type: 'button', title: 'Nie wybrano budynku' },
                                on: { click: e.showNoBuilding },
                              },
                              [e._v('\n        Dodaj deklarację\n      ')]
                            )
                          : e._e(),
                        n(
                          'button',
                          {
                            staticClass: 'btn btn-link',
                            attrs: { type: 'button' },
                            on: {
                              click: function (t) {
                                e.newDeclarationModal = !1;
                              },
                            },
                          },
                          [e._v('\n        Anuluj\n      ')]
                        ),
                      ]
                    ),
                  ],
                  1
                )
              : e._e(),
            n('div', { staticClass: 'navbar-container' }, [
              e._v('\n  ' + e._s(e.declarationVerification) + '\n\n    '),
              n('div', { staticClass: 'navbar-element', attrs: { id: 'add-building-button' } }, [
                'buildings' === e.route
                  ? n(
                      'a',
                      { on: { click: e.openBuildingsModal } },
                      [
                        n('zone-icon', { attrs: { 'icon-name': 'Plus' } }),
                        n('label', { staticClass: 'menu-link small-on-xs' }, [
                          e._v('Dodaj Budynek'),
                        ]),
                      ],
                      1
                    )
                  : e._e(),
                'declarations' === e.route
                  ? n(
                      'a',
                      { on: { click: e.openNewDeclarationModal } },
                      [
                        null === e.buildings
                          ? n('b-spinner', {
                              staticStyle: { width: '1.7em', height: '1.7em' },
                              attrs: { label: 'Wczytuję', variant: 'secondary' },
                            })
                          : e._e(),
                        null !== e.buildings
                          ? n('zone-icon', { attrs: { 'icon-name': 'Plus' } })
                          : e._e(),
                        n('label', { staticClass: 'menu-link small-on-xs' }, [
                          e._v('Dodaj Deklarację'),
                        ]),
                        e._m(0),
                      ],
                      1
                    )
                  : e._e(),
                'verify' === e.route || 'verifyfull' === e.route
                  ? n('div', [
                      n('h2', { staticStyle: { color: '#202f64' } }, [
                        e._v('Sprawdź swoją deklarację'),
                      ]),
                    ])
                  : e._e(),
              ]),
              e.isUserLogged
                ? n('div', { staticClass: 'navbar-element' }, [
                    n(
                      'a',
                      {
                        staticClass: 'user-panel',
                        attrs: { type: 'button', tabindex: '0', href: '#' },
                        on: {
                          click: function (t) {
                            return t.preventDefault(), e.openUserActionsDropdown(t);
                          },
                          keydown: function (t) {
                            return !t.type.indexOf('key') &&
                              e._k(t.keyCode, 'enter', 13, t.key, 'Enter')
                              ? null
                              : e.openUserActionsDropdown(t);
                          },
                        },
                      },
                      [
                        n('label', { staticClass: 'menu-link d-none d-sm-inline' }, [
                          e._v(e._s(e.currentUserData.full_name)),
                        ]),
                        n('zone-icon', { attrs: { 'icon-name': 'User1' } }),
                        e.userActionsModal
                          ? n(
                              'div',
                              {
                                staticClass: 'dropdown-menu show user-actions-dropdown',
                                on: { mousemove: e.openUserActionsDropdown },
                              },
                              [
                                n(
                                  'a',
                                  {
                                    staticClass: 'dropdown-item',
                                    attrs: { href: '#' },
                                    on: { click: e.openAccountModal },
                                  },
                                  [e._v('Ustawienia konta')]
                                ),
                                n(
                                  'a',
                                  {
                                    staticClass: 'dropdown-item',
                                    attrs: { href: '#' },
                                    on: { click: e.logout },
                                  },
                                  [e._v('Wyloguj')]
                                ),
                              ]
                            )
                          : e._e(),
                      ],
                      1
                    ),
                  ])
                : e._e(),
            ]),
          ],
          1
        );
      },
      jt = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            'div',
            {
              staticClass: 'menu-link d-none d-md-block',
              staticStyle: {
                'font-size': 'small',
                'white-space': 'nowrap',
                overflow: 'hidden',
                'text-overflow': 'ellipsis',
                'margin-top': '5px',
              },
            },
            [
              e._v(
                '\n          Tylko dla 10 ostatnio dodanych adresów budynków. W innym wypadku przejdź do zakładki '
              ),
              n('i', [e._v('Budynki')]),
              e._v('.\n        '),
            ]
          );
        },
      ],
      St = (n('5df3'), n('1c4c'), '/api/user'),
      Nt = {
        logout: function () {
          window.location = '/wk/logout';
        },
        getCurrentUser: function () {
          return T.get(''.concat(St, '/'));
        },
        updateUserEmail: function (e) {
          return T.put(''.concat(St, '/email'), e);
        },
        wkLogout: function (e) {
          window.location = '/wk/logout';
        },
      },
      It = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', [
          n('div', { staticClass: 'around-fade' }),
          n(
            'div',
            { staticClass: 'zone-modal' },
            [
              n('CloseModalButton', { attrs: { 'on-click': e.closeAccountModal } }),
              n('h1', [e._v('Ustawienia konta ZONE')]),
              n('div', { staticClass: 'forms' }, [
                n('label', [e._v('Adres e-mail')]),
                n('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.userEmail,
                      expression: 'userEmail',
                    },
                  ],
                  staticClass: 'text-input',
                  attrs: { type: 'email', 'aria-label': 'E-mail', placeholder: 'E-mail' },
                  domProps: { value: e.userEmail },
                  on: {
                    input: function (t) {
                      t.target.composing || (e.userEmail = t.target.value);
                    },
                  },
                }),
                n('div', { staticClass: 'buttons-row' }, [
                  n(
                    'button',
                    {
                      staticClass: 'btn btn-link',
                      attrs: { type: 'button' },
                      on: { click: e.closeAccountModal },
                    },
                    [e._v('\n          Zamknij\n        ')]
                  ),
                  n(
                    'button',
                    {
                      staticClass: 'btn btn-primary',
                      attrs: { type: 'button' },
                      on: { click: e.updateUserEmail },
                    },
                    [e._v('\n          Zapisz\n        ')]
                  ),
                ]),
              ]),
            ],
            1
          ),
        ]);
      },
      Mt = [],
      Gt = {
        name: 'EditAccountModal',
        components: { CloseModalButton: V },
        data: function () {
          return { userEmail: '' };
        },
        methods: {
          updateUserEmail: (function () {
            var e = Object(E['a'])(
              regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = { email: this.userEmail }), (e.next = 3), Nt.updateUserEmail(t)
                          );
                        case 3:
                          (n = this.$store.state.currentUserData),
                            (n.email = this.userEmail),
                            this.$store.commit('setCurrentUserData', n),
                            this.$notify({
                              group: 'zone',
                              type: 'success',
                              title: 'Sukces',
                              text: 'Pomyślnie zapisano adres e-mail',
                            });
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          closeAccountModal: function () {
            this.$store.commit('closeAccountModal');
          },
        },
        computed: {
          currentUserData: function () {
            return this.$store.state.currentUserData;
          },
        },
        mounted: function () {
          this.userEmail = this.currentUserData.email;
        },
      },
      Tt = Gt,
      Qt = (n('e5d6'), Object(h['a'])(Tt, It, Mt, !1, null, '7fdb4953', null)),
      Ot = Qt.exports,
      Pt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', {
          staticClass: 'zone-icon',
          style: { backgroundImage: 'url(' + e.image + ')' },
        });
      },
      Ft = [],
      Lt = {
        name: 'ZoneIcon',
        props: ['iconName'],
        computed: {
          image: function () {
            return n('24c8')('./'.concat(this.iconName, '.png'));
          },
        },
      },
      Ut = Lt,
      Rt = (n('8696'), Object(h['a'])(Ut, Pt, Ft, !1, null, '0965c2fa', null)),
      Vt = Rt.exports,
      Wt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          [
            n(
              'b-modal',
              {
                scopedSlots: e._u([
                  {
                    key: 'modal-footer',
                    fn: function (t) {
                      t.ok;
                      var i = t.cancel;
                      return [
                        n(
                          'b-button',
                          {
                            staticClass: 'btn btn-primary',
                            on: {
                              click: function (t) {
                                return e.saveDeclaration(!1);
                              },
                            },
                          },
                          [e._v('\n        Tak, złóż\n      ')]
                        ),
                        n(
                          'b-button',
                          {
                            on: {
                              click: function (e) {
                                return i();
                              },
                            },
                          },
                          [e._v('\n        Cofnij\n      ')]
                        ),
                      ];
                    },
                  },
                ]),
                model: {
                  value: e.showSubmitDeclarationModal,
                  callback: function (t) {
                    e.showSubmitDeclarationModal = t;
                  },
                  expression: 'showSubmitDeclarationModal',
                },
              },
              [
                e._v(
                  '\n    Czy na pewno chcesz złożyć tę deklarację? Tej czynności nie da się cofnąć.\n\n    '
                ),
                'A' === e.declarationType
                  ? n('p', [
                      e._v(
                        '\n      Pamiętaj! Jeżeli w budynku znajduje się lokal lub lokale niemieszkalne ogrzewane źródłem ciepła nieuwzględnionym w niniejszej deklaracji, złóż również deklarację B.\n    '
                      ),
                    ])
                  : e._e(),
                'B' === e.declarationType
                  ? n('p', [
                      e._v(
                        '\n      Pamiętaj! Jeżeli w budynku znajduje się lokal lub lokale mieszkalne ogrzewane źródłem ciepła nieuwzględnionym w niniejszej deklaracji, złóż także deklarację A.\n    '
                      ),
                    ])
                  : e._e(),
              ]
            ),
            n('notifications', {
              attrs: {
                group: 'declaration',
                position: 'top center',
                classes: 'zone-notification-declaration',
              },
            }),
            n('div', { staticClass: 'around-fade' }),
            n(
              'div',
              { staticClass: 'zone-modal' },
              [
                !e.dataLoaded && e.declarationEditId
                  ? n('b-overlay', {
                      staticClass: 'declaration-overlay',
                      attrs: { rounded: 'lg', show: !e.dataLoaded && !!e.declarationEditId },
                    })
                  : e._e(),
                n('CloseModalButton', { attrs: { 'on-click': e.closeDeclarationModal } }),
                n('div', { staticClass: 'header' }, [
                  n('h1', [e._v('Deklaracja dotycząca źródeł ciepła i źródeł spalania paliw')]),
                  n('h1', [e._v(e._s(e.declarationTypeTitle))]),
                ]),
                n(
                  'div',
                  { staticClass: 'progress-bar-block' },
                  [
                    n('ProgressBar', {
                      attrs: {
                        'current-step': e.step,
                        'address-is-same': e.thirdScreenData.isAddressSame,
                        'no-solid-fuel': !e.secondScreenData.solidFuel,
                      },
                      on: { changeStep: e.setStep },
                    }),
                  ],
                  1
                ),
                n(
                  'div',
                  { staticClass: 'form-block', staticStyle: { '=padding-top': '0 !important' } },
                  [
                    n('FirstScreen', {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 1 === e.step,
                          expression: 'step === 1',
                        },
                      ],
                      ref: 'screen1',
                      attrs: { building: e.building },
                      on: { update: e.setFirstScreenData },
                    }),
                    n('SecondScreen', {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 2 === e.step,
                          expression: 'step === 2',
                        },
                      ],
                      ref: 'screen2',
                      attrs: { building: e.building },
                      on: { update: e.setSecondScreenData },
                    }),
                    n('BoilersClassesScreen', {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 3 === e.step,
                          expression: 'step === 3',
                        },
                      ],
                      ref: 'screen3',
                      attrs: { building: e.building },
                      on: { update: e.setBoilersClassesData },
                    }),
                    n('FuelTypesScreen', {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 4 === e.step,
                          expression: 'step === 4',
                        },
                      ],
                      ref: 'screen4',
                      attrs: { building: e.building },
                      on: { update: e.setFuelTypesData },
                    }),
                    n('ThirdScreen', {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 5 === e.step,
                          expression: 'step === 5',
                        },
                      ],
                      ref: 'screen5',
                      attrs: { building: e.building },
                      on: { update: e.setThirdScreenData },
                    }),
                    n('CustomAddressScreen', {
                      directives: [
                        {
                          name: 'show',
                          rawName: 'v-show',
                          value: 6 === e.step,
                          expression: 'step === 6',
                        },
                      ],
                      ref: 'screen6',
                      attrs: { building: e.building },
                      on: { update: e.setCustomAddressData },
                    }),
                  ],
                  1
                ),
                n('div', { staticClass: 'buttons-row' }, [
                  n(
                    'button',
                    {
                      staticClass: 'btn btn-primary',
                      attrs: { type: 'button' },
                      on: { click: e.moveToNextStepOrSave },
                    },
                    [e._v('\n        ' + e._s(e.nextStepButtonText) + '\n      ')]
                  ),
                  n(
                    'button',
                    {
                      staticClass: 'btn btn-outline-primary',
                      attrs: { type: 'button' },
                      on: {
                        click: function (t) {
                          return e.saveDeclaration(!0);
                        },
                      },
                    },
                    [e._v('\n        Zapisz wersję roboczą\n      ')]
                  ),
                  this.step > 1
                    ? n(
                        'button',
                        {
                          staticClass: 'btn btn-link',
                          attrs: { type: 'button' },
                          on: { click: e.stepBack },
                        },
                        [e._v('\n        Wstecz\n      ')]
                      )
                    : e._e(),
                ]),
              ],
              1
            ),
          ],
          1
        );
      },
      Kt = [],
      Zt = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'zone-progress-bar' }, [
          n(
            'div',
            { staticClass: 'progressbar' },
            e._l(e.steps, function (t, i) {
              return n(
                'div',
                {
                  key: t.number,
                  staticClass: 'element',
                  class: {
                    small: t.small,
                    filled: e.currentStep >= i + 1,
                    inactive:
                      ((i + 1 === 3 || i + 1 === 4) && e.noSolidFuel) ||
                      (i + 1 === 6 && e.addressIsSame),
                  },
                },
                [
                  n('div', { staticClass: 'dot' }, [
                    e._v('\n        ' + e._s(t.number) + '\n      '),
                  ]),
                  n('label', { staticClass: 'd-none d-md-flex' }, [
                    e._v('\n        ' + e._s(t.title) + '\n      '),
                  ]),
                ]
              );
            }),
            0
          ),
        ]);
      },
      Jt = [],
      Ht = {
        name: 'ProgressBar',
        data: function () {
          return {
            steps: [
              { title: 'Metryka budynku', number: '1', small: !1 },
              { title: 'Źródła ciepła', number: '2', small: !1 },
              { title: 'Klasy kotłów', number: '2A', small: !0 },
              { title: 'Rodzaje paliw', number: '2B', small: !0 },
              { title: 'Dane kontaktowe', number: '3', small: !1 },
              { title: 'Dane adresowe', number: '3A', small: !0 },
            ],
          };
        },
        props: ['currentStep', 'noSolidFuel', 'addressIsSame'],
      },
      Yt = Ht,
      Xt = (n('b21a'), Object(h['a'])(Yt, Zt, Jt, !1, null, '4e10433a', null)),
      qt = Xt.exports,
      $t = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          'div',
          { staticClass: 'form-block', staticStyle: { '=padding-top': '0 !important' } },
          [
            n('div', { staticClass: 'container-fluid' }, [
              'A' === e.declarationType
                ? n('div', { staticClass: 'row' }, [
                    e._m(0),
                    n('div', { staticClass: 'col-xs-12 col-md-5 no-right-padding' }, [
                      n('p', { staticClass: 'address' }, [
                        e._v(
                          e._s(e.street) +
                            ' ' +
                            e._s(e.number) +
                            ',\n          ' +
                            e._s(e.building.postal_code) +
                            ' ' +
                            e._s(e.building.city.name)
                        ),
                      ]),
                    ]),
                    n('div', { staticClass: 'col-xs-12 col-md-7 no-side-padding smargintop' }, [
                      n(
                        'label',
                        { staticClass: 'declaration-date', attrs: { id: 'checkbox2021' } },
                        [
                          n('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: e.after01072021,
                                expression: 'after01072021',
                              },
                            ],
                            attrs: { type: 'checkbox' },
                            domProps: {
                              checked: Array.isArray(e.after01072021)
                                ? e._i(e.after01072021, null) > -1
                                : e.after01072021,
                            },
                            on: {
                              change: function (t) {
                                var n = e.after01072021,
                                  i = t.target,
                                  a = !!i.checked;
                                if (Array.isArray(n)) {
                                  var s = null,
                                    o = e._i(n, s);
                                  i.checked
                                    ? o < 0 && (e.after01072021 = n.concat([s]))
                                    : o > -1 &&
                                      (e.after01072021 = n.slice(0, o).concat(n.slice(o + 1)));
                                } else e.after01072021 = a;
                              },
                            },
                          }),
                          e._v(
                            '\n          Deklaracja dotyczy źródła ciepła/spalania paliw uruchomionego po 1 lipca 2021 r.\n          '
                          ),
                          n('span', { staticClass: 'checkmark' }),
                          n(
                            'b-tooltip',
                            {
                              attrs: {
                                target: 'checkbox2021',
                                triggers: 'hover',
                                'data-delay': '{"hide":"2000"}',
                              },
                            },
                            [
                              e._v(
                                '\n            1. Jeżeli składasz deklarację dla budynku, dla którego określasz '
                              ),
                              n('b', [e._v('kilka')]),
                              e._v(' źródeł ciepła i spalania paliw, a '),
                              n('b', [e._v('chociażby jedno')]),
                              e._v(
                                ' z nich zostało uruchomione po 1.07.2021 r. – zaznacz checkbox! W innym wypadku, checkbox pozostaw odznaczony.\n            '
                              ),
                              n('br'),
                              e._v(
                                '\n            2. Każdorazowa wymiana źródła ciepła/spalania paliw wymaga złożenia nowej deklaracji!\n          '
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]),
                    e._m(1),
                    e._m(2),
                    n('div', { staticClass: 'col-12' }, [
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: e.singleOrMultiFamily,
                              expression: 'singleOrMultiFamily',
                            },
                          ],
                          attrs: { id: 'singleOrMultiFamily', type: 'radio', value: 'single' },
                          domProps: { checked: e._q(e.singleOrMultiFamily, 'single') },
                          on: {
                            change: function (t) {
                              e.singleOrMultiFamily = 'single';
                            },
                          },
                        }),
                        e._v(
                          '\n          Budynek jednorodzinny (w tym w zabudowie bliżniaczej i szeregowej)\n        '
                        ),
                      ]),
                    ]),
                    n('div', { staticClass: 'col-12' }, [
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: e.singleOrMultiFamily,
                              expression: 'singleOrMultiFamily',
                            },
                          ],
                          attrs: { type: 'radio', value: 'multi' },
                          domProps: { checked: e._q(e.singleOrMultiFamily, 'multi') },
                          on: {
                            change: function (t) {
                              e.singleOrMultiFamily = 'multi';
                            },
                          },
                        }),
                        e._v('\n          Budynek wielorodzinny\n        '),
                      ]),
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: e.multiFamilyCount,
                              expression: 'multiFamilyCount',
                            },
                          ],
                          staticClass: 'text-input w-small side-margins',
                          class: {
                            disabled: 'multi' !== e.singleOrMultiFamily,
                            error: e.errors.multiFamilyCount,
                          },
                          attrs: { type: 'text', disabled: 'multi' !== e.singleOrMultiFamily },
                          domProps: { value: e.multiFamilyCount },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.multiFamilyCount = t.target.value);
                            },
                          },
                        }),
                        e._v(
                          '\n          Liczba wszystkich lokali mieszkalnych w budynku\n        '
                        ),
                      ]),
                    ]),
                    n('div', { staticClass: 'col-12' }, [
                      n(
                        'label',
                        [
                          n('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: e.singleOrMultiFamily,
                                expression: 'singleOrMultiFamily',
                              },
                            ],
                            attrs: {
                              value: 'isTemporary',
                              type: 'radio',
                              id: 'isTemporaryCheckbox',
                            },
                            domProps: { checked: e._q(e.singleOrMultiFamily, 'isTemporary') },
                            on: {
                              change: function (t) {
                                e.singleOrMultiFamily = 'isTemporary';
                              },
                            },
                          }),
                          e._v('\n          Budynek zbiorowego zamieszkania\n          '),
                          n(
                            'b-tooltip',
                            { attrs: { target: 'isTemporaryCheckbox', triggers: 'hover' } },
                            [
                              e._v(
                                '\n            Budynek zbiorowego zamieszkania to budynek przeznaczony do okresowego pobytu ludzi, w szczególności hotel, motel, pensjonat, dom wypoczynkowy, dom wycieczkowy, schronisko młodzieżowe, schronisko, internat, dom studencki, budynek koszarowy, areszt śledczy itp., a także budynek do stałego pobytu ludzi, np. dom dziecka, dom rencistów, dom zakonny.\n          '
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: e.temporaryCount,
                              expression: 'temporaryCount',
                            },
                          ],
                          staticClass: 'text-input w-small side-margins',
                          class: {
                            disabled: 'isTemporary' !== e.singleOrMultiFamily,
                            error: e.errors.temporaryCount,
                          },
                          attrs: {
                            type: 'text',
                            disabled: 'isTemporary' !== e.singleOrMultiFamily,
                          },
                          domProps: { value: e.temporaryCount },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.temporaryCount = t.target.value);
                            },
                          },
                        }),
                        e._v(
                          '\n          Liczba wszystkich lokali zbiorowego zamieszkania w budynku\n        '
                        ),
                      ]),
                    ]),
                    e._m(3),
                    n('div', { staticClass: 'col-12' }, [
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: e.isAllPremises,
                              expression: 'isAllPremises',
                            },
                          ],
                          attrs: { type: 'radio' },
                          domProps: { value: !0, checked: e._q(e.isAllPremises, !0) },
                          on: {
                            change: function (t) {
                              e.isAllPremises = !0;
                            },
                          },
                        }),
                        e._v(
                          '\n          Wszystkich lokali mieszkalnych / zbiorowego zamieszkania w budynku\n        '
                        ),
                      ]),
                    ]),
                    n('div', { staticClass: 'col-12' }, [
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: e.isAllPremises,
                              expression: 'isAllPremises',
                            },
                          ],
                          attrs: { type: 'radio' },
                          domProps: { value: !1, checked: e._q(e.isAllPremises, !1) },
                          on: {
                            change: function (t) {
                              e.isAllPremises = !1;
                            },
                          },
                        }),
                        e._v(
                          '\n          Wybranych lokali mieszkalnych / zbiorowego zamieszkania w budynku\n        '
                        ),
                      ]),
                    ]),
                    n('div', { staticClass: 'col-12' }, [
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: e.premisesCount,
                              expression: 'premisesCount',
                            },
                          ],
                          staticClass: 'text-input w-small',
                          class: {
                            disabled: e.isAllPremises || 'single' === e.singleOrMultiFamily,
                            error: e.errors.premisesCount,
                          },
                          attrs: { type: 'text', disabled: e.isAllPremises },
                          domProps: { value: e.premisesCount },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.premisesCount = t.target.value);
                            },
                          },
                        }),
                        e._v(
                          '\n          Liczba lokali mieszkalnych / zbiorowego zamieszkania objętych  deklaracją\n        '
                        ),
                      ]),
                    ]),
                    n('div', { staticClass: 'col-12' }, [
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: e.premisesList,
                              expression: 'premisesList',
                            },
                          ],
                          staticClass: 'text-input',
                          class: {
                            disabled: e.isAllPremises || 'single' === e.singleOrMultiFamily,
                            error: e.errors.premisesList,
                          },
                          attrs: { type: 'text', disabled: e.isAllPremises },
                          domProps: { value: e.premisesList },
                          on: {
                            input: function (t) {
                              t.target.composing || (e.premisesList = t.target.value);
                            },
                          },
                        }),
                        e._v(
                          '\n          Numery lokali mieszkalnych / zbiorowego zamieszkania objętych deklaracją\n        '
                        ),
                      ]),
                    ]),
                  ])
                : e._e(),
              'B' === e.declarationType
                ? n(
                    'div',
                    { staticClass: 'row' },
                    [
                      e._m(4),
                      n('div', { staticClass: 'col-xs-12 col-md-5' }, [
                        n('p', { staticClass: 'address' }, [
                          e._v(
                            e._s(e.street) +
                              ' ' +
                              e._s(e.number) +
                              ',\n          ' +
                              e._s(e.building.postal_code) +
                              ' ' +
                              e._s(e.building.city.name)
                          ),
                        ]),
                      ]),
                      n('div', { staticClass: 'col-xs-12 col-md-7 smargintop' }, [
                        n(
                          'label',
                          { attrs: { id: 'specialSign' } },
                          [
                            e._v('\n          Symbol / oznaczenie specjalne budynku\n          '),
                            n('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.special_symbol_A08_B,
                                  expression: 'special_symbol_A08_B',
                                },
                              ],
                              ref: 'cityInput',
                              staticClass: 'text-input',
                              attrs: { type: 'text' },
                              domProps: { value: e.special_symbol_A08_B },
                              on: {
                                input: function (t) {
                                  t.target.composing || (e.special_symbol_A08_B = t.target.value);
                                },
                              },
                            }),
                            n(
                              'b-tooltip',
                              { attrs: { target: 'specialSign', triggers: 'hover' } },
                              [
                                e._v(
                                  '\n            1. Mogą to być symbole literowe np. budynek A, B, C, które nie stanowią jednak elementu oficjalnego adresu lub np. oznaczenie opisowe (np. kompleks budynków uczelnianych, gdzie opisuje się budynki funkcjami w stylu ‘Biblioteka’, ‘Basen’)\n          '
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        n(
                          'label',
                          { staticClass: 'declaration-date', attrs: { id: 'checkbox2021B' } },
                          [
                            n('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.after01072021,
                                  expression: 'after01072021',
                                },
                              ],
                              attrs: { type: 'checkbox' },
                              domProps: {
                                checked: Array.isArray(e.after01072021)
                                  ? e._i(e.after01072021, null) > -1
                                  : e.after01072021,
                              },
                              on: {
                                change: function (t) {
                                  var n = e.after01072021,
                                    i = t.target,
                                    a = !!i.checked;
                                  if (Array.isArray(n)) {
                                    var s = null,
                                      o = e._i(n, s);
                                    i.checked
                                      ? o < 0 && (e.after01072021 = n.concat([s]))
                                      : o > -1 &&
                                        (e.after01072021 = n.slice(0, o).concat(n.slice(o + 1)));
                                  } else e.after01072021 = a;
                                },
                              },
                            }),
                            e._v(
                              '\n          Deklaracja dotyczy źródła ciepła/spalania paliw uruchomionego po 1 lipca 2021 r.\n          '
                            ),
                            n('span', { staticClass: 'checkmark' }),
                            n(
                              'b-tooltip',
                              { attrs: { target: 'checkbox2021B', triggers: 'hover' } },
                              [
                                e._v(
                                  '\n            1. Jeżeli składasz deklarację dla budynku, dla którego określasz '
                                ),
                                n('b', [e._v('kilka')]),
                                e._v(' źródeł ciepła i spalania paliw, a '),
                                n('b', [e._v('chociażby jedno')]),
                                e._v(
                                  ' z nich zostało uruchomione po 1.07.2021 r. – zaznacz checkbox! W innym wypadku, checkbox pozostaw odznaczony.\n            '
                                ),
                                n('br'),
                                e._v(
                                  '\n            2. Każdorazowa wymiana źródła ciepła/spalania paliw wymaga złożenia nowej deklaracji!\n          '
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]),
                      e._m(5),
                      e._l(e.selectedBuildingTypes, function (t, i) {
                        return n('div', { staticClass: 'col-xs-12 col-md-6 declaration-b-item' }, [
                          n('label', { staticStyle: { 'font-size': '.9rem' } }, [
                            n('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.selectedBuildingTypes[i].selected,
                                  expression: 'selectedBuildingTypes[index].selected',
                                },
                              ],
                              attrs: { type: 'checkbox' },
                              domProps: {
                                checked: Array.isArray(e.selectedBuildingTypes[i].selected)
                                  ? e._i(e.selectedBuildingTypes[i].selected, null) > -1
                                  : e.selectedBuildingTypes[i].selected,
                              },
                              on: {
                                change: function (t) {
                                  var n = e.selectedBuildingTypes[i].selected,
                                    a = t.target,
                                    s = !!a.checked;
                                  if (Array.isArray(n)) {
                                    var o = null,
                                      r = e._i(n, o);
                                    a.checked
                                      ? r < 0 &&
                                        e.$set(
                                          e.selectedBuildingTypes[i],
                                          'selected',
                                          n.concat([o])
                                        )
                                      : r > -1 &&
                                        e.$set(
                                          e.selectedBuildingTypes[i],
                                          'selected',
                                          n.slice(0, r).concat(n.slice(r + 1))
                                        );
                                  } else e.$set(e.selectedBuildingTypes[i], 'selected', s);
                                },
                              },
                            }),
                            e._v('\n          ' + e._s(t.description) + '\n        '),
                          ]),
                        ]);
                      }),
                      e._m(6),
                      n('div', { staticClass: 'col-xs-12 col-md-4' }, [
                        n('label', [
                          n('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: e.isAllPremises,
                                expression: 'isAllPremises',
                              },
                            ],
                            attrs: { type: 'radio' },
                            domProps: { value: !0, checked: e._q(e.isAllPremises, !0) },
                            on: {
                              change: function (t) {
                                e.isAllPremises = !0;
                              },
                            },
                          }),
                          e._v('\n          Całego budynku\n        '),
                        ]),
                        n('label', [
                          n('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: e.isAllPremises,
                                expression: 'isAllPremises',
                              },
                            ],
                            attrs: { type: 'radio' },
                            domProps: { value: !1, checked: e._q(e.isAllPremises, !1) },
                            on: {
                              change: function (t) {
                                e.isAllPremises = !1;
                              },
                            },
                          }),
                          e._v('\n          Wybranych lokali w budynku\n        '),
                        ]),
                      ]),
                      n('div', { staticClass: 'col-xs-12 col-md-8' }, [
                        n('label', { attrs: { id: 'b-locals-symbols' } }, [
                          n('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: e.premisesList,
                                expression: 'premisesList',
                              },
                            ],
                            staticClass: 'text-input',
                            class: { disabled: e.isAllPremises, error: e.errors.premisesList },
                            attrs: { type: 'text', disabled: e.isAllPremises },
                            domProps: { value: e.premisesList },
                            on: {
                              input: function (t) {
                                t.target.composing || (e.premisesList = t.target.value);
                              },
                            },
                          }),
                          n('span', { staticClass: 'is-temporary-b' }, [
                            e._v(
                              'Numery / symbole / oznaczenia specjalne lokali niemieszkalnych objętych deklaracją'
                            ),
                          ]),
                        ]),
                      ]),
                    ],
                    2
                  )
                : e._e(),
            ]),
          ]
        );
      },
      en = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [n('h2', [e._v('Dane adresowe budynku')])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [n('hr')]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [n('h2', [e._v('Rodzaj budynku')])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [n('h2', [e._v('Deklaracja dotyczy')])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [n('h2', [e._v('Dane adresowe budynku')])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [n('hr')]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [
            n('h2', [e._v('Określ, czego dotyczy deklaracja?')]),
          ]);
        },
      ],
      tn =
        (n('7514'),
        {
          data: function () {
            return { errors: {} };
          },
          methods: {
            setErrors: function (e) {
              this.errors = e;
            },
          },
        }),
      nn = {
        computed: {
          declarationType: function () {
            return this.$store.state.declarationBuilding.declarationType;
          },
        },
      },
      an = {
        name: 'FirstScreen',
        props: ['building'],
        mixins: [tn, nn],
        data: function () {
          return {
            singleOrMultiFamily: null,
            multiFamilyCount: null,
            temporaryCount: null,
            isAllPremises: null,
            premisesCount: null,
            premisesList: '',
            after01072021: !1,
            special_symbol_A08_B: '',
            selectedBuildingTypes: [],
          };
        },
        methods: {
          setData: (function () {
            var e = Object(E['a'])(
              regeneratorRuntime.mark(function e(t) {
                var n = this;
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((this.singleOrMultiFamily = t.is_temporary_A08_03
                              ? 'isTemporary'
                              : t.is_single_family_A08_01
                              ? 'single'
                              : 'multi'),
                            (this.multiFamilyCount = t.multi_family_count),
                            (this.isTemporary = t.is_temporary_A08_03),
                            (this.temporaryCount = t.temporary_count),
                            (this.isAllPremises = t.is_all_premises),
                            (this.premisesCount = t.premises_count_A09_02),
                            (this.premisesList = t.premises_list_A09_02),
                            (this.after01072021 = t.after_01_07_2021),
                            (this.special_symbol_A08_B = t.special_symbol_A08_B),
                            this.selectedBuildingTypes.length)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (e.next = 12), this.getBuildingTypes();
                        case 12:
                          t.building_types &&
                            t.building_types.forEach(function (e) {
                              return (n.selectedBuildingTypes.find(function (t) {
                                return t.abbreviation === e.type.abbreviation;
                              }).selected = !0);
                            });
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          emitChange: function () {
            var e = {
              singleOrMultiFamily: this.singleOrMultiFamily,
              multiFamilyCount: this.multiFamilyCount,
              isTemporary: 'isTemporary' === this.singleOrMultiFamily,
              temporaryCount: this.temporaryCount,
              isAllPremises: this.isAllPremises,
              premisesCount: this.premisesCount,
              premisesList: this.premisesList,
              after01072021: this.after01072021,
              specialSymbolA08B: this.special_symbol_A08_B,
              buildingTypes: this.selectedBuildingTypes
                .filter(function (e) {
                  return e.selected;
                })
                .map(function (e) {
                  return e.abbreviation;
                }),
            };
            this.$emit('update', e);
          },
          getBuildingTypes: function () {
            var e = this;
            Be.getBuildingTypesForB().then(function (t) {
              e.selectedBuildingTypes = t.data.map(function (e) {
                return (e.selected = !1), e;
              });
            });
          },
        },
        computed: {
          street: function () {
            var e = '';
            if (this.building.street) e = this.building.street.name;
            else {
              var t = this.building.custom_street_name;
              e = t.length ? 'ul. '.concat(t) : t;
            }
            return e;
          },
          number: function () {
            return this.building.number ? this.building.number.name : this.building.custom_number;
          },
        },
        watch: {
          singleOrMultiFamily: function (e, t) {
            null != t &&
              t.length &&
              ('multi' === t && (this.multiFamilyCount = null),
              'isTemporary' === t && (this.temporaryCount = null),
              'single' === e &&
                ((this.premisesCount = null), (this.premisesList = ''), (this.isAllPremises = !0)));
          },
          isAllPremises: function (e, t) {
            null != t && (t || ((this.premisesCount = null), (this.premisesList = '')));
          },
        },
        mounted: (function () {
          var e = Object(E['a'])(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), this.getBuildingTypes();
                      case 2:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      },
      sn = an,
      on = (n('536a'), Object(h['a'])(sn, $t, en, !1, null, '07f41de3', null)),
      rn = on.exports,
      cn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'form-block' }, [
          n('div', { staticClass: 'container-fluid' }, [
            n(
              'div',
              { staticClass: 'soh-list-view' },
              [
                0 === e.heatSources.length
                  ? n('p', [e._v('Nie dodano żadnych źródeł ciepła')])
                  : e._e(),
                e._l(e.heatSources, function (t, i) {
                  return n('div', { key: i, staticClass: 'row' }, [
                    e._m(0, !0),
                    n(
                      'div',
                      { staticClass: 'col-xs-12 col-md-7' },
                      [
                        n('ZoneDropdown', {
                          staticClass: 'installed-soh-type',
                          attrs: {
                            placeholder: 'Zainstalowane źródło ciepła',
                            items: e.heatSourceTypes,
                            'is-small': !0,
                            multiline: !0,
                            error:
                              e.errors.sourcesOfHeats &&
                              e.errors.sourcesOfHeats[i] &&
                              e.errors.sourcesOfHeats[i].type,
                          },
                          on: { change: e.emitChange },
                          model: {
                            value: t.type,
                            callback: function (n) {
                              e.$set(t, 'type', n);
                            },
                            expression: 'heatSource.type',
                          },
                        }),
                      ],
                      1
                    ),
                    n('div', { staticClass: 'col-xs-12 col-md-5' }, [
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.amount,
                              expression: 'heatSource.amount',
                            },
                          ],
                          staticClass: 'text-input w-small',
                          class: {
                            error:
                              e.errors.sourcesOfHeats &&
                              e.errors.sourcesOfHeats[i] &&
                              e.errors.sourcesOfHeats[i].amount,
                          },
                          staticStyle: { 'margin-top': '.5rem' },
                          attrs: { type: 'number', step: '1', placeholder: '' },
                          domProps: { value: t.amount },
                          on: {
                            keypress: e.numbersOnly,
                            input: function (n) {
                              n.target.composing || e.$set(t, 'amount', n.target.value);
                            },
                          },
                        }),
                        e._v('\n            Liczba zainstalowanych źródeł\n          '),
                      ]),
                    ]),
                    e._m(1, !0),
                    n('div', { staticClass: 'col-12' }, [
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.isUsed,
                              expression: 'heatSource.isUsed',
                            },
                          ],
                          attrs: { type: 'checkbox' },
                          domProps: {
                            checked: Array.isArray(t.isUsed) ? e._i(t.isUsed, null) > -1 : t.isUsed,
                          },
                          on: {
                            change: [
                              function (n) {
                                var i = t.isUsed,
                                  a = n.target,
                                  s = !!a.checked;
                                if (Array.isArray(i)) {
                                  var o = null,
                                    r = e._i(i, o);
                                  a.checked
                                    ? r < 0 && e.$set(t, 'isUsed', i.concat([o]))
                                    : r > -1 &&
                                      e.$set(t, 'isUsed', i.slice(0, r).concat(i.slice(r + 1)));
                                } else e.$set(t, 'isUsed', s);
                              },
                              function (t) {
                                return e.clearCount(i);
                              },
                            ],
                          },
                        }),
                        e._v('\n            Czy źródło ciepła jest eksploatowane?\n          '),
                      ]),
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.usedAmount,
                              expression: 'heatSource.usedAmount',
                            },
                          ],
                          staticClass: 'text-input w-small side-margins',
                          class: {
                            disabled: !t.isUsed,
                            error:
                              e.errors.sourcesOfHeats &&
                              e.errors.sourcesOfHeats[i] &&
                              e.errors.sourcesOfHeats[i].usedAmount,
                          },
                          attrs: { type: 'number', step: '1', disabled: !t.isUsed },
                          domProps: { value: t.usedAmount },
                          on: {
                            keypress: e.numbersOnly,
                            input: function (n) {
                              n.target.composing || e.$set(t, 'usedAmount', n.target.value);
                            },
                          },
                        }),
                        e._v('\n            Liczba eksploatowanych źródeł\n          '),
                      ]),
                    ]),
                    e._m(2, !0),
                    n('div', { staticClass: 'col-12 last-row-checkboxes' }, [
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.centralHeating,
                              expression: 'heatSource.centralHeating',
                            },
                          ],
                          class: {
                            error:
                              e.errors.sourcesOfHeats &&
                              e.errors.sourcesOfHeats[i] &&
                              e.errors.sourcesOfHeats[i].anyHeating,
                          },
                          attrs: { type: 'checkbox' },
                          domProps: {
                            checked: Array.isArray(t.centralHeating)
                              ? e._i(t.centralHeating, null) > -1
                              : t.centralHeating,
                          },
                          on: {
                            change: function (n) {
                              var i = t.centralHeating,
                                a = n.target,
                                s = !!a.checked;
                              if (Array.isArray(i)) {
                                var o = null,
                                  r = e._i(i, o);
                                a.checked
                                  ? r < 0 && e.$set(t, 'centralHeating', i.concat([o]))
                                  : r > -1 &&
                                    e.$set(
                                      t,
                                      'centralHeating',
                                      i.slice(0, r).concat(i.slice(r + 1))
                                    );
                              } else e.$set(t, 'centralHeating', s);
                            },
                          },
                        }),
                        e._v('\n            Źródło ciepła służy do ogrzewania (c. o.)\n          '),
                      ]),
                      n('label', [
                        n('input', {
                          directives: [
                            {
                              name: 'model',
                              rawName: 'v-model',
                              value: t.waterHeating,
                              expression: 'heatSource.waterHeating',
                            },
                          ],
                          class: {
                            error:
                              e.errors.sourcesOfHeats &&
                              e.errors.sourcesOfHeats[i] &&
                              e.errors.sourcesOfHeats[i].anyHeating,
                          },
                          attrs: { type: 'checkbox' },
                          domProps: {
                            checked: Array.isArray(t.waterHeating)
                              ? e._i(t.waterHeating, null) > -1
                              : t.waterHeating,
                          },
                          on: {
                            change: function (n) {
                              var i = t.waterHeating,
                                a = n.target,
                                s = !!a.checked;
                              if (Array.isArray(i)) {
                                var o = null,
                                  r = e._i(i, o);
                                a.checked
                                  ? r < 0 && e.$set(t, 'waterHeating', i.concat([o]))
                                  : r > -1 &&
                                    e.$set(t, 'waterHeating', i.slice(0, r).concat(i.slice(r + 1)));
                              } else e.$set(t, 'waterHeating', s);
                            },
                          },
                        }),
                        e._v(
                          '\n            Źródło ciepła służy do podgrzewania wody (c. w. u.)\n          '
                        ),
                      ]),
                      'B' === e.declarationType
                        ? n('label', [
                            n('input', {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: t.technicalHeating,
                                  expression: 'heatSource.technicalHeating',
                                },
                              ],
                              class: {
                                error:
                                  e.errors.sourcesOfHeats &&
                                  e.errors.sourcesOfHeats[i] &&
                                  e.errors.sourcesOfHeats[i].anyHeating,
                              },
                              attrs: { type: 'checkbox' },
                              domProps: {
                                checked: Array.isArray(t.technicalHeating)
                                  ? e._i(t.technicalHeating, null) > -1
                                  : t.technicalHeating,
                              },
                              on: {
                                change: function (n) {
                                  var i = t.technicalHeating,
                                    a = n.target,
                                    s = !!a.checked;
                                  if (Array.isArray(i)) {
                                    var o = null,
                                      r = e._i(i, o);
                                    a.checked
                                      ? r < 0 && e.$set(t, 'technicalHeating', i.concat([o]))
                                      : r > -1 &&
                                        e.$set(
                                          t,
                                          'technicalHeating',
                                          i.slice(0, r).concat(i.slice(r + 1))
                                        );
                                  } else e.$set(t, 'technicalHeating', s);
                                },
                              },
                            }),
                            e._v('\n            Funkcja technologiczna / produkcyjna\n          '),
                          ])
                        : e._e(),
                    ]),
                    'B' === e.declarationType
                      ? n('div', { staticClass: 'col-12' }, [
                          n('h2', [e._v('Określ moc wybranego źródła ciepła')]),
                        ])
                      : e._e(),
                    'B' === e.declarationType
                      ? n(
                          'div',
                          { staticClass: 'col-12' },
                          [
                            n('label', [
                              e._v('\n            Łączna moc źródła / źródeł (kW)\n            '),
                              n('input', {
                                directives: [
                                  {
                                    name: 'model',
                                    rawName: 'v-model',
                                    value: t.powerConsumption,
                                    expression: 'heatSource.powerConsumption',
                                  },
                                ],
                                staticClass: 'text-input w-small side-margins',
                                attrs: { id: 'kWinput', type: 'number' },
                                domProps: { value: t.powerConsumption },
                                on: {
                                  input: function (n) {
                                    n.target.composing ||
                                      e.$set(t, 'powerConsumption', n.target.value);
                                  },
                                },
                              }),
                            ]),
                            n('b-tooltip', { attrs: { target: 'kWinput', triggers: 'hover' } }, [
                              e._v('\n              Wartość '),
                              n('b', [e._v('nie może być przedziałem')]),
                              e._v(', a wartości dziesiętne powinny być oddzielone '),
                              n('b', [e._v('kropką')]),
                              e._v('.\n          '),
                            ]),
                          ],
                          1
                        )
                      : e._e(),
                    n('div', { staticClass: 'col-12' }, [
                      n(
                        'button',
                        {
                          staticClass: 'btn btn-link',
                          attrs: { type: 'button' },
                          on: {
                            click: function (t) {
                              return e.removeHeatSource(i);
                            },
                          },
                        },
                        [e._v('\n            Usuń źródło ciepła\n          ')]
                      ),
                    ]),
                    e._m(3, !0),
                  ]);
                }),
                n('div', { staticClass: 'col-12 add-new-col' }, [
                  n(
                    'a',
                    { attrs: { href: '#' }, on: { click: e.addEmptyHeatSource } },
                    [
                      n('ZoneIcon', { attrs: { 'icon-name': 'Plus' } }),
                      n('label', [e._v('Dodaj kolejne źródło ciepła')]),
                    ],
                    1
                  ),
                ]),
              ],
              2
            ),
          ]),
        ]);
      },
      ln = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [
            n('h2', [e._v('Wybierz rodzaj źródła ciepła zainstalowanego w budynku')]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [
            n('h2', [e._v('Określ, czy wybrane źródło ciepła jest eksploatowane')]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [
            n('h2', { attrs: { id: 'isUsedH2' } }, [
              e._v('Określ funkcje wybranego źródła ciepła'),
            ]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [n('hr')]);
        },
      ],
      un = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'dropdown-container' }, [
          n('div', { staticClass: 'input-dropdown', class: { small: e.isSmall, error: e.error } }, [
            n('input', {
              directives: [
                {
                  name: 'model',
                  rawName: 'v-model',
                  value: e.inputContent,
                  expression: 'inputContent',
                },
              ],
              staticClass: 'text-input',
              attrs: {
                type: 'text',
                'aria-label': e.placeholder,
                placeholder: e.placeholder,
                readonly: '',
              },
              domProps: { value: e.inputContent },
              on: {
                click: function (t) {
                  e.is_focused = !0;
                },
                blur: e.clearTextIfNotSelected,
                input: function (t) {
                  t.target.composing || (e.inputContent = t.target.value);
                },
              },
            }),
          ]),
          e.is_focused
            ? n(
                'div',
                { staticClass: 'items-list' },
                e._l(e.items, function (t) {
                  return n(
                    'div',
                    {
                      key: t.id,
                      staticClass: 'item',
                      class: { multiline: e.multiline },
                      attrs: { tabindex: '0' },
                      on: {
                        mousedown: function (n) {
                          return n.preventDefault(), e.selectValue(t);
                        },
                      },
                    },
                    [n('p', [e._v(e._s(t.name))])]
                  );
                }),
                0
              )
            : e._e(),
        ]);
      },
      dn = [],
      mn = {
        name: 'ZoneDropdown',
        props: {
          error: { type: Boolean, required: !1, default: !1 },
          multiline: { type: Boolean, required: !1, default: !1 },
          isSmall: { type: Boolean, required: !1, default: !1 },
          placeholder: { type: String, required: !1 },
          items: { type: Array, required: !0 },
          value: { required: !0 },
        },
        data: function () {
          return { is_focused: !1, inputContent: '', content: this.value };
        },
        methods: {
          reset: function () {
            (this.inputContent = ''), this.clearValue();
          },
          clearValue: function () {
            (this.content && this.inputContent === this.content.name) ||
              ((this.content = null), this.$emit('input', this.content));
          },
          selectValue: function (e) {
            e &&
              e.name &&
              ((this.inputContent = e.name),
              (this.content = e),
              (this.is_focused = !1),
              this.$emit('input', this.content),
              this.$emit('change', this.content));
          },
          clearTextIfNotSelected: function () {
            (this.is_focused = !1),
              (this.content && this.inputContent === this.content.name) || (this.inputContent = '');
          },
        },
        mounted: function () {
          this.selectValue(this.value);
        },
        watch: {
          value: function (e) {
            this.selectValue(e);
          },
        },
      },
      pn = mn,
      hn = (n('edab'), Object(h['a'])(pn, un, dn, !1, null, 'f29c22a8', null)),
      An = hn.exports,
      bn = {
        name: 'SecondScreen',
        mixins: [tn, nn],
        components: { ZoneDropdown: An, ZoneIcon: Vt, InputDropdown: S },
        data: function () {
          return { heatSources: [], heatSourceTypes: [] };
        },
        methods: {
          clearCount: function (e) {
            this.heatSources[e].isUsed || (this.heatSources[e].usedAmount = null);
          },
          setData: function (e) {
            e.sources_of_heat.length &&
              (this.heatSources = e.sources_of_heat.map(function (e) {
                return {
                  id: e.id,
                  type: e.type,
                  isUsed: e.used_count > 0,
                  amount: e.amount,
                  usedAmount: e.used_count,
                  waterHeating: e.water_heating,
                  centralHeating: e.central_heating,
                  technicalHeating: e.production_B,
                  powerConsumption: e.power_B,
                };
              }));
          },
          emitChange: function () {
            var e = { heatSources: [], solidFuel: !1 };
            (e.heatSources = this.heatSources.map(function (t) {
              t.type.is_solid_fuel && (e.solidFuel = !0);
              var n = {
                type: t.type.type,
                amount: t.amount || 0,
                is_used: t.isUsed,
                used_count: t.usedAmount || 0,
                water_heating: t.waterHeating,
                central_heating: t.centralHeating,
                production_B: t.technicalHeating,
                power_B: t.powerConsumption || null,
              };
              return t.id && (n.id = t.id), n;
            })),
              1 === e.heatSources.length && 0 === e.heatSources[0].amount && (e.heatSources = []),
              this.$emit('update', e);
          },
          getHeatSources: function () {
            var e = this;
            Be.getHeatSources().then(function (t) {
              return (e.heatSourceTypes = t.data);
            });
          },
          removeHeatSource: function (e) {
            this.heatSources.splice(e, 1);
          },
          addEmptyHeatSource: function () {
            var e = {
              type: {},
              isUsed: !1,
              amount: null,
              usedAmount: null,
              waterHeating: !1,
              centralHeating: !1,
              technicalHeating: !1,
              powerConsumption: null,
              declaration: null,
            };
            this.heatSources.push(e);
          },
          numbersOnly: function (e) {
            e = e || window.event;
            var t = e.which ? e.which : e.keyCode;
            if (!(t > 31 && (t < 48 || t > 57))) return !0;
            e.preventDefault();
          },
        },
        mounted: function () {
          this.getHeatSources();
        },
      },
      fn = bn,
      vn = (n('6f31'), Object(h['a'])(fn, cn, ln, !1, null, '40ff27a5', null)),
      gn = vn.exports,
      yn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'form-block' }, [
          e._m(0),
          n('div', {}, [
            n('div', {}, [
              n('label', [
                n('input', {
                  directives: [
                    { name: 'model', rawName: 'v-model', value: e.isOwner, expression: 'isOwner' },
                  ],
                  attrs: { type: 'radio' },
                  domProps: { value: !0, checked: e._q(e.isOwner, !0) },
                  on: {
                    change: [
                      function (t) {
                        e.isOwner = !0;
                      },
                      e.emitChange,
                    ],
                  },
                }),
                e._v('\n        Właściciel / Współwłaściciel\n      '),
              ]),
            ]),
            n('div', {}, [
              n('label', [
                n('input', {
                  directives: [
                    { name: 'model', rawName: 'v-model', value: e.isOwner, expression: 'isOwner' },
                  ],
                  attrs: { type: 'radio' },
                  domProps: { value: !1, checked: e._q(e.isOwner, !1) },
                  on: {
                    change: [
                      function (t) {
                        e.isOwner = !1;
                      },
                      e.emitChange,
                    ],
                  },
                }),
                e._v('\n        Zarządzający\n      '),
              ]),
            ]),
            n('div', {}, [
              n('label', [
                n('input', {
                  directives: [
                    { name: 'model', rawName: 'v-model', value: e.name, expression: 'name' },
                  ],
                  staticClass: 'text-input',
                  staticStyle: { width: '30rem' },
                  attrs: { type: 'text' },
                  domProps: { value: e.name },
                  on: {
                    change: e.emitChange,
                    input: function (t) {
                      t.target.composing || (e.name = t.target.value);
                    },
                  },
                }),
                e._v('\n        Imię i nazwisko wypełniającego lub nazwa instytucji/firmy\n      '),
              ]),
            ]),
            n('div', {}, [
              n('label', [
                n('input', {
                  directives: [
                    { name: 'model', rawName: 'v-model', value: e.phone, expression: 'phone' },
                  ],
                  staticClass: 'text-input',
                  staticStyle: { width: '22rem' },
                  attrs: {
                    type: 'text',
                    onkeypress:
                      'return (/[0-9,\\+]/i.test(String.fromCharCode(event.which))) ? true : false',
                  },
                  domProps: { value: e.phone },
                  on: {
                    change: e.emitChange,
                    input: function (t) {
                      t.target.composing || (e.phone = t.target.value);
                    },
                  },
                }),
                e._v('\n        Telefon kontaktowy (opcjonalne)\n      '),
              ]),
            ]),
            e._m(1),
            n('div', {}, [
              n('label', [
                n('input', {
                  directives: [
                    { name: 'model', rawName: 'v-model', value: e.email, expression: 'email' },
                  ],
                  staticClass: 'text-input',
                  staticStyle: { width: '30rem' },
                  attrs: { type: 'text' },
                  domProps: { value: e.email },
                  on: {
                    change: e.emitChange,
                    input: function (t) {
                      t.target.composing || (e.email = t.target.value);
                    },
                  },
                }),
                e._v('\n        Adres poczty elektronicznej (opcjonalne)\n      '),
              ]),
            ]),
          ]),
          e._m(2),
          n('div', {}, [
            n('div', {}, [
              n('label', [
                n('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.isAddressSame,
                      expression: 'isAddressSame',
                    },
                  ],
                  attrs: { type: 'radio' },
                  domProps: { value: !0, checked: e._q(e.isAddressSame, !0) },
                  on: {
                    change: [
                      function (t) {
                        e.isAddressSame = !0;
                      },
                      e.emitChange,
                    ],
                  },
                }),
                e._v(
                  '\n        Dane są tożsame z adresem budynku/lokalu, którego dotyczy formularz\n      '
                ),
              ]),
            ]),
            n('div', {}, [
              n('label', [
                n('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.isAddressSame,
                      expression: 'isAddressSame',
                    },
                  ],
                  attrs: { type: 'radio' },
                  domProps: { value: !1, checked: e._q(e.isAddressSame, !1) },
                  on: {
                    change: [
                      function (t) {
                        e.isAddressSame = !1;
                      },
                      e.emitChange,
                    ],
                  },
                }),
                e._v(
                  '\n        Dane nie są tożsame z adresem budynku/lokalu, którego dotyczy formularz\n      '
                ),
              ]),
            ]),
          ]),
          n('div', {}, [
            n('div', {}, [
              n('label', [
                n('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.hasStatement,
                      expression: 'hasStatement',
                    },
                  ],
                  class: { error: e.errors.hasStatement },
                  attrs: { type: 'checkbox' },
                  domProps: {
                    checked: Array.isArray(e.hasStatement)
                      ? e._i(e.hasStatement, null) > -1
                      : e.hasStatement,
                  },
                  on: {
                    change: [
                      function (t) {
                        var n = e.hasStatement,
                          i = t.target,
                          a = !!i.checked;
                        if (Array.isArray(n)) {
                          var s = null,
                            o = e._i(n, s);
                          i.checked
                            ? o < 0 && (e.hasStatement = n.concat([s]))
                            : o > -1 && (e.hasStatement = n.slice(0, o).concat(n.slice(o + 1)));
                        } else e.hasStatement = a;
                      },
                      e.emitChange,
                    ],
                  },
                }),
                e._v(
                  '\n        Jestem świadomy odpowiedzialności karnej za złożenie fałszywego oświadczenia oraz oświadczam, że niniejsza deklaracja, została złożona przez właściciela lub zarządcę budynku lub lokalu zgodnie z art. 27g ust. 1 i 3 ustawy z dnia 21 listopada 2008 r. o wspieraniu termomodernizacji i remontów oraz o centralnej ewidencji emisyjności budynków (Dz. U. z 2021 r. poz. 554 z późń. zm.). Klauzula ta zastępuje pouczenie organu o odpowiedzialności karnej za składanie fałszywego oświadczenia.\n      '
                ),
              ]),
            ]),
          ]),
        ]);
      },
      wn = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', {}, [
            n('h2', [e._v('Dane kontaktowe osoby wypełniającej formularz deklaracji')]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', {}, [
            n('small', [
              e._v(
                'Możesz podać kilka numerów oddzielonych przecinkami, np. +48123123123,224564564'
              ),
            ]),
            n('br'),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', {}, [
            n('h2', [e._v('Dane adresowe osoby wypełniającej formularz deklaracji')]),
          ]);
        },
      ],
      kn = {
        name: 'ThirdScreen',
        mixins: [tn],
        data: function () {
          return {
            isAddressSame: !0,
            isOwner: !0,
            email: this.$store.state.currentUserData.email,
            phone: '',
            name: this.$store.state.currentUserData.full_name,
            hasStatement: !1,
            isPoland: !0,
            countryName: '',
          };
        },
        methods: {
          setData: function (e) {
            (this.phone = e.contact_telephone_D03),
              (this.email = e.email_D04),
              (this.name = e.person_or_company_name_D02),
              (this.isOwner = !e.is_manager_D01),
              (this.isAddressSame = !e.is_address_different_D05),
              (this.hasStatement = !!e.has_statement && e.has_statement);
          },
          emitChange: function () {
            var e = {
              email: this.email,
              phone: this.phone,
              name: this.name,
              isOwner: this.isOwner,
              isAddressSame: this.isAddressSame,
              hasStatement: this.hasStatement,
            };
            this.$emit('update', e);
          },
        },
      },
      Cn = kn,
      _n = (n('9a11'), Object(h['a'])(Cn, yn, wn, !1, null, '10dbda4a', null)),
      En = _n.exports,
      Dn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'form-block' }, [
          n('div', { staticClass: 'container-fluid' }, [
            n(
              'div',
              { staticClass: 'soh-list-view' },
              [
                e._l(e.boilers, function (t, i) {
                  return n('div', { key: i, staticClass: 'row' }, [
                    e._m(0, !0),
                    n(
                      'div',
                      { staticClass: 'col-xs-12 col-md-6' },
                      [
                        n('InputDropdown', {
                          attrs: {
                            'is-small': !0,
                            placeholder: 'Klasa kotła/kotłów',
                            items: e.boilerClasses,
                            error:
                              e.errors.boilers &&
                              e.errors.boilers[i] &&
                              e.errors.boilers[i].boilerClass,
                          },
                          model: {
                            value: t.boilerClass,
                            callback: function (n) {
                              e.$set(t, 'boilerClass', n);
                            },
                            expression: 'boiler.boilerClass',
                          },
                        }),
                      ],
                      1
                    ),
                    n(
                      'div',
                      {
                        staticClass: 'col-xs-12 col-md-5',
                        staticStyle: { 'margin-right': '-2.5rem' },
                      },
                      [
                        n('label', [
                          n('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: t.count,
                                expression: 'boiler.count',
                              },
                            ],
                            staticClass: 'text-input w-small',
                            class: {
                              error:
                                e.errors.boilers &&
                                e.errors.boilers[i] &&
                                e.errors.boilers[i].count,
                            },
                            staticStyle: { margin: '.5rem .5rem .5rem 0' },
                            attrs: { type: 'text' },
                            domProps: { value: t.count },
                            on: {
                              input: function (n) {
                                n.target.composing || e.$set(t, 'count', n.target.value);
                              },
                            },
                          }),
                          e._v('\n            Liczba kotłów w wybranej klasie\n          '),
                        ]),
                      ]
                    ),
                    n('div', { staticClass: 'col-xs-12 col-md-1' }, [
                      n(
                        'button',
                        {
                          staticClass: 'btn btn-link',
                          staticStyle: { height: '100%' },
                          attrs: { type: 'button' },
                          on: {
                            click: function (t) {
                              return e.removeBoiler(i);
                            },
                          },
                        },
                        [e._v('\n            Usuń\n          ')]
                      ),
                    ]),
                    e._m(1, !0),
                  ]);
                }),
                n('div', { staticClass: 'col-12' }, [
                  n(
                    'a',
                    { attrs: { href: '#' }, on: { click: e.addEmptyBoiler } },
                    [
                      n('ZoneIcon', { attrs: { 'icon-name': 'Plus' } }),
                      n('label', [e._v('Dodaj kolejną klasę kotła/kotłów')]),
                    ],
                    1
                  ),
                ]),
              ],
              2
            ),
          ]),
        ]);
      },
      xn = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [
            n('h2', [e._v('Wybierz klasę kotła na paliwo stałe')]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'col-12' }, [n('hr')]);
        },
      ],
      zn = {
        name: 'BoilersClassesScreen',
        mixins: [tn],
        components: { InputDropdown: S, ZoneIcon: Vt },
        data: function () {
          return { boilers: [], boilerClasses: [] };
        },
        methods: {
          setData: function (e) {
            e.boiler_classes_count.length &&
              (this.boilers = e.boiler_classes_count.map(function (e) {
                return { boilerClass: e.boiler_class, count: e.count };
              }));
          },
          emitChange: function () {
            this.$emit('update', { boilerClassesCount: this.boilers });
          },
          getBoilerClasses: function () {
            var e = this;
            Be.getBoilerClasses().then(function (t) {
              return (e.boilerClasses = t.data);
            });
          },
          removeBoiler: function (e) {
            this.boilers.splice(e, 1);
          },
          addEmptyBoiler: function () {
            var e = { boilerClass: {}, count: null };
            this.boilers.push(e);
          },
        },
        mounted: function () {
          this.getBoilerClasses();
        },
      },
      Bn = zn,
      jn = (n('2c8d'), Object(h['a'])(Bn, Dn, xn, !1, null, '7ccfb7c7', null)),
      Sn = jn.exports,
      Nn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'form-block' }, [
          n(
            'div',
            { staticClass: 'container-fluid' },
            [
              e._m(0),
              e._l(e.selectedFuelTypes, function (t, i) {
                return n('div', { key: t.id, staticClass: 'row' }, [
                  n('div', { staticClass: 'col-12' }, [
                    n('label', [
                      n('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: t.selected,
                            expression: 'fuelType.selected',
                          },
                        ],
                        attrs: { type: 'checkbox' },
                        domProps: {
                          checked: Array.isArray(t.selected)
                            ? e._i(t.selected, null) > -1
                            : t.selected,
                        },
                        on: {
                          change: function (n) {
                            var i = t.selected,
                              a = n.target,
                              s = !!a.checked;
                            if (Array.isArray(i)) {
                              var o = null,
                                r = e._i(i, o);
                              a.checked
                                ? r < 0 && e.$set(t, 'selected', i.concat([o]))
                                : r > -1 &&
                                  e.$set(t, 'selected', i.slice(0, r).concat(i.slice(r + 1)));
                            } else e.$set(t, 'selected', s);
                          },
                        },
                      }),
                      e._v('\n          ' + e._s(t.name) + '\n        '),
                    ]),
                  ]),
                ]);
              }),
            ],
            2
          ),
        ]);
      },
      In = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'row' }, [
            n('h2', [e._v('Zaznacz rodzaje stosowanego paliwa')]),
          ]);
        },
      ],
      Mn =
        (n('20d6'),
        {
          name: 'FuelTypesScreen',
          mixins: [tn],
          components: { InputDropdown: S, ZoneIcon: Vt },
          data: function () {
            return { fuelTypes: [], selectedFuelTypes: [] };
          },
          methods: {
            setData: function (e) {
              var t = this;
              e.used_fuels.forEach(function (e) {
                var n = t.selectedFuelTypes.findIndex(function (t) {
                  return e.id === t.id;
                });
                t.selectedFuelTypes.length &&
                  t.selectedFuelTypes[n] &&
                  (t.selectedFuelTypes[n].selected = !0);
              });
            },
            emitChange: function () {
              var e = {
                usedFuels: this.selectedFuelTypes
                  .filter(function (e) {
                    return e.selected;
                  })
                  .map(function (e) {
                    return e.abbreviation;
                  }),
              };
              this.$emit('update', e);
            },
            getFuelClasses: function () {
              var e = this;
              Be.getFuelClasses().then(function (t) {
                e.selectedFuelTypes = t.data.map(function (e) {
                  return (e.selected = !1), e;
                });
              });
            },
          },
          mounted: function () {
            this.getFuelClasses();
          },
        }),
      Gn = Mn,
      Tn = (n('0e35'), Object(h['a'])(Gn, Nn, In, !1, null, '334975b1', null)),
      Qn = Tn.exports,
      On = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'form-block' }, [
          e._m(0),
          n(
            'div',
            { staticClass: 'row' },
            [
              n('div', { staticClass: 'col-12' }, [
                n('label', [
                  n('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: e.isPoland,
                        expression: 'isPoland',
                      },
                    ],
                    attrs: { type: 'checkbox' },
                    domProps: {
                      checked: Array.isArray(e.isPoland) ? e._i(e.isPoland, null) > -1 : e.isPoland,
                    },
                    on: {
                      click: function (t) {
                        return e.changeCountryName(!0);
                      },
                      change: function (t) {
                        var n = e.isPoland,
                          i = t.target,
                          a = !!i.checked;
                        if (Array.isArray(n)) {
                          var s = null,
                            o = e._i(n, s);
                          i.checked
                            ? o < 0 && (e.isPoland = n.concat([s]))
                            : o > -1 && (e.isPoland = n.slice(0, o).concat(n.slice(o + 1)));
                        } else e.isPoland = a;
                      },
                    },
                  }),
                  e._v('\n        Polska\n      '),
                ]),
              ]),
              e.isPoland
                ? e._e()
                : n('div', { staticClass: 'col-12' }, [
                    n('label', [
                      n('input', {
                        directives: [
                          {
                            name: 'model',
                            rawName: 'v-model',
                            value: e.countryName,
                            expression: 'countryName',
                          },
                        ],
                        staticClass: 'text-input',
                        staticStyle: {
                          'margin-bottom': '0',
                          width: '30rem',
                          'margin-right': '1rem',
                        },
                        attrs: { type: 'text' },
                        domProps: { value: e.countryName },
                        on: {
                          input: function (t) {
                            t.target.composing || (e.countryName = t.target.value);
                          },
                        },
                      }),
                      e._v('\n        Nazwa kraju\n      '),
                    ]),
                  ]),
              e.isPoland ? e._e() : n('div', { staticClass: 'col-8' }),
              e.isPoland
                ? n('PolishAddress', { ref: 'polishAddress' })
                : n('ForeignAddress', { ref: 'foreignAddress' }),
            ],
            1
          ),
        ]);
      },
      Pn = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'row' }, [
            n('div', { staticClass: 'col-12' }, [
              n('h2', [e._v('Wprowadź dane adresowe osoby wypełniającej formularz')]),
            ]),
          ]);
        },
      ],
      Fn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'col-12' }, [
          n('div', { staticClass: 'forms' }, [
            n('div', { staticClass: 'row' }, [
              n(
                'div',
                { staticClass: 'col-12' },
                [
                  n('InputDropdown', {
                    attrs: { 'is-small': !0, items: e.voivodeships, placeholder: 'Województwo' },
                    model: {
                      value: e.voivodeship,
                      callback: function (t) {
                        e.voivodeship = t;
                      },
                      expression: 'voivodeship',
                    },
                  }),
                ],
                1
              ),
              n(
                'div',
                { staticClass: 'col-12' },
                [
                  n('InputDropdown', {
                    ref: 'countyInput',
                    attrs: { 'is-small': !0, items: e.counties, placeholder: 'Powiat' },
                    model: {
                      value: e.county,
                      callback: function (t) {
                        e.county = t;
                      },
                      expression: 'county',
                    },
                  }),
                ],
                1
              ),
              n(
                'div',
                { staticClass: 'col-12' },
                [
                  n('InputDropdown', {
                    ref: 'communityInput',
                    attrs: { 'is-small': !0, items: e.communities, placeholder: 'Gmina' },
                    model: {
                      value: e.community,
                      callback: function (t) {
                        e.community = t;
                      },
                      expression: 'community',
                    },
                  }),
                ],
                1
              ),
              n(
                'div',
                { staticClass: 'col-xs-12 col-md-8' },
                [
                  n('InputDropdown', {
                    ref: 'cityInput',
                    attrs: { 'is-small': !0, items: e.cities, placeholder: 'Miejscowość' },
                    model: {
                      value: e.city,
                      callback: function (t) {
                        e.city = t;
                      },
                      expression: 'city',
                    },
                  }),
                ],
                1
              ),
              n('div', { staticClass: 'col-xs-12 col-md-4' }, [
                n('input', {
                  directives: [
                    { name: 'mask', rawName: 'v-mask', value: '##-###', expression: "'##-###'" },
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.postalCode,
                      expression: 'postalCode',
                    },
                  ],
                  staticClass: 'text-input postal-code-input',
                  attrs: { placeholder: 'Kod pocztowy' },
                  domProps: { value: e.postalCode },
                  on: {
                    input: function (t) {
                      t.target.composing || (e.postalCode = t.target.value);
                    },
                  },
                }),
              ]),
              n(
                'div',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: e.customStreetEntrance,
                      expression: 'customStreetEntrance',
                    },
                  ],
                  staticClass: 'col-xs-12 col-md-8',
                  staticStyle: { 'min-height': '64px' },
                },
                [
                  n('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: e.customStreetName,
                        expression: 'customStreetName',
                      },
                    ],
                    staticClass: 'text-input street-input small',
                    attrs: {
                      type: 'text',
                      'aria-label': 'Niestandardowa nazwa ulicy',
                      placeholder: 'Niestandardowa nazwa ulicy',
                    },
                    domProps: { value: e.customStreetName },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.customStreetName = t.target.value);
                      },
                    },
                  }),
                ]
              ),
              n(
                'div',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: !e.customStreetEntrance,
                      expression: '!customStreetEntrance',
                    },
                  ],
                  staticClass: 'col-xs-12 col-md-8',
                },
                [
                  n('InputDropdown', {
                    ref: 'streetInput',
                    staticClass: 'street-input',
                    attrs: { 'is-small': !0, items: e.streets, placeholder: 'Ulica' },
                    model: {
                      value: e.street,
                      callback: function (t) {
                        e.street = t;
                      },
                      expression: 'street',
                    },
                  }),
                ],
                1
              ),
              n(
                'div',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: e.customNumberEntrance,
                      expression: 'customNumberEntrance',
                    },
                  ],
                  staticClass: 'col-xs-6 col-md-2',
                },
                [
                  n('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: e.customNumber,
                        expression: 'customNumber',
                      },
                    ],
                    staticClass: 'text-input building-input small',
                    attrs: {
                      type: 'text',
                      'aria-label': 'Numer budynku',
                      placeholder: 'Wpisz numer budynku',
                    },
                    domProps: { value: e.customNumber },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.customNumber = t.target.value);
                      },
                    },
                  }),
                ]
              ),
              n(
                'div',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: !e.customNumberEntrance,
                      expression: '!customNumberEntrance',
                    },
                  ],
                  staticClass: 'col-xs-6 col-md-2',
                },
                [
                  n('InputDropdown', {
                    ref: 'numberInput',
                    staticClass: 'street-input',
                    attrs: {
                      'is-small': !0,
                      items: e.numbers,
                      placeholder: 'Wybierz numer budynku',
                    },
                    model: {
                      value: e.number,
                      callback: function (t) {
                        e.number = t;
                      },
                      expression: 'number',
                    },
                  }),
                ],
                1
              ),
              n('div', { staticClass: 'col-xs-6 col-md-2' }, [
                n('input', {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.localNumber,
                      expression: 'localNumber',
                    },
                  ],
                  staticClass: 'text-input small',
                  attrs: {
                    type: 'text',
                    'aria-label': 'Numer lokalu',
                    placeholder: 'Wpisz numer lokalu',
                  },
                  domProps: { value: e.localNumber },
                  on: {
                    input: function (t) {
                      t.target.composing || (e.localNumber = t.target.value);
                    },
                  },
                }),
              ]),
              n('div', { staticClass: 'col-xs-12 col-md-8' }, [
                n('label', { attrs: { for: 'custom_street_checkbox' } }, [
                  n('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: e.customStreetEntrance,
                        expression: 'customStreetEntrance',
                      },
                    ],
                    attrs: { type: 'checkbox', id: 'custom_street_checkbox' },
                    domProps: {
                      checked: Array.isArray(e.customStreetEntrance)
                        ? e._i(e.customStreetEntrance, null) > -1
                        : e.customStreetEntrance,
                    },
                    on: {
                      change: function (t) {
                        var n = e.customStreetEntrance,
                          i = t.target,
                          a = !!i.checked;
                        if (Array.isArray(n)) {
                          var s = null,
                            o = e._i(n, s);
                          i.checked
                            ? o < 0 && (e.customStreetEntrance = n.concat([s]))
                            : o > -1 &&
                              (e.customStreetEntrance = n.slice(0, o).concat(n.slice(o + 1)));
                        } else e.customStreetEntrance = a;
                      },
                    },
                  }),
                  e._v('\n          Nie znalazłeś swojej ulicy, wpisz ją ręcznie\n          '),
                  n('span', { staticClass: 'checkmark' }),
                ]),
                n('label', { attrs: { for: 'custom_number_checkbox2' } }, [
                  n('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: e.customNumberEntrance,
                        expression: 'customNumberEntrance',
                      },
                    ],
                    attrs: { type: 'checkbox', id: 'custom_number_checkbox2' },
                    domProps: {
                      checked: Array.isArray(e.customNumberEntrance)
                        ? e._i(e.customNumberEntrance, null) > -1
                        : e.customNumberEntrance,
                    },
                    on: {
                      change: function (t) {
                        var n = e.customNumberEntrance,
                          i = t.target,
                          a = !!i.checked;
                        if (Array.isArray(n)) {
                          var s = null,
                            o = e._i(n, s);
                          i.checked
                            ? o < 0 && (e.customNumberEntrance = n.concat([s]))
                            : o > -1 &&
                              (e.customNumberEntrance = n.slice(0, o).concat(n.slice(o + 1)));
                        } else e.customNumberEntrance = a;
                      },
                    },
                  }),
                  e._v('\n          Nie znalazłeś swojego budynku, wpisz go ręcznie\n          '),
                  n('span', { staticClass: 'checkmark' }),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      Ln = [],
      Un = {
        solidFuelBoilersCount: function (e) {
          var t = 0;
          return (
            e.$parent.$refs['screen2'].heatSources.forEach(function (e) {
              e.type.is_solid_fuel && (t += parseInt(e.amount));
            }),
            t
          );
        },
        showMessage: function (e, t) {
          e.$notify({
            reverse: !0,
            duration: 4e3,
            group: 'declaration',
            type: 'error',
            title: 'Błąd w podanych danych',
            text: t,
          });
        },
      },
      Rn = {
        methods: {
          isValid: function () {
            var e = { atLeastOne: !1, notAllFields: !1 };
            this.setErrors(e);
            var t = '';
            return (
              (this.voivodeship &&
                this.county &&
                this.community &&
                this.city &&
                (this.street || this.customStreetName) &&
                (this.number || this.customNumber) &&
                this.postalCode) ||
                ((t += 'Prosimy o wprowadzenie wartości wszystkich pól adresowych <br/>'),
                (e.notAllFields = !0),
                (e.atLeastOne = !0)),
              e.atLeastOne && Un.showMessage(this, t),
              e
            );
          },
        },
      },
      Vn = {
        name: 'PolishAddress',
        components: { InputDropdown: S },
        data: function () {
          return { localNumber: '', errors: {} };
        },
        mixins: [W, tn, Rn],
        methods: {
          setData: (function () {
            var e = Object(E['a'])(
              regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (this.voivodeship = t.voivodeship), (e.next = 3), this.getCounties()
                          );
                        case 3:
                          return (this.county = t.county), (e.next = 6), this.getCommunities();
                        case 6:
                          return (this.community = t.community), (e.next = 9), this.getCities();
                        case 9:
                          return (this.city = t.city), (e.next = 12), this.getStreets();
                        case 12:
                          if (
                            ((this.postalCode = t.postal_code),
                            (this.localNumber = t.premises_number),
                            t.custom_street_name &&
                              ((this.customStreetEntrance = !0),
                              (this.customStreetName = t.custom_street_name)),
                            t.street &&
                              t.street.id &&
                              ((this.custom_street_name = ''), (this.street = t.street)),
                            t.custom_number &&
                              ((this.customNumberEntrance = !0),
                              (this.customNumber = t.custom_number)),
                            !t.number || !t.number.id)
                          ) {
                            e.next = 22;
                            break;
                          }
                          return (e.next = 20), this.getNumbers();
                        case 20:
                          (this.customNumber = ''), (this.number = t.number);
                        case 22:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          getAddress: function () {
            var e = {
              postal_code: this.postalCode,
              premises_number: this.localNumber,
              city_id: this.city.id,
            };
            return (
              this.customStreetEntrance
                ? (e.custom_street_name = this.customStreetName)
                : (e.street_id = this.street.id),
              this.customNumberEntrance
                ? (e.custom_number = this.customNumber)
                : (e.number_id = this.number.id),
              e
            );
          },
        },
      },
      Wn = Vn,
      Kn = (n('a692'), Object(h['a'])(Wn, Fn, Ln, !1, null, '6e1cc08a', null)),
      Zn = Kn.exports,
      Jn = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', { staticClass: 'col-12' }, [
          n('div', { staticClass: 'forms' }, [
            n('div', { staticClass: 'row' }, [
              n('div', { staticClass: 'col-12' }, [
                n('label', [
                  n('input', {
                    directives: [
                      { name: 'model', rawName: 'v-model', value: e.city, expression: 'city' },
                    ],
                    ref: 'cityInput',
                    staticClass: 'text-input',
                    attrs: { type: 'text' },
                    domProps: { value: e.city },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.city = t.target.value);
                      },
                    },
                  }),
                  e._v('Miejscowość'),
                ]),
              ]),
              n('div', { staticClass: 'col-12' }, [
                n('label', [
                  n('input', {
                    directives: [
                      { name: 'model', rawName: 'v-model', value: e.street, expression: 'street' },
                    ],
                    staticClass: 'text-input',
                    attrs: { type: 'text', 'aria-label': 'Nazwa ulicy' },
                    domProps: { value: e.street },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.street = t.target.value);
                      },
                    },
                  }),
                  e._v('\n          Nazwa ulicy'),
                ]),
              ]),
              n('div', { staticClass: 'col-12' }, [
                n('label', [
                  n('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: e.postalCode,
                        expression: 'postalCode',
                      },
                    ],
                    staticClass: 'text-input',
                    staticStyle: { height: '2rem', 'font-size': '.8rem', width: '10rem' },
                    domProps: { value: e.postalCode },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.postalCode = t.target.value);
                      },
                    },
                  }),
                  e._v('\n          Kod pocztowy\n        '),
                ]),
              ]),
              n('div', { staticClass: 'col-12' }, [
                n('label', [
                  n('input', {
                    directives: [
                      { name: 'model', rawName: 'v-model', value: e.number, expression: 'number' },
                    ],
                    staticClass: 'text-input building-input',
                    staticStyle: { width: '5rem' },
                    attrs: { type: 'text', 'aria-label': 'Numer budynku' },
                    domProps: { value: e.number },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.number = t.target.value);
                      },
                    },
                  }),
                  e._v('\n          Numer budynku\n        '),
                ]),
              ]),
              n('div', { staticClass: 'col-12' }, [
                n('label', [
                  n('input', {
                    directives: [
                      {
                        name: 'model',
                        rawName: 'v-model',
                        value: e.localNumber,
                        expression: 'localNumber',
                      },
                    ],
                    staticClass: 'text-input building-input',
                    staticStyle: { width: '5rem' },
                    attrs: { type: 'text', 'aria-label': 'Numer lokalu' },
                    domProps: { value: e.localNumber },
                    on: {
                      input: function (t) {
                        t.target.composing || (e.localNumber = t.target.value);
                      },
                    },
                  }),
                  e._v('\n          Numer lokalu\n        '),
                ]),
              ]),
            ]),
          ]),
        ]);
      },
      Hn = [],
      Yn = {
        methods: {
          isValid: function () {
            var e = { atLeastOne: !1, notAllFields: !1 };
            this.setErrors(e);
            var t = '';
            return (
              (this.city && this.street && this.number && this.postalCode) ||
                ((t += 'Prosimy o wprowadzenie wartości wszystkich pól adresowych <br/>'),
                (e.notAllFields = !0),
                (e.atLeastOne = !0)),
              { errors: e, text: t }
            );
          },
        },
      },
      Xn = {
        name: 'ForeignAddress',
        mixins: [tn, Yn],
        data: function () {
          return {
            voivodeship: '',
            county: '',
            community: '',
            city: '',
            street: '',
            number: '',
            localNumber: '',
            postalCode: '',
          };
        },
        methods: {
          setData: function (e) {
            (this.city = e.city_D10),
              (this.community = e.community_D09),
              (this.county = e.county_D08),
              (this.number = e.number_D12),
              (this.postalCode = e.postal_code_D14),
              (this.localNumber = e.premises_number_D13),
              (this.street = e.street_D11),
              (this.voivodeship = e.voivodeship_D07);
          },
          getAddress: function () {
            return {
              voivodeship_D07: this.voivodeship,
              county_D08: this.county,
              community_D09: this.community,
              city_D10: this.city,
              street_D11: this.street,
              number_D12: this.number,
              premises_number_D13: this.localNumber,
              postal_code_D14: this.postalCode,
            };
          },
        },
      },
      qn = Xn,
      $n = (n('f28e'), Object(h['a'])(qn, Jn, Hn, !1, null, '750201c0', null)),
      ei = $n.exports;
    function ti(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function ni(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ti(Object(n), !0).forEach(function (t) {
              Object(De['a'])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ti(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    var ii = {
        name: 'CustomAddressScreen',
        components: { ForeignAddress: ei, PolishAddress: Zn },
        mixins: [tn],
        data: function () {
          return { isPoland: !0, countryName: '' };
        },
        methods: {
          setData: function (e) {
            var t = this;
            e.is_address_different_D05 &&
              ((this.isPoland =
                e.is_address_different_D05 && e.polish_personal_address.formatted_address),
              this.$nextTick(function () {
                t.isPoland
                  ? t.$refs.polishAddress.setData(e.polish_personal_address)
                  : ((t.countryName = e.foreign_personal_address.country_D06),
                    t.$refs.foreignAddress.setData(e.foreign_personal_address));
              }));
          },
          emitChange: function () {
            var e = {
              polishAddress: this.isPoland ? this.$refs.polishAddress.getAddress() : null,
              foreignAddress: this.isPoland
                ? null
                : ni(
                    ni({}, this.$refs.foreignAddress.getAddress()),
                    {},
                    { country_D06: this.countryName }
                  ),
            };
            this.$emit('update', e);
          },
          changeCountryName: function (e) {
            e && (this.countryName = ''),
              this.countryName ? (this.isPoland = !1) : (this.isPoland = !0);
          },
        },
      },
      ai = ii,
      si = (n('4f22'), Object(h['a'])(ai, On, Pn, !1, null, '7abcf3f6', null)),
      oi = si.exports,
      ri = {
        isValid: function (e) {
          var t = {
            atLeastOne: !1,
            multiFamilyCount: !1,
            temporaryCount: !1,
            premisesCount: !1,
            isAllPremises: !1,
            atLeastOneBuildingType: !1,
          };
          e.setErrors(t);
          var n = '';
          return (
            'A' === e.declarationType &&
              ('multi' === e.singleOrMultiFamily &&
                (isNaN(parseInt(e.multiFamilyCount)) || e.multiFamilyCount <= 0) &&
                ((t.multiFamilyCount = !0),
                (t.atLeastOne = !0),
                (n += 'Prosimy o podanie liczby wszystkich lokali mieszkalnych w budynku. <br/>')),
              'isTemporary' === e.singleOrMultiFamily &&
                (isNaN(parseInt(e.temporaryCount)) || e.temporaryCount <= 0) &&
                ((t.temporaryCount = !0),
                (t.atLeastOne = !0),
                (n +=
                  'Prosimy o podanie liczby wszystkich lokali zbiorowego zamieszkania w budynku. <br/>')),
              !e.isAllPremises &&
                (isNaN(parseInt(e.premisesCount)) || e.premisesCount <= 0) &&
                ((t.premisesCount = !0),
                (t.atLeastOne = !0),
                (n +=
                  'Prosimy o podanie liczby lokali mieszkalnych / zbiorowego zamieszkania objętych deklaracją. <br/>')),
              'multi' === e.singleOrMultiFamily &&
                !e.isAllPremises &&
                parseInt(e.multiFamilyCount) < parseInt(e.premisesCount) &&
                ((t.premisesCount = !0),
                (t.atLeastOne = !0),
                (n +=
                  'Liczba lokali objętych deklaracją nie może być większa niż liczba wszystkich lokali. <br/>')),
              'isTemporary' === e.singleOrMultiFamily &&
                !e.isAllPremises &&
                parseInt(e.temporaryCount) < parseInt(e.premisesCount) &&
                ((t.premisesCount = !0),
                (t.atLeastOne = !0),
                (n +=
                  'Liczba lokali objętych deklaracją nie może być większa wieksza niż liczba wszystkich lokali. <br/>'))),
            'B' === e.declarationType &&
              e.selectedBuildingTypes.filter(function (e) {
                return !!e.selected;
              }).length <= 0 &&
              ((t.atLeastOne = !0),
              (t.atLeastOneBuildingType = !0),
              (n += 'Należy zaznaczyć przynajmniej jeden rodzaj budynku / lokalu. <br/>')),
            e.isAllPremises ||
              e.premisesList.length ||
              ((t.premisesList = !0),
              (t.atLeastOne = !0),
              (n +=
                'Prosimy o podanie numerów lokali mieszkalnych / zbiorowego zamieszkania objętych deklaracją. <br/>')),
            t.atLeastOne && Un.showMessage(e, n),
            t
          );
        },
      },
      ci = {
        isValid: function (e, t) {
          var n = {
            atLeastOne: !1,
            sourceOfHeatLength: !1,
            sourcesOfHeats: e.heatSources.map(function (e) {
              return { type: !1, amount: !1, usedAmount: !1, anyHeating: !1 };
            }),
          };
          e.setErrors(n);
          var i = '';
          return (
            t ||
              e.heatSources.length ||
              ((n.sourceOfHeatLength = !0),
              (i +=
                'Brak możliwości przejścia dalej ze względu na brak wyboru źródła ciepła. <br/>'),
              (n.atLeastOne = !0)),
            e.heatSources.forEach(function (e, t) {
              e.type.id ||
                ((n.sourcesOfHeats[t].type = !0),
                (n.atLeastOne = !0),
                (i += 'Prosimy o wybranie rodzaju źródła ciepła zainstalowanego budynku <br/>')),
                (isNaN(parseInt(e.amount)) || parseInt(e.amount) <= 0) &&
                  ((n.sourcesOfHeats[t].amount = !0),
                  (n.atLeastOne = !0),
                  (i += 'Prosimy o podanie liczby źródeła ciepła zainstalowanych budynku <br/>')),
                e.isUsed &&
                  (isNaN(parseInt(e.usedAmount)) ||
                    parseInt(e.usedAmount) <= 0 ||
                    parseInt(e.usedAmount) > e.amount) &&
                  ((i += 'Wprowadzono niepoprawną liczbę używanych źródeł ciepła <br/>'),
                  (n.sourcesOfHeats[t].usedAmount = !0),
                  (n.atLeastOne = !0));
            }),
            n.atLeastOne && Un.showMessage(e, i),
            n
          );
        },
      },
      li = {
        isValid: function (e, t) {
          var n = {
            atLeastOne: !1,
            boilersLength: !1,
            wrongBoilersCount: !1,
            boilers: e.boilers.map(function (e) {
              return { boilerClass: !1, count: !1 };
            }),
          };
          if ((e.setErrors(n), !Un.solidFuelBoilersCount(e))) return n;
          var i = '';
          t ||
            e.boilers.length ||
            ((n.boilersLength = !0),
            (i +=
              'Brak możliwości przejścia dalej ze względu na brak wyboru klasy kotła/kotłów. <br/>'),
            (n.atLeastOne = !0));
          var a = 0,
            s = 0;
          return (
            e.$parent.$refs['screen2'].heatSources.forEach(function (e) {
              e.type.is_solid_fuel && (a += parseInt(e.amount));
            }),
            e.boilers.forEach(function (t, a) {
              (s += parseInt(t.count)),
                t.boilerClass.id ||
                  ((n.boilers[a].boilerClass = !0),
                  (n.atLeastOne = !0),
                  (i += 'Prosimy o wybranie klasy kotła na paliwo stałe <br/>')),
                (isNaN(parseInt(t.count)) || e.count <= 0 || t.count <= 0) &&
                  ((n.boilers[a].count = !0),
                  (n.atLeastOne = !0),
                  (i += 'Prosimy o podanie liczby kotłów w wybranej klasie<br/>'));
            }),
            t ||
              s === a ||
              ((n.wrongBoilersCount = !0),
              (n.atLeastOne = !0),
              (i +=
                'Podana liczba klas kotłów nie zgadza się z liczbą kotłów na paliwo stałe. <br/>')),
            n.atLeastOne && Un.showMessage(e, i),
            n
          );
        },
      },
      ui = {
        isValid: function (e, t) {
          var n = { atLeastOne: !1, noneSelected: !1 };
          if ((e.setErrors(n), !Un.solidFuelBoilersCount(e))) return n;
          var i = '',
            a = e.selectedFuelTypes.filter(function (e) {
              return e.selected;
            }).length;
          return (
            t ||
              a ||
              ((n.noneSelected = !0),
              (i += 'Prosimy o zaznaczenie przynajmniej jednego rodzaju paliwa<br/>'),
              (n.atLeastOne = !0)),
            n.atLeastOne && Un.showMessage(e, i),
            n
          );
        },
      };
    function di(e) {
      var t =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return t.test(String(e).toLowerCase());
    }
    function mi(e) {
      var t = /^\+?\d{8,11}(,\+?\d{8,11})*$/;
      return t.test(String(e).toLowerCase());
    }
    var pi = {
        isValid: function (e, t) {
          var n = { atLeastOne: !1, name: !1, phone: !1, email: !1 };
          e.setErrors(n);
          var i = '';
          return (
            e.name.length ||
              ((n.atLeastOne = !0),
              (n.name = !0),
              (i +=
                'Prosimy o podanie imienia i nazwiska osoby wypełniającej formularz deklaracji <br/>')),
            e.email &&
              e.email.length &&
              !di(e.email) &&
              ((n.atLeastOne = !0),
              (n.email = !0),
              (i += 'Podany adres email jest nieprawidłowy <br/>')),
            e.phone &&
              e.phone.length &&
              !mi(e.phone) &&
              ((n.atLeastOne = !0),
              (n.phone = !0),
              (i += 'Podany numer telefonu jest nieprawidłowy <br/>')),
            'undefined' == typeof t ||
              t ||
              e.hasStatement ||
              ((n.atLeastOne = !0),
              (n.hasStatement = !0),
              (i += 'Aby złożyć deklarację, zaznacz pole z oświadczeniem. <br/>')),
            n.atLeastOne && Un.showMessage(e, i),
            n
          );
        },
      },
      hi = {
        isValid: function (e) {
          if (e.$parent.$refs['screen5'].isAddressSame) return { atLeastOne: !1 };
          if (e.isPoland) return e.$refs.polishAddress.isValid();
          var t = e.$refs.foreignAddress.isValid();
          return (
            e.countryName ||
              ((t.errors.atLeastOne = !0), (t.text += 'Prosimy o podanie nazwy kraju')),
            t.errors.atLeastOne && Un.showMessage(e, t.text),
            t.errors
          );
        },
      },
      Ai = {
        name: 'DeclarationModal',
        components: {
          CustomAddressScreen: oi,
          FuelTypesScreen: Qn,
          BoilersClassesScreen: Sn,
          ThirdScreen: En,
          SecondScreen: gn,
          FirstScreen: rn,
          CloseModalButton: V,
          ProgressBar: qt,
        },
        mixins: [nn],
        data: function () {
          return {
            validators: {
              screen1: ri,
              screen2: ci,
              screen3: li,
              screen4: ui,
              screen5: pi,
              screen6: hi,
            },
            step: 1,
            firstScreenData: {},
            secondScreenData: {},
            fuelTypesData: {},
            thirdScreenData: { isAddressSame: !0 },
            boilersClassesData: {},
            customAddressData: {},
            dataLoaded: !1,
            showSubmitDeclarationModal: !1,
          };
        },
        methods: {
          setCustomAddressData: function (e) {
            this.customAddressData = e;
          },
          setFuelTypesData: function (e) {
            this.fuelTypesData = e;
          },
          setBoilersClassesData: function (e) {
            this.boilersClassesData = e;
          },
          setFirstScreenData: function (e) {
            this.firstScreenData = e;
          },
          setSecondScreenData: function (e) {
            this.secondScreenData = e;
          },
          setThirdScreenData: function (e) {
            this.thirdScreenData = e;
          },
          stepBack: function () {
            this.$refs['screen'.concat(this.step)].emitChange(),
              5 !== this.step
                ? this.step > 1 && this.step--
                : (this.step = this.secondScreenData.solidFuel ? 4 : 2);
          },
          moveToNextStepOrSave: function () {
            var e = this.$refs['screen'.concat(this.step)],
              t = this.validators['screen'.concat(this.step)].isValid(e);
            if (t.atLeastOne) e.setErrors(t);
            else if ((e.emitChange(), 2 !== this.step))
              if (5 === this.step) {
                if (!this.thirdScreenData.isAddressSame) return void this.step++;
                var n = this.validators['screen5'].isValid(this.$refs['screen5'], !1);
                if (n.atLeastOne) return void this.$refs['screen5'].setErrors(n);
                this.showSubmitDeclarationModal = !0;
              } else {
                if (6 === this.step) {
                  var i = this.validators['screen5'].isValid(this.$refs['screen5'], !1);
                  return i.atLeastOne
                    ? void this.$refs['screen5'].setErrors(i)
                    : void (this.showSubmitDeclarationModal = !0);
                }
                this.step++;
              }
            else this.step = this.secondScreenData.solidFuel ? 3 : 5;
          },
          saveDeclaration: le.a.debounce(function (e) {
            var t = this;
            e = !!e;
            for (var n = null, i = 1; i < 7; i++) {
              n = this.$refs['screen'.concat(i)];
              var a = this.validators['screen'.concat(i)].isValid(n, e);
              if (a.atLeastOne) return (this.step = i), void n.setErrors(a);
              n.emitChange();
            }
            var s = {
              is_single_family_A08_01: 'single' === this.firstScreenData.singleOrMultiFamily,
              is_multi_family_A08_02: 'multi' === this.firstScreenData.singleOrMultiFamily,
              is_temporary_A08_03: this.firstScreenData.isTemporary,
              after_01_07_2021: this.firstScreenData.after01072021,
              multi_family_count: this.firstScreenData.multiFamilyCount
                ? this.firstScreenData.multiFamilyCount
                : null,
              temporary_count: this.firstScreenData.temporaryCount
                ? this.firstScreenData.temporaryCount
                : null,
              is_all_premises: this.firstScreenData.isAllPremises,
              premises_count_A09_02: this.firstScreenData.premisesCount
                ? this.firstScreenData.premisesCount
                : null,
              premises_list_A09_02: this.firstScreenData.premisesList
                ? this.firstScreenData.premisesList
                : null,
              is_address_different_D05: !this.thirdScreenData.isAddressSame,
              status: e ? 'DRAFT' : 'SUBMITTED',
              more_not_declared_C01: !1,
              sources_of_heat: this.secondScreenData.heatSources,
              boiler_classes_count: this.boilersClassesData.boilerClassesCount,
              used_fuels: this.fuelTypesData.usedFuels,
              is_manager_D01: !this.thirdScreenData.isOwner,
              person_or_company_name_D02: this.thirdScreenData.name,
              contact_telephone_D03: this.thirdScreenData.phone,
              email_D04: this.thirdScreenData.email,
              polish_address: this.customAddressData.polishAddress,
              foreign_address: this.customAddressData.foreignAddress,
              type: this.declarationType,
              has_statement:
                null != this.thirdScreenData.hasStatement && this.thirdScreenData.hasStatement,
            };
            'B' === this.declarationType &&
              ((s.building_types = this.firstScreenData.buildingTypes),
              (s.special_symbol_A08_B = this.firstScreenData.specialSymbolA08B),
              (s.linked_declaration = null)),
              this.declarationEditId
                ? Be.updateDeclaration(s, this.declarationEditId).then(function () {
                    t.closeDeclarationModal(),
                      t.$notify({
                        group: 'zone',
                        type: 'success',
                        title: 'Sukces',
                        text: e
                          ? 'Pomyślnie zapisano zmiany w deklaracji'
                          : 'Pomyślnie złożono deklarację',
                      }),
                      t.$store.commit('updateDeclarationsList');
                  })
                : Be.saveDeclaration(s, this.building.id)
                    .then(function () {
                      t.closeDeclarationModal(),
                        t.$notify({
                          group: 'zone',
                          type: 'success',
                          title: 'Sukces',
                          text: e
                            ? 'Pomyślnie zapisano deklarację w wersji roboczej'
                            : 'Pomyślnie złożono deklarację',
                        }),
                        t.$store.commit('updateDeclarationsList');
                    })
                    .catch(function (e) {
                      var n = 'Pod czas zapisywania deklaracji wystąpił błąd po stronie serwera.';
                      e.response &&
                        e.response.data &&
                        e.response.data.zone_error &&
                        (n = e.response.data.text),
                        t.$notify({ group: 'zone', type: 'error', title: 'Błąd!', text: n });
                    });
          }, 500),
          closeDeclarationModal: function () {
            this.$store.commit('closeDeclarationModal');
          },
          setStep: function (e) {
            this.step = e;
          },
        },
        computed: {
          declarationTypeTitle: function () {
            return {
              A: 'Formularz A - budynki i lokale mieszkalne',
              B: 'Formularz B - budynki i lokale niemieszkalne',
            }[this.declarationType];
          },
          building: function () {
            return this.$store.state.declarationBuilding;
          },
          nextStepButtonText: function () {
            var e =
              5 === this.step && this.thirdScreenData.isAddressSame ? 'Złóż' : 'Przejdź dalej';
            return (e = 6 !== this.step || this.thirdScreenData.isAddressSame ? e : 'Złóż'), e;
          },
          declarationEditId: function () {
            return this.$store.state.declarationEditId;
          },
          declarationCloneId: function () {
            return this.$store.state.clonedDeclarationFinalId;
          },
        },
        mounted: function () {
          var e = this;
          this.declarationEditId
            ? Be.getDeclarationById(this.declarationEditId).then(function (t) {
                for (var n = t.data, i = 1; i < 7; i++) e.$refs['screen'.concat(i)].setData(n);
                (e.thirdScreenData.isAddressSame = !n.is_address_different_D05),
                  (e.dataLoaded = !0);
              })
            : this.declarationCloneId &&
              Be.getDeclarationById(this.declarationCloneId).then(function (t) {
                for (var n = t.data, i = 1; i < 7; i++) e.$refs['screen'.concat(i)].setData(n);
                (e.thirdScreenData.isAddressSame = !n.is_address_different_D05),
                  (e.dataLoaded = !0),
                  e.$store.commit('resetDeclarationClonedFinalId');
              });
        },
      },
      bi = Ai,
      fi = (n('3f5f'), Object(h['a'])(bi, Wt, Kt, !1, null, '695f7c44', null)),
      vi = fi.exports,
      gi = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', [
          n('div', { staticClass: 'around-fade' }),
          n(
            'div',
            { staticClass: 'zone-modal' },
            [
              !e.dataLoaded && e.declarationEditId
                ? n('b-overlay', {
                    staticClass: 'declaration-overlay',
                    attrs: { rounded: 'lg', show: !e.dataLoaded && !!e.declarationEditId },
                  })
                : e._e(),
              n('CloseModalButton', { attrs: { 'on-click': e.closeHistoryModal } }),
              e._m(0),
              n('div', { staticClass: 'table-block' }, [
                n('table', { staticClass: 'table table-striped' }, [
                  e._m(1),
                  n(
                    'tbody',
                    e._l(e.revisions, function (t) {
                      return n('tr', { key: t.id }, [
                        n('td', [e._v(e._s(t.updated_at))]),
                        n(
                          'td',
                          [
                            n(
                              'b-dropdown',
                              {
                                attrs: {
                                  size: 'lg',
                                  variant: 'link',
                                  'toggle-class': 'text-decoration-none',
                                  'no-caret': '',
                                  right: '',
                                },
                                scopedSlots: e._u(
                                  [
                                    {
                                      key: 'button-content',
                                      fn: function () {
                                        return [
                                          n('b-icon-three-dots-vertical'),
                                          n('span', { staticClass: 'sr-only' }, [e._v('User')]),
                                        ];
                                      },
                                      proxy: !0,
                                    },
                                  ],
                                  null,
                                  !0
                                ),
                              },
                              [
                                n(
                                  'b-dropdown-item',
                                  {
                                    attrs: {
                                      href: '/api/declarations/pdf/' + t.id,
                                      target: '_blank',
                                    },
                                  },
                                  [e._v('Pobierz PDF\n                ')]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]);
                    }),
                    0
                  ),
                ]),
              ]),
              n('div', { staticClass: 'buttons-row' }, [
                n(
                  'button',
                  {
                    staticClass: 'btn btn-outline-primary',
                    attrs: { type: 'button' },
                    on: {
                      click: function (t) {
                        return e.closeHistoryModal();
                      },
                    },
                  },
                  [e._v('\n        Zamknij\n      ')]
                ),
              ]),
            ],
            1
          ),
        ]);
      },
      yi = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'header' }, [n('h1', [e._v('Historia deklaracji')])]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('thead', [
            n('tr', [
              n('th', { attrs: { scope: 'col' } }, [
                e._v('Data złożenia edytowanej wersji deklaracji'),
              ]),
              n('th', { attrs: { scope: 'col' } }, [e._v('Edytowana wersja deklaracji')]),
            ]),
          ]);
        },
      ],
      wi = {
        name: 'HistoryModal',
        components: { CloseModalButton: V },
        mixins: [nn],
        data: function () {
          return { dataLoaded: !1, declaration: null, revisions: [] };
        },
        methods: {
          closeHistoryModal: function () {
            this.$store.commit('closeHistoryModal');
          },
        },
        computed: {
          declarationHistoryId: function () {
            return this.$store.state.declarationHistoryId;
          },
        },
        mounted: function () {
          var e = this;
          this.declarationHistoryId &&
            Be.getDeclarationHistoryById(this.declarationHistoryId).then(function (t) {
              (e.declaration = t.data.declaration),
                (e.revisions = t.data.history),
                (e.dataLoaded = !0);
            });
        },
      },
      ki = wi,
      Ci = (n('cb62'), Object(h['a'])(ki, gi, yi, !1, null, 'ff0d116c', null)),
      _i = Ci.exports,
      Ei = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n('div', [
          n('div', { staticClass: 'around-fade' }),
          n(
            'div',
            { staticClass: 'zone-modal' },
            [
              !e.dataLoaded && e.clonedDeclarationId
                ? n('b-overlay', {
                    staticClass: 'declaration-overlay',
                    attrs: { rounded: 'lg', show: !e.dataLoaded && !!e.clonedDeclarationId },
                  })
                : e._e(),
              n('CloseModalButton', { attrs: { 'on-click': e.closeCloneDeclarationModal } }),
              e._m(0),
              null != e.declaration
                ? n('div', [
                    n('div', { staticStyle: { height: '10em', 'overflow-y': 'auto' } }, [
                      n('div', [
                        e._v(
                          'Deklaracja ' +
                            e._s(e.declaration.type) +
                            ' dla budynku ' +
                            e._s(e.declaration.address) +
                            '.'
                        ),
                      ]),
                      n('div', [
                        n('b', [e._v('W deklaracji zostały wskazane następujące źródła ciepła:')]),
                        n(
                          'ul',
                          [
                            e._l(e.declaration.sohs, function (t) {
                              return n('li', { key: t }, [e._v(e._s(t))]);
                            }),
                            0 == e.declaration.sohs.length ? n('li', [e._v('nie podano')]) : e._e(),
                          ],
                          2
                        ),
                      ]),
                      e.declaration.solid_fuel
                        ? n('div', [
                            e._v('\n          klasy kotłów:\n          '),
                            n(
                              'ul',
                              [
                                e._l(e.declaration.sfbccs, function (t) {
                                  return n('li', { key: t }, [e._v(e._s(t))]);
                                }),
                                0 == e.declaration.sfbccs.length
                                  ? n('li', [e._v('nie podano')])
                                  : e._e(),
                              ],
                              2
                            ),
                          ])
                        : e._e(),
                      e.declaration.solid_fuel
                        ? n('div', [
                            e._v('\n          rodzaje paliw:\n          '),
                            n(
                              'ul',
                              [
                                e._l(e.declaration.sfufs, function (t) {
                                  return n('li', { key: t }, [e._v(e._s(t))]);
                                }),
                                0 == e.declaration.sfufs.length
                                  ? n('li', [e._v('nie podano')])
                                  : e._e(),
                              ],
                              2
                            ),
                          ])
                        : e._e(),
                      'B' == e.declaration.type
                        ? n('div', [
                            e._v('\n          typy budynków:\n          '),
                            n(
                              'ul',
                              [
                                e._l(e.declaration.btypes, function (t) {
                                  return n('li', { key: t }, [e._v(e._s(t))]);
                                }),
                                0 == e.declaration.btypes.length
                                  ? n('li', [e._v('nie podano')])
                                  : e._e(),
                              ],
                              2
                            ),
                          ])
                        : e._e(),
                      n('div', [
                        e.declaration.after_01_07_2021
                          ? n('span', [
                              e._v(
                                'Źródło ciepła / spalania paliw uruchomiono po 1 lipca 2021 r. '
                              ),
                            ])
                          : e._e(),
                        e.declaration.after_01_07_2021
                          ? e._e()
                          : n('span', [
                              e._v(
                                'Źródło ciepła / spalania paliw uruchomiono przed 1 lipca 2021 r. '
                              ),
                            ]),
                        'B' == e.declaration.type && e.declaration.special_symbol
                          ? n('span', [
                              e._v(
                                'Symbol / oznaczenie specjalne budynku: ' +
                                  e._s(e.declaration.special_symbol) +
                                  '. '
                              ),
                            ])
                          : e._e(),
                        'A' == e.declaration.type && e.declaration.is_single_family
                          ? n('span', [e._v('Deklaracja dotyczy budynku jednorodzinnego. ')])
                          : e._e(),
                        'A' == e.declaration.type && e.declaration.is_multi_family
                          ? n('span', [
                              e._v(
                                'Deklaracja dotyczy budynku wielorodzinnego. Liczba wszystkich lokali mieszkalnych w budynku wynosi ' +
                                  e._s(e.declaration.multi_family_count) +
                                  '. '
                              ),
                            ])
                          : e._e(),
                        'A' == e.declaration.type && e.declaration.is_temporary
                          ? n('span', [
                              e._v(
                                'Deklaracja dotyczy budynku zbiorowego zamieszkania. Liczba wszystkich lokali mieszkalnych w budynku wynosi ' +
                                  e._s(e.declaration.temporary_count) +
                                  '. '
                              ),
                            ])
                          : e._e(),
                        e.declaration.is_all_premises
                          ? n('span', [e._v('Deklaracja dotyczy wszystkich lokali w budynku. ')])
                          : e._e(),
                        'A' != e.declaration.type || e.declaration.is_all_premises
                          ? e._e()
                          : n('span', [
                              e._v(
                                'Deklaracja dotyczy wybranych lokali w budynku (liczba: ' +
                                  e._s(e.declaration.premises_count) +
                                  ', numery: ' +
                                  e._s(e.declaration.premises_list) +
                                  '). '
                              ),
                            ]),
                        'B' != e.declaration.type || e.declaration.is_all_premises
                          ? e._e()
                          : n('span', [
                              e._v(
                                'Deklaracja dotyczy wybranych lokali w budynku (numery: ' +
                                  e._s(e.declaration.premises_list) +
                                  '). '
                              ),
                            ]),
                      ]),
                    ]),
                    n(
                      'div',
                      { staticClass: 'mt-2' },
                      [
                        e._m(1),
                        n('label', { staticClass: 'mr-3' }, [
                          n('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: e.declarationType,
                                expression: 'declarationType',
                              },
                            ],
                            attrs: { value: 'A', type: 'radio' },
                            domProps: { checked: e._q(e.declarationType, 'A') },
                            on: {
                              change: function (t) {
                                e.declarationType = 'A';
                              },
                            },
                          }),
                          e._v('\n          Budynki i lokale mieszkalne\n        '),
                        ]),
                        n('label', [
                          n('input', {
                            directives: [
                              {
                                name: 'model',
                                rawName: 'v-model',
                                value: e.declarationType,
                                expression: 'declarationType',
                              },
                            ],
                            attrs: { value: 'B', type: 'radio' },
                            domProps: { checked: e._q(e.declarationType, 'B') },
                            on: {
                              change: function (t) {
                                e.declarationType = 'B';
                              },
                            },
                          }),
                          e._v('\n          Budynki i lokale niemieszkalne\n        '),
                        ]),
                        null != e.buildings
                          ? n('b-form-select', {
                              attrs: { options: e.buildingsFormatted, 'select-size': 4 },
                              model: {
                                value: e.buildingData,
                                callback: function (t) {
                                  e.buildingData = t;
                                },
                                expression: 'buildingData',
                              },
                            })
                          : e._e(),
                        null == e.buildings
                          ? n('b-form-select', {
                              attrs: {
                                disabled: 'disabled',
                                options: [{ value: -1, text: 'Wczytuję budynki...' }],
                                'select-size': 4,
                              },
                            })
                          : e._e(),
                        n('b-form-input', {
                          staticClass: 'mt-1',
                          attrs: { placeholder: 'Wyszukaj budynek' },
                          model: {
                            value: e.search,
                            callback: function (t) {
                              e.search = t;
                            },
                            expression: 'search',
                          },
                        }),
                      ],
                      1
                    ),
                  ])
                : e._e(),
              n('div', { staticClass: 'buttons-row' }, [
                n(
                  'button',
                  {
                    staticClass: 'btn btn-outline-primary',
                    staticStyle: { float: 'left' },
                    attrs: { type: 'button' },
                    on: { click: e.openBuildingsModal },
                  },
                  [e._v('\n        Dodaj budynek\n      ')]
                ),
                n(
                  'button',
                  {
                    staticClass: 'btn btn-outline-primary',
                    attrs: { type: 'button' },
                    on: {
                      click: function (t) {
                        return e.closeCloneDeclarationModal();
                      },
                    },
                  },
                  [e._v('\n        Zamknij\n      ')]
                ),
                n(
                  'button',
                  {
                    staticClass: 'btn btn-primary',
                    attrs: {
                      type: 'button',
                      disabled:
                        '' == e.buildingData ||
                        null == e.declaration ||
                        e.declaration.type != e.declarationType,
                    },
                    on: {
                      click: function (t) {
                        return e.cloneFinal();
                      },
                    },
                  },
                  [e._v('\n        Złóż (edycja dekl.)\n      ')]
                ),
                n(
                  'button',
                  {
                    staticClass: 'btn btn-primary',
                    attrs: {
                      type: 'button',
                      disabled:
                        '' == e.buildingData ||
                        null == e.declaration ||
                        e.declaration.type != e.declarationType,
                    },
                    on: {
                      click: function (t) {
                        return e.cloneQuick();
                      },
                    },
                  },
                  [e._v('\n        Złóż\n      ')]
                ),
              ]),
            ],
            1
          ),
        ]);
      },
      Di = [
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', { staticClass: 'header' }, [
            n('h1', [e._v('Powiel deklarację do nowego budynku')]),
          ]);
        },
        function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n('div', [n('b', [e._v('Wskaż budynek do kopiowanej deklaracji:')])]);
        },
      ],
      xi =
        (n('386d'),
        {
          name: 'CloneDeclarationModal',
          components: { CloseModalButton: V },
          mixins: [nn],
          data: function () {
            return {
              dataLoaded: !1,
              declaration: null,
              declarationType: 'A',
              buildings: null,
              buildingData: '',
              search: '',
            };
          },
          methods: {
            closeCloneDeclarationModal: function () {
              this.$store.commit('closeCloneDeclarationModal');
            },
            cloneFinal: function () {
              (this.buildingData.declarationType = this.declarationType),
                this.$store.commit('setDeclarationBuilding', this.buildingData),
                this.$store.commit(
                  'setDeclarationClonedFinalId',
                  this.$store.state.clonedDeclarationId
                ),
                this.$store.commit('closeCloneDeclarationModal'),
                this.$store.commit('openDeclarationModal');
            },
            cloneQuick: function () {
              var e = this;
              Be.cloneDeclaration(this.$store.state.clonedDeclarationId, this.buildingData.id).then(
                function (t) {
                  e.$store.commit('closeCloneDeclarationModal'),
                    e.$store.commit('updateDeclarationsList'),
                    e.$notify({
                      group: 'zone',
                      type: 'success',
                      title: 'Sukces',
                      text: 'Złożono deklarację dla nowego budynku',
                    });
                }
              );
            },
            openBuildingsModal: function () {
              this.$store.commit('openBuildingsModal');
            },
            loadBuildings: function () {
              var e = this;
              return (
                (this.buildings = null),
                de.a.get('/api/locations/buildings').then(function (t) {
                  e.buildings = t.data;
                })
              );
            },
            performAddressSearch: le.a.debounce(function () {
              var e = this,
                t = this.search.trim();
              if (((this.buildings = null), !t.length))
                return de.a.get('/api/locations/buildings').then(function (t) {
                  e.buildings = t.data;
                });
              O.getUserBuildings(0, -1, -1, !1, t).then(function (t) {
                return (e.buildings = t.data);
              });
            }, 500),
          },
          computed: {
            clonedDeclarationId: function () {
              return this.$store.state.clonedDeclarationId;
            },
            buildingsFormatted: function () {
              var e = [];
              return (
                null !== this.buildings &&
                  this.buildings.forEach(function (t) {
                    e.push({ value: t, text: t.formatted_address });
                  }),
                e
              );
            },
          },
          mounted: function () {
            var e = this;
            this.clonedDeclarationId &&
              Be.getDeclarationSummaryById(this.clonedDeclarationId).then(function (t) {
                return (e.declaration = t.data), (e.dataLoaded = !0), e.loadBuildings();
              });
            var t = this;
            this.$root.$on('reloadBuildingsIfNeeded', function () {
              t.loadBuildings();
            });
          },
          watch: {
            search: function () {
              this.performAddressSearch();
            },
          },
        }),
      zi = xi,
      Bi = (n('4c67'), Object(h['a'])(zi, Ei, Di, !1, null, '6e5993d1', null)),
      ji = Bi.exports,
      Si = {
        name: 'Navbar',
        components: {
          DeclarationModal: vi,
          ZoneIcon: Vt,
          HistoryModal: _i,
          EditAccountModal: Ot,
          CloneDeclarationModal: ji,
        },
        data: function () {
          return {
            newDeclarationModal: !1,
            userActionsModal: !1,
            declarationType: 'A',
            buildings: [],
            buildingData: null,
          };
        },
        computed: {
          route: function () {
            return this.$route.name;
          },
          showAccountModal: function () {
            return this.$store.state.showAccountModal;
          },
          showDeclarationModal: function () {
            return this.$store.state.showDeclarationModal;
          },
          showHistoryModal: function () {
            return this.$store.state.showHistoryModal;
          },
          showCloneDeclarationModal: function () {
            return this.$store.state.showCloneDeclarationModal;
          },
          currentUserData: function () {
            return this.$store.state.currentUserData;
          },
          isUserLogged: function () {
            return (
              this.$store.state.currentUserData &&
              'pesel' in this.$store.state.currentUserData &&
              this.$store.state.currentUserData.pesel
            );
          },
          buildingsFormatted: function () {
            var e = [];
            return (
              null !== this.buildings &&
                this.buildings.forEach(function (t) {
                  e.push({ value: t, text: t.formatted_address });
                }),
              e
            );
          },
          declarationVerification: function () {
            return this.$store.state.declarationVerification;
          },
          declarationVerificationFull: function () {
            return this.$store.state.declarationVerificationFull;
          },
        },
        methods: {
          openNewDeclarationModal: (function () {
            var e = Object(E['a'])(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), this.getBuildings();
                        case 2:
                          this.newDeclarationModal = !0;
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          getBuildings: function () {
            var e = this;
            return (
              (this.buildings = null),
              O.getUserBuildings().then(function (t) {
                return (e.buildings = t.data);
              })
            );
          },
          openDeclarationModal: function () {
            (this.buildingData.declarationType = this.declarationType),
              this.$store.commit('setDeclarationBuilding', this.buildingData),
              this.$store.commit('openDeclarationModal'),
              (this.newDeclarationModal = !1);
          },
          openAccountModal: function () {
            (this.userActionsModal = !1), this.$store.commit('openAccountModal');
          },
          openBuildingsModal: function () {
            (this.userActionsModal = !1), this.$store.commit('openBuildingsModal');
          },
          openUserActionsDropdown: function () {
            this.userActionsModal = !0;
          },
          closeUserActionsDropdown: function (e) {
            (this.$el.contains(e.target) && !Array.from(this.$el.children).includes(e.target)) ||
              (this.userActionsModal = !1);
          },
          closeDeclarationVerification: function () {
            this.$store.commit('setDeclarationVerification', null);
          },
          closeDeclarationVerificationFull: function () {
            this.$store.commit('setDeclarationVerificationFull', null);
          },
          showNoBuilding: function () {
            0 == this.buildings.length
              ? this.$notify({
                  group: 'zone',
                  type: 'error',
                  title: 'Błąd',
                  text: 'Aby dodać deklarację, najpierw dodaj budynek w zakładce Budynki.',
                })
              : this.$notify({
                  group: 'zone',
                  type: 'error',
                  title: 'Błąd',
                  text: 'Wybierz adres, dla którego chcesz złożyć deklarację.',
                });
          },
          logout: (function () {
            var e = Object(E['a'])(
              regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), Nt.logout();
                        case 3:
                          (t = e.sent),
                            setTimeout(function () {
                              return document.getElementById('redirect_to_logout_page').click();
                            }, 1e3),
                            (document.body.innerHTML = t.data);
                        case 6:
                          return (e.prev = 6), (this.userActionsModal = !1), e.finish(6);
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[0, , 6, 9]]
                );
              })
            );
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
        watch: {
          route: function (e, t) {
            'declarations' === t && (this.newDeclarationModal = !1);
          },
        },
        mounted: function () {
          document.addEventListener('click', this.closeUserActionsDropdown);
        },
        beforeDestroy: function () {
          document.removeEventListener('click', this.closeUserActionsDropdown);
        },
      },
      Ni = Si,
      Ii = (n('9fc6'), Object(h['a'])(Ni, Bt, jt, !1, null, '356dde54', null)),
      Mi = Ii.exports,
      Gi = {
        name: 'App',
        components: { Navbar: Mi, Sidebar: zt },
        data: function () {
          return { version: 'pobieranie informacji' };
        },
        methods: {
          getCurrentUser: function () {
            return Nt.getCurrentUser();
          },
        },
        mounted: function () {
          var e = this;
          'verify' != this.$route.name &&
            'verifyfull' != this.$route.name &&
            this.getCurrentUser()
              .then(function (t) {
                (e.version = t.data.app_version), e.$store.commit('setCurrentUserData', t.data);
              })
              .catch(function () {
                return (window.location.href = 'https://ceeb.gov.pl/');
              });
        },
      },
      Ti = Gi,
      Qi = (n('034f'), Object(h['a'])(Ti, wt, kt, !1, null, null, null)),
      Oi = Qi.exports,
      Pi = n('b6d0'),
      Fi = n('9483');
    Object(Fi['a'])(''.concat('/', 'service-worker.js'), {
      ready: function () {
        console.log(
          'App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB'
        );
      },
      cached: function () {
        console.log('Content has been cached for offline use.');
      },
      updated: function () {
        console.log('New content is available; please refresh.');
      },
      offline: function () {
        console.log('No internet connection found. App is running in offline mode.');
      },
      error: function (e) {
        console.error('Error during service worker registration:', e);
      },
    });
    n('f9e3'), n('2dd8'), n('f63e'), n('db43');
    (de.a.defaults.xsrfCookieName = 'csrftoken'),
      (de.a.defaults.xsrfHeaderName = 'X-CSRFToken'),
      (i['default'].config.productionTip = !1),
      i['default'].use(gt['a']),
      i['default'].use(yt['a']),
      i['default'].use(vt.a),
      i['default'].use(Pi['a']),
      new i['default']({
        router: bt,
        store: o,
        render: function (e) {
          return e(Oi);
        },
      }).$mount('#app');
  },
  '5a7b': function (e, t, n) {
    'use strict';
    n('7bd8');
  },
  '5bfb': function (e, t, n) {
    'use strict';
    n('ffd9');
  },
  '5d00': function (e, t, n) {},
  '60c9': function (e, t, n) {},
  '62b3': function (e, t) {
    e.exports =
      'data:image/png;base64,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';
  },
  6330: function (e, t, n) {
    e.exports = n.p + 'img/apple-touch-icon-180x180.c43cd371.png';
  },
  '64a9': function (e, t, n) {},
  '64aa': function (e, t) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB1FBMVEX////8/v38/f38/P39/f2c2byDz6yF0K2EyKp/lZl+iZZ+ipZ9iZWKlKDn6eu4489UvYxNuodIhnZDVGaao63+/v73/PqI0a9Nu4dMr4RFZ2xDU2ZUY3TW2t3W7+NcwJFJlHtDVmeDjpr4+fqd2b1NtYVGcnBKW2zCx83m9e5pxZpKoH5EWmhufInw8fJoxZmz4sxPu4hNuYdHfnREVWers7vy+vZ5y6VLqYJEYWpebHzi5ejI6tpVvY1Ii3iUnqj7+/v6/fyN07JMsYRFam1TY3OkrLXb8edfwZNKl3xDV2dIWWr+//+j28FNtoZGdXHp9/BsxpxLon9EXGm45M9Qu4lHgXX1+/h+zahMrIJEY2vN7N5Xvo5JjnlDVWaT1bZMs4VFbW7f8+liwpVKmn1DWGeo3cVOuodNt4ZHeHLt+PNxyJ9LpYBEXmm+5tNSvIpIhXb3/PlMroNFZmzS7uFav5BJkXr9/v6Y17pMtIVGcG9DUWXj9OxmxJhKnX5EX2qv4MlOu4hKnH3w+fV1yqLE6Nf5/fuJ0a/X8ORdwJKf2r7n9u9qxZq04s3y+vd6zKbJ6ttWvo2P07NgwZSk3MLq9/Fux5265NBRvIqAzqnO7N5jw5Y2qgnhAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+EBEwcLLLpjEOsAAAKZSURBVEjH7dXlX1phFAfwo1OmzkLEunY7Y3bHMIY6uzCxuztmzu7O/bNTOD8GE4TLy83zinvO8/387uV5LhC9139UNijbD1x2elM7NG116/SxveSjthwcnT69lLOLq27o6uKs6Tk5OvAqib0+dnOXcnnIuDzlPJN7ouWBRe5u+tjLm9s+vn6CdqV/AM8C/LUNwc/Xh1d5exk8dGAQdHAI54SGaSZhoXwdEgwbFGj4jcnDcUsRkRwdFa2ZREdxcGQEloTLDTHFfEZ0bBxHxSc89xPi+SouFsFfYl7tVmISz5JTODo17bmdlsrBKck8T0p8vdXpGYjOzGKdnUM52WyzMhGckW7koOTmQedjbwq+FuBjPmxerrFTpigELirm6JJvJRxcXARcqDB6RpWl0GXl/NTf+YnLy2BLlcYPeEUl9qKqWpDpl1BdhVFlhYnXo6YW0XX1+lqor0NwbY3Jl6uhEQFNBrgJ7cYGk5ZUzYhuaf2jhdYWBDerTGNqa4fuUOuwugO2ve0NSzadwF3diBa6u4A7bd7C1NML3dfPuL8PtreH3q6BQV45NKyNFoaHuDM4YMbSyCiix8ZftDA+huDREXOYJiaxL1MaPIXLyQmzlqYliJ6ZFWTC7AyCJdPmMc3NQy+oZeoF2Pk5CywtLuFGl1d+rCzjYmnREkyra4he31hH8NqqRZZocwvb9RPbtLVpoaXtHdwrcqU725Zi2tX9gXC571psaW//L7y/Zzmmg0MDe3ggwpL8yAAfycVgOj7RsyfHoizRqe4XSdp4KtLS2bkOn5+JxXRxyfbyQrQlxRXjK4V4TMprjb1WWmGJbjT4xipLt3fP9u7WOkz3D9KHeystqR6ljyprMT39erLa0t6TmLfpvf7R+g2aJZhkHyISeQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMS0xOVQwNzoxMTo0NCswMTowMAkZ22AAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDEtMTlUMDc6MTE6NDQrMDE6MDB4RGPcAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC';
  },
  '68cc': function (e, t) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAACXBIWXMAAOK7AADiuwGjADGRAAADxElEQVR4nO3d4U1bVxjH4TdWvjeZIGyANyiZoHSCuBtkg8IGzQZhgrJB8QYwQfEGZAKqGx1XjmVyj4PtP62fR7IUKRcsDj+d43v58L56fHysDuftNa2q054v4GjNq+q2qq6r6mZsEcYCnFXVRVW90xM/YNH6+fzUlz4V4LR9kd2OXZi3zex+/XttCvC8xfeTpWeHvrS2vjmW1wMcLvjTqrNH71cjXA1w2v7Dzsc+DTvhWbtR+SbAW5/5OJC7tuHVpL3fTHwc0Glr7t8d8N6jFg5seERzMmk3Hr3xDVvnr0O4O3hddrzf5Y7e65hfh1rnt1X1Wwurx9Dc+aR9IOxx1c7ta1sFGzy0x3fT1kqP7gDvlmc2jHhordx1LNR00nnzcWHV2dIfHZefTjouKscuP+DJv/+u6g0Q9kKARAmQKAESJUCiBEiUAIkSIFECJEqARAmQKAESJUCiBEiUAIkSIFECJEqARAmQKAESJUCiBEiUAIkSIFECJEqARAmQKAESJUCiBEiUAIkSIFECJEqARAmQKAESNUxK6hqZzv/aYtMs3x34eexbCJAoRzBRAiRKgEQJkCgBEiVAogRI1OvON3/v1/TVMAf3w8g1V72TIo/AX2M/Ym+AN8e+kk3PcO9769XPEUyUAIkSIFECJEqARAmQKAESJUCiBEiUAIkSIFECJEqARAmQKAESJUCiBEiUAIkSIFECJEqARAmQKAESJUCiBEiUAIkSIFECJEqARAmQKAESJUCiBEiUAIkSIFECJEqARAmQKAES1Tuweu7X9NVJVb0buWZf08f/i0xM52VzBBMlQKIESJQAiRIgUQIkSoBEJSemmz5+GMl1ftET000fP4wXvc6OYKIESJQAiRIgUQIkSoBECZAoARIlQKIESJQAiRIgUQIkSoBECZAoARIlQKIESJQAiRIgUQIkSoBECZAoARIlQKIESJQAiRIgUQIkSoBECZAoARIlQKIESJQAieoN8MSviS1Ney7vDXBm9dnSx47LF5POWcC/9xYNVXXeMRpicDsEeN25YjedVXPcPm4xc+R6GFg9fL77e4slW7QYnzsV/KxjovbcnJBnO9Q6v2k739hE+VVvX7WB6Z87t0zYlWE602wZ4La7IDzHl3ZPcb+8Cx6O00tLyoFcLD/CLXfAJUcx+3a1+lhv/TngrF0A+3C1/kx504Po4YJPlp8d+7TpDxrrR/Cqs3Ykb3NbDesWLbyNj3m+F+DSrD3f+cXSsoV528C++1C6J8ClN+3Wedr+DZsMO91tVT2Mrk5V/QPrxKE26TvJawAAAABJRU5ErkJggg==';
  },
  6968: function (e, t, n) {
    e.exports = n.p + 'img/User.38ab562b.png';
  },
  '6d33': function (e, t, n) {
    'use strict';
    n('4f7c');
  },
  '6f31': function (e, t, n) {
    'use strict';
    n('bce1');
  },
  '72a3': function (e, t) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAASFBMVEVHcExkZWZfdGxbiXRqVmBpW2JEVGZmYmVmZ2ZPs4RWm3tNsYRKmnxOW2ZTfHBDRmFNuodDVGZLzI1LwopBQWA/TmVFam1HgnWN0q7DAAAAEHRSTlMAYIatKEDoGAvq0fz+tsjpW0W6gAAAA9NJREFUeNrtmuuSmzAMhYODYwjJLMaw+/5vWtqmuSJZlmTDTNFvLkKcL+do2cNhr7322muvvVKrcZyKXZV10ebvqS1SXyegKryfCjrv64Lc7faYxyFANXyPfrGmEzojd5qWzxu/kZsdbyfbduiBGroJuPJksIYMdNbUwfdqrbtpyIAH9cMPNCJfw/1YD9T4g9zK3DQ0j+gMHhZ6D3V0hRu6Qi/MzxeE+jlbd8fMBPi4C9CQn0BdVxM0oAv85OE+oHlENTKiAOu6AX5HYEUjD36u3dMvUdVxRmTSFO0nZEBd5Z6er6mPiNigEfll9DHk4Zsc65d5M9G/pigaQz601r3Zhwnp6Htv1ZF/jAjTdQr64IB8oCD/pGsd9HnIV+6DWMfUdUNGHlX0Ah4o+t1ItDTQxMYORX7p5wwdEdHSaj8xFP2GPAX92dJI6MOKRkystQ5IjpilkdDnIP9iYu+6lqIPuzzRxD7Q70Xos5DvK2hAXEu7p1kVE3tHvw38NGtYJlY5dCMSpFke8sY16LaAp1kUfRbyZ+siSyMvzc7oW2lu5aCPWJo8tyqjr468NM2evDbysjQLFWlVjb00Dvo6uZWFflJHowR5IfoZkCehD+sa+OOLAHnhIrukaPKqKkGfrmtObs2J/ox8IK+qcV3LR6SBvGyRFa2qUV2L0U9dVWPosyxNtKpGOmItsqJVNS/6esjLFlnRqiqxtNiIeKtqljSrkVtV06xKblVNsyq5FRgR09IUcqtumtU0MZVFViO3aqZZndyqh34W5CXo50Gej34m5NlpNhvyXPTzIc9Ls6NmbtVIs7q5VZ5mtXMrK82+NKScW6VpVj+3ctLsA/1p6rVWVZ1FFhtQME5tQNTPMpPPaGIcS8trYunol0Gehv5vXaOfWPSQp6NfCnnqIpthVZWl2Zy5lYV+OeSJ6BdEnqTrEIoqOr7IwpVF0YQ0mzm3pqfZzLmVgX5R5CnoF0WehH5R5Enol0SeZGlFkeehn1fR6ehnRZ60yGZaVQVpNnNuTU+zmXOrDP38yKehH1pbZkBESwslkE+xtMwmlmxp2U0sFf1SyD/Qx3U9tFXRfqKWNpiSLyyO/lAOeRL6RZGnoF8UeQL6hZGPW1o5E6MtsqG8onH0B7PGC4PTbJHcmoD+Kshj6K+CPJJmk/4bsAT6KyEPWtrQWrdmPx+fZdZU9BL6KyK/aGkrmRicZkvn1hj6xVZVKvprI/+OfmjtFgb0QH995F8tbV0T+0R/E8g/63oriv6XZvveusNhQx0Zs50X9qchV29pQHNHTXPYa6+99trr/6hf3IYHk2ZFEpsAAAAASUVORK5CYII=';
  },
  '72c3': function (e, t) {
    e.exports =
      'data:image/png;base64,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';
  },
  '7bd8': function (e, t, n) {},
  '7de7': function (e, t) {
    e.exports =
      'data:image/png;base64,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';
  },
  '82b7': function (e, t) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAvVBMVEVDVGZDU2ZNuocAAABNuodNuIZFbW5DUmVDVGZDVGZNuodNuodNu4dIiHdDU2ZDVGZDVGZNuodNuodDVGZDVGZNuodNuodDVGZNuodNuodDVGZNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNu4dMrIJFZGtDU2ZNuodJj3lDVWZDVGZMs4VGbm5KnH1DWWdNuIZHeXJLpoFEXmlIhnb///8PseVQAAAALXRSTlMAAAAAGRkZGRgHntbU1NTUZEzs1iEEkowo3PR0/RbFVfUKqjrpAosja/wSwUXj0OCMAAAAAWJLR0Q+SWQA4wAAAAd0SU1FB+EBEwcLNkcB6ZEAAADDSURBVBjTTczZGoFgFIXhbf2ZyjxkiIyh2PybQob7vy0pHtbZ9x4sMox8oVgqE5VLxULeMMi0KtVavZHLNeq1asUyqdni/UG3O522Puy51aSuLXw8hb1eeDqy2F1Cf8DRWQ+H+hzxoA8CnBFfrmF4vfDIAUhh7Ep80/oWizuGSgCTKd8fjztPJ3iDwmwu8nyKzGdQKWCxlCiS5QIZKHgrSbbykk5BYW2JWOt3fwAb39/gBwrBdhuk/QXsdviH5NfLWr0AFW4V19jFRh0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDEtMTlUMDc6MTE6NTQrMDE6MDDFs9v+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTAxLTE5VDA3OjExOjU0KzAxOjAwtO5jQgAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg==';
  },
  8696: function (e, t, n) {
    'use strict';
    n('213c');
  },
  '87de': function (e, t, n) {},
  8940: function (e, t) {
    e.exports =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABX1BMVEUAAABDVGZDVWZEWmhNuodNuodNuodNu4dHe3NDUGVDVGZDVGZNuodNuodNuodNu4dKl3xDVmdDVGZDVGZDVGZDV2dNuodNuodDVGZDVGZNuodDVGZDVWZNuodNuodDVGZDVGZNuodNuodDVGZDVWZNuodNuodDVGZDVGZNuodNuodDVGZNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodNuodMs4VGbm5DU2ZDVGZNu4dKnH1DWWhNuIZHenJLpoFEXmlIhnZMr4NFZ2xJk3pDVmdMtYVGcW9Kn35EWmhNuYdHfXNLqYFEYGpIindMsYRFaW1KlntNtoZGc3D///80Gyx5AAAAVXRSTlMAAAAAAA8ODg4ODgWby8rKysrKzHUBVO/kMwahBy7h8k18/r4RG8z7aV344gyyQe0Dk5Qp3HT9FsVV9QqqOukCiyPWa/wSvk3zB6Iz5AGDHtBj+ro9K3OttgAAAAFiS0dEdN9tqG0AAAAHdElNRQfhARMHCzcwBtkHAAAB0UlEQVQ4y4WRV1PCQBRGN7BYERTsItgVUbGioIBdQbFBJLGBJTYQC/9/xvttxBrwvrB7z5mzmYGx/8ZSRVNdU1tHUy9hI9XjXFtTDWJh1gabzWZvbHI4HM7mFhNjppZmJ12aGu0EGqystU2mOU4rqqq2d0hms9TRTkclfYx9WyvrtOJwcnpGW7XLZTK5unA6Oz3B3trJeLcbp/MLJDw9ktTjQeDiHFt3N2ec9/YhkcnC6B8Y6AfPZhDo6+WcMT44BFm+RHl4ZGQYv5diNTRInBLeUSSurpHw+RC4vkJg1IsAGWPj4jtvNPVjtBvxheNjglNiwo/77Z2ic+XuFnf/hB4gY3JKJO4fdOHhXgSmJz84JWZmsXnMiYSSe8RtdqYUgDEXQCL/RIbylEcgMPfFyZhfEI8UUCiIBxbmv3FKBEMQnl8U5eUZQij4PUDG4pJIvGraqwgsLf7glAhHsH8rFt/wGwn/DJARXRaJjPgT5OXoL07Gyqr8Oasrfzg9srZe4utr/K/A+MZmSdjcMOCU2NrW+faWUYCMWFwX4jFDTomdXfDdHeMAGYk9CHuJMpyM/QNZPtgvy+mRw6OjQ15eYNySTFoqcEqkUpUC+M5ERW4w71W/kp5XGaMqAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTAxLTE5VDA3OjExOjU1KzAxOjAwY8TQSgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wMS0xOVQwNzoxMTo1NSswMTowMBKZaPYAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=';
  },
  '8e9a': function (e, t, n) {},
  '8f6a': function (e, t, n) {
    e.exports = n.p + 'img/mstile-150x150.058a3335.png';
  },
  9071: function (e, t, n) {},
  '9a11': function (e, t, n) {
    'use strict';
    n('a163');
  },
  '9a4d': function (e, t, n) {
    'use strict';
    n('16ca');
  },
  '9a9f': function (e, t, n) {
    'use strict';
    n('fabb');
  },
  '9c54': function (e, t, n) {},
  '9ede': function (e, t) {
    e.exports =
      'data:image/png;base64,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';
  },
  '9fc6': function (e, t, n) {
    'use strict';
    n('a246');
  },
  a163: function (e, t, n) {},
  a246: function (e, t, n) {},
  a692: function (e, t, n) {
    'use strict';
    n('05f9');
  },
  a8f4: function (e, t, n) {
    'use strict';
    n('60c9');
  },
  addb: function (e, t, n) {},
  adf3: function (e, t, n) {},
  b03e: function (e, t, n) {},
  b21a: function (e, t, n) {
    'use strict';
    n('87de');
  },
  bac8: function (e, t, n) {},
  bce1: function (e, t, n) {},
  c7f2: function (e, t) {
    e.exports =
      'data:image/png;base64,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';
  },
  c824: function (e, t, n) {},
  cb62: function (e, t, n) {
    'use strict';
    n('c824');
  },
  d5a1: function (e, t, n) {
    e.exports = n.p + 'img/android-chrome-512x512.0ff1bc4d.png';
  },
  daa2: function (e, t) {
    e.exports =
      'data:image/png;base64,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';
  },
  dac9: function (e, t, n) {
    'use strict';
    n('bac8');
  },
  db43: function (e, t, n) {},
  ddcf: function (e, t, n) {
    'use strict';
    n('adf3');
  },
  def5: function (e, t, n) {},
  e5d6: function (e, t, n) {
    'use strict';
    n('f18a');
  },
  edab: function (e, t, n) {
    'use strict';
    n('9c54');
  },
  ee2a: function (e, t, n) {},
  f18a: function (e, t, n) {},
  f28e: function (e, t, n) {
    'use strict';
    n('ee2a');
  },
  f63e: function (e, t, n) {},
  f691: function (e, t, n) {
    'use strict';
    n('1e64');
  },
  f6cc: function (e, t, n) {
    'use strict';
    n('32e0');
  },
  fa03: function (e, t, n) {
    'use strict';
    n('def5');
  },
  fabb: function (e, t, n) {},
  ffd9: function (e, t, n) {},
});
//# sourceMappingURL=app.7797afba.js.map
