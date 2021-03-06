# Footer

> The footer component is a required navigational pattern for IBM.com that
> displays consistently at the bottom of each page.

## Getting started

Here's a quick example to get you started.

```scss
// yourapplication.scss
@import '@carbon/type/scss/font-face/mono';
@import '@carbon/type/scss/font-face/sans';
@include carbon--font-face-mono();
@include carbon--font-face-sans();
```

> 💡 Only import font's once per usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from '@carbon/ibmdotcom-react';
import 'yourapplication.scss';
import '@carbon/ibmdotcom-styles/scss/components/footer/index.scss';

function App() {
  return <Footer />;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

> 💡 Don't forget to import the footer styles from
> [@carbon/ibmdotcom-styles](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/packages/styles).

#### Feature Flags

To utilize the following features, set the following variable's to `true` within
your `.env` file or your application build settings.

```
DDS_FOOTER_LOCALE_BUTTON=true
```

> See
> [feature-flags.md](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/packages/react/docs/feature-flags.md)
> and
> [.env.example](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/packages/react/.env.example)
> for more information

## Props

| Name         | Required | Data Type | Default Value | Description                        |
| ------------ | -------- | --------- | ------------- | ---------------------------------- |
| `navigation` | NO       | Object    | null          | Navigation data object for Footer  |
| `type`       | NO       | String    | null          | Type of Footer. See below `types`. |

### types (optional)

| Name    | Description                                                                 |
| ------- | --------------------------------------------------------------------------- |
| `tall`  | Default footer variant includes additional navigation taking up more space. |
| `short` | Short footer variant reduces space by removing any additional navigation.   |

## Stable selectors

| Name                          | Description |
| ----------------------------- | ----------- |
| `dds--footer`                 | Component   |
| `dds--footer-nav`             | Component   |
| `dds--footer-nav-group`       | Component   |
| `dds--footer-nav-group__link` | Interactive |
| `dds--footer-logo`            | Component   |
| `dds--footer-logo__link`      | Interactive |
| `dds--footer-locale-btn`      | Interactive |
| `dds--legal-nav`              | Component   |
| `dds--legal-nav__link`        | Interactive |
| `dds--locale-modal`           | Component   |

## CORS Proxy

This component makes cross-origin requests to `www.ibm.com`, which will require
a cors proxy to be configured to make successful calls from a lower environment.

A cors proxy can be configured using the following
[environment variable](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/packages/react/docs/environment-variables.md):

`CORS_PROXY=https://myproxy.com/`

## Server Side Rendering

To server side render the footer, the `Translation` service call needs to be
made to retrieve navigation links. Make sure to pass in the `lc` and `cc` values
as shown in the example below.

```javascript
import { TranslationAPI } from '@carbon/ibmdotcom-services';
import { Footer } from '@carbon/ibmdotcom-react';

server.get('/', async (req, res) => {
  const response = await TranslationAPI.getTranslation({ lc: 'en', cc: 'us' });
  const body = renderToString(<Footer navigation={response} />);
  res.send(body);
});
```

## 🙌 Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our
[Contributing Guide](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/.github/CONTRIBUTING.md)!
👀

## 📝 License

Licensed under the
[Apache 2.0 License](https://github.com/carbon-design-system/ibm-dotcom-library/blob/master/LICENSE).
