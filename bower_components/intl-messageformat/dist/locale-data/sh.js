IntlMessageFormat.__addLocaleData({locale:"sh",pluralRuleFunction:function(e,l){var t=String(e).split("."),a=t[0],c=t[1]||"",i=!t[1],n=a.slice(-1),o=a.slice(-2),r=c.slice(-1),s=c.slice(-2);return l?"other":i&&1==n&&11!=o||1==r&&11!=s?"one":i&&n>=2&&n<=4&&(o<12||o>14)||r>=2&&r<=4&&(s<12||s>14)?"few":"other"}});