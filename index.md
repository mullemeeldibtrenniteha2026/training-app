# Iteratsioon 2A — selector mapping

Baasfail: `index_iter2_restart_from_stable.html`

Selle sammu eesmärk oli **mitte midagi kustutada**, vaid kaardistada duplikaadid ja määrata iga olulisema selector'i aktiivne lõppversioon.

## Tööreegel

- `active` = **viimane** sama selector'i definitsioon failis

- varasemad definitsioonid = potentsiaalne cleanup siht järgmises sammus

- selles iteratsioonis ei tehta veel kustutamist

## Kaardistus

### `.topbar`

- found: **14**

- active: **line 1916**

- earlier duplicates: 63 (Typography system), 268 (Typography system), 373 (Typography system), 539 (V12.9.1 calendar + radar premium polish), 728 (V12.4 safe polish overrides), 968 (V12.4 safe polish overrides), 1474 (Patch 2.6 — clean spacing system + restore metrics chunk), 1609 (PATCH 2.6.1 — unified layout system), 1635 (PATCH 2.6.1 — unified layout system), 1641 (PATCH 2.6.1 — unified layout system), 1669 (2.7 design system lock), 1800 (2.7 design system lock), 1834 (2.7.1 header + top area polish)

- active section: 2.7.1 header + top area polish

- cleanup status: **safe candidate for Iteration 2B review**


### `.brand-title`

- found: **18**

- active: **line 2167**

- earlier duplicates: 75 (Typography system), 273 (Typography system), 387 (Typography system), 1269 (Patch 2.5.4 header + section title alignment), 1342 (Patch 2.5.4 header + section title alignment), 1615 (PATCH 2.6.1 — unified layout system), 1645 (PATCH 2.6.1 — unified layout system), 1852 (2.7.1 header + top area polish), 1919 (2.7.1 header + top area polish), 1928 (2.7.1 header + top area polish), 1940 (patch 2.7.2 header polish), 1946 (patch 2.7.2 header polish), 1962 (patch 2.7.3 header + radar polish), 1990 (patch 2.7.3 header + radar polish), 2001 (patch 2.7.3 header + radar polish), 2013 (2.7.4 Typography system lock), 2065 (Patch 2.8 — typography polish system)

- active section: Patch 2.8 — typography polish system

- cleanup status: **safe candidate for Iteration 2B review**


### `.brand-subtitle`

- found: **18**

- active: **line 2168**

- earlier duplicates: 76 (Typography system), 274 (Typography system), 388 (Typography system), 1270 (Patch 2.5.4 header + section title alignment), 1343 (Patch 2.5.4 header + section title alignment), 1616 (PATCH 2.6.1 — unified layout system), 1646 (PATCH 2.6.1 — unified layout system), 1857 (2.7.1 header + top area polish), 1920 (2.7.1 header + top area polish), 1929 (2.7.1 header + top area polish), 1941 (patch 2.7.2 header polish), 1947 (patch 2.7.2 header polish), 1963 (patch 2.7.3 header + radar polish), 1991 (patch 2.7.3 header + radar polish), 2002 (patch 2.7.3 header + radar polish), 2014 (2.7.4 Typography system lock), 2071 (Patch 2.8 — typography polish system)

- active section: Patch 2.8 — typography polish system

- cleanup status: **safe candidate for Iteration 2B review**


### `.header-meta`

- found: **14**

- active: **line 1993**

- earlier duplicates: 340 (Typography system), 753 (V12.4 safe polish overrides), 1063 (Patch 2.1 — cleaner headers and hidden helper copy), 1272 (Patch 2.5.4 header + section title alignment), 1345 (Patch 2.5.4 header + section title alignment), 1619 (PATCH 2.6.1 — unified layout system), 1648 (PATCH 2.6.1 — unified layout system), 1687 (2.7 design system lock), 1879 (2.7.1 header + top area polish), 1922 (2.7.1 header + top area polish), 1942 (patch 2.7.2 header polish), 1948 (patch 2.7.2 header polish), 1967 (patch 2.7.3 header + radar polish)

- active section: patch 2.7.3 header + radar polish

- cleanup status: **safe candidate for Iteration 2B review**


### `.header-actions`

- found: **5**

- active: **line 1965**

- earlier duplicates: 275 (Typography system), 354 (Typography system), 750 (V12.4 safe polish overrides), 1871 (2.7.1 header + top area polish)

- active section: patch 2.7.3 header + radar polish

- cleanup status: **safe candidate for Iteration 2B review**


### `#workoutModeBtn`

- found: **12**

- active: **line 1995**

- earlier duplicates: 277 (Typography system), 378 (Typography system), 1285 (Patch 2.5.4 header + section title alignment), 1354 (Patch 2.5.4 header + section title alignment), 1618 (PATCH 2.6.1 — unified layout system), 1872 (2.7.1 header + top area polish), 1924 (2.7.1 header + top area polish), 1931 (2.7.1 header + top area polish), 1944 (patch 2.7.2 header polish), 1950 (patch 2.7.2 header polish), 1966 (patch 2.7.3 header + radar polish)

- active section: patch 2.7.3 header + radar polish

- cleanup status: **safe candidate for Iteration 2B review**


### `.compact-search-card`

- found: **2**

- active: **line 818**

- earlier duplicates: 342 (Typography system)

- active section: V12.4 safe polish overrides

- cleanup status: **safe candidate for Iteration 2B review**


### `.add-grid`

- found: **14**

- active: **line 1820**

- earlier duplicates: 126 (Typography system), 177 (Typography system), 406 (Typography system), 550 (V12.9.1 calendar + radar premium polish), 836 (V12.4 safe polish overrides), 1319 (Patch 2.5.4 header + section title alignment), 1389 (Patch 2.5.5 — unified spacing, refined header, cleaner radar), 1446 (Patch 2.5.5 — unified spacing, refined header, cleaner radar), 1543 (keep add exercise fields truly equal), 1590 (mobile spacing), 1629 (PATCH 2.6.1 — unified layout system), 1651 (PATCH 2.6.1 — unified layout system), 1747 (2.7 design system lock)

- active section: 2.7 design system lock

- cleanup status: **safe candidate for Iteration 2B review**


### `#radarTitle`

- found: **16**

- active: **line 2174**

- earlier duplicates: 334 (Typography system), 362 (Typography system), 402 (Typography system), 475 (V12.9.1 calendar + radar premium polish), 1087 (Patch 2.1 — cleaner headers and hidden helper copy), 1146 (Patch 2.1 — cleaner headers and hidden helper copy), 1171 (Patch 2.2 polish), 1178 (Patch 2.2 polish), 1236 (Patch 2.2.1 — unify Search header with Muscular Radar and center radar toggle), 1304 (Patch 2.5.4 header + section title alignment), 1361 (Patch 2.5.4 header + section title alignment), 1905 (2.7.1 header + top area polish), 1970 (patch 2.7.3 header + radar polish), 1996 (patch 2.7.3 header + radar polish), 2084 (Patch 2.8 — typography polish system)

- active section: Patch 2.8 — typography polish system

- cleanup status: **safe candidate for Iteration 2B review**


### `.radar-header-actions`

- found: **11**

- active: **line 1982**

- earlier duplicates: 335 (Typography system), 356 (Typography system), 403 (Typography system), 482 (V12.9.1 calendar + radar premium polish), 1096 (Patch 2.1 — cleaner headers and hidden helper copy), 1173 (Patch 2.2 polish), 1213 (Patch 2.2.1 — unify Search header with Muscular Radar and center radar toggle), 1331 (Patch 2.5.4 header + section title alignment), 1911 (2.7.1 header + top area polish), 1971 (patch 2.7.3 header + radar polish)

- active section: patch 2.7.3 header + radar polish

- cleanup status: **safe candidate for Iteration 2B review**


### `.metrics`

- found: **14**

- active: **line 1804**

- earlier duplicates: 86 (Typography system), 171 (Typography system), 182 (Typography system), 534 (V12.9.1 calendar + radar premium polish), 544 (V12.9.1 calendar + radar premium polish), 764 (V12.4 safe polish overrides), 978 (V12.4 safe polish overrides), 1482 (Patch 2.6 — clean spacing system + restore metrics chunk), 1561 (mobile spacing), 1622 (PATCH 2.6.1 — unified layout system), 1649 (PATCH 2.6.1 — unified layout system), 1693 (2.7 design system lock), 1778 (2.7 design system lock)

- active section: 2.7 design system lock

- cleanup status: **safe candidate for Iteration 2B review**


### `.layout`

- found: **10**

- active: **line 1782**

- earlier duplicates: 95 (Typography system), 172 (Typography system), 531 (V12.9.1 calendar + radar premium polish), 786 (V12.4 safe polish overrides), 988 (V12.4 safe polish overrides), 1491 (Patch 2.6 — clean spacing system + restore metrics chunk), 1623 (PATCH 2.6.1 — unified layout system), 1706 (2.7 design system lock), 1779 (2.7 design system lock)

- active section: 2.7 design system lock

- cleanup status: **safe candidate for Iteration 2B review**


### `.card`

- found: **11**

- active: **line 1703**

- earlier duplicates: 87 (Typography system), 97 (Typography system), 174 (Typography system), 183 (Typography system), 347 (Typography system), 542 (V12.9.1 calendar + radar premium polish), 768 (V12.4 safe polish overrides), 792 (V12.4 safe polish overrides), 995 (V12.4 safe polish overrides), 1697 (2.7 design system lock)

- active section: 2.7 design system lock

- cleanup status: **safe candidate for Iteration 2B review**


### `.calendar-grid`

- found: **2**

- active: **line 545**

- earlier duplicates: 101 (Typography system)

- active section: V12.9.1 calendar + radar premium polish

- cleanup status: **safe candidate for Iteration 2B review**


### `.exercise-card`

- found: **1**

- active: **line 553**

- earlier duplicates: —

- active section: V12.9.1 calendar + radar premium polish

- cleanup status: no duplicate found


## Esimene low-risk cleanup kandidaatide grupp 2B jaoks

- header: `.topbar`, `.brand-title`, `.brand-subtitle`, `.header-meta`, `.header-actions`, `#workoutModeBtn`

- radar: `#radarTitle`, `.radar-header-actions`

- layout: `.metrics`, `.layout`, `.card`, `.add-grid`

- search: `.compact-search-card`

- calendar: `.calendar-grid`



## Mida 2B-s endiselt ei puutu

- HTML struktuur
- auth / sync / boot / lock loogika
- JS funktsioonid
- ID-d ja event hookid
