export const report = {
    "requestedUrl": "https://www.sokada.co.uk/",
    "finalUrl": "https://www.sokada.co.uk/",
    "mainDocumentUrl": "https://www.sokada.co.uk/",
    "finalDisplayedUrl": "https://www.sokada.co.uk/",
    "lighthouseVersion": "11.5.0",
    "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/122.0.6261.94 Safari/537.36",
    "fetchTime": "2024-03-14T14:50:00.782Z",
    "environment": {
      "networkUserAgent": "Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
      "hostUserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/122.0.6261.94 Safari/537.36",
      "benchmarkIndex": 382.5,
      "credits": {
        "axe-core": "4.8.1"
      }
    },
    "runWarnings": [],
    "configSettings": {
      "emulatedFormFactor": "mobile",
      "formFactor": "mobile",
      "locale": "en-US",
      "onlyCategories": [
        "pwa",
        "performance",
        "accessibility",
        "best-practices",
        "seo"
      ],
      "channel": "lr"
    },
    "audits": {
      "aria-dialog-name": {
        "id": "aria-dialog-name",
        "title": "Elements with `role=\"dialog\"` or `role=\"alertdialog\"` have accessible names.",
        "description": "ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements. [Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.8/aria-dialog-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "http-status-code": {
        "id": "http-status-code",
        "title": "Page has successful HTTP status code",
        "description": "Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more about HTTP status codes](https://developer.chrome.com/docs/lighthouse/seo/http-status-code/).",
        "score": 1,
        "scoreDisplayMode": "binary"
      },
      "input-image-alt": {
        "id": "input-image-alt",
        "title": "`<input type=\"image\">` elements have `[alt]` text",
        "description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.8/input-image-alt).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "focus-traps": {
        "id": "focus-traps",
        "title": "User focus is not accidentally trapped in a region",
        "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "preload-fonts": {
        "id": "preload-fonts",
        "title": "Fonts with `font-display: optional` are preloaded",
        "description": "Preload `optional` fonts so first-time visitors may use them. [Learn more about preloading fonts](https://web.dev/articles/preload-optional-fonts)",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "layout-shifts": {
        "id": "layout-shifts",
        "title": "Avoid large layout shifts",
        "description": "These are the largest layout shifts observed on the page. Each table item represents a single layout shift, and shows the element that shifted the most. Below each item are possible root causes that led to the layout shift. Some of these layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "4 layout shifts found",
        "details": {
          "items": [
            {
              "score": 0.023988170438805415,
              "subItems": {
                "items": [
                  {
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-bold1-webfont.woff",
                      "type": "url"
                    },
                    "cause": "Web font loaded"
                  },
                  {
                    "cause": "Web font loaded",
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-300.woff2",
                      "type": "url"
                    }
                  },
                  {
                    "cause": "Web font loaded",
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-black1-webfont.woff"
                    }
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/litespeed/css/e741214b412fe74cff89ed0df5260bfa.css?ver=853d4"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "cause": "A late network request adjusted the page layout",
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/plugins/fancybox-for-wordpress/assets/js/jquery.fancybox.js",
                      "type": "url"
                    }
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery-migrate.min.js"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/lightslider.js",
                      "type": "url"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "cause": "A late network request adjusted the page layout",
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js"
                    }
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/bigSlide.min.js"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/drilldown-navigation.js",
                      "type": "url"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/nav-mobile.js"
                    },
                    "cause": "A late network request adjusted the page layout"
                  }
                ],
                "type": "subitems"
              },
              "node": {
                "boundingRect": {
                  "bottom": 1417,
                  "width": 412,
                  "height": 921,
                  "left": 0,
                  "right": 412,
                  "top": 496
                },
                "lhId": "page-1-DIV",
                "snippet": "<div id=\"home-services\">",
                "type": "node",
                "nodeLabel": "Whether you want a new website or to improve your position on search engines, w…",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV",
                "selector": "body.home > div#page > div#content > div#home-services"
              }
            },
            {
              "subItems": {
                "items": [
                  {
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-regular.woff2",
                      "type": "url"
                    },
                    "cause": "Web font loaded"
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-700.woff2"
                    },
                    "cause": "Web font loaded"
                  },
                  {
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-bold1-webfont.woff",
                      "type": "url"
                    },
                    "cause": "Web font loaded"
                  },
                  {
                    "cause": "Web font loaded",
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-300.woff2"
                    }
                  },
                  {
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-black1-webfont.woff",
                      "type": "url"
                    },
                    "cause": "Web font loaded"
                  },
                  {
                    "cause": "Injected iframe"
                  },
                  {
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/litespeed/css/e741214b412fe74cff89ed0df5260bfa.css?ver=853d4",
                      "type": "url"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/plugins/fancybox-for-wordpress/assets/js/jquery.fancybox.js"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery-migrate.min.js",
                      "type": "url"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "cause": "A late network request adjusted the page layout",
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/lightslider.js"
                    }
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/bigSlide.min.js",
                      "type": "url"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/drilldown-navigation.js",
                      "type": "url"
                    },
                    "cause": "A late network request adjusted the page layout"
                  }
                ],
                "type": "subitems"
              },
              "node": {
                "boundingRect": {
                  "left": 20,
                  "bottom": 686,
                  "right": 392,
                  "height": 120,
                  "width": 372,
                  "top": 566
                },
                "selector": "div#content > div#home-services > div.wrapper > h2",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV,0,DIV,0,H2",
                "lhId": "page-2-H2",
                "type": "node",
                "nodeLabel": "Whether you want a new website or to improve your position on search engines, w…",
                "snippet": "<h2>"
              },
              "score": 0.007629038372842201
            },
            {
              "score": 0.0004294782273495261,
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "cause": "Web font loaded",
                    "extra": {
                      "type": "url",
                      "value": "https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-brands-400.woff2"
                    }
                  },
                  {
                    "cause": "Web font loaded",
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/Gotham-Book.woff",
                      "type": "url"
                    }
                  },
                  {
                    "cause": "Web font loaded",
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-regular.woff2",
                      "type": "url"
                    }
                  },
                  {
                    "cause": "Web font loaded",
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-700.woff2",
                      "type": "url"
                    }
                  },
                  {
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-bold1-webfont.woff",
                      "type": "url"
                    },
                    "cause": "Web font loaded"
                  },
                  {
                    "cause": "Web font loaded",
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-300.woff2"
                    }
                  },
                  {
                    "cause": "Web font loaded",
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-black1-webfont.woff"
                    }
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/litespeed/css/e741214b412fe74cff89ed0df5260bfa.css?ver=853d4"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "cause": "A late network request adjusted the page layout",
                    "extra": {
                      "value": "https://www.sokada.co.uk/wp-content/plugins/fancybox-for-wordpress/assets/js/jquery.fancybox.js",
                      "type": "url"
                    }
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery-migrate.min.js"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/lightslider.js"
                    },
                    "cause": "A late network request adjusted the page layout"
                  }
                ]
              },
              "node": {
                "lhId": "page-5-IMG",
                "nodeLabel": "Web Design Sussex by Sokada",
                "path": "1,HTML,1,BODY,1,DIV,0,HEADER,0,DIV,0,DIV,0,A,0,IMG",
                "snippet": "<img data-lazyloaded=\"1\" src=\"https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp\" alt=\"Web Design Sussex by Sokada\" data-src=\"https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp\" data-ll-status=\"loaded\" class=\"entered litespeed-loaded\">",
                "type": "node",
                "selector": "div.wrapper > div.site-branding > a > img.entered",
                "boundingRect": {
                  "left": 20,
                  "right": 190,
                  "height": 47,
                  "width": 170,
                  "top": 30,
                  "bottom": 77
                }
              }
            },
            {
              "node": {
                "boundingRect": {
                  "top": 802,
                  "width": 332,
                  "right": 372,
                  "bottom": 886,
                  "left": 40,
                  "height": 84
                },
                "lhId": "page-6-P",
                "snippet": "<p>",
                "selector": "div.wrapper > div.home-services-grid > div.single-service > p",
                "type": "node",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,1,P",
                "nodeLabel": "Are you ready to take your shop online? Let us help, we can guide you down this…"
              },
              "score": 0.00006288733937173869,
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "extra": {
                      "nodeLabel": "Web Design Sussex by Sokada",
                      "path": "1,HTML,1,BODY,1,DIV,0,HEADER,0,DIV,0,DIV,0,A,0,IMG",
                      "selector": "div.wrapper > div.site-branding > a > img.entered",
                      "lhId": "page-5-IMG",
                      "type": "node",
                      "snippet": "<img data-lazyloaded=\"1\" src=\"https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp\" alt=\"Web Design Sussex by Sokada\" data-src=\"https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp\" data-ll-status=\"loaded\" class=\"entered litespeed-loaded\">",
                      "boundingRect": {
                        "width": 170,
                        "height": 47,
                        "left": 20,
                        "right": 190,
                        "top": 30,
                        "bottom": 77
                      }
                    },
                    "cause": "Media element lacking an explicit size"
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js"
                    },
                    "cause": "A late network request adjusted the page layout"
                  },
                  {
                    "extra": {
                      "type": "url",
                      "value": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/styles__ltr.css"
                    },
                    "cause": "A late network request adjusted the page layout"
                  }
                ]
              }
            }
          ],
          "headings": [
            {
              "valueType": "node",
              "key": "node",
              "subItemsHeading": {
                "key": "extra"
              },
              "label": "Element"
            },
            {
              "subItemsHeading": {
                "key": "cause",
                "valueType": "text"
              },
              "label": "Layout shift score",
              "granularity": 0.001,
              "key": "score",
              "valueType": "numeric"
            }
          ],
          "type": "table"
        }
      },
      "logical-tab-order": {
        "id": "logical-tab-order",
        "title": "The page has a logical tab order",
        "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "aria-progressbar-name": {
        "id": "aria-progressbar-name",
        "title": "ARIA `progressbar` elements have accessible names",
        "description": "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.8/aria-progressbar-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "server-response-time": {
        "id": "server-response-time",
        "title": "Initial server response time was short",
        "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more about the Time to First Byte metric](https://developer.chrome.com/docs/lighthouse/performance/time-to-first-byte/).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "Root document took 40 ms",
        "details": {
          "overallSavingsMs": 0,
          "type": "opportunity",
          "items": [
            {
              "url": "https://www.sokada.co.uk/",
              "responseTime": 44
            }
          ],
          "headings": [
            {
              "key": "url",
              "valueType": "url",
              "label": "URL"
            },
            {
              "key": "responseTime",
              "label": "Time Spent",
              "valueType": "timespanMs"
            }
          ]
        },
        "numericValue": 44,
        "numericUnit": "millisecond"
      },
      "unminified-css": {
        "id": "unminified-css",
        "title": "Minify CSS",
        "description": "Minifying CSS files can reduce network payload sizes. [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "sortedBy": [
            "wastedBytes"
          ],
          "overallSavingsBytes": 0,
          "debugData": {
            "metricSavings": {
              "LCP": 0,
              "FCP": 0
            },
            "type": "debugdata"
          },
          "headings": [],
          "items": [],
          "overallSavingsMs": 0,
          "type": "opportunity"
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "list": {
        "id": "list",
        "title": "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
        "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.8/list).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "items": [],
          "type": "table"
        }
      },
      "interactive-element-affordance": {
        "id": "interactive-element-affordance",
        "title": "Interactive elements indicate their purpose and state",
        "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "performance-budget": {
        "id": "performance-budget",
        "title": "Performance budget",
        "description": "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more about performance budgets](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "aria-valid-attr-value": {
        "id": "aria-valid-attr-value",
        "title": "`[aria-*]` attributes have valid values",
        "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more about valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.8/aria-valid-attr-value).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "items": [],
          "type": "table"
        }
      },
      "color-contrast": {
        "id": "color-contrast",
        "title": "Background and foreground colors do not have a sufficient contrast ratio.",
        "description": "Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.8/color-contrast).",
        "score": 0,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [
            {
              "valueType": "node",
              "subItemsHeading": {
                "valueType": "node",
                "key": "relatedNode"
              },
              "label": "Failing Elements",
              "key": "node"
            }
          ],
          "items": [
            {
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "relatedNode": {
                      "type": "node",
                      "nodeLabel": "body.home",
                      "selector": "body.home",
                      "lhId": "1-1-BODY",
                      "path": "1,HTML,1,BODY",
                      "boundingRect": {
                        "height": 5309,
                        "bottom": 5309,
                        "width": 412,
                        "left": 0,
                        "right": 412,
                        "top": 0
                      },
                      "snippet": "<body class=\"home page-template page-template-page-home page-template-page-home-php pag…\">"
                    }
                  }
                ]
              },
              "node": {
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV,0,DIV,1,DIV,1,DIV,0,H3,0,A",
                "lhId": "1-0-A",
                "nodeLabel": "Website Design & Development",
                "type": "node",
                "snippet": "<a href=\"https://www.sokada.co.uk/services/website-design/\">",
                "boundingRect": {
                  "top": 908,
                  "left": 40,
                  "width": 332,
                  "right": 372,
                  "bottom": 969,
                  "height": 61
                },
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.76 (foreground color: #58ae53, background color: #ffffff, font size: 16.5pt (22px), font weight: bold). Expected contrast ratio of 3:1",
                "selector": "div.home-services-grid > div.single-service > h3 > a"
              }
            },
            {
              "node": {
                "nodeLabel": "First impressions really do count; the look and feel of your website reflects o…",
                "type": "node",
                "boundingRect": {
                  "top": 999,
                  "height": 84,
                  "right": 372,
                  "bottom": 1083,
                  "left": 40,
                  "width": 332
                },
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV,0,DIV,1,DIV,1,DIV,1,P",
                "selector": "div.wrapper > div.home-services-grid > div.single-service > p",
                "lhId": "1-2-P",
                "snippet": "<p>"
              },
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "relatedNode": {
                      "selector": "body.home",
                      "nodeLabel": "body.home",
                      "path": "1,HTML,1,BODY",
                      "snippet": "<body class=\"home page-template page-template-page-home page-template-page-home-php pag…\">",
                      "boundingRect": {
                        "height": 5309,
                        "left": 0,
                        "top": 0,
                        "width": 412,
                        "bottom": 5309,
                        "right": 412
                      },
                      "lhId": "1-1-BODY",
                      "type": "node"
                    }
                  }
                ]
              }
            },
            {
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "relatedNode": {
                      "lhId": "1-1-BODY",
                      "nodeLabel": "body.home",
                      "type": "node",
                      "selector": "body.home",
                      "boundingRect": {
                        "bottom": 5309,
                        "width": 412,
                        "top": 0,
                        "left": 0,
                        "height": 5309,
                        "right": 412
                      },
                      "snippet": "<body class=\"home page-template page-template-page-home page-template-page-home-php pag…\">",
                      "path": "1,HTML,1,BODY"
                    }
                  }
                ]
              },
              "node": {
                "type": "node",
                "nodeLabel": "Online Marketing",
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.76 (foreground color: #58ae53, background color: #ffffff, font size: 16.5pt (22px), font weight: bold). Expected contrast ratio of 3:1",
                "lhId": "1-3-A",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV,0,DIV,1,DIV,2,DIV,0,H3,0,A",
                "selector": "div.home-services-grid > div.single-service > h3 > a",
                "boundingRect": {
                  "left": 40,
                  "width": 332,
                  "bottom": 1136,
                  "height": 31,
                  "top": 1105,
                  "right": 372
                },
                "snippet": "<a href=\"https://www.sokada.co.uk/services/online-marketing/\">"
              }
            },
            {
              "node": {
                "selector": "div.wrapper > div.home-services-grid > div.single-service > p",
                "type": "node",
                "boundingRect": {
                  "height": 84,
                  "top": 1166,
                  "width": 332,
                  "left": 40,
                  "bottom": 1250,
                  "right": 372
                },
                "nodeLabel": "Getting your website seen on a search engine is probably the most important par…",
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV,0,DIV,1,DIV,2,DIV,1,P",
                "snippet": "<p>",
                "lhId": "1-4-P"
              },
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "relatedNode": {
                      "path": "1,HTML,1,BODY",
                      "selector": "body.home",
                      "type": "node",
                      "nodeLabel": "body.home",
                      "boundingRect": {
                        "width": 412,
                        "height": 5309,
                        "top": 0,
                        "right": 412,
                        "left": 0,
                        "bottom": 5309
                      },
                      "lhId": "1-1-BODY",
                      "snippet": "<body class=\"home page-template page-template-page-home page-template-page-home-php pag…\">"
                    }
                  }
                ]
              }
            },
            {
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "relatedNode": {
                      "path": "1,HTML,1,BODY",
                      "boundingRect": {
                        "left": 0,
                        "height": 5309,
                        "width": 412,
                        "right": 412,
                        "bottom": 5309,
                        "top": 0
                      },
                      "type": "node",
                      "snippet": "<body class=\"home page-template page-template-page-home page-template-page-home-php pag…\">",
                      "lhId": "1-1-BODY",
                      "selector": "body.home",
                      "nodeLabel": "body.home"
                    }
                  }
                ]
              },
              "node": {
                "selector": "div#content > div#home-services > div.wrapper > a.outline-button",
                "type": "node",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV,0,DIV,2,A",
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.76 (foreground color: #58ae53, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
                "snippet": "<a href=\"/services/\" class=\"outline-button services-links\">",
                "nodeLabel": "See more services",
                "lhId": "1-5-A",
                "boundingRect": {
                  "height": 87,
                  "right": 318,
                  "width": 223,
                  "left": 94,
                  "bottom": 1367,
                  "top": 1280
                }
              }
            },
            {
              "subItems": {
                "items": [
                  {
                    "relatedNode": {
                      "boundingRect": {
                        "right": 412,
                        "left": 0,
                        "bottom": 3159,
                        "top": 1417,
                        "height": 1742,
                        "width": 412
                      },
                      "path": "1,HTML,1,BODY,1,DIV,1,DIV,2,DIV",
                      "snippet": "<div class=\"home-case-studies\">",
                      "type": "node",
                      "lhId": "1-7-DIV",
                      "nodeLabel": "We are helping businesses become more successful\n\nHere are some examples of cli…",
                      "selector": "body.home > div#page > div#content > div.home-case-studies"
                    }
                  }
                ],
                "type": "subitems"
              },
              "node": {
                "snippet": "<strong>",
                "boundingRect": {
                  "right": 305,
                  "top": 1558,
                  "left": 108,
                  "bottom": 1587,
                  "width": 197,
                  "height": 29
                },
                "nodeLabel": "more successful",
                "selector": "div.wrapper > div.case-text > h2 > strong",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,0,H2,1,STRONG",
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.6 (foreground color: #58ae53, background color: #f8f8f8, font size: 19.5pt (26px), font weight: bold). Expected contrast ratio of 3:1",
                "lhId": "1-6-STRONG",
                "type": "node"
              }
            },
            {
              "node": {
                "nodeLabel": "Here are some examples of clients we have helped and some detail on how we help…",
                "boundingRect": {
                  "bottom": 1692,
                  "top": 1608,
                  "width": 298,
                  "right": 355,
                  "left": 57,
                  "height": 84
                },
                "type": "node",
                "lhId": "1-8-P",
                "selector": "div.home-case-studies > div.wrapper > div.case-text > p",
                "snippet": "<p>",
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.21 (foreground color: #777777, background color: #f8f8f8, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,P"
              },
              "subItems": {
                "items": [
                  {
                    "relatedNode": {
                      "path": "1,HTML,1,BODY,1,DIV,1,DIV,2,DIV",
                      "selector": "body.home > div#page > div#content > div.home-case-studies",
                      "snippet": "<div class=\"home-case-studies\">",
                      "type": "node",
                      "boundingRect": {
                        "top": 1417,
                        "bottom": 3159,
                        "height": 1742,
                        "width": 412,
                        "right": 412,
                        "left": 0
                      },
                      "nodeLabel": "We are helping businesses become more successful\n\nHere are some examples of cli…",
                      "lhId": "1-7-DIV"
                    }
                  }
                ],
                "type": "subitems"
              }
            },
            {
              "subItems": {
                "items": [
                  {
                    "relatedNode": {
                      "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV",
                      "snippet": "<div class=\"footer-bar\">",
                      "type": "node",
                      "selector": "body.home > div#page > footer#colophon > div.footer-bar",
                      "lhId": "1-10-DIV",
                      "nodeLabel": "We can help you make the most of the internet\n\nWe’re a dynamic team with a bund…",
                      "boundingRect": {
                        "bottom": 5146,
                        "height": 865,
                        "width": 412,
                        "top": 4281,
                        "left": 0,
                        "right": 412
                      }
                    }
                  }
                ],
                "type": "subitems"
              },
              "node": {
                "lhId": "1-9-STRONG",
                "boundingRect": {
                  "left": 64,
                  "height": 36,
                  "right": 305,
                  "top": 4373,
                  "width": 241,
                  "bottom": 4409
                },
                "selector": "div.wrapper > div.footer-title > h2 > strong",
                "snippet": "<strong>",
                "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV,0,DIV,0,DIV,0,H2,1,STRONG",
                "nodeLabel": "make the most",
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.76 (foreground color: #58ae53, background color: #ffffff, font size: 24.0pt (32px), font weight: bold). Expected contrast ratio of 3:1",
                "type": "node"
              }
            },
            {
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "relatedNode": {
                      "nodeLabel": "We can help you make the most of the internet\n\nWe’re a dynamic team with a bund…",
                      "selector": "body.home > div#page > footer#colophon > div.footer-bar",
                      "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV",
                      "boundingRect": {
                        "bottom": 5146,
                        "width": 412,
                        "left": 0,
                        "right": 412,
                        "top": 4281,
                        "height": 865
                      },
                      "lhId": "1-10-DIV",
                      "type": "node",
                      "snippet": "<div class=\"footer-bar\">"
                    }
                  }
                ]
              },
              "node": {
                "nodeLabel": "We’re a dynamic team with a bundle of knowledge in designing, building and mark…",
                "selector": "div.footer-main > div.grid-3 > div.about-footer > p",
                "type": "node",
                "boundingRect": {
                  "left": 57,
                  "bottom": 4614,
                  "height": 84,
                  "width": 298,
                  "top": 4530,
                  "right": 355
                },
                "snippet": "<p>",
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
                "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV,0,DIV,1,DIV,0,DIV,1,DIV,0,P",
                "lhId": "1-11-P"
              }
            },
            {
              "node": {
                "nodeLabel": "Suite C, Bank Buildings\nCherwell Road\nHeathfield\nEast Sussex\nTN21 8JT",
                "boundingRect": {
                  "height": 140,
                  "right": 355,
                  "width": 298,
                  "top": 4699,
                  "bottom": 4839,
                  "left": 57
                },
                "snippet": "<p>",
                "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV,0,DIV,1,DIV,1,DIV,1,P",
                "type": "node",
                "selector": "div.wrapper > div.footer-main > div.grid-3 > p",
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.47 (foreground color: #777777, background color: #ffffff, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
                "lhId": "1-12-P"
              },
              "subItems": {
                "items": [
                  {
                    "relatedNode": {
                      "boundingRect": {
                        "height": 865,
                        "left": 0,
                        "bottom": 5146,
                        "width": 412,
                        "right": 412,
                        "top": 4281
                      },
                      "lhId": "1-10-DIV",
                      "selector": "body.home > div#page > footer#colophon > div.footer-bar",
                      "nodeLabel": "We can help you make the most of the internet\n\nWe’re a dynamic team with a bund…",
                      "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV",
                      "type": "node",
                      "snippet": "<div class=\"footer-bar\">"
                    }
                  }
                ],
                "type": "subitems"
              }
            },
            {
              "node": {
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.76 (foreground color: #58ae53, background color: #ffffff, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
                "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV,0,DIV,1,DIV,2,DIV,1,P,0,A",
                "lhId": "1-13-A",
                "boundingRect": {
                  "bottom": 4953,
                  "width": 298,
                  "top": 4924,
                  "height": 29,
                  "left": 57,
                  "right": 355
                },
                "snippet": "<a href=\"tel:01435 817 226\">",
                "selector": "div.footer-main > div.grid-3 > p > a",
                "type": "node",
                "nodeLabel": "01435 817 226"
              },
              "subItems": {
                "items": [
                  {
                    "relatedNode": {
                      "boundingRect": {
                        "bottom": 5146,
                        "right": 412,
                        "left": 0,
                        "width": 412,
                        "height": 865,
                        "top": 4281
                      },
                      "snippet": "<div class=\"footer-bar\">",
                      "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV",
                      "type": "node",
                      "lhId": "1-10-DIV",
                      "selector": "body.home > div#page > footer#colophon > div.footer-bar",
                      "nodeLabel": "We can help you make the most of the internet\n\nWe’re a dynamic team with a bund…"
                    }
                  }
                ],
                "type": "subitems"
              }
            },
            {
              "subItems": {
                "items": [
                  {
                    "relatedNode": {
                      "snippet": "<div class=\"footer-bar\">",
                      "type": "node",
                      "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV",
                      "boundingRect": {
                        "right": 412,
                        "top": 4281,
                        "left": 0,
                        "bottom": 5146,
                        "height": 865,
                        "width": 412
                      },
                      "selector": "body.home > div#page > footer#colophon > div.footer-bar",
                      "lhId": "1-10-DIV",
                      "nodeLabel": "We can help you make the most of the internet\n\nWe’re a dynamic team with a bund…"
                    }
                  }
                ],
                "type": "subitems"
              },
              "node": {
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.76 (foreground color: #58ae53, background color: #ffffff, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
                "snippet": "<a href=\"mailto:enquiries@sokada.co.uk\">",
                "boundingRect": {
                  "bottom": 4982,
                  "top": 4953,
                  "left": 57,
                  "right": 355,
                  "height": 29,
                  "width": 298
                },
                "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV,0,DIV,1,DIV,2,DIV,2,P,0,A",
                "selector": "div.footer-main > div.grid-3 > p > a",
                "lhId": "1-14-A",
                "type": "node",
                "nodeLabel": "enquiries@sokada.co.uk"
              }
            },
            {
              "node": {
                "type": "node",
                "snippet": "<p class=\"copyright-text\">",
                "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,1,DIV,0,DIV,0,P",
                "selector": "footer#colophon > div.footer-bottom-bar > div.wrapper > p.copyright-text",
                "lhId": "1-15-P",
                "nodeLabel": "© 2024 Sokada Ltd – a full service digital website and marketing company Regist…",
                "boundingRect": {
                  "top": 5171,
                  "right": 392,
                  "left": 20,
                  "height": 113,
                  "bottom": 5284,
                  "width": 372
                },
                "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.29 (foreground color: #777777, background color: #272733, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1"
              },
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "relatedNode": {
                      "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,1,DIV",
                      "boundingRect": {
                        "top": 5146,
                        "width": 412,
                        "right": 412,
                        "bottom": 5309,
                        "left": 0,
                        "height": 163
                      },
                      "snippet": "<div class=\"footer-bottom-bar\">",
                      "type": "node",
                      "lhId": "1-16-DIV",
                      "nodeLabel": "© 2024 Sokada Ltd – a full service digital website and marketing company Regist…",
                      "selector": "body.home > div#page > footer#colophon > div.footer-bottom-bar"
                    }
                  }
                ]
              }
            }
          ],
          "type": "table",
          "debugData": {
            "type": "debugdata",
            "tags": [
              "cat.color",
              "wcag2aa",
              "wcag143",
              "TTv5",
              "TT13.c",
              "EN-301-549",
              "EN-9.1.4.3",
              "ACT"
            ],
            "impact": "serious"
          }
        }
      },
      "final-screenshot": {
        "id": "final-screenshot",
        "title": "Final Screenshot",
        "description": "The last screenshot captured of the pageload.",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "timing": 1502,
          "data": "data:image/jpeg;base64,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",
          "type": "screenshot",
          "timestamp": 56425442892
        }
      },
      "html-lang-valid": {
        "id": "html-lang-valid",
        "title": "`<html>` element has a valid value for its `[lang]` attribute",
        "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-lang-valid).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "installable-manifest": {
        "id": "installable-manifest",
        "title": "Web app manifest or service worker do not meet the installability requirements",
        "description": "Service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. With proper service worker and manifest implementations, browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement. [Learn more about manifest installability requirements](https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest/).",
        "score": 0,
        "scoreDisplayMode": "binary",
        "displayValue": "1 reason",
        "details": {
          "type": "table",
          "items": [
            {
              "reason": "No manifest was fetched"
            }
          ],
          "debugData": {
            "type": "debugdata",
            "manifestUrl": null
          },
          "headings": [
            {
              "label": "Failure reason",
              "key": "reason",
              "valueType": "text"
            }
          ]
        },
        "warnings": [],
        "numericValue": 1,
        "numericUnit": "element"
      },
      "uses-optimized-images": {
        "id": "uses-optimized-images",
        "title": "Efficiently encode images",
        "description": "Optimized images load faster and consume less cellular data. [Learn how to efficiently encode images](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/).",
        "score": 0.5,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Potential savings of 70 KiB",
        "details": {
          "items": [
            {
              "isCrossOrigin": false,
              "fromProtocol": true,
              "node": {
                "type": "node",
                "snippet": "<div class=\"project-internal\" style=\"background-image: url(&quot;https://www.sokada.co.uk/wp-content/uploads/2022/12/…&quot;);\">",
                "boundingRect": {
                  "bottom": 2133,
                  "width": 372,
                  "height": 411,
                  "right": 392,
                  "left": 20,
                  "top": 1722
                },
                "nodeLabel": "Spotlight On Corruption\n\nSpotlight on Corruption is a registered charity aiming…",
                "lhId": "1-92-DIV",
                "selector": "div.projects-list > ul.projects > li.single-project > div.project-internal",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,2,DIV,0,DIV,1,DIV,0,UL,0,LI,0,DIV"
              },
              "totalBytes": 182607,
              "wastedBytes": 43638,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/12/pexels-naveen-annam-15816931.jpg"
            },
            {
              "fromProtocol": true,
              "wastedBytes": 28521,
              "totalBytes": 639164,
              "isCrossOrigin": false,
              "node": {
                "snippet": "<div class=\"project-internal\" style=\"background-image: url(&quot;https://www.sokada.co.uk/wp-content/uploads/2022/09/…&quot;);\">",
                "selector": "div.projects-list > ul.projects > li.single-project > div.project-internal",
                "type": "node",
                "lhId": "1-94-DIV",
                "nodeLabel": "FTH Hire Group Online Marketing\n\nWith regular work, updates and meetings, we ar…",
                "boundingRect": {
                  "top": 2632,
                  "left": 20,
                  "height": 447,
                  "right": 392,
                  "bottom": 3079,
                  "width": 372
                },
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,2,DIV,0,DIV,1,DIV,0,UL,2,LI,0,DIV"
              },
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/09/323558741_523201649784661_386326318532048502_n.jpg"
            }
          ],
          "overallSavingsMs": 390,
          "debugData": {
            "type": "debugdata",
            "metricSavings": {
              "FCP": 0,
              "LCP": 0
            }
          },
          "type": "opportunity",
          "headings": [
            {
              "valueType": "node",
              "key": "node"
            },
            {
              "label": "URL",
              "key": "url",
              "valueType": "url"
            },
            {
              "valueType": "bytes",
              "key": "totalBytes",
              "label": "Resource Size"
            },
            {
              "label": "Potential Savings",
              "valueType": "bytes",
              "key": "wastedBytes"
            }
          ],
          "sortedBy": [
            "wastedBytes"
          ],
          "overallSavingsBytes": 72159
        },
        "warnings": [],
        "numericValue": 390,
        "numericUnit": "millisecond"
      },
      "document-title": {
        "id": "document-title",
        "title": "Document has a `<title>` element",
        "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more about document titles](https://dequeuniversity.com/rules/axe/4.8/document-title).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "type": "table",
          "headings": []
        }
      },
      "uses-text-compression": {
        "id": "uses-text-compression",
        "title": "Enable text compression",
        "description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more about text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "debugData": {
            "type": "debugdata",
            "metricSavings": {
              "LCP": 0,
              "FCP": 0
            }
          },
          "items": [],
          "overallSavingsMs": 0,
          "type": "opportunity",
          "overallSavingsBytes": 0,
          "sortedBy": [
            "wastedBytes"
          ],
          "headings": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "visual-order-follows-dom": {
        "id": "visual-order-follows-dom",
        "title": "Visual order on the page follows DOM order",
        "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "aria-roles": {
        "id": "aria-roles",
        "title": "`[role]` values are valid",
        "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more about valid ARIA roles](https://dequeuniversity.com/rules/axe/4.8/aria-roles).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "aria-required-parent": {
        "id": "aria-required-parent",
        "title": "`[role]`s are contained by their required parent element",
        "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more about ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.8/aria-required-parent).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "robots-txt": {
        "id": "robots-txt",
        "title": "robots.txt is valid",
        "description": "If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more about robots.txt](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "type": "table",
          "items": [],
          "headings": []
        }
      },
      "empty-heading": {
        "id": "empty-heading",
        "title": "All heading elements contain content.",
        "description": "A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.8/empty-heading).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "dlitem": {
        "id": "dlitem",
        "title": "Definition list items are wrapped in `<dl>` elements",
        "description": "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.8/dlitem).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "errors-in-console": {
        "id": "errors-in-console",
        "title": "No browser errors logged to the console",
        "description": "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "type": "table",
          "headings": []
        }
      },
      "largest-contentful-paint": {
        "id": "largest-contentful-paint",
        "title": "Largest Contentful Paint",
        "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
        "score": 0.84,
        "scoreDisplayMode": "numeric",
        "displayValue": "2.8 s",
        "numericValue": 2757.5,
        "numericUnit": "millisecond"
      },
      "aria-command-name": {
        "id": "aria-command-name",
        "title": "`button`, `link`, and `menuitem` elements have accessible names",
        "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.8/aria-command-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "duplicate-id-active": {
        "id": "duplicate-id-active",
        "title": "`[id]` attributes on active, focusable elements are unique",
        "description": "All focusable elements must have a unique `id` to ensure that they're visible to assistive technologies. [Learn how to fix duplicate `id`s](https://dequeuniversity.com/rules/axe/4.8/duplicate-id-active).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "js-libraries": {
        "id": "js-libraries",
        "title": "Detected JavaScript libraries",
        "description": "All front-end JavaScript libraries detected on the page. [Learn more about this JavaScript library detection diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/js-libraries/).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "debugData": {
            "type": "debugdata",
            "stacks": [
              {
                "version": "3.7.1",
                "id": "jquery"
              },
              {
                "id": "jquery-fast"
              },
              {
                "id": "wordpress",
                "version": "6.4.3"
              }
            ]
          },
          "headings": [
            {
              "label": "Name",
              "key": "name",
              "valueType": "text"
            },
            {
              "valueType": "text",
              "key": "version",
              "label": "Version"
            }
          ],
          "items": [
            {
              "npm": "jquery",
              "version": "3.7.1",
              "name": "jQuery"
            },
            {
              "name": "WordPress",
              "version": "6.4.3"
            }
          ],
          "type": "table"
        }
      },
      "screenshot-thumbnails": {
        "id": "screenshot-thumbnails",
        "title": "Screenshot Thumbnails",
        "description": "This is what the load of your site looked like.",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "items": [
            {
              "timestamp": 56424315741,
              "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2MBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIAfIA+gMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APQKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//9k=",
              "timing": 375
            },
            {
              "timing": 750,
              "timestamp": 56424690741,
              "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2MBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIAfIA+gMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APQKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//9k="
            },
            {
              "timing": 1125,
              "data": "data:image/jpeg;base64,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",
              "timestamp": 56425065741
            },
            {
              "timestamp": 56425440741,
              "timing": 1500,
              "data": "data:image/jpeg;base64,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"
            },
            {
              "timestamp": 56425815741,
              "data": "data:image/jpeg;base64,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",
              "timing": 1875
            },
            {
              "timing": 2250,
              "data": "data:image/jpeg;base64,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",
              "timestamp": 56426190741
            },
            {
              "timestamp": 56426565741,
              "timing": 2625,
              "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHyAPoDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAUBAgQGBwMI/8QAVBAAAQMDAwEEBQULCQYEBQUAAQIDBAAFEQYSITETFEFRByJhcZEVMoGS0RYYIzNCUlRWlaHjCDRDU2JyscHTJFWCk5TiNnOi4URGdIXDRYOytPH/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QALxEBAAICAQIEBQIHAQEAAAAAAAERAgNREiETFBUxBCJBYfCR4SMyUoGhscEFcf/aAAwDAQACEQMRAD8ApSlK+C/MFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKVIWe1u3Nb5SoNsR2y686RkISPZ4nyFWIme0LETM1CPpUzFtsGWxMcjzl747RdDTjO1TmPLCiPfWRYNKy7rAfuC1oi25hJUt9wZzjrtHjWowyntDca8pmoa9XStF6Ms99tKrgpczCVKR2SlAAkDzA9ta1btLLvNtkyrJIMlcY/hGHEbF4PQjkg9D8K6R6IAU6SeCgQRIWCD7hXf4fXefzR2en4XTedZx2mHEj1pUrb7YzLiyZL8vuzbJwSpoqBJ6AEHknnj2VbabO9d57ke37nEtoLillB4SOpwMn6B1rz9MvL0TNV9UZStr07pNF/XKYhTVNTI4ypqQztzzjqCcfCo+16YuVxvbtrZaAkMqIdKj6qMeJNa8PLt2918LPtNe7H07HhzbpGiTUPFL7iWwtpYTtycdCDmtm9Jembfpxu2pt4cKne03rcVkqxtx7PE14xrHEtGsIEIXIPTGpDZWA0QgHIO3dnr9FbX6X4L9yn2KHERvfeU4lI+rXbHX/DyuO7046v4OVx3inIaVs9q0w1PvarQqY5HnDO3tI5CVEDJ8c9ORkVE6gs8mxXNyDNCe0RghSTwoHoRXCcMoi59nlnXlEdUx2R1KUrDBSlKBSlKBSlKBSlKBSlWOhZaWGyA4UnaT4HwoL6VqfcdXf7zhfVH+nTuOrv95wvqj/Trv4Mf1x+f2d/Bj+qPz+zbKVqfcdXf7zhfVH+nWZaYuomp7arlOiuxRnehA5PBx+QPHHjUnTERfVCTqiIvqj8/s2ClKVxcSt09GV+hWedMYugAiTEJQpZTlKSM8EeRya0upezybei2XCLcQ8C+pstLaSCUFO7kgkZ64x7a6a8pxyiYddOU4ZxlDpt70LaLnBenacfSy9tUR2K9za+OR14z7PhWfqRpuN6K1txOGhGbxjxBKcn6c1zXTl5Z00Jr8aWZL77JabbShSUpJPzlZ8vIZ69az7DrJv7nJFivaXFRnGy22+gZU35ZHiAa9UbcO/apmHtx3au/apmJTHoPJ71dR4bG/wDFVdAsrLcd28oYSAjvRVgeZbQT+8muTaX1HC0lAnGKvv0+SUhBSkpbQBnrkAnr0x9NTeldd221W99ue7KkyX3lPLcS0AMq8Ota07cMcYxmW/h92GGGOOU+1sq9aVg3TQcN7T4Klx0l5Az6zufnhX9rj92K0bQki8R76E2BtK5TiClSVjKdviT5VP6E1hD043LjSn35ERawpoJawQfE9eM+Xsr3s+qdP2rVUq4w0yERpidrjZa/Fq65HPIJ8K5z0ZTjlE1y5T4ec45xNT9UvoGMY2trqJc1Em4qbKpAaRhCVFQOAfE/RWyaTaaTd9RupA7ZUwJUfHAQMf4mtEturLHadYTJ8VMp2PMBLrik4KCTn1R5Zz1q1jXEG16pmToAkyIk1QU+hYCduBgFPmevXH+ddcNmGMR3+su2vdrwiLn2mWvJUpXpHBV1+Uv/AMldA9KEidGvenXbSCqcFuhpIGckhII92Ca02bMsB1c1eY8t4sKeS+tjsSFJVkE89MZ5493tqeunpAtUm/Wye2xLxDKxhSE+sFjBPXgj9/srljOOOOUTPvLjhljjjljOXvMf7XwY8xPpHtsi/S2TdXUkiOwjKUJ2KAyrw8emaiPTR/4pY/8ApU//AMlVl3fVdjTrCJfISZL7wAQ6FJ2pSnG0kZ5KsH3Vi6u1Bp+76ihXEolSG2whDjRQEp2hWT7TwTxx76uc4zhOMT9V2ThOvLCJ+rQKVsmu7habjd0O2OOGWA2EqwjYFK88e7Fa3Xkyjpmom3gzxjHKYibKUpWWSlKUClKUClKUCrHQstLDZAcKSEk+BxxV9WOhRaWGyErKSEk+BxxVhYat3DVv+9Yf1f8Asp3DVv8AvWH9X/sp8map/wB7xvh/2U+TNU/73jfD/sr29X3x/T9ntv74/p+x3DVv+9Yf1f8AsrMtUTULU9tdyuEZ6KM70IHJ4OPyB448aw/kzVP+943w/wCysy1Qb+zPbcuFxYfjDO5tI5PBx+SPHFZzn5Z74/p+zOc/LPfH9P2bBSlK8bxlKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoFKUoIn7orV+lp+or7KfdFav0tP1FfZXOKpX1fI6+ZfY9P18y6R90Vq/S0/UV9lPuitX6Wn6ivsrm9KeR18ynp+vmXSPuhtX6Wn6ivsqxzU1obxvmJGf7CvsrnVYlx+Yj308jr5lfT9fMupsaitUjd2MsK29fUV9levyzb/wBIH1VfZXMdP/0//D/nUxTyOvmU9P18y3f5ZgfpA+qfsrwkajtMcgPTEpJ6DYo/5VqAPFQF6R2lzaRnG4JGfLJNPI6+ZPT9fMukfdZZP05P/LX9lPussn6cn/lr+ytBOnsD+c/+j/3rwTZCtRCZAwPEoxn99PI6+ZPT9fMui/dZZP05P/LX9lPussn6cn/lr+yuefILnhIbP0VabE94Ps/vp5HXzJ6fr5l0X7rLJ+nJ/wCWv7KfdZZP05P/AC1/ZXOfkGT4OMn6T9leT1mktY3KaOfIn7KeR18yen6+ZdL+6yyfp6fqL+yq/dXZP09P1FfZXLvkx8fmH6atNukfmp+tU8lr5k8hr5l1P7q7J+no+or7KuGqbKf/AI9v4K+yuUm3yB+QD/xCqdwk/wBX/wCoU8lr5k9P18y6yNTWY/8A6gz+/wCyqjUdoP8A8ez8TXJDBkj+iPxFU7nI/qlU8lr5k9P18y6990Np/TmfiafdBav01r99cfMV8f0K/hTuz/8AUufVp5LXzJ6fr5l2H5ftf6Y38D9lVF9th6S0fA/ZXHOweH9E59U1TsXf6tf1TV8jr5k9P18y7N8tW4j+cp+qfsrwd1JaWiQ5MSCP7Cvsrj/ZuD8hQ+iqEK/tU8jr5k9P18y7C1qS0u57OYk46+or7Ku+6G1/pY+or7K44FKHQkVXtFj8tXxp5HXzJ6fr5l2L7orV+lp+or7KfdDa/wBLH1FfZXHQ65nhavjVe3d/rF/Wp5HXzJ6fr5lNGqVWqV7H0ClKUQrEuP4tHvrLrFuP4pP96gyNP9X/APh/zqZqG0/89/3D/OpmgVB3YgXaOTwPV5/4qnKgL9/Pkf3B/iao2ZTjbjZAcTgjGQRXg0jaCQpGSPHwNQ0dJTCI2nzHtr2USkAHBGKTBCVKFDJBbz4c07NWeifia16WvtkN48Kx9qh0UR9NKRuDYISNwAPjisa4dEVrJKk89or4mrVPOEjLi/rGkxcUJ0EeVUJqE7ZzPDi/rGrg85/WL+tWPDkTeU+R+NU9XyPxqF7w74Oqqvenv6w08OUTJxnxxVfV8zUR3h/Oe0OPcKq3JkHPrceeBSNclpSqnGOCTUUZMgdFD4VQTnschP0ip4clpbCfM591DgDg5qL7875I+BqvfnB1Sip0SJEk4ziqEn3/ABqP7+5+amq/KCx1QM++nRKszfnPKfppkc/i6xO/nxaHxqvfx/VfvrPRktwy0oQsZKE/Crg03/Vo+ArDE9P9WR9NV+UW/wAxVajGUelW1dVDXRVKUpQbbpjQd01Jpu63m2vwizbQovMLWoPEBO7KQEkHIzjkdDVtv9G97vuhp2poRjCDCK1KbWpQccCBlRSAkg9fEjoa2/8Ak3XtMLWj1pk4MW6sKaKVdCtIKh+7cPprssafaNGXfTfo+bShcabHeCy51JOSnP8AeIcHwqTI+adLaDuj2hpmrlPQ2bWhXZhLi1BxwhQT6oCSOpx18DUbXafTMIelNK6b0PblnsUAyHVHqUhRAJ96lLP0V0tyJbrGq1W2EiMLE4xhyMi1uyTJyOFFxAIB6HnrSx852jRVxuukbjqKO9ETCglSXELWoOHAB4ATjxHiKy7x6IJi79pSL8qx919aWptXZK/BbEBfPPPXFZWodSR7KjUmntOMkW6bJOXXC4Clvg7A2rG0g5BJGSBXWrp/4y9En/08j/8ArppY+btS2NendRz7Q88l9URfZFxIwFHrwPpqHlIIbUQTW1+mF5xHpR1EEgFPeiOfcK7/AHz5U0tCsls0FpGFebPJj5fdUB+EOONyunI5yrIOcVqZ7D5JCfVwfPNC2ASDwa+oNC3Rqwehu+XS72doKi3F1xVv2bEoc7RG1GDnACseeMV7ej9yJN0Rc9XW5MSJfLjOdckPmGuYY/r/AIsIR62NuD/xZNS0mLfKbwwQB0PjViGysnwAr6nuWnrfffSjY5enO6xLo3Eckzu821xttQG1KVhtYTuJKz48YGfbKazjsXn0X32Zc2+9zLatS2JL1uMRSVIKT6oJJKeozxnPsq9RT5jvGkbzZbXAuFzgqjw5yd0dwqSe0GAfAkjgjrWvkYJHiK+uvShqC9yfRVb5MC3MvsXSETcFpbUoRm1NglSfW46nrnpUyuDbdOpstttyIo086xh6Mm0OylS8jhRcQCAeh5BzU6inxZg5qihxWza6bt9v1zdBpxa0QGpJXHyhSFN9DtwoAjacjkeFfTlgt8DXL+jtfuqaQqBEdEtPh2iRgfVVvPwrUzRT5CQ2FIIWogjoMVcVADaOAK+lvRq7H1FK1zrKPb2LpqFL57hFewdjQR+DxnoTjGf7OK9NdwzfvR3bNQarskezalauDKWwhOxS09qAQQecbcnBJxtzV6qmkp8xAlSuPjQo86+yr5pubJ9Oenb41FcVb41vW046ANiVYdGD7fXFfO/pZgBXpFv5SrK3ZxShJ4AJIFS7Jhz3YfLirSnzr7S03bplqmWzTd6eYnR1Q8OMM2bEfATjKns4ySOhHOegzXyjr+DGteuL7Bht9nGYmOobQOiUhRwB7qkTZUw1sp9XgeNXbB1UOa9whJHBq7ZjGDmqlsYIGaqE8eyvbsyfbVC3ioWxyjnOap2ftrI2GvMhWT9lLLZ9Uq49KtNRtSlKGgyLdNk22fHmwXVMyo6w404nqlQOQayb/qq9XG9MXybPcdurK0KbkbUgpKOU4AGOPdUrZdFXS86TueoIK4q4luJD7RWe1AAByE4xjBz18DUhdfRNqZl3T8ZSIxdvSsMYWrDZCN5Dnq+rgZPGehoNaf1FdtT3p2ffpi5kvskthxSUpwkHgAAAeJ+NbXbddantltECDepbUQDalAUDtHkkkZT9BFYumPRjqGTqy72eKmK8u3YblSku4YbUcHG4gEnrwB4Gtu07oCXafSPZLXqmE27DlqUUlK9zbwCCeCPI48jQc4dcW86tx1aluLJUpSjkqJ6kmsq9a/1Om7Wd8XVztbY2UxFdk3+CChtOPV54AHOa6jrH0Q3t29XeXYLew3bG3P8AZ2O1wtaQkZ2g+3PU1oVp9FepNVs/KMJuLHhoPZByW92e9YJylIwTx0pcDVbrcZd5uj064uKflyF7nXMAFR88DitstertRWW2i3W7UE+PDIwlveDsH9kkZT9BFbbpbQ5iaf1YzcbFCmTLcFBUh2cUqjnsyfUCUkK8+SOeKkNQ+h6VD0Oi8Q5TT09pkyZLLqtraWwgqVsITkngcHHjSxzhN/uo0/Isabo4q1yHC46wpKDvUSFElWN2cgHrVmm75dtNLccsV2fhhz54QQUq96TkH4VNaZ9GuqdQWdq6RrbEYYeTujpkSOzW+PApGOnlnFahIQuFdpFsuERcSa0vs3G3D81WelWxNnUV/Xf03o3uWq6IG1L5VyE/m46Y9mMVmXHWerLhAmwpl9feizMh5taEEKGAMDj1RwOBit41N6Gn7LpIXeHKS7Kjx1PzG1rwlKUoKldmcZJ48cVOaw9GC7pC08dJW1iOpyMXJby3SlOSlG3OcnJyroKlwOPI1HqVGnVWJN5f+Sijs+7kgjb+bnGcezOKrbtWaxtNtNvtd/ksQwnalvdnYP7JIJT9BFS1r0VerhqSfY+yYizoI3Pd4eShIScYIPOQcjp5is+Z6Ob3b9QWi2z0NBq5PdkzKac3tE4JIzjIOASMjmljmD1ulvPrekOB1xaipalLJUonqST411+7+kO3xPR9J0/oyxO2t6YnbIWp4KQnIAWU88kgY6DrmvD0rejM6Jit3KNcFPW1xaWiXeHA4dxwABjGE9c1Ieh7TNu1LpDVK3YiZtwZb2xFHIKFltWMcgdcdaTI5LZrjf7FM75Zn3oUrGN7DgGfYR0I9hrKu2odTX+Y29qKZKm7AQgKUnaj2hIwB9ArZ9YejzUOlYkaXcg32UlwNJLKu0ws9EEeZ9lSD3ol1gzbFTC1HUtKO0MUOAvBPnt/yzmtdX1SkYz6RdXMoipReZgEbhsKAVjjHOQd3B8c1p+o51wvFwdlyu0ekOrLrjuzG5R8cCuvN6btb3oUiXRMVkXd2UlnvJUQeXduOuP3V4q9DGqw+ttKIKglAXvD3qk8+qMjOePdyOanVBTQWvSRrphMUIvc/EYYbCkhXhj1sj1uD+VmtPusyXc7lJm3BxTkyQsuOrUAkqUeScDiupWP0fagvFxnw2oqI7kFWyQuSsIQ2rwGec+fGa0v0g6auOl7+Yd0Q0HFtpdQppwLSpPTPHTkHrikUrWUdfKvVSnhjYQfZirRjIPFe6FDHJGK1aKNOpXwpICx++vUhJzkYrxfSncCOh64q5tz8knkdKJS9LYxyDWOopCj7/OskkEY8KjnF4cVx4mi0kDVpq6qGsKtpVapQdY/k9ajt1qvl0tl+kR2LXcoxStUlYQ3uT0BJ45SpQrrtu9Kem5r+oHrlMgNps8lSoBW8kF9AaKct5PrEneOPBQr5Jrwm/iD7xSh3T0J65tMyyamsuoX4cedcpbk4OTAewd3hOUqIIxgp8x1rbX9V25nVekLabnYVwYLq3FOxNyG4/4NSQntFKIIOf3V8v2H+eL/ALn+YqepQ+m2brpa361umqV61Q832fZGAHQpOcD5uD6444wOp61ruk9U2qfDfbul+04LbKmvSXbVdmtqmUqcKhsWSATznoeT1rg1Qt9/nTGPL/OlD6ct140tFtXpAYtE+KxFkoIjNuPBJdV2JCtgUckbulQt8mWLUvoQgW5/UjFuuFuSXiwtQ7R5aErAbCSQSFbhyM1y2FaLjOhyJcODJfixxl51toqS2MZ9YjpxUHdlBJaz7f8AKlD6Ot+qtNX+yacmGdYYdwtTSNzd03hbCgEjLeFJB+b7c8dK4T6S7+xftcXK4JXFdK1JQH47akIcCUhIUAokjIAqAf8AxLigD+LPNYEVsgKdWjeSM8joKVQ+hNSXLT+ovQpa216jYiT7XE3mKVDtHnEtlOzbkHBOOeRWTrTV1uVqD0YLt1+iqixnUGapmWnY0PwYPaYOAMbhz7a4pbbHcr2w6LVbZMwNNguBhor2A+eOnSohloZUFAgJ8PA1KH0c/dND3D0iasfuM6wuzHGGBAkT1JdinDeD47SQrGRnPlWH6SdSWU6B0wzBu1okyYt0ZcWzbQloJSkr3FLWcpTz9Oc+NfPLzO95fqHw61lJSkuRzt3DI5AzjpSh2H+UPJsV7VAv1n1FGmSQlEb5PaUFEDK1FxXOUkZAwRVnoY1JbrToLWSJ1ziQZrjKjHbcfS24tQbXjYCck5x08a4w66gOv70blFfGD0xWK422tR+cnpSliZr2fQa9aW2H6HNKOy50eVcYdyZkOQlPpU+UIfUfm5z83H7q2q4620yLo7qi033S7TioxQVSUOqlnj5hQlYOMgfk/GvlOSW1KSFrOEIATgdTWJwDnHApMEW+hY+qbZO9DcGP36Ai6P3hLxgoeSHEhUkq4RndjBz7q6NrxFhR6Q7NcLvq9VmkW5kP9ycc2IfRuVyCSBkkEEAEkAV8cMOOR32n2TtcbWFoVjoQcg1septSXXV8xqdqCV3uS20GkrLaEYSCTjCQB1JqSO92PXFuu+ttUSYWoLVEhSltNphXNg9nJShASXNxI256Y5yOorR/TQ/pw3+MdMdgpIZxJVGOWQrP5Ph08uK5bamim4KVuyMHP01KShmO6P7J/wAKuLKgcbV/7iqZaPRKVe4V5MvtNt4dWlJKlYz4+sa8pjqWIanAsDKvVxg55rSskNNr+cyjHtAqimY46tNj/hqkI9szuUOTz19maBrDalDIxk5z1oLhHZUM9kkVrUpCEyXgAMBZH762hk5aSfMZrU5iv9sf/wDMV/jQStWmrjVpoKGqGqmqGoOm+ijSVl1lYdQw3mnRqGMyX4a0ukBQxgAp6HCgPrVl6i9HNth6L0fDCHE6rv8AIbRuW4djSFHJJT7ApA+NW/yfmrfF1Gu9TtRwrUqJ6nd5CgnvKFJO4ZJGMeqfHkdKivTTrtd59ICbpY5J7va1NohOp6bkq3FYHtV8QBU+o32F6NvRzE1MNHi43NWqCxuLx+bnbuxjG3pzjy8c1hRfR5b4uidYSbklbl0tEhxlp1DhCSEpSQdvtzmsS3enkSpAluaStn3QhnZ8ohXOOmMbd2PZurH0d6UpVkbvDV2tzV3Zubqn3kuL25WoYVnggpIxxjwp3E7H0DYl6c0NMUy9292ltMyj2pwpKgonA8OgrXPTzpTRulI3drZIeN/cebW3HUtSg0xg7snGMlQzyc81K3X0uJuDdgSLC1GFqlokhDL+1CgkEBCRt9UYPt6VzH0uakGrNXLvAimKHkJT2Rc37dqUp64Hl5UHb/Qi3Ge9HWrW57ymIish51IyUI7M5IHuqI1H6PdMXnSsTUGk35a47EptiQ0+rBWlS0pV4cKG4HjjFQno89If3H2a5QfktE4y1bgpx3akerjBTtOR9IrL1X6TnbpYWrTZbRGs0QOJdWlgg7ilQUMAJAAyAfop3EldPRhp6P6Y7Pp5mNI+SZMFT7oL5Kt4DmOev5Ka9NMeinTc24apU+zOl/J05caPb48hKV9mMYUSojOcnqQPVNZCfTaFTIkx/TMRcxpBbcfDvrlJHRB25SM845/zrX4HpEgNXS5TJumY8lUqWqUhxMhTbzZOPV7QDkDHgBTuNh0FpOCxqjVkGAdR2yJHhtrQ29IUw4pRCsg7MBSfAdfGo206E0TH9G9i1DqVy4R1SXAl5TK1K7RRUsBO3wHGSfZVWPTDI+XrpcZVoQ4mXGTFaaQ/t7JKSo5JKTuOVHyrXbrrj5Q9H1s0ybeWzCdDvee2zvxu427ePnefhTuNnunoYgq9J0S0QJspqzuwlTXQVbnEhKwkpST5kp5PTnrTVfoxtKtLTbtYYt5tj1tc/CM3JOA+2CMrT9HP0YxWLd/S7Lk6qt97t9uTFVGYVHcZcd7RLyFHJBIAx0HwqG1T6R4l5gOQ4Gnm4Lj7wW86qW46Tg8hI4wD0I6fuNSRtupPRTpa3aZVKZhX25OGMXhPguIWkrwSBs67T5hJ4PWsbS/op0vK0LbLrIYvF3flshx5y3PI/wBnJHKQgkE46dFHIPFY0P0tR7XFf+SdLRYc11soU41IUGs+fZYxn6c+2sXTHpOgWGNHUxpKMi4Mt9mJEd8tBzjGVpAO4+81albcZukRDU+Q22hxtDbikpQ6fwgAPAUPPzrDDYCvf4Vtt4fF5usy4S2UB+U6p5e0YGVHJx8awjBjnq2PiaqWgC2D59c16snYNvWpkwI5/IP1jVioLCQVAK4GetJFtuAD/wA0glJOT4isuUpIZc3EAlJwM9eK8ISAl7gLB28ZOeK87osJLfCTnPUe6s4XS9r7PJ2MJLKMLCcKXnnzJxUW2pvARIyU5xjy9tZoWkpVwlPHFWoQ1lRKEKGB1rdpS5m4FhRQ3hxscAngmpVDiXYfaJ+apBP7qhlNtAuAJT62CCD800by0laFKUUk5G1WBg0E2z+JR/dH+FafNP8Atj//AJiv8a3Bj8Qj+6K0yWf9re/vq/xoJw1aavPjVpoLTVpqtUJqC5ppx5wIZQpxZ6JSMmrJsOSIi1mO8EBQSVbDgHPTNd6/k8JA0hqp2xIjr1YkERw7jOzZ6uM+G7dnwzjNbVqlV+V6EXjq1tlu8GbH7UNhAJ/2lvBUEeruxjp7Klj5ctEKU1OX2sZ9G1vcrc2RgZxk+zNTqY7ymi6lpwtDqsJOB9NfQXpu1azB1HbdLPxWEw7o00ufLVnelkPcBJHlhR5z1rc3vl6Jqe122yWm3HR5ZAdcGPVGDnAz7scHOaWPklLDy2lOoacU0n5ywkkD3moi/wAWQHYeWHR2oPZ+ofX6dPOvpfR7lmma213oqC60LbNbK2kNkENr2hLm33FXTw21uqYVgvtyhtMLQF6PlhJHGE/gOB7huSc+aDSx8oONuMqKHUKQsdUqGCKj++q/NFdFvNqvGtpuotUwWku29l5alrU4lJShKcgYJycJArlyHCM4xz51MpRmicfFH76uE8fmH41glxZydice6qbj4teHl1qXIz+/I/NVVwnI8Qqo3fwco9mar2jZPrIx7jTqkSffGvMj6KqJbR/KHwqL3t+Ssew0Cmz13CnVJaVElo/lCrg+0fykfGohRSANqiT41bup1yWmw42fyk/GqhSD4ioPNM06y07lNUUEqBB6GoQKxVQ4rwUR9NOstLtNIbVuTnOMdao8w29jtEhRHSortnB+Wr41Zc58iKmN2Sh66STkZrWM2Wku5M/1XwVVFQWfzFfQag03uWOobPvTV6b9J8W2j9B+2tKlzb2h/WY9hqz5NbJ4W4PeKjRf3fFlB9yjV41CcetG+C//AGoJ1CdiAkdAMVpUgZkOn+0f8a3VCtyEq6ZGa0d1RLiz7TUE+TVhNCqrCqgqTVpNUKqsKqo3P0faptWm3JZuljNyL23Y63KUw6zjOdqk8jOeeR0qW1/6UReNKosOn7T8kW5LofcJfU864sK3AlR5685OScCuaFVWrIUkpV0NSh6Xm/3a9y0SrxcZU2QhHZpcfcK1BOScAnwyTWXG1lqWNb/k+Nfrm1CxtDKJKwkDyAz0qMShtJ4Tk/GvdAV+QjHuGKC2zz7naZ6J1pkyYkxAIS8yooUMjB59oNZrWpdQwHJ7jN2nMuXEky1IfIL/AF+fzz849fM14KQ4BlZSke01gyjux44qjZbfrm4QLe/BiSJbESQCHmm3iEuZGDkePHFQCJyATuSr4A1gEUqVYkhOaP5P/p/96qmY1g+tj48VGYpip0wlJUS2efwmD7zV/eWz0d49qxUNSnSUmw+g/wBICPeDVe1Seisn+6Kg6Yp0lJ7dkHp9WhIA52/A1A4x0q8OLHRxQ+k1OkpNZHI9X4mqHxIIx76h+1c/rVfWNO3dPVxR95p0lNkjojqjoKyjtOc5Xg169jHPQD6HK1cSHR+X+6qiS7+cPhVobDMabaaSpvOScEE5qMvnzYn/AJZ/xrDEpwfmn6KpLlLkhoLCR2adoxSIqR4VkRH22A4oo3uEYTnoB41Yh8pSkdm2QnzHJqvbpzkstn1cdP31oeJx4VQjIr3U60oHLIBPiDjFebiklwlCdqfLOaDdm+Gk+wVox6mtnTeohRjKwceKa1ioqWU8K8y4SeAT9FS4tyB0CavEIDyqiFw4o8J+NVDLh6kCpruftFV7r7qUMKLFglv/AGtUztM/0QTtx9NZKYtpH6d9IR9tevdceVWuoQyje6oJSPOszj92Jxv6r249rzx374Iq1120NK2gzVK9gRx++op+YXMpayhHn4mvFIFTo+50feUitVqWcqVcCfcj7a8HBZ/E3H4I+2sUgV4uI5p0/c6PvLGUKtr1KOeTVpTW21mKpV4TnpVezNB51U++rig+VU2nyqClKqQfI1TB8jQKZ91KpQVz7KVSq+A4+mgpTj20FKBx7acedPClA486r9NUoPPigYpiqgeNXYoLMVXHsq6vUMkgc/uqjdMCrfGrqtNVCqYqtKDCuE5EQYwVOEcDwqBffckObnVEnwHgK61ouLFcFodkRm3z8tsoIUOo2nHPlnnHStfsFlZ1Ndrkq4peS8HUTFOl0qPYBf4YckkkJUFAnn1TUGhpr1Fb2zpqE/bELFsltpfgvT+/dqS2ypK1hLJGMHhKU8nOVjw6+eobQvTEe7S4cSSwoXSRbmFuJJCoxbUOM9cpPzvbUVpFeaq6gNN2FV0uyBDfDVvcjRy12jq1OdoFFTnqIURjASBjGSM58dVtkK0pi6ofkNPSkQNqIxUpTR9Z3YFKGM9OcedBqhqm3NdRu2jbQzd4tvhoeedRJLRUFOpRJaDSllZWW8A+rkBG7IVxk4Jtl6Vt0PtpTVukS192ivIgNLcSU9otaVLGU79o2DGR1WM58Q5ltx0piuna3s9sW7qW9FKwtibKiLb7TrJL+W1e7s1KOPNs1gWa0wLnYLEF2wFzdOU4thSg5JU02FpazyMn2DPl1oOf0xW6v2GANT2FhcSYyxPYS+/CbJW6ycqG0ZGcEJChxnCvHipqbp2GzZbkzHs7JfeXCWy8HlqKEuKWklJWElCSU9FDx5yMUHMMUrq83RtphFMqRAeDTbU7fHS84AtTCUFJ3LQk8lRBIGDjjFQNyt8GbedHMs2tEOLOaZDvZKV+E3PFKuSeoAxmg0WmB5V0liy6fmiK01bZDDsqRNiBfeirsyw2lSV4xySVgEdOOMZrP0zpaNGVYLh3dbMpmbbXC5vWsOB5QPJKAjxBASSRyDk9A5NtHkKbRXVrVpe2vXBcRJfdgPiFmS26UplhyUlKzjwCSVJAPIKcnmoyLYbTLtqLrGtshzER5wW9L6lF1aHm287gM42ubiB+b4DoHOygdasKRnit/k6ZiJ17MtrMJ3useImSqO66oKT+AQshRSkqOFK6AZ93WoHXdoZsepHocVK0Ndky8ELzlG9tKynkA8FRHIB86o13YKbaupQW7abT41dSgYqmKrSgvZTuVWeG+BxXnDa5qQDYxQTG4KHBzVKj2IqkjIw2nzVyaOS2I429q4tfvpaUkM0zUQm5LKvVxj2is1h91wZ7L1fzs4pZTOQ642AEOLThW4bVEYPn76yIM9yExLQwhvfIb7IukHehJ+cE845HB46VmWG0s3SBKfVLUh1kkBlprtVYCc7iAoK2+GUhWPECs6NpcSJj8ducgLbVETlbZAPbo356/k/v9lLga6HXQwWQ64GSdxb3HaT54q55+Q8hKHn3XEp+alayQPdU4zZ7Y7Dent3ZxVvaKEKUIv4QOKKsDbvxjCCchX0VlSNJBizGaq5Mbi2X20naErRv2jGVbtxxuxt6eOeKWrWUPyG3VOofdS6oYUtKyCR5E1j9mAhaQMJXjcPBXv8AOtze0iw3OZZFzKmnEuFLvYpAdKccNHftXnPGVA8cjoDGIsSPlO5sPyXGo1vbLrrhYIc27kpADZI5yscE+fNLEAvcvsd61nsfxWVH8H/d8voqxSFF4vdq92pSU7w6rdgnJGc9OTW5T7PBtWm7i4tXeJa3owYdUzgBpxtTgPzvVUQOeDjGBnOa8mNJdu3EcbnJDcssJYUpvG4rCivPP5BQoHrnjpmg1WSEP2pEBTSUtdsZDigVFbzh4Clkk5IBIHTqfOsBNuQhCUtPSG0pX2iUpcIAV5j2+2txkaeYNnfukKct6IhorT2jGxZUHUIKSNxx+MBzk+XFV1Dp1iyxHFuTluv95XHbbDGArYltRUVbuPxnTB6U7DSXbWpx8vmXIL5O7tFKyrPnnrRyBKWt1ZuMlS3RhxSlElY8jzz0FdCjaJcfYafRNT2Li2iD2fPYqQlTjuM9EFaUkeJz5VWLpFLUWDMky2ip3sXjHUUgLbWsAAetuKsEHG3GM88UHO3o1zc+fcnnOCPXWo8EYI6+QA+ivARLkjstsv8AEnLfrH1DnPHlzXTJumID92e7nceyimVIYIcaCChSBuCEZXhWQcDJTyPdXrG0tCQXGrhIkJQjvZSpEUody2whwBQUrp63QeXUgggOVd2uaCClwkpJUMLPBPU+80zeENobC3+zbwUpDpwnBzwM8c810O56VNvsaZzkxvtuyaeLBKBlLgBG31iokBQJBSPHk4rxTYY/Ywm3Z6kz5TbbqGBHUtJStW0AKBJKsc42+zOeKDnqVXNlASgSEpScgJWcA5Bz8QD9Fe9puUu1ykPdzL4QFJS27vCRnqQUlJB9xFdUj6XjQnHVPLEtl2KVt70pSpC0yG0HISpQ6KPj49BUPd7M13zUjzCg0zb5fZIaCcgpU4pIGc8YxUHP7neJk+8O3N8uNS1kHc1lGwAYAHiAAAPorBefL697zji14A3LJJwOBXWJ2kGozF0UJ5edhPPNFDbG7AbOMrwrKArwOCPMisKDphiXBirckhEuY067GZ7HclSW92dys+qSUqA4PtxQcw3N/nGnqfnCunah0lBt0aUtmQJLkV5pl5Ko4QAXEKUkpO45+aQeBWsKt8U9WEfQMVRrOB+cKbfIitiVaoh/ogPpNearNFPgse40EAUkV6Mo3LqY+RGPBbg+mvZq1tt9FqNBjxm8AVnBvjpXoiMlHiav3N/nJ+NBD99cVkF9PtB9U/4GrGwFH8IPVPUpIUf8c1MLQ2sYWlKveK8FwYy/6MD+6cULeKHYrA9Rs7vznEkUXJ7X8sK8gDVTbwk/gnXEe41jSLY84MdqlXjyMH41Ji0SkTUE+zxVNRZDTaSorCVNoWpCiMFSSQSk44yCDxXk7ri9dg2w1LCezU0pK0soDhLQw2SsDcdo4GTXlbNMGS0FSJPZb3Qy2EJ3ZVjPPTA6VltWNiPBEgOBbnahtSQnocE9forHVjdMeJjdPa0apvgdccW4z2akBAY7s0GgAoqyG9u3OSTnGeTUsvUFzkRexkupcGSQtbaC4Mq3EBeNwG7JxnxrH+TER+7hxwhToOUoTuIUPyR7ayE21HaupLiyUFICUpG45GehI5qeLhynjYcslep7qtYUp5rHrbkd3b2LKsbipO3CidqeSCeBWKm9T0XF6aHgqQ8koc3tpUlaePVKSNpHA4xgYHlXjb4fe1up3LGwgYSnKuTjOM+HjVqoqQxIc7YKLK9pSkdRnGc1rrxulnbjdL512mzUPIkv70vOIdWNoHrJSUpxgcAJJAA4rLlX11MOzxoC32RbtziFqUCe1UrKiPIcDA9/nUe+wwmGl9px07l7AlaAM8cngn2Vd3RlTAdTJwkLSlaijCRkZ4PjiniY+54mPuzPuluna7u2Z29mWuy7u32W0qCiOz27fnAHOM5ArGut4nXU5nv9r+FW98xKfXUEhR4A8EJ+FEW0OON9k6eyU2XSVJwoAHHTPj76wJCFMvrbUFApJGFDBpjnjlNQuOzHKahJt3+5tMNstzFpbbjLhpTgcMrJKk9PEk+34VRN9uAjMMdq2UMbezUplBWkJVuA3kbsA+GcVFZpurbade1Rdnn0uuPtEgrJSI7YQsrxvKkhOFE4HJB6CrFaluqn0PKkpKkFZSC0gpG9sNqG3GMbEpGMYAFQu6maUJGVd5kqE3FfW2tpCUpSotI37U9E78biB4DNe8fUV0jR2WWJIQGdobWG070gK3hO/G7aFc4ziofJqmTQTj2pbo6EgvtISlBQEtx20AJK0rIwlIHzkpP/APprxYvk9iXMkodQp2Yoqf7RpC0rJVuztIIznkccVFA1WlCZe1LdXkSUuSUqMguKcWWkbvwhysBWMpBycgEDk14xr3PjQTDZfAYwtIy2kqQFDCglRG5II6gEZyajKtWtKBlSgB7TShJTLvNmJkpkPbxJWhx31UjcpCSlJ4HGAo9POsCsRycyjooq9wrGcuSzw2gD2nmliUqxx1tseutI95qEdluqGXHSB7DisUyEDplR9gpYnHLg0n5gUr91YzlwdV8wJT++ogvuH5qQn31Yd6vnrJ93FRWc9KJ/GvE+zNePeG/b8KxgEJ8hV24edBs1KpVRVZM1cCatpQZ8OeYzYT2SHNq+1Ruz6qsYz7asRLWmP2acZ7YPBftAxWJVwrPRjd0z0Y3dJJdzW8htMhpt1Kd2cjGc+PHQ0FyHbhxUdpRTtKM5ynb058ajqZrPhYcJ4WHDNiziyXd6EuBxQWQSR6wOQePfVqpi1IlBSU5kKClEcYOc1i0rXRjd0vh43dPaQ+XUsp2hKWkbQB+8/TWQuc0tphBip2tYwN5wfPI9tYFKnREk68ZSDlySp9a+7p2uJ2LSVkgjIxjyxisSU+qTIW6sAFXgOgHhXjQUxwxxnsY68ce8K0zSqVtszVa8lyGmx6y0j2daxnLigfi0KUfbxQZ1MgDJIqIcnvK+bhI9grFdfz+Mcz7zSxNOS2UdVgn2c1juXEf0aPpUahjIH5KSqrVOuq6YT++oqScmvrzle0f2eKxHJCM+svcfjWIUlXzlE+81X1U+QoPUyCfmoPvPFWlbiuqsD2V578/NBNPXPkmguCE5yeT7ab0p4z8KpsB+cSauAA6DFBbuUeifpNNqj1V8KupQUCEjwyfbVqR6o91X1RA9RPuoNnxVcVfimKqLMVXFXYqtBbiqiq1XBoKUq4Cq4oLeaYNVUpKBlSgB7TisV2fHR0UVn+yKDIxTBqNcuij+LbA9qjmsVyW+585wgeQ4qCZccQ2PXWlPvNYzlwZT83cs+zioVbyEnlWT8a8y+T8xBPvoJVy4uH5iUpHxNYzshax+EcOPaeKwStxXVWPdVm0Z5yT7aKyFPoHTKj7KsL6z81IHvrzJCfIVTfnoCaC4lavnLP0cVQJSnwqnrnyFAgH5xJoK70g9ablHon41UAAcCq0Fm0n5yvhVQhI8Kup1oFVNU8aeNBWlPClApSlAPQ0QfVHuqh+afdRPzR7qDbsCqYru/wB78v8AWRP/AEX8Sn3vy/1kT/0X8SlwjhGDVcV3X735z9ZE/wDRfxK8HP5PUtfzdVNoHst/8SlwOIngZJwK8HZjDfVwE+Sea7Wv+Ta+58/VoV74B/1Ks+9pc/WlH7P/AIlSxw126j+ibJ9qjWI7PkLz6+0f2Riu+n+TS74aqQPfbz/qV5K/kyvq66uTj2W/H/5KWr58cd5y4vJ9pryMhP5IKq+hx/JiWP8A5qR+z/4lV+9kc/WtH7P/AIlLHzqXXFdMJ/fVhBV85RNfRv3sjv61o/Z/8SqH+TG6f/mxA/8At/8AFpY+cwAKoVpHj8K+jPvYXPHVaT/9vP8AqVcP5Max01Uj9n/xKXA+ctyj0T8aoEk/OPwr6P8AvZHP1rR+z/4lPvZXP1rR+z/4lLgfOWxI8KrX0Z97K5+taP2f/Ep97I5+taP2f/EpY+c6rX0X97K5+taP2f8AxKfeyufrWj9nn/UpcD50p419F/eyufrWj9n/AMSn3srn61o/Z5/1KWPnOqjivov72Vz9a0fs/wDiU+9ld/WtH7P/AIlLgfOY61XxNfRf3srn61o/Z/8AEoP5Mrn61o/Z5/1KWPnSq19FfeyufrWj9nn/AFKr97K5+taP2ef9Slj50qlfRf3srn61o/Z5/wBSn3srn61o/Z/8Slj50V80+6qp+aK+ij/JlcII+6tH7PP+pQfyZXcf+K0fs/8AiUuB9JUpSshSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSqLCihQQQFY4JGcGtPf1JcDo9MiKwy5flPGEGCDs7wlRSrjOduEqV7qDcaVrny+uYnTwtwRvuX4ZYWM9mylOV/TkpT7zUfpjVxetdvVdGZalSHlRzM7EBntO0UlKeOeeBnGM+OaDc6VAnVEMP47CX3Ptuw772Y7Dfu24znON3G7GM+Na5K1hcVWO+SDCkw1wpgaQ+ptBSEB1tJQQFKJXhR6DHtzQdBpUCjVMJLkpE1mXBWwz3jElvG9vONycE55IGOuSOOa8pGrokSNKdnw58RTDCpIbebSFOtpxkpwojjI4JB56UGx0rDt09M+KqQ0w+hvPqF1O0uDAIUBnODnxwawk6jhqs0a5BL3ZyHUsIa2gOBwq2lJGcAg5zzxg0EzStfZ1XCcWyvu8xEF5wNNTlNAMrUTgYOcgE8AkAHjnkVkK1DETZF3Qof7uh8xynaN24Pdj0z03e3p8KCYpWFc7izbu6mQF7JD6Y4UkZCVK6FXkM4HvIrAXqe3IXekqU5m0pC5Hq9QUk+rzz0I94xQTlKg7nqJu2o7WTb7j3VLYcdkJaSUMpIyd3rZ48cA4rxl6tiR5VwZRDuEnuG0yFsNBSUJUgLCs5GRg9BzweKDYqVqzWpn3tXC3x4MiRb1w2ZDchsIx66j6+SsHZjHhnIPHSpy6TlQWkKbhS5ilHGyMlJI9p3EAfGgzaVhWe5R7tBTKi7wgqUhSHE7VIUkkKSoeBBBFQ8PWMKUmM4mJPbiyHu7pkuNANhzcUhJOc8kYBxjkc0Gy0qAXqmGl0nu8xUMO9h3wNjsd+7bjOc/O4zjbnxqqdVW4sWd0l5Iui+zZSUjKFeO/njBwnx5IFBPUrDgXFmc/NbYC/9ke7BayBtUraCceeN2D7QazKBSlKBSlKBSlKBSlKBWts6eeb1i7ci8g24gvIY53CSUhCl+WNg+JNbJSg1rTmnHbVerjKddbcjqJRCQnOWW1LLiwfetXh4JFeMfTstvSMG1qcY7wxLakKUFHaUpkh04OM52jHTr8a2hbzaHW2luIS45nYgqAKsdcDxxVipcZLbripDIbZJS4orGEEeBPh1HWg0qForujiY3cLTIiJfLiZLxWXdm7dtKMYKh0Ctw8DismZpy5uRL1BaMMxpsxMxt1TigsHtG1FJTtIxhCuc+XFbV32J3vuvemO9Y3dj2g3489vWsC1X6JOZSXXGY7y33mEMrdG5fZuqbyBxnO3P00EdqvTK7/Myp1ttjuLsfJySHC604g48U5a55qKk6PkSrZcGRb7NDkPRFx23GVuLJUrHJJSNqeOmFe/it2cmxW5SIzklhElYylpTgC1D2DqaiHtV2uPNhRZb7UdyUl1SS483tSEK2+sQrxOce4g4IxQTwASnA4ArRbVb03TVcx1gumyNFUhKVtKb/2pxOxW3cBkBOT71mtyM2KJYimSwJRGQyXBvI89vWvZ11tltTjy0ttpGVKUcAD2mg1BvT92XZ4lhkuQvkuOW094QpXbONtqBSnZjCT6oBVuPjxzXjL07elWqTaWHIHclze9IeWtYc2l/tigp24ByTzny4rb2p8N2Oh9qVHWwtQQlxLgKVKJwADnGc8Vd3uP3VckPtGOgEqd3jaAOuT04wc+6gxNRW43Wyy4aFBDriMtLP5DgOUK+hQB+itaVo+UtFoKpLO8KKrp1xIy4HiE8f1gxz+So1sFk1FbbvaG7jGlMpYU2lxYW4nLORnC8EhJqSjSGZTKXozzbzSui21BST7iKDRtS6QnXR69Yat0kzUKEeTKcXvi5bCdiUgEYyCcgj5x4NTtussiMb6XFtHv+zs8E8bWENndx5pPnxUmm5xgp4POtM9m4WsuOo9YhIUcYPHBzg4PGcY5qpulvDTLhnRezeOGldsnDh8knPP0UEBaLFcrXNtLzRiOpatrFvkhTiklPZnO5Hqnd1PBx4V76qski6TYLzbUSZGZStLkOW4pDairbhfqg5IwRgj8o1NybhCilfeZcdnZjd2jqU7c5xnJ4zg491XPTYrIy9JYbGwuZU4B6oxlXu5HPtFBE6Ns79ktT0WSWNy5TzyQxnYlK1kgDPPANYTGnZbekYdrLjHeGZjUhSgo7SlMoOnBxnO0Y6dfjWxd+id7MXvTHegNxZ7Qb8ee3rV3e43dUye8M93UAUu7xsIPTB6c0GlQ9Fd0cEb5PtMiIHy4JLxWXQgq3bSgDBI6BW4eBxXurR8hci9lchvsHkqNuTzmOtag4tR//cCSMeArbUTYrkpcVElhUlAypoOArSPaOte9BGaatzlss7MeSpC5RKnZC0dFOrJUsj2ZJx7MVJ0pQKUpQKUpQKUpQKUpQKUpQQGsmXkwY1yhsuPSrc+mQltpO5biOUrSB4koUrjzArVYtkuDEuHbnGHVxrutufcHcEobdQStxJ8tx7NIHkDXSaUHLIVnl5TDnvTEXATe1K2rZuKldpuDgf6YxjqcgcY8K9o0eM3YL1Cl2KY5cpUuWWT3RSu1Knl9moOYwgDg5JHmOua6bSg525GfgXZpaI7064uuRhJbkQC42tSUoSXW3sYRgAnk9QeBmvK3QzDVp2XcLe+plpy4Nu4iqcUne8SjKQCcHBwcY59tdJpQcsZs8tSnoc96Y3PVOU6FtWztCT2m5Lgf6AYx1IIAxjwrcNZx1uG1PLjOS7fHldpKYbRvKk7FBKtg+cEqKTjnp04rY6x35sWP2vbyWG+ySlTm9wDYFEhJOegJBA91Bzy8Ww3SXJdt8CSxaZEiA24jsFNF1aZAK3AggEAIIBUQOnsrozcZhqN3dpltDATtDaUgJx5Y6VXt2u8FjtUduE7y3uG7bnGcdcZ8a9KDmdpjBqyaZRJtklTFtAbuEfui89ps2pXt2/hAkg/Nz84Gtm0syDervMhxHYlsfS0G23Gi12jqd29wIIBAIKByBnbWzUoOei1OSdTt96hOORvl15472iUbe5gJUeMY3DGemeKyo+nYhlaxC7Yjs3lAMgs8KBYQTs4/PKunjW8UoOYWBxhi+rdvlvkyHRaICVrMZT5bWUr3BSQCQT548CKydO2Fxy/W1c6A4iG2xNdjsuoyllKnmy2hQ6A7ckJ8Meyt/biMNS35TbYTIeSlLi/FQTnaPo3H4170HNBC3aabtItclOpUuDMoxlYDwXkv9tjbjqeucerjwrPYtc35YFh7B1NoiSFXBp8j1FJPLbWfNLhUceSE+db5Sg5fp20yEqtEaY5MbuEV9LjoTbMesD66i/0UlXOTkkhXSuoV4rlMImNRVuASHUKcQjxUlJSFH6NyfjXtQKUpQKUpQKUpQKUpQKUpQKteR2jS0blJ3JI3JOCPaDV1UUCUkJODjg+VBoKr5clRI9tQtxy7W8vOTQj5zqGU5T/zCpv6CqvZqRLiQLJdm70/NenPMIcYUUlp0OEBWxIHq7QSrr0Sc5rYbJZTAmzZ0uQJdwlhCXHg0GxtSMJSAM+Z8fGveLY7VEmqmRbdFalKyS6hoBXPXn20GqRb1JOh7HIcmK76/Pjx1rKvWXmSErT9XII8qldFCbKalTp0954d7lMNMnAQlCX1pGeMk+rgHPAwKk/uftHe1yvk2J3hbgdU52Q3FYUFBWfPIBz5is+NHZitFuO2hpBUpZSkYG5SipR95JJ+mg1JXeLnrW829d4lRY7DEdxtlhaUqyQrKskE44HT2ZrAsVxn364Jtsq5vMMsNuqRIj7ULm7XlthQOOgCUk7epWPDitkf0xb5d2nTbgwzLElLSQ260D2ewKHB9u791Zsyy2yZGZjyoEZ1hjhpCmxhvjHq+VBp3eb1NjhpiY/KYhy32HFxXUNSJKEhO1aSRtO0lSVYxkj6Ki9Qzflmw3ktT5jkNFvgvNqUQhSlF15KioAY52jPhlIrocmw2mVFYjSLdEcYYGGkFoYbHs8q9RareGnWhCjht1pLC0dmNqm052oI8huVx7TQaZfp8yx3R2LFnvloQmB28hXaFrtJJQp0567Unx44FWarlT9PMTGIV1lyu2tkp/LykqWwptAKXEkAYBJxjpnGK3SNZbbGbKGIMdCC0WSkNjBQSSU+7JJx7a842n7RFjSI8e2xW2ZCdjyEtgBxOMYPmOelBDtCba9VWuOu4yZbM9l4vIf2kJWgJIUjAG35xGOle10W/cNUi1Ge/BjoiCQnu6glb6itSSNxB4SAMgfnip9yMw5IZfW0hTzIUG1kcoCsZx78CvG52qBdEITcYbElKDlPaoCtp9nlQaRAmXK53uDbVXWQmM2qc0qSztSqSlssbTnGAQVqSSB4Hpmtk0dJkux7lGlyFyVQZzkZDzmN60AJUN2OpG7GfZUqxb4bCo5YistmOhTbOxAHZpVjIHkDtHwr1jxmI5eLDSGy8suubRjcogAk+3gfCg0KfdLnZX50qa9NfdX3kwg04hcV7ala0NlIG5KglPPmQeecV5RLpdrc2xcpi5yrcuO47JceksOBSQ2VBbKU8g5A4HGDz0rdmLHa489U1i3xW5aiSXUtAKyepz7ati6ftEV11yNbIbS3ElKylpIyD1HuPlQaHIul4trz7S3Z7SJNrlyEiVJbeUlaEApWnYPV6njp5dKlInyi9NtFvm3iWjvsMy3XUFKStY2Dsmzj1QAok9ScdetbLH03ZY4UGLXDb3IU2drQGUqGFJ9xHhWVNtcCdFbjTIbD8dvGxDiAQnHAx5UGpzIDruqLHEReJTmyLNC5CSjtcBbHqbgMAjjnGeKmdGyZL0W4R5j65C4U12Ml5eN60DBG7HBOFYz7Kk4lrgw+w7rEYZ7BKkNdmgJ2JUQVAY8ykE+6vePGYjF0sNIbLqy65tGNyj1J9vAoPWlKUClKUClKUClKUClKUClKUGram1U3abq3bm3IDUgs9utc18tICSSABgEkkg+7FYlu1dNvMmIxZ4UVS3ozjy1vPkIQpDnZkApSdwJ6Hx61O3SzLlT0T4U56DMDfYqW2lKw4jOQFJUCOCSQfDJ86rCsojXRme5LfkPoimKVO4yvK9+44A5zxgDFBEQtUTbmqNEt8BlNxUl1UhL7xDbPZulpWCASrKknHHQc15tailSLkxFmQ+7vNXVMJQbfJBzFU7u4A3DyB9h6ily0+5C7B22szXn0vSHC/EfbadSHXS4UYWNqk5J68jAxTT+mHULMucXGHjcvlBLRc7VX4jssLV0JIJUccA8Digpa9VXJ+BZrlNt0dm33FbbQ2PlTiFL4SojbjaT7c4IPsrFh+kJiTJiuJVb1Q5L6WUNok5kgKVtSsoxjGSMjOQD7KnmtNst2K02sPuFu3OMOIXgZX2RBAPvxS36fdt7jTUW6y0W1pe9ETajCRnOzfjdt9menGaDH09qKTdrm+w41CYS2paVMF895bCVYBU2U9D14PiOtSGq50u2WCXNgIbW+wkL2uAkEAjPQjwzUdM03LcfMsXWQ/KjtuiH2iG0lpa0lOSoJyoDPQ8e+tgXH7aCY8k9pvb2OHHzsjBqZRcVCZRMxMQ0Rz0g7bnISG2+4Jilxp0g5U6EBe3P04x51WXrO4NCBFxb2JzsYSXnJBUltIPRIHXOPbWYfR5bjZGLaX3Slp8vlzA3KzwR7sY+FS94021OnMzost+BNbb7LtWMesjyIPFefp213l5Ix313lXTmoEXXTgub7fY7ArtUg5AKc5x7KjtPXm+3dMe4CLBatDxVgKWe1SkZG4np1FbHAhCLbkRHHXZKUpKVLeO5S8+dQEXRrUYFhq5zhbvXxDCxsAUCCM9ccniukxn2dZjZ8v+UZB1hNF8hxJTlrksSlqbBhuKKmyBxuz1+isSLrS9/J8S5SYsEwHJXdlhBUFnnqPAVMwtENxnrepVzlutwVlTLSwnakHw4H769PuLjfILNr7072bUnvIXtGSck493Nc4x2uUY7+fzt+6z0nvvR9NBcda0Odu2AUq2k+t0zWIdXT7XLuke+Ro++LGElvu6jhQJACST45UOa2TUlmbvtvER51bSQ4lzckZPBzWLN0vEm3eXNlLU4mTF7qtrHG3IOQfPitZ459V4/nu6Z4bOucsPz3amNZzJTD8SWYSjKhuuNLhrUSyoIKtq8+PHUVdZb/AHhEfT9ttzcd92VEU4XJJVwQTyTnpxWxxNKqYjusO3ec+wphUdDbhG1CSMZwByR5mod7R0pF6syIj77USFFU33tCkhaVZJHqnrnOOlc+nZHeXGcNsVM/neE9pK9yboZ8W4sttToLobd7I5QrPIIz7q2CtXi6RRFi9nHuUxt9cgSH5AVhbxH5KseHsraK9GHVVZPVr6qrIpSlbdClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUEJqG/i0SoMZEJ+W/LKw2hogH1QCevsNZFuuin4TsmfFctqWzgiQpI488g4xWu+kC0v3G42Z1FuduEVgu9s026GzyBjnI8f8KxJdmkSbBGahWRyO1Flh5cF+QF9unx9Yk+fQ+VcJzyjKfz/AI8055xnlxH5x/1u6LhDXEMpEphUYdXQsFA+npVoucEwzLEyP3UcF7tBs8uvStNudolTbPFXGsLUVDEvt3Ld2icPpxjkjjPs9lR8nTtyfs1/UxbRDTNUz2MBC0nbtI3K4OBmk7Mo+hO7OPbH/bflXm2JSpSrhECUq2El1PCvLr19lXybrb4rhRJmxmlgBRStwJIB6HnwrR7jpBKrhflMWtrsXISUxcBIHa4Odo8DnHNebmmZcmQ8uXADuLOlhsrKTh4DoOevtp4mfB4uz+lv7E+JIfWwxKZceQMqQhYKgPMirWrlBeW8lqXHWpkZcCXASge3yrRYGlpcd+0GLFERz5OcZkvJwCl1SeCcHk5rCsOlriwsd4gvMux4zrYcStkIdKkkY9VO5WevrHiniZ9vlPGz7fK6Mi6QFsOPImx1MtgFaw4ClIPTJq4XGEYfexLY7r/XdoNnx6Voh0rIY0tZksW5t1+O4l6ZEUoAvnnqehIz48VffLJOn2WEqFZ0wQxKU6uChbZ3g8buRtz7CKeJlXseLnX8v0b9HfakspdjuodaV81aFZB+mtdd1fDZtFxnOsuo7i+WHGiRuKsgDHvzV2hbW7bLY8H2XWFPPFzsnFIO33bAAM+QqIuemZUnWyXEoBs76kSZGcY7RCSAMe3INXLLPpiYhcs9nTE4x3lsCNRRnZdpjx21uquLankFOMIQADlXxxUgm5Q1vOsNSWXH2gStpKwVD3itQ0Vpydb7jOXOBS2wgxYSsg5bKlKz+8VE6c0tcYtyiiZEdQqMpxRkoW0EryD5J3qznoTUjZn2uPdmNuyovH3/AMN4sOooN4iR3WnUNPPhRTHWsdpgEjOPorNVconbOsIkMrktpKlMhY3j6K5naNNXMRbTEVZERZLEnt3Lh2qSraFE4wOc44x0qVt9luMfVj77NsDUVxTynHHVNr+cDgoUMKGT4HjmpjtzqLgw3bJiLhsTGrbX3aA7MfbiLmbi2hawr5pIJKhkAcedS7lwhtykRnJTCZK+UtFYCj7h1rnbenZ7Nn0st20plOwlPCRHUpGSlSjt5PBHjVlw0rcnr/N7WM88zJkh5ElpbSS2nI4ypJWNvkDzipGzOI7x+UkbtkR3x4/06OJ8QzDEElkygMloLG8fR1r0kuhlorPhWiwbNPja2Mpi27Iy3lrdedU2sYII3IONwJ8unNbld/5mr3j/ABrthlOV3DvrznK7ilC9Mzw21j++fsqnbTP6pr65+yvetA9KN9NvRGjwpb7M4+sQ0rACf7X+Ven4fRl8RsjXh7ym7bGnCc8vo3jtpn9U19c/ZTtpn9U19c/ZXzhftT6uEZDlpn3Fbjat6+yBXhGDyRg8ZxUlpP05ymLe9H1BF73NSAI7rQCN6s4wseHnkfCvft/8ffh/LMZf/Hn1fHYbIuYp33tpn9U19c/ZTtpn9U19c/ZXs2rchKj4jNVr5T2silKUClKUClKUClKUClKUCvOS8I7DjpStYQM7UJKlH3Ada9KUEJ90bX6BdP8ApF/ZT7o2v0C6f9Iv7Km6Vmp5YrLlCfdG1+gXT/pF/ZT7o2v0C6f9Iv7Km6UqeSsuUJ90bX6BdP8ApF/ZT7o2v0C6f9Iv7Km6UqeSsuUJ90bX6BdP+kX9lSFtnJntKWhmQyEnGH2i2T7gay6VYiViJ+slKUqtFKUoFYV3/maveP8AGs2sK7/zNXvH+NB61yDWVncm6tlSHnwWgtIKNvO0AcZrr9affbDLekypjW1e5eQ2OpGOv/tXbR8Rs+HynLXNT7OW3Thujpzi4SkCC0pkT4cJuLMLBZaC/mlPBG4Dw4rjc70H3e43Z64PXm3Bx14urS0wUpBzkgAdK3hNwucZruyXZCB02Ecj3eNbBo+NcGlOOSNyIyxkIX1KvP2VvR8Xt0TM659zPThn7w2ZsbUJSfAYq6lK8zqyKUpQKUrzkPIjsOPOq2ttpK1HyAGTQelK0u3ailpt89a8uystvtIfQpASlxQSUdBnaT1HmKkmb1OVdjE7qlxtp1LDym0L+cUBRUD0AG4cHnxoNipUHKvD7F5Nv7FBWpaVoPPLO1RUfeCgj6U1hI1FLSIan2Y+JiGnmthJ2IU4hBCvM4cBBHGQeKDaaVBSry+1arrJbaaU5EfLKEknCsbev1q8W71ON1MTuqXEsuoZfU2hfVSQoqB6ADcODyeaDY6Vqg1PICXT2LLgW2lcdSQtKTucCBkkcj1gcj214i9Tra9cTMDT+ZC2kBBVjtQy2pCEgngK9bjz99BuNKhrlKnR7ha0pcZS05v7dGwkq2oJ4OeOlWWe7Spb7DclthPeovemS2SdgyPVV5n1hyPbQTlK1JN8uMe0ocdVGfklUhZAaXyhteMYTnHh6xPHHBpGv7iLpPTtUWv5z+EJICAw2rYjw3ZOce8+NBttKhLDc5txbdL8ZLQLSXWl7FBJ3Z9XnrjA5HBz4Vgx9SSJTSewYaDiltRiVk7UPkKKwfYkAe8mg2mlav8AdFJS3PDjLPaxIr7qsE7VLbVjj2H4jpUjarhKluXBbqGAxHcLaAkncohIOSTwOtBL0rTzeLjMdgN4YYld5Rlv104Sppw4UPygCngg4JHhivY6jmKjOuNsRwqLHU/IC1HCtq1pIR5fi1HJ8xQbVStehXqW9Na7RpgRHpTsVATntAUhRCj4fkniqyL1JblOqS0yYbcpMQgk9oVEA7h4YyoceXOaDYKwrv8AzNXvH+Na4b1OkxoYkJaaU+IclBYUoYSt5IUk568f4kVY1fJbkQkMsGM0hlTm5Sis9o4pHBJ8MZ5oJq6fKPbNG39nsSlRWF4wo8YHn5+I/wAqxX5N7bGGoLTp3gZ3gZTzk9R04rDgyp1zluNNqkMxll1CHkpOWyhW3JJG05wenT21IWKJLdiLckSZQQtwlkOn1w3xjdx1JyfcRQZEB2a6hRkR20qS5tGSU5TjlXjz4Y6cdaxXF3hmQhDLaH2VLVuccKQUJzxgDGeKk+4r/SXvjTuK/wBJe+NBHxX7uZLKZMVkMqJ3rQR6vXH5XsHxqWrx7iv9Je+NO4r/AEl740GdSlKBWLdUJct76FpCkKTgpIyCKUoMS8MtOOMlxtCiEkZUkHjeg4+IHwFeb8Zg6lYcLLRcLe4q2jORkA5pSgq8lJ1dFJAJEF3Bx/bbrCYhRRGu6RGYAyU4DY6DkD480pQe0GMwmwPNpZaDal7lJCRgn1eSK9ZcZg6jjOFlsuFGSopGcjODn2UpQYMOBES7cAIscBSHUEBscpyDjp09leAjst2uGEMtpCriwtQCQMq9Xk+2lKDYLq2hbkJS0JUpD4KSRkg4I4rFsEZhiROLLDTZ7TblCAOOeOPDk0pQR9whRXG1JXGYUO9OcFsH5wyr4+PnWa3HZDaCGW8h9oj1R17NKc/Dj3UpQX6cjssCX2DLbf4Tb6iQOB0HHhWJFYZXZrslbTakmY+sgpBBIXwffwKUoPK5QYirZb0qisFOxQwWxjBGT8TzU5bmm0plBKEgKdJUAOvqjrSlBE2aJGbUlTcdlBTJwClAGMJUB8AT8TSXDjLNv3x2VfhljlAPBWSR8eaUoMXTTDRvs5wtN9oJD5C9oyDvI6+7ipN+LHOog4WGi52W7cUDOcEZz544pSgsEdnbD/At+qywE+qOAFggD3GrGYzAiPpDLQSUsgjYOcLJHwNKUHtBjMN3+attlpK9udyUAHJxk/TUlb0hMGOlIAAQAAPDilKDIpSlApSlB//Z"
            },
            {
              "timestamp": 56426940741,
              "data": "data:image/jpeg;base64,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",
              "timing": 3000
            }
          ],
          "type": "filmstrip",
          "scale": 3000
        }
      },
      "plugins": {
        "id": "plugins",
        "title": "Document avoids plugins",
        "description": "Search engines can't index plugin content, and many devices restrict plugins or don't support them. [Learn more about avoiding plugins](https://developer.chrome.com/docs/lighthouse/seo/plugins/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "type": "table",
          "headings": [],
          "items": []
        }
      },
      "font-size": {
        "id": "font-size",
        "title": "Document uses legible font sizes",
        "description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more about legible font sizes](https://developer.chrome.com/docs/lighthouse/seo/font-size/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "displayValue": "99.98% legible text",
        "details": {
          "items": [
            {
              "selector": ".rc-anchor-normal .rc-anchor-pt, .rc-anchor-invisible .rc-anchor-pt, .rc-anchor-compact .rc-anchor-pt",
              "fontSize": "8px",
              "source": {
                "urlProvider": "network",
                "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/styles__ltr.css",
                "column": 30326,
                "line": 0,
                "type": "source-location"
              },
              "coverage": "0.02%"
            },
            {
              "coverage": "99.98%",
              "fontSize": "≥ 12px",
              "source": {
                "type": "code",
                "value": "Legible text"
              }
            }
          ],
          "type": "table",
          "headings": [
            {
              "valueType": "source-location",
              "key": "source",
              "label": "Source"
            },
            {
              "label": "Selector",
              "valueType": "code",
              "key": "selector"
            },
            {
              "label": "% of Page Text",
              "key": "coverage",
              "valueType": "text"
            },
            {
              "key": "fontSize",
              "label": "Font Size",
              "valueType": "text"
            }
          ]
        }
      },
      "link-in-text-block": {
        "id": "link-in-text-block",
        "title": "Links are distinguishable without relying on color.",
        "description": "Low-contrast text is difficult or impossible for many users to read. Link text that is discernible improves the experience for users with low vision. [Learn how to make links distinguishable](https://dequeuniversity.com/rules/axe/4.8/link-in-text-block).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "deprecations": {
        "id": "deprecations",
        "title": "Avoids deprecated APIs",
        "description": "Deprecated APIs will eventually be removed from the browser. [Learn more about deprecated APIs](https://developer.chrome.com/docs/lighthouse/best-practices/deprecations/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "items": [],
          "type": "table"
        }
      },
      "maskable-icon": {
        "id": "maskable-icon",
        "title": "Manifest doesn't have a maskable icon",
        "description": "A maskable icon ensures that the image fills the entire shape without being letterboxed when installing the app on a device. [Learn about maskable manifest icons](https://developer.chrome.com/docs/lighthouse/pwa/maskable-icon-audit/).",
        "score": 0,
        "scoreDisplayMode": "binary",
        "explanation": "No manifest was fetched"
      },
      "legacy-javascript": {
        "id": "legacy-javascript",
        "title": "Avoid serving legacy JavaScript to modern browsers",
        "description": "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "debugData": {
            "type": "debugdata",
            "metricSavings": {
              "LCP": 0,
              "FCP": 0
            }
          },
          "headings": [],
          "type": "opportunity",
          "sortedBy": [
            "wastedBytes"
          ],
          "overallSavingsBytes": 0,
          "overallSavingsMs": 0,
          "items": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "duplicate-id-aria": {
        "id": "duplicate-id-aria",
        "title": "ARIA IDs are unique",
        "description": "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.8/duplicate-id-aria).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "video-caption": {
        "id": "video-caption",
        "title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
        "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more about video captions](https://dequeuniversity.com/rules/axe/4.8/video-caption).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "aria-required-children": {
        "id": "aria-required-children",
        "title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.",
        "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.8/aria-required-children).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "doctype": {
        "id": "doctype",
        "title": "Page has the HTML doctype",
        "description": "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more about the doctype declaration](https://developer.chrome.com/docs/lighthouse/best-practices/doctype/).",
        "score": 1,
        "scoreDisplayMode": "binary"
      },
      "uses-long-cache-ttl": {
        "id": "uses-long-cache-ttl",
        "title": "Serve static assets with an efficient cache policy",
        "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more about efficient cache policies](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/).",
        "score": 0.5,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "31 resources found",
        "details": {
          "type": "table",
          "items": [
            {
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/alexandra-funnell2019-768x461-1.webp",
              "cacheHitProbability": 0.9,
              "wastedBytes": 3740.999999999999,
              "debugData": {
                "max-age": 604800,
                "type": "debugdata",
                "public": true
              },
              "totalBytes": 37410,
              "cacheLifetimeMs": 604800000
            },
            {
              "debugData": {
                "max-age": 604800,
                "public": true,
                "type": "debugdata"
              },
              "totalBytes": 36034,
              "cacheHitProbability": 0.9,
              "cacheLifetimeMs": 604800000,
              "wastedBytes": 3603.399999999999,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/horse-exchange-mockup.webp"
            },
            {
              "totalBytes": 22061,
              "wastedBytes": 2206.0999999999995,
              "cacheHitProbability": 0.9,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-black1-webfont.woff",
              "debugData": {
                "public": true,
                "type": "debugdata",
                "max-age": 604800
              },
              "cacheLifetimeMs": 604800000
            },
            {
              "cacheHitProbability": 0.9,
              "wastedBytes": 2170.0999999999995,
              "totalBytes": 21701,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-bold1-webfont.woff",
              "debugData": {
                "type": "debugdata",
                "max-age": 604800,
                "public": true
              },
              "cacheLifetimeMs": 604800000
            },
            {
              "cacheLifetimeMs": 604800000,
              "debugData": {
                "public": true,
                "type": "debugdata",
                "max-age": 604800
              },
              "cacheHitProbability": 0.9,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/Gotham-Book.woff",
              "wastedBytes": 1659.2999999999997,
              "totalBytes": 16593
            },
            {
              "totalBytes": 16082,
              "cacheLifetimeMs": 604800000,
              "cacheHitProbability": 0.9,
              "debugData": {
                "max-age": 604800,
                "type": "debugdata",
                "public": true
              },
              "wastedBytes": 1608.1999999999996,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-700.woff2"
            },
            {
              "totalBytes": 16050,
              "cacheLifetimeMs": 604800000,
              "wastedBytes": 1604.9999999999995,
              "debugData": {
                "public": true,
                "type": "debugdata",
                "max-age": 604800
              },
              "cacheHitProbability": 0.9,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-300.woff2"
            },
            {
              "cacheLifetimeMs": 604800000,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-regular.woff2",
              "cacheHitProbability": 0.9,
              "wastedBytes": 1600.1999999999996,
              "totalBytes": 16002,
              "debugData": {
                "type": "debugdata",
                "max-age": 604800,
                "public": true
              }
            },
            {
              "totalBytes": 15818,
              "wastedBytes": 1581.7999999999997,
              "cacheHitProbability": 0.9,
              "cacheLifetimeMs": 604800000,
              "debugData": {
                "type": "debugdata",
                "public": true,
                "max-age": 604800
              },
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/alexandra-funnell2019-768x461-1-108x97.webp"
            },
            {
              "cacheHitProbability": 0.9,
              "totalBytes": 14316,
              "debugData": {
                "public": true,
                "max-age": 604800,
                "type": "debugdata"
              },
              "wastedBytes": 1431.5999999999997,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/phil2.webp",
              "cacheLifetimeMs": 604800000
            },
            {
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/mark-hassall1-400x400-1.webp",
              "cacheLifetimeMs": 604800000,
              "debugData": {
                "type": "debugdata",
                "max-age": 604800,
                "public": true
              },
              "totalBytes": 12650,
              "cacheHitProbability": 0.9,
              "wastedBytes": 1264.9999999999998
            },
            {
              "debugData": {
                "public": true,
                "type": "debugdata",
                "max-age": 604800
              },
              "wastedBytes": 1117.1999999999998,
              "totalBytes": 11172,
              "cacheHitProbability": 0.9,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/Fiona-Blaxland.webp",
              "cacheLifetimeMs": 604800000
            },
            {
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/greenfg.webp",
              "wastedBytes": 797.0999999999998,
              "totalBytes": 7971,
              "cacheLifetimeMs": 604800000,
              "cacheHitProbability": 0.9,
              "debugData": {
                "public": true,
                "type": "debugdata",
                "max-age": 604800
              }
            },
            {
              "cacheHitProbability": 0.9,
              "totalBytes": 3783,
              "debugData": {
                "max-age": 604800,
                "type": "debugdata",
                "public": true
              },
              "cacheLifetimeMs": 604800000,
              "wastedBytes": 378.2999999999999,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/mark-hassall1-400x400-1-108x108.webp"
            },
            {
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/oliver-blunden.webp",
              "debugData": {
                "public": true,
                "type": "debugdata",
                "max-age": 604800
              },
              "cacheLifetimeMs": 604800000,
              "totalBytes": 3707,
              "cacheHitProbability": 0.9,
              "wastedBytes": 370.69999999999993
            },
            {
              "cacheLifetimeMs": 604800000,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/phil2-108x108.webp",
              "cacheHitProbability": 0.9,
              "totalBytes": 3463,
              "debugData": {
                "public": true,
                "type": "debugdata",
                "max-age": 604800
              },
              "wastedBytes": 346.2999999999999
            },
            {
              "debugData": {
                "type": "debugdata",
                "max-age": 604800,
                "public": true
              },
              "url": "https://www.gstatic.com/recaptcha/api2/logo_48.png",
              "cacheHitProbability": 0.9,
              "cacheLifetimeMs": 604800000,
              "wastedBytes": 298.49999999999994,
              "totalBytes": 2985
            },
            {
              "cacheHitProbability": 0.9,
              "totalBytes": 2589,
              "wastedBytes": 258.8999999999999,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/TQQ0HN142-UR2A30C3E-71de2f11cd28-100.webp",
              "cacheLifetimeMs": 604800000,
              "debugData": {
                "max-age": 604800,
                "public": true,
                "type": "debugdata"
              }
            },
            {
              "wastedBytes": 253.09999999999994,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/Fiona-Blaxland-108x108.webp",
              "cacheHitProbability": 0.9,
              "totalBytes": 2531,
              "cacheLifetimeMs": 604800000,
              "debugData": {
                "max-age": 604800,
                "type": "debugdata",
                "public": true
              }
            },
            {
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/greenfg-108x108.webp",
              "totalBytes": 2465,
              "cacheLifetimeMs": 604800000,
              "debugData": {
                "public": true,
                "max-age": 604800,
                "type": "debugdata"
              },
              "wastedBytes": 246.49999999999994,
              "cacheHitProbability": 0.9
            },
            {
              "cacheLifetimeMs": 604800000,
              "cacheHitProbability": 0.9,
              "debugData": {
                "type": "debugdata",
                "public": true,
                "max-age": 604800
              },
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/TQQ0HN142-UR2A30C3E-71de2f11cd28-100-108x108.webp",
              "wastedBytes": 238.09999999999994,
              "totalBytes": 2381
            },
            {
              "totalBytes": 2197,
              "cacheLifetimeMs": 604800000,
              "wastedBytes": 219.69999999999996,
              "cacheHitProbability": 0.9,
              "debugData": {
                "public": true,
                "max-age": 604800,
                "type": "debugdata"
              },
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp"
            },
            {
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/oliver-blunden-108x108.webp",
              "cacheLifetimeMs": 604800000,
              "debugData": {
                "public": true,
                "max-age": 604800,
                "type": "debugdata"
              },
              "totalBytes": 1569,
              "wastedBytes": 156.89999999999998,
              "cacheHitProbability": 0.9
            },
            {
              "totalBytes": 43509,
              "cacheLifetimeMs": 7776000000,
              "debugData": {
                "public": true,
                "max-age": 7776000,
                "type": "debugdata"
              },
              "cacheHitProbability": 0.9231843575418994,
              "url": "https://www.sokada.co.uk/wp-content/litespeed/css/e741214b412fe74cff89ed0df5260bfa.css?ver=853d4",
              "wastedBytes": 3342.171787709498
            },
            {
              "cacheLifetimeMs": 7776000000,
              "cacheHitProbability": 0.9231843575418994,
              "debugData": {
                "public": true,
                "type": "debugdata",
                "max-age": 7776000
              },
              "wastedBytes": 2958.247206703911,
              "totalBytes": 38511,
              "url": "https://www.sokada.co.uk/wp-content/plugins/fancybox-for-wordpress/assets/js/jquery.fancybox.js"
            },
            {
              "debugData": {
                "type": "debugdata",
                "public": true,
                "max-age": 7776000
              },
              "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js",
              "wastedBytes": 2309.692737430168,
              "cacheHitProbability": 0.9231843575418994,
              "totalBytes": 30068,
              "cacheLifetimeMs": 7776000000
            },
            {
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/lightslider.js",
              "totalBytes": 7426,
              "wastedBytes": 570.4329608938549,
              "debugData": {
                "type": "debugdata",
                "max-age": 7776000,
                "public": true
              },
              "cacheHitProbability": 0.9231843575418994,
              "cacheLifetimeMs": 7776000000
            },
            {
              "cacheLifetimeMs": 7776000000,
              "totalBytes": 5179,
              "wastedBytes": 397.8282122905029,
              "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery-migrate.min.js",
              "cacheHitProbability": 0.9231843575418994,
              "debugData": {
                "max-age": 7776000,
                "type": "debugdata",
                "public": true
              }
            },
            {
              "cacheHitProbability": 0.9231843575418994,
              "debugData": {
                "type": "debugdata",
                "max-age": 7776000,
                "public": true
              },
              "wastedBytes": 145.872905027933,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/bigSlide.min.js",
              "totalBytes": 1899,
              "cacheLifetimeMs": 7776000000
            },
            {
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/nav-mobile.js",
              "debugData": {
                "type": "debugdata",
                "public": true,
                "max-age": 7776000
              },
              "cacheLifetimeMs": 7776000000,
              "totalBytes": 870,
              "wastedBytes": 66.8296089385475,
              "cacheHitProbability": 0.9231843575418994
            },
            {
              "wastedBytes": 55.92178770949722,
              "cacheHitProbability": 0.9231843575418994,
              "cacheLifetimeMs": 7776000000,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/drilldown-navigation.js",
              "totalBytes": 728,
              "debugData": {
                "type": "debugdata",
                "max-age": 7776000,
                "public": true
              }
            }
          ],
          "summary": {
            "wastedBytes": 36999.99720670391
          },
          "headings": [
            {
              "label": "URL",
              "valueType": "url",
              "key": "url"
            },
            {
              "valueType": "ms",
              "label": "Cache TTL",
              "key": "cacheLifetimeMs",
              "displayUnit": "duration"
            },
            {
              "valueType": "bytes",
              "label": "Transfer Size",
              "displayUnit": "kb",
              "key": "totalBytes",
              "granularity": 1
            }
          ],
          "skipSumming": [
            "cacheLifetimeMs"
          ],
          "sortedBy": [
            "totalBytes"
          ]
        },
        "numericValue": 36999.99720670391,
        "numericUnit": "byte"
      },
      "image-redundant-alt": {
        "id": "image-redundant-alt",
        "title": "Image elements do not have `[alt]` attributes that are redundant text.",
        "description": "Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.8/image-redundant-alt).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "items": [],
          "type": "table"
        }
      },
      "tabindex": {
        "id": "tabindex",
        "title": "No element has a `[tabindex]` value greater than 0",
        "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more about the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.8/tabindex).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "listitem": {
        "id": "listitem",
        "title": "List items (`<li>`) are contained within `<ul>`, `<ol>` or `<menu>` parent elements",
        "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.8/listitem).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "aria-input-field-name": {
        "id": "aria-input-field-name",
        "title": "ARIA input fields have accessible names",
        "description": "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.8/aria-input-field-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "aria-hidden-body": {
        "id": "aria-hidden-body",
        "title": "`[aria-hidden=\"true\"]` is not present on the document `<body>`",
        "description": "Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `<body>`. [Learn how `aria-hidden` affects the document body](https://dequeuniversity.com/rules/axe/4.8/aria-hidden-body).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "lcp-lazy-loaded": {
        "id": "lcp-lazy-loaded",
        "title": "Largest Contentful Paint image was not lazily loaded",
        "description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more about optimal lazy loading](https://web.dev/articles/lcp-lazy-loading).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "headings": [
            {
              "label": "Element",
              "valueType": "node",
              "key": "node"
            }
          ],
          "items": [
            {
              "node": {
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,0,DIV,1,DIV",
                "boundingRect": {
                  "bottom": 496,
                  "height": 496,
                  "top": 0,
                  "width": 412,
                  "right": 412,
                  "left": 0
                },
                "selector": "div#page > div#content > div#home-hero-image > div.hero-images",
                "type": "node",
                "lhId": "1-91-DIV",
                "snippet": "<div class=\"hero-images\" style=\"background-image: url(&quot;https://www.sokada.co.uk/wp-content/uploads/2022/04…&quot;);\">",
                "nodeLabel": "div#page > div#content > div#home-hero-image > div.hero-images"
              }
            }
          ],
          "type": "table"
        }
      },
      "aria-text": {
        "id": "aria-text",
        "title": "Elements with the `role=text` attribute do not have focusable descendents.",
        "description": "Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced. [Learn more about the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.8/aria-text).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "unused-javascript": {
        "id": "unused-javascript",
        "title": "Reduce unused JavaScript",
        "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
        "score": 0.5,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Potential savings of 308 KiB",
        "details": {
          "sortedBy": [
            "wastedBytes"
          ],
          "overallSavingsMs": 4640,
          "debugData": {
            "type": "debugdata",
            "metricSavings": {
              "FCP": 0,
              "LCP": 0
            }
          },
          "headings": [
            {
              "key": "url",
              "valueType": "url",
              "subItemsHeading": {
                "valueType": "code",
                "key": "source"
              },
              "label": "URL"
            },
            {
              "subItemsHeading": {
                "key": "sourceBytes"
              },
              "key": "totalBytes",
              "label": "Transfer Size",
              "valueType": "bytes"
            },
            {
              "subItemsHeading": {
                "key": "sourceWastedBytes"
              },
              "key": "wastedBytes",
              "label": "Potential Savings",
              "valueType": "bytes"
            }
          ],
          "items": [
            {
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "wastedPercent": 56.60798704781501,
              "wastedBytes": 112629,
              "totalBytes": 198963
            },
            {
              "wastedPercent": 54.910206026674004,
              "totalBytes": 198963,
              "wastedBytes": 109251,
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js"
            },
            {
              "wastedBytes": 32686,
              "url": "https://www.googletagmanager.com/gtag/js?id=G-9FMCYDPHN1&l=dataLayer&cx=c",
              "wastedPercent": 35.21927350771688,
              "totalBytes": 92808
            },
            {
              "totalBytes": 67251,
              "wastedBytes": 32203,
              "wastedPercent": 47.88458369436368,
              "url": "https://www.googletagmanager.com/gtm.js?id=GTM-NRS77MV"
            },
            {
              "totalBytes": 37883,
              "wastedBytes": 28597,
              "url": "https://www.sokada.co.uk/wp-content/plugins/fancybox-for-wordpress/assets/js/jquery.fancybox.js",
              "wastedPercent": 75.48878116172642
            }
          ],
          "type": "opportunity",
          "overallSavingsBytes": 315366
        },
        "numericValue": 4640,
        "numericUnit": "millisecond"
      },
      "crawlable-anchors": {
        "id": "crawlable-anchors",
        "title": "Links are not crawlable",
        "description": "Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn how to make links crawlable](https://support.google.com/webmasters/answer/9112205)",
        "score": 0,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [
            {
              "label": "Uncrawlable Link",
              "valueType": "node",
              "key": "node"
            }
          ],
          "items": [
            {
              "node": {
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,3,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,A",
                "nodeLabel": "div.lSSlideOuter > div.lSSlideWrapper > div.lSAction > a.lSPrev",
                "selector": "div.lSSlideOuter > div.lSSlideWrapper > div.lSAction > a.lSPrev",
                "snippet": "<a class=\"lSPrev\">",
                "type": "node",
                "boundingRect": {
                  "bottom": 3839,
                  "width": 32,
                  "right": 62,
                  "left": 30,
                  "top": 3807,
                  "height": 32
                },
                "lhId": "1-44-A"
              }
            },
            {
              "node": {
                "snippet": "<a class=\"lSNext\">",
                "boundingRect": {
                  "height": 32,
                  "right": 382,
                  "bottom": 3839,
                  "left": 350,
                  "top": 3807,
                  "width": 32
                },
                "selector": "div.lSSlideOuter > div.lSSlideWrapper > div.lSAction > a.lSNext",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,3,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,A",
                "type": "node",
                "lhId": "1-45-A",
                "nodeLabel": "div.lSSlideOuter > div.lSSlideWrapper > div.lSAction > a.lSNext"
              }
            }
          ],
          "type": "table"
        }
      },
      "structured-data": {
        "id": "structured-data",
        "title": "Structured data is valid",
        "description": "Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more about Structured Data](https://developer.chrome.com/docs/lighthouse/seo/structured-data/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "meta-viewport": {
        "id": "meta-viewport",
        "title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
        "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.8/meta-viewport).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "image-aspect-ratio": {
        "id": "image-aspect-ratio",
        "title": "Displays images with correct aspect ratio",
        "description": "Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "type": "table",
          "headings": [],
          "items": []
        }
      },
      "total-blocking-time": {
        "id": "total-blocking-time",
        "title": "Total Blocking Time",
        "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
        "score": 0.29,
        "scoreDisplayMode": "numeric",
        "displayValue": "960 ms",
        "numericValue": 957.5,
        "numericUnit": "millisecond"
      },
      "form-field-multiple-labels": {
        "id": "form-field-multiple-labels",
        "title": "No form fields have multiple labels",
        "description": "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn how to use form labels](https://dequeuniversity.com/rules/axe/4.8/form-field-multiple-labels).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "redirects": {
        "id": "redirects",
        "title": "Avoid multiple page redirects",
        "description": "Redirects introduce additional delays before the page can be loaded. [Learn how to avoid page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "items": [],
          "type": "opportunity",
          "headings": [],
          "overallSavingsMs": 0
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "label": {
        "id": "label",
        "title": "Form elements have associated labels",
        "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.8/label).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "aria-tooltip-name": {
        "id": "aria-tooltip-name",
        "title": "ARIA `tooltip` elements have accessible names",
        "description": "When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.8/aria-tooltip-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "aria-allowed-attr": {
        "id": "aria-allowed-attr",
        "title": "`[aria-*]` attributes match their roles",
        "description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn how to match ARIA attributes to their roles](https://dequeuniversity.com/rules/axe/4.8/aria-allowed-attr).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "items": [],
          "type": "table"
        }
      },
      "pwa-cross-browser": {
        "id": "pwa-cross-browser",
        "title": "Site works cross-browser",
        "description": "To reach the most number of users, sites should work across every major browser. [Learn about cross-browser compatibility](https://developer.chrome.com/docs/lighthouse/pwa/pwa-cross-browser/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "td-headers-attr": {
        "id": "td-headers-attr",
        "title": "Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.",
        "description": "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more about the `headers` attribute](https://dequeuniversity.com/rules/axe/4.8/td-headers-attr).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "long-tasks": {
        "id": "long-tasks",
        "title": "Avoid long main-thread tasks",
        "description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/articles/long-tasks-devtools)",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "18 long tasks found",
        "details": {
          "skipSumming": [
            "startTime"
          ],
          "debugData": {
            "tasks": [
              {
                "scriptEvaluation": 0,
                "other": 367,
                "startTime": 6299,
                "urlIndex": 0,
                "duration": 367
              },
              {
                "urlIndex": 1,
                "other": 235,
                "paintCompositeRender": 0,
                "duration": 235,
                "startTime": 9766
              },
              {
                "duration": 203,
                "paintCompositeRender": 0,
                "other": 203,
                "urlIndex": 1,
                "startTime": 4596
              },
              {
                "urlIndex": 1,
                "duration": 171,
                "startTime": 9513,
                "other": 171,
                "parseHTML": 0
              },
              {
                "duration": 130,
                "urlIndex": 1,
                "startTime": 10163,
                "other": 130
              },
              {
                "duration": 114,
                "other": 114,
                "scriptEvaluation": 0,
                "urlIndex": 2,
                "startTime": 2712
              },
              {
                "other": 104,
                "paintCompositeRender": 0,
                "startTime": 2137,
                "duration": 104,
                "urlIndex": 2,
                "styleLayout": 0
              },
              {
                "duration": 101,
                "scriptEvaluation": 0,
                "other": 101,
                "urlIndex": 1,
                "startTime": 9412
              },
              {
                "startTime": 10062,
                "duration": 101,
                "urlIndex": 1,
                "other": 101
              },
              {
                "startTime": 10389,
                "duration": 98,
                "other": 98,
                "scriptEvaluation": 0,
                "urlIndex": 1
              },
              {
                "styleLayout": 0,
                "paintCompositeRender": 0,
                "other": 94,
                "urlIndex": 3,
                "duration": 94,
                "startTime": 6666
              },
              {
                "urlIndex": 4,
                "startTime": 924,
                "scriptEvaluation": 0,
                "other": 79,
                "duration": 79
              },
              {
                "other": 76,
                "startTime": 4520,
                "duration": 76,
                "urlIndex": 3,
                "scriptEvaluation": 0
              },
              {
                "urlIndex": 2,
                "duration": 74,
                "startTime": 2826,
                "styleLayout": 0,
                "paintCompositeRender": 0,
                "other": 74
              },
              {
                "duration": 61,
                "scriptEvaluation": 0,
                "other": 61,
                "urlIndex": 5,
                "startTime": 10001
              },
              {
                "startTime": 2082,
                "other": 55,
                "urlIndex": 2,
                "scriptEvaluation": 0,
                "duration": 55
              },
              {
                "other": 54,
                "urlIndex": 1,
                "scriptEvaluation": 0,
                "startTime": 10487,
                "duration": 54
              },
              {
                "urlIndex": 1,
                "other": 50,
                "startTime": 10339,
                "paintCompositeRender": 0,
                "duration": 50
              }
            ],
            "type": "debugdata",
            "urls": [
              "https://www.googletagmanager.com/gtag/js?id=G-9FMCYDPHN1&l=dataLayer&cx=c",
              "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js",
              "https://www.googletagmanager.com/gtm.js?id=GTM-NRS77MV",
              "Unattributable",
              "https://www.google.com/js/bg/v77SiQbcxtK1O5ek11TdloiB5zZ00UAxE3PsP-319e4.js"
            ]
          },
          "type": "table",
          "headings": [
            {
              "valueType": "url",
              "key": "url",
              "label": "URL"
            },
            {
              "granularity": 1,
              "key": "startTime",
              "valueType": "ms",
              "label": "Start Time"
            },
            {
              "granularity": 1,
              "valueType": "ms",
              "key": "duration",
              "label": "Duration"
            }
          ],
          "items": [
            {
              "duration": 367,
              "startTime": 6299,
              "url": "https://www.googletagmanager.com/gtag/js?id=G-9FMCYDPHN1&l=dataLayer&cx=c"
            },
            {
              "duration": 235,
              "startTime": 9766,
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js"
            },
            {
              "startTime": 4596,
              "duration": 203,
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js"
            },
            {
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "duration": 171,
              "startTime": 9513
            },
            {
              "duration": 130,
              "startTime": 10163,
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js"
            },
            {
              "startTime": 2712,
              "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js",
              "duration": 114
            },
            {
              "duration": 104,
              "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js",
              "startTime": 2137
            },
            {
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "startTime": 9412,
              "duration": 101
            },
            {
              "startTime": 10062,
              "duration": 101,
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js"
            },
            {
              "duration": 98,
              "startTime": 10389,
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js"
            },
            {
              "duration": 94,
              "startTime": 6666,
              "url": "https://www.googletagmanager.com/gtm.js?id=GTM-NRS77MV"
            },
            {
              "startTime": 924,
              "duration": 79,
              "url": "Unattributable"
            },
            {
              "url": "https://www.googletagmanager.com/gtm.js?id=GTM-NRS77MV",
              "duration": 76,
              "startTime": 4520
            },
            {
              "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js",
              "duration": 74,
              "startTime": 2826
            },
            {
              "duration": 61,
              "url": "https://www.google.com/js/bg/v77SiQbcxtK1O5ek11TdloiB5zZ00UAxE3PsP-319e4.js",
              "startTime": 10001
            },
            {
              "duration": 55,
              "startTime": 2082,
              "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js"
            },
            {
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "startTime": 10487,
              "duration": 54
            },
            {
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "startTime": 10339,
              "duration": 50
            }
          ],
          "sortedBy": [
            "duration"
          ]
        }
      },
      "resource-summary": {
        "id": "resource-summary",
        "title": "Resources Summary",
        "description": "Aggregates all network requests and groups them by type",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "items": [
            {
              "requestCount": 56,
              "resourceType": "total",
              "transferSize": 2732966,
              "label": "Total"
            },
            {
              "transferSize": 1559062,
              "resourceType": "image",
              "label": "Image",
              "requestCount": 27
            },
            {
              "resourceType": "script",
              "transferSize": 655428,
              "label": "Script",
              "requestCount": 13
            },
            {
              "transferSize": 207161,
              "requestCount": 9,
              "label": "Font",
              "resourceType": "font"
            },
            {
              "requestCount": 3,
              "transferSize": 200600,
              "resourceType": "other",
              "label": "Other"
            },
            {
              "label": "Stylesheet",
              "requestCount": 2,
              "resourceType": "stylesheet",
              "transferSize": 68921
            },
            {
              "transferSize": 41794,
              "label": "Document",
              "resourceType": "document",
              "requestCount": 2
            },
            {
              "resourceType": "media",
              "requestCount": 0,
              "label": "Media",
              "transferSize": 0
            },
            {
              "transferSize": 927852,
              "requestCount": 15,
              "label": "Third-party",
              "resourceType": "third-party"
            }
          ],
          "type": "table",
          "headings": [
            {
              "label": "Resource Type",
              "key": "label",
              "valueType": "text"
            },
            {
              "valueType": "numeric",
              "label": "Requests",
              "key": "requestCount"
            },
            {
              "valueType": "bytes",
              "key": "transferSize",
              "label": "Transfer Size"
            }
          ]
        }
      },
      "paste-preventing-inputs": {
        "id": "paste-preventing-inputs",
        "title": "Allows users to paste into input fields",
        "description": "Preventing input pasting is a bad practice for the UX, and weakens security by blocking password managers.[Learn more about user-friendly input fields](https://developer.chrome.com/docs/lighthouse/best-practices/paste-preventing-inputs/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "items": [],
          "type": "table"
        }
      },
      "is-crawlable": {
        "id": "is-crawlable",
        "title": "Page isn’t blocked from indexing",
        "description": "Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more about crawler directives](https://developer.chrome.com/docs/lighthouse/seo/is-crawlable/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "type": "table",
          "items": [],
          "headings": []
        },
        "warnings": []
      },
      "focusable-controls": {
        "id": "focusable-controls",
        "title": "Interactive controls are keyboard focusable",
        "description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn how to make custom controls focusable](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "duplicated-javascript": {
        "id": "duplicated-javascript",
        "title": "Remove duplicate modules in JavaScript bundles",
        "description": "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "sortedBy": [
            "wastedBytes"
          ],
          "overallSavingsMs": 0,
          "debugData": {
            "type": "debugdata",
            "metricSavings": {
              "FCP": 0,
              "LCP": 0
            }
          },
          "overallSavingsBytes": 0,
          "type": "opportunity",
          "items": [],
          "headings": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "notification-on-start": {
        "id": "notification-on-start",
        "title": "Avoids requesting the notification permission on page load",
        "description": "Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more about responsibly getting permission for notifications](https://developer.chrome.com/docs/lighthouse/best-practices/notification-on-start/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "canonical": {
        "id": "canonical",
        "title": "Document has a valid `rel=canonical`",
        "description": "Canonical links suggest which URL to show in search results. [Learn more about canonical links](https://developer.chrome.com/docs/lighthouse/seo/canonical/).",
        "score": 1,
        "scoreDisplayMode": "binary"
      },
      "uses-rel-preconnect": {
        "id": "uses-rel-preconnect",
        "title": "Preconnect to required origins",
        "description": "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "items": [],
          "overallSavingsMs": 0,
          "headings": [],
          "sortedBy": [
            "wastedMs"
          ],
          "type": "opportunity"
        },
        "warnings": [],
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "unused-css-rules": {
        "id": "unused-css-rules",
        "title": "Reduce unused CSS",
        "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Potential savings of 61 KiB",
        "details": {
          "debugData": {
            "type": "debugdata",
            "metricSavings": {
              "FCP": 190,
              "LCP": 190
            }
          },
          "overallSavingsMs": 490,
          "items": [
            {
              "wastedBytes": 39827,
              "url": "https://www.sokada.co.uk/wp-content/litespeed/css/e741214b412fe74cff89ed0df5260bfa.css?ver=853d4",
              "totalBytes": 42905,
              "wastedPercent": 92.82655435872186
            },
            {
              "wastedBytes": 22767,
              "wastedPercent": 92.88981878790028,
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/styles__ltr.css",
              "totalBytes": 24510
            }
          ],
          "headings": [
            {
              "key": "url",
              "label": "URL",
              "valueType": "url"
            },
            {
              "key": "totalBytes",
              "valueType": "bytes",
              "label": "Transfer Size"
            },
            {
              "valueType": "bytes",
              "label": "Potential Savings",
              "key": "wastedBytes"
            }
          ],
          "overallSavingsBytes": 62594,
          "type": "opportunity",
          "sortedBy": [
            "wastedBytes"
          ]
        },
        "numericValue": 490,
        "numericUnit": "millisecond"
      },
      "main-thread-tasks": {
        "id": "main-thread-tasks",
        "title": "Tasks",
        "description": "Lists the toplevel main thread tasks that executed during page load.",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "headings": [
            {
              "granularity": 1,
              "label": "Start Time",
              "key": "startTime",
              "valueType": "ms"
            },
            {
              "key": "duration",
              "valueType": "ms",
              "label": "End Time",
              "granularity": 1
            }
          ],
          "type": "table",
          "items": [
            {
              "duration": 19.756,
              "startTime": 370.321
            },
            {
              "startTime": 750.898,
              "duration": 9.71
            },
            {
              "duration": 13.787,
              "startTime": 760.634
            },
            {
              "duration": 12.162,
              "startTime": 774.455
            },
            {
              "startTime": 786.652,
              "duration": 7.269
            },
            {
              "startTime": 793.935,
              "duration": 51.94
            },
            {
              "startTime": 851.283,
              "duration": 57.115
            },
            {
              "startTime": 913.576,
              "duration": 36.753
            },
            {
              "duration": 19.039,
              "startTime": 950.529
            },
            {
              "startTime": 974.145,
              "duration": 101.718
            },
            {
              "duration": 47.116,
              "startTime": 1075.892
            },
            {
              "startTime": 1123.149,
              "duration": 13.252
            },
            {
              "startTime": 1149.217,
              "duration": 91.808
            },
            {
              "duration": 7.132,
              "startTime": 1241.068
            },
            {
              "startTime": 1248.821,
              "duration": 25.202
            },
            {
              "duration": 42.842,
              "startTime": 1277.741
            },
            {
              "duration": 17.182,
              "startTime": 1321.201
            },
            {
              "startTime": 1338.386,
              "duration": 23.918
            },
            {
              "startTime": 1362.328,
              "duration": 15.147
            },
            {
              "duration": 58.81,
              "startTime": 1381.85
            },
            {
              "duration": 8.467,
              "startTime": 1440.804
            },
            {
              "duration": 25.333,
              "startTime": 1800.605
            },
            {
              "duration": 9.874,
              "startTime": 1825.949
            },
            {
              "startTime": 1835.831,
              "duration": 32.586
            },
            {
              "startTime": 1868.436,
              "duration": 23.041
            },
            {
              "startTime": 1891.498,
              "duration": 12.423
            },
            {
              "duration": 24.416,
              "startTime": 1907.364
            },
            {
              "startTime": 1932.683,
              "duration": 13.533
            },
            {
              "startTime": 1950.109,
              "duration": 8.617
            },
            {
              "startTime": 2208.916,
              "duration": 11.965
            }
          ]
        }
      },
      "use-landmarks": {
        "id": "use-landmarks",
        "title": "HTML5 landmark elements are used to improve navigation",
        "description": "Landmark elements (`<main>`, `<nav>`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "splash-screen": {
        "id": "splash-screen",
        "title": "Is not configured for a custom splash screen",
        "description": "A themed splash screen ensures a high-quality experience when users launch your app from their homescreens. [Learn more about splash screens](https://developer.chrome.com/docs/lighthouse/pwa/splash-screen/).",
        "score": 0,
        "scoreDisplayMode": "binary",
        "explanation": "Failures: No manifest was fetched.",
        "details": {
          "type": "debugdata",
          "items": [
            {
              "isParseFailure": true,
              "failures": [
                "No manifest was fetched"
              ],
              "parseFailureReason": "No manifest was fetched"
            }
          ]
        }
      },
      "third-party-facades": {
        "id": "third-party-facades",
        "title": "Lazy load third-party resources with facades",
        "description": "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn how to defer third-parties with a facade](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "themed-omnibox": {
        "id": "themed-omnibox",
        "title": "Does not set a theme color for the address bar.",
        "description": "The browser address bar can be themed to match your site. [Learn more about theming the address bar](https://developer.chrome.com/docs/lighthouse/pwa/themed-omnibox/).",
        "score": 0,
        "scoreDisplayMode": "binary",
        "explanation": "Failures: No manifest was fetched,\nNo `<meta name=\"theme-color\">` tag found.",
        "details": {
          "type": "debugdata",
          "items": [
            {
              "failures": [
                "No manifest was fetched",
                "No `<meta name=\"theme-color\">` tag found"
              ],
              "isParseFailure": true,
              "themeColor": null,
              "parseFailureReason": "No manifest was fetched"
            }
          ]
        }
      },
      "critical-request-chains": {
        "id": "critical-request-chains",
        "title": "Avoid chaining critical requests",
        "description": "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn how to avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "15 chains found",
        "details": {
          "longestChain": {
            "transferSize": 75514,
            "length": 3,
            "duration": 1025.8390000015497
          },
          "type": "criticalrequestchain",
          "chains": {
            "A656504FFA457631A749E9903F7A81E9": {
              "request": {
                "startTime": 56423.942111,
                "transferSize": 12358,
                "responseReceivedTime": 56424.30814599999,
                "endTime": 56424.308153,
                "url": "https://www.sokada.co.uk/"
              },
              "children": {
                "41.3": {
                  "request": {
                    "transferSize": 30068,
                    "endTime": 56424.550911,
                    "responseReceivedTime": 56424.55090799999,
                    "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js",
                    "startTime": 56424.327737
                  }
                },
                "41.10": {
                  "request": {
                    "transferSize": 1316,
                    "endTime": 56424.344276,
                    "startTime": 56424.330186,
                    "url": "https://www.google.com/recaptcha/api.js?render=6Lc3POImAAAAAIrauIvQZlqgRFqOHn2Wdcr2Ge4v&ver=1.1",
                    "responseReceivedTime": 56424.344269999994
                  }
                },
                "41.5": {
                  "request": {
                    "url": "https://www.sokada.co.uk/wp-content/plugins/fancybox-for-wordpress/assets/js/jquery.fancybox.js",
                    "startTime": 56424.328457,
                    "responseReceivedTime": 56424.685305,
                    "transferSize": 38511,
                    "endTime": 56424.685311
                  }
                },
                "41.6": {
                  "request": {
                    "startTime": 56424.328771,
                    "responseReceivedTime": 56424.598754,
                    "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/lightslider.js",
                    "transferSize": 7426,
                    "endTime": 56424.598759
                  }
                },
                "41.9": {
                  "request": {
                    "startTime": 56424.329824,
                    "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/drilldown-navigation.js",
                    "transferSize": 728,
                    "endTime": 56424.549738,
                    "responseReceivedTime": 56424.549734
                  }
                },
                "41.2": {
                  "children": {
                    "41.45": {
                      "request": {
                        "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-700.woff2",
                        "endTime": 56424.916678,
                        "transferSize": 16082,
                        "startTime": 56424.753107,
                        "responseReceivedTime": 56424.916675
                      }
                    },
                    "41.55": {
                      "request": {
                        "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-bold1-webfont.woff",
                        "startTime": 56424.753643,
                        "endTime": 56424.835027,
                        "responseReceivedTime": 56424.835024,
                        "transferSize": 21701
                      }
                    },
                    "41.53": {
                      "request": {
                        "endTime": 56424.938734,
                        "startTime": 56424.753378,
                        "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/Gotham-Book.woff",
                        "responseReceivedTime": 56424.93872,
                        "transferSize": 16593
                      }
                    },
                    "41.33": {
                      "request": {
                        "transferSize": 16002,
                        "endTime": 56424.91694,
                        "startTime": 56424.752289,
                        "responseReceivedTime": 56424.916937,
                        "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-regular.woff2"
                      }
                    },
                    "41.57": {
                      "request": {
                        "startTime": 56424.75146,
                        "transferSize": 22061,
                        "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-black1-webfont.woff",
                        "endTime": 56424.799546,
                        "responseReceivedTime": 56424.799544
                      }
                    },
                    "41.62": {
                      "request": {
                        "url": "https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-brands-400.woff2",
                        "transferSize": 75514,
                        "startTime": 56424.756288,
                        "responseReceivedTime": 56424.967943999996,
                        "endTime": 56424.96795
                      }
                    },
                    "41.27": {
                      "request": {
                        "startTime": 56424.755053,
                        "endTime": 56424.834724,
                        "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-300.woff2",
                        "transferSize": 16050,
                        "responseReceivedTime": 56424.834722
                      }
                    }
                  },
                  "request": {
                    "url": "https://www.sokada.co.uk/wp-content/litespeed/css/e741214b412fe74cff89ed0df5260bfa.css?ver=853d4",
                    "startTime": 56424.327297,
                    "endTime": 56424.691085,
                    "responseReceivedTime": 56424.691081000004,
                    "transferSize": 43509
                  }
                },
                "41.8": {
                  "request": {
                    "transferSize": 870,
                    "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/nav-mobile.js",
                    "responseReceivedTime": 56424.376704999995,
                    "startTime": 56424.329456,
                    "endTime": 56424.376711
                  }
                },
                "41.7": {
                  "request": {
                    "transferSize": 1899,
                    "endTime": 56424.550041,
                    "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/bigSlide.min.js",
                    "startTime": 56424.329072,
                    "responseReceivedTime": 56424.550038999994
                  }
                },
                "41.4": {
                  "request": {
                    "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery-migrate.min.js",
                    "responseReceivedTime": 56424.59920900001,
                    "transferSize": 5179,
                    "startTime": 56424.328109,
                    "endTime": 56424.599224
                  }
                }
              }
            }
          }
        }
      },
      "geolocation-on-start": {
        "id": "geolocation-on-start",
        "title": "Avoids requesting the geolocation permission on page load",
        "description": "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more about the geolocation permission](https://developer.chrome.com/docs/lighthouse/best-practices/geolocation-on-start/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "definition-list": {
        "id": "definition-list",
        "title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
        "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.8/definition-list).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "select-name": {
        "id": "select-name",
        "title": "Select elements have associated label elements.",
        "description": "Form elements without effective labels can create frustrating experiences for screen reader users. [Learn more about the `select` element](https://dequeuniversity.com/rules/axe/4.8/select-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "aria-treeitem-name": {
        "id": "aria-treeitem-name",
        "title": "ARIA `treeitem` elements have accessible names",
        "description": "When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.8/aria-treeitem-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "no-document-write": {
        "id": "no-document-write",
        "title": "Avoids `document.write()`",
        "description": "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn how to avoid document.write()](https://developer.chrome.com/docs/lighthouse/best-practices/no-document-write/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "image-alt": {
        "id": "image-alt",
        "title": "Image elements have `[alt]` attributes",
        "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.8/image-alt).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "dom-size": {
        "id": "dom-size",
        "title": "Avoids an excessive DOM size",
        "description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "309 elements",
        "details": {
          "items": [
            {
              "statistic": "Total DOM Elements",
              "value": {
                "type": "numeric",
                "granularity": 1,
                "value": 309
              }
            },
            {
              "node": {
                "lhId": "1-25-A",
                "type": "node",
                "nodeLabel": "Small Businesses",
                "snippet": "<a href=\"https://www.sokada.co.uk/websites-for-small-businesses/\">",
                "path": "1,HTML,1,BODY,1,DIV,0,HEADER,0,DIV,1,NAV,0,DIV,0,DIV,0,UL,1,LI,1,UL,0,LI,0,A",
                "selector": "li#menu-item-2863 > ul.sub-menu > li#menu-item-4543 > a",
                "boundingRect": {
                  "bottom": 0,
                  "right": 0,
                  "top": 0,
                  "left": 0,
                  "width": 0,
                  "height": 0
                }
              },
              "value": {
                "type": "numeric",
                "value": 12,
                "granularity": 1
              },
              "statistic": "Maximum DOM Depth"
            },
            {
              "node": {
                "boundingRect": {
                  "left": 162,
                  "width": 250,
                  "height": 823,
                  "right": 412,
                  "top": 0,
                  "bottom": 823
                },
                "nodeLabel": "Our Services\nSmall Businesses\nBespoke Web Design & Development\nEcommerce Websit…",
                "lhId": "1-77-UL",
                "type": "node",
                "selector": "div.menu-main-menu-container > ul#menu-main-menu > li.menu-item > ul.sub-menu",
                "snippet": "<ul class=\"sub-menu\">",
                "path": "1,HTML,1,BODY,2,DIV,0,DIV,0,UL,1,LI,1,UL"
              },
              "statistic": "Maximum Child Elements",
              "value": {
                "granularity": 1,
                "value": 13,
                "type": "numeric"
              }
            }
          ],
          "type": "table",
          "headings": [
            {
              "label": "Statistic",
              "key": "statistic",
              "valueType": "text"
            },
            {
              "valueType": "node",
              "label": "Element",
              "key": "node"
            },
            {
              "valueType": "numeric",
              "key": "value",
              "label": "Value"
            }
          ]
        },
        "numericValue": 309,
        "numericUnit": "element"
      },
      "html-has-lang": {
        "id": "html-has-lang",
        "title": "`<html>` element has a `[lang]` attribute",
        "description": "If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-has-lang).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "type": "table",
          "headings": []
        }
      },
      "object-alt": {
        "id": "object-alt",
        "title": "`<object>` elements have alternate text",
        "description": "Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more about alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.8/object-alt).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "landmark-one-main": {
        "id": "landmark-one-main",
        "title": "Document has a main landmark.",
        "description": "One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.8/landmark-one-main).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "debugData": {
            "impact": "moderate",
            "tags": [
              "cat.semantics",
              "best-practice"
            ],
            "type": "debugdata"
          },
          "headings": [
            {
              "key": "node",
              "valueType": "node",
              "subItemsHeading": {
                "key": "relatedNode",
                "valueType": "node"
              },
              "label": "Failing Elements"
            }
          ],
          "type": "table",
          "items": [
            {
              "node": {
                "path": "1,HTML",
                "lhId": "1-18-HTML",
                "explanation": "Fix all of the following:\n  Document does not have a main landmark",
                "boundingRect": {
                  "right": 412,
                  "width": 412,
                  "bottom": 5309,
                  "height": 5309,
                  "top": 0,
                  "left": 0
                },
                "nodeLabel": "html",
                "type": "node",
                "selector": "html",
                "snippet": "<html lang=\"en-GB\" prefix=\"og: https://ogp.me/ns#\">"
              }
            }
          ]
        }
      },
      "aria-allowed-role": {
        "id": "aria-allowed-role",
        "title": "Values assigned to `role=\"\"` are valid ARIA roles.",
        "description": "ARIA `role`s enable assistive technologies to know the role of each element on the web page. If the `role` values are misspelled, not existing ARIA `role` values, or abstract roles, then the purpose of the element will not be communicated to users of assistive technologies. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.8/aria-allowed-role).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "input-button-name": {
        "id": "input-button-name",
        "title": "Input buttons have discernible text.",
        "description": "Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button. [Learn more about input buttons](https://dequeuniversity.com/rules/axe/4.8/input-button-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "cumulative-layout-shift": {
        "id": "cumulative-layout-shift",
        "title": "Cumulative Layout Shift",
        "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "displayValue": "0.032",
        "details": {
          "type": "debugdata",
          "items": [
            {
              "newEngineResultDiffered": false,
              "cumulativeLayoutShiftMainFrame": 0.03210957437836888
            }
          ]
        },
        "numericValue": 0.03210957437836888,
        "numericUnit": "unitless"
      },
      "tap-targets": {
        "id": "tap-targets",
        "title": "Tap targets are not sized appropriately",
        "description": "Interactive elements like buttons and links should be large enough (48x48px), or have enough space around them, to be easy enough to tap without overlapping onto other elements. [Learn more about tap targets](https://developer.chrome.com/docs/lighthouse/seo/tap-targets/).",
        "score": 0.79,
        "scoreDisplayMode": "binary",
        "displayValue": "89% appropriately sized tap targets",
        "details": {
          "items": [
            {
              "tapTarget": {
                "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV,0,DIV,1,DIV,2,DIV,1,P,0,A",
                "snippet": "<a href=\"tel:01435 817 226\">",
                "nodeLabel": "01435 817 226",
                "type": "node",
                "lhId": "1-13-A",
                "selector": "div.footer-main > div.grid-3 > p > a",
                "boundingRect": {
                  "height": 29,
                  "left": 57,
                  "width": 298,
                  "bottom": 4953,
                  "right": 355,
                  "top": 4924
                }
              },
              "overlappingTarget": {
                "selector": "div.footer-main > div.grid-3 > p > a",
                "type": "node",
                "snippet": "<a href=\"mailto:enquiries@sokada.co.uk\">",
                "lhId": "1-14-A",
                "nodeLabel": "enquiries@sokada.co.uk",
                "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV,0,DIV,1,DIV,2,DIV,2,P,0,A",
                "boundingRect": {
                  "left": 57,
                  "width": 298,
                  "right": 355,
                  "top": 4953,
                  "height": 29,
                  "bottom": 4982
                }
              },
              "width": 297,
              "height": 29,
              "overlappingTargetScore": 456,
              "overlapScoreRatio": 0.3275862068965517,
              "size": "297x29",
              "tapTargetScore": 1392
            }
          ],
          "type": "table",
          "headings": [
            {
              "valueType": "node",
              "key": "tapTarget",
              "label": "Tap Target"
            },
            {
              "key": "size",
              "label": "Size",
              "valueType": "text"
            },
            {
              "label": "Overlapping Target",
              "valueType": "node",
              "key": "overlappingTarget"
            }
          ]
        }
      },
      "third-party-summary": {
        "id": "third-party-summary",
        "title": "Reduce the impact of third-party code",
        "description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn how to minimize third-party impact](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Third-party code blocked the main thread for 850 ms",
        "details": {
          "summary": {
            "wastedMs": 853.604,
            "wastedBytes": 927852
          },
          "isEntityGrouped": true,
          "type": "table",
          "headings": [
            {
              "label": "Third-Party",
              "subItemsHeading": {
                "valueType": "url",
                "key": "url"
              },
              "valueType": "text",
              "key": "entity"
            },
            {
              "label": "Transfer Size",
              "valueType": "bytes",
              "granularity": 1,
              "subItemsHeading": {
                "key": "transferSize"
              },
              "key": "transferSize"
            },
            {
              "subItemsHeading": {
                "key": "blockingTime"
              },
              "granularity": 1,
              "valueType": "ms",
              "label": "Main-Thread Blocking Time",
              "key": "blockingTime"
            }
          ],
          "items": [
            {
              "mainThreadTime": 1460.4199999999678,
              "entity": "Google CDN",
              "tbtImpact": 546.8340887022731,
              "subItems": {
                "items": [
                  {
                    "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
                    "blockingTime": 467.728,
                    "transferSize": 599714,
                    "mainThreadTime": 1456.2879999999677,
                    "tbtImpact": 546.8340887022731
                  },
                  {
                    "blockingTime": 0,
                    "transferSize": 25412,
                    "mainThreadTime": 4.132,
                    "tbtImpact": 0,
                    "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/styles__ltr.css"
                  },
                  {
                    "blockingTime": 0,
                    "transferSize": 2985,
                    "url": "https://www.gstatic.com/recaptcha/api2/logo_48.png",
                    "tbtImpact": 0,
                    "mainThreadTime": 0
                  }
                ],
                "type": "subitems"
              },
              "blockingTime": 467.728,
              "transferSize": 628111
            },
            {
              "entity": "Google Tag Manager",
              "tbtImpact": 406.06166034967214,
              "blockingTime": 315.73199999999997,
              "transferSize": 161473,
              "mainThreadTime": 723.2520000000003,
              "subItems": {
                "items": [
                  {
                    "transferSize": 93493,
                    "tbtImpact": 317.2076177520827,
                    "blockingTime": 290.616,
                    "url": "https://www.googletagmanager.com/gtag/js?id=G-9FMCYDPHN1&l=dataLayer&cx=c",
                    "mainThreadTime": 401.1200000000002
                  },
                  {
                    "mainThreadTime": 322.1320000000001,
                    "blockingTime": 25.116,
                    "transferSize": 67980,
                    "tbtImpact": 88.85404259758945,
                    "url": "https://www.googletagmanager.com/gtm.js?id=GTM-NRS77MV"
                  }
                ],
                "type": "subitems"
              }
            },
            {
              "tbtImpact": 119.71277614544807,
              "mainThreadTime": 251.63200000000018,
              "entity": "Other Google APIs/SDKs",
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "transferSize": 29436,
                    "url": "https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc3POImAAAAAIrauIvQZlqgRFqOHn2Wdcr2Ge4v&co=aHR0cHM6Ly93d3cuc29rYWRhLmNvLnVrOjQ0Mw..&hl=en&v=QquE1_MNjnFHgZF4HPsEcf_2&size=invisible&cb=oieutss3cx5o",
                    "blockingTime": 70.144,
                    "mainThreadTime": 189.70800000000017,
                    "tbtImpact": 109.27341521589149
                  },
                  {
                    "transferSize": 8149,
                    "tbtImpact": 10.439360929556582,
                    "mainThreadTime": 57.5,
                    "url": "https://www.google.com/js/bg/v77SiQbcxtK1O5ek11TdloiB5zZ00UAxE3PsP-319e4.js",
                    "blockingTime": 0
                  },
                  {
                    "transferSize": 1316,
                    "blockingTime": 0,
                    "tbtImpact": 0,
                    "url": "https://www.google.com/recaptcha/api.js?render=6Lc3POImAAAAAIrauIvQZlqgRFqOHn2Wdcr2Ge4v&ver=1.1",
                    "mainThreadTime": 4.4239999999999995
                  },
                  {
                    "tbtImpact": 0,
                    "url": "https://www.google.com/recaptcha/api2/webworker.js?hl=en&v=QquE1_MNjnFHgZF4HPsEcf_2",
                    "transferSize": 695,
                    "blockingTime": 0,
                    "mainThreadTime": 0
                  }
                ]
              },
              "blockingTime": 70.144,
              "transferSize": 39596
            },
            {
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "tbtImpact": 0,
                    "transferSize": 75514,
                    "blockingTime": 0,
                    "url": "https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-brands-400.woff2",
                    "mainThreadTime": 0
                  }
                ]
              },
              "tbtImpact": 0,
              "blockingTime": 0,
              "transferSize": 75514,
              "mainThreadTime": 0,
              "entity": "FontAwesome CDN"
            },
            {
              "mainThreadTime": 0,
              "blockingTime": 0,
              "subItems": {
                "items": [
                  {
                    "url": "https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2",
                    "transferSize": 11599,
                    "mainThreadTime": 0,
                    "tbtImpact": 0,
                    "blockingTime": 0
                  },
                  {
                    "blockingTime": 0,
                    "tbtImpact": 0,
                    "mainThreadTime": 0,
                    "url": "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
                    "transferSize": 11559
                  }
                ],
                "type": "subitems"
              },
              "tbtImpact": 0,
              "transferSize": 23158,
              "entity": "Google Fonts"
            },
            {
              "tbtImpact": 0,
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "blockingTime": 0,
                    "mainThreadTime": 0,
                    "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-9FMCYDPHN1&gtm=45je43b0v881393318z8862092493za200&_p=1710427801692&gcd=13l3l3l3l1&npa=0&dma=0&cid=75728032.1710427802&ul=en-us&sr=412x823&uaa=&uab=64&uafvl=Chromium%3B122.0.6261.94%7CNot(A%253ABrand%3B24.0.0.0%7CHeadlessChrome%3B122.0.6261.94&uamb=1&uam=moto%20g%20power%20(2022)&uap=Android&uapv=11.0&uaw=0&pscdl=noapi&_s=1&sid=1710427802&sct=1&seg=0&dl=https%3A%2F%2Fwww.sokada.co.uk%2F&dt=Web%20Design%20Sussex%20%7C%20Web%20Design%20Development%20%26%20Marketing&en=page_view&_fv=1&_nsi=1&_ss=1&tfd=1230",
                    "tbtImpact": 0,
                    "transferSize": 0
                  }
                ]
              },
              "transferSize": 0,
              "entity": "Google Analytics",
              "mainThreadTime": 0,
              "blockingTime": 0
            }
          ]
        }
      },
      "mainthread-work-breakdown": {
        "id": "mainthread-work-breakdown",
        "title": "Minimize main-thread work",
        "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "3.7 s",
        "details": {
          "sortedBy": [
            "duration"
          ],
          "headings": [
            {
              "key": "groupLabel",
              "label": "Category",
              "valueType": "text"
            },
            {
              "valueType": "ms",
              "granularity": 1,
              "key": "duration",
              "label": "Time Spent"
            }
          ],
          "type": "table",
          "items": [
            {
              "duration": 2333.315999999899,
              "group": "scriptEvaluation",
              "groupLabel": "Script Evaluation"
            },
            {
              "duration": 535.7880000000004,
              "group": "other",
              "groupLabel": "Other"
            },
            {
              "groupLabel": "Style & Layout",
              "duration": 459.66399999999976,
              "group": "styleLayout"
            },
            {
              "duration": 151.872,
              "group": "scriptParseCompile",
              "groupLabel": "Script Parsing & Compilation"
            },
            {
              "duration": 88.52399999999999,
              "group": "parseHTML",
              "groupLabel": "Parse HTML & CSS"
            },
            {
              "groupLabel": "Rendering",
              "group": "paintCompositeRender",
              "duration": 79.79199999999997
            },
            {
              "groupLabel": "Garbage Collection",
              "duration": 67.39199999999998,
              "group": "garbageCollection"
            }
          ]
        },
        "numericValue": 3716.3479999998985,
        "numericUnit": "millisecond"
      },
      "user-timings": {
        "id": "user-timings",
        "title": "User Timing marks and measures",
        "description": "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more about User Timing marks](https://developer.chrome.com/docs/lighthouse/performance/user-timings/).",
        "score": null,
        "scoreDisplayMode": "notApplicable",
        "details": {
          "headings": [],
          "items": [],
          "type": "table"
        }
      },
      "valid-source-maps": {
        "id": "valid-source-maps",
        "title": "Page has valid source maps",
        "description": "Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more about source maps](https://developer.chrome.com/docs/devtools/javascript/source-maps/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "inspector-issues": {
        "id": "inspector-issues",
        "title": "No issues in the `Issues` panel in Chrome Devtools",
        "description": "Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue.",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "type": "table",
          "items": []
        }
      },
      "bootup-time": {
        "id": "bootup-time",
        "title": "Reduce JavaScript execution time",
        "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/).",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "2.3 s",
        "details": {
          "items": [
            {
              "scriptParseCompile": 76.436,
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "total": 1456.2880000000334,
              "scripting": 1244.3800000000335
            },
            {
              "total": 467.74800000000016,
              "scriptParseCompile": 5.688,
              "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js",
              "scripting": 233.30800000000013
            },
            {
              "url": "https://www.googletagmanager.com/gtag/js?id=G-9FMCYDPHN1&l=dataLayer&cx=c",
              "total": 401.1200000000001,
              "scriptParseCompile": 20.692,
              "scripting": 357.3520000000001
            },
            {
              "total": 362.236,
              "url": "https://www.sokada.co.uk/",
              "scripting": 27.655999999999995,
              "scriptParseCompile": 5.768
            },
            {
              "url": "https://www.googletagmanager.com/gtm.js?id=GTM-NRS77MV",
              "scripting": 140.49200000000008,
              "scriptParseCompile": 18.644,
              "total": 322.1320000000001
            },
            {
              "url": "Unattributable",
              "total": 273.34400000000045,
              "scriptParseCompile": 0,
              "scripting": 8.892
            },
            {
              "scripting": 145.89600000000004,
              "total": 189.70800000000006,
              "scriptParseCompile": 5.072,
              "url": "https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc3POImAAAAAIrauIvQZlqgRFqOHn2Wdcr2Ge4v&co=aHR0cHM6Ly93d3cuc29rYWRhLmNvLnVrOjQ0Mw..&hl=en&v=QquE1_MNjnFHgZF4HPsEcf_2&size=invisible&cb=oieutss3cx5o"
            },
            {
              "url": "https://www.google.com/js/bg/v77SiQbcxtK1O5ek11TdloiB5zZ00UAxE3PsP-319e4.js",
              "total": 57.5,
              "scripting": 55.012,
              "scriptParseCompile": 1.664
            }
          ],
          "type": "table",
          "headings": [
            {
              "label": "URL",
              "valueType": "url",
              "key": "url"
            },
            {
              "valueType": "ms",
              "granularity": 1,
              "label": "Total CPU Time",
              "key": "total"
            },
            {
              "label": "Script Evaluation",
              "granularity": 1,
              "key": "scripting",
              "valueType": "ms"
            },
            {
              "label": "Script Parse",
              "key": "scriptParseCompile",
              "valueType": "ms",
              "granularity": 1
            }
          ],
          "sortedBy": [
            "total"
          ],
          "summary": {
            "wastedMs": 2346.952000000034
          }
        },
        "numericValue": 2346.952000000034,
        "numericUnit": "millisecond"
      },
      "aria-required-attr": {
        "id": "aria-required-attr",
        "title": "`[role]`s have all required `[aria-*]` attributes",
        "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.8/aria-required-attr).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "type": "table",
          "headings": []
        }
      },
      "td-has-header": {
        "id": "td-has-header",
        "title": "`<td>` elements in a large `<table>` have one or more table headers.",
        "description": "Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.8/td-has-header).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "no-unload-listeners": {
        "id": "no-unload-listeners",
        "title": "Avoids `unload` event listeners",
        "description": "The `unload` event does not fire reliably and listening for it can prevent browser optimizations like the Back-Forward Cache. Use `pagehide` or `visibilitychange` events instead. [Learn more about unload event listeners](https://web.dev/articles/bfcache#never_use_the_unload_event)",
        "score": 1,
        "scoreDisplayMode": "binary"
      },
      "valid-lang": {
        "id": "valid-lang",
        "title": "`[lang]` attributes have a valid value",
        "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/valid-lang).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "uses-rel-preload": {
        "id": "uses-rel-preload",
        "title": "Preload key requests",
        "description": "Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn how to preload key requests](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preload/).",
        "score": null,
        "scoreDisplayMode": "notApplicable",
        "details": {
          "items": [],
          "overallSavingsMs": 0,
          "headings": [],
          "type": "opportunity"
        }
      },
      "layout-shift-elements": {
        "id": "layout-shift-elements",
        "title": "Avoid large layout shifts",
        "description": "These DOM elements were most affected by layout shifts. Some layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "7 elements found",
        "details": {
          "type": "table",
          "headings": [
            {
              "key": "node",
              "label": "Element",
              "valueType": "node"
            },
            {
              "valueType": "numeric",
              "granularity": 0.001,
              "label": "Layout shift impact",
              "key": "score"
            }
          ],
          "items": [
            {
              "score": 0.01922477238833945,
              "node": {
                "boundingRect": {
                  "left": 0,
                  "right": 412,
                  "width": 412,
                  "bottom": 1417,
                  "top": 496,
                  "height": 921
                },
                "nodeLabel": "Whether you want a new website or to improve your position on search engines, w…",
                "type": "node",
                "selector": "body.home > div#page > div#content > div#home-services",
                "snippet": "<div id=\"home-services\">",
                "lhId": "page-1-DIV",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV"
              }
            },
            {
              "node": {
                "lhId": "page-2-H2",
                "boundingRect": {
                  "left": 20,
                  "top": 566,
                  "width": 372,
                  "height": 120,
                  "bottom": 686,
                  "right": 392
                },
                "type": "node",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV,0,DIV,0,H2",
                "nodeLabel": "Whether you want a new website or to improve your position on search engines, w…",
                "selector": "div#content > div#home-services > div.wrapper > h2",
                "snippet": "<h2>"
              },
              "score": 0.0061558447560175
            },
            {
              "node": {
                "boundingRect": {
                  "height": 88,
                  "bottom": 438,
                  "width": 298,
                  "right": 355,
                  "top": 350,
                  "left": 57
                },
                "lhId": "page-3-P",
                "nodeLabel": "If you’re ready to start making a success of your website call us on\n01435 817 …",
                "snippet": "<p>",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,P",
                "type": "node",
                "selector": "div#home-hero-image > div.wrapper > div.hero-content > p"
              },
              "score": 0.004724727827617565
            },
            {
              "node": {
                "boundingRect": {
                  "width": 149,
                  "right": 329,
                  "top": 657,
                  "height": 28,
                  "left": 180,
                  "bottom": 685
                },
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV,0,DIV,0,H2,1,SPAN",
                "lhId": "page-4-SPAN",
                "type": "node",
                "selector": "div#home-services > div.wrapper > h2 > span.green",
                "snippet": "<span class=\"green\">",
                "nodeLabel": "we can help."
              },
              "score": 0.001473193616824701
            },
            {
              "node": {
                "type": "node",
                "path": "1,HTML,1,BODY,1,DIV,0,HEADER,0,DIV,0,DIV,0,A,0,IMG",
                "boundingRect": {
                  "width": 170,
                  "right": 190,
                  "left": 20,
                  "top": 30,
                  "bottom": 77,
                  "height": 47
                },
                "snippet": "<img data-lazyloaded=\"1\" src=\"https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp\" alt=\"Web Design Sussex by Sokada\" data-src=\"https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp\" data-ll-status=\"loaded\" class=\"entered litespeed-loaded\">",
                "lhId": "page-5-IMG",
                "nodeLabel": "Web Design Sussex by Sokada",
                "selector": "div.wrapper > div.site-branding > a > img.entered"
              },
              "score": 0.0004294782273495261
            },
            {
              "score": 0.00006288733937173869,
              "node": {
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,1,DIV,0,DIV,1,DIV,0,DIV,1,P",
                "boundingRect": {
                  "top": 802,
                  "bottom": 886,
                  "left": 40,
                  "width": 332,
                  "right": 372,
                  "height": 84
                },
                "snippet": "<p>",
                "selector": "div.wrapper > div.home-services-grid > div.single-service > p",
                "type": "node",
                "nodeLabel": "Are you ready to take your shop online? Let us help, we can guide you down this…",
                "lhId": "page-6-P"
              }
            },
            {
              "score": 0.00003867022284840044,
              "node": {
                "type": "node",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,H1,0,::after",
                "lhId": "page-7-::after",
                "snippet": "<::after>",
                "selector": "div.wrapper > div.hero-content > h1 > ::after",
                "nodeLabel": "div.wrapper > div.hero-content > h1 > ::after",
                "boundingRect": {
                  "top": 323,
                  "height": 2,
                  "right": 132,
                  "width": 75,
                  "left": 57,
                  "bottom": 325
                }
              }
            }
          ]
        }
      },
      "network-rtt": {
        "id": "network-rtt",
        "title": "Network Round Trip Times",
        "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more about the Round Trip Time](https://hpbn.co/primer-on-latency-and-bandwidth/).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "40 ms",
        "details": {
          "type": "table",
          "sortedBy": [
            "rtt"
          ],
          "headings": [
            {
              "valueType": "text",
              "label": "URL",
              "key": "origin"
            },
            {
              "valueType": "ms",
              "granularity": 1,
              "key": "rtt",
              "label": "Time Spent"
            }
          ],
          "items": [
            {
              "origin": "https://www.sokada.co.uk",
              "rtt": 43
            },
            {
              "origin": "https://www.google.com",
              "rtt": 0
            },
            {
              "origin": "https://www.googletagmanager.com",
              "rtt": 0
            },
            {
              "origin": "https://www.gstatic.com",
              "rtt": 0
            },
            {
              "origin": "https://use.fontawesome.com",
              "rtt": 0
            },
            {
              "origin": "https://fonts.gstatic.com",
              "rtt": 0
            }
          ]
        },
        "numericValue": 43,
        "numericUnit": "millisecond"
      },
      "modern-image-formats": {
        "id": "modern-image-formats",
        "title": "Serve images in next-gen formats",
        "description": "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more about modern image formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/).",
        "score": 0.5,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Potential savings of 855 KiB",
        "details": {
          "type": "opportunity",
          "headings": [
            {
              "valueType": "node",
              "key": "node"
            },
            {
              "valueType": "url",
              "label": "URL",
              "key": "url"
            },
            {
              "valueType": "bytes",
              "label": "Resource Size",
              "key": "totalBytes"
            },
            {
              "valueType": "bytes",
              "label": "Potential Savings",
              "key": "wastedBytes"
            }
          ],
          "debugData": {
            "type": "debugdata",
            "metricSavings": {
              "FCP": 0,
              "LCP": 0
            }
          },
          "overallSavingsBytes": 875631.1000000001,
          "overallSavingsMs": 4050,
          "items": [
            {
              "isCrossOrigin": false,
              "node": {
                "type": "node",
                "boundingRect": {
                  "height": 439,
                  "right": 392,
                  "left": 20,
                  "bottom": 2602,
                  "width": 372,
                  "top": 2163
                },
                "snippet": "<div class=\"project-internal\" style=\"background-image: url(&quot;https://www.sokada.co.uk/wp-content/uploads/2022/09/…&quot;);\">",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,2,DIV,0,DIV,1,DIV,0,UL,1,LI,0,DIV",
                "nodeLabel": "Melina Joy Opticians\n\nMelina Joy are an independent boutique optometrist practi…",
                "lhId": "1-93-DIV",
                "selector": "div.projects-list > ul.projects > li.single-project > div.project-internal"
              },
              "wastedWebpBytes": 476834,
              "fromProtocol": true,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/09/melina-joy-slice.png",
              "wastedBytes": 485752.7,
              "totalBytes": 531836
            },
            {
              "isCrossOrigin": false,
              "fromProtocol": true,
              "wastedBytes": 271697.65,
              "node": {
                "type": "node",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,2,DIV,0,DIV,1,DIV,0,UL,2,LI,0,DIV",
                "lhId": "1-94-DIV",
                "boundingRect": {
                  "right": 392,
                  "bottom": 3079,
                  "height": 447,
                  "top": 2632,
                  "width": 372,
                  "left": 20
                },
                "snippet": "<div class=\"project-internal\" style=\"background-image: url(&quot;https://www.sokada.co.uk/wp-content/uploads/2022/09/…&quot;);\">",
                "selector": "div.projects-list > ul.projects > li.single-project > div.project-internal",
                "nodeLabel": "FTH Hire Group Online Marketing\n\nWith regular work, updates and meetings, we ar…"
              },
              "totalBytes": 639164,
              "wastedWebpBytes": 102150,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/09/323558741_523201649784661_386326318532048502_n.jpg"
            },
            {
              "isCrossOrigin": false,
              "totalBytes": 182607,
              "node": {
                "lhId": "1-92-DIV",
                "type": "node",
                "boundingRect": {
                  "height": 411,
                  "top": 1722,
                  "bottom": 2133,
                  "width": 372,
                  "right": 392,
                  "left": 20
                },
                "snippet": "<div class=\"project-internal\" style=\"background-image: url(&quot;https://www.sokada.co.uk/wp-content/uploads/2022/12/…&quot;);\">",
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,2,DIV,0,DIV,1,DIV,0,UL,0,LI,0,DIV",
                "nodeLabel": "Spotlight On Corruption\n\nSpotlight on Corruption is a registered charity aiming…",
                "selector": "div.projects-list > ul.projects > li.single-project > div.project-internal"
              },
              "fromProtocol": true,
              "wastedWebpBytes": 108397,
              "wastedBytes": 118180.75,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/12/pexels-naveen-annam-15816931.jpg"
            }
          ],
          "sortedBy": [
            "wastedBytes"
          ]
        },
        "warnings": [],
        "numericValue": 4050,
        "numericUnit": "millisecond"
      },
      "meta-description": {
        "id": "meta-description",
        "title": "Document has a meta description",
        "description": "Meta descriptions may be included in search results to concisely summarize page content. [Learn more about the meta description](https://developer.chrome.com/docs/lighthouse/seo/meta-description/).",
        "score": 1,
        "scoreDisplayMode": "binary"
      },
      "unminified-javascript": {
        "id": "unminified-javascript",
        "title": "Minify JavaScript",
        "description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/).",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Potential savings of 20 KiB",
        "details": {
          "overallSavingsBytes": 20087,
          "headings": [
            {
              "label": "URL",
              "valueType": "url",
              "key": "url"
            },
            {
              "valueType": "bytes",
              "label": "Transfer Size",
              "key": "totalBytes"
            },
            {
              "valueType": "bytes",
              "key": "wastedBytes",
              "label": "Potential Savings"
            }
          ],
          "debugData": {
            "metricSavings": {
              "FCP": 0,
              "LCP": 190
            },
            "type": "debugdata"
          },
          "overallSavingsMs": 40,
          "type": "opportunity",
          "sortedBy": [
            "wastedBytes"
          ],
          "items": [
            {
              "url": "https://www.sokada.co.uk/wp-content/plugins/fancybox-for-wordpress/assets/js/jquery.fancybox.js",
              "wastedBytes": 16467,
              "totalBytes": 37883,
              "wastedPercent": 43.468526810494765
            },
            {
              "wastedBytes": 3620,
              "totalBytes": 6802,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/lightslider.js",
              "wastedPercent": 53.217152601588815
            }
          ]
        },
        "warnings": [],
        "numericValue": 40,
        "numericUnit": "millisecond"
      },
      "frame-title": {
        "id": "frame-title",
        "title": "`<frame>` or `<iframe>` elements have a title",
        "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more about frame titles](https://dequeuniversity.com/rules/axe/4.8/frame-title).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "type": "table",
          "headings": []
        }
      },
      "prioritize-lcp-image": {
        "id": "prioritize-lcp-image",
        "title": "Preload Largest Contentful Paint image",
        "description": "If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP. [Learn more about preloading LCP elements](https://web.dev/articles/optimize-lcp#optimize_when_the_resource_is_discovered).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "overallSavingsMs": 0,
          "type": "opportunity",
          "sortedBy": [
            "wastedMs"
          ],
          "headings": [],
          "debugData": {
            "initiatorPath": [
              {
                "initiatorType": "parser",
                "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/horse-exchange-mockup.webp"
              },
              {
                "initiatorType": "other",
                "url": "https://www.sokada.co.uk/"
              }
            ],
            "pathLength": 2,
            "type": "debugdata"
          },
          "items": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "managed-focus": {
        "id": "managed-focus",
        "title": "The user's focus is directed to new content added to the page",
        "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "third-party-cookies": {
        "id": "third-party-cookies",
        "title": "Avoids third-party cookies",
        "description": "Support for third-party cookies will be removed in a future version of Chrome. [Learn more about phasing out third-party cookies](https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "type": "table",
          "items": []
        }
      },
      "aria-valid-attr": {
        "id": "aria-valid-attr",
        "title": "`[aria-*]` attributes are valid and not misspelled",
        "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more about valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.8/aria-valid-attr).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [],
          "type": "table",
          "headings": []
        }
      },
      "non-composited-animations": {
        "id": "non-composited-animations",
        "title": "Avoid non-composited animations",
        "description": "Animations which are not composited can be janky and increase CLS. [Learn how to avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/)",
        "score": null,
        "scoreDisplayMode": "notApplicable",
        "details": {
          "headings": [],
          "type": "table",
          "items": []
        }
      },
      "hreflang": {
        "id": "hreflang",
        "title": "Document has a valid `hreflang`",
        "description": "hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more about `hreflang`](https://developer.chrome.com/docs/lighthouse/seo/hreflang/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "items": [],
          "type": "table"
        }
      },
      "largest-contentful-paint-element": {
        "id": "largest-contentful-paint-element",
        "title": "Largest Contentful Paint element",
        "description": "This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "2,760 ms",
        "details": {
          "items": [
            {
              "items": [
                {
                  "node": {
                    "snippet": "<div class=\"hero-images\" style=\"background-image: url(&quot;https://www.sokada.co.uk/wp-content/uploads/2022/04…&quot;);\">",
                    "nodeLabel": "div#page > div#content > div#home-hero-image > div.hero-images",
                    "selector": "div#page > div#content > div#home-hero-image > div.hero-images",
                    "type": "node",
                    "path": "1,HTML,1,BODY,1,DIV,1,DIV,0,DIV,1,DIV",
                    "lhId": "page-0-DIV",
                    "boundingRect": {
                      "top": 0,
                      "right": 412,
                      "bottom": 496,
                      "width": 412,
                      "height": 496,
                      "left": 0
                    }
                  }
                }
              ],
              "type": "table",
              "headings": [
                {
                  "valueType": "node",
                  "label": "Element",
                  "key": "node"
                }
              ]
            },
            {
              "items": [
                {
                  "phase": "TTFB",
                  "timing": 645,
                  "percent": "23%"
                },
                {
                  "phase": "Load Delay",
                  "timing": 1700.5979911005802,
                  "percent": "62%"
                },
                {
                  "phase": "Load Time",
                  "timing": 264.674966888369,
                  "percent": "10%"
                },
                {
                  "phase": "Render Delay",
                  "percent": "5%",
                  "timing": 147.2270420110508
                }
              ],
              "type": "table",
              "headings": [
                {
                  "key": "phase",
                  "valueType": "text",
                  "label": "Phase"
                },
                {
                  "valueType": "text",
                  "key": "percent",
                  "label": "% of LCP"
                },
                {
                  "key": "timing",
                  "valueType": "ms",
                  "label": "Timing"
                }
              ]
            }
          ],
          "type": "list"
        }
      },
      "aria-hidden-focus": {
        "id": "aria-hidden-focus",
        "title": "`[aria-hidden=\"true\"]` elements do not contain focusable descendents",
        "description": "Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn how `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.8/aria-hidden-focus).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "heading-order": {
        "id": "heading-order",
        "title": "Heading elements are not in a sequentially-descending order",
        "description": "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.8/heading-order).",
        "score": 0,
        "scoreDisplayMode": "binary",
        "details": {
          "debugData": {
            "type": "debugdata",
            "impact": "moderate",
            "tags": [
              "cat.semantics",
              "best-practice"
            ]
          },
          "items": [
            {
              "node": {
                "snippet": "<h4>",
                "boundingRect": {
                  "width": 298,
                  "bottom": 4674,
                  "right": 355,
                  "left": 57,
                  "top": 4644,
                  "height": 30
                },
                "nodeLabel": "Come visit us",
                "lhId": "1-17-H4",
                "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV,0,DIV,1,DIV,1,DIV,0,H4",
                "selector": "div.wrapper > div.footer-main > div.grid-3 > h4",
                "type": "node",
                "explanation": "Fix any of the following:\n  Heading order invalid"
              }
            }
          ],
          "headings": [
            {
              "key": "node",
              "label": "Failing Elements",
              "valueType": "node",
              "subItemsHeading": {
                "valueType": "node",
                "key": "relatedNode"
              }
            }
          ],
          "type": "table"
        }
      },
      "network-requests": {
        "id": "network-requests",
        "title": "Network Requests",
        "description": "Lists the network requests that were made during page load.",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "type": "table",
          "headings": [
            {
              "label": "URL",
              "valueType": "url",
              "key": "url"
            },
            {
              "key": "protocol",
              "valueType": "text",
              "label": "Protocol"
            },
            {
              "granularity": 1,
              "valueType": "ms",
              "label": "Network Request Time",
              "key": "networkRequestTime"
            },
            {
              "valueType": "ms",
              "label": "Network End Time",
              "key": "networkEndTime",
              "granularity": 1
            },
            {
              "valueType": "bytes",
              "label": "Transfer Size",
              "granularity": 1,
              "key": "transferSize",
              "displayUnit": "kb"
            },
            {
              "displayUnit": "kb",
              "granularity": 1,
              "label": "Resource Size",
              "valueType": "bytes",
              "key": "resourceSize"
            },
            {
              "valueType": "text",
              "label": "Status Code",
              "key": "statusCode"
            },
            {
              "key": "mimeType",
              "label": "MIME Type",
              "valueType": "text"
            },
            {
              "key": "resourceType",
              "valueType": "text",
              "label": "Resource Type"
            }
          ],
          "items": [
            {
              "url": "https://www.sokada.co.uk/",
              "transferSize": 12358,
              "statusCode": 200,
              "finished": true,
              "resourceType": "Document",
              "resourceSize": 41463,
              "networkEndTime": 367.3100000023842,
              "networkRequestTime": 1.2679999992251396,
              "entity": "sokada.co.uk",
              "sessionTargetType": "page",
              "mimeType": "text/html",
              "rendererStartTime": 0,
              "priority": "VeryHigh",
              "experimentalFromMainFrame": true,
              "protocol": "h2"
            },
            {
              "statusCode": 200,
              "resourceSize": 282322,
              "networkRequestTime": 386.45400001108646,
              "transferSize": 43509,
              "protocol": "h2",
              "priority": "VeryHigh",
              "resourceType": "Stylesheet",
              "rendererStartTime": 385.72399999946356,
              "networkEndTime": 750.2420000061393,
              "mimeType": "text/css",
              "entity": "sokada.co.uk",
              "experimentalFromMainFrame": true,
              "finished": true,
              "url": "https://www.sokada.co.uk/wp-content/litespeed/css/e741214b412fe74cff89ed0df5260bfa.css?ver=853d4",
              "sessionTargetType": "page"
            },
            {
              "sessionTargetType": "page",
              "protocol": "h2",
              "resourceSize": 87553,
              "rendererStartTime": 386.3900000080466,
              "mimeType": "application/javascript",
              "resourceType": "Script",
              "statusCode": 200,
              "finished": true,
              "entity": "sokada.co.uk",
              "transferSize": 30068,
              "priority": "High",
              "networkEndTime": 610.0680000036955,
              "experimentalFromMainFrame": true,
              "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js",
              "networkRequestTime": 386.8940000012517
            },
            {
              "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery-migrate.min.js",
              "resourceType": "Script",
              "networkRequestTime": 387.2660000100732,
              "networkEndTime": 658.3810000047088,
              "transferSize": 5179,
              "protocol": "h2",
              "priority": "High",
              "finished": true,
              "mimeType": "application/javascript",
              "statusCode": 200,
              "resourceSize": 13577,
              "entity": "sokada.co.uk",
              "rendererStartTime": 386.77800000458956,
              "sessionTargetType": "page",
              "experimentalFromMainFrame": true
            },
            {
              "transferSize": 38511,
              "protocol": "h2",
              "resourceSize": 162140,
              "experimentalFromMainFrame": true,
              "sessionTargetType": "page",
              "networkRequestTime": 387.6140000075102,
              "finished": true,
              "url": "https://www.sokada.co.uk/wp-content/plugins/fancybox-for-wordpress/assets/js/jquery.fancybox.js",
              "entity": "sokada.co.uk",
              "statusCode": 200,
              "mimeType": "application/javascript",
              "priority": "High",
              "resourceType": "Script",
              "rendererStartTime": 387.109000004828,
              "networkEndTime": 744.468000009656
            },
            {
              "sessionTargetType": "page",
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/lightslider.js",
              "networkRequestTime": 387.92800000309944,
              "transferSize": 7426,
              "experimentalFromMainFrame": true,
              "networkEndTime": 657.9160000085831,
              "entity": "sokada.co.uk",
              "finished": true,
              "protocol": "h2",
              "resourceSize": 48086,
              "priority": "High",
              "mimeType": "application/javascript",
              "statusCode": 200,
              "rendererStartTime": 387.4390000104904,
              "resourceType": "Script"
            },
            {
              "sessionTargetType": "page",
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/bigSlide.min.js",
              "rendererStartTime": 387.76700000464916,
              "resourceSize": 5474,
              "networkRequestTime": 388.22900000214577,
              "resourceType": "Script",
              "protocol": "h2",
              "priority": "High",
              "mimeType": "application/javascript",
              "experimentalFromMainFrame": true,
              "entity": "sokada.co.uk",
              "finished": true,
              "statusCode": 200,
              "transferSize": 1899,
              "networkEndTime": 609.1980000063777
            },
            {
              "resourceType": "Script",
              "networkRequestTime": 388.6130000054836,
              "protocol": "h2",
              "resourceSize": 1344,
              "transferSize": 870,
              "sessionTargetType": "page",
              "entity": "sokada.co.uk",
              "experimentalFromMainFrame": true,
              "statusCode": 200,
              "mimeType": "application/javascript",
              "finished": true,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/nav-mobile.js",
              "rendererStartTime": 388.1050000041723,
              "priority": "High",
              "networkEndTime": 435.86800000071526
            },
            {
              "resourceType": "Script",
              "networkEndTime": 608.8950000032783,
              "statusCode": 200,
              "resourceSize": 1096,
              "networkRequestTime": 388.9810000061989,
              "protocol": "h2",
              "entity": "sokada.co.uk",
              "experimentalFromMainFrame": true,
              "priority": "High",
              "transferSize": 728,
              "rendererStartTime": 388.4700000062585,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/drilldown-navigation.js",
              "mimeType": "application/javascript",
              "finished": true,
              "sessionTargetType": "page"
            },
            {
              "rendererStartTime": 388.8070000037551,
              "url": "https://www.google.com/recaptcha/api.js?render=6Lc3POImAAAAAIrauIvQZlqgRFqOHn2Wdcr2Ge4v&ver=1.1",
              "networkRequestTime": 389.3430000022054,
              "mimeType": "text/javascript",
              "networkEndTime": 403.43300000578165,
              "priority": "High",
              "sessionTargetType": "page",
              "finished": true,
              "protocol": "h2",
              "transferSize": 1316,
              "resourceType": "Script",
              "entity": "Other Google APIs/SDKs",
              "resourceSize": 1256,
              "statusCode": 200,
              "experimentalFromMainFrame": true
            },
            {
              "finished": true,
              "mimeType": "application/javascript",
              "experimentalFromMainFrame": true,
              "sessionTargetType": "page",
              "priority": "Low",
              "resourceType": "Script",
              "url": "https://www.googletagmanager.com/gtm.js?id=GTM-NRS77MV",
              "protocol": "h2",
              "statusCode": 200,
              "resourceSize": 188119,
              "transferSize": 67980,
              "networkRequestTime": 786.609000004828,
              "rendererStartTime": 785.9550000056624,
              "entity": "Google Tag Manager",
              "networkEndTime": 803.4220000058413
            },
            {
              "protocol": "data",
              "resourceSize": 35,
              "mimeType": "image/gif",
              "networkRequestTime": 788.0670000016689,
              "rendererStartTime": 788.0670000016689,
              "statusCode": 200,
              "url": "data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=",
              "resourceType": "Image",
              "transferSize": 0,
              "priority": "Low",
              "experimentalFromMainFrame": true,
              "networkEndTime": 788.1980000063777,
              "sessionTargetType": "page",
              "finished": true
            },
            {
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "rendererStartTime": 791.6759999990463,
              "entity": "Google CDN",
              "protocol": "h2",
              "statusCode": 200,
              "finished": true,
              "networkRequestTime": 792.2950000092387,
              "mimeType": "text/javascript",
              "networkEndTime": 805.7590000033379,
              "priority": "Low",
              "resourceType": "Script",
              "transferSize": 199904,
              "resourceSize": 501537,
              "experimentalFromMainFrame": true,
              "sessionTargetType": "page"
            },
            {
              "resourceSize": 35768,
              "networkRequestTime": 801.1900000050664,
              "entity": "sokada.co.uk",
              "mimeType": "image/webp",
              "resourceType": "Image",
              "priority": "High",
              "finished": true,
              "statusCode": 200,
              "transferSize": 36034,
              "sessionTargetType": "page",
              "protocol": "h2",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/horse-exchange-mockup.webp",
              "networkEndTime": 891.6070000082254,
              "rendererStartTime": 800.5750000029802,
              "experimentalFromMainFrame": true
            },
            {
              "resourceSize": 182607,
              "experimentalFromMainFrame": true,
              "protocol": "h2",
              "transferSize": 182876,
              "statusCode": 200,
              "networkRequestTime": 802.0180000066757,
              "finished": true,
              "mimeType": "image/jpeg",
              "resourceType": "Image",
              "entity": "sokada.co.uk",
              "networkEndTime": 933.9870000034571,
              "sessionTargetType": "page",
              "priority": "Low",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/12/pexels-naveen-annam-15816931.jpg",
              "rendererStartTime": 801.5920000076294
            },
            {
              "experimentalFromMainFrame": true,
              "rendererStartTime": 801.984000004828,
              "networkRequestTime": 802.5480000078678,
              "entity": "sokada.co.uk",
              "protocol": "h2",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/09/melina-joy-slice.png",
              "mimeType": "image/png",
              "finished": true,
              "priority": "Low",
              "resourceType": "Image",
              "statusCode": 200,
              "transferSize": 532104,
              "resourceSize": 531836,
              "sessionTargetType": "page",
              "networkEndTime": 1024.1450000032783
            },
            {
              "resourceType": "Image",
              "networkRequestTime": 803.0490000024438,
              "finished": true,
              "transferSize": 639433,
              "experimentalFromMainFrame": true,
              "mimeType": "image/jpeg",
              "statusCode": 200,
              "entity": "sokada.co.uk",
              "protocol": "h2",
              "networkEndTime": 1043.2620000094175,
              "sessionTargetType": "page",
              "priority": "Low",
              "rendererStartTime": 802.471000008285,
              "resourceSize": 639164,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/09/323558741_523201649784661_386326318532048502_n.jpg"
            },
            {
              "resourceSize": 37144,
              "experimentalFromMainFrame": true,
              "sessionTargetType": "page",
              "statusCode": 200,
              "networkEndTime": 852.1539999991655,
              "networkRequestTime": 804.1680000051856,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/alexandra-funnell2019-768x461-1.webp",
              "entity": "sokada.co.uk",
              "priority": "Low",
              "transferSize": 37410,
              "rendererStartTime": 803.1740000024438,
              "finished": true,
              "protocol": "h2",
              "resourceType": "Image",
              "mimeType": "image/webp"
            },
            {
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "finished": true,
              "entity": "sokada.co.uk",
              "mimeType": "image/jpeg",
              "resourceType": "Image",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2019/09/anthony.jpg",
              "resourceSize": 5964,
              "networkEndTime": 1119.8650000020862,
              "protocol": "h2",
              "priority": "Low",
              "sessionTargetType": "page",
              "networkRequestTime": 804.4270000010729,
              "transferSize": 6231,
              "rendererStartTime": 803.6830000057817
            },
            {
              "resourceSize": 12384,
              "finished": true,
              "statusCode": 200,
              "rendererStartTime": 804.1070000082254,
              "priority": "Low",
              "resourceType": "Image",
              "mimeType": "image/webp",
              "transferSize": 12650,
              "networkRequestTime": 804.7910000011325,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/mark-hassall1-400x400-1.webp",
              "networkEndTime": 932.7510000020266,
              "entity": "sokada.co.uk",
              "experimentalFromMainFrame": true,
              "protocol": "h2",
              "sessionTargetType": "page"
            },
            {
              "sessionTargetType": "page",
              "networkEndTime": 893.5770000070333,
              "statusCode": 200,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/Fiona-Blaxland.webp",
              "resourceType": "Image",
              "resourceSize": 10906,
              "protocol": "h2",
              "mimeType": "image/webp",
              "experimentalFromMainFrame": true,
              "transferSize": 11172,
              "priority": "Low",
              "rendererStartTime": 804.5670000091195,
              "networkRequestTime": 806.8670000061393,
              "finished": true,
              "entity": "sokada.co.uk"
            },
            {
              "networkRequestTime": 807.2010000050068,
              "networkEndTime": 857.9240000024438,
              "rendererStartTime": 805,
              "protocol": "h2",
              "resourceType": "Image",
              "mimeType": "image/jpeg",
              "resourceSize": 16376,
              "statusCode": 200,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2019/07/tony-1-400x400.jpg",
              "entity": "sokada.co.uk",
              "finished": true,
              "sessionTargetType": "page",
              "transferSize": 16644,
              "experimentalFromMainFrame": true,
              "priority": "Low"
            },
            {
              "networkEndTime": 975.4160000011325,
              "resourceType": "Image",
              "protocol": "h2",
              "sessionTargetType": "page",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/TQQ0HN142-UR2A30C3E-71de2f11cd28-100.webp",
              "networkRequestTime": 807.3150000050664,
              "transferSize": 2589,
              "entity": "sokada.co.uk",
              "statusCode": 200,
              "priority": "Low",
              "finished": true,
              "experimentalFromMainFrame": true,
              "rendererStartTime": 805.41400000453,
              "mimeType": "image/webp",
              "resourceSize": 2324
            },
            {
              "networkEndTime": 854.5670000016689,
              "statusCode": 200,
              "resourceType": "Image",
              "finished": true,
              "rendererStartTime": 805.8500000089407,
              "networkRequestTime": 807.444000005722,
              "entity": "sokada.co.uk",
              "experimentalFromMainFrame": true,
              "resourceSize": 8200,
              "transferSize": 8467,
              "priority": "Low",
              "sessionTargetType": "page",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2019/07/charlotte-sterling-reed-1.jpg",
              "mimeType": "image/jpeg",
              "protocol": "h2"
            },
            {
              "sessionTargetType": "page",
              "protocol": "h2",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/phil2.webp",
              "entity": "sokada.co.uk",
              "finished": true,
              "rendererStartTime": 806.3440000042319,
              "resourceType": "Image",
              "experimentalFromMainFrame": true,
              "resourceSize": 14050,
              "statusCode": 200,
              "networkEndTime": 933.3969999998808,
              "networkRequestTime": 807.652000002563,
              "mimeType": "image/webp",
              "transferSize": 14316,
              "priority": "Low"
            },
            {
              "resourceType": "Image",
              "mimeType": "image/webp",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/oliver-blunden.webp",
              "protocol": "h2",
              "networkEndTime": 933.16400000453,
              "sessionTargetType": "page",
              "transferSize": 3707,
              "finished": true,
              "entity": "sokada.co.uk",
              "experimentalFromMainFrame": true,
              "statusCode": 200,
              "networkRequestTime": 807.7939999997616,
              "resourceSize": 3442,
              "rendererStartTime": 806.804000005126,
              "priority": "Low"
            },
            {
              "resourceSize": 7706,
              "transferSize": 7971,
              "networkEndTime": 935.5659999996424,
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "mimeType": "image/webp",
              "rendererStartTime": 807.262000001967,
              "sessionTargetType": "page",
              "resourceType": "Image",
              "networkRequestTime": 807.9350000098348,
              "priority": "Low",
              "entity": "sokada.co.uk",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/greenfg.webp",
              "protocol": "h2",
              "finished": true
            },
            {
              "finished": true,
              "protocol": "h2",
              "resourceType": "Font",
              "networkRequestTime": 810.6170000061393,
              "transferSize": 22061,
              "networkEndTime": 858.7030000090599,
              "sessionTargetType": "page",
              "priority": "VeryHigh",
              "mimeType": "font/woff",
              "statusCode": 200,
              "entity": "sokada.co.uk",
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-black1-webfont.woff",
              "rendererStartTime": 809.8680000081658,
              "resourceSize": 21796,
              "experimentalFromMainFrame": true
            },
            {
              "rendererStartTime": 810.9050000086427,
              "entity": "sokada.co.uk",
              "resourceType": "Font",
              "networkEndTime": 976.0970000103116,
              "resourceSize": 15736,
              "protocol": "h2",
              "finished": true,
              "mimeType": "font/woff2",
              "experimentalFromMainFrame": true,
              "transferSize": 16002,
              "sessionTargetType": "page",
              "priority": "VeryHigh",
              "statusCode": 200,
              "networkRequestTime": 811.4460000023246,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-regular.woff2"
            },
            {
              "protocol": "h2",
              "experimentalFromMainFrame": true,
              "statusCode": 200,
              "sessionTargetType": "page",
              "transferSize": 16082,
              "resourceType": "Font",
              "networkRequestTime": 812.2639999985695,
              "priority": "VeryHigh",
              "mimeType": "font/woff2",
              "finished": true,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-700.woff2",
              "networkEndTime": 975.8350000083447,
              "entity": "sokada.co.uk",
              "rendererStartTime": 811.6800000071526,
              "resourceSize": 15816
            },
            {
              "protocol": "h2",
              "mimeType": "font/woff",
              "resourceSize": 16328,
              "resourceType": "Font",
              "priority": "VeryHigh",
              "transferSize": 16593,
              "networkRequestTime": 812.5350000038743,
              "networkEndTime": 997.8910000100732,
              "experimentalFromMainFrame": true,
              "sessionTargetType": "page",
              "rendererStartTime": 812.0080000013113,
              "statusCode": 200,
              "entity": "sokada.co.uk",
              "finished": true,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/Gotham-Book.woff"
            },
            {
              "resourceType": "Font",
              "experimentalFromMainFrame": true,
              "sessionTargetType": "page",
              "transferSize": 21701,
              "protocol": "h2",
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/gotham-bold1-webfont.woff",
              "mimeType": "font/woff",
              "rendererStartTime": 812.2310000061989,
              "networkRequestTime": 812.8000000044703,
              "resourceSize": 21436,
              "entity": "sokada.co.uk",
              "finished": true,
              "networkEndTime": 894.1840000078082,
              "priority": "VeryHigh",
              "statusCode": 200
            },
            {
              "experimentalFromMainFrame": true,
              "mimeType": "font/woff2",
              "networkEndTime": 893.8810000047088,
              "entity": "sokada.co.uk",
              "resourceSize": 15784,
              "rendererStartTime": 813.6960000097752,
              "priority": "VeryHigh",
              "protocol": "h2",
              "networkRequestTime": 814.2100000083447,
              "finished": true,
              "resourceType": "Font",
              "statusCode": 200,
              "sessionTargetType": "page",
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/fonts/roboto-v20-latin-300.woff2",
              "transferSize": 16050
            },
            {
              "priority": "VeryHigh",
              "rendererStartTime": 814.8250000029802,
              "experimentalFromMainFrame": true,
              "resourceSize": 74768,
              "statusCode": 200,
              "networkEndTime": 1027.1070000007749,
              "resourceType": "Font",
              "entity": "FontAwesome CDN",
              "networkRequestTime": 815.445000000298,
              "transferSize": 75514,
              "sessionTargetType": "page",
              "url": "https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-brands-400.woff2",
              "finished": true,
              "mimeType": "font/woff2",
              "protocol": "h2"
            },
            {
              "resourceType": "Image",
              "transferSize": 15818,
              "protocol": "h2",
              "mimeType": "image/webp",
              "finished": true,
              "statusCode": 200,
              "rendererStartTime": 904.4340000078082,
              "sessionTargetType": "page",
              "resourceSize": 15552,
              "priority": "Low",
              "networkEndTime": 954.637000001967,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/alexandra-funnell2019-768x461-1-108x97.webp",
              "networkRequestTime": 905.0670000016689,
              "experimentalFromMainFrame": true,
              "entity": "sokada.co.uk"
            },
            {
              "url": "https://www.sokada.co.uk/wp-content/uploads/2019/09/anthony-108x108.jpg",
              "entity": "sokada.co.uk",
              "networkRequestTime": 905.2110000103712,
              "networkEndTime": 1110.5430000051856,
              "priority": "Low",
              "finished": true,
              "rendererStartTime": 904.8119999989867,
              "sessionTargetType": "page",
              "resourceType": "Image",
              "mimeType": "image/jpeg",
              "transferSize": 2924,
              "resourceSize": 2657,
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "protocol": "h2"
            },
            {
              "rendererStartTime": 905.0800000056624,
              "resourceSize": 3518,
              "statusCode": 200,
              "networkEndTime": 954.0509999990463,
              "sessionTargetType": "page",
              "transferSize": 3783,
              "experimentalFromMainFrame": true,
              "protocol": "h2",
              "finished": true,
              "mimeType": "image/webp",
              "resourceType": "Image",
              "networkRequestTime": 905.5710000023246,
              "entity": "sokada.co.uk",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/mark-hassall1-400x400-1-108x108.webp",
              "priority": "Low"
            },
            {
              "mimeType": "image/webp",
              "priority": "Low",
              "networkRequestTime": 905.858000010252,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/Fiona-Blaxland-108x108.webp",
              "entity": "sokada.co.uk",
              "experimentalFromMainFrame": true,
              "transferSize": 2531,
              "statusCode": 200,
              "protocol": "h2",
              "networkEndTime": 954.4120000079274,
              "finished": true,
              "resourceType": "Image",
              "resourceSize": 2266,
              "sessionTargetType": "page",
              "rendererStartTime": 905.3250000029802
            },
            {
              "protocol": "h2",
              "transferSize": 2564,
              "experimentalFromMainFrame": true,
              "mimeType": "image/jpeg",
              "priority": "Low",
              "resourceSize": 2297,
              "resourceType": "Image",
              "rendererStartTime": 905.5760000050068,
              "finished": true,
              "entity": "sokada.co.uk",
              "sessionTargetType": "page",
              "networkEndTime": 1082.9080000072718,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2019/07/tony-1-400x400-108x108.jpg",
              "statusCode": 200,
              "networkRequestTime": 906.096000008285
            },
            {
              "networkEndTime": 954.929999999702,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/TQQ0HN142-UR2A30C3E-71de2f11cd28-100-108x108.webp",
              "rendererStartTime": 905.8240000009537,
              "protocol": "h2",
              "resourceSize": 2116,
              "mimeType": "image/webp",
              "entity": "sokada.co.uk",
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "resourceType": "Image",
              "finished": true,
              "networkRequestTime": 906.3680000081658,
              "sessionTargetType": "page",
              "transferSize": 2381,
              "priority": "Low"
            },
            {
              "resourceType": "Image",
              "resourceSize": 3184,
              "transferSize": 3451,
              "rendererStartTime": 906.1110000088811,
              "networkEndTime": 955.1840000078082,
              "finished": true,
              "mimeType": "image/jpeg",
              "protocol": "h2",
              "sessionTargetType": "page",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2019/07/charlotte-sterling-reed-1-108x108.jpg",
              "networkRequestTime": 906.6140000075102,
              "priority": "Low",
              "experimentalFromMainFrame": true,
              "entity": "sokada.co.uk",
              "statusCode": 200
            },
            {
              "resourceSize": 3198,
              "experimentalFromMainFrame": true,
              "networkRequestTime": 906.9040000066161,
              "transferSize": 3463,
              "networkEndTime": 955.7710000053048,
              "statusCode": 200,
              "sessionTargetType": "page",
              "entity": "sokada.co.uk",
              "resourceType": "Image",
              "priority": "Low",
              "finished": true,
              "mimeType": "image/webp",
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/phil2-108x108.webp",
              "protocol": "h2",
              "rendererStartTime": 906.3680000081658
            },
            {
              "statusCode": 200,
              "priority": "Low",
              "transferSize": 1569,
              "resourceType": "Image",
              "experimentalFromMainFrame": true,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/oliver-blunden-108x108.webp",
              "resourceSize": 1304,
              "networkEndTime": 956.1860000044107,
              "protocol": "h2",
              "finished": true,
              "networkRequestTime": 907.2740000039339,
              "entity": "sokada.co.uk",
              "sessionTargetType": "page",
              "mimeType": "image/webp",
              "rendererStartTime": 906.6660000011325
            },
            {
              "resourceSize": 2200,
              "sessionTargetType": "page",
              "finished": true,
              "mimeType": "image/webp",
              "networkEndTime": 955.9930000081658,
              "protocol": "h2",
              "priority": "Low",
              "transferSize": 2465,
              "resourceType": "Image",
              "entity": "sokada.co.uk",
              "rendererStartTime": 906.9870000034571,
              "experimentalFromMainFrame": true,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/04/greenfg-108x108.webp",
              "statusCode": 200,
              "networkRequestTime": 907.5230000019073
            },
            {
              "sessionTargetType": "page",
              "finished": true,
              "experimentalFromMainFrame": true,
              "mimeType": "image/png",
              "priority": "Low",
              "protocol": "h2",
              "networkRequestTime": 917.054000005126,
              "statusCode": 200,
              "resourceType": "Image",
              "entity": "sokada.co.uk",
              "rendererStartTime": 916.2380000054836,
              "networkEndTime": 964.6200000047684,
              "resourceSize": 1061,
              "url": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/img/controls.png",
              "transferSize": 1327
            },
            {
              "resourceType": "Document",
              "networkRequestTime": 1045.3780000060797,
              "priority": "VeryHigh",
              "entity": "Other Google APIs/SDKs",
              "transferSize": 29436,
              "mimeType": "text/html",
              "protocol": "h2",
              "statusCode": 200,
              "resourceSize": 47541,
              "url": "https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc3POImAAAAAIrauIvQZlqgRFqOHn2Wdcr2Ge4v&co=aHR0cHM6Ly93d3cuc29rYWRhLmNvLnVrOjQ0Mw..&hl=en&v=QquE1_MNjnFHgZF4HPsEcf_2&size=invisible&cb=oieutss3cx5o",
              "rendererStartTime": 1040.4360000044107,
              "finished": true,
              "networkEndTime": 1075.9300000071526,
              "sessionTargetType": "page"
            },
            {
              "finished": true,
              "sessionTargetType": "page",
              "entity": "Google Tag Manager",
              "networkRequestTime": 1066.4930000081658,
              "priority": "Low",
              "mimeType": "application/javascript",
              "resourceSize": 273038,
              "statusCode": 200,
              "rendererStartTime": 1065.3830000013113,
              "experimentalFromMainFrame": true,
              "protocol": "h2",
              "transferSize": 93493,
              "networkEndTime": 1084.2150000035763,
              "url": "https://www.googletagmanager.com/gtag/js?id=G-9FMCYDPHN1&l=dataLayer&cx=c",
              "resourceType": "Script"
            },
            {
              "transferSize": 25412,
              "networkEndTime": 1130.9450000077486,
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/styles__ltr.css",
              "networkRequestTime": 1119.5770000070333,
              "resourceSize": 56398,
              "statusCode": 200,
              "protocol": "h2",
              "resourceType": "Stylesheet",
              "mimeType": "text/css",
              "finished": true,
              "entity": "Google CDN",
              "priority": "VeryHigh",
              "sessionTargetType": "page",
              "rendererStartTime": 1117.8229999989271
            },
            {
              "resourceType": "Script",
              "networkRequestTime": 1121.944000005722,
              "protocol": "h2",
              "rendererStartTime": 1118.3250000029802,
              "priority": "High",
              "entity": "Google CDN",
              "networkEndTime": 1133.4910000041127,
              "mimeType": "text/javascript",
              "sessionTargetType": "page",
              "finished": true,
              "transferSize": 199905,
              "resourceSize": 501537,
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "statusCode": 200
            },
            {
              "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-9FMCYDPHN1&gtm=45je43b0v881393318z8862092493za200&_p=1710427801692&gcd=13l3l3l3l1&npa=0&dma=0&cid=75728032.1710427802&ul=en-us&sr=412x823&uaa=&uab=64&uafvl=Chromium%3B122.0.6261.94%7CNot(A%253ABrand%3B24.0.0.0%7CHeadlessChrome%3B122.0.6261.94&uamb=1&uam=moto%20g%20power%20(2022)&uap=Android&uapv=11.0&uaw=0&pscdl=noapi&_s=1&sid=1710427802&sct=1&seg=0&dl=https%3A%2F%2Fwww.sokada.co.uk%2F&dt=Web%20Design%20Sussex%20%7C%20Web%20Design%20Development%20%26%20Marketing&en=page_view&_fv=1&_nsi=1&_ss=1&tfd=1230",
              "priority": "VeryLow",
              "sessionTargetType": "page",
              "transferSize": 0,
              "rendererStartTime": 1230.3840000033379,
              "networkRequestTime": 1230.3840000033379,
              "experimentalFromMainFrame": true,
              "finished": true,
              "resourceSize": 0,
              "networkEndTime": 1277.0170000046492,
              "statusCode": -1,
              "resourceType": "Ping",
              "entity": "Google Analytics"
            },
            {
              "statusCode": 200,
              "priority": "Low",
              "protocol": "h2",
              "mimeType": "text/javascript",
              "networkEndTime": 1303.5060000047088,
              "finished": true,
              "url": "https://www.google.com/js/bg/v77SiQbcxtK1O5ek11TdloiB5zZ00UAxE3PsP-319e4.js",
              "resourceSize": 17875,
              "transferSize": 8149,
              "entity": "Other Google APIs/SDKs",
              "sessionTargetType": "page",
              "rendererStartTime": 1298.2540000006557,
              "resourceType": "Script",
              "networkRequestTime": 1299.0980000048876
            },
            {
              "mimeType": "image/png",
              "statusCode": 200,
              "protocol": "h2",
              "networkRequestTime": 1314.6930000036955,
              "networkEndTime": 1318.5520000085235,
              "entity": "Google CDN",
              "finished": true,
              "sessionTargetType": "page",
              "rendererStartTime": 1313.9940000027418,
              "resourceSize": 2228,
              "resourceType": "Image",
              "transferSize": 2985,
              "url": "https://www.gstatic.com/recaptcha/api2/logo_48.png",
              "priority": "Low"
            },
            {
              "sessionTargetType": "page",
              "resourceType": "Font",
              "entity": "Google Fonts",
              "rendererStartTime": 1315.566000007093,
              "finished": true,
              "resourceSize": 10748,
              "priority": "VeryHigh",
              "protocol": "h2",
              "networkEndTime": 1319.1840000003576,
              "url": "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
              "networkRequestTime": 1316.0920000001788,
              "transferSize": 11559,
              "statusCode": 200,
              "mimeType": "font/woff2"
            },
            {
              "networkRequestTime": 1317.2330000028014,
              "mimeType": "font/woff2",
              "transferSize": 11599,
              "sessionTargetType": "page",
              "priority": "VeryHigh",
              "entity": "Google Fonts",
              "protocol": "h2",
              "url": "https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2",
              "finished": true,
              "networkEndTime": 1321.2930000051856,
              "resourceSize": 10788,
              "resourceType": "Font",
              "rendererStartTime": 1316.682000003755,
              "statusCode": 200
            },
            {
              "finished": true,
              "protocol": "h2",
              "resourceSize": 102,
              "rendererStartTime": 1331.6970000043511,
              "sessionTargetType": "page",
              "resourceType": "Other",
              "priority": "High",
              "networkRequestTime": 1333.121000006795,
              "statusCode": 200,
              "mimeType": "text/javascript",
              "transferSize": 695,
              "url": "https://www.google.com/recaptcha/api2/webworker.js?hl=en&v=QquE1_MNjnFHgZF4HPsEcf_2",
              "entity": "Other Google APIs/SDKs",
              "networkEndTime": 1342.2220000103116
            },
            {
              "mimeType": "text/javascript",
              "resourceType": "Other",
              "sessionTargetType": "worker",
              "resourceSize": 501537,
              "rendererStartTime": 1394.929000005126,
              "networkRequestTime": 1395.957000002265,
              "statusCode": 200,
              "entity": "Google CDN",
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "protocol": "h2",
              "priority": "VeryHigh",
              "networkEndTime": 1408.956000007689,
              "transferSize": 199905,
              "finished": true
            },
            {
              "resourceType": "Image",
              "protocol": "h2",
              "rendererStartTime": 1440.067000001669,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp",
              "sessionTargetType": "page",
              "statusCode": 200,
              "networkEndTime": 1488.2440000027418,
              "resourceSize": 1932,
              "networkRequestTime": 1440.9120000079274,
              "transferSize": 2197,
              "priority": "Low",
              "experimentalFromMainFrame": true,
              "finished": true,
              "entity": "sokada.co.uk",
              "mimeType": "image/webp"
            }
          ],
          "debugData": {
            "type": "debugdata",
            "networkStartTimeTs": 56423940842.99999
          }
        }
      },
      "bypass": {
        "id": "bypass",
        "title": "The page contains a heading, skip link, or landmark region",
        "description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more about bypass blocks](https://dequeuniversity.com/rules/axe/4.8/bypass).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "accesskeys": {
        "id": "accesskeys",
        "title": "`[accesskey]` values are unique",
        "description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more about access keys](https://dequeuniversity.com/rules/axe/4.8/accesskeys).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "max-potential-fid": {
        "id": "max-potential-fid",
        "title": "Max Potential First Input Delay",
        "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).",
        "score": 0.22,
        "scoreDisplayMode": "numeric",
        "displayValue": "370 ms",
        "details": {
          "observedMaxBlockingLoaf": {
            "args": {
              "data": {
                "duration": 91.528,
                "numScripts": 1,
                "blockingDuration": 41.528
              }
            },
            "id2": {
              "local": "0x3cab00174d30"
            },
            "cat": "devtools.timeline",
            "name": "LongAnimationFrame",
            "pid": 41,
            "ph": "b",
            "ts": 56425089952,
            "tid": 41,
            "scope": "devtools.timeline"
          },
          "observedMaxDurationLoaf": {
            "scope": "devtools.timeline",
            "ts": 56424920571,
            "tid": 41,
            "name": "LongAnimationFrame",
            "pid": 41,
            "ph": "b",
            "cat": "devtools.timeline",
            "id2": {
              "local": "0x3cab00174d30"
            },
            "args": {
              "data": {
                "duration": 111.594,
                "styleAndLayoutDuration": 15.463,
                "renderDuration": 15.499,
                "numScripts": 2,
                "blockingDuration": 32.182
              }
            }
          },
          "type": "debugdata",
          "observedLoafs": [
            {
              "duration": 469.346,
              "startTime": 370.315,
              "blockingDuration": 9.427
            },
            {
              "blockingDuration": 14.215,
              "startTime": 851.261,
              "duration": 70.488
            },
            {
              "blockingDuration": 0,
              "startTime": 922.073,
              "duration": 57.68
            },
            {
              "blockingDuration": 32.182,
              "startTime": 979.83,
              "duration": 111.594
            },
            {
              "blockingDuration": 41.528,
              "duration": 91.528,
              "startTime": 1149.211
            },
            {
              "startTime": 1384.464,
              "duration": 52.427,
              "blockingDuration": 2.427
            }
          ]
        },
        "numericValue": 367,
        "numericUnit": "millisecond"
      },
      "network-server-latency": {
        "id": "network-server-latency",
        "title": "Server Backend Latencies",
        "description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more about server response time](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "210 ms",
        "details": {
          "headings": [
            {
              "key": "origin",
              "label": "URL",
              "valueType": "text"
            },
            {
              "label": "Time Spent",
              "granularity": 1,
              "valueType": "ms",
              "key": "serverResponseTime"
            }
          ],
          "items": [
            {
              "origin": "https://use.fontawesome.com",
              "serverResponseTime": 207
            },
            {
              "serverResponseTime": 45,
              "origin": "https://www.sokada.co.uk"
            },
            {
              "origin": "https://www.googletagmanager.com",
              "serverResponseTime": 10
            },
            {
              "origin": "https://www.google.com",
              "serverResponseTime": 5
            },
            {
              "origin": "https://www.gstatic.com",
              "serverResponseTime": 1
            },
            {
              "origin": "https://fonts.gstatic.com",
              "serverResponseTime": 1
            }
          ],
          "type": "table",
          "sortedBy": [
            "serverResponseTime"
          ]
        },
        "numericValue": 207,
        "numericUnit": "millisecond"
      },
      "interactive": {
        "id": "interactive",
        "title": "Time to Interactive",
        "description": "Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).",
        "score": 0.28,
        "scoreDisplayMode": "numeric",
        "displayValue": "9.7 s",
        "numericValue": 9695,
        "numericUnit": "millisecond"
      },
      "html-xml-lang-mismatch": {
        "id": "html-xml-lang-mismatch",
        "title": "`<html>` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.",
        "description": "If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.8/html-xml-lang-mismatch).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "offscreen-content-hidden": {
        "id": "offscreen-content-hidden",
        "title": "Offscreen content is hidden from assistive technology",
        "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "font-display": {
        "id": "font-display",
        "title": "Ensure text remains visible during webfont load",
        "description": "Leverage the `font-display` CSS feature to ensure text is user-visible while webfonts are loading. [Learn more about `font-display`](https://developer.chrome.com/docs/lighthouse/performance/font-display/).",
        "score": 0.5,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "headings": [
            {
              "key": "url",
              "label": "URL",
              "valueType": "url"
            },
            {
              "key": "wastedMs",
              "valueType": "ms",
              "label": "Potential Savings"
            }
          ],
          "type": "table",
          "items": [
            {
              "url": "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
              "wastedMs": 3.092000000178814
            },
            {
              "wastedMs": 4.060000002384186,
              "url": "https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2"
            }
          ]
        },
        "warnings": []
      },
      "target-size": {
        "id": "target-size",
        "title": "Touch targets have sufficient size and spacing.",
        "description": "Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.8/target-size).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "table-fake-caption": {
        "id": "table-fake-caption",
        "title": "Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption.",
        "description": "Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.8/table-fake-caption).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "aria-meter-name": {
        "id": "aria-meter-name",
        "title": "ARIA `meter` elements have accessible names",
        "description": "When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.8/aria-meter-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "link-name": {
        "id": "link-name",
        "title": "Links have a discernible name",
        "description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.8/link-name).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "type": "table",
          "items": []
        }
      },
      "uses-responsive-images": {
        "id": "uses-responsive-images",
        "title": "Properly size images",
        "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn how to size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "overallSavingsMs": 0,
          "headings": [],
          "debugData": {
            "type": "debugdata",
            "metricSavings": {
              "FCP": 0,
              "LCP": 0
            }
          },
          "overallSavingsBytes": 0,
          "sortedBy": [
            "wastedBytes"
          ],
          "type": "opportunity",
          "items": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "pwa-page-transitions": {
        "id": "pwa-page-transitions",
        "title": "Page transitions don't feel like they block on the network",
        "description": "Transitions should feel snappy as you tap around, even on a slow network. This experience is key to a user's perception of performance. [Learn more about page transitions](https://developer.chrome.com/docs/lighthouse/pwa/pwa-page-transitions/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "render-blocking-resources": {
        "id": "render-blocking-resources",
        "title": "Eliminate render-blocking resources",
        "description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Potential savings of 180 ms",
        "details": {
          "overallSavingsMs": 180,
          "items": [
            {
              "totalBytes": 43509,
              "url": "https://www.sokada.co.uk/wp-content/litespeed/css/e741214b412fe74cff89ed0df5260bfa.css?ver=853d4",
              "wastedMs": 386
            },
            {
              "wastedMs": 386,
              "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js",
              "totalBytes": 30068
            },
            {
              "totalBytes": 38511,
              "wastedMs": 386,
              "url": "https://www.sokada.co.uk/wp-content/plugins/fancybox-for-wordpress/assets/js/jquery.fancybox.js"
            }
          ],
          "type": "opportunity",
          "headings": [
            {
              "key": "url",
              "valueType": "url",
              "label": "URL"
            },
            {
              "valueType": "bytes",
              "key": "totalBytes",
              "label": "Transfer Size"
            },
            {
              "valueType": "timespanMs",
              "key": "wastedMs",
              "label": "Potential Savings"
            }
          ]
        },
        "numericValue": 180,
        "numericUnit": "millisecond"
      },
      "button-name": {
        "id": "button-name",
        "title": "Buttons have an accessible name",
        "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.8/button-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "table-duplicate-name": {
        "id": "table-duplicate-name",
        "title": "Tables have different content in the summary attribute and `<caption>`.",
        "description": "The summary attribute should describe the table structure, while `<caption>` should have the onscreen title. Accurate table mark-up helps users of screen readers. [Learn more about summary and caption](https://dequeuniversity.com/rules/axe/4.8/table-duplicate-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "speed-index": {
        "id": "speed-index",
        "title": "Speed Index",
        "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
        "score": 0.64,
        "scoreDisplayMode": "numeric",
        "displayValue": "5.0 s",
        "numericValue": 4972.876452776851,
        "numericUnit": "millisecond"
      },
      "identical-links-same-purpose": {
        "id": "identical-links-same-purpose",
        "title": "Identical links have the same purpose.",
        "description": "Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.8/identical-links-same-purpose).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "debugData": {
            "impact": "minor",
            "type": "debugdata",
            "tags": [
              "cat.semantics",
              "wcag2aaa",
              "wcag249"
            ]
          },
          "type": "table",
          "items": [
            {
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "relatedNode": {
                      "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV,0,DIV,1,DIV,2,DIV,1,P,0,A",
                      "type": "node",
                      "selector": "div.footer-main > div.grid-3 > p > a",
                      "boundingRect": {
                        "width": 298,
                        "top": 4924,
                        "right": 355,
                        "left": 57,
                        "bottom": 4953,
                        "height": 29
                      },
                      "snippet": "<a href=\"tel:01435 817 226\">",
                      "nodeLabel": "01435 817 226",
                      "lhId": "1-13-A"
                    }
                  }
                ]
              },
              "node": {
                "nodeLabel": "01435 817 226",
                "lhId": "1-21-A",
                "selector": "div.wrapper > div.hero-content > p > a",
                "explanation": "Fix all of the following:\n  Check that links have the same purpose, or are intentionally ambiguous.",
                "boundingRect": {
                  "width": 298,
                  "right": 355,
                  "top": 408,
                  "left": 57,
                  "height": 30,
                  "bottom": 438
                },
                "path": "1,HTML,1,BODY,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,P,1,A",
                "snippet": "<a href=\"tel:01435817226\">",
                "type": "node"
              }
            }
          ],
          "headings": [
            {
              "subItemsHeading": {
                "valueType": "node",
                "key": "relatedNode"
              },
              "label": "Failing Elements",
              "valueType": "node",
              "key": "node"
            }
          ]
        }
      },
      "charset": {
        "id": "charset",
        "title": "Properly defines charset",
        "description": "A character encoding declaration is required. It can be done with a `<meta>` tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more about declaring the character encoding](https://developer.chrome.com/docs/lighthouse/best-practices/charset/).",
        "score": 1,
        "scoreDisplayMode": "binary"
      },
      "is-on-https": {
        "id": "is-on-https",
        "title": "Uses HTTPS",
        "description": "All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more about HTTPS](https://developer.chrome.com/docs/lighthouse/pwa/is-on-https/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "type": "table",
          "items": []
        }
      },
      "viewport": {
        "id": "viewport",
        "title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
        "description": "A `<meta name=\"viewport\">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/). [Learn more about using the viewport meta tag](https://developer.chrome.com/docs/lighthouse/pwa/viewport/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "viewportContent": "width=device-width, initial-scale=1",
          "type": "debugdata"
        },
        "warnings": []
      },
      "first-contentful-paint": {
        "id": "first-contentful-paint",
        "title": "First Contentful Paint",
        "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
        "score": 0.8,
        "scoreDisplayMode": "numeric",
        "displayValue": "2.1 s",
        "numericValue": 2131,
        "numericUnit": "millisecond"
      },
      "diagnostics": {
        "id": "diagnostics",
        "title": "Diagnostics",
        "description": "Collection of useful page vitals.",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "type": "debugdata",
          "items": [
            {
              "numTasksOver100ms": 1,
              "maxServerLatency": 207,
              "numScripts": 13,
              "mainDocumentTransferSize": 12358,
              "numRequests": 57,
              "numFonts": 9,
              "numTasksOver50ms": 5,
              "numTasksOver10ms": 24,
              "maxRtt": 43,
              "totalTaskTime": 929.0869999999999,
              "numTasksOver500ms": 0,
              "numStylesheets": 2,
              "throughput": 5581753348.99206,
              "numTasks": 464,
              "rtt": 0,
              "totalByteWeight": 2732966,
              "numTasksOver25ms": 11
            }
          ]
        }
      },
      "pwa-each-page-has-url": {
        "id": "pwa-each-page-has-url",
        "title": "Each page has a URL",
        "description": "Ensure individual pages are deep linkable via URL and that URLs are unique for the purpose of shareability on social media. [Learn more about providing deep links](https://developer.chrome.com/docs/lighthouse/pwa/pwa-each-page-has-url/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "unsized-images": {
        "id": "unsized-images",
        "title": "Image elements do not have explicit `width` and `height`",
        "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
        "score": 0.5,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "items": [
            {
              "node": {
                "boundingRect": {
                  "top": 30,
                  "height": 47,
                  "left": 20,
                  "right": 190,
                  "bottom": 77,
                  "width": 170
                },
                "lhId": "1-79-IMG",
                "type": "node",
                "path": "1,HTML,1,BODY,1,DIV,0,HEADER,0,DIV,0,DIV,0,A,0,IMG",
                "snippet": "<img data-lazyloaded=\"1\" src=\"https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp\" alt=\"Web Design Sussex by Sokada\" data-src=\"https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp\" data-ll-status=\"loaded\" class=\"entered litespeed-loaded\">",
                "nodeLabel": "Web Design Sussex by Sokada",
                "selector": "div.wrapper > div.site-branding > a > img.entered"
              },
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp"
            },
            {
              "url": "data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=",
              "node": {
                "selector": "div.footer-main > div.grid-3 > div.footer-logo > img",
                "snippet": "<img data-lazyloaded=\"1\" src=\"data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=\" alt=\"Web Design Heathfield\" data-src=\"https://www.sokada.co.uk/wp-content/uploads/2022/06/sokada-footer.webp\">",
                "nodeLabel": "Web Design Heathfield",
                "type": "node",
                "lhId": "1-90-IMG",
                "boundingRect": {
                  "right": 207,
                  "top": 4506,
                  "left": 206,
                  "height": 1,
                  "width": 1,
                  "bottom": 4507
                },
                "path": "1,HTML,1,BODY,1,DIV,2,FOOTER,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,IMG"
              }
            }
          ],
          "type": "table",
          "headings": [
            {
              "valueType": "node",
              "key": "node"
            },
            {
              "label": "URL",
              "key": "url",
              "valueType": "url"
            }
          ]
        }
      },
      "metrics": {
        "id": "metrics",
        "title": "Metrics",
        "description": "Collects all available metrics.",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "type": "debugdata",
          "items": [
            {
              "timeToFirstByte": 645,
              "observedDomContentLoadedTs": 56424782678,
              "observedLargestContentfulPaintAllFrames": 942,
              "observedLargestContentfulPaintTs": 56424882745,
              "observedLastVisualChange": 1502,
              "observedFirstPaintTs": 56424796042,
              "observedCumulativeLayoutShiftMainFrame": 0.03210957437836888,
              "observedFirstContentfulPaintAllFrames": 855,
              "observedFirstMeaningfulPaintTs": 56424796042,
              "observedCumulativeLayoutShift": 0.03210957437836888,
              "observedTraceEndTs": 56427651150,
              "observedFirstContentfulPaintTs": 56424796042,
              "observedLastVisualChangeTs": 56425442741,
              "observedLargestContentfulPaintAllFramesTs": 56424882745,
              "speedIndex": 4973,
              "lcpLoadStart": 2346,
              "observedLoad": 1381,
              "observedNavigationStart": 0,
              "observedSpeedIndexTs": 56424892247,
              "observedDomContentLoaded": 842,
              "firstMeaningfulPaint": 2188,
              "observedFirstVisualChangeTs": 56424792741,
              "observedTimeOriginTs": 56423940741,
              "cumulativeLayoutShiftMainFrame": 0.03210957437836888,
              "totalBlockingTime": 958,
              "interactive": 9695,
              "maxPotentialFID": 367,
              "firstContentfulPaint": 2131,
              "largestContentfulPaint": 2758,
              "observedFirstVisualChange": 852,
              "observedSpeedIndex": 952,
              "cumulativeLayoutShift": 0.03210957437836888,
              "observedLoadTs": 56425321708,
              "observedNavigationStartTs": 56423940741,
              "observedLargestContentfulPaint": 942,
              "observedTraceEnd": 3710,
              "observedFirstPaint": 855,
              "observedFirstContentfulPaint": 855,
              "lcpLoadEnd": 2610,
              "observedFirstMeaningfulPaint": 855,
              "observedFirstContentfulPaintAllFramesTs": 56424796042,
              "observedTimeOrigin": 0
            },
            {
              "lcpInvalidated": false
            }
          ]
        },
        "numericValue": 9695,
        "numericUnit": "millisecond"
      },
      "aria-toggle-field-name": {
        "id": "aria-toggle-field-name",
        "title": "ARIA toggle fields have accessible names",
        "description": "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.8/aria-toggle-field-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "first-meaningful-paint": {
        "id": "first-meaningful-paint",
        "title": "First Meaningful Paint",
        "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more about the First Meaningful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/).",
        "score": 0.92,
        "scoreDisplayMode": "numeric",
        "displayValue": "2.2 s",
        "numericValue": 2188,
        "numericUnit": "millisecond"
      },
      "meta-refresh": {
        "id": "meta-refresh",
        "title": "The document does not use `<meta http-equiv=\"refresh\">`",
        "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.8/meta-refresh).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "skip-link": {
        "id": "skip-link",
        "title": "Skip links are focusable.",
        "description": "Including a skip link can help users skip to the main content to save time. [Learn more about skip links](https://dequeuniversity.com/rules/axe/4.8/skip-link).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "total-byte-weight": {
        "id": "total-byte-weight",
        "title": "Avoid enormous network payloads",
        "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).",
        "score": 0.5,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Total size was 2,669 KiB",
        "details": {
          "items": [
            {
              "totalBytes": 639433,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/09/323558741_523201649784661_386326318532048502_n.jpg"
            },
            {
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/09/melina-joy-slice.png",
              "totalBytes": 532104
            },
            {
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "totalBytes": 199905
            },
            {
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "totalBytes": 199905
            },
            {
              "url": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "totalBytes": 199904
            },
            {
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/12/pexels-naveen-annam-15816931.jpg",
              "totalBytes": 182876
            },
            {
              "url": "https://www.googletagmanager.com/gtag/js?id=G-9FMCYDPHN1&l=dataLayer&cx=c",
              "totalBytes": 93493
            },
            {
              "totalBytes": 75514,
              "url": "https://use.fontawesome.com/releases/v5.8.1/webfonts/fa-brands-400.woff2"
            },
            {
              "url": "https://www.googletagmanager.com/gtm.js?id=GTM-NRS77MV",
              "totalBytes": 67980
            },
            {
              "url": "https://www.sokada.co.uk/wp-content/litespeed/css/e741214b412fe74cff89ed0df5260bfa.css?ver=853d4",
              "totalBytes": 43509
            }
          ],
          "sortedBy": [
            "totalBytes"
          ],
          "type": "table",
          "headings": [
            {
              "key": "url",
              "valueType": "url",
              "label": "URL"
            },
            {
              "valueType": "bytes",
              "key": "totalBytes",
              "label": "Transfer Size"
            }
          ]
        },
        "numericValue": 2732966,
        "numericUnit": "byte"
      },
      "script-treemap-data": {
        "id": "script-treemap-data",
        "title": "Script Treemap Data",
        "description": "Used for treemap app",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "nodes": [
            {
              "resourceBytes": 87553,
              "unusedBytes": 39517,
              "name": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js"
            },
            {
              "resourceBytes": 13577,
              "name": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery-migrate.min.js",
              "unusedBytes": 5520
            },
            {
              "resourceBytes": 162138,
              "unusedBytes": 122396,
              "name": "https://www.sokada.co.uk/wp-content/plugins/fancybox-for-wordpress/assets/js/jquery.fancybox.js"
            },
            {
              "name": "https://www.sokada.co.uk/",
              "unusedBytes": 4798,
              "children": [
                {
                  "name": "(inline) jQuery(function…",
                  "resourceBytes": 3716,
                  "unusedBytes": 1893
                },
                {
                  "name": "(inline) (function(w,d,s…",
                  "resourceBytes": 341,
                  "unusedBytes": 0
                },
                {
                  "unusedBytes": 0,
                  "resourceBytes": 68,
                  "name": "(inline) var sbiajaxurl …"
                },
                {
                  "unusedBytes": 0,
                  "resourceBytes": 197,
                  "name": "(inline) /*  */\nvar gfor…"
                },
                {
                  "resourceBytes": 8319,
                  "unusedBytes": 2905,
                  "name": "(inline) !function(t,e){…"
                }
              ],
              "resourceBytes": 12641
            },
            {
              "resourceBytes": 48086,
              "unusedBytes": 18243,
              "name": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/lightslider.js"
            },
            {
              "name": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/bigSlide.min.js",
              "resourceBytes": 5474,
              "unusedBytes": 2857
            },
            {
              "unusedBytes": 726,
              "resourceBytes": 1344,
              "name": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/nav-mobile.js"
            },
            {
              "name": "https://www.sokada.co.uk/wp-content/themes/sokada-brochure-2019/js/drilldown-navigation.js",
              "unusedBytes": 132,
              "resourceBytes": 1096
            },
            {
              "unusedBytes": 49,
              "name": "https://www.google.com/recaptcha/api.js?render=6Lc3POImAAAAAIrauIvQZlqgRFqOHn2Wdcr2Ge4v&ver=1.1",
              "resourceBytes": 1256
            },
            {
              "resourceBytes": 188119,
              "name": "https://www.googletagmanager.com/gtm.js?id=GTM-NRS77MV",
              "unusedBytes": 90080
            },
            {
              "name": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "resourceBytes": 501537,
              "unusedBytes": 283910
            },
            {
              "children": [
                {
                  "name": "(inline) window['__recap…",
                  "resourceBytes": 69,
                  "unusedBytes": 0
                },
                {
                  "unusedBytes": 0,
                  "resourceBytes": 36874,
                  "name": "(inline) recaptcha.ancho…"
                }
              ],
              "resourceBytes": 36943,
              "name": "https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc3POImAAAAAIrauIvQZlqgRFqOHn2Wdcr2Ge4v&co=aHR0cHM6Ly93d3cuc29rYWRhLmNvLnVrOjQ0Mw..&hl=en&v=QquE1_MNjnFHgZF4HPsEcf_2&size=invisible&cb=oieutss3cx5o"
            },
            {
              "unusedBytes": 96162,
              "resourceBytes": 273038,
              "name": "https://www.googletagmanager.com/gtag/js?id=G-9FMCYDPHN1&l=dataLayer&cx=c"
            },
            {
              "name": "https://www.gstatic.com/recaptcha/releases/QquE1_MNjnFHgZF4HPsEcf_2/recaptcha__en.js",
              "resourceBytes": 501537,
              "unusedBytes": 275395
            },
            {
              "name": "https://www.google.com/js/bg/v77SiQbcxtK1O5ek11TdloiB5zZ00UAxE3PsP-319e4.js",
              "resourceBytes": 17875,
              "unusedBytes": 23
            }
          ],
          "type": "treemap-data"
        }
      },
      "image-size-responsive": {
        "id": "image-size-responsive",
        "title": "Serves images with low resolution",
        "description": "Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn how to provide responsive images](https://web.dev/articles/serve-responsive-images).",
        "score": 0,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [
            {
              "valueType": "node",
              "key": "node"
            },
            {
              "label": "URL",
              "key": "url",
              "valueType": "url"
            },
            {
              "label": "Displayed size",
              "key": "displayedSize",
              "valueType": "text"
            },
            {
              "key": "actualSize",
              "valueType": "text",
              "label": "Actual size"
            },
            {
              "label": "Expected size",
              "valueType": "text",
              "key": "expectedSize"
            }
          ],
          "items": [
            {
              "displayedSize": "170 x 47",
              "expectedPixels": 18105,
              "node": {
                "nodeLabel": "Web Design Sussex by Sokada",
                "path": "1,HTML,1,BODY,1,DIV,0,HEADER,0,DIV,0,DIV,0,A,0,IMG",
                "snippet": "<img data-lazyloaded=\"1\" src=\"https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp\" alt=\"Web Design Sussex by Sokada\" data-src=\"https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp\" data-ll-status=\"loaded\" class=\"entered litespeed-loaded\">",
                "lhId": "1-79-IMG",
                "boundingRect": {
                  "height": 47,
                  "top": 30,
                  "right": 190,
                  "width": 170,
                  "bottom": 77,
                  "left": 20
                },
                "type": "node",
                "selector": "div.wrapper > div.site-branding > a > img.entered"
              },
              "actualSize": "170 x 47",
              "actualPixels": 7990,
              "url": "https://www.sokada.co.uk/wp-content/uploads/2022/06/logo-white1.webp",
              "expectedSize": "255 x 71"
            }
          ],
          "type": "table"
        }
      },
      "uses-passive-event-listeners": {
        "id": "uses-passive-event-listeners",
        "title": "Does not use passive listeners to improve scrolling performance",
        "description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more about adopting passive event listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/).",
        "score": 0.5,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "headings": [
            {
              "valueType": "source-location",
              "label": "Source",
              "key": "source"
            }
          ],
          "items": [
            {
              "source": {
                "line": 1,
                "urlProvider": "network",
                "column": 38476,
                "type": "source-location",
                "url": "https://www.sokada.co.uk/wp-includes/js/jquery/jquery.min.js"
              }
            }
          ],
          "type": "table"
        }
      },
      "custom-controls-roles": {
        "id": "custom-controls-roles",
        "title": "Custom controls have ARIA roles",
        "description": "Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "efficient-animated-content": {
        "id": "efficient-animated-content",
        "title": "Use video formats for animated content",
        "description": "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more about efficient video formats](https://developer.chrome.com/docs/lighthouse/performance/efficient-animated-content/)",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "headings": [],
          "type": "opportunity",
          "overallSavingsBytes": 0,
          "sortedBy": [
            "wastedBytes"
          ],
          "debugData": {
            "type": "debugdata",
            "metricSavings": {
              "LCP": 0,
              "FCP": 0
            }
          },
          "items": [],
          "overallSavingsMs": 0
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "link-text": {
        "id": "link-text",
        "title": "Links have descriptive text",
        "description": "Descriptive link text helps search engines understand your content. [Learn how to make links more accessible](https://developer.chrome.com/docs/lighthouse/seo/link-text/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "type": "table",
          "items": []
        }
      },
      "content-width": {
        "id": "content-width",
        "title": "Content is sized correctly for the viewport",
        "description": "If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn how to size content for the viewport](https://developer.chrome.com/docs/lighthouse/pwa/content-width/).",
        "score": 1,
        "scoreDisplayMode": "binary"
      },
      "th-has-data-cells": {
        "id": "th-has-data-cells",
        "title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
        "description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.8/th-has-data-cells).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "offscreen-images": {
        "id": "offscreen-images",
        "title": "Defer offscreen images",
        "description": "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
          "sortedBy": [
            "wastedBytes"
          ],
          "headings": [],
          "overallSavingsBytes": 0,
          "items": [],
          "type": "opportunity",
          "overallSavingsMs": 0,
          "debugData": {
            "metricSavings": {
              "LCP": 0,
              "FCP": 0
            },
            "type": "debugdata"
          }
        },
        "warnings": [],
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "label-content-name-mismatch": {
        "id": "label-content-name-mismatch",
        "title": "Elements with visible text labels have matching accessible names.",
        "description": "Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.8/label-content-name-mismatch).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "custom-controls-labels": {
        "id": "custom-controls-labels",
        "title": "Custom controls have associated labels",
        "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/).",
        "score": null,
        "scoreDisplayMode": "manual"
      },
      "timing-budget": {
        "id": "timing-budget",
        "title": "Timing budget",
        "description": "Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more about performance budgets](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "csp-xss": {
        "id": "csp-xss",
        "title": "Ensure CSP is effective against XSS attacks",
        "description": "A strong Content Security Policy (CSP) significantly reduces the risk of cross-site scripting (XSS) attacks. [Learn how to use a CSP to prevent XSS](https://developer.chrome.com/docs/lighthouse/best-practices/csp-xss/)",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
          "items": [
            {
              "severity": "High",
              "description": "No CSP found in enforcement mode"
            }
          ],
          "headings": [
            {
              "label": "Description",
              "key": "description",
              "valueType": "text",
              "subItemsHeading": {
                "key": "description"
              }
            },
            {
              "valueType": "code",
              "label": "Directive",
              "key": "directive",
              "subItemsHeading": {
                "key": "directive"
              }
            },
            {
              "label": "Severity",
              "key": "severity",
              "subItemsHeading": {
                "key": "severity"
              },
              "valueType": "text"
            }
          ],
          "type": "table"
        }
      }
    },
    "categories": {
      "performance": {
        "id": "performance",
        "title": "Performance",
        "score": 0.69,
        "auditRefs": [
          {
            "id": "first-contentful-paint",
            "weight": 10,
            "group": "metrics",
            "acronym": "FCP",
            "relevantAudits": [
              "server-response-time",
              "render-blocking-resources",
              "redirects",
              "critical-request-chains",
              "uses-text-compression",
              "uses-rel-preconnect",
              "uses-rel-preload",
              "font-display",
              "unminified-javascript",
              "unminified-css",
              "unused-css-rules"
            ]
          },
          {
            "id": "largest-contentful-paint",
            "weight": 25,
            "group": "metrics",
            "acronym": "LCP",
            "relevantAudits": [
              "server-response-time",
              "render-blocking-resources",
              "redirects",
              "critical-request-chains",
              "uses-text-compression",
              "uses-rel-preconnect",
              "uses-rel-preload",
              "font-display",
              "unminified-javascript",
              "unminified-css",
              "unused-css-rules",
              "largest-contentful-paint-element",
              "prioritize-lcp-image",
              "unused-javascript",
              "efficient-animated-content",
              "total-byte-weight",
              "lcp-lazy-loaded"
            ]
          },
          {
            "id": "total-blocking-time",
            "weight": 30,
            "group": "metrics",
            "acronym": "TBT",
            "relevantAudits": [
              "long-tasks",
              "third-party-summary",
              "third-party-facades",
              "bootup-time",
              "mainthread-work-breakdown",
              "dom-size",
              "duplicated-javascript",
              "legacy-javascript",
              "viewport"
            ]
          },
          {
            "id": "cumulative-layout-shift",
            "weight": 25,
            "group": "metrics",
            "acronym": "CLS",
            "relevantAudits": [
              "layout-shift-elements",
              "layout-shifts",
              "non-composited-animations",
              "unsized-images"
            ]
          },
          {
            "id": "speed-index",
            "weight": 10,
            "group": "metrics",
            "acronym": "SI"
          },
          {
            "id": "interactive",
            "weight": 0,
            "group": "hidden",
            "acronym": "TTI"
          },
          {
            "id": "max-potential-fid",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "first-meaningful-paint",
            "weight": 0,
            "group": "hidden",
            "acronym": "FMP"
          },
          {
            "id": "render-blocking-resources",
            "weight": 0
          },
          {
            "id": "uses-responsive-images",
            "weight": 0
          },
          {
            "id": "offscreen-images",
            "weight": 0
          },
          {
            "id": "unminified-css",
            "weight": 0
          },
          {
            "id": "unminified-javascript",
            "weight": 0
          },
          {
            "id": "unused-css-rules",
            "weight": 0
          },
          {
            "id": "unused-javascript",
            "weight": 0
          },
          {
            "id": "uses-optimized-images",
            "weight": 0
          },
          {
            "id": "modern-image-formats",
            "weight": 0
          },
          {
            "id": "uses-text-compression",
            "weight": 0
          },
          {
            "id": "uses-rel-preconnect",
            "weight": 0
          },
          {
            "id": "server-response-time",
            "weight": 0
          },
          {
            "id": "redirects",
            "weight": 0
          },
          {
            "id": "uses-rel-preload",
            "weight": 0
          },
          {
            "id": "efficient-animated-content",
            "weight": 0
          },
          {
            "id": "duplicated-javascript",
            "weight": 0
          },
          {
            "id": "legacy-javascript",
            "weight": 0
          },
          {
            "id": "prioritize-lcp-image",
            "weight": 0
          },
          {
            "id": "total-byte-weight",
            "weight": 0
          },
          {
            "id": "uses-long-cache-ttl",
            "weight": 0
          },
          {
            "id": "dom-size",
            "weight": 0
          },
          {
            "id": "critical-request-chains",
            "weight": 0
          },
          {
            "id": "user-timings",
            "weight": 0
          },
          {
            "id": "bootup-time",
            "weight": 0
          },
          {
            "id": "mainthread-work-breakdown",
            "weight": 0
          },
          {
            "id": "font-display",
            "weight": 0
          },
          {
            "id": "third-party-summary",
            "weight": 0
          },
          {
            "id": "third-party-facades",
            "weight": 0
          },
          {
            "id": "largest-contentful-paint-element",
            "weight": 0
          },
          {
            "id": "lcp-lazy-loaded",
            "weight": 0
          },
          {
            "id": "layout-shifts",
            "weight": 0
          },
          {
            "id": "uses-passive-event-listeners",
            "weight": 0
          },
          {
            "id": "no-document-write",
            "weight": 0
          },
          {
            "id": "long-tasks",
            "weight": 0
          },
          {
            "id": "non-composited-animations",
            "weight": 0
          },
          {
            "id": "unsized-images",
            "weight": 0
          },
          {
            "id": "viewport",
            "weight": 0
          },
          {
            "id": "performance-budget",
            "weight": 0,
            "group": "budgets"
          },
          {
            "id": "timing-budget",
            "weight": 0,
            "group": "budgets"
          },
          {
            "id": "network-requests",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "network-rtt",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "network-server-latency",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "main-thread-tasks",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "diagnostics",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "metrics",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "screenshot-thumbnails",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "final-screenshot",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "script-treemap-data",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "resource-summary",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "layout-shift-elements",
            "weight": 0,
            "group": "hidden"
          }
        ]
      },
      "accessibility": {
        "id": "accessibility",
        "title": "Accessibility",
        "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developer.chrome.com/docs/lighthouse/accessibility/). Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so [manual testing](https://web.dev/articles/how-to-review) is also encouraged.",
        "score": 0.93,
        "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://web.dev/articles/how-to-review).",
        "auditRefs": [
          {
            "id": "accesskeys",
            "weight": 0,
            "group": "a11y-navigation"
          },
          {
            "id": "aria-allowed-attr",
            "weight": 10,
            "group": "a11y-aria"
          },
          {
            "id": "aria-allowed-role",
            "weight": 1,
            "group": "a11y-aria"
          },
          {
            "id": "aria-command-name",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-dialog-name",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-hidden-body",
            "weight": 10,
            "group": "a11y-aria"
          },
          {
            "id": "aria-hidden-focus",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-input-field-name",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-meter-name",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-progressbar-name",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-required-attr",
            "weight": 10,
            "group": "a11y-aria"
          },
          {
            "id": "aria-required-children",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-required-parent",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-roles",
            "weight": 7,
            "group": "a11y-aria"
          },
          {
            "id": "aria-text",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-toggle-field-name",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-tooltip-name",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-treeitem-name",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "aria-valid-attr-value",
            "weight": 10,
            "group": "a11y-aria"
          },
          {
            "id": "aria-valid-attr",
            "weight": 10,
            "group": "a11y-aria"
          },
          {
            "id": "button-name",
            "weight": 0,
            "group": "a11y-names-labels"
          },
          {
            "id": "bypass",
            "weight": 0,
            "group": "a11y-navigation"
          },
          {
            "id": "color-contrast",
            "weight": 7,
            "group": "a11y-color-contrast"
          },
          {
            "id": "definition-list",
            "weight": 0,
            "group": "a11y-tables-lists"
          },
          {
            "id": "dlitem",
            "weight": 0,
            "group": "a11y-tables-lists"
          },
          {
            "id": "document-title",
            "weight": 7,
            "group": "a11y-names-labels"
          },
          {
            "id": "duplicate-id-active",
            "weight": 0,
            "group": "a11y-navigation"
          },
          {
            "id": "duplicate-id-aria",
            "weight": 0,
            "group": "a11y-aria"
          },
          {
            "id": "form-field-multiple-labels",
            "weight": 0,
            "group": "a11y-names-labels"
          },
          {
            "id": "frame-title",
            "weight": 7,
            "group": "a11y-names-labels"
          },
          {
            "id": "heading-order",
            "weight": 3,
            "group": "a11y-navigation"
          },
          {
            "id": "html-has-lang",
            "weight": 7,
            "group": "a11y-language"
          },
          {
            "id": "html-lang-valid",
            "weight": 7,
            "group": "a11y-language"
          },
          {
            "id": "html-xml-lang-mismatch",
            "weight": 0,
            "group": "a11y-language"
          },
          {
            "id": "image-alt",
            "weight": 10,
            "group": "a11y-names-labels"
          },
          {
            "id": "image-redundant-alt",
            "weight": 1,
            "group": "a11y-names-labels"
          },
          {
            "id": "input-button-name",
            "weight": 0,
            "group": "a11y-names-labels"
          },
          {
            "id": "input-image-alt",
            "weight": 0,
            "group": "a11y-names-labels"
          },
          {
            "id": "label",
            "weight": 0,
            "group": "a11y-names-labels"
          },
          {
            "id": "link-in-text-block",
            "weight": 0,
            "group": "a11y-color-contrast"
          },
          {
            "id": "link-name",
            "weight": 7,
            "group": "a11y-names-labels"
          },
          {
            "id": "list",
            "weight": 7,
            "group": "a11y-tables-lists"
          },
          {
            "id": "listitem",
            "weight": 7,
            "group": "a11y-tables-lists"
          },
          {
            "id": "meta-refresh",
            "weight": 0,
            "group": "a11y-best-practices"
          },
          {
            "id": "meta-viewport",
            "weight": 10,
            "group": "a11y-best-practices"
          },
          {
            "id": "object-alt",
            "weight": 0,
            "group": "a11y-names-labels"
          },
          {
            "id": "select-name",
            "weight": 0,
            "group": "a11y-names-labels"
          },
          {
            "id": "skip-link",
            "weight": 0,
            "group": "a11y-names-labels"
          },
          {
            "id": "tabindex",
            "weight": 0,
            "group": "a11y-navigation"
          },
          {
            "id": "table-duplicate-name",
            "weight": 0,
            "group": "a11y-tables-lists"
          },
          {
            "id": "td-headers-attr",
            "weight": 0,
            "group": "a11y-tables-lists"
          },
          {
            "id": "th-has-data-cells",
            "weight": 0,
            "group": "a11y-tables-lists"
          },
          {
            "id": "valid-lang",
            "weight": 0,
            "group": "a11y-language"
          },
          {
            "id": "video-caption",
            "weight": 0,
            "group": "a11y-audio-video"
          },
          {
            "id": "focusable-controls",
            "weight": 0
          },
          {
            "id": "interactive-element-affordance",
            "weight": 0
          },
          {
            "id": "logical-tab-order",
            "weight": 0
          },
          {
            "id": "visual-order-follows-dom",
            "weight": 0
          },
          {
            "id": "focus-traps",
            "weight": 0
          },
          {
            "id": "managed-focus",
            "weight": 0
          },
          {
            "id": "use-landmarks",
            "weight": 0
          },
          {
            "id": "offscreen-content-hidden",
            "weight": 0
          },
          {
            "id": "custom-controls-labels",
            "weight": 0
          },
          {
            "id": "custom-controls-roles",
            "weight": 0
          },
          {
            "id": "empty-heading",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "identical-links-same-purpose",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "landmark-one-main",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "target-size",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "label-content-name-mismatch",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "table-fake-caption",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "td-has-header",
            "weight": 0,
            "group": "hidden"
          }
        ]
      },
      "best_practices": {
        "id": "best-practices",
        "title": "Best Practices",
        "score": 0.96,
        "auditRefs": [
          {
            "id": "is-on-https",
            "weight": 5,
            "group": "best-practices-trust-safety"
          },
          {
            "id": "geolocation-on-start",
            "weight": 1,
            "group": "best-practices-trust-safety"
          },
          {
            "id": "notification-on-start",
            "weight": 1,
            "group": "best-practices-trust-safety"
          },
          {
            "id": "csp-xss",
            "weight": 0,
            "group": "best-practices-trust-safety"
          },
          {
            "id": "paste-preventing-inputs",
            "weight": 3,
            "group": "best-practices-ux"
          },
          {
            "id": "image-aspect-ratio",
            "weight": 1,
            "group": "best-practices-ux"
          },
          {
            "id": "image-size-responsive",
            "weight": 1,
            "group": "best-practices-ux"
          },
          {
            "id": "preload-fonts",
            "weight": 0,
            "group": "best-practices-ux"
          },
          {
            "id": "doctype",
            "weight": 1,
            "group": "best-practices-browser-compat"
          },
          {
            "id": "charset",
            "weight": 1,
            "group": "best-practices-browser-compat"
          },
          {
            "id": "no-unload-listeners",
            "weight": 1,
            "group": "best-practices-general"
          },
          {
            "id": "js-libraries",
            "weight": 0,
            "group": "best-practices-general"
          },
          {
            "id": "deprecations",
            "weight": 5,
            "group": "best-practices-general"
          },
          {
            "id": "third-party-cookies",
            "weight": 5,
            "group": "best-practices-general"
          },
          {
            "id": "errors-in-console",
            "weight": 1,
            "group": "best-practices-general"
          },
          {
            "id": "valid-source-maps",
            "weight": 0,
            "group": "best-practices-general"
          },
          {
            "id": "inspector-issues",
            "weight": 1,
            "group": "best-practices-general"
          }
        ]
      },
      "seo": {
        "id": "seo",
        "title": "SEO",
        "description": "These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on [Core Web Vitals](https://web.dev/explore/vitals). [Learn more about Google Search Essentials](https://support.google.com/webmasters/answer/35769).",
        "score": 0.91,
        "manualDescription": "Run these additional validators on your site to check additional SEO best practices.",
        "auditRefs": [
          {
            "id": "viewport",
            "weight": 1,
            "group": "seo-mobile"
          },
          {
            "id": "document-title",
            "weight": 1,
            "group": "seo-content"
          },
          {
            "id": "meta-description",
            "weight": 1,
            "group": "seo-content"
          },
          {
            "id": "http-status-code",
            "weight": 1,
            "group": "seo-crawl"
          },
          {
            "id": "link-text",
            "weight": 1,
            "group": "seo-content"
          },
          {
            "id": "crawlable-anchors",
            "weight": 1,
            "group": "seo-crawl"
          },
          {
            "id": "is-crawlable",
            "weight": 1,
            "group": "seo-crawl"
          },
          {
            "id": "robots-txt",
            "weight": 1,
            "group": "seo-crawl"
          },
          {
            "id": "image-alt",
            "weight": 1,
            "group": "seo-content"
          },
          {
            "id": "hreflang",
            "weight": 1,
            "group": "seo-content"
          },
          {
            "id": "canonical",
            "weight": 1,
            "group": "seo-content"
          },
          {
            "id": "font-size",
            "weight": 1,
            "group": "seo-mobile"
          },
          {
            "id": "plugins",
            "weight": 1,
            "group": "seo-content"
          },
          {
            "id": "tap-targets",
            "weight": 1,
            "group": "seo-mobile"
          },
          {
            "id": "structured-data",
            "weight": 0
          }
        ]
      },
      "pwa": {
        "id": "pwa",
        "title": "PWA",
        "description": "These checks validate the aspects of a Progressive Web App. [Learn what makes a good Progressive Web App](https://web.dev/articles/pwa-checklist).",
        "score": 0.38,
        "manualDescription": "These checks are required by the baseline [PWA Checklist](https://web.dev/articles/pwa-checklist) but are not automatically checked by Lighthouse. They do not affect your score but it's important that you verify them manually.",
        "auditRefs": [
          {
            "id": "installable-manifest",
            "weight": 2,
            "group": "pwa-installable"
          },
          {
            "id": "splash-screen",
            "weight": 1,
            "group": "pwa-optimized"
          },
          {
            "id": "themed-omnibox",
            "weight": 1,
            "group": "pwa-optimized"
          },
          {
            "id": "content-width",
            "weight": 1,
            "group": "pwa-optimized"
          },
          {
            "id": "viewport",
            "weight": 2,
            "group": "pwa-optimized"
          },
          {
            "id": "maskable-icon",
            "weight": 1,
            "group": "pwa-optimized"
          },
          {
            "id": "pwa-cross-browser",
            "weight": 0
          },
          {
            "id": "pwa-page-transitions",
            "weight": 0
          },
          {
            "id": "pwa-each-page-has-url",
            "weight": 0
          }
        ]
      }
    },
    "categoryGroups": {
      "a11y-aria": {
        "title": "ARIA",
        "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
      },
      "budgets": {
        "title": "Budgets",
        "description": "Performance budgets set standards for the performance of your site."
      },
      "pwa-optimized": {
        "title": "PWA Optimized"
      },
      "a11y-language": {
        "title": "Internationalization and localization",
        "description": "These are opportunities to improve the interpretation of your content by users in different locales."
      },
      "pwa-installable": {
        "title": "Installable"
      },
      "diagnostics": {
        "title": "Diagnostics",
        "description": "More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
      },
      "seo-mobile": {
        "title": "Mobile Friendly",
        "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn how to make pages mobile-friendly](https://developers.google.com/search/mobile-sites/)."
      },
      "best-practices-general": {
        "title": "General"
      },
      "a11y-tables-lists": {
        "title": "Tables and lists",
        "description": "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
      },
      "best-practices-ux": {
        "title": "User Experience"
      },
      "a11y-color-contrast": {
        "title": "Contrast",
        "description": "These are opportunities to improve the legibility of your content."
      },
      "load-opportunities": {
        "title": "Opportunities",
        "description": "These suggestions can help your page load faster. They don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
      },
      "best-practices-browser-compat": {
        "title": "Browser Compatibility"
      },
      "seo-content": {
        "title": "Content Best Practices",
        "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
      },
      "a11y-best-practices": {
        "title": "Best practices",
        "description": "These items highlight common accessibility best practices."
      },
      "a11y-navigation": {
        "title": "Navigation",
        "description": "These are opportunities to improve keyboard navigation in your application."
      },
      "metrics": {
        "title": "Metrics"
      },
      "a11y-names-labels": {
        "title": "Names and labels",
        "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
      },
      "best-practices-trust-safety": {
        "title": "Trust and Safety"
      },
      "seo-crawl": {
        "title": "Crawling and Indexing",
        "description": "To appear in search results, crawlers need access to your app."
      },
      "a11y-audio-video": {
        "title": "Audio and video",
        "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
      }
    },
    "timing": {
      "total": 14417.599999999999
    },
    "i18n": {
      "rendererFormattedStrings": {
        "varianceDisclaimer": "Values are estimated and may vary. The [performance score is calculated](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) directly from these metrics.",
        "opportunityResourceColumnLabel": "Opportunity",
        "opportunitySavingsColumnLabel": "Estimated Savings",
        "errorMissingAuditInfo": "Report error: no audit information",
        "errorLabel": "Error!",
        "warningHeader": "Warnings: ",
        "passedAuditsGroupTitle": "Passed audits",
        "notApplicableAuditsGroupTitle": "Not applicable",
        "manualAuditsGroupTitle": "Additional items to manually check",
        "toplevelWarningsMessage": "There were issues affecting this run of Lighthouse:",
        "crcLongestDurationLabel": "Maximum critical path latency:",
        "crcInitialNavigation": "Initial Navigation",
        "lsPerformanceCategoryDescription": "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
        "labDataTitle": "Lab Data",
        "warningAuditsGroupTitle": "Passed audits but with warnings",
        "snippetExpandButtonLabel": "Expand snippet",
        "snippetCollapseButtonLabel": "Collapse snippet",
        "thirdPartyResourcesLabel": "Show 3rd-party resources",
        "runtimeDesktopEmulation": "Emulated Desktop",
        "runtimeMobileEmulation": "Emulated Moto G Power",
        "runtimeNoEmulation": "No emulation",
        "runtimeSettingsBenchmark": "Unthrottled CPU/Memory Power",
        "runtimeSettingsCPUThrottling": "CPU throttling",
        "runtimeSettingsDevice": "Device",
        "runtimeSettingsNetworkThrottling": "Network throttling",
        "runtimeSettingsUANetwork": "User agent (network)",
        "runtimeUnknown": "Unknown",
        "dropdownCopyJSON": "Copy JSON",
        "dropdownDarkTheme": "Toggle Dark Theme",
        "dropdownPrintExpanded": "Print Expanded",
        "dropdownPrintSummary": "Print Summary",
        "dropdownSaveGist": "Save as Gist",
        "dropdownSaveHTML": "Save as HTML",
        "dropdownSaveJSON": "Save as JSON",
        "dropdownViewer": "Open in Viewer",
        "footerIssue": "File an issue",
        "throttlingProvided": "Provided by environment",
        "calculatorLink": "See calculator.",
        "runtimeSettingsAxeVersion": "Axe version",
        "viewTreemapLabel": "View Treemap",
        "showRelevantAudits": "Show audits relevant to:"
      }
    },
    "stackPacks": [
      {
        "id": "wordpress",
        "title": "WordPress",
        "iconDataURL": "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.5 122.5\"><g fill=\"%232f3439\"><path d=\"M8.7 61.3c0 20.8 12.1 38.7 29.6 47.3l-25-68.7c-3 6.5-4.6 13.7-4.6 21.4zm88-2.7c0-6.5-2.3-11-4.3-14.5-2.7-4.3-5.2-8-5.2-12.3 0-4.8 3.7-9.3 8.9-9.3h.7a52.4 52.4 0 0 0-79.4 9.9h3.3c5.5 0 14-.6 14-.6 2.9-.2 3.2 4 .4 4.3 0 0-2.9.4-6 .5l19.1 57L59.7 59l-8.2-22.5c-2.8-.1-5.5-.5-5.5-.5-2.8-.1-2.5-4.5.3-4.3 0 0 8.7.7 13.9.7 5.5 0 14-.7 14-.7 2.8-.2 3.2 4 .3 4.3 0 0-2.8.4-6 .5l19 56.5 5.2-17.5c2.3-7.3 4-12.5 4-17z\"/><path d=\"m62.2 65.9-15.8 45.8a52.6 52.6 0 0 0 32.3-.9l-.4-.7zM107.4 36a49.6 49.6 0 0 1-3.6 24.2l-16.1 46.5A52.5 52.5 0 0 0 107.4 36z\"/><path d=\"M61.3 0a61.3 61.3 0 1 0 .1 122.7A61.3 61.3 0 0 0 61.3 0zm0 119.7a58.5 58.5 0 1 1 .1-117 58.5 58.5 0 0 1-.1 117z\"/></g></svg>",
        "descriptions": {
          "offscreen-images": "Install a [lazy-load WordPress plugin](https://wordpress.org/plugins/search/lazy+load/) that provides the ability to defer any offscreen images, or switch to a theme that provides that functionality. Also consider using [the AMP plugin](https://wordpress.org/plugins/amp/).",
          "unused-javascript": "Consider reducing, or switching, the number of [WordPress plugins](https://wordpress.org/plugins/) loading unused JavaScript in your page. To identify plugins that are adding extraneous JS, try running [code coverage](https://developer.chrome.com/docs/devtools/coverage/) in Chrome DevTools. You can identify the theme/plugin responsible from the URL of the script. Look out for plugins that have many scripts in the list which have a lot of red in code coverage. A plugin should only enqueue a script if it is actually used on the page.",
          "total-byte-weight": "Consider showing excerpts in your post lists (e.g. via the more tag), reducing the number of posts shown on a given page, breaking your long posts into multiple pages, or using a plugin to lazy-load comments.",
          "uses-long-cache-ttl": "Read about [Browser Caching in WordPress](https://wordpress.org/support/article/optimization/#browser-caching).",
          "uses-optimized-images": "Consider using an [image optimization WordPress plugin](https://wordpress.org/plugins/search/optimize+images/) that compresses your images while retaining quality.",
          "unused-css-rules": "Consider reducing, or switching, the number of [WordPress plugins](https://wordpress.org/plugins/) loading unused CSS in your page. To identify plugins that are adding extraneous CSS, try running [code coverage](https://developer.chrome.com/docs/devtools/coverage/) in Chrome DevTools. You can identify the theme/plugin responsible from the URL of the stylesheet. Look out for plugins that have many stylesheets in the list which have a lot of red in code coverage. A plugin should only enqueue a stylesheet if it is actually used on the page.",
          "render-blocking-resources": "There are a number of WordPress plugins that can help you [inline critical assets](https://wordpress.org/plugins/search/critical+css/) or [defer less important resources](https://wordpress.org/plugins/search/defer+css+javascript/). Beware that optimizations provided by these plugins may break features of your theme or plugins, so you will likely need to make code changes.",
          "uses-responsive-images": "Upload images directly through the [media library](https://wordpress.org/support/article/media-library-screen/) to ensure that the required image sizes are available, and then insert them from the media library or use the image widget to ensure the optimal image sizes are used (including those for the responsive breakpoints). Avoid using `Full Size` images unless the dimensions are adequate for their usage. [Learn More](https://wordpress.org/support/article/inserting-images-into-posts-and-pages/).",
          "server-response-time": "Themes, plugins, and server specifications all contribute to server response time. Consider finding a more optimized theme, carefully selecting an optimization plugin, and/or upgrading your server.",
          "modern-image-formats": "Consider using the [Performance Lab](https://wordpress.org/plugins/performance-lab/) plugin to automatically convert your uploaded JPEG images into WebP, wherever supported.",
          "efficient-animated-content": "Consider uploading your GIF to a service which will make it available to embed as an HTML5 video.",
          "uses-text-compression": "You can enable text compression in your web server configuration.",
          "unminified-javascript": "A number of [WordPress plugins](https://wordpress.org/plugins/search/minify+javascript/) can speed up your site by concatenating, minifying, and compressing your scripts. You may also want to use a build process to do this minification up front if possible.",
          "unminified-css": "A number of [WordPress plugins](https://wordpress.org/plugins/search/minify+css/) can speed up your site by concatenating, minifying, and compressing your styles. You may also want to use a build process to do this minification up-front if possible."
        }
      }
    ],
    "entities": [
      {
        "name": "sokada.co.uk",
        "isFirstParty": true,
        "isUnrecognized": true,
        "origins": [
          "https://www.sokada.co.uk"
        ]
      },
      {
        "name": "Other Google APIs/SDKs",
        "homepage": "https://developers.google.com/apis-explorer/#p/",
        "category": "utility",
        "origins": [
          "https://www.google.com"
        ]
      },
      {
        "name": "Google Tag Manager",
        "homepage": "https://marketingplatform.google.com/about/tag-manager/",
        "category": "tag-manager",
        "origins": [
          "https://www.googletagmanager.com"
        ]
      },
      {
        "name": "Google CDN",
        "homepage": "https://developers.google.com/speed/libraries/",
        "category": "cdn",
        "origins": [
          "https://www.gstatic.com"
        ]
      },
      {
        "name": "FontAwesome CDN",
        "homepage": "https://fontawesome.com/",
        "category": "cdn",
        "origins": [
          "https://use.fontawesome.com"
        ]
      },
      {
        "name": "Google Analytics",
        "homepage": "https://marketingplatform.google.com/about/analytics/",
        "category": "analytics",
        "origins": [
          "https://www.google-analytics.com"
        ]
      },
      {
        "name": "Google Fonts",
        "homepage": "https://fonts.google.com/",
        "category": "cdn",
        "origins": [
          "https://fonts.gstatic.com"
        ]
      }
    ],
    "fullPageScreenshot": {
      "screenshot": {
        "width": 412,
        "data": "data:image/webp;base64,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",
        "height": 5309
      },
      "nodes": {
        "1-110-LINK": {
          "right": 0,
          "height": 0,
          "width": 0,
          "top": 0,
          "left": 0,
          "bottom": 0
        },
        "1-74-A": {
          "bottom": 143,
          "left": 412,
          "width": 250,
          "top": 96,
          "right": 662,
          "height": 47
        },
        "1-3-A": {
          "top": 1105,
          "width": 332,
          "left": 40,
          "right": 372,
          "bottom": 1136,
          "height": 31
        },
        "page-7-::after": {
          "top": 323,
          "right": 132,
          "bottom": 325,
          "width": 75,
          "left": 57,
          "height": 2
        },
        "1-29-A": {
          "top": 0,
          "right": 0,
          "height": 0,
          "width": 0,
          "bottom": 0,
          "left": 0
        },
        "1-109-LINK": {
          "right": 0,
          "height": 0,
          "left": 0,
          "width": 0,
          "top": 0,
          "bottom": 0
        },
        "1-76-A": {
          "bottom": 239,
          "left": 412,
          "right": 662,
          "top": 192,
          "width": 250,
          "height": 47
        },
        "1-112-LINK": {
          "left": 0,
          "right": 0,
          "height": 0,
          "bottom": 0,
          "top": 0,
          "width": 0
        },
        "page-3-P": {
          "top": 350,
          "bottom": 438,
          "height": 88,
          "width": 298,
          "left": 57,
          "right": 355
        },
        "1-71-A": {
          "left": 162,
          "bottom": 533,
          "width": 250,
          "height": 47,
          "right": 412,
          "top": 486
        },
        "1-31-A": {
          "top": 0,
          "width": 0,
          "left": 0,
          "height": 0,
          "bottom": 0,
          "right": 0
        },
        "1-21-A": {
          "bottom": 438,
          "width": 298,
          "height": 30,
          "right": 355,
          "left": 57,
          "top": 408
        },
        "1-35-A": {
          "height": 0,
          "width": 0,
          "right": 0,
          "top": 0,
          "left": 0,
          "bottom": 0
        },
        "1-67-A": {
          "left": 162,
          "right": 412,
          "top": 294,
          "bottom": 341,
          "width": 250,
          "height": 47
        },
        "1-116-LINK": {
          "top": 0,
          "right": 0,
          "bottom": 0,
          "left": 0,
          "height": 0,
          "width": 0
        },
        "1-102-DIV": {
          "left": 2388,
          "right": 2488,
          "width": 100,
          "height": 100,
          "bottom": 3545,
          "top": 3445
        },
        "1-59-A": {
          "height": 29,
          "width": 372,
          "left": 20,
          "right": 392,
          "bottom": 5346,
          "top": 5317
        },
        "1-70-A": {
          "width": 250,
          "left": 162,
          "height": 47,
          "bottom": 485,
          "top": 438,
          "right": 412
        },
        "1-114-LINK": {
          "width": 0,
          "height": 0,
          "top": 0,
          "bottom": 0,
          "left": 0,
          "right": 0
        },
        "1-58-A": {
          "height": 69,
          "left": 258,
          "right": 353,
          "bottom": 5128,
          "width": 95,
          "top": 5059
        },
        "1-106-DIV": {
          "top": 3445,
          "height": 100,
          "right": 3976,
          "bottom": 3545,
          "left": 3876,
          "width": 100
        },
        "1-25-A": {
          "left": 0,
          "height": 0,
          "width": 0,
          "bottom": 0,
          "right": 0,
          "top": 0
        },
        "page-6-P": {
          "height": 84,
          "bottom": 886,
          "top": 802,
          "left": 40,
          "right": 372,
          "width": 332
        },
        "1-33-A": {
          "left": 0,
          "top": 0,
          "bottom": 0,
          "height": 0,
          "right": 0,
          "width": 0
        },
        "1-107-LINK": {
          "right": 0,
          "left": 0,
          "height": 0,
          "width": 0,
          "top": 0,
          "bottom": 0
        },
        "1-23-A": {
          "right": 0,
          "top": 0,
          "width": 0,
          "bottom": 0,
          "height": 0,
          "left": 0
        },
        "1-83-IMG": {
          "right": 0,
          "top": 0,
          "width": 0,
          "height": 0,
          "left": 0,
          "bottom": 0
        },
        "1-41-A": {
          "right": 318,
          "left": 94,
          "bottom": 2053,
          "top": 1990,
          "height": 63,
          "width": 223
        },
        "1-85-IMG": {
          "left": 0,
          "width": 0,
          "bottom": 0,
          "top": 0,
          "right": 0,
          "height": 0
        },
        "1-123-META": {
          "width": 0,
          "top": 0,
          "right": 0,
          "height": 0,
          "bottom": 0,
          "left": 0
        },
        "1-115-LINK": {
          "right": 0,
          "height": 0,
          "top": 0,
          "width": 0,
          "left": 0,
          "bottom": 0
        },
        "1-18-HTML": {
          "bottom": 5371,
          "left": 0,
          "right": 412,
          "height": 5371,
          "top": 0,
          "width": 412
        },
        "1-56-A": {
          "right": 154,
          "height": 69,
          "width": 95,
          "left": 59,
          "bottom": 5128,
          "top": 5059
        },
        "1-150-META": {
          "bottom": 0,
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0,
          "right": 0
        },
        "1-7-DIV": {
          "width": 412,
          "left": 0,
          "bottom": 3159,
          "top": 1417,
          "height": 1742,
          "right": 412
        },
        "1-57-A": {
          "right": 254,
          "left": 158,
          "height": 69,
          "top": 5059,
          "bottom": 5128,
          "width": 95
        },
        "1-15-P": {
          "right": 392,
          "left": 20,
          "bottom": 5346,
          "height": 113,
          "top": 5233,
          "width": 372
        },
        "1-118-LINK": {
          "right": 0,
          "width": 0,
          "height": 0,
          "top": 0,
          "bottom": 0,
          "left": 0
        },
        "1-66-A": {
          "width": 250,
          "top": 219,
          "right": 412,
          "height": 74,
          "bottom": 293,
          "left": 162
        },
        "1-52-A": {
          "left": 0,
          "height": 0,
          "right": 0,
          "bottom": 0,
          "top": 0,
          "width": 0
        },
        "1-139-META": {
          "left": 0,
          "top": 0,
          "right": 0,
          "bottom": 0,
          "width": 0,
          "height": 0
        },
        "1-17-H4": {
          "right": 355,
          "left": 57,
          "bottom": 4736,
          "width": 298,
          "height": 30,
          "top": 4706
        },
        "1-1-BODY": {
          "left": 0,
          "bottom": 5371,
          "width": 412,
          "right": 412,
          "top": 0,
          "height": 5371
        },
        "1-143-META": {
          "height": 0,
          "right": 0,
          "width": 0,
          "left": 0,
          "top": 0,
          "bottom": 0
        },
        "1-22-A": {
          "top": 30,
          "width": 170,
          "bottom": 86,
          "height": 56,
          "right": 190,
          "left": 20
        },
        "1-136-META": {
          "height": 0,
          "width": 0,
          "top": 0,
          "right": 0,
          "left": 0,
          "bottom": 0
        },
        "1-26-A": {
          "bottom": 0,
          "right": 0,
          "top": 0,
          "left": 0,
          "width": 0,
          "height": 0
        },
        "1-0-A": {
          "left": 40,
          "right": 372,
          "width": 332,
          "height": 61,
          "bottom": 969,
          "top": 908
        },
        "1-113-LINK": {
          "top": 0,
          "right": 0,
          "left": 0,
          "bottom": 0,
          "height": 0,
          "width": 0
        },
        "1-148-META": {
          "right": 0,
          "height": 0,
          "left": 0,
          "width": 0,
          "bottom": 0,
          "top": 0
        },
        "page-0-DIV": {
          "left": 0,
          "width": 412,
          "height": 496,
          "bottom": 496,
          "right": 412,
          "top": 0
        },
        "1-137-META": {
          "left": 0,
          "bottom": 0,
          "top": 0,
          "height": 0,
          "width": 0,
          "right": 0
        },
        "1-131-META": {
          "bottom": 0,
          "left": 0,
          "right": 0,
          "height": 0,
          "width": 0,
          "top": 0
        },
        "1-153-META": {
          "top": 0,
          "left": 0,
          "height": 0,
          "right": 0,
          "bottom": 0,
          "width": 0
        },
        "1-32-A": {
          "left": 0,
          "top": 0,
          "width": 0,
          "bottom": 0,
          "height": 0,
          "right": 0
        },
        "1-13-A": {
          "right": 355,
          "bottom": 5015,
          "height": 29,
          "width": 298,
          "left": 57,
          "top": 4986
        },
        "1-140-META": {
          "height": 0,
          "bottom": 0,
          "width": 0,
          "top": 0,
          "right": 0,
          "left": 0
        },
        "1-14-A": {
          "width": 298,
          "top": 5015,
          "left": 57,
          "bottom": 5044,
          "right": 355,
          "height": 29
        },
        "1-75-A": {
          "right": 662,
          "bottom": 191,
          "top": 144,
          "width": 250,
          "left": 412,
          "height": 47
        },
        "1-38-A": {
          "left": 0,
          "height": 0,
          "top": 0,
          "right": 0,
          "bottom": 0,
          "width": 0
        },
        "1-61-A": {
          "top": 48,
          "bottom": 95,
          "left": 412,
          "width": 250,
          "right": 662,
          "height": 47
        },
        "1-8-P": {
          "bottom": 1692,
          "height": 84,
          "top": 1608,
          "left": 57,
          "right": 355,
          "width": 298
        },
        "1-133-META": {
          "bottom": 0,
          "top": 0,
          "height": 0,
          "left": 0,
          "right": 0,
          "width": 0
        },
        "1-16-DIV": {
          "width": 412,
          "top": 5208,
          "bottom": 5371,
          "left": 0,
          "height": 163,
          "right": 412
        },
        "1-12-P": {
          "bottom": 4901,
          "right": 355,
          "height": 140,
          "left": 57,
          "width": 298,
          "top": 4761
        },
        "1-72-A": {
          "bottom": 608,
          "left": 162,
          "width": 250,
          "top": 534,
          "height": 74,
          "right": 412
        },
        "page-5-IMG": {
          "top": 30,
          "left": 20,
          "width": 170,
          "bottom": 77,
          "right": 190,
          "height": 47
        },
        "1-132-META": {
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "width": 0,
          "height": 0
        },
        "page-2-H2": {
          "left": 20,
          "top": 566,
          "height": 120,
          "right": 392,
          "bottom": 686,
          "width": 372
        },
        "1-81-IMG": {
          "width": 0,
          "height": 0,
          "right": 0,
          "bottom": 0,
          "top": 0,
          "left": 0
        },
        "1-124-META": {
          "left": 0,
          "right": 0,
          "bottom": 0,
          "height": 0,
          "width": 0,
          "top": 0
        },
        "1-155-META": {
          "width": 0,
          "left": 0,
          "right": 0,
          "bottom": 0,
          "height": 0,
          "top": 0
        },
        "1-96-DIV": {
          "top": 3445,
          "right": 256,
          "left": 156,
          "height": 100,
          "width": 100,
          "bottom": 3545
        },
        "1-103-DIV": {
          "height": 100,
          "top": 3445,
          "right": 2860,
          "width": 100,
          "bottom": 3545,
          "left": 2760
        },
        "1-69-A": {
          "width": 250,
          "right": 412,
          "left": 162,
          "top": 390,
          "bottom": 437,
          "height": 47
        },
        "1-2-P": {
          "top": 999,
          "height": 84,
          "width": 332,
          "bottom": 1083,
          "left": 40,
          "right": 372
        },
        "1-91-DIV": {
          "bottom": 496,
          "top": 0,
          "left": 0,
          "right": 412,
          "width": 412,
          "height": 496
        },
        "1-108-LINK": {
          "width": 0,
          "right": 0,
          "bottom": 0,
          "top": 0,
          "height": 0,
          "left": 0
        },
        "1-145-META": {
          "right": 0,
          "top": 0,
          "width": 0,
          "left": 0,
          "bottom": 0,
          "height": 0
        },
        "1-65-A": {
          "width": 250,
          "height": 47,
          "right": 412,
          "top": 171,
          "bottom": 218,
          "left": 162
        },
        "1-64-A": {
          "right": 412,
          "bottom": 170,
          "top": 96,
          "left": 162,
          "height": 74,
          "width": 250
        },
        "1-90-IMG": {
          "top": 4491,
          "right": 306,
          "height": 78,
          "bottom": 4569,
          "width": 200,
          "left": 106
        },
        "1-5-A": {
          "top": 1280,
          "height": 87,
          "right": 318,
          "width": 223,
          "left": 94,
          "bottom": 1367
        },
        "1-111-LINK": {
          "height": 0,
          "right": 0,
          "left": 0,
          "width": 0,
          "bottom": 0,
          "top": 0
        },
        "1-45-A": {
          "height": 32,
          "right": 382,
          "bottom": 3839,
          "width": 32,
          "left": 350,
          "top": 3807
        },
        "1-30-A": {
          "top": 0,
          "height": 0,
          "right": 0,
          "width": 0,
          "bottom": 0,
          "left": 0
        },
        "1-119-LINK": {
          "width": 0,
          "right": 0,
          "bottom": 0,
          "top": 0,
          "height": 0,
          "left": 0
        },
        "1-80-IMG": {
          "right": 0,
          "top": 0,
          "height": 0,
          "left": 0,
          "width": 0,
          "bottom": 0
        },
        "1-141-META": {
          "top": 0,
          "left": 0,
          "right": 0,
          "width": 0,
          "bottom": 0,
          "height": 0
        },
        "1-134-META": {
          "top": 0,
          "bottom": 0,
          "height": 0,
          "width": 0,
          "right": 0,
          "left": 0
        },
        "1-49-A": {
          "top": 0,
          "bottom": 0,
          "right": 0,
          "height": 0,
          "left": 0,
          "width": 0
        },
        "1-40-A": {
          "height": 31,
          "top": 741,
          "width": 332,
          "right": 372,
          "left": 40,
          "bottom": 772
        },
        "1-93-DIV": {
          "right": 392,
          "top": 2163,
          "height": 439,
          "left": 20,
          "width": 372,
          "bottom": 2602
        },
        "1-86-IMG": {
          "right": 0,
          "bottom": 0,
          "height": 0,
          "left": 0,
          "top": 0,
          "width": 0
        },
        "1-120-LINK": {
          "width": 0,
          "left": 0,
          "bottom": 0,
          "top": 0,
          "right": 0,
          "height": 0
        },
        "1-54-A": {
          "bottom": 0,
          "width": 0,
          "height": 0,
          "left": 0,
          "right": 0,
          "top": 0
        },
        "1-101-DIV": {
          "width": 100,
          "right": 2116,
          "height": 100,
          "bottom": 3545,
          "left": 2016,
          "top": 3445
        },
        "1-144-META": {
          "width": 0,
          "top": 0,
          "bottom": 0,
          "left": 0,
          "right": 0,
          "height": 0
        },
        "1-95-DIV": {
          "bottom": 3545,
          "left": -216,
          "right": -116,
          "height": 100,
          "top": 3445,
          "width": 100
        },
        "1-127-META": {
          "height": 0,
          "bottom": 0,
          "width": 0,
          "left": 0,
          "top": 0,
          "right": 0
        },
        "1-43-A": {
          "left": 94,
          "right": 318,
          "bottom": 2999,
          "top": 2936,
          "width": 223,
          "height": 63
        },
        "1-42-A": {
          "height": 63,
          "width": 223,
          "left": 94,
          "top": 2459,
          "bottom": 2522,
          "right": 318
        },
        "1-151-META": {
          "bottom": 0,
          "height": 0,
          "top": 0,
          "width": 0,
          "left": 0,
          "right": 0
        },
        "1-152-META": {
          "right": 0,
          "left": 0,
          "top": 0,
          "bottom": 0,
          "height": 0,
          "width": 0
        },
        "page-1-DIV": {
          "height": 921,
          "right": 412,
          "bottom": 1417,
          "left": 0,
          "top": 496,
          "width": 412
        },
        "1-146-META": {
          "width": 0,
          "right": 0,
          "height": 0,
          "left": 0,
          "top": 0,
          "bottom": 0
        },
        "1-117-LINK": {
          "top": 0,
          "left": 0,
          "bottom": 0,
          "height": 0,
          "width": 0,
          "right": 0
        },
        "1-55-A": {
          "right": 0,
          "top": 0,
          "width": 0,
          "left": 0,
          "height": 0,
          "bottom": 0
        },
        "1-104-DIV": {
          "top": 3445,
          "bottom": 3545,
          "width": 100,
          "left": 3132,
          "height": 100,
          "right": 3232
        },
        "1-138-META": {
          "width": 0,
          "height": 0,
          "bottom": 0,
          "left": 0,
          "top": 0,
          "right": 0
        },
        "1-130-META": {
          "width": 0,
          "bottom": 0,
          "right": 0,
          "left": 0,
          "top": 0,
          "height": 0
        },
        "1-34-A": {
          "bottom": 0,
          "right": 0,
          "width": 0,
          "height": 0,
          "top": 0,
          "left": 0
        },
        "1-88-IMG": {
          "right": 0,
          "left": 0,
          "width": 0,
          "bottom": 0,
          "height": 0,
          "top": 0
        },
        "1-89-IMG": {
          "left": 0,
          "top": 0,
          "width": 0,
          "height": 0,
          "right": 0,
          "bottom": 0
        },
        "1-4-P": {
          "left": 40,
          "height": 84,
          "bottom": 1250,
          "right": 372,
          "top": 1166,
          "width": 332
        },
        "1-98-DIV": {
          "left": 900,
          "bottom": 3545,
          "width": 100,
          "height": 100,
          "top": 3445,
          "right": 1000
        },
        "1-94-DIV": {
          "bottom": 3079,
          "width": 372,
          "left": 20,
          "height": 447,
          "right": 392,
          "top": 2632
        },
        "1-87-IMG": {
          "right": 0,
          "left": 0,
          "height": 0,
          "width": 0,
          "bottom": 0,
          "top": 0
        },
        "1-20-DIV": {
          "height": 496,
          "bottom": 496,
          "right": 412,
          "top": 0,
          "left": 0,
          "width": 412
        },
        "1-84-IMG": {
          "top": 0,
          "right": 0,
          "height": 0,
          "bottom": 0,
          "width": 0,
          "left": 0
        },
        "1-154-META": {
          "top": 0,
          "height": 0,
          "bottom": 0,
          "right": 0,
          "width": 0,
          "left": 0
        },
        "1-92-DIV": {
          "left": 20,
          "top": 1722,
          "height": 411,
          "right": 392,
          "width": 372,
          "bottom": 2133
        },
        "1-28-A": {
          "top": 0,
          "height": 0,
          "left": 0,
          "width": 0,
          "bottom": 0,
          "right": 0
        },
        "1-37-A": {
          "width": 0,
          "height": 0,
          "bottom": 0,
          "left": 0,
          "right": 0,
          "top": 0
        },
        "1-142-META": {
          "height": 0,
          "left": 0,
          "width": 0,
          "top": 0,
          "bottom": 0,
          "right": 0
        },
        "1-44-A": {
          "height": 32,
          "top": 3807,
          "width": 32,
          "bottom": 3839,
          "right": 62,
          "left": 30
        },
        "1-78-TEXTAREA": {
          "left": 0,
          "height": 0,
          "width": 0,
          "top": 0,
          "right": 0,
          "bottom": 0
        },
        "1-46-A": {
          "right": 0,
          "left": 0,
          "bottom": 0,
          "height": 0,
          "width": 0,
          "top": 0
        },
        "1-48-A": {
          "width": 0,
          "top": 0,
          "height": 0,
          "right": 0,
          "bottom": 0,
          "left": 0
        },
        "1-135-META": {
          "right": 0,
          "top": 0,
          "width": 0,
          "left": 0,
          "height": 0,
          "bottom": 0
        },
        "1-105-DIV": {
          "bottom": 3545,
          "height": 100,
          "top": 3445,
          "width": 100,
          "right": 3604,
          "left": 3504
        },
        "1-121-META": {
          "bottom": 0,
          "left": 0,
          "height": 0,
          "right": 0,
          "width": 0,
          "top": 0
        },
        "1-77-UL": {
          "right": 412,
          "top": 0,
          "width": 250,
          "height": 5309,
          "left": 162,
          "bottom": 5309
        },
        "1-11-P": {
          "width": 298,
          "top": 4592,
          "height": 84,
          "right": 355,
          "bottom": 4676,
          "left": 57
        },
        "1-79-IMG": {
          "bottom": 77,
          "left": 20,
          "right": 190,
          "height": 47,
          "top": 30,
          "width": 170
        },
        "1-36-A": {
          "left": 0,
          "bottom": 0,
          "right": 0,
          "height": 0,
          "top": 0,
          "width": 0
        },
        "1-147-META": {
          "bottom": 0,
          "right": 0,
          "top": 0,
          "width": 0,
          "left": 0,
          "height": 0
        },
        "1-27-A": {
          "left": 0,
          "width": 0,
          "height": 0,
          "top": 0,
          "right": 0,
          "bottom": 0
        },
        "1-47-A": {
          "right": 0,
          "left": 0,
          "top": 0,
          "bottom": 0,
          "height": 0,
          "width": 0
        },
        "1-122-META": {
          "width": 0,
          "left": 0,
          "top": 0,
          "right": 0,
          "bottom": 0,
          "height": 0
        },
        "1-39-A": {
          "height": 51,
          "top": 35,
          "bottom": 86,
          "width": 50,
          "left": 342,
          "right": 392
        },
        "1-53-A": {
          "height": 0,
          "top": 0,
          "left": 0,
          "right": 0,
          "bottom": 0,
          "width": 0
        },
        "1-6-STRONG": {
          "left": 108,
          "width": 197,
          "top": 1558,
          "right": 305,
          "bottom": 1587,
          "height": 29
        },
        "1-51-A": {
          "width": 0,
          "left": 0,
          "bottom": 0,
          "top": 0,
          "right": 0,
          "height": 0
        },
        "1-149-META": {
          "top": 0,
          "height": 0,
          "left": 0,
          "right": 0,
          "width": 0,
          "bottom": 0
        },
        "page-4-SPAN": {
          "right": 329,
          "left": 180,
          "width": 149,
          "height": 28,
          "bottom": 685,
          "top": 657
        },
        "1-10-DIV": {
          "top": 4281,
          "width": 412,
          "right": 412,
          "bottom": 5208,
          "height": 927,
          "left": 0
        },
        "1-60-A": {
          "left": 412,
          "right": 662,
          "top": 0,
          "bottom": 47,
          "height": 47,
          "width": 250
        },
        "1-82-IMG": {
          "right": 0,
          "width": 0,
          "left": 0,
          "bottom": 0,
          "height": 0,
          "top": 0
        },
        "1-126-META": {
          "right": 0,
          "top": 0,
          "width": 0,
          "left": 0,
          "bottom": 0,
          "height": 0
        },
        "1-68-A": {
          "height": 47,
          "left": 162,
          "top": 342,
          "right": 412,
          "width": 250,
          "bottom": 389
        },
        "1-73-A": {
          "bottom": 656,
          "top": 609,
          "left": 162,
          "right": 412,
          "height": 47,
          "width": 250
        },
        "1-19-H1": {
          "width": 298,
          "top": 160,
          "right": 355,
          "height": 165,
          "left": 57,
          "bottom": 325
        },
        "1-99-DIV": {
          "height": 100,
          "right": 1372,
          "width": 100,
          "top": 3445,
          "left": 1272,
          "bottom": 3545
        },
        "1-97-DIV": {
          "bottom": 3545,
          "left": 528,
          "top": 3445,
          "right": 628,
          "height": 100,
          "width": 100
        },
        "1-50-A": {
          "bottom": 0,
          "left": 0,
          "top": 0,
          "right": 0,
          "height": 0,
          "width": 0
        },
        "1-128-META": {
          "right": 0,
          "top": 0,
          "height": 0,
          "left": 0,
          "width": 0,
          "bottom": 0
        },
        "1-62-A": {
          "height": 47,
          "right": 412,
          "top": 0,
          "width": 250,
          "bottom": 47,
          "left": 162
        },
        "1-125-META": {
          "top": 0,
          "width": 0,
          "bottom": 0,
          "right": 0,
          "height": 0,
          "left": 0
        },
        "1-63-A": {
          "right": 412,
          "top": 48,
          "bottom": 95,
          "width": 250,
          "height": 47,
          "left": 162
        },
        "1-9-STRONG": {
          "right": 305,
          "height": 36,
          "top": 4373,
          "bottom": 4409,
          "left": 64,
          "width": 241
        },
        "1-129-META": {
          "right": 0,
          "width": 0,
          "top": 0,
          "left": 0,
          "bottom": 0,
          "height": 0
        },
        "1-100-DIV": {
          "right": 1744,
          "top": 3445,
          "bottom": 3545,
          "height": 100,
          "width": 100,
          "left": 1644
        },
        "1-24-A": {
          "right": 0,
          "bottom": 0,
          "left": 0,
          "height": 0,
          "width": 0,
          "top": 0
        }
      }
    }
  }