import { __decorate, __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var DetectScreenRecording = /** @class */ (function (_super) {
    __extends(DetectScreenRecording, _super);
    function DetectScreenRecording() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectScreenRecording.prototype.onCaptureStatusChanged = function (successCallback, errorCallback) { return cordova(this, "onCaptureStatusChanged", {}, arguments); };
    DetectScreenRecording.prototype.isCaptured = function (successCallback, errorCallback) { return cordova(this, "isCaptured", {}, arguments); };
    DetectScreenRecording.pluginName = "DetectScreenRecording";
    DetectScreenRecording.plugin = "cordova-plugin-detect-screen-recording";
    DetectScreenRecording.pluginRef = "DetectScreenRecording";
    DetectScreenRecording.repo = "https://github.com/nmlcharleschan/cordova-plugin-react-detect-screen-recording.git";
    DetectScreenRecording.install = "";
    DetectScreenRecording.installVariables = [];
    DetectScreenRecording.platforms = ["iOS"];
    DetectScreenRecording = __decorate([
        Injectable()
    ], DetectScreenRecording);
    return DetectScreenRecording;
}(IonicNativePlugin));
export { DetectScreenRecording };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldGVjdC1zY3JlZW4tcmVjb3JkaW5nL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQzs7SUFrQ2pGLHlDQUFpQjs7OztJQUcxRCxzREFBc0IsYUFBQyxlQUFtQyxFQUFFLGFBQWlDO0lBSzdGLDBDQUFVLGFBQUMsZUFBbUMsRUFBRSxhQUFpQzs7Ozs7Ozs7SUFSdEUscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQjtnQ0E5Q2xDO0VBOEMyQyxpQkFBaUI7U0FBL0MscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgRGV0ZWN0IFNjcmVlbiBSZWNvcmRpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERldGVjdFNjcmVlblJlY29yZGluZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV0ZWN0LXNjcmVlbi1yZWNvcmRpbmcnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldGVjdFNjcmVlblJlY29yZGluZzogRGV0ZWN0U2NyZWVuUmVjb3JkaW5nKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5kZXRlY3RTY3JlZW5SZWNvcmRpbmcuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEZXRlY3RTY3JlZW5SZWNvcmRpbmcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kZXRlY3Qtc2NyZWVuLXJlY29yZGluZycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdEZXRlY3RTY3JlZW5SZWNvcmRpbmcnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdnaXQrc3NoOi8vZ2l0QGdpdGxhYi5jb206bmV0LW1ha2Vycy9jb3Jkb3ZhLXBsdWdpbi1yZWFjdC1kZXRlY3Qtc2NyZWVuLXJlY29yZGluZy5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGV0ZWN0U2NyZWVuUmVjb3JkaW5nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgb25DYXB0dXJlU3RhdHVzQ2hhbmdlZChzdWNjZXNzQ2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IGFueSwgZXJyb3JDYWxsYmFjaz86IChlcnI6IGFueSkgPT4gYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBpc0NhcHR1cmVkKHN1Y2Nlc3NDYWxsYmFjazogKGRhdGE6IGFueSkgPT4gYW55LCBlcnJvckNhbGxiYWNrPzogKGVycjogYW55KSA9PiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==