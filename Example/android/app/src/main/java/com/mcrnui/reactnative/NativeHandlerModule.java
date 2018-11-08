package com.mcrnui.reactnative;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.mcrnui.base.MainApplication;
import com.mcrnui.service.DownloadService;
import com.mcrnui.utils.AppUtil;
import com.mcrnui.utils.SharedPreferencesUtil;

import static com.mcrnui.service.DownloadService.KEY_TYPE;
import static com.mcrnui.service.DownloadService.KEY_URL;
import static com.mcrnui.service.DownloadService.TYPE_DEBUG_HOTFIX;
import static com.mcrnui.service.DownloadService.TYPE_PROD_APK;

/**
 * Created by bobsha on 2018/7/27.
 */

public class NativeHandlerModule extends ReactContextBaseJavaModule {
    public NativeHandlerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return this.getClass().getSimpleName();
    }

    @ReactMethod
    public void downloadApk(String url) {
        getReactApplicationContext().startService(new Intent(MainApplication.getInstance(), DownloadService.class)
                .putExtra(KEY_TYPE, TYPE_PROD_APK)
                .putExtra(KEY_URL, url));
    }

    @ReactMethod
    public void restartApp() {
        AppUtil.restartApp();
    }
}
