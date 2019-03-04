import * as React from 'react';
interface INetworkDetectProps {
    loadingAnimation?: JSX.Element;
}
interface INetworkDetectState {
    isOffline: boolean;
}
declare class NetworkDetect extends React.Component<INetworkDetectProps, INetworkDetectState> {
    private static loadingAnimation;
    constructor(props: INetworkDetectProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): {} | null | undefined;
    private getLoadingAnimation;
    private updateNetworkState;
}
export default NetworkDetect;
