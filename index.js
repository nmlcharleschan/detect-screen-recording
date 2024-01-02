var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var DetectScreenRecordingOriginal = /** @class */ (function (_super) {
    __extends(DetectScreenRecordingOriginal, _super);
    function DetectScreenRecordingOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectScreenRecordingOriginal.prototype.onCaptureStatusChanged = function (successCallback, errorCallback) { return cordova(this, "onCaptureStatusChanged", {}, arguments); };
    DetectScreenRecordingOriginal.prototype.isCaptured = function (successCallback, errorCallback) { return cordova(this, "isCaptured", {}, arguments); };
    DetectScreenRecordingOriginal.pluginName = "DetectScreenRecording";
    DetectScreenRecordingOriginal.plugin = "cordova-plugin-detect-screen-recording";
    DetectScreenRecordingOriginal.pluginRef = "DetectScreenRecording";
    DetectScreenRecordingOriginal.repo = "git+ssh://git@gitlab.com:net-makers/cordova-plugin-react-detect-screen-recording.git";
    DetectScreenRecordingOriginal.install = "";
    DetectScreenRecordingOriginal.installVariables = [];
    DetectScreenRecordingOriginal.platforms = ["iOS"];
    return DetectScreenRecordingOriginal;
}(IonicNativePlugin));
var DetectScreenRecording = new DetectScreenRecordingOriginal();
export { DetectScreenRecording };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RldGVjdC1zY3JlZW4tcmVjb3JkaW5nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQWtDakYseUNBQWlCOzs7O0lBRzFELHNEQUFzQixhQUFDLGVBQW1DLEVBQUUsYUFBaUM7SUFLN0YsMENBQVUsYUFBQyxlQUFtQyxFQUFFLGFBQWlDOzs7Ozs7OztnQ0F0RG5GO0VBOEMyQyxpQkFBaUI7U0FBL0MscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgRGV0ZWN0IFNjcmVlbiBSZWNvcmRpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IERldGVjdFNjcmVlblJlY29yZGluZyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGV0ZWN0LXNjcmVlbi1yZWNvcmRpbmcnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRldGVjdFNjcmVlblJlY29yZGluZzogRGV0ZWN0U2NyZWVuUmVjb3JkaW5nKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5kZXRlY3RTY3JlZW5SZWNvcmRpbmcuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdEZXRlY3RTY3JlZW5SZWNvcmRpbmcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kZXRlY3Qtc2NyZWVuLXJlY29yZGluZycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdEZXRlY3RTY3JlZW5SZWNvcmRpbmcnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdnaXQrc3NoOi8vZ2l0QGdpdGxhYi5jb206bmV0LW1ha2Vycy9jb3Jkb3ZhLXBsdWdpbi1yZWFjdC1kZXRlY3Qtc2NyZWVuLXJlY29yZGluZy5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGV0ZWN0U2NyZWVuUmVjb3JkaW5nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgb25DYXB0dXJlU3RhdHVzQ2hhbmdlZChzdWNjZXNzQ2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IGFueSwgZXJyb3JDYWxsYmFjaz86IChlcnI6IGFueSkgPT4gYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBpc0NhcHR1cmVkKHN1Y2Nlc3NDYWxsYmFjazogKGRhdGE6IGFueSkgPT4gYW55LCBlcnJvckNhbGxiYWNrPzogKGVycjogYW55KSA9PiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cbiJdfQ==