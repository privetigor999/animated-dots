# animated-dots
The library that enables the use of animated ellipsis in React.

## Default Example

```javascript
import React from 'react';
import { AnimatedDots } from 'animated-dots';

export const Example = () => {
  return (
    <div>
      Default example<AnimatedDots />
    </div>
  );
};
```

![default](https://github.com/privetigor999/animated-dots/assets/106771492/a5d67d22-b257-4c1c-8a60-4c66358c097d)


## Custom Example
```javascript
import React from 'react';
import { AnimatedDots } from 'animated-dots';

export const Example = () => {
  return (
    <div>
      Custom example<AnimatedDots symbol='!' interval={300} />
    </div>
  );
};
```

![custom](https://github.com/privetigor999/animated-dots/assets/106771492/0c4b7169-aaff-42b6-87b0-d7a4e7faaf7f)


## Options

| option      | default     | type |description              |
|-------------|-------------|------|-------------------------|
| symbol      | .           |string|Symbol to be animated    |
| interval    | 700         |number|Interval at which the number of symbols will change      |


