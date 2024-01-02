import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Detect Screen Recording
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { DetectScreenRecording } from '@ionic-native/detect-screen-recording';
 *
 *
 * constructor(private detectScreenRecording: DetectScreenRecording) { }
 *
 * ...
 *
 *
 * this.detectScreenRecording.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class DetectScreenRecordingOriginal extends IonicNativePlugin {
    onCaptureStatusChanged(successCallback: (data: any) => any, errorCallback?: (err: any) => any): Promise<any>;
    isCaptured(successCallback: (data: any) => any, errorCallback?: (err: any) => any): Promise<any>;
}

export declare const DetectScreenRecording: DetectScreenRecordingOriginal;