# Network Detect
NetworkDetect is a React component that detects changes in network connectivity and shows a customizable UI when the user is offline.

## Installation
`npm install network-detect`

## Usage

### Basic usage
This will show a default UI when the user is offline.
```
import React from 'react';
import NetworkDetect from 'network-detect';
 
class MyApp extends React.Component {
  render() {
    return (
      <NetworkDetect>
        <div>
          This will show when the user is online.
        </div>
      </NetworkDetect>
    );
  }
}
```

### Customization
You can also customize the offline UI.
The `loadingAnimation` prop accepts any `JSX.Element`.

```
import React from 'react';
import NetworkDetect from 'network-detect';
 
class MyApp extends React.Component {
  render() {
    return (
      <NetworkDetect loadingAnimation={<img src='./loading.png' />}>
        <div>
          This will show when the user is online.
        </div>
      </NetworkDetect>
    );
  }
}
```