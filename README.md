# animated-dots
The library that enables the use of animated ellipsis in React.

## Default Example

```javascript
import React from 'react';
import { AnimatedDots } from 'animated-dots';

export const Example = () => {
  return (
    <div>
      Example<AnimatedDots/>
    </div>
  );
};
```

![example](https://github.com/privetigor999/animated-dots/assets/106771492/ec35c872-8865-42f9-b0fb-5ab70a524b36)

## Custom Example
```javascript
import React from 'react';
import { AnimatedDots } from 'animated-dots';

export const Example = () => {
  return (
    <div>
      Example<AnimatedDots symbol='!' interval={300}/>
    </div>
  );
};
```

![custom-example](https://github.com/privetigor999/animated-dots/assets/106771492/81591623-6753-444e-8ba6-4aa00fe1bb8f)

## Options

| Option      | Default     | type |Description              |
|-------------|-------------|------|-------------------------|
| symbol      | .           |string|Symbol to be animated    |
| interval    | 700         |number|Interval at which the number of symbols will change      |


