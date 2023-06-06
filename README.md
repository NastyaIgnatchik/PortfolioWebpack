## Getting Started

### Start on Windows

- Run commands:

```bash
npm run dev

npm run build
```

## Stack

- React 18.2.0
- LESS (using.module.less)
- Typescript 
- Webpack

### Sctructure of project

```bash

└── /public - main html page
└── /src
    ├── /assets - images/fonts
    ├── /components - page components
    ├── /pages 
    ├── /layouts - pages routing
    └── /types - declare modules
└── /app - skeleton pages
└── /index - assembly entry point
└── /styles - global CSS

```

### Sctructure of components

```bash
.
└── /src
    └── /pages
        └── /page directory
                ├── [PageName].tsx
                └── pageStyles.module.less
```

# Naming

​For component folders use camelCase (`nameComponent`)
and PascalCase for components:

```bash
const ComponentName = () => {}
```

​For style folders and className use camelCase:

```bash
className = 'redButton'
```

Always use camelCase for variables:

```bash
let counterOfNumbers = 0;
```

# Code styling

### Don't pass event object to a function

It makes the code more readable and shorter.

#### Bad

```bash
onClick=({(e) =>handler(e)})
```

#### Good

```bash
onClick=({function()})
```

### Import in Order

The rule of thumb is to keep the import order like this:

- Side effect imports (for example styles )
- Modules prefixed with node
- Packages
- Absolute imports and other imports
- Relative imports
- exports (exports with from)

#### Bad

```bash
import React from "react";
import Button from "../Button";

import styles from "./styles.css";
import type { User } from "../../types";
import { getUser } from "../../api";

import PropTypes from "prop-types";
import classnames from "classes";
import { truncate, formatNumber } from "../../utils";
```

#### Good

```bash
import classnames from "classes";
import PropTypes from "prop-types";
import React from "react";

import { getUser } from "../../api";
import type { User } from "../../types";
import { formatNumber, truncate } from "../../utils";
import Button from "../Button";
import styles from "./styles.css";
```

### Quotes

#### Bad

```bash
<Foo bar='bar' />

```

#### Good

```bash
<Foo bar="bar" />

```

### Self-Closing Tags

#### Bad

```bash
<SomeComponent variant="stuff"></SomeComponent>
```

#### Good

```bash
<SomeComponent variant="stuff" />

```

### Use only buttons as buttons

Don't use non-clickable components (div,span) for buttons:

#### Bad

```bash
<div onClick(()={clickHandler})>button</div>
```

#### Good

```bash
<button onClick(()={clickHandler})>button</buttton>
```
